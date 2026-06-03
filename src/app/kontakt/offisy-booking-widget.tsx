"use client";

import { useEffect, useRef, useState } from "react";
import { contact } from "../content";

const OFFISY_API_KEY = "60f36d12-789b-4af5-8f68-ddb1cb390d11";
const OFFISY_SCRIPT_SRC = "https://buchen.offisy.at/api/booking/v1/app.js";

type AngularElement = {
  injector?: () => unknown;
};

type AngularLike = {
  bootstrap?: (element: Element, modules: string[]) => unknown;
  element?: (element: Element) => AngularElement;
  module?: (name: string) => unknown;
};

declare global {
  interface Window {
    angular?: AngularLike;
    offisy?: {
      apiKey?: string;
      course?: string | null;
      location?: string | null;
      user?: string | null;
    };
  }
}

function hasOffisyModule() {
  const angularModule = window.angular?.module;

  if (!angularModule) {
    return false;
  }

  try {
    angularModule("OffisyCalendar");
    return true;
  } catch {
    return false;
  }
}

function loadOffisyScript() {
  document
    .querySelectorAll<HTMLScriptElement>(`script[src="${OFFISY_SCRIPT_SRC}"]`)
    .forEach((script) => script.remove());

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = OFFISY_SCRIPT_SRC;
    script.dataset.offisyBooking = "true";
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener("error", () => reject(), { once: true });
    document.head.appendChild(script);
  });
}

export function OffisyBookingWidget() {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"error" | "loading" | "ready">(
    "loading",
  );

  useEffect(() => {
    const calendar = calendarRef.current;

    if (!calendar) {
      return undefined;
    }

    let cancelled = false;
    const loadTimeout = window.setTimeout(() => {
      if (!cancelled && calendar.children.length === 0) {
        setStatus("error");
      }
    }, 15000);
    const observer = new MutationObserver(() => {
      if (calendar.children.length > 0) {
        setStatus("ready");
      }
    });

    observer.observe(calendar, { childList: true });
    calendar.innerHTML = "";
    calendar.setAttribute("ng-app", "OffisyCalendar");
    calendar.setAttribute("ng-controller", "OffisyCalendarController");
    setStatus("loading");

    window.offisy = {
      apiKey: OFFISY_API_KEY,
      course: null,
      location: null,
      user: null,
    };

    const bootstrapCalendar = () => {
      if (cancelled || !window.angular?.bootstrap) {
        return;
      }

      const injector = window.angular.element?.(calendar).injector?.();

      if (injector) {
        if (calendar.children.length > 0) {
          setStatus("ready");
        }
        return;
      }

      window.angular.bootstrap(calendar, ["OffisyCalendar"]);

      if (calendar.children.length > 0) {
        setStatus("ready");
      }
    };

    loadOffisyScript()
      .then(() => {
        window.setTimeout(() => {
          if (calendar.children.length > 0) {
            setStatus("ready");
            return;
          }

          if (hasOffisyModule()) {
            bootstrapCalendar();
          }
        }, 0);
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
      window.clearTimeout(loadTimeout);
      observer.disconnect();
      calendar.innerHTML = "";
    };
  }, []);

  return (
    <div className="min-h-[520px] rounded-[2rem] border border-[#B9CFDD] bg-white p-3 shadow-[0_18px_48px_rgba(13,39,68,0.08)] sm:p-5">
      <div id="offisyCalendar" ref={calendarRef} />
      {status === "loading" ? (
        <p className="p-6 text-center text-sm font-medium text-[#53728A]">
          Terminbuchung wird geladen ...
        </p>
      ) : null}
      {status === "error" ? (
        <p className="p-6 text-center text-sm font-medium text-[#53728A]">
          Die Terminbuchung konnte nicht geladen werden. Bitte kontaktieren Sie
          mich direkt unter{" "}
          <a className="font-semibold text-[#0D2744]" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}

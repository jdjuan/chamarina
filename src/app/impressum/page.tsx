import { PageHero } from "../components";
import { contact } from "../content";

export default function ImpressumPage() {
  return (
    <main>
      <PageHero eyebrow="Impressum" title="Angaben zur Praxis">
        <p>
          Rechtliche Informationen zur Anbieterin dieser Website.
        </p>
      </PageHero>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#f3fbf8] p-8 sm:p-10">
          <div className="grid gap-10">
            <section>
              <h2 className="text-2xl font-semibold text-[#14363b]">
                Medieninhaberin und Verantwortliche
              </h2>
              <p className="mt-4 leading-8 text-[#506a70]">
                Maria Chamarina
                <br />
                Klinische Psychologin
                <br />
                {contact.address}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#14363b]">
                Kontakt
              </h2>
              <p className="mt-4 leading-8 text-[#506a70]">
                E-Mail:{" "}
                <a className="text-[#d7192a]" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
                <br />
                Telefon:{" "}
                <a
                  className="text-[#d7192a]"
                  href={`tel:${contact.phone.replaceAll(" ", "")}`}
                >
                  {contact.phone}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#14363b]">
                Berufsbezeichnung
              </h2>
              <p className="mt-4 leading-8 text-[#506a70]">
                Klinische Psychologin, verliehen in Österreich. Zuständige
                Aufsichtsbehörde und berufsrechtliche Grundlagen richten sich
                nach den geltenden österreichischen Bestimmungen für
                Psycholog:innen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#14363b]">
                Haftung für Inhalte
              </h2>
              <p className="mt-4 leading-8 text-[#506a70]">
                Die Inhalte dieser Website wurden sorgfältig erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
                jedoch keine Gewähr übernommen werden.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

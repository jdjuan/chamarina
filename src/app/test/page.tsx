import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: {
    absolute: "Farbvariante Startseite | Praxis Chamarina",
  },
  description:
    "Interne Farbvariante der Startseite mit staerkerer Anwendung der Praxisfarben.",
  robots: {
    index: false,
    follow: false,
  },
};

export default Home;

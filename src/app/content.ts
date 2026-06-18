export const siteUrl = "www.psychologie-chamarina.at";

export const contact = {
  email: "kontakt@psychologie-chamarina.at",
  phone: "+43 665 67243426",
  whatsapp: "https://wa.me/4366567243426",
  addressLine: "Fischerstiege 10/14",
  address: "Fischerstiege 10/14, 1010 Wien",
};

export const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/themen", label: "Themen & Schwerpunkte" },
  { href: "/diagnostik", label: "Diagnostik" },
  { href: "/ablauf-kosten", label: "Ablauf & Kosten" },
  { href: "/praxis", label: "Praxis & Anfahrt" },
  { href: "/kontakt", label: "Kontakt" },
];

export const homeContent = {
  title: "Klinisch-psychologische Behandlung & Diagnostik in Wien",
  subtitle:
    "Unterstützung bei Angst, Zwang, Depression, Beziehungsthemen, Sexualität und anderen psychischen Belastungen.",
  button: "kostenloses Erstgespräch",
  welcomeTitle: "Schön, dass Sie hier sind!",
  intro:
    "Ich bin klinische Psychologin und biete psychologische Therapie sowie diagnostische Abklärung für Erwachsene in Wien an.",
  supportIntro: "In meiner Praxis begleite ich Menschen unter anderem bei:",
  supportTopics: [
    "Angst und Panikattacken",
    "Zwangsgedanken und Zwangshandlungen",
    "Depression und Erschöpfung",
    "Selbstwert- und Beziehungsthemen",
    "Sexualität und sexuelle Funktionsstörungen",
  ],
  principle:
    "Mir ist wichtig, dass psychologische Unterstützung verständlich, transparent und individuell bleibt: ohne unnötige Distanz, aber mit fachlicher Klarheit.",
  diagnosticsTitle: "Diagnostik",
  diagnosticsText:
    "Zeitnahe diagnostische Abklärung und klinisch-psychologische Diagnostik für Erwachsene.",
  settingTitle: "Praxis und Setting",
  settingItems: ["Wien, 1. Bezirk", "online oder vor Ort"],
  closing:
    "Wenn Sie das Gefühl haben, dass ein Gespräch hilfreich sein könnte, können Sie gerne ein kostenloses Erstgespräch vereinbaren.",
};

export const supportTopics = homeContent.supportTopics;

export const aboutContent = {
  title: "Über mich",
  workTitle: "Wie ich arbeite",
  workParagraphs: [
    "Ich bin ein offener und direkter Mensch. In meiner Arbeit dürfen Humor und Leichtigkeit genauso Platz haben wie ernste Themen.",
    "Ursprünglich komme ich aus St. Petersburg und habe später einige Zeit in Japan gelebt. Unterschiedliche Menschen, Lebensrealitäten und kulturelle Perspektiven kennenzulernen, empfinde ich bis heute als bereichernd, persönlich wie beruflich.",
    "Besonders wichtig ist mir, gemeinsam individuelle Lösungen zu finden. Auch wenn sich Probleme ähneln, ist der passende Weg oft unterschiedlich. Mich interessiert dabei nicht nur das Symptom, sondern auch der Mensch dahinter: wie jemand denkt, fühlt, Beziehungen erlebt und welche Erfahrungen geprägt haben.",
    "Psychologische Arbeit ist für mich oft ein bisschen wie Detektivarbeit. Schritt für Schritt verstehen, was hilfreich ist, was fehlt und welcher nächste Schritt möglich ist.",
  ],
  educationTitle: "Beruflicher Hintergrund",
};

export const educationItems = [
  "Studium der Ostasienwissenschaften und Germanistik an der Ruprecht-Karls-Universität in Heidelberg, Deutschland",
  "Studium der Psychologie an der Universität Wien, Schwerpunkt Klinisch- und Gesundheitspsychologie",
  "Mitarbeit bei der Österreichischen Autistenhilfe während des Studiums",
  "Forschungsmitarbeit an der Universität Wien im Stress-Lab während des Studiums",
  "Ausbildung klinische Psychologie (Wiener Akademie für klinische Psychologie)",
  "Ausbildung Sexualtherapie (Österreichische Gesellschaft für Sexualwissenschaften)",
  "Seit 2022 angestellt bei Phobius Phobiezentrum Wien",
  "Seit 2026 selbstständig in eigener Praxis",
];

export type TopicCategory =
  | "angst"
  | "zwang"
  | "depression"
  | "selbstwert"
  | "beziehung"
  | "sexualitaet";

export type TopicDetail = {
  slug: string;
  title: string;
  category: TopicCategory;
  summary: string;
  detail: string[];
  examplesLabel?: string;
  examples?: string[];
};

export const topicCategoryDetails: Record<
  TopicCategory,
  {
    title: string;
    eyebrow: string;
    treatmentFocus: string[];
  }
> = {
  angst: {
    title: "Angst",
    eyebrow: "Angst und Vermeidung verstehen",
    treatmentFocus: [
      "Auslöser, Körpersymptome und Sicherheitsverhalten einordnen",
      "Vermeidung schrittweise abbauen",
      "wieder mehr Handlungsspielraum im Alltag entwickeln",
    ],
  },
  zwang: {
    title: "Zwang",
    eyebrow: "Zwangsgedanken und Rituale einordnen",
    treatmentFocus: [
      "den Kreislauf aus Angst, Zweifel und kurzfristiger Beruhigung verstehen",
      "mehr Abstand zu belastenden Gedanken aufbauen",
      "Rituale oder Kontrollverhalten schrittweise verändern",
    ],
  },
  depression: {
    title: "Depression",
    eyebrow: "Stimmung, Energie und Alltag stabilisieren",
    treatmentFocus: [
      "belastende Gedanken und Rückzugsmuster erkennen",
      "kleine, realistische Schritte für den Alltag entwickeln",
      "Selbstkritik, Erschöpfung und Überforderung besser einordnen",
    ],
  },
  selbstwert: {
    title: "Selbstwert",
    eyebrow: "Den Blick auf sich selbst verändern",
    treatmentFocus: [
      "den inneren Kritiker und alte Bewertungsmuster verstehen",
      "eigene Bedürfnisse, Grenzen und Stärken klarer wahrnehmen",
      "einen wohlwollenderen Umgang mit sich selbst einüben",
    ],
  },
  beziehung: {
    title: "Bindung, Beziehung und Partnerschaft",
    eyebrow: "Beziehungsmuster besser verstehen",
    treatmentFocus: [
      "wiederkehrende Dynamiken in Beziehungen sichtbar machen",
      "Nähe, Distanz, Grenzen und Kommunikation reflektieren",
      "konkrete nächste Schritte für belastende Beziehungssituationen entwickeln",
    ],
  },
  sexualitaet: {
    title: "Sexualität",
    eyebrow: "Offen und wertfrei über Sexualität sprechen",
    treatmentFocus: [
      "Scham, Druck, Unsicherheit oder körperliche Reaktionen einordnen",
      "Bedürfnisse und Grenzen verständlicher machen",
      "Sexualität im eigenen Tempo und ohne Bewertung betrachten",
    ],
  },
};

export const topicDetails: TopicDetail[] = [
  {
    slug: "sozialphobie-soziale-angststoerung",
    title: "Sozialphobie / Soziale Angststörung",
    category: "angst",
    summary:
      "Starke Angst, von anderen negativ bewertet, kritisiert oder abgelehnt zu werden.",
    detail: [
      "Soziale Angst kann sich in Gesprächen, Gruppen, beruflichen Situationen oder beim Kennenlernen zeigen. Häufig steht die Sorge im Vordergrund, beobachtet, bewertet oder bloßgestellt zu werden.",
      "In der Behandlung geht es darum, diese Befürchtungen genauer zu verstehen, Vermeidung und Sicherheitsverhalten zu erkennen und soziale Situationen wieder mit mehr Sicherheit zu erleben.",
    ],
  },
  {
    slug: "panikattacken",
    title: "Panikattacken",
    category: "angst",
    summary:
      "Plötzliche intensive Angst mit starken körperlichen Symptomen.",
    detail: [
      "Panikattacken können sehr plötzlich auftreten und mit Herzrasen, Atemnot, Schwindel, Zittern oder dem Gefühl von Kontrollverlust verbunden sein.",
      "Hilfreich ist oft, die körperlichen Angstsymptome besser einzuordnen und Strategien zu entwickeln, um in solchen Momenten wieder Orientierung und Sicherheit zu gewinnen.",
    ],
  },
  {
    slug: "panikstoerung",
    title: "Panikstörung",
    category: "angst",
    summary:
      "Wiederkehrende Panikattacken und Angst vor weiteren Attacken.",
    detail: [
      "Bei einer Panikstörung entsteht häufig ein Kreislauf aus Panikattacken, Angst vor der nächsten Attacke und zunehmender Beobachtung des eigenen Körpers.",
      "Gemeinsam kann erarbeitet werden, wie dieser Kreislauf aufrechterhalten wird und wie der Alltag wieder weniger von der Angst vor Panik bestimmt wird.",
    ],
  },
  {
    slug: "agoraphobie",
    title: "Agoraphobie",
    category: "angst",
    summary:
      "Angst und entsprechend Vermeidung vor Orten oder Situationen, aus denen Flucht schwierig erscheint.",
    detail: [
      "Agoraphobie zeigt sich häufig in öffentlichen Verkehrsmitteln, Menschenmengen, weiten Plätzen, Warteschlangen oder Situationen, in denen Hilfe schwer erreichbar erscheint.",
      "Im Mittelpunkt steht meist die Frage, wie vermiedene Situationen wieder schrittweise zugänglicher werden können, ohne sich dabei zu überfordern.",
    ],
  },
  {
    slug: "emetophobie",
    title: "Emetophobie",
    category: "angst",
    summary: "Ausgeprägte Angst vor Erbrechen oder Übelkeit.",
    detail: [
      "Emetophobie kann zu starker Kontrolle von Essen, Körperempfindungen, Reisen, sozialen Situationen oder Kontakt mit kranken Menschen führen.",
      "In der Behandlung geht es darum, Angst, Ekel, Kontrollverhalten und Vermeidung besser zu verstehen und den Alltag Schritt für Schritt weniger einschränken zu lassen.",
    ],
  },
  {
    slug: "spezifische-phobien",
    title: "Spezifische Phobien",
    category: "angst",
    summary:
      "Starke Angst vor bestimmten Objekten oder Situationen, zum Beispiel Spinnen, enge Räume, Tiere oder andere Auslöser.",
    detail: [
      "Spezifische Phobien beziehen sich auf klar erkennbare Auslöser und können trotzdem sehr belastend sein, wenn sie den Alltag, Reisen, Arbeit oder Freizeit einschränken.",
      "Ein wichtiger Schritt ist, die Angstreaktion und das Vermeidungsverhalten nachvollziehbar zu machen und einen passenden Umgang mit dem jeweiligen Auslöser zu entwickeln.",
    ],
  },
  {
    slug: "generalisierte-angststoerung",
    title: "Generalisierte Angststörung (GAS)",
    category: "angst",
    summary:
      "Anhaltende und schwer kontrollierbare Sorgen über viele Lebensbereiche.",
    detail: [
      "Bei einer generalisierten Angststörung kreisen Sorgen häufig um Gesundheit, Familie, Arbeit, Zukunft, Sicherheit oder Verantwortung.",
      "Gemeinsam kann es darum gehen, den Umgang mit Unsicherheit zu verändern, gedankliche Warnsignale einzuordnen und wieder mehr Ruhe in den Alltag zu bringen.",
    ],
  },
  {
    slug: "krankheitsangst",
    title: "Krankheitsangst",
    category: "angst",
    summary:
      "Starke Sorge, ernsthaft krank zu sein oder zu werden.",
    detail: [
      "Krankheitsangst kann mit häufigem Kontrollieren, Googeln, Rückversicherungen oder wiederholten Arztbesuchen verbunden sein, ohne dass die Sorge langfristig wirklich nachlässt.",
      "In der Behandlung wird der Kreislauf aus Körperbeobachtung, Angst, Kontrolle und erneuter Unsicherheit verständlicher und veränderbarer.",
    ],
  },
  {
    slug: "gruebeln-und-sorgen",
    title: "Grübeln und Sorgen",
    category: "angst",
    summary:
      "Belastende Gedankenschleifen, die sich immer wieder um Probleme oder mögliche Gefahren drehen.",
    detail: [
      "Grübeln und Sorgen wirken oft wie der Versuch, Kontrolle oder Sicherheit zu gewinnen. Gleichzeitig können sie erschöpfen und Probleme größer erscheinen lassen.",
      "Hilfreich kann sein, verschiedene Arten von Gedanken zu unterscheiden, den Umgang mit Unsicherheit zu verändern und wieder Abstand zu belastenden Schleifen zu bekommen.",
    ],
  },
  {
    slug: "zwangsgedanken",
    title: "Zwangsgedanken",
    category: "zwang",
    summary:
      "Unerwünschte Gedanken, Bilder oder Impulse, die sich schwer kontrollieren lassen.",
    detail: [
      "Zwangsgedanken können sich sehr fremd, bedrohlich oder beschämend anfühlen. Oft entsteht der Druck, absolute Gewissheit zu bekommen oder den Gedanken sofort loswerden zu müssen.",
      "In der Behandlung geht es nicht darum, Gedanken zu verbieten, sondern den Umgang mit ihnen zu verändern und die Angst vor ihrer Bedeutung zu verringern.",
    ],
    examples: [
      "Angst, jemandem zu schaden",
      "Zweifel, etwas vergessen zu haben",
      "Angst vor Keimen oder Verunreinigung",
      "Unerwünschte sexuelle Gedanken",
      "Religiöse oder moralische Zweifel",
      "Bedürfnis nach absoluter Gewissheit",
      "Befürchtung, etwas Falsches gesagt oder getan zu haben",
    ],
    examplesLabel: "Zum Beispiel:",
  },
  {
    slug: "zwangshandlungen",
    title: "Zwangshandlungen",
    category: "zwang",
    summary:
      "Wiederholte Verhaltensweisen oder mentale Rituale, die dazu dienen, Angst, Unsicherheit oder Anspannung zu reduzieren.",
    detail: [
      "Zwangshandlungen können äußerlich sichtbar sein oder innerlich ablaufen. Sie bringen kurzfristig Erleichterung, verstärken langfristig aber oft Zweifel und Anspannung.",
      "Gemeinsam kann erarbeitet werden, welche Funktion die Rituale haben und wie der Umgang mit Unsicherheit schrittweise freier werden kann.",
    ],
    examples: [
      "Wiederholtes Kontrollieren",
      "Häufiges Waschen oder Reinigen",
      "Ordnen und Symmetrie herstellen",
      "Wiederholtes Nachfragen",
      "Zählen oder Wiederholen bestimmter Wörter",
      "Gedanken „neutralisieren“",
    ],
    examplesLabel: "Beispiele:",
  },
  {
    slug: "antriebslosigkeit",
    title: "Antriebslosigkeit",
    category: "depression",
    summary:
      "Selbst einfache Aufgaben fühlen sich anstrengend oder überwältigend an.",
    detail: [
      "Antriebslosigkeit kann dazu führen, dass Alltagsaufgaben, Entscheidungen oder soziale Kontakte unverhältnismäßig schwer wirken.",
      "In der Behandlung kann es darum gehen, Druck zu reduzieren, Aufgaben in machbare Schritte zu übersetzen und wieder kleine Erfahrungen von Wirksamkeit aufzubauen.",
    ],
  },
  {
    slug: "niedergeschlagene-stimmung",
    title: "Niedergeschlagene Stimmung",
    category: "depression",
    summary:
      "Anhaltende Traurigkeit, Leere oder Hoffnungslosigkeit.",
    detail: [
      "Niedergeschlagene Stimmung kann sich als Traurigkeit, innere Leere, Gereiztheit oder Gefühl von Sinnlosigkeit zeigen.",
      "Gemeinsam wird geschaut, welche Belastungen, Gedanken und Muster die Stimmung beeinflussen und welche Schritte wieder mehr Stabilität ermöglichen.",
    ],
  },
  {
    slug: "interessenverlust",
    title: "Interessenverlust",
    category: "depression",
    summary:
      "Dinge, die früher Freude bereitet haben, wirken gleichgültig.",
    detail: [
      "Interessenverlust kann verunsichern, weil bekannte Quellen von Freude, Nähe oder Motivation plötzlich kaum noch erreichbar scheinen.",
      "In der Behandlung kann es hilfreich sein, Rückzug und Überforderung zu verstehen und behutsam wieder Kontakt zu Aktivitäten, Menschen oder Bedürfnissen aufzubauen.",
    ],
  },
  {
    slug: "erschoepfung-und-muedigkeit",
    title: "Erschöpfung und Müdigkeit",
    category: "depression",
    summary:
      "Anhaltender Energiemangel trotz ausreichender Ruhe.",
    detail: [
      "Erschöpfung kann körperlich und emotional spürbar sein und auch dann bestehen bleiben, wenn objektiv genug geschlafen oder pausiert wurde.",
      "Gemeinsam kann eingeordnet werden, welche Faktoren Energie kosten und wie ein realistischer Umgang mit Belastbarkeit, Ruhe und Aktivität aussehen kann.",
    ],
  },
  {
    slug: "selbstzweifel-und-schuldgefuehle",
    title: "Selbstzweifel und Schuldgefühle",
    category: "depression",
    summary:
      "Übermäßige Selbstkritik oder das Gefühl, nicht gut genug zu sein.",
    detail: [
      "Selbstzweifel und Schuldgefühle können sehr hartnäckig sein und den Blick auf eigene Stärken, Bedürfnisse oder Grenzen verdecken.",
      "In der Behandlung geht es darum, diese Bewertungen zu prüfen, ihren Ursprung zu verstehen und einen weniger abwertenden Umgang mit sich selbst zu entwickeln.",
    ],
  },
  {
    slug: "gruebeln-depression",
    title: "Grübeln",
    category: "depression",
    summary:
      "Wiederkehrende belastende Gedanken, die sich nur schwer stoppen lassen.",
    detail: [
      "Depressives Grübeln dreht sich häufig um Fehler, Schuld, Versagen, Zukunftslosigkeit oder die Frage, warum es einem nicht besser geht.",
      "Hilfreich kann sein, Grübeln von hilfreichem Nachdenken zu unterscheiden und neue Möglichkeiten zu finden, mit belastenden Gedanken umzugehen.",
    ],
  },
  {
    slug: "schlafstoerungen",
    title: "Schlafstörungen",
    category: "depression",
    summary:
      "Schwierigkeiten beim Ein- oder Durchschlafen oder vermehrtes Schlafbedürfnis.",
    detail: [
      "Schlafstörungen können Depressionen verstärken und gleichzeitig durch innere Anspannung, Grübeln oder Erschöpfung aufrechterhalten werden.",
      "Gemeinsam kann betrachtet werden, welche Gedanken, Gewohnheiten und Belastungen den Schlaf beeinflussen und welche Veränderungen realistisch sind.",
    ],
  },
  {
    slug: "burnout",
    title: "Burnout",
    category: "depression",
    summary:
      "Erschöpfung, Überforderung und verminderte Belastbarkeit im Zusammenhang mit chronischem Stress.",
    detail: [
      "Burnout entsteht häufig im Zusammenhang mit länger andauernder Überforderung, hoher Verantwortung, fehlender Erholung oder dem Gefühl, dauerhaft funktionieren zu müssen.",
      "In der Behandlung kann es darum gehen, Warnsignale ernst zu nehmen, Belastungsgrenzen zu verstehen und wieder tragfähigere Strukturen aufzubauen.",
    ],
  },
  {
    slug: "wochenbettdepression",
    title: "Wochenbettdepression",
    category: "depression",
    summary:
      "Depressive Symptome nach der Geburt eines Kindes.",
    detail: [
      "Eine Wochenbettdepression kann nach der Geburt auftreten und mit Traurigkeit, Erschöpfung, Schuldgefühlen, Angst oder innerer Distanz verbunden sein.",
      "Im geschützten Rahmen kann es darum gehen, die Belastung einzuordnen, Scham zu reduzieren und passende Unterstützung für diese Lebensphase zu finden.",
    ],
  },
  {
    slug: "selbstzweifel",
    title: "Selbstzweifel",
    category: "selbstwert",
    summary: "Das Gefühl, nicht gut genug zu sein.",
    detail: [
      "Selbstzweifel können Entscheidungen, Beziehungen und berufliche Situationen prägen und dazu führen, dass eigene Erfolge kaum ankommen.",
      "Gemeinsam kann angeschaut werden, woher diese Zweifel kommen und wie ein stabilerer Blick auf die eigenen Fähigkeiten entstehen kann.",
    ],
  },
  {
    slug: "perfektionismus",
    title: "Perfektionismus",
    category: "selbstwert",
    summary:
      "Hohe Ansprüche an sich selbst und Angst vor Fehlern.",
    detail: [
      "Perfektionismus kann Sicherheit geben, aber auch zu Druck, Aufschieben, Erschöpfung und großer Angst vor Kritik führen.",
      "In der Behandlung geht es darum, hilfreiche Ansprüche von überfordernden Regeln zu unterscheiden und mehr Spielraum im Umgang mit Fehlern zu entwickeln.",
    ],
  },
  {
    slug: "selbstkritik",
    title: "Selbstkritik",
    category: "selbstwert",
    summary:
      "Ein strenger innerer Kritiker und wenig Nachsicht mit sich selbst.",
    detail: [
      "Selbstkritik kann wie ein innerer Kommentar wirken, der Fehler, Schwächen oder Bedürfnisse sofort abwertet.",
      "Gemeinsam kann dieser innere Kritiker besser verstanden und ein freundlicherer, realistischerer Umgang mit sich selbst aufgebaut werden.",
    ],
  },
  {
    slug: "unsicherheit",
    title: "Unsicherheit",
    category: "selbstwert",
    summary:
      "Schwierigkeiten, den eigenen Fähigkeiten zu vertrauen.",
    detail: [
      "Unsicherheit kann dazu führen, sich stark an anderen zu orientieren, Entscheidungen zu vermeiden oder eigene Wahrnehmungen immer wieder infrage zu stellen.",
      "In der Behandlung kann es darum gehen, eigene Maßstäbe klarer zu entwickeln und Vertrauen in die eigene Einschätzung zu stärken.",
    ],
  },
  {
    slug: "abgrenzung",
    title: "Abgrenzung",
    category: "selbstwert",
    summary:
      "Probleme, Nein zu sagen oder eigene Bedürfnisse zu vertreten.",
    detail: [
      "Abgrenzung fällt oft schwer, wenn die Sorge vor Konflikt, Enttäuschung oder Ablehnung sehr groß ist.",
      "Gemeinsam kann geübt werden, Bedürfnisse wahrzunehmen, Grenzen klarer zu formulieren und Schuldgefühle besser einzuordnen.",
    ],
  },
  {
    slug: "people-pleasing",
    title: "People Pleasing",
    category: "selbstwert",
    summary:
      "Starkes Bedürfnis, es anderen recht zu machen.",
    detail: [
      "People Pleasing kann kurzfristig Harmonie sichern, langfristig aber zu Erschöpfung, Ärger oder dem Gefühl führen, sich selbst zu verlieren.",
      "In der Behandlung geht es darum, die Angst hinter dem ständigen Anpassen zu verstehen und mehr Raum für eigene Bedürfnisse zu schaffen.",
    ],
  },
  {
    slug: "vergleich-mit-anderen",
    title: "Vergleich mit anderen",
    category: "selbstwert",
    summary:
      "Das Gefühl, anderen ständig unterlegen zu sein.",
    detail: [
      "Vergleiche können den Blick stark auf vermeintliche Defizite lenken und das eigene Leben kleiner oder unzureichend erscheinen lassen.",
      "Gemeinsam kann erarbeitet werden, welche Maßstäbe dabei wirken und wie ein eigener, weniger abwertender Bezugspunkt entstehen kann.",
    ],
  },
  {
    slug: "schamgefuehle",
    title: "Schamgefühle",
    category: "selbstwert",
    summary:
      "Das Empfinden, fehlerhaft, unzulänglich oder nicht liebenswert zu sein.",
    detail: [
      "Scham betrifft oft nicht nur einzelne Situationen, sondern den gesamten Blick auf sich selbst.",
      "In der Behandlung kann es darum gehen, Scham behutsam verstehbar zu machen und Erfahrungen von Akzeptanz und Selbstmitgefühl zu stärken.",
    ],
  },
  {
    slug: "selbstfuersorge",
    title: "Selbstfürsorge",
    category: "selbstwert",
    summary:
      "Schwierigkeiten, die eigenen Bedürfnisse ernst zu nehmen.",
    detail: [
      "Selbstfürsorge kann schwerfallen, wenn Leistung, Verantwortung oder die Bedürfnisse anderer dauerhaft wichtiger erscheinen.",
      "Gemeinsam kann entwickelt werden, wie Bedürfnisse früher wahrgenommen und im Alltag realistischer berücksichtigt werden können.",
    ],
  },
  {
    slug: "selbstvertrauen",
    title: "Selbstvertrauen",
    category: "selbstwert",
    summary:
      "Mehr Sicherheit im Umgang mit Herausforderungen entwickeln.",
    detail: [
      "Selbstvertrauen entsteht oft nicht durch perfekte Sicherheit, sondern durch wiederholte Erfahrungen, schwierige Situationen bewältigen zu können.",
      "In der Behandlung kann es darum gehen, vorhandene Ressourcen sichtbar zu machen und neue Schritte so zu planen, dass sie machbar bleiben.",
    ],
  },
  {
    slug: "bindungsaengste",
    title: "Bindungsängste",
    category: "beziehung",
    summary:
      "Angst vor Nähe, Abhängigkeit oder Verletzlichkeit.",
    detail: [
      "Bindungsängste können dazu führen, Nähe zu suchen und gleichzeitig Abstand herzustellen, sobald Beziehungen verbindlicher werden.",
      "Gemeinsam kann betrachtet werden, welche Erfahrungen und Schutzstrategien dahinterstehen und wie Nähe in einem sicheren Maß möglich werden kann.",
    ],
  },
  {
    slug: "verlustangst",
    title: "Verlustangst",
    category: "beziehung",
    summary:
      "Starke Angst vor Trennung, Zurückweisung oder Verlassenwerden.",
    detail: [
      "Verlustangst kann Beziehungen stark belasten, wenn Unsicherheit, Kontrolle, Rückversicherung oder starke Anspannung den Alltag prägen.",
      "In der Behandlung geht es darum, Auslöser und Beziehungsmuster zu verstehen und mehr innere Sicherheit aufzubauen.",
    ],
  },
  {
    slug: "konflikte-in-beziehungen",
    title: "Konflikte in Beziehungen",
    category: "beziehung",
    summary:
      "Wiederkehrende Streitigkeiten oder festgefahrene Muster.",
    detail: [
      "Konflikte wiederholen sich oft, wenn Bedürfnisse, Verletzungen oder Erwartungen nicht gut ausgesprochen oder verstanden werden können.",
      "Gemeinsam kann sichtbar werden, welche Dynamik immer wieder entsteht und welche konkreten Veränderungen in Kommunikation und Verhalten möglich sind.",
    ],
  },
  {
    slug: "kommunikation",
    title: "Kommunikation",
    category: "beziehung",
    summary:
      "Schwierigkeiten, Bedürfnisse, Wünsche oder Grenzen auszudrücken.",
    detail: [
      "Kommunikation kann besonders schwierig werden, wenn Angst vor Streit, Zurückweisung oder Überforderung mitschwingt.",
      "In der Behandlung kann es darum gehen, klarer zu formulieren, besser zuzuhören und schwierige Gespräche vorbereiteter zu führen.",
    ],
  },
  {
    slug: "eifersucht",
    title: "Eifersucht",
    category: "beziehung",
    summary:
      "Belastende Sorgen um die Beziehung oder den Partner.",
    detail: [
      "Eifersucht kann mit Angst, Kontrolle, Vergleichen oder starken Bildern im Kopf verbunden sein und Beziehungen sehr unter Druck setzen.",
      "Gemeinsam wird geschaut, welche Bedürfnisse, Unsicherheiten und Erfahrungen dahinterliegen und wie Vertrauen wieder mehr Raum bekommen kann.",
    ],
  },
  {
    slug: "trennung-und-liebeskummer",
    title: "Trennung und Liebeskummer",
    category: "beziehung",
    summary:
      "Unterstützung bei Verlust, Trennung oder Scheidung.",
    detail: [
      "Trennung und Liebeskummer können Trauer, Wut, Schuld, Sehnsucht, Angst oder Orientierungslosigkeit auslösen.",
      "Im Gespräch kann es darum gehen, den Verlust zu verarbeiten, wieder Halt zu finden und den eigenen Weg nach der Trennung zu sortieren.",
    ],
  },
  {
    slug: "naehe-und-distanz",
    title: "Nähe und Distanz",
    category: "beziehung",
    summary:
      "Ein ausgewogenes Verhältnis zwischen Verbundenheit und Eigenständigkeit finden.",
    detail: [
      "Nähe und Distanz werden in Beziehungen oft unterschiedlich erlebt. Das kann zu Rückzug, Druck, Missverständnissen oder Verletzungen führen.",
      "Gemeinsam kann erarbeitet werden, welche Bedürfnisse dahinterstehen und wie ein passenderes Gleichgewicht aussehen kann.",
    ],
  },
  {
    slug: "beziehungsmuster",
    title: "Beziehungsmuster",
    category: "beziehung",
    summary:
      "Wiederkehrende Dynamiken in Partnerschaften verstehen und verändern.",
    detail: [
      "Beziehungsmuster können sich über verschiedene Partnerschaften hinweg wiederholen, auch wenn man sich eigentlich etwas anderes wünscht.",
      "In der Behandlung kann es darum gehen, diese Muster und ihre Entstehung zu verstehen und neue Reaktionsmöglichkeiten zu entwickeln.",
    ],
  },
  {
    slug: "grenzen-setzen",
    title: "Grenzen setzen",
    category: "beziehung",
    summary:
      "Eigene Bedürfnisse wahrnehmen und vertreten.",
    detail: [
      "Grenzen zu setzen kann schwer sein, wenn man Angst hat, andere zu enttäuschen, Konflikte auszulösen oder zu viel zu verlangen.",
      "Gemeinsam kann geübt werden, Grenzen klarer wahrzunehmen, auszusprechen und mit den Reaktionen anderer umzugehen.",
    ],
  },
  {
    slug: "dating-und-kennenlernen",
    title: "Dating und Kennenlernen",
    category: "beziehung",
    summary:
      "Unsicherheiten und Herausforderungen in neuen Beziehungen.",
    detail: [
      "Dating kann Freude machen, aber auch Unsicherheit, Druck, Vergleiche, Angst vor Ablehnung oder alte Beziehungsmuster aktivieren.",
      "Im Gespräch kann sortiert werden, welche Erwartungen, Grenzen und Bedürfnisse wichtig sind und wie Kennenlernen stimmiger gestaltet werden kann.",
    ],
  },
  {
    slug: "sexuelle-lustlosigkeit",
    title: "Sexuelle Lustlosigkeit",
    category: "sexualitaet",
    summary:
      "Vermindertes sexuelles Verlangen oder fehlende Lust.",
    detail: [
      "Sexuelle Lustlosigkeit kann viele Gründe haben, etwa Stress, Beziehungsthemen, Druck, körperliche Faktoren, Scham oder belastende Erfahrungen.",
      "In der Behandlung geht es darum, ohne Bewertung zu verstehen, was Lust hemmt oder ermöglicht und welcher Umgang damit für Sie passend ist.",
    ],
  },
  {
    slug: "sexuelle-unsicherheit",
    title: "Sexuelle Unsicherheit",
    category: "sexualitaet",
    summary:
      "Fragen, Ängste oder Scham rund um Sexualität.",
    detail: [
      "Sexuelle Unsicherheit kann sich auf Wünsche, Grenzen, Körper, Erfahrungen, Fantasien oder Erwartungen beziehen.",
      "Ein offener Gesprächsraum kann helfen, Scham zu reduzieren, Fragen zu sortieren und einen selbstbestimmteren Umgang mit Sexualität zu finden.",
    ],
  },
  {
    slug: "sexuelle-funktionsstoerungen",
    title: "Sexuelle Funktionsstörungen",
    category: "sexualitaet",
    summary:
      "Schwierigkeiten beispielsweise mit Erregung, Orgasmus oder Erektion.",
    detail: [
      "Sexuelle Funktionsstörungen können mit Leistungsdruck, Angst, Beziehungsthemen, Stress, körperlichen Faktoren oder belastenden Erfahrungen zusammenhängen.",
      "Im Gespräch kann es darum gehen, Druck herauszunehmen, Zusammenhänge zu verstehen und hilfreiche nächste Schritte zu entwickeln.",
    ],
  },
  {
    slug: "schmerzen-beim-sex",
    title: "Schmerzen beim Sex",
    category: "sexualitaet",
    summary:
      "Körperliche Beschwerden während oder nach sexuellen Aktivitäten.",
    detail: [
      "Schmerzen beim Sex können körperliche und psychische Faktoren haben und sollten ernst genommen werden.",
      "Neben medizinischer Abklärung kann psychologische Unterstützung helfen, Angst, Anspannung, Beziehungsthemen oder den Umgang mit Grenzen besser zu verstehen.",
    ],
  },
  {
    slug: "unterschiedliche-beduerfnisse",
    title: "Unterschiedliche Bedürfnisse",
    category: "sexualitaet",
    summary:
      "Konflikte durch verschiedene Wünsche oder Erwartungen in der Partnerschaft.",
    detail: [
      "Unterschiedliche sexuelle Bedürfnisse können Druck, Rückzug, Schuldgefühle oder Streit auslösen.",
      "Gemeinsam kann es darum gehen, Wünsche und Grenzen aussprechbarer zu machen und einen respektvollen Umgang mit Unterschieden zu finden.",
    ],
  },
  {
    slug: "sexuelle-orientierung-und-identitaet",
    title: "Sexuelle Orientierung und Identität",
    category: "sexualitaet",
    summary:
      "Begleitung bei Selbstfindungsprozessen, Unsicherheiten, Coming-out oder dem Umgang mit dem sozialen Umfeld.",
    detail: [
      "Fragen zu sexueller Orientierung und Identität können mit Neugier, Unsicherheit, Scham, Angst vor Reaktionen oder dem Wunsch nach mehr Klarheit verbunden sein.",
      "Der Gesprächsraum ist wertfrei und kann dabei unterstützen, eigene Wahrnehmungen ernst zu nehmen und passende Schritte im Umgang mit dem Umfeld zu finden.",
    ],
  },
  {
    slug: "nicht-monogame-beziehungen",
    title: "Nicht-monogame Beziehungen",
    category: "sexualitaet",
    summary:
      "Herausforderungen und Chancen offener oder polyamorer Beziehungsformen.",
    detail: [
      "Nicht-monogame Beziehungen können Fragen zu Kommunikation, Grenzen, Eifersucht, Sicherheit, Vereinbarungen und gesellschaftlichen Bewertungen mit sich bringen.",
      "In der Behandlung kann es darum gehen, Bedürfnisse klarer zu verstehen und Beziehungsformen offen, reflektiert und wertfrei zu besprechen.",
    ],
  },
  {
    slug: "kink-und-bdsm",
    title: "Kink und BDSM",
    category: "sexualitaet",
    summary:
      "Offener und wertfreier Umgang mit kinkbezogenen Themen.",
    detail: [
      "Kink- und BDSM-bezogene Themen können mit Lust, Identität, Grenzen, Kommunikation, Scham oder Unsicherheit verbunden sein.",
      "Ein wertfreier Rahmen kann helfen, Fragen zu sortieren, Bedürfnisse ernst zu nehmen und zwischen persönlichen Vorlieben, Beziehungsthemen und Belastungen zu unterscheiden.",
    ],
  },
];

export function getTopicBySlug(slug: string) {
  return topicDetails.find((topic) => topic.slug === slug);
}

export function getTopicsByCategory(category: TopicCategory) {
  return topicDetails.filter((topic) => topic.category === category);
}

export const focusAreas = [
  {
    title: "Angst",
    navTitle: "Angststörungen",
    category: "angst" as const,
    paragraphs: [
      "Angst ist eine normale Grundemotion, die jeder Mensch kennt. Wenn sie jedoch sehr stark wird, deutliche Körpersymptome auslöst oder dazu führt, dass Situationen immer mehr vermieden werden, spricht man von einer Angststörung. Gemeinsam schauen wir uns an, um was es genau geht und wie wieder mehr Sicherheit im Alltag entstehen kann.",
    ],
  },
  {
    title: "Zwang",
    navTitle: "Zwangsstörungen",
    category: "zwang" as const,
    paragraphs: [
      "Wiederkehrende Gedanken oder Handlungen können viel Energie kosten und den Alltag stark einschränken. Wenn Gedanken oder Handlungen zwanghaft werden und das Gefühl entsteht, bestimmte Dinge kontrollieren, überprüfen oder „richtig machen“ bzw. „richtig denken“ zu müssen, spricht man von einer Zwangsstörung (OCD).",
      "Dazu zählen unter anderem:",
    ],
    closing:
      "Gemeinsam geht es darum, diese Muster besser zu verstehen und schrittweise zu verändern.",
  },
  {
    title: "Depression",
    category: "depression" as const,
    paragraphs: [
      "Depression ist mehr als nur Traurigkeit. Häufig zeigen sich Symptome wie Antriebslosigkeit, Erschöpfung, innere Leere, Rückzug, Schlafprobleme oder das Gefühl, festzustecken.",
      "Auch wenn sich vieles im Moment schwer oder hoffnungslos anfühlen kann, ist Veränderung möglich. Gemeinsam schauen wir Schritt für Schritt, was wieder mehr Stabilität und Leichtigkeit in den Alltag bringen kann.",
    ],
  },
  {
    title: "Selbstwert",
    category: "selbstwert" as const,
    paragraphs: [
      "Ein unsicherer Selbstwert kann viele Bereiche des Lebens beeinflussen: Beziehungen, Arbeit oder den eigenen Blick auf sich selbst.",
      "Oft stehen dabei starke Selbstkritik, Zweifel oder das Gefühl, nicht zu genügen, im Vordergrund. Gemeinsam arbeiten wir daran, einen stabileren und wohlwollenderen Umgang mit sich selbst zu entwickeln.",
    ],
  },
  {
    title: "Bindung, Beziehung und Partnerschaft",
    navTitle: "Beziehung",
    category: "beziehung" as const,
    paragraphs: [
      "Beziehungen prägen uns, ob partnerschaftlich, familiär, freundschaftlich oder im beruflichen Umfeld.",
      "Oft zeigen sich dabei wiederkehrende Muster, Konflikte oder Schwierigkeiten in Nähe, Abgrenzung oder Kommunikation. Gemeinsam schauen wir, woher diese Muster kommen und wie Veränderung möglich werden kann.",
    ],
  },
  {
    title: "Sexualität",
    category: "sexualitaet" as const,
    paragraphs: [
      "Sexualität kann mit vielen Fragen, Unsicherheiten oder Belastungen verbunden sein.",
      "Themen können unter anderem sexuelle Lustlosigkeit, sexuelle Funktionsstörungen oder unterschiedliche Beziehungsmodelle betreffen. Ich arbeite offen und wertfrei, auch im Umgang mit nicht-monogamen Beziehungsformen sowie poly- und kinkbezogenen Themen.",
    ],
  },
];

export const diagnosticsContent = {
  title: "Diagnostik",
  paragraphs: [
    "Diagnostik kann helfen, Beschwerden besser einzuordnen, Zusammenhänge zu verstehen und mehr Klarheit darüber zu bekommen, womit man eigentlich zu tun hat.",
    "Ich biete klinisch-psychologische Diagnostik für Privatpersonen sowie für zuweisende Kolleg:innen an.",
    "Termine sind meist zeitnah möglich.",
    "Die Diagnostik erfolgt privat, eine direkte Abrechnung mit der Krankenkasse ist derzeit leider nicht möglich.",
  ],
  includesTitle: "Je nach Fragestellung umfasst die Diagnostik:",
  includes: [
    "ausführliche Gespräche",
    "klinisch-psychologische Testverfahren",
    "diagnostische Einordnung und Rückmeldung",
    "Befund und Gutachten",
  ],
  flowTitle: "Ablauf",
  steps: [
    {
      title: "Kostenloses Vorgespräch (per Video-Call oder telefonisch)",
      paragraphs: [
        "In einem unverbindlichen Vorgespräch lernen wir uns kennen und besprechen Ihr Anliegen. Dabei klären wir gemeinsam, welche Fragestellung untersucht werden soll und ob eine klinisch-psychologische Diagnostik für Ihr Anliegen sinnvoll ist. Zudem erhalten Sie Informationen zum weiteren Ablauf.",
      ],
    },
    {
      title: "Anmelde- und Screeningbogen (online)",
      paragraphs: [
        "Vor dem Diagnostiktermin erhalten Sie einen Anmelde- und Screeningbogen, den Sie bequem zu Hause ausfüllen können. Dieser erfasst wichtige Informationen zu Ihrer aktuellen Symptomatik, bisherigen Diagnosen, Vorbehandlungen und Medikation. Zudem werden verschiedene psychische Beschwerdebereiche mittels kurzer Screeningfragen erhoben. Dies ermöglicht eine gezielte Vorbereitung der Diagnostik.",
      ],
    },
    {
      title: "Diagnostiktermin (in der Praxis)",
      paragraphs: [
        "Der Diagnostiktermin dauert in der Regel etwa 2,5 Stunden. Er umfasst ein klinisch-psychologisches Explorationsgespräch sowie die Durchführung individuell ausgewählter psychologischer Testverfahren. Die Auswahl der Verfahren richtet sich nach Ihrer Fragestellung und den Ergebnissen des Vorgesprächs und Screeningbogens.",
      ],
    },
    {
      title: "Befund und Rückmeldung (persönlich oder per Video-Call)",
      paragraphs: [
        "Nach Auswertung aller Informationen erhalten Sie ein schriftliches klinisch-psychologisches Gutachten. In einem Rückmeldegespräch werden die Ergebnisse verständlich erläutert, offene Fragen besprochen und bei Bedarf Empfehlungen für weitere Schritte gegeben.",
      ],
    },
  ],
  note:
    "In manchen Fällen kann für eine umfassende diagnostische Abklärung ein weiterer Termin sinnvoll oder notwendig sein.",
  confidentialityTitle: "Vertraulichkeit",
  confidentiality:
    "Ihre Angaben werden selbstverständlich vertraulich behandelt und unterliegen der gesetzlichen Verschwiegenheitspflicht klinischer Psycholog:innen.",
  costTitle: "Kosten",
  cost:
    "Die Kosten für eine klinisch-psychologische Diagnostik inklusive Befund/Gutachten betragen 500 €.",
};

export const processContent = {
  title: "Ablauf & Kosten",
  processTitle: "Ablauf",
  steps: [
    {
      title: "Kostenloses Erstgespräch (ca. 30 Minuten)",
      paragraphs: [
        "Das Erstgespräch kann online oder telefonisch vereinbart werden und dient einem ersten, unverbindlichen Kennenlernen.",
        "Dabei klären wir:",
      ],
      items: [
        "wobei Sie Unterstützung suchen",
        "erste Fragen",
        "ob eine Zusammenarbeit für beide Seiten passend ist",
      ],
      closing:
        "Falls sinnvoll, unterstütze ich Sie auch bei einer Weitervermittlung.",
    },
    {
      title: "Ausführliches Erstgespräch & gemeinsame Einordnung",
      paragraphs: [
        "In der ersten regulären Einheit nehmen wir uns Zeit, Ihre Situation genauer zu verstehen:",
      ],
      items: [
        "Was führt Sie aktuell zu mir?",
        "Wie zeigt sich das im Alltag?",
        "Welche Faktoren spielen eine Rolle?",
      ],
      closing:
        "Je nach Anliegen kann auch ein Blick auf bisherige Erfahrungen und Entwicklungen hilfreich sein.",
    },
    {
      title: "Individuelle Planung der weiteren Zusammenarbeit",
      paragraphs: ["Auf dieser Grundlage entwickeln wir gemeinsam die nächsten Schritte."],
      items: [
        "Transparenz im Vorgehen",
        "eine klare Zielsetzung",
        "eine Arbeitsweise, die zu Ihnen passt",
      ],
      closing:
        "Manche Themen lassen sich eher strukturiert und fokussiert bearbeiten, andere brauchen mehr Zeit und Raum.",
    },
  ],
  confidentialityTitle: "Verschwiegenheit",
  confidentiality:
    "Vertrauen und ein geschützter Rahmen sind wichtige Grundlagen der gemeinsamen Arbeit. Gespräche unterliegen selbstverständlich der psychologischen Verschwiegenheitspflicht.",
  costTitle: "Kosten",
  costs: ["Dauer einer Einheit: 50 Minuten", "Kosten: 120 € pro Einheit"],
  costsParagraphs: [
    "Die Sitzungen können sowohl vor Ort in der Praxis als auch online stattfinden.",
    "Ob ein Online-Setting sinnvoll ist, klärt sich meist nach dem Erstgespräch. Doppeleinheiten sind prinzipiell möglich, aber nicht immer empfehlenswert. Gerne besprechen wir das im Erstgespräch.",
    "Die Bezahlung erfolgt per Überweisung nach jeder Sitzung.",
    "Die Rechnung erhalten Sie im Anschluss per E-Mail.",
  ],
  insuranceTitle: "Krankenkassa",
  insuranceParagraphs: [
    "Ein Kostenzuschuss durch die Krankenkasse ist grundsätzlich möglich.",
    "Weitere Informationen finden Sie beim Berufsverband Österreichischer Psychologinnen und Psychologen.",
    "Ich informiere Sie dazu gerne im persönlichen Gespräch.",
  ],
};

export const practiceContent = {
  title: "Praxis & Anfahrt",
  addressTitle: "Adresse",
  address: contact.addressLine,
  addressText:
    "Die Praxis befindet sich zentral im 1. Bezirk in Wien und ist gut erreichbar.",
  directionsTitle: "Anfahrt",
  publicTitle: "Öffentlich:",
  publicItems: [
    "U1 / U3 Stephansplatz",
    "U4 Schwedenplatz",
    "Straßenbahn und Bus in Gehweite",
  ],
  carTitle: "Mit dem Auto:",
  carText:
    "Die Praxis liegt in einer Kurzparkzone. Parkplätze sind in der Umgebung vorhanden, jedoch je nach Tageszeit begrenzt.",
  appointmentTitle: "Hinweise zum Termin",
  appointmentParagraphs: [
    "Derzeit finden Termine montags und donnerstags in der Praxis statt. Online-Termine sind freitags nach Vereinbarung möglich.",
    "Ich bitte Sie, nicht deutlich vor dem vereinbarten Termin zu kommen, da ich in der Regel noch in einer laufenden Einheit bin.",
    "Die Praxis ist leider nicht barrierefrei.",
    "Vereinbarte Termine sind verbindlich.",
    "Wenn Sie einen Termin nicht wahrnehmen können, bitte ich um eine Absage mindestens 24 Stunden im Voraus.",
    "Kurzfristig abgesagte oder nicht wahrgenommene Termine werden in Rechnung gestellt.",
  ],
};

export const contactContent = {
  title: "Kontakt",
  mail: "E-Mail",
  whatsapp: "WhatsApp",
  phoneIntro:
    "Telefon, Chat oder per E-Mail. Sollten Sie mich nicht erreichen, melde ich mich umgehend zurück.",
  phone: "+43 665 67243426",
};

export const impressumContent = {
  title: "Impressum",
  subtitle: "Angaben gemäß § 5 ECG, § 24 Mediengesetz",
  owner: [
    "Maria Chamarina",
    "Klinische Psychologin",
    "Praxisadresse:",
    "Fischerstiege 10/14",
    "1010 Wien",
  ],
  contact: [
    `Telefon: ${contact.phone}`,
    `E-Mail: ${contact.email}`,
    `Website: ${siteUrl}`,
  ],
  sections: [
    {
      title: "Berufsbezeichnung",
      paragraphs: ["Klinische Psychologin (verliehen in Österreich)"],
    },
    {
      title: "Berufsrechtliche Vorschriften",
      paragraphs: ["Psychologengesetz 2013", "Rechtsinformationssystem des Bundes (RIS)"],
    },
    {
      title: "Aufsichtsbehörde",
      paragraphs: [
        "Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz",
      ],
    },
    {
      title: "Mitgliedschaften / Eintragung",
      paragraphs: [
        "Eingetragen in die Liste der Klinischen Psycholog:innen des Bundesministeriums für Soziales, Gesundheit, Pflege und Konsumentenschutz.",
      ],
    },
    {
      title: "Medieninhaberin und für den Inhalt verantwortlich",
      paragraphs: ["Maria Chamarina", "Fischerstiege 10/14, 1010 Wien"],
    },
    {
      title: "Unternehmensgegenstand",
      paragraphs: [
        "Psychologische Behandlung, Beratung sowie klinisch-psychologische Diagnostik.",
      ],
    },
  ],
};

export const privacyContent = {
  title: "Datenschutzerklärung",
  sections: [
    {
      title: "Datenschutz",
      paragraphs: [
        "Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ihre Daten werden ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG) verarbeitet.",
      ],
    },
    {
      title: "Kontaktaufnahme",
      paragraphs: [
        "Wenn Sie per E-Mail oder Kontaktformular Kontakt aufnehmen, werden die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.",
        "Bitte senden Sie über Kontaktformulare oder unverschlüsselte E-Mails keine sensiblen Gesundheitsdaten.",
      ],
    },
    {
      title: "Server-Logfiles",
      paragraphs: [
        "Der Hostinganbieter dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles. Dies umfasst beispielsweise:",
      ],
      items: [
        "IP-Adresse",
        "Browsertyp",
        "Datum und Uhrzeit des Zugriffs",
        "aufgerufene Seiten",
      ],
      closing:
        "Diese Daten dienen der technischen Sicherheit und werden nicht bestimmten Personen zugeordnet.",
    },
    {
      title: "Cookies",
      paragraphs: [
        "Diese Website verwendet nur technisch notwendige Cookies, sofern nicht ausdrücklich anders angegeben.",
      ],
    },
    {
      title: "Ihre Rechte",
      paragraphs: ["Ihnen stehen grundsätzlich die Rechte auf:"],
      items: [
        "Auskunft",
        "Berichtigung",
        "Löschung",
        "Einschränkung",
        "Datenübertragbarkeit",
        "Widerruf",
        "Widerspruch",
      ],
      closing:
        "zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der österreichischen Datenschutzbehörde beschweren: Österreichische Datenschutzbehörde",
    },
    {
      title: "Verantwortliche für die Datenverarbeitung",
      paragraphs: ["Maria Chamarina", contact.email],
    },
  ],
};

export const faqIntro = "Häufige Fragen";

export const faqItems = [
  {
    question: "Muss ich schon genau wissen, worüber ich sprechen möchte?",
    answer:
      "Nein. Viele Menschen kommen zuerst mit dem Gefühl, dass etwas belastet oder nicht mehr gut funktioniert, ohne es genau benennen zu können.",
  },
  {
    question: "Wie läuft das Erstgespräch ab?",
    answer:
      "Im kostenlosen Erstgespräch lernen wir uns kurz kennen und schauen gemeinsam, ob eine Zusammenarbeit passend ist. Es ist kostenlos und unverbindlich, online ist auch möglich.",
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer: "Je nach Kapazität sind Termine oft zeitnah möglich.",
  },
  {
    question: "Sind Online-Termine möglich?",
    answer: "Ja. Termine können online oder vor Ort stattfinden.",
  },
  {
    question: "Wie viel kostet eine Sitzung?",
    answer:
      "Eine Einheit (50 Minuten) kostet 120 €. Diagnostische Abklärungen inklusive Gutachten kosten 500 €.",
  },
  {
    question: "Gibt es einen Kostenzuschuss durch die Krankenkasse?",
    answer:
      "Ein Kostenzuschuss ist grundsätzlich möglich, Diagnostik ist privat zu bezahlen. Genauere Informationen besprechen wir gerne persönlich.",
  },
  {
    question: "Kann ich auch nur zur Diagnostik kommen?",
    answer:
      "Ja. Diagnostik kann unabhängig von einer weiteren Behandlung in Anspruch genommen werden.",
  },
  {
    question: "Unterliegen Gespräche der Verschwiegenheit?",
    answer:
      "Ja. Gespräche unterliegen selbstverständlich der psychologischen Verschwiegenheitspflicht.",
  },
  {
    question: "Muss Therapie immer lange dauern?",
    answer:
      "Nein. Manche Themen lassen sich relativ fokussiert bearbeiten, andere brauchen mehr Zeit.",
  },
  {
    question: "Was passiert, wenn ich einen Termin absagen muss?",
    answer:
      "Falls Sie einen Termin nicht wahrnehmen können, bitte ich um Absage mindestens 24 Stunden im Voraus. Kurzfristig abgesagte oder nicht wahrgenommene Termine werden verrechnet.",
  },
];

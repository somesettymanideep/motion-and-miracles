import type { Bi } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/* Contact facts                                                       */
/* ------------------------------------------------------------------ */

export const ADDRESS = {
  lines: {
    en: ["Door No. 41-20/1-55, Guntur Vari Veedhi,", "Krishnalanka, Vijayawada – 520013"],
    te: ["ద్వారా నం. 41-20/1-55, గుంటూరు వారి వీధి,", "కృష్ణలంక, విజయవాడ – 520013"],
  } as { en: string[]; te: string[] },
  mapsQuery: "Krishnalanka, Vijayawada 520013",
};

export const HOURS: Bi = {
  en: "9:00 AM – 12:00 PM and 5:00 PM – 9:00 PM",
  te: "ఉదయం 9:00 – 12:00 మరియు సాయంత్రం 5:00 – 9:00",
};

export const ORG_NAME = "Sri Vasishta Jyotishya Parishodhanalayam";
export const ORG_NAME_TE = "శ్రీ వశిష్ఠ జ్యోతిష్య పరిశోధనాలయం";
export const GURU_NAME: Bi = {
  en: "Vissavajhula Nagesh Sarma",
  te: "విశ్వవజ్జుల నాగేశ్ శర్మ",
};

/* ------------------------------------------------------------------ */
/* UI dictionary — en is the source of truth, te must match its shape  */
/* ------------------------------------------------------------------ */

const en = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    admin: "Admin",
    callNow: "Call Now",
    languageLabel: "తెలుగు",
  },
  common: {
    readMore: "Read More",
    viewAllServices: "View All Services",
    sendViaWhatsapp: "Send via WhatsApp",
    whatsappUs: "WhatsApp Us",
    getDirections: "Get Directions",
    redirectingToast: "Redirecting to WhatsApp…",
    saveFailed: "Could not save your details here, but opening WhatsApp…",
    soundHint: "Tap or click anywhere to experience this site with sound",
    openingHours: "Consultation Hours",
    phoneLabel: "Phone / WhatsApp",
    addressLabel: "Address",
    optional: "optional",
    consultCta: "Consult us today",
    errRequired: "Please fill this field",
    errPhone: "Please enter a valid phone number",
    home: "Home",
    aboutUs: "About Us",
  },
  home: {
    om: "ఓం",
    nameFirst: "Sri Vasishta Jyotishya",
    nameSecond: "Parishodhanalayam",
    tagline: "Sanatana Jyotishyam · Vedic Samskaras · Shastric Remedies",
    horoscopeLabel: "Horoscope Analysis",
    samskarasLabel: "Vedic Samskaras",
    remediesLabel: "Graha Shantis & Remedies",
    welcomeTitle: "Welcome",
    welcome: "Welcome. At our centre in Krishnalanka, Vijayawada, Vissavajhula Nagesh Sarma garu performs horoscope analysis, Vedic samskaras, graha shantis, homas and remedial rituals in accordance with the shastras.",
    servicesTitle: "Our Services",
    servicesSubtitle: "Traditional jyotishyam and shastric services, performed in the proper manner.",
    howTitle: "How It Works",
    consultTitle: "Book a Consultation",
    consultSubtitle: "Share your details and we will get back to you on WhatsApp.",
    faqTitle: "Frequently Asked Questions",
    testimonialsTitle: "What Devotees Say",
    testimonialsNote: "Sample entries for layout only — replace with real feedback.",
    gurujisTitle: "Our Gurujis",
    gurujisSubtitle: "Guidance from the Masters",
  },
  form: {
    fullName: "Full Name",
    phone: "Phone Number",
    service: "Service",
    selectService: "Select a service",
    dob: "Date of Birth",
    tob: "Time of Birth",
    pob: "Place of Birth",
    message: "Message",
    messagePlaceholder: "Your need or question (optional)",
  },
  about: {
    bannerTitle: "About Us",
    title: "Rooted in Vedic Tradition",
    para: "Sri Vasishta Jyotishya Parishodhanalayam is a centre rooted in Vedic tradition and Jyotisha Shastra. We study the horoscope scientifically, suggest suitable remedies, shantis and homas based on planetary positions, and perform life samskaras as per the shastras at the right muhurta.",
    guruSection: "Our Guru",
    guruRole: "Vedic Karmakanda & Jyotisha Shastra",
    guruPlaceholder: "Experience, qualifications and years of service — to be updated.",
    valuesTitle: "Our Values",
    ctaTitle: "Consult us today",
    ctaSub: "Call during consultation hours or message us on WhatsApp.",
  },
  servicesPage: {
    bannerTitle: "Our Services",
    subtitle: "Eleven areas of traditional jyotishyam and karmakanda, each performed in the shastriya manner.",
    examinesTitle: "What We Examine",
    remediesTitle: "Suggested Remedies",
    samskarasTitle: "Related Samskaras",
    noteTitle: "Please Note",
    otherServices: "Other Services",
  },
  contact: {
    bannerTitle: "Contact Us",
    subtitle: "Visit the centre, call during consultation hours, or send us a message on WhatsApp.",
    formTitle: "Send a Message",
    email: "Email",
    mapTitle: "Find Us in Krishnalanka",
  },
  auth: {
    title: "Admin Sign In",
    subtitle: "Sign in to view website enquiries.",
    email: "Email",
    password: "Password",
    signIn: "Sign In",
    signUp: "Create Account",
    noAccount: "No account yet? Create one.",
    haveAccount: "Already have an account? Sign in.",
    checkEmail:
      "Account created. Check your email for the confirmation link, then sign in.",
    welcomeBack: "You are signed in.",
    goToDashboard: "Go to Dashboard",
    working: "Please wait…",
  },
  admin: {
    title: "Enquiries Dashboard",
    subtitle: "Consultation bookings and contact messages submitted from the website.",
    tabConsultations: "Consultations",
    tabMessages: "Messages",
    empty: "No enquiries yet.",
    refresh: "Refresh",
    submitted: "Received",
    notAdmin: "This account does not have admin access.",
    signOut: "Sign Out",
    backToSite: "Back to Website",
    notProvided: "—",
    errorLoading: "Could not load enquiries. Please try again.",
  },
  footer: {
    aboutLine: "A centre for Sanatana Jyotishyam, Vedic samskaras and shastric remedies in Krishnalanka, Vijayawada.",
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    contactTitle: "Contact",
    rights: "© 2026 Sri Vasishta Jyotishya Parishodhanalayam, Vijayawada. All rights reserved.",
  },
};

const te: typeof en = {
  nav: {
    home: "హోమ్",
    about: "మా గురించి",
    services: "సేవలు",
    contact: "సంప్రదించండి",
    admin: "అడ్మిన్",
    callNow: "ఇప్పుడే కాల్ చేయండి",
    languageLabel: "EN",
  },
  common: {
    readMore: "మరింత చదవండి",
    viewAllServices: "అన్ని సేవలు చూడండి",
    sendViaWhatsapp: "వాట్సాప్ ద్వారా పంపండి",
    whatsappUs: "వాట్సాప్ చేయండి",
    getDirections: "దారి చూపించు",
    redirectingToast: "వాట్సాప్‌కు పంపుతున్నాము…",
    saveFailed: "వివరాలు ఇక్కడ సేవ్ చేయలేకపోయాము, వాట్సాప్ తెరుచుతున్నాము…",
    soundHint: "ఈ సైట్ స్వరంతో అనుభవించడానికి ఎక్కడైనా ట్యాప్ చేయండి లేదా క్లిక్ చేయండి",
    openingHours: "సంప్రదింపు సమయాలు",
    phoneLabel: "ఫోన్ / వాట్సాప్",
    addressLabel: "చిరునామా",
    optional: "ఐచ్ఛికం",
    consultCta: "ఈ రోజే సంప్రదించండి",
    errRequired: "దయచేసి ఈ ఖాళీని నింపండి",
    errPhone: "దయచేసి సరైన ఫోన్ నంబర్ నమోదు చేయండి",
    home: "హోమ్",
    aboutUs: "మా గురించి",
  },
  home: {
    om: "ఓం",
    nameFirst: "శ్రీ వశిష్ఠ జ్యోతిష్య",
    nameSecond: "పరిశోధనాలయం",
    tagline: "సనాతన జ్యోతిష్యం · వైదిక సంస్కారాలు · శాస్త్రోక్త పరిహారాలు",
    horoscopeLabel: "జాతక పరిశీలన",
    samskarasLabel: "వైదిక సంస్కారాలు",
    remediesLabel: "గ్రహశాంతులు & పరిహారాలు",
    welcomeTitle: "స్వాగతం",
    welcome: "కృష్ణలంక, విజయవాడలోని మా కేంద్రంలో విశ్వవజ్జుల నాగేశ్ శర్మ గారు శాస్త్రోక్త పద్ధతిలో జాతక పరిశోధన, వైదిక సంస్కారాలు, గ్రహశాంతులు, హోమాలు మరియు పరిహార కార్యక్రమాలు నిర్వహిస్తారు.",
    servicesTitle: "మా సేవలు",
    servicesSubtitle: "సాంప్రదాయక జ్యోతిష్యం మరియు కర్మకాండ సేవలు, సరైన పద్ధతిలో నిర్వహించబడతాయి.",
    howTitle: "ఎలా జరుగుతుంది",
    consultTitle: "సంప్రదింపు బుక్ చేయండి",
    consultSubtitle: "మీ వివరాలు పంపండి, మేము వాట్సాప్ ద్వారా స్పందిస్తాము.",
    faqTitle: "తరచుగా అడిగే ప్రశ్నలు",
    testimonialsTitle: "భక్తుల అభిప్రాయాలు",
    testimonialsNote: "ఇవి నమూనా వివరాలు మాత్రమే — నిజమైన అభిప్రాయాలతో భర్తీ చేయండి.",
    gurujisTitle: "మా గురువులు",
    gurujisSubtitle: "గురువుల మార్గదర్శనం",
  },
  form: {
    fullName: "పూర్తి పేరు",
    phone: "ఫోన్ నంబర్",
    service: "సేవ",
    selectService: "సేవను ఎంచుకోండి",
    dob: "జనన తేదీ",
    tob: "జనన సమయం",
    pob: "జనన స్థలం",
    message: "సందేశం",
    messagePlaceholder: "మీ అవసరం లేదా ప్రశ్న (ఐచ్ఛికం)",
  },
  about: {
    bannerTitle: "మా గురించి",
    title: "వైదిక సంప్రదాయంలో పునాదులు",
    para: "శ్రీ వశిష్ఠ జ్యోతిష్య పరిశోధనాలయం వైదిక సంప్రదాయం మరియు జ్యోతిష్య శాస్త్రంలో పునాదులు కలిగిన కేంద్రం. గ్రహస్థితుల ఆధారంగా జాతకాన్ని శాస్త్రీయంగా పరిశోధించి, సరైన పరిహారాలు, శాంతులు, హోమాలు సూచించి, జీవిత సంస్కారాలను శాస్త్రోక్తంగా సరైన ముహూర్తంలో నిర్వహిస్తాము.",
    guruSection: "మా గురువు గారు",
    guruRole: "వైదిక కర్మకాండ & జ్యోతిష్య శాస్త్రం",
    guruPlaceholder: "అనుభవం, అర్హతలు మరియు సేవా సంవత్సరాలు — త్వరలో అప్‌డేట్ చేయబడుతుంది.",
    valuesTitle: "మా విలువలు",
    ctaTitle: "ఈ రోజే సంప్రదించండి",
    ctaSub: "సంప్రదింపు సమయాల్లో కాల్ చేయండి లేదా వాట్సాప్‌లో సందేశం పంపండి.",
  },
  servicesPage: {
    bannerTitle: "మా సేవలు",
    subtitle: "సాంప్రదాయక జ్యోతిష్యం మరియు కర్మకాండలో పదకొండు రంగాలు, ప్రతిదీ శాస్త్రోక్త పద్ధతిలో నిర్వహించబడును.",
    examinesTitle: "మేము ఏమి పరిశీలిస్తాము",
    remediesTitle: "సూచించే పరిహారాలు",
    samskarasTitle: "సంబంధిత సంస్కారాలు",
    noteTitle: "దయచేసి గమనించండి",
    otherServices: "ఇతర సేవలు",
  },
  contact: {
    bannerTitle: "సంప్రదించండి",
    subtitle: "కేంద్రాన్ని సందర్శించండి, సంప్రదింపు సమయాల్లో కాల్ చేయండి, లేదా వాట్సాప్‌లో సందేశం పంపండి.",
    formTitle: "సందేశం పంపండి",
    email: "ఇమెయిల్",
    mapTitle: "కృష్ణలంకలో మనల్ని కనుగొనండి",
  },
  auth: {
    title: "అడ్మిన్ సైన్ ఇన్",
    subtitle: "వెబ్‌సైట్ సంప్రదింపులు చూడటానికి సైన్ ఇన్ చేయండి.",
    email: "ఇమెయిల్",
    password: "పాస్‌వర్డ్",
    signIn: "సైన్ ఇన్",
    signUp: "ఖాతా సృష్టించండి",
    noAccount: "ఖాతా లేదా? ఒకదాన్ని సృష్టించండి.",
    haveAccount: "ఖాతా ఉందా? సైన్ ఇన్ చేయండి.",
    checkEmail:
      "ఖాతా సృష్టించబడింది. ఇమెయిల్‌లోని నిర్ధారణ లింక్‌పై క్లిక్ చేసి, తర్వాత సైన్ ఇన్ చేయండి.",
    welcomeBack: "మీరు సైన్ ఇన్ అయ్యారు.",
    goToDashboard: "డాష్‌బోర్డ్‌కు వెళ్లండి",
    working: "దయచేసి వేచి ఉండండి…",
  },
  admin: {
    title: "సంప్రదింపుల డాష్‌బోర్డ్",
    subtitle: "వెబ్‌సైట్ నుండి పంపిన సంప్రదింపు బుకింగ్‌లు మరియు సందేశాలు.",
    tabConsultations: "సంప్రదింపులు",
    tabMessages: "సందేశాలు",
    empty: "ఇంకా సంప్రదింపులు లేవు.",
    refresh: "రిఫ్రెష్",
    submitted: "వచ్చిన సమయం",
    notAdmin: "ఈ ఖాతాకు అడ్మిన్ అనుమతి లేదు.",
    signOut: "సైన్ అవుట్",
    backToSite: "వెబ్‌సైట్‌కు తిరిగి వెళ్లండి",
    notProvided: "—",
    errorLoading: "సంప్రదింపులు లోడ్ చేయలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి.",
  },
  footer: {
    aboutLine: "కృష్ణలంక, విజయవాడలో సనాతన జ్యోతిష్యం, వైదిక సంస్కారాలు మరియు శాస్త్రీయ పరిహారాల కేంద్రం.",
    quickLinks: "త్వరిత లింకులు",
    ourServices: "మా సేవలు",
    contactTitle: "సంప్రదింపు",
    rights: "© 2026 శ్రీ వశిష్ఠ జ్యోతిష్య పరిశోధనాలయం, విజయవాడ. అన్ని హక్కులు రిజర్వ్ చేయబడినవి.",
  },
};

export type Dict = typeof en;

export const dict: Record<"en" | "te", Dict> = { en, te };

/* ------------------------------------------------------------------ */
/* Shared page data                                                    */
/* ------------------------------------------------------------------ */

export const STEPS: { title: Bi; text: Bi }[] = [
  {
    title: { en: "Consultation", te: "సంప్రదింపు" },
    text: {
      en: "Tell us your needs by phone or WhatsApp.",
      te: "ఫోన్ లేదా వాట్సాప్ ద్వారా మీ అవసరాలను తెలియజేయండి.",
    },
  },
  {
    title: { en: "Horoscope Analysis", te: "జాతక పరిశీలన" },
    text: {
      en: "We study your birth details and provide precise readings.",
      te: "మేము మీ జనన వివరాలను పరిశీలించి ఖచ్చితమైన ఫలితాలను అందిస్తాము.",
    },
  },
  {
    title: { en: "Shastric Performance", te: "శాస్త్రోక్త నిర్వహణ" },
    text: {
      en: "The ritual is performed at an auspicious time for the best results.",
      te: "ఉత్తమ ఫలితాల కోసం శుభ ముహూర్తంలో శాస్త్రోక్తంగా పూజ నిర్వహించబడుతుంది.",
    },
  },
];

export const VALUES: { title: Bi; text: Bi; icon: "shastra" | "tradition" | "service" }[] = [
  {
    icon: "shastra",
    title: { en: "Shastric Authenticity", te: "శాస్త్రీయ ప్రామాణికత" },
    text: {
      en: "Every ritual follows the shastras, with the proper sankalpa and procedure.",
      te: "ప్రతి కార్యక్రమం శాస్త్రవిధినుసారి, సరైన సంకల్పముతో నిర్వహించబడును.",
    },
  },
  {
    icon: "tradition",
    title: { en: "Traditional Guidance", te: "సాంప్రదాయక మార్గదర్శనం" },
    text: {
      en: "Remedies are suggested only after studying the horoscope, never in haste.",
      te: "జాతక పరిశీలన తరువాతనే పరిహారాలు సూచించబడతాయి; తొందరపాటు ఎప్పుడూ ఉండదు.",
    },
  },
  {
    icon: "service",
    title: { en: "Sincere Service", te: "నిజాయితీ సేవ" },
    text: {
      en: "Modest guidance, honest timelines and no promises of results.",
      te: "వినమ్రమైన మార్గదర్శనం, నిజాయితీ సమయ నిర్ణయం, ఫలితాల హామీ లేదు.",
    },
  },
];

export const FAQS: { q: Bi; a: Bi }[] = [
  {
    q: { en: "What details are needed for horoscope analysis?", te: "జాతక పరిశీలనకు ఏ వివరాలు కావాలి?" },
    a: {
      en: "Date, time and place of birth. Bring your horoscope if you have one.",
      te: "జనన తేదీ, సమయం మరియు స్థలం. మీ వద్ద జాతకం ఉంటే తీసుకురావండి.",
    },
  },
  {
    q: { en: "Can the rituals be performed at our home?", te: "కార్యక్రమాలు మా ఇంట్లో నిర్వహించవచ్చా?" },
    a: {
      en: "Depending on the need, they can be done at your home or other places. Call for details.",
      te: "అవసరాన్ని బట్టి మీ ఇంట్లో లేదా ఇతర ప్రదేశాల్లో నిర్వహించవచ్చు. వివరాలకు కాల్ చేయండి.",
    },
  },
  {
    q: { en: "How is the muhurta decided for samskaras?", te: "సంస్కారాలకు ముహూర్తం ఎలా నిర్ణయిస్తారు?" },
    a: {
      en: "Based on the horoscope, nakshatra and panchanga shuddhi.",
      te: "జాతకం, నక్షత్రం మరియు పంచాంగ శుద్ధి ఆధారంగా.",
    },
  },
  {
    q: { en: "Is an appointment required?", te: "అపాయింట్‌మెంట్ తప్పనిసరా?" },
    a: {
      en: "You can visit during consultation hours. Calling ahead lets us allot more time.",
      te: "సంప్రదింపు సమయాల్లో సందర్శించవచ్చు. ముందుగా కాల్ చేస్తే ఎక్కువ సమయం కేటాయించవచ్చు.",
    },
  },
];

/**
 * Testimonials — easy to replace via this array.
 */
export const TESTIMONIALS: { text: Bi; name: Bi; place: Bi; stars: number }[] = [
  {
    text: { en: "Samskara was performed with great devotion and clarity. Every step was explained to us.", te: "సంస్కారం అత్యంత భక్తిశ్రద్ధలతో స్పష్టతతో నిర్వహించబడింది. ప్రతి అడుగు మాకు వివరించబడింది." },
    name: { en: "Ramesh", te: "రమేష్" },
    place: { en: "Vijayawada", te: "విజయవాడ" },
    stars: 5,
  },
  {
    text: { en: "The horoscope analysis was patient and detailed. Guidance was modest and practical.", te: "జాతక పరిశీలన ఓపికగా, వివరంగా జరిగింది. మార్గదర్శనం వినమ్రంగా, ఆచరణాత్మకంగా ఉంది." },
    name: { en: "Lakshmi", te: "లక్ష్మి" },
    place: { en: "Guntur", te: "గుంటూరు" },
    stars: 5,
  },
  {
    text: { en: "Navagraha shanti was arranged at our home with proper muhurta and procedure.", te: "సరైన ముహూర్తంతో, పద్ధతికి అనుగుణంగా మా ఇంట్లో నవగ్రహ శాంతి నిర్వహించబడింది." },
    name: { en: "Srinivas", te: "శ్రీనివాస్" },
    place: { en: "Machilipatnam", te: "మచిలీపట్నం" },
    stars: 5,
  },
  {
    text: { en: "Clear explanation of the dosha and the remedy suggested. No false promises were made.", te: "దోషం మరియు పరిహారం స్పష్టంగా వివరించబడ్డాయి. తప్పుడు హామీలు ఇవ్వలేదు." },
    name: { en: "Padma", te: "పద్మ" },
    place: { en: "Vijayawada", te: "విజయవాడ" },
    stars: 5,
  },
  {
    text: { en: "Upanayanam was performed traditionally at an auspicious muhurta. Family felt blessed.", te: "శుభముహూర్తంలో ఉపనయనం సాంప్రదాయకంగా నిర్వహించబడింది. కుటుంబానికి ఆనందంగా ఉంది." },
    name: { en: "Venkateswara Rao", te: "వెంకటేశ్వర రావు" },
    place: { en: "Eluru", te: "ఏలూరు" },
    stars: 5,
  },
  {
    text: { en: "Consultation was unhurried and respectful. We were told exactly what would be done.", te: "సంప్రదింపు ఆతురత లేకుండా, గౌరవంగా జరిగింది. ఏమి చేస్తామో స్పష్టంగా చెప్పారు." },
    name: { en: "Anitha", te: "అనిత" },
    place: { en: "Tenali", te: "తెనాలి" },
    stars: 5,
  },
];

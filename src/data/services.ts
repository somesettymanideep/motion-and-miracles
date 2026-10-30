import type { Bi } from "@/lib/i18n";
import templeImg from "@/assets/services/temple.jpg";
import navagrahaImg from "@/assets/services/navagraha.jpg";
import homaImg from "@/assets/services/homa.jpg";
import diyaImg from "@/assets/services/diya.jpg";
import healthImg from "@/assets/services/health.jpg";
import careerImg from "@/assets/services/career.jpg";
import businessImg from "@/assets/services/business.jpg";
import marriageImg from "@/assets/services/marriage.jpg";
import childrenImg from "@/assets/services/children.jpg";
import educationImg from "@/assets/services/education.jpg";
import financialImg from "@/assets/services/financial.jpg";

export type ServiceDetail = {
  heroTitle: Bi;
  intro: Bi;
  examines?: Bi[];
  remedies?: Bi[];
  samskaras?: Bi[];
  extra?: { title: Bi; items: Bi[] };
  note?: Bi;
  seo: { title: string; description: string };
};

export type Service = {
  slug: string;
  name: Bi;
  image: string;
  imageAlt: string;
  detail: ServiceDetail;
};

export const SERVICES: Service[] = [
  {
    slug: "vedic-samskaras",
    name: { en: "Vedic Samskaras", te: "వైదిక సంస్కారములు" },
    image: templeImg,
    imageAlt: "Traditional South Indian temple gopuram at sunrise",
    detail: {
      heroTitle: { en: "Vedic Samskaras", te: "వైదిక సంస్కారములు" },
      intro: {
        en: "Life samskaras are performed exactly as prescribed by the shastras, at the proper muhurta decided from your horoscope and the panchanga — from Garbhadhanam through to Vivaham.",
        te: "జాతకము మరియు పంచాంగము ప్రకారంగా నిర్ణయించిన సరైన శుభముహూర్తమున, శాస్త్రవిధినుసారి గర్భాధానము నుండి వివాహము వరకు అన్ని జీవిత సంస్కారములు నిర్వహించబడును.",
      },
      samskaras: [
        { en: "Garbhadhanam", te: "గర్భాధానమ్" },
        { en: "Pumsavanam", te: "పుంసవనమ్" },
        { en: "Seemantham", te: "సీమంతమ్" },
        { en: "Jatakarma", te: "జాతకర్మ" },
        { en: "Namakaranam", te: "నామకరణమ్" },
        { en: "Annaprasana", te: "అన్నప్రాసన" },
        { en: "Chaulam (Chudakarma)", te: "చౌళము (చూడాకర్మ)" },
        { en: "Upanayanam", te: "ఉపనయనమ్" },
        { en: "Upakarma", te: "ఉపాకర్మ" },
        { en: "Godanam", te: "గోదానమ్" },
        { en: "Snatakavratam", te: "స్నాతకవ్రతమ్" },
        { en: "Vivaham", te: "వివాహమ్" },
      ],
      seo: {
        title: "Vedic Samskaras | Namakaranam, Upanayanam, Vivaham | Vijayawada",
        description:
          "Vedic samskaras from Namakaranam to Vivaham performed as per the shastras with proper muhurta, at Sri Vasishta Jyotishya Parishodhanalayam, Krishnalanka, Vijayawada.",
      },
    },
  },
  {
    slug: "navagraha-shanti",
    name: { en: "Navagraha Shanti", te: "నవగ్రహ శాంతి" },
    image: navagrahaImg,
    imageAlt: "Golden navagraha mandala disc with nine planetary figures",
    detail: {
      heroTitle: { en: "Navagraha Shanti", te: "నవగ్రహ శాంతి" },
      intro: {
        en: "When graha dashas and gocharas bring obstacles, the proper graha shanti is chosen after studying the horoscope, and japa, daana and homa are performed in the shastriya manner.",
        te: "గ్రహదశలు, గోచారముల వల్ల కలిగే ఆటంకాలకు జాతక పరిశీలన తరువాత సరైన గ్రహశాంతి నిర్ణయించి, జప – దాన – హోమములు శాస్త్రోక్తంగా నిర్వహించబడును.",
      },
      remedies: [
        { en: "Navagraha Japas", te: "నవగ్రహ జపములు" },
        { en: "Daanas (charitable offerings)", te: "దానములు" },
        { en: "Navagraha & graha Homas", te: "నవగ్రహ మరియు గ్రహ హోమములు" },
        { en: "Mrityunjaya Japam, Homa and Daanam", te: "మృత్యుంజయ జపము, హోమము, దానము" },
        { en: "Ayushya Homam", te: "ఆయుష్య హోమమ్" },
        { en: "Nakshatra Japas and Daanas", te: "నక్షత్ర జపములు మరియు దానములు" },
      ],
      seo: {
        title: "Navagraha Shanti | Graha Japas & Homas | Vijayawada",
        description:
          "Navagraha shanti with graha japas, daanas and homas, Mrityunjaya and Ayushya homams performed per the shastras in Vijayawada.",
      },
    },
  },
  {
    slug: "special-homas",
    name: { en: "Special Homas", te: "విశేష హోమాలు" },
    image: homaImg,
    imageAlt: "Sacred homa fire in a copper kundam with ghee offering",
    detail: {
      heroTitle: { en: "Special Homas", te: "విశేష హోమాలు" },
      intro: {
        en: "Powerful homas are performed for protection from severe doshas and long-standing difficulties, with the full shastriya procedure and sankalpa.",
        te: "తీవ్రమైన దోషములు మరియు ఎక్కువ కాలంగా కొనసాగుతున్న కష్టాల నివారణకు, పూర్తి శాస్త్రోక్త పద్ధతిలో సంకల్పముతో విశేష హోమములు నిర్వహించబడును.",
      },
      remedies: [
        { en: "Chandi Homam", te: "చండీ హోమమ్" },
        { en: "Pratyangira Homam", te: "ప్రత్యంగిరా హోమమ్" },
        { en: "Kushmanda Homam", te: "కుష్మాండ హోమమ్" },
        { en: "Ugraratha Shanti", te: "ఉగ్రరథ శాంతి" },
        { en: "Bheemaratha Shanti", te: "భీమరథ శాంతి" },
        { en: "Samputikarana Homas", te: "సంపుటీకరణ హోమములు" },
      ],
      seo: {
        title: "Special Homas | Chandi & Pratyangira Homam | Vijayawada",
        description:
          "Chandi, Pratyangira, Kushmanda homams and Ugraratha, Bheemaratha shantis performed with full shastriya procedure in Vijayawada.",
      },
    },
  },
  {
    slug: "astrological-remedies",
    name: { en: "Astrological Remedies", te: "జ్యోతిష్య పరిహారాలు" },
    image: diyaImg,
    imageAlt: "Golden brass oil lamp with glowing flame and marigold petals",
    detail: {
      heroTitle: { en: "Astrological Remedies", te: "జ్యోతిష్య పరిహారాలు" },
      intro: {
        en: "For problems relating to health, job, business, marriage, children, education, finances, own-house acquisition and foreign travel, suitable shastric remedies are suggested after a full horoscope analysis.",
        te: "ఆరోగ్యము, ఉద్యోగము, వ్యాపారము, వివాహము, సంతానము, విద్య, ధనము, సొంత ఇల్లు, విదేశ ప్రయాణము మొదలైన విషయములకు జాతక పరిశీలన తరువాత సరైన శాస్త్రీయ పరిహారములు సూచించబడును.",
      },
      examines: [
        { en: "Kuja Dosha analysis and nivarana", te: "కుజ దోష పరిశీలన మరియు నివారణ" },
        { en: "Kalasarpa Dosha analysis and nivarana", te: "కాళసర్ప దోష పరిశీలన మరియు నివారణ" },
        { en: "Sarpa Dosha analysis and nivarana", te: "సర్ప దోష పరిశీలన మరియు నివారణ" },
        { en: "Vamsha-paramparya Dosha analysis and nivarana", te: "వంశపరంపర్య దోష పరిశీలన మరియు నివారణ" },
      ],
      seo: {
        title: "Astrological Remedies | Dosha Nivarana | Vijayawada",
        description:
          "Kuja, Kalasarpa and Sarpa dosha nivarana and shastric remedies for health, job, marriage and finances in Vijayawada.",
      },
    },
  },
  {
    slug: "health-astrology",
    name: { en: "Health Astrology", te: "ఆరోగ్య జ్యోతిష్యం" },
    image: healthImg,
    imageAlt: "Sacred homa flame with kalasam, tulsi and rudraksha mala",
    detail: {
      heroTitle: {
        en: "Astrological Guidance for Health Concerns",
        te: "ఆరోగ్య సంబంధమైన సమస్యలకు జ్యోతిష్య మార్గదర్శనం",
      },
      intro: {
        en: "For long-standing health worries, the horoscope is studied for planetary causes and appropriate shantis are suggested alongside proper medical care.",
        te: "ఎక్కువ కాలంగా కొనసాగుతున్న ఆరోగ్య సమస్యలకు జాతకములో గ్రహస్థితులను పరిశీలించి, సరైన వైద్యముతో పాటు సరైన శాంతి – పరిహారములు సూచించబడును.",
      },
      examines: [
        { en: "Lagna and its strength", te: "లగ్నము మరియు దాని బలము" },
        {
          en: "6th house (roga sthana) and 8th house (ayurbhava) and their lords",
          te: "ఆరవ స్థానము (రోగ స్థానము), ఎనిమిదవ స్థానము (ఆయుర్భావము) మరియు వాని అధిపతులు",
        },
        { en: "Running dasha, antardasha and gochara", te: "ప్రవర్తమాన దశ, అంతర్దశ మరియు గోచారములు" },
        { en: "Planetary links to long-term health issues", te: "దీర్ఘకాలిక సమస్యలతో గ్రహాల సంబంధము" },
      ],
      remedies: [
        { en: "Ayushya Homam", te: "ఆయుష్య హోమమ్" },
        { en: "Mrityunjaya Japam, Homam and Daanam", te: "మృత్యుంజయ జపమ్, హోమమ్, దానమ్" },
        { en: "Related graha japas and daanas", te: "సంబంధిత గ్రహ జపములు మరియు దానములు" },
      ],
      note: {
        en: "Astrological remedies are spiritual guidance only and not a substitute for medical treatment. Please consult a doctor for any illness.",
        te: "జ్యోతిష్య పరిహారములు ఆధ్యాత్మిక మార్గదర్శనము మాత్రమే; వైద్య చికిత్సకు ప్రత్యామ్నాయము కాదు. ఏదైనా అనారోగ్యము కోసం దయచేసి వైద్యులను సంప్రదించండి.",
      },
      seo: {
        title: "Health Astrology | Mrityunjaya Homam | Vijayawada",
        description:
          "Astrological guidance for health concerns with Ayushya Homam and Mrityunjaya japam and homam, Krishnalanka, Vijayawada.",
      },
    },
  },
  {
    slug: "career-astrology",
    name: { en: "Career Astrology", te: "ఉద్యోగ జ్యోతిష్యం" },
    image: careerImg,
    imageAlt: "Palm-leaf horoscope scroll and brass jataka chakram on a desk",
    detail: {
      heroTitle: { en: "Guidance on Job & Career", te: "ఉద్యోగ & వృత్తికి మార్గదర్శనం" },
      intro: {
        en: "For delays in getting a job, frequent changes, or obstacles in promotion, the horoscope is examined and the proper remedies and timing suggested.",
        te: "ఉద్యోగం ఆలస్యంగా రావడం, తరచుగా మార్పులు కావడం, పదోన్నతిలో ఆటంకాలు వంటి సమస్యలకు జాతకాన్ని పరిశీలించి, సరైన పరిహారములు మరియు సమయం సూచించబడును.",
      },
      examines: [
        { en: "10th house and its lord", te: "దశమ స్థానము మరియు దాని అధిపతి" },
        { en: "6th house, Saturn, Sun and Jupiter", te: "ఆరవ స్థానము, శని, సూర్యుడు మరియు గురువు" },
        { en: "Favourable dasha periods for career growth", te: "వృత్తి అభివృద్ధికి అనుకూలమైన దశలు" },
      ],
      remedies: [
        { en: "Related graha japas and shantis", te: "సంబంధిత గ్రహ జపములు మరియు శాంతులు" },
        { en: "Navagraha Shanti", te: "నవగ్రహ శాంతి" },
        { en: "Nakshatra Japas", te: "నక్షత్ర జపములు" },
      ],
      seo: {
        title: "Career Astrology | Job & Career Guidance | Vijayawada",
        description:
          "Astrological guidance for job delays, career changes and promotions with graha shantis and nakshatra japas in Vijayawada.",
      },
    },
  },
  {
    slug: "business-astrology",
    name: { en: "Business Astrology", te: "వ్యాపార జ్యోతిష్యం" },
    image: businessImg,
    imageAlt: "Brass Lakshmi kalasam with gold coins and balance scales",
    detail: {
      heroTitle: {
        en: "Astrological Advice for Business Growth",
        te: "వ్యాపార అభివృద్ధికి జ్యోతిష్య సలహా",
      },
      intro: {
        en: "Guidance for starting or growing a business — partnerships, profits, stability, and the right muhurta for a new venture.",
        te: "వ్యాపారం ప్రారంభించడానికి లేదా అభివృద్ధి చేయడానికి — భాగస్వామ్యం, లాభాలు, స్థిరత్వం, కొత్త వ్యాపారానికి శుభముహూర్తం వంటి విషయాలకు మార్గదర్శనం.",
      },
      examines: [
        {
          en: "7th house (partnership), 10th and 11th houses",
          te: "ఏడవ స్థానము (భాగస్వామ్యము), దశమ మరియు ఏకాదశ స్థానములు",
        },
        { en: "Strength of Mercury, Jupiter and Venus", te: "బుధ, గురు, శుక్ర గ్రహాల బలము" },
        {
          en: "Auspicious muhurta for starting a business",
          te: "వ్యాపార ప్రారంభానికి శుభముహూర్తము",
        },
      ],
      remedies: [
        { en: "Graha japas and daanas", te: "గ్రహ జపములు మరియు దానములు" },
        { en: "Pratyangira Homam", te: "ప్రత్యంగిరా హోమమ్" },
        { en: "Kushmanda Homam", te: "కుష్మాండ హోమమ్" },
      ],
      seo: {
        title: "Business Astrology | Business Growth Advice | Vijayawada",
        description:
          "Astrological advice for business growth, partnerships and new-venture muhurta with graha japas and homas in Vijayawada.",
      },
    },
  },
  {
    slug: "marriage-astrology",
    name: { en: "Marriage Astrology", te: "వివాహ జ్యోతిష్యం" },
    image: marriageImg,
    imageAlt: "Traditional South Indian wedding hands with ring exchange and brass plate",
    detail: {
      heroTitle: {
        en: "Marriage Matching & Remedies for Delays",
        te: "వివాహ సరిపోలిక & ఆలస్యానికి పరిహారాలు",
      },
      intro: {
        en: "Complete marriage guidance — matching of horoscopes, analysis of delays and doshas, muhurta selection, and performing the vivaham samskara.",
        te: "జాతక సరిపోలిక (గుణ మేళనం), వివాహ ఆలస్యానికి కారణాలు, దోష పరిశీలన, శుభముహూర్త నిర్ణయం మరియు వివాహ సంస్కార నిర్వహణ — వివాహానికి సంబంధించిన పూర్తి మార్గదర్శనం.",
      },
      extra: {
        title: { en: "What We Offer", te: "మా సేవలు" },
        items: [
          { en: "Horoscope matching (guna melanam)", te: "జాతక సరిపోలిక (గుణ మేళనం)" },
          { en: "Analysis of reasons for delayed marriage", te: "వివాహ ఆలస్యానికి కారణాల పరిశీలన" },
          { en: "Kuja Dosha & Kalasarpa Dosha analysis", te: "కుజ దోష & కాళసర్ప దోష పరిశీలన" },
          { en: "Muhurta selection for the vivaham", te: "వివాహానికి శుభముహూర్త నిర్ణయం" },
          { en: "Performing the marriage samskara", te: "వివాహ సంస్కార నిర్వహణ" },
        ],
      },
      remedies: [
        { en: "Kuja Dosha Nivarana", te: "కుజ దోష నివారణ" },
        { en: "Kalasarpa Dosha Nivarana", te: "కాళసర్ప దోష నివారణ" },
        { en: "Related graha shantis", te: "సంబంధిత గ్రహ శాంతులు" },
      ],
      seo: {
        title: "Marriage Astrology | Guna Melanam & Muhurta | Vijayawada",
        description:
          "Horoscope matching (guna melanam), delayed-marriage analysis, Kuja and Kalasarpa dosha nivarana and marriage muhurta in Vijayawada.",
      },
    },
  },
  {
    slug: "children-astrology",
    name: { en: "Children / Progeny Astrology", te: "సంతాన జ్యోతిష్యం" },
    image: childrenImg,
    imageAlt: "Baby feet with silver anklets beside a decorated brass cradle",
    detail: {
      heroTitle: {
        en: "Astrological Guidance for Progeny",
        te: "సంతానానికి జ్యోతిష్య మార్గదర్శనం",
      },
      intro: {
        en: "For those longing for children, the horoscope is examined and the appropriate shantis and related samskaras are suggested.",
        te: "సంతానం కోసం ఆకాంక్షించే వారికి జాతకాన్ని పరిశీలించి, సరైన శాంతులు మరియు సంబంధిత సంస్కారాలు సూచించబడును.",
      },
      examines: [
        { en: "5th house and its lord", te: "పంచమ స్థానము మరియు దాని అధిపతి" },
        { en: "Jupiter's strength", te: "గురువు బలము" },
        { en: "Sarpa dosha and ancestral (vamsha) doshas", te: "సర్ప దోషము మరియు వంశ దోషములు" },
      ],
      remedies: [
        { en: "Sarpa Dosha Nivarana", te: "సర్ప దోష నివారణ" },
        { en: "Vamshaparampara Dosha Nivarana", te: "వంశపరంపర దోష నివారణ" },
        { en: "Related graha shantis", te: "సంబంధిత గ్రహ శాంతులు" },
      ],
      samskaras: [
        { en: "Garbhadhanam", te: "గర్భాధానమ్" },
        { en: "Pumsavanam", te: "పుంసవనమ్" },
        { en: "Seemantham", te: "సీమంతమ్" },
        { en: "Jatakarma", te: "జాతకర్మ" },
        { en: "Namakaranam", te: "నామకరణమ్" },
        { en: "Annaprasana", te: "అన్నప్రాసన" },
        { en: "Chaulam", te: "చౌళము" },
      ],
      note: {
        en: "Astrological guidance is spiritual guidance only and not a substitute for medical tests or treatment.",
        te: "ఇది ఆధ్యాత్మిక మార్గదర్శనం మాత్రమే; వైద్య పరీక్షలకు లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు.",
      },
      seo: {
        title: "Children Astrology | Santana Guidance | Vijayawada",
        description:
          "Astrological guidance for progeny with Sarpa dosha nivarana and related samskaras such as Seemantham and Namakaranam, Vijayawada.",
      },
    },
  },
  {
    slug: "education-astrology",
    name: { en: "Education Astrology", te: "విద్య జ్యోతిష్యం" },
    image: educationImg,
    imageAlt: "Aksharabhyasam ritual with rice grains on a brass plate and slate",
    detail: {
      heroTitle: {
        en: "Astrological Guidance for Education",
        te: "విద్యాభ్యాసానికి జ్యోతిష్య మార్గదర్శనం",
      },
      intro: {
        en: "Guidance on studies, concentration and the field of study best suited to the child, based on the horoscope.",
        te: "జాతకం ఆధారంగా చదువు, ఏకాగ్రత, పిల్లలకు అనుకూలమైన చదువుల రంగం వంటి విషయాల్లో మార్గదర్శనం.",
      },
      examines: [
        { en: "4th and 5th houses", te: "చతుర్థ మరియు పంచమ స్థానములు" },
        { en: "Mercury and Jupiter", te: "బుధుడు మరియు గురువు" },
        { en: "The most suitable field of study", te: "అత్యంత అనుకూలమైన చదువుల రంగం" },
      ],
      remedies: [
        { en: "Related graha japas", te: "సంబంధిత గ్రహ జపములు" },
        { en: "Nakshatra japas and daanas", te: "నక్షత్ర జపములు మరియు దానములు" },
      ],
      samskaras: [
        { en: "Aksharabhyasam", te: "అక్షరాభ్యాసమ్" },
        { en: "Upanayanam", te: "ఉపనయనమ్" },
      ],
      seo: {
        title: "Education Astrology | Vidyabhyasa Guidance | Vijayawada",
        description:
          "Astrological guidance for education — suitable field of study, graha and nakshatra japas, Aksharabhyasam and Upanayanam, Vijayawada.",
      },
    },
  },
  {
    slug: "financial-astrology",
    name: { en: "Financial Astrology", te: "ఆర్థిక జ్యోతిష్యం" },
    image: financialImg,
    imageAlt: "Brass bowl of gold coins with Lakshmi kalasam and betel leaves",
    detail: {
      heroTitle: {
        en: "Astrological Solutions for Financial Difficulties",
        te: "ఆర్థిక ఇబ్బందులకు జ్యోతిష్య పరిష్కారాలు",
      },
      intro: {
        en: "For debts, blocked finances and unstable income, the horoscope is studied and remedies suggested for steadier prosperity.",
        te: "అప్పులు, ఆర్థిక ఇబ్బందులు, ఆదాయంలో స్థిరత్వం లేకపోవడం వంటి సమస్యలకు జాతకాన్ని పరిశీలించి పరిహారములు సూచించబడును.",
      },
      examines: [
        {
          en: "2nd house (dhana sthana) and 11th house (labha sthana)",
          te: "ద్వితీయ స్థానము (ధన స్థానము) మరియు ఏకాదశ స్థానము (లాభ స్థానము)",
        },
        { en: "Jupiter, Venus and Moon strength", te: "గురు, శుక్ర, చంద్రుల బలము" },
        {
          en: "Favourable timing for financial decisions",
          te: "ఆర్థిక నిర్ణయాలకు అనుకూల సమయం",
        },
      ],
      remedies: [
        { en: "Graha japas and daanas", te: "గ్రహ జపములు మరియు దానములు" },
        { en: "Navagraha Shanti", te: "నవగ్రహ శాంతి" },
        {
          en: "Pratyangira Homam and Kushmanda Homam (if needed after analysis)",
          te: "ప్రత్యంగిరా హోమమ్ మరియు కుష్మాండ హోమమ్ (పరిశీలన తరువాత అవసరమైతే)",
        },
      ],
      note: {
        en: "We do not guarantee investment returns or profits. Please also take expert financial advice.",
        te: "పెట్టుబడి లాభాలు లేదా ఫలితాలను మేము హామీ ఇవ్వము. దయచేసి నిపుణుల ఆర్థిక సలహా కూడా తీసుకోండి.",
      },
      seo: {
        title: "Financial Astrology | Dhana Sthana Analysis | Vijayawada",
        description:
          "Astrological solutions for financial difficulties — dhana and labha sthana analysis, Navagraha Shanti and graha daanas, Vijayawada.",
      },
    },
  },
];

export function getService(slug: string): Service {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    throw new Error(`Unknown service: ${slug}`);
  }
  return service;
}

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
import healthCeremony01 from "@/assets/services/health-gallery/ceremony-01.webp";
import healthCeremony02 from "@/assets/services/health-gallery/ceremony-02.webp";
import healthCeremony03 from "@/assets/services/health-gallery/ceremony-03.webp";
import healthCeremony04 from "@/assets/services/health-gallery/ceremony-04.webp";
import healthCeremony05 from "@/assets/services/health-gallery/ceremony-05.webp";
import healthCeremony06 from "@/assets/services/health-gallery/ceremony-06.webp";
import healthCeremony07 from "@/assets/services/health-gallery/ceremony-07.webp";
import healthCeremony08 from "@/assets/services/health-gallery/ceremony-08.webp";
import healthCeremony09 from "@/assets/services/health-gallery/ceremony-09.webp";
import healthCeremony10 from "@/assets/services/health-gallery/ceremony-10.webp";
import healthCeremony11 from "@/assets/services/health-gallery/ceremony-11.webp";
import healthCeremony12 from "@/assets/services/health-gallery/ceremony-12.webp";
import healthCeremony13 from "@/assets/services/health-gallery/ceremony-13.webp";
import healthCeremony14 from "@/assets/services/health-gallery/ceremony-14.webp";
import healthCeremony15 from "@/assets/services/health-gallery/ceremony-15.webp";
import healthCeremony16 from "@/assets/services/health-gallery/ceremony-16.webp";

/** One photo in a service page gallery carousel. */
export type GalleryItem = { image: string; alt: Bi };

export type ServiceDetail = {
  heroTitle: Bi;
  intro: Bi;
  examines?: Bi[];
  remedies?: Bi[];
  samskaras?: Bi[];
  extra?: { title: Bi; items: Bi[] };
  note?: Bi;
  /** Photos shown as an autoplaying carousel at the foot of the page. */
  gallery?: GalleryItem[];
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
        en: "Life samskaras are performed exactly as prescribed by the shastras, at the proper muhurta decided from your horoscope and the panchanga — from Garbhadhanam through to Vivaham. The sankalpa is taken in the name and gotra of the family, the required samagri is assembled beforehand, and ritviks who know the procedure well conduct the rite. The day is fixed by reading the panchanga together with the horoscopes of those concerned, so that the tithi, nakshatra, yoga and karana are all favourable. The chanting, the homa and the offerings follow the tradition your family has kept for generations, so that the samskara is complete in every limb.",
        te: "జాతకం మరియు పంచాంగం ప్రకారం నిర్ణయించిన సరైన శుభముహూర్తంలో, శాస్త్రవిధి ప్రకారం గర్భాధానం నుండి వివాహం వరకు అన్ని జీవిత సంస్కారాలు నిర్వహించబడతాయి. కుటుంబం నామగోత్రాలతో సంకల్పం తీసుకుని, కావలసిన సామగ్రి ముందే సమకూర్చి, పద్ధతి బాగా తెలిసిన ఋత్విక్కులతో ప్రతి రితం జరపబడుతుంది. పంచాంగంతో పాటు ఆయా వ్యక్తుల జాతకాలు కలిపి పరిశీలించి తిథి, నక్షత్రం, యోగం, కరణం అన్నీ అనుకూలమైన రోజు నిశ్చయించబడుతుంది. చదివించడం, హోమం, హోములు మీ కుటుంబం తరాలు తరాలుగా పాటించే పద్ధతినే అనుసరిస్తాయి; అందువల్ల సంస్కారం అంకాలతో పూర్తి అవుతుంది.",
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
        en: "When graha dashas and gocharas bring obstacles, the proper graha shanti is chosen after studying the horoscope, and japa, daana and homa are performed in the shastriya manner. First the strength, position, aspect and conjunction of each graha are examined, and the running dasha and antardasha are checked against the gochara now operating, so that the remedy is aimed at the graha that is actually giving the trouble. A long list of rites is not prescribed — only the shanti the chart calls for. The count of the japa, the day and time for it, the size and kind of the daana and the samagri for the homa are fixed according to the graha and your capacity.",
        te: "గ్రహదశలు, గోచారాల వల్ల కలిగే ఆటంకాలకు జాతక పరిశీలన తర్వాత సరైన గ్రహశాంతి నిర్ణయించబడుతుంది; జప – దాన – హోమాలు శాస్త్రోక్తంగా నిర్వహించబడతాయి. ముందుగా ప్రతి గ్రహం బలం, స్థానం, దృష్టి, సంగోచరం పరిశీలించబడతాయి; ప్రవర్తమాన దశ, అంతరదశ మరియు ఇప్పుడు నడుస్తున్న గోచారం కలిపి చూడడం వల్ల, నిజంగా ఇబ్బంది ఇస్తున్న గ్రహానికే పరిహారం చెప్పబడుతుంది. ఎక్కువ రితాలు చెప్పబడవు; జాతకం అడిగే శాంతి మాత్రమే సూచించబడుతుంది. జపం జెపు, అది చేయవలసిన రోజు మరియు సమయం, దానం పరిమాణం మరియు రకం, హోమం సామగ్రి — అన్నీ గ్రహం మరియు మీ సామర్థ్యం ప్రకారం నిశ్చయించబడతాయి.",
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
        en: "Powerful homas are performed for protection from severe doshas and long-standing difficulties, with the full shastriya procedure and sankalpa. These rites are not undertaken lightly: the horoscope is first examined to confirm that such a homa is truly needed, and the particular homa — Chandi, Pratyangira or Kushmanda, or a shanti such as Ugraratha or Bheemaratha — is chosen from that reading. The kundam, the samagri, the number of hunas, the ritviks and the muhurta are arranged in advance, and the sankalpa is taken in the name and gotra of the person for whom it is done. Those who cannot attend may send their name and gotra, and the sankalpa includes them too.",
        te: "తీవ్రమైన దోషాలు మరియు ఎక్కువ కాలం కొనసాగుతున్న కష్టాల నివారణకు, పూర్తి శాస్త్రోక్త పద్ధతిలో సంకల్పంతో విశేష హోమాలు నిర్వహించబడతాయి. ఈ రితాలు సులభంగా చేయబడవు; అటువంటి హోమం నిజంగానే కావాలా అని ముందుగా జాతకం పరిశీలించబడుతుంది. చండీ, ప్రత్యంగిరా, కుష్మాండ హోమాలు లేదా ఉగ్రరథ, భీమరథ శాంతులు — వాటిలో ఏది చేయవలసినో ఆ పరిశీలనతో నిశ్చయించబడుతుంది. కుండం, సామగ్రి, హోముల జెపు, ఋత్విక్కులు, ముహూర్తం ముందే ఏర్పాటు చేయబడతాయి; హోమం చేయించుకుంటున్న వ్యక్తి నామగోత్రాలతో సంకల్పం తీసుకొనబడుతుంది. రాగలని వారు తమ పేరు మరియు గోత్రం పంపితే, వారి పేరు కూడా సంకల్పంలో చేర్చబడుతుంది.",
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
        en: "For problems relating to health, job, business, marriage, children, education, finances, own-house acquisition and foreign travel, suitable shastric remedies are suggested after a full horoscope analysis. The lagna, the houses concerned, their lords and the grahas seated there are studied together with the running dasha and the gochara now operating, so that the real cause of the difficulty is located and not merely its symptom. Kuja, Kalasarpa, Sarpa and vamsha-paramparya doshas are examined and, where present, their nivarana is suggested. The japa, daana or homa prescribed is one you can actually carry out — the count, the day, the time and the samagri are explained to you clearly.",
        te: "ఆరోగ్యం, ఉద్యోగం, వ్యాపారం, వివాహం, సంతానం, విద్య, ధనం, సొంత ఇల్లు, విదేశ ప్రయాణం మొదలైన విషయాలకు జాతక పరిశీలన తర్వాత సరైన శాస్త్రీయ పరిహారాలు సూచించబడతాయి. లగ్నం, సంబంధిత స్థానాలు, వాటి అధిపతులు, అక్కడ ఉన్న గ్రహాలు — ప్రవర్తమాన దశ మరియు ఇప్పుడు నడుస్తున్న గోచారంతో కలిపి చూడబడతాయి; అందువల్ల లక్షణం కాకుండా, ఇబ్బందికి నిజమైన కారణం గుర్తింపబడుతుంది. కుజ, కాలసర్ప, సర్ప, వంశపరంపర్య దోషాలు పరిశీలించబడతాయి; ఉంటే వాటి నివారణ సూచించబడుతుంది. చెప్పబడే జపం, దానం, హోమం మీరు నిజంగానే చేయగలిగేవిగా ఉంటాయి; జెపు, రోజు, సమయం, సామగ్రి స్పష్టంగా వివరించబడతాయి.",
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
        en: "For long-standing health worries, the horoscope is studied for planetary causes and appropriate shantis are suggested alongside proper medical care. The lagna and its strength, the sixth house of roga, the eighth house of ayushya and their lords, the position of the Moon, and the running dasha, antardasha and gochara are all examined, so that the periods in which health tends to dip can be recognised in advance. The graha links behind chronic trouble are pointed out and the corresponding shanti, japa or daana is suggested. These remedies are given along with your doctor's advice, never in place of it.",
        te: "ఎక్కువ కాలం కొనసాగుతున్న ఆరోగ్య సమస్యలకు జాతకంలో గ్రహస్థితులు పరిశీలించబడతాయి; సరైన వైద్యంతో పాటు సరైన శాంతులు – పరిహారాలు సూచించబడతాయి. లగ్నం మరియు దాని బలం, రోగ స్థానమైన ఆరవ స్థానం, ఆయుర్భావమైన ఎనిమిదవ స్థానం మరియు వాటి అధిపతులు, చంద్రుని స్థానం, ప్రవర్తమాన దశ, అంతరదశ మరియు గోచారాలు అన్నీ పరిశీలించబడతాయి; అందువల్ల ఆరోగ్యం క్షీణించే కాలం ముందే తెలిసికొనబడుతుంది. దీర్ఘకాలిక సమస్యల వెనుక ఉన్న గ్రహ సంబంధం గుర్తింపబడి, దానికి తగిన శాంతి, జపం, దానం సూచించబడుతుంది. ఇవి మీ వైద్యుని సలహాతో పాటు ఇవబడతాయి; వైద్య చికిత్సకు ప్రత్యామ్నాయం కావు.",
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
      gallery: [
        {
          image: healthCeremony01,
          alt: {
            en: "Elders seated on the ornate silver chair receiving the ceremony offering",
            te: "అలంకృత వెండి పీఠంపై కూర్చుని కార్యక్రమ నివేదన స్వీకరిస్తున్న గృహస్తులు",
          },
        },
        {
          image: healthCeremony02,
          alt: {
            en: "Pada puja — the elders' feet washed and blessed during the ceremony",
            te: "పాదపూజ — కార్యక్రమంలో గృహస్తుల పాదములు కడగబడుతున్న సమయం",
          },
        },
        {
          image: healthCeremony03,
          alt: {
            en: "A young devotee seated on the silver chair with folded hands",
            te: "వెండి పీఠంపై కరజోడు చేస్తూ కూర్చున్న యువ భక్తుడు",
          },
        },
        {
          image: healthCeremony04,
          alt: {
            en: "A devotee presenting the wrapped offering topped with bananas and flowers",
            te: "అరటిపండ్లు, పూలతో అలంకరించిన నివేదనను అర్పిస్తున్న భక్తురాలు",
          },
        },
        {
          image: healthCeremony05,
          alt: {
            en: "Blessings being received by the elders during the family ceremony",
            te: "కుటుంబ కార్యక్రమంలో గృహస్తులు ఆశీర్వాదాలు స్వీకరిస్తున్న సమయం",
          },
        },
        {
          image: healthCeremony06,
          alt: {
            en: "A couple receiving the ceremony offering on the silver chair",
            te: "వెండి పీఠంపై దంపతులు కార్యక్రమ నివేదన స్వీకరిస్తున్నారు",
          },
        },
        {
          image: healthCeremony07,
          alt: {
            en: "A turmeric-and-vermilion blessing being applied during the ceremony",
            te: "కార్యక్రమంలో హల్ది–బెల్లం ఆశీర్వాదం అర్పిస్తున్న సమయం",
          },
        },
        {
          image: healthCeremony08,
          alt: {
            en: "A tray of bananas and flowers offered to the seated elders",
            te: "కూర్చున్న గృహస్తులకు అరటిపండ్లు, పూలతో నివేదన అర్పిస్తున్న సమయం",
          },
        },
        {
          image: healthCeremony09,
          alt: {
            en: "A woman in a red sari presenting the offering parcel to the couple seated on the silver throne",
            te: "ఎర్రటి చీర ధరించిన భక్తురాలు వెండి పీఠంపై కూర్చున్న దంపతులకు నివేదన పొట్లం అర్పిస్తున్నారు",
          },
        },
        {
          image: healthCeremony10,
          alt: {
            en: "A woman in a red-and-gold sari presenting the fruit-and-flower wrapped offering to the seated couple",
            te: "పండ్లు, పూలతో అలంకరించిన నివేదనను కూర్చున్న దంపతులకు అర్పిస్తున్న భక్తురాలు",
          },
        },
        {
          image: healthCeremony11,
          alt: {
            en: "Priests and family members greeting the elders on the throne with folded hands",
            te: "పీఠంపై కూర్చున్న గృహస్తులకు ఋత్విక్కులు, కుటుంబసభ్యులు కరజోడు చేస్తున్న సమయం",
          },
        },
        {
          image: healthCeremony12,
          alt: {
            en: "A woman in a red silk sari receiving the elders' blessing at the ceremony entrance",
            te: "కార్యక్రమ ప్రవేశద్వారం వద్ద గృహస్తుల ఆశీర్వాదం పొందుతున్న భక్తురాలు",
          },
        },
        {
          image: healthCeremony13,
          alt: {
            en: "The elders holding the offering tray as family members and the priest bow in prayer",
            te: "నివేదన పళ్ళు ధరించిన గృహస్తులకు కుటుంబసభ్యులు, ఋత్విక్కుడు ప్రణామం చేస్తున్నారు",
          },
        },
        {
          image: healthCeremony14,
          alt: {
            en: "Elders and guests in traditional white attire gathered before the ceremony begins",
            te: "కార్యక్రమం ప్రారంభానికి ముందు సంప్రదాయ వస్త్రాలతో సమావేశమైన పెద్దలు, అతిథులు",
          },
        },
        {
          image: healthCeremony15,
          alt: {
            en: "The golden Anantha Padmanabha idol lit by oil lamps in the temple chamber",
            te: "గుహా మందిరంలో దీపాల వెలుగులో ఉన్న అనంత పద్మనాభుని బంగారు విగ్రహం",
          },
        },
        {
          image: healthCeremony16,
          alt: {
            en: "The priest holding the ceremonial kalash as the homa is performed",
            te: "హోమం జరుగుతున్న సమయంలో కలశం ధరించిన ఋత్విక్కుడు",
          },
        },
      ],
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
        en: "For delays in getting a job, frequent changes, or obstacles in promotion, the horoscope is examined and the proper remedies and timing suggested. The tenth house and its lord, the sixth house of service, and the strength of Saturn, the Sun and Jupiter are studied together with the dasha periods that favour career growth and the gochara now operating. This shows whether the delay comes from a weak graha, a dosha, or simply a period that has not yet arrived. The japa, shanti or daana prescribed is explained with its count, the day and the length of time, and the period in which you may expect movement is indicated.",
        te: "ఉద్యోగం ఆలస్యంగా రావడం, తరచుగా మార్పులు కావడం, పదోన్నతులలో ఆటంకాలు వంటి సమస్యలకు జాతకం పరిశీలించబడి, సరైన పరిహారాలు మరియు సమయం సూచించబడతాయి. దశమ స్థానం మరియు దాని అధిపతి, సేవకు అయిన ఆరవ స్థానం, శని, సూర్యుడు, గురువుల బలం — వృద్ధికి అనుకూలమైన దశలు మరియు ఇప్పుడు నడుస్తున్న గోచారంతో కలిపి చూడబడతాయి. ఆలస్యానికి కారణం బలహీనమైన గ్రహమా, దోషమా, లేదా ఇంకా రాని కాలమా అని దీనివల్ల తెలిసికొనబడుతుంది. చెప్పబడే జపం, శాంతి, దానం జెపు, రోజు, ఎంత కాలం చేయవలసినో వివరించబడుతుంది; మార్పు ఎప్పటికి ఆశించవచ్చో కూడా తెలియజేయబడుతుంది.",
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
        en: "Guidance for starting or growing a business — partnerships, profits, stability, and the right muhurta for a new venture. The seventh house of partnership, the tenth house of enterprise and the eleventh house of gain are examined, along with the strength of Mercury, Jupiter and Venus, so that the kind of trade suited to you and the partners you can work well with become clear. Auspicious moments are fixed for opening a new shop, starting a venture, signing an agreement or moving to new premises. Graha japas, daanas and, where the chart calls for it, homas are suggested for stability and steady profit.",
        te: "వ్యాపారం ప్రారంభించడానికి లేదా అభివృద్ధి చేయడానికి — భాగస్వామ్యం, లాభాలు, స్థిరత్వం, కొత్త వ్యాపారానికి శుభముహూర్తం వంటి విషయాలకు మార్గదర్శనం ఇవబడుతుంది. భాగస్వామ్యానికైన ఏడవ స్థానం, వ్యాపారానికైన దశమ స్థానం, లాభానికైన ఏకాదశ స్థానం పరిశీలించబడతాయి; బుధ, గురు, శుక్రుల బలం చూడబడుతుంది. మీకు అనుకూలమైన వ్యాపార రకం, మీరు బాగా పనిచేయగలిగే భాగస్వాములు ఎవరో తెలిసికొనబడుతుంది. కొత్త షాపు తెరవడం, కొత్త వ్యాపారం, ఒప్పందం సంతకం, కొత్త చోటుకు మారడం వంటి వాటికి శుభముహూర్తం నిశ్చయించబడుతుంది. స్థిరత్వం మరియు నిలకడైన లాభానికి గ్రహ జపాలు, దానాలు, అవసరమైతే హోమాలు సూచించబడతాయి.",
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
        en: "Complete marriage guidance — matching of horoscopes, analysis of delays and doshas, muhurta selection, and performing the vivaham samskara. Guna melanam is carried out in the traditional manner, and beyond the points scored, the horoscopes of the bride and the groom are studied for compatibility of health, progeny, finances and temperament. Where there is delay, the cause is examined — Kuja dosha, Kalasarpa dosha, a weak seventh house or an unfavourable dasha — and its nivarana is suggested. A shubha muhurta is then fixed for the vivaham, and the marriage samskara is performed as per the shastras.",
        te: "వివాహానికి పూర్తి మార్గదర్శనం — జాతక సరిపోలిక (గుణ మేళనం), వివాహ ఆలస్యానికి కారణాలు, దోష పరిశీలన, శుభముహూర్త నిర్ణయం, వివాహ సంస్కార నిర్వహణ అన్నీ ఇక్కడ చేయబడతాయి. గుణ మేళనం పారంపర్య పద్ధతినే జరపబడుతుంది; వచ్చిన అంకెలతో పాటు, దాంపత్యంలో ఆరోగ్యం, సంతానం, ధనం, స్వభావం అనుకూలంగా ఉన్నాయో లేదో ఇరువురి జాతకాలు చూడబడతాయి. వివాహం ఆలస్యం అవుతుంటే దానికి కారణం — కుజ దోషం, కాలసర్ప దోషం, ఏడవ స్థానం బలహీనత, లేదా అనుకూలమైన దశ — గుర్తింపబడి దాని నివారణ సూచించబడుతుంది. తరువాత వివాహానికి శుభముహూర్తం నిశ్చయించి, వివాహ సంస్కారం శాస్త్రవిధి ప్రకారం నిర్వహించబడుతుంది.",
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
        en: "For those longing for children, the horoscope is examined and the appropriate shantis and related samskaras are suggested. The fifth house and its lord, the strength of Jupiter, the position of the Moon, and any Sarpa or vamsha-paramparya dosha are studied together with the running dasha, so that the period favourable for progeny can be recognised. Where a dosha is found, its nivarana is prescribed with the japa, daana or homa that suits the chart. The samskaras connected with progeny — Garbhadhanam, Pumsavanam, Seemantham and the rites that follow the birth — are performed at the proper time.",
        te: "సంతానం కోసం ఆకాంక్షించే వారికి జాతకం పరిశీలించబడి, సరైన శాంతులు మరియు సంబంధిత సంస్కారాలు సూచించబడతాయి. పంచమ స్థానం మరియు దాని అధిపతి, గురువుని బలం, చంద్రుని స్థానం, సర్ప దోషం లేదా వంశపరంపర్య దోషాలు ఉన్నాయో అన్నీ, ప్రవర్తమాన దశతో కలిపి చూడబడతాయి; అందువల్ల సంతానానికి అనుకూలమైన కాలం గుర్తింపబడుతుంది. దోషం కనిపిస్తే, జాతకానికి తగిన జపం, దానం లేదా హోమంతో దాని నివారణ చెప్పబడుతుంది. సంతానానికి సంబంధించిన సంస్కారాలు — గర్భాధానం, పుంసవనం, సీమంతం, పుట్టిన తర్వాత చేయవలసిన రితాలు — సరైన సమయంలో నిర్వహించబడతాయి.",
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
        en: "Guidance on studies, concentration and the field of study best suited to the child, based on the horoscope. The fourth and fifth houses and their lords, the strength of Mercury and Jupiter, and the dasha periods now running are examined, so that the subjects and the field in which the child is likely to do well can be identified early. Difficulties such as lack of concentration, fear of exams or a change of stream are studied for their planetary causes, and the related graha or nakshatra japas and daanas are suggested. The samskaras of Aksharabhyasam and Upanayanam are performed at the proper muhurta.",
        te: "జాతకం ఆధారంగా చదువు, ఏకాగ్రత, పిల్లలకు అనుకూలమైన చదువుల రంగం వంటి విషయాలలో మార్గదర్శనం ఇవబడుతుంది. చతుర్థ, పంచమ స్థానాలు మరియు వాటి అధిపతులు, బుధుడు మరియు గురువుల బలం, ఇప్పుడు నడుస్తున్న దశలు పరిశీలించబడతాయి; అందువల్ల పిల్లలు ఏ రంగంలో, ఏ విషయాలలో బాగా చేస్తారో ముందే తెలిసికొనబడుతుంది. ఏకాగ్రత లేకపోవడం, పరీక్షల భయం, రంగం మార్చడం వంటి ఇబ్బందులకు గ్రహ కారణాలు చూడబడతాయి, సంబంధిత గ్రహ లేదా నక్షత్ర జపాలు, దానాలు సూచించబడతాయి. అక్షరాభ్యాసం, ఉపనయనం వంటి సంస్కారాలు సరైన ముహూర్తంలో నిర్వహించబడతాయి.",
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
        en: "For debts, blocked finances and unstable income, the horoscope is studied and remedies suggested for steadier prosperity. The second house of dhana, the eleventh house of labha, their lords, and the strength of Jupiter, Venus and the Moon are examined together with the dasha and gochara now operating. This shows whether the trouble is a period that will pass, a graha that needs propitiation, or a dosha that must be removed. Graha japas, daanas and, where the chart calls for it, Pratyangira or Kushmanda homam are suggested so that income becomes steadier and debts reduce.",
        te: "అప్పులు, ఆర్థిక ఇబ్బందులు, ఆదాయంలో స్థిరత్వం లేకపోవడం వంటి సమస్యలకు జాతకం పరిశీలించబడి, నిలకడైన అభివృద్ధికి పరిహారాలు సూచించబడతాయి. ధన స్థానమైన రెండవ స్థానం, లాభ స్థానమైన ఏకాదశ స్థానం, వాటి అధిపతులు, గురు, శుక్ర, చంద్రుల బలం — ప్రవర్తమాన దశ మరియు నడుస్తున్న గోచారంతో కలిపి చూడబడతాయి. ఈ ఇబ్బంది ముగిసే కాలమా, సమర్పించవలసిన గ్రహమా, తొలగించవలసిన దోషమా అని దీనివల్ల తెలిసికొనబడుతుంది. ఆదాయం నిలకడగా కావడానికి, అప్పులు తగ్గడానికి గ్రహ జపాలు, దానాలు, జాతకం అడిగితే ప్రత్యంగిరా లేదా కుష్మాండ హోమం సూచించబడుతుంది.",
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

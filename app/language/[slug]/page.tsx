"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const languageData: Record<
  string,
  {
    title: string;
    subtitle: string[] | string;
    requirementsTitle: string;
    paragraphs: string[];
    image: string;
  }
> = {
  italian: {
    title: " AUTHORIZED ITALIAN TRANSLATION",

    subtitle:
      "Transworld Translation (Pvt) Ltd is an authorized company by Italian Embassy. We have a vast experience of providing translations to people who would like to submit their documents in Italian Embassy. Our aim is to provide translations according to Embassy’s requirement. We facilitate people as much as we can.",

    requirementsTitle: "General Requirements",

    paragraphs: [
      "1.  Documents should be in good condition and in readable form. Torn papers will not be accepted by Embassy of Italy, Islamabad.",

      "2. Documents for submission in Italian Embassy must be attested by Ministry of Foreign Affairs, Pakistan.",

      "3. Educational documents should be attested by IBCC (Matric & Inter Certificates) & HEC (Graduation Certificates) then Ministry of Foreign Affairs, Pakistan will attest these certificates.",

      "4. Column no. 21 of Urdu Nikah Nama should be duly filled according to the Italian Embassy’s instruction.",

      "Translation Fee is charged in advance. Applicants sending their documents via courier can pay their fee online and dispatch photocopy of the payment receipt along with their documents.",
    ],

    image: "/italian2.png",
  },

  spanish: {
    title: "SPANISH  TRANSLATION",

    subtitle:
      "Transworld Translation provides you sworn Spanish translation which will be accepted by the Embassy of Spain, Islamabad.",

    requirementsTitle: "General Requirements",

    paragraphs: [
      "1. Particulars written on the original document should be same as mentioned on applicant’s passport.",

      "2. Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan",

      "3. Certified translation (which is accepted by the Embassy of Spain Islamabad) will be done by our translator which is in Spain & authorized by Embassy of Spain, Pakistan. Translations from local translators will be accepted by Embassy.",

      "4. Translation submitted directly in Spain can be done by our qualified translator here in Pakistan.",
    ],

    image: "/spanish2.jpg",
  },

  french: {
    title: "FRENCH TRANSLATION",

    subtitle: [
      "Transworld Translation facilitate you with an authorized French translation. We have a strong command over this beautiful language because our founder of the company is having linguist background in this language.",
      "He has done his BS French from NUML & has an experience of providing translation to those people who need French translation for the submission in French Embassy, Islamabad.",
    ],

    requirementsTitle: "General Requirements",

    paragraphs: [
      "1. Documents should be attested by Ministry of Foreign Affairs, Islamabad.",
      "2. Spellings of Applicant name, father’s name should be the same as mentioned in applicant’s passport.",
      "3.  Applicant’s surname should be told to translator because Surname should be written in block letters.",
      "4. Documents for translation will be told by the Embassy.",
    ],

    image: "/french2.jpg",
  },
  german: {
    title: "GERMAN TRANSLATION",

    subtitle:
      "We provide you human translation which will be done by our experienced translator.",

    requirementsTitle: "General Requirements",

    paragraphs: [
      "1. Readable documents shall be booked for translation.",
      "2. Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
      "3.  Embassy of Germany, Islamabad does not authorize anyone for doing translations for Embassy of Germany, Islamabad.",
      "4. Embassy of Germany does not require translations of family documents unless they require it.",
    ],

    image: "/germen2.jpg",
  },
  arabic: {
    title: "ARABIC TRANSLATION",

    subtitle:
      "Arabic translation is one of those translations which will be required for one or more embassies. Transworld Translation facilitates you with Arabic translation according to respective Embassy’s requirement.",

    requirementsTitle: "General Requirements",

    paragraphs: [
      "1. Readable documents shall be booked for translation.",
      "2. If applicant needs translation for Foreign office attestation, then translation will be done in Arabic & English on the same page after that Ministry of Foreign Affairs Pakistan attest the translation.",
      "3. If applicant needs translation directly for Embassy then first of all original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
    ],

    image: "/arabic2.jpg",
  },

  turkish: {
    title: "TURKISH TRANSLATION",

    subtitle: "Provides Human Translations.",

    requirementsTitle: "General Requirements",

    paragraphs: [
      "1. Readable documents shall be booked for translation.",
      "2. Original documents shall duly be attested first by Ministry of Foreign Affairs Pakistan.",
      "3.If applicant needs translation for Embassy of Turkey, Pakistan, it will be translated by authorized Turkish translator by Embassy of Turkey.",
      "4. If applicant needs translation for submission directly in Turkey for his/her educational or any other purpose, it will be translated from any qualified translator.",
    ],

    image: "/turkish2.jpg",
  },

  english: {
    title: "ENGLISH TRANSLATION",

    subtitle:
      "We are here to help you in English to Urdu translations or Urdu to English translation for different embassies.",

    requirementsTitle: "General Requirements",

    paragraphs: [
      "1. Readable documents shall be booked for translation.",
      "2. English translation can also be done without MOFA attestation but it’s much to get your documents attested by MOFA to save time.",
      "3.We provide quality translation in English language which are executed as per required pattern of UK, USA, CANADIAN & AUSTRALIAN Embassies.",
    ],

    image: "/english2.jpg",
  },
};

export default function LanguagePage({ params }: { params: { slug: string } }) {
  const data = languageData[params.slug];

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Language Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 text-white"
        style={{
          backgroundImage: "url('/Services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl font-bold uppercase tracking-wide sm:text-1xl">
            {data.title}
          </h1>

          <div className="mt-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-200">
            <Link href="/">Home</Link>
            <span>|</span>
            <span>{data.title}</span>
          </div>
        </motion.div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-white py-24 px-6 sm:px-10 lg:px-16">
        {/* TOP HEADING */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-amber-600">{data.title}</h2>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            {data.subtitle}
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="mx-auto max-w-5xl space-y-24">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={data.image}
                alt={data.title}
                className="h-[280px] w-[420px] object-cover shadow-md"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {/* STATIC */}
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-slate-500">
                  TRANSWORLD TRANSLATION
                </p>

                <div className="h-[2px] w-12 bg-amber-600"></div>
              </div>

              {/* DYNAMIC */}
              <h3 className="text-4xl font-bold text-slate-900">
                {data.requirementsTitle}
              </h3>

              {/* DYNAMIC PARAGRAPHS */}
              <div className="space-y-4">
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index} className="max-w-md leading-8 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* STATIC BUTTON */}
              <Link href="../components/contact" className="inline-block  rounded-md bg-amber-500 px-2 py-2 text-sm font-semibold uppercase tracking-wide text-white group relative overflow-hidden">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  DISCOVER MORE
                </span>

                <span
                  className="
      absolute
      left-0
      top-0
      h-full
      w-0
      rounded-md
      bg-black
      transition-all
      duration-300
      group-hover:w-full
    "
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

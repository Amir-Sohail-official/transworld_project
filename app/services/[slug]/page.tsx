"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const servicesData: Record<
  string,
  {
    title: string;
    subtitle: string | string[];
    sections: {
      heading?: string;
      content?: string;
      list?: string[];
    }[];
  }
> = {
  localization: {
    title: "Localization",

    subtitle:
      "Worldwide trade has united the world. You can buy something halfway across the globe from the comfort of your home and have it within a week. Despite the fact that purchasers receive the full rewards of this accommodation, they despite everything want to purchase items and administrations that impart in their local language.",

    sections: [
      {
        heading: "Advantages",

        content:
          "We give your computerized substances a distinct language and social sensitivities with the goal that it appears normal to your clients.",
      },

      {
        content:
          "We help you archive your goals in rallying your worldwide business. We, through our professional efforts, get personally acquainted with your organization, its items, and the multilingual crowd it serves. In this way we manage to come up with a tweaked arrangement exclusively suited to your style of work, this results in greater, shorter turnaround times and very low cost. You can totally depend on us to convey precisely what you need, and exactly what you need.",
      },

      {
        heading: "Content We Localize",

        list: [
          "Websites",
          "Software",
          "Online applications",
          "Mobile apps",
          "Training materials",
          "eLearning",
          "Multimedia content",
          "Subtitles and graphics",
        ],
      },
    ],
  },

  proofreading: {
    title: "Proofreading",

    subtitle:
      "It can be quite a challenge to write composing papers, propositions, reports, thesis, audits, award recommendations, CVs, web messages and different correspondences in English, especially when deadlines are fast approaching and English is not your first language and the level you grasp on English required for the task surpass your literary talents",

    sections: [
      {
        content:
          "By choosing us you would be sparing time, disappointment and cash. We completely understand the way towards composing scholastic and other specialized interchanges in English. And we do it rapidly, precisely and adequately.",
      },

      {
        content:
          "All our editors have a PhD or a Master’s degree and extensive experience in industrial and academic research, as well as linguistic skills honed with in-house training We cover the full spectrum of science (pure, applied and social) and humanities.",
      },

      {
        heading: "Publishing",

        content:
          "Maximize your chances of publishing papers",
      },

      {
        heading: "Dissertations",

        content:
          "Successfully complete dissertations and doctoral thesis",
      },

      {
        heading: "Writing Impact",

        content:
          "Increase the impact of all scientific writing and technical communications",
      },
    ],
  },

  interpreting: {
    title: "Interpretation Services",

    subtitle:
      "Interpretation services help companies around the world to communicate, from one-to-one conversations to huge conferences. As the organizations are attempting to grow their viewpoints and become brand in various ventures, a translation administration permits you to chat with your intended interest group without a language hindrance but If you have an interpreter with you.",

    sections: [
      {
        heading: "Consecutive Interpretation",

        content:
          "For littler gatherings, including balanced conversations, continuous translation gives a prudent, customized administration that permits you to direct your business easily and effectively. Not exclusively are our continuous mediators’ language aptitudes eminent, they are additionally exceptionally friendly people who give the ideal mix of polished skill and agreeability.",
      },

      {
        content:
          "In the event that your business could profit by proficient, exceptionally talented deciphering administrations, contact our experts today to discover more.",
      },

      {
        heading: "Occasions:",

        list: [
          "International Business Conference",
          "Business Negotiation",
          "Academic Report",
          "Seminar",
          "Press Conference",
          "Court Trial",
        ],
      },

      {
        heading: "Conference Interpretation",

        content:
          "Synchronous translation in opted by the use of gathering information to convey the scope occasions to delegates around the globe. The occasion coordinator can pick the best speakers for around the globe, as implied by the stall/headset arrangement, without stressing over which dialects they are going to be introduced in. Our meeting mediators have years of experience and are exceptionally talented at deciphering moderators’ words continuously, this way the representatives of all nationalities can gain from the discourses being conveyed at the occasion.",
      },

      {
        heading: "Occasions:",

        list: [
          "International Conference",
          "Press Conference",
          "High-end Summit",
        ],
      },

      {
        heading: "Remote Phone/Video Interpretation Service",

        content:
          "This can be maybe one of the foremost popular and most utilized translation administrations. On the off chance that individuals don’t need to have escort translation benefit, they choose Remote Phone/Video Translation Benefit. This permits them to communicate with their clients whereas there’s an mediator is live with them through a video call or by means of phone. The translator will decipher the discussion consistently for both parties by means of the chosen channel and make beyond any doubt that both parties get it each other legitimately and clearly.",
      },
    ],
  },

  translation: {
    title: "Translation",

    subtitle:
      "Since we understand and have confidence in the intensity of incredible translation. We have explored the whole world to find the best language specialist to add to our group. The result of these struggles shows in the 98.5 percent consumer loyalty rate from the huge number of ventures we undertake every year.",

    sections: [
      {
        content:
          "We have the capability to translate any kind of document or substance to help develop your business, increment productivity, and fortify consistency.",
      },

      {
        heading: "We offer services across multiple industries.",

        list: [
          "Business: product information, customer communication, employee materials",
          "Health care: vital documents, discharge instructions, notices of eligibility, patient forms",
          "Financial services: loan documents, contracts, mortgage papers, financial applications, account statements, credit reports",
          "Insurance: claims forms, policy information, accident reports",
          "Government: notices of rights, consent forms, complaints, letters requiring response, applications, public outreach",
        ],
      },
    ],
  },
};

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const data = servicesData[params.slug];

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
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
        <div className="absolute inset-0 bg-black/60" />

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
        <div className="mx-auto max-w-4xl">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900">
              {data.title}
            </h2>

            <div className="mt-8 space-y-5">
              {Array.isArray(data.subtitle) ? (
                data.subtitle.map((item, index) => (
                  <p
                    key={index}
                    className="leading-8 text-slate-600"
                  >
                    {item}
                  </p>
                ))
              ) : (
                <p className="leading-8 text-slate-600">
                  {data.subtitle}
                </p>
              )}
            </div>
          </motion.div>

          {/* SECTIONS */}
          <div className="space-y-16">
            {data.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {section.heading && (
                  <h3 className="mb-6 text-3xl font-bold text-slate-900">
                    {section.heading}
                  </h3>
                )}

                {section.content && (
                  <p className="leading-8 text-slate-600">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-600">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
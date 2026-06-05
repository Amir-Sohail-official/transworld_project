"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


const coursesData: Record<
  string,
  {
    title: string;
    subtitle: string[] | string;
    image: string;
  }
> = {
  ITL: {
    title: " ITL",

    subtitle:
      "Join our group course for advanced level speakers and develop new skills.",

    
    image: "/E.jpg",
  },

  FR: {
    title: "FR",

    subtitle:
      "Our great teachers will make you fall in love with this beautiful language.",
    image: "/E1.jpg",
  },

  ENG: {
    title: "FRENCH TRANSLATION",

    subtitle: 
      "Explore one of the most popular and in-demand course in the English world.",
    image: "/E2.jpg",
  },
};

export default function LanguagePage({
  params,
}: {
  params: { slug: string };
}) {
  const data = coursesData[params.slug];

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
          <h1 className="text-5xl font-bold uppercase tracking-wide sm:text-6xl">
            {data.title}
          </h1>

          <div className="mt-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-200">
            <Link href="/">Home</Link>
            <span>|</span>
            <span><Link href="/all_courses">all courses</Link></span>
          </div>
        </motion.div>
      </section>

      {/* SECOND SECTION */}
      <motion.section
        id="language-courses"
        className="bg-[#f6f7fb] px-6 py-24 sm:px-10 lg:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        {/* CARDS */}
        {/* <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"> */}
          <div className="bg-white shadow-sm w-96 ml-44">
            <div className="relative">
              <img src={data.image} className="w-full h-[230px] object-cover" />

              <Link href="/italian-course">
                <button className="absolute right-4 bottom-[-22px] bg-[#d4a24c] text-white text-[12px] w-12 h-12 flex items-center justify-center rounded-full">
                  IT
                </button>
              </Link>
            </div>

            <div className="pt-12 pb-8 px-6 text-left">
              <h3 className="text-[20px] font-semibold text-[#1f2a44] mb-3">
                {data.title}
              </h3>
              <p className="text-[#6b7280] text-[14px] leading-6">
                {data.subtitle}
              </p>
            </div>
          </div>
        {/* </div> */}
      </motion.section>
    </div>
  );
}
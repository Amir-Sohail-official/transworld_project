"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, BookOpenCheck, Languages, ScrollText } from "lucide-react";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    slug: "localization",
    title: "Localization",
    image: "/local.png",
    link: "/services/localization",
    description:
      "Worldwide trade has united the world. You can buy something halfway across the globe from the comfort of your home and have it within a week. Despite the fact that purchasers receive the full rewards of this accommodation there are still administrations that create language barriers.",
  },
  {
    slug: "proofreading",
    title: "Proofreading",
    image: "/prof.png",
    link: "/services/proofreading",
    description:
      "It can be quite a challenge to write composing papers, propositions, reports, thesis, audits, award recommendations, CVs, web messages and different correspondences in English, especially when deadlines are fast approaching and English is not your first language.",
  },
  {
    slug: "interpreting",
    title: "Interpreting",
    image: "/inter.png",
    link: "/services/interpreting",
    description:
      "Interpretation services help to communicate around the world without any kind of language barrier. From one-to-one conversation to big conferences, organizations are attempting to expand their viewpoint and become recognized across various regions.",
  },
  {
    slug: "translation",
    title: "Translation",
    image: "/trans.png",
    link: "/services/translation",
    description:
      "Since we understand and have confidence in the intensity of incredible translation, we explore the world to find the best language specialists to add to our group. The result of these efforts reflects in our customer satisfaction and loyalty rate every year.",
  },
];

export default function servicesPage() {
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
            Our Services
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-200">
            <Link href="/" className="hover:text-amber-500">Home</Link>
            <span>|</span>
            <span>Our Services</span>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f5f5f5] py-[90px]">
        <div className="mx-auto max-w-[1180px] px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mb-[65px] text-center"
          >
            <h2 className="text-[52px] font-[800] leading-none tracking-[-1px] text-[#16254c]">
              Language Services
            </h2>

            <p className="mx-auto mt-4 max-w-[720px] text-[13px] leading-[24px] text-[#7f8798]">
              Our multiple services will give you a wide range of all types of
              professional translation jobs that you might be in a need of.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-wrap items-stretch justify-center gap-[18px]">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="
          flex
          min-h-[560px]
          w-[250px]
          flex-col
          items-center
          bg-[#f1f1f1]
          px-[28px]
          pt-[45px]
          pb-[35px]
          text-center
        "
                >
                  {/* Image + Title Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex flex-col items-center"
                  >
                    {/* Image */}
                    <div className="mb-[26px] flex h-[82px] w-[82px] items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-[60px] w-[60px] object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mb-[18px] text-[20px] font-[700] text-[#1b2341] transition-colors duration-300 hover:text-[#d9a63b]">
                      {service.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-[14px] leading-[31px] text-[#7b8190]">
                    {service.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto pt-[38px]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="
              inline-flex
              h-[35px]
              items-center
              justify-center
              rounded-md
              bg-[#d9a63b]
              px-[20px]
              text-[12px]
              font-[700]
              uppercase
              tracking-[0.5px]
              text-white
              group relative overflow-hidden
            "
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        READ MORE
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
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <motion.section
        id="languages"
        className="relative overflow-hidden bg-[#1c1c22] px-6 py-24 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className=" space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[12px] tracking-[0.35em] text-white font-semibold">
                LANGUAGES
              </p>
              <span className="block h-[2px] w-16 bg-yellow-500"></span>
            </div>

            <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-10">
              Overcome the Language <br />
              Barrier with Multilingual <br />
              Translation <br />
              <span>Services</span>
            </h2>

            <Link href="../components/contact" className="inline-block
            bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold group relative overflow-hidden">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                MORE INFORMATION
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
          </div>

          {/* RIGHT BARS */}
          <div className="space-y-8 mr-12 max-w-lg">
            {[
              { label: "ITALIAN", value: 90 },
              { label: "FRENCH", value: 85 },
              { label: "ENGLISH", value: 80 },
              { label: "SPANISH", value: 75 },
              { label: "MORE LANGUAGES", value: 70 },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-white text-xs tracking-[0.25em] mb-2">
                  {item.label}
                </p>

                <div className="w-[350px] h-[12px] bg-black/60 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="bg-white py-24 px-6 sm:px-10 lg:px-16">
        {/* MAIN CONTENT */}
        <div className="mx-auto max-w-5xl space-y-24">
          {/* ================= OBJECTIVE ================= */}
          <div className="grid items-center gap-6 lg:grid-cols-2">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-slate-500">
                  Transworld Translation
                </p>

                {/* YELLOW LINE */}
                <div className="h-[2px] w-12 bg-amber-500"></div>
              </div>

              <h3 className="text-4xl font-bold text-slate-900">
                Transworld Translation
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                • Each project is assigned a dedicated Project Manager.
                <br />
                • Each translation is assigned a translation team to ensure that
                the project is not only translated correctly, but is proofread
                and edited.
                <br />
                • Extremely high level of standards.
                <br />
                • Our linguists ensure that the context of your project is
                applicable to your target market.
                <br />
                • Our translators are highly qualified, certified and/or
                accredited.
                <br />
                • We offer a range of translation formats to fit all your needs.
                <br />
                • We won’t jeopardize our standards at any cost!
                <br />• Your project is just as important to our team as it is
                important for you.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/TT.png"
                alt="Objective"
                className="h-[280px] w-[420px] object-cover shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section
        className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 text-white"
        style={{
          backgroundImage: "url('/bg_cta2.jpg')",
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
          <h4 className="font-bold uppercase tracking-wide ">
            Ready to Get Started?
          </h4>
          <p className=" font-bold uppercase tracking-wide ">
            Our professional translators are native speakers who <br /> have
            work experience in this industry
          </p>
          <Link
            href="/components/contact"
            className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white group relative overflow-hidden"
          >
           <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    ORDER TRANSLATION
  </span>

  <span
    className="
      absolute
      left-0
      top-0
      h-full
      w-0
      bg-black
      transition-all
      duration-300
      group-hover:w-full
    "
  />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

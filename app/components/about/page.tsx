"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
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
            About
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-200">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <span>|</span>
            <span>ABOUT</span>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-24 px-6 sm:px-10 lg:px-16">
        {/* TOP HEADING */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-amber-600">
            Transworld Translation
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            Transworld Translation is currently the best translation company in
            business for people around the globe. We are in contact with
            different embassies in Pakistan like French Embassy, Pakistan.
          </p>
        </div>

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

              <h3 className="text-4xl font-bold text-slate-900">Objective</h3>

              <p className="max-w-md leading-8 text-slate-600">
                The main goal of our company is to introduce products and
                services that will make your daily life and dealings easier and
                satisfying. We are always thinking a step ahead, particularly
                when it’s the customers and clients’ needs and requirements in
                question.
              </p>

              <Link href="../services" className="inline-block rounded-md bg-amber-600 px-2 py-2 text-sm font-semibold uppercase tracking-wide text-white group relative overflow-hidden">
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

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/About-2.png"
                alt="Objective"
                className="h-[280px] w-[420px] object-cover shadow-md"
              />
            </motion.div>
          </div>

          {/* ================= OFFER ================= */}
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
                src="/About1.png"
                alt="Offer"
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
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-slate-500">
                  Transworld Translation
                </p>

                <div className="h-[2px] w-12 bg-amber-500"></div>
              </div>

              <h3 className="text-4xl font-bold text-slate-900">Offer</h3>

              <p className="max-w-md leading-8 text-slate-600">
                We offer professional translation services with accuracy, speed,
                and reliability. Our team ensures high-quality results tailored
                to your business and personal needs.
              </p>

              <Link href="../services" className="inline-block mt-3 rounded-md bg-amber-600 px-2 py-2 text-sm font-semibold uppercase tracking-wide text-white group relative overflow-hidden">
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

          {/* ================= FOUNDER ================= */}
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

                <div className="h-[2px] w-12 bg-amber-500"></div>
              </div>

              <h3 className="text-4xl font-bold text-slate-900">Founder</h3>

              <p className="max-w-md leading-8 text-slate-600">
                The founder of Transworld Translation are having linguistics
                background and has experience of providing professional
                translation services and our team has an experience of providing
                translation to clients for Embassies based in Pakistan. Our
                professional team has native & local speakers as well with
                expertise in a variety of fields guarantees services to the
                highest standard. We assure 100% confidentiality of our client’s
                documents.
              </p>

              <Link href="../services" className="inline-block mt-3 rounded-md bg-amber-600 px-2 py-2 text-sm font-semibold uppercase tracking-wide text-white group relative overflow-hidden">
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

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/About-3.png"
                alt="Founder"
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
          backgroundImage: "url('/bg_serv2.jpg')",
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
          <p className="text-xl font-bold uppercase tracking-wide sm:text-xl">
            Do not hesitate & remove all communication barriers. <br /> Contact
            us for more information
          </p>
          <Link
            href="/components/contact"
            className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white  group relative overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              CONTACT US
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

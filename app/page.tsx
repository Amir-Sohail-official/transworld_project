"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { languageCards, courses, reviews } from "./data";
import {
  FaStar,
  FaChevronRight,
  FaChevronLeft,
  FaGoogle,
  FaCheckCircle,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-32 sm:px-10 lg:px-12 text-white text-center"
        style={{
          backgroundImage: "url(/slide2-1903-by-814-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for readability (static) */}
        <div className="pointer-events-none absolute inset-0 bg-black/50" />

        {/* Static soft lighting only (NO animation) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),transparent_35%),radial-gradient(circle_at_85%_40%,_rgba(59,130,246,0.10),transparent_40%)]" />

        {/* HERO CONTENT */}
        <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center space-y-7">
          {/* Urdu line */}
          <motion.div
            className="text-lg sm:text-xl text-slate-200"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            اطالوی اور فرانسیسی سفارت خانے اسلام آباد سے منظور شدہ ٹرانسلیشن
            کمپنی ہے
          </motion.div>

          {/* Line 1 */}
          <motion.h1
            className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Authorized Translation
          </motion.h1>

          {/* Line 2 */}
          <motion.h2
            className="text-2xl sm:text-3xl font-medium text-slate-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Company by Italian and French Embassy ISB.
          </motion.h2>

          {/* Line 3 */}
          <motion.p
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transworld Translation provides certified translations for many
            international languages.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="#quote"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-700 to-amber-500 px-8 py-3 text-sm font-semibold text-white  group relative overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Get Quote
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
        </div>
      </section>

      <motion.section
        id="trust"
        className="bg-white px-6 py-24 sm:px-10 lg:px-12 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.36em] text-yellow-500 whitespace-nowrap">
                Transworld Translation (Pvt) Ltd
              </p>

              <div className="h-[1px] w-16 bg-yellow-500"></div>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Translation Services with comfort
            </h2>

            <p className="text-lg leading-7 font-bold text-slate-600">
              We provide authorized Italian translation & also provide
              translations of many languages like French, Chinese, Russian,
              Turkish, Spanish, Urdu, German, Pakistani local languages,
              Portuguese, etc. We deliver certified translations from English &
              Urdu languages and vice versa. We provide translation services for
              our clients in Pakistan and abroad as well.
            </p>

            <Link
              href="/components/about"
              className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white group relative overflow-hidden"
            >
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
      bg-black
      transition-all
      duration-300
      group-hover:w-full
    "
              />
            </Link>
          </motion.div>

          {/* RIGHT IMAGES (OVERLAP + FLOATING) */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* BACK IMAGE */}
            <motion.img
              src="/img_promo2.jpg"
              className="h-[480px] w-[550px] rounded-3xl object-cover shadow-2xl opacity-90"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* SOFT GLOW BACKGROUND */}
            <div className="absolute -z-10 h-[420px] w-[320px] rounded-full bg-yellow-200/20 blur-3xl" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="languages"
        className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <div className="mb-8 text-center">
            <h3 className="text-4xl font-semibold tracking-tight text-slate-900">
              TRANSLATION SERVICES
            </h3>
          </div>

          {/* Cards Wrapper (IMPORTANT FIX FOR CENTERING LAST ROW) */}
          <div className="flex flex-wrap justify-center gap-8">
            {languageCards.slice(0, 7).map((lang, index) => (
              <motion.div
                key={lang.name}
                className="w-[250px] flex flex-col items-center text-center transition duration-300 hover:scale-[1.03] cursor-pointer"
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Language Name */}
                <h2 className="text-3xl font-semibold text-slate-900">
                  {lang.name}
                </h2>

                {/* Flag Image */}
                <div className="mt-8 h-32 w-32 overflow-hidden rounded-full bg-white shadow-md">
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Button */}
                <Link
                  href={`/language/${lang.slug}`}
                  className="mt-10 relative overflow-hidden rounded-md bg-yellow-700 px-8 py-3 text-sm font-semibold text-white transition duration-300 ease-out group inline-block"
                >
                  <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-transparent">
                    TRANSLATION
                  </span>

                  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />

                  <span className="absolute inset-0 z-20 flex items-center justify-center text-sm font-semibold text-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                    TRANSLATION
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="relative px-6 py-28 sm:px-10 lg:px-12 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #1f1f25 0%, #2a2a31 40%, #1a1a1f 100%)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-4xl">
          {/* Top Icons */}
          <div className="mb-14 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-20">
            <div className="flex flex-col items-center gap-3">
              <img src="/FAVORITE-BOOK.png" className="h-12 w-12" />
              <p className="text-sm text-gray-300">Personal Documents</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img src="/FILING-DOCUMENTS.png" className="h-12 w-12" />
              <p className="text-sm text-gray-300">
                Business and Legal Translation
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img src="/BUSINESS-PAPER.png" className="h-12 w-12" />
              <p className="text-sm text-gray-300">Technical Translation</p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl">
            AUTHORIZED ITALIAN TRANSLATION
          </h2>

          {/* Paragraphs (manually broken to match layout) */}
          <p className="mt-6 text-sm leading-7 text-gray-300">
            Transworld Translation (Pvt) Ltd is an authorized company by the
            Italian Embassy. We have vast experience in providing translations
            to people who would like to submit their documents in Italian
            Embassy.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Our aim is to provide translations according to the Embassy's
            requirement. We facilitate people as much as we can.
          </p>

          {/* General Requirements */}
          <h3 className="mt-10 text-lg font-semibold text-white">
            General Requirements
          </h3>

          <ul className="mt-6 space-y-3 text-left text-sm text-gray-300">
            <li>
              • Documents should be in good condition and in a readable form.
              Torn papers will not be accepted by the Embassies.
            </li>
            <li>
              • Documents for submission to Embassies must be attested by the
              Ministry of Foreign Affairs, Pakistan.
            </li>
            <li>
              • Educational documents should be attested by IBCC (Matric & Inter
              Certificates) & HEC (Graduation Certificates) then the Ministry of
              Foreign Affairs, Pakistan will attest these certificates.
            </li>
          </ul>

          <p className="mt-6 text-sm text-gray-300">
            Translation Fee is charged in advance. Applicants sending their
            documents via courier can pay their fee online and dispatch a
            photocopy of the payment receipt along with their documents.
          </p>

          {/* Button */}
          <div className="mt-10">
            <a
              href="/services"
              className="inline-block rounded-md bg-yellow-600 px-8 py-3 text-xs font-semibold tracking-wide text-white group relative overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                MORE ABOUT SERVICES
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
            </a>
          </div>
        </div>
      </motion.section>

      {/* 2 */}

      <motion.section
        id="quote"
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* TOP IMAGE */}
        <div className="h-[320px] md:h-[400px] w-full relative">
          <img
            src="/bf_quote.jpg"
            alt="translator"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* BOTTOM WHITE */}
        <div className="bg-white pt-24 pb-20">
          <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 items-start px-6">
            {/* FORM */}
            <div className="relative -mt-40 z-10 ml-4 md:ml-10">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 max-w-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-5">
                  Get a Quote
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="rounded-full bg-gray-100 px-4 py-2.5 text-sm outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="rounded-full bg-gray-100 px-4 py-2.5 text-sm outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full bg-gray-100 px-4 py-2.5 text-sm outline-none"
                  />

                  <input
                    type="file"
                    className="w-full text-sm text-gray-500 file:mr-3 file:rounded-full file:border-0 file:bg-gray-200 file:px-3 file:py-1.5"
                  />

                  <textarea
                    placeholder="Notes"
                    rows={3}
                    className="w-full rounded-xl bg-gray-100 px-4 py-2.5 text-sm outline-none"
                  />

                  <button
                    type="submit"
                    className="mt-2 rounded-md bg-yellow-600 px-6 py-2.5 text-white text-sm font-medium group relative overflow-hidden"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Submit Order
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
                  </button>
                </form>
              </div>
            </div>

            {/* TEXT */}
            <div className="mr-4 md:mr-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-[0.3em] uppercase text-slate-500">
                  Why choose us
                </span>
                <div className="w-14 h-[2px] bg-yellow-400"></div>
              </div>

              <h2 className="text-4xl font-semibold text-slate-900 leading-tight">
                We Offer Certified <br /> Translation
              </h2>

              <p className="mt-5 text-slate-600 leading-7 max-w-md">
                We have a vast variety of certified professionals who have years
                of experience in translating text. These professionals are
                perfectly capable of translating text from original texts or old
                text into a language that has evolved with time which might make
                it hard for some readers to understand it.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="get-quote"
        className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGES */}
          <div className="relative ml-20">
            <div className="w-[400px] h-[400px] relative rounded-md overflow-hidden">
              <img
                src="/img_promo2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[12px] tracking-[0.35em] text-[#1f2a44] font-semibold">
                WE WORK FOR YOU
              </p>
              <span className="block h-[2px] w-16 bg-yellow-500"></span>
            </div>

            <p className="text-[#6b7280] text-[15px] leading-7 mb-6 max-w-xl">
              We deliver translations of documents like Marriage Certificates,
              Affidavits, FIR’s, Birth Certificates, B-form, NADRA Identity
              Cards, Passport, Court Rulings, Court Order, Court Proceedings,
              Employment Contracts, Incumbency Certificates, Property Documents,
              Power of Attorneys and Warrants, NADRA documents, Polio Cards.
            </p>

            <p className="text-[#6b7280] text-[15px] leading-7 mb-6 max-w-xl">
              We have professional linguists in the Italian & French language
              who have very vast experience in their fields. Transworld always
              tries to guide people as per the Embassy’s requirement. We check
              the documents before booking to facilitate you in a better way.
            </p>

            <p className="text-[#6b7280] text-[15px] leading-7 max-w-xl">
              The Confidentiality of our client’s sensitive information is of
              prime importance to us. We are extremely careful about the
              information of our clients. We make sure to take care of our
              client’s information.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="how-it-works"
        className="relative bg-cover bg-center px-6 py-28 sm:px-10 lg:px-12"
        style={{ backgroundImage: "url('/bg_serv1.jpg')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        {/* lighter grey overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative mx-auto max-w-7xl text-center text-white">
          <h2 className="text-4xl font-semibold sm:text-5xl">How It Works</h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-200">
            All you have to do is send us an email with the document in question
            attached. <br />
            Our QA department would be more than happy to evaluate the document
            for clarity. <br />
            And related industry standards and would call you as soon as
            possible. <br />
            With confirmation.
          </p>

          {/* cards */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4">
            {[
              {
                title: "Order",
                icon: "/ezgif1.png",
                text: "Your documents are checked briefly, If any detail is found wrong we ask clients to rectify them.",
              },
              {
                title: "Translate",
                icon: "/ezgif2.png",
                text: "We take deadlines seriously & make sure we deliver the project before time.",
              },
              {
                title: "Check",
                icon: "/ezgif3.png",
                text: "Your documents are not delivered until we proofread them multiple times.",
              },
              {
                title: "Deliver",
                icon: "/ezgif4.png",
                text: "We deliver translations with original documents for our client's ease.",
              },
            ].map((card, index) => (
              <div key={index} className="flip-card h-48 w-full">
                <div className="flip-inner">
                  {/* FRONT */}
                  <div className="flip-front flex flex-col items-center justify-center bg-white text-slate-800">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="h-10 w-10 object-contain"
                    />
                    <p className="mt-3 font-medium">{card.title}</p>
                  </div>

                  {/* BACK */}
                  <div className="flip-back flex flex-col items-center justify-center bg-yellow-600 p-4 text-center text-white">
                    <p className="text-base font-semibold mb-2">{card.title}</p>
                    <p className="text-sm">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* button */}
          <div className="mt-12">
            <Link
              href="/components/contact"
              className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white group relative overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                START TRANSLATING NOW
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
          </div>
        </div>

        {/* flip styles */}
        <style jsx>{`
          .flip-card {
            perspective: 1000px;
          }
          .flip-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.7s;
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-inner {
            transform: rotateY(180deg);
          }
          .flip-front,
          .flip-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
          }
          .flip-back {
            transform: rotateY(180deg);
          }
        `}</style>
      </motion.section>

      {/* REVIEW SECTION */}
      <motion.section
        id="reviews"
        className="relative overflow-hidden bg-[#f5f5f5] px-6 py-20 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-7xl">
          {/* HEADING */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
              What Our Customers Say
            </h2>
          </div>

          {/* TOP GOOGLE REVIEW BOX */}
          <div className="bg-[#efefef] rounded-2xl px-6 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaGoogle className="text-[24px] text-blue-500" />

                <h3 className="text-2xl font-bold text-black">
                  Google Reviews
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-black">5.0</span>

                <div className="flex items-center gap-1 text-yellow-400 text-[18px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="text-gray-500 text-xs">(413)</span>
              </div>
            </div>

            <button className="bg-[#1a73e8] hover:bg-[#1667d8] transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full text-sm w-fit">
              Review us on Google
            </button>
          </div>

          {/* REVIEW SLIDER */}
          {/* REVIEW SLIDER */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#efefef] rounded-2xl p-5 h-[215px] flex flex-col justify-between shadow-sm">
                    {/* TOP CONTENT */}
                    <div>
                      {/* USER */}
                      <div className="flex items-start gap-3 mb-4">
                        {/* USER IMAGE */}
                        {/* USER IMAGE */}
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-11 h-11 rounded-full object-cover shrink-0"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-base font-bold shrink-0">
                            {item.letter}
                          </div>
                        )}

                        {/* USER INFO */}
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-[16px] text-[#1f2937]">
                              {item.name}
                            </h4>

                            <FaCheckCircle className="text-[#1a73e8] text-[11px]" />
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <FaGoogle className="text-[#1a73e8] text-xs" />

                            <span className="text-gray-500 text-[11px]">
                              {item.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* STARS */}
                      <div className="flex items-center gap-1 text-yellow-400 text-[14px] mb-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>

                      {/* REVIEW */}
                      <p className="text-[#374151] leading-6 text-[13px] line-clamp-3 min-h-[72px]">
                        {item.review}
                      </p>
                    </div>

                    {/* BUTTON SAME POSITION */}
                    <button className="mt-3 text-[#1a73e8] text-sm font-semibold hover:underline self-start">
                      Read more
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* RIGHT BUTTON */}
            {/* LEFT BUTTON */}
            <button className="custom-prev absolute top-1/2 -left-4 z-20 -translate-y-1/2 bg-gray-500 hover:bg-gray-600 transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg">
              <FaChevronLeft className="text-sm" />
            </button>

            {/* RIGHT BUTTON */}
            <button className="custom-next absolute top-1/2 -right-4 z-20 -translate-y-1/2 bg-gray-500 hover:bg-gray-600 transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg">
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="creative-translation"
        className="bg-white px-6 py-24 sm:px-10 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="lg:ml-12 mt-6 lg:mt-12">
            {/* top label */}
            <div className="flex items-center gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-700">
                Quality You Control
              </p>
              <div className="h-[2px] w-12 bg-yellow-500"></div>
            </div>

            {/* heading */}
            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Highly Creative <br /> Translation
            </h2>

            {/* paragraph */}
            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600">
              Interpreting, or "interpretation," is the facilitation of oral or
              sign- language communication, either simultaneously or
              consecutively, between two, or among three or more, speakers who
              are not speaking, or signing, the same language. The term is used
              for this activity to avoid confusion
            </p>

            {/* button */}
            <div className="mt-8">
              <Link
                href="/services"
                className="bg-yellow-600 text-white px-5 py-2 rounded-md font-semibold text-sm group relative overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
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
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-6 lg:mt-12">
            <img
              src="/img_promo3.jpg"
              alt="translation"
              className="w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="language-courses"
        className="bg-[#f6f7fb] px-6 py-24 sm:px-10 lg:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
      >
        {/* HEADING */}
        <h2 className="text-[34px] font-bold text-[#1f2a44] mb-3">
          Language Courses
        </h2>

        <p className="text-[#6b7280] text-[14px] max-w-xl mx-auto mb-16">
          With the help of our professional teachers and translators
          <br />
          you will be able to sharpen your skills in no time at all
        </p>

        {/* CARDS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-sm w-full">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[230px] object-cover"
                />

                <Link href={`/courses/${course.slug}`}>
                  <button className="absolute right-4 bottom-[-22px] bg-[#d4a24c] text-white text-[12px] w-12 h-12 flex items-center justify-center rounded-full">
                    {course.short}
                  </button>
                </Link>
              </div>

              <div className="pt-12 pb-8 px-6 text-left min-h-[180px]">
                <h3 className="text-[20px] font-semibold text-[#1f2a44] mb-3">
                  {course.title}
                </h3>

                <p className="text-[#6b7280] text-[14px] leading-6">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN BUTTON */}
        <div className="mt-16">
          <Link
            href="/components/contact"
            className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white group relative overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              CONTACT US FOR MORE INFO
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
        </div>
      </motion.section>

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

            <Link
              href="/components/contact"
              className="inline-block mt-5 rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white group relative overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                More information
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
    </main>
  );
}

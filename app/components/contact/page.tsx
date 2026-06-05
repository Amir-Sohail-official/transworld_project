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
            Contact
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-200">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <span>|</span>
            <span>Contact</span>
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="mb-8 text-4xl font-bold text-slate-900">
                Stay in Touch
              </h2>

              <div className="space-y-8 text-slate-700">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-red-500">
                    Address: 1
                  </h3>
                  <p className="max-w-md leading-8">
                    OFFICE # 14, FRIENDS MARKET, PARK RD, NEAR GERRY'S FEDEX,
                    CHATTA BAKHTAWAR, ISLAMABAD, 44000, PAKISTAN
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-bold text-red-500">
                    Address: 2
                  </h3>

                  <p className="max-w-md leading-8">
                    283M Ibrahim Plaza behind BLS Visa Office, DHA Phase 6,
                    Lahore
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-red-500">
                    Phone:
                  </h3>

                  <div className="space-y-1">
                    <p>0331-5166421</p>
                    <p>051-2650033</p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-bold text-red-500">
                    E-mail:
                  </h3>
                  <p>info@transworldintl.com.pk</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-4xl font-bold text-slate-900">
              Contact Us Right Now
            </h2>

            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-14 rounded-full border border-slate-200 bg-slate-100 px-6 outline-none transition focus:border-yellow-400"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-full border border-slate-200 bg-slate-100 px-6 outline-none transition focus:border-yellow-400"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="h-14 w-full rounded-full border border-slate-200 bg-slate-100 px-6 outline-none transition focus:border-yellow-400"
              />

              {/* Message */}
              <textarea
                rows={8}
                placeholder="Enter your message"
                className="w-full rounded-[30px] border border-slate-200 bg-slate-100 p-6 outline-none transition focus:border-yellow-400"
              />

              {/* Button */}
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-yellow-600 to-amber-600 px-2 py-2 text-sm font-semibold uppercase tracking-wide text-white group relative overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Send Message
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
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13287.140921339083!2d73.106433!3d33.684422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7b5e8d4c6f%3A0x9b6d4f1c31b5dce4!2sIslamabad!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
          width="100%"
          height="550"
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </section>
    </div>
  );
}

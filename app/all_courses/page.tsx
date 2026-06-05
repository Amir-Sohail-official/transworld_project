"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  courses,
} from "../data";


export default function all_courses() {
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
            All Courses
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-200">
            <Link href="/" className="hover:text-amber-500">
              Home
            </Link>
            <span>|</span>
            <span>ALL COURSES</span>
          </div>
        </motion.div>
      </section>

      

      <section className="bg-white py-24 px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
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
          
        </motion.div>
      </section>
    </div>
  );
}

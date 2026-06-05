"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1c1b22] text-white px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-4">

        {/* LEFT SECTION */}
        <div className="space-y-6">

          {/* LOGO */}
          <div className="flex items-center gap-3 -ml-20">
            <Image
              src="/Logo.png"
              alt="Transworld Translation Logo"
              width={80}
              height={80}
              className="h-16 w-80 object-contain"
            />
          </div>

          {/* EMAIL */}
          <div className="text-sm text-gray-300">
            <p className="text-[#d4a24c] mb-1">✉ Email Us:</p>

            <a
              href="mailto:info@transworldintl.com.pk"
              className="hover:text-[#d4a24c]"
            >
              info@transworldintl.com.pk
            </a>
          </div>

          {/* ADDRESS 1 */}
          <div className="text-sm text-gray-400 leading-6">
            <p className="text-white font-medium">ADDRESS 1-</p>

            Office # 14, Friends Market, Park Rd, near Gerry's Fedex,
            Chatta Bakhtawar, Islamabad
          </div>

          {/* ADDRESS 2 */}
          <div className="text-sm text-gray-400 leading-6">
            <p className="text-white font-medium">ADDRESS 2-</p>

            283MB Ibrahim Plaza behind BLS Visa Office, DHA Phase 6, Lahore
          </div>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Customer Care</h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>• Home Fullwide</li>
            <li>• About</li>
            <li>• Contacts</li>
            <li>• Other Languages</li>
            <li>• Our Services</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Services</h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>• Translation</li>
            <li>• Interpreting</li>
            <li>• Proofreading</li>
            <li>• Localization</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          <h4 className="text-xl font-semibold">
            Call Now For <br /> Services!
          </h4>

          <p className="text-xl font-bold">0331-5166421</p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.facebook.com/Transworld21/"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/transworld21/"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-gray-400">
        Transworld Translation © 2026 All rights reserved.
      </div>
    </footer>
  );
}
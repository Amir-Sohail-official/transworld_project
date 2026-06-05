"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    try {
      const token = localStorage.getItem("auth_token");
      if (token) setIsAuthenticated(true);
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">

          {/* LEFT */}
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <a
              href="https://wa.me/923315166421"
              className="hidden lg:flex items-center gap-2 text-white"
            >
              <FaPhone className="text-green-400" />
              <span className="font-semibold">0331-5166421</span>
            </a>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">

            {/* HOME */}
            <Link href="/" className="hover:text-yellow-400">
              HOME
            </Link>

            {/* ABOUT */}
            <div className="group relative">
              <Link href="/components/about" className="hover:text-yellow-400">
                ABOUT
              </Link>
            </div>

            {/* SERVICES */}
            <div className="group relative">
              <Link href="/services" className="hover:text-yellow-400">
                SERVICES
              </Link>
            </div>

            {/* CONTACT */}
            <div className="group relative">
              <Link href="/components/contact" className="hover:text-yellow-400">
                CONTACT
              </Link>
            </div>

          </nav>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => {
                    setIsSignupMode(false);
                    setShowLogin(true);
                    setSuccessMessage(null);
                    setLoginError(null);
                  }}
                  className="text-white hover:text-yellow-400 font-semibold"
                >
                  LOGIN
                </button>

                <button
                  onClick={() => {
                    // if already authenticated, show message instead
                    setIsSignupMode(true);
                    setSuccessMessage(null);
                    setLoginError(null);
                    setShowLogin(true);
                  }}
                  className="text-white hover:text-yellow-400 font-semibold"
                >
                  SIGN UP
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  try {
                    localStorage.removeItem("auth_token");
                  } catch (e) {
                    // ignore
                  }
                  setIsAuthenticated(false);
                }}
                className="text-white hover:text-yellow-400 font-semibold"
              >
                LOGOUT
              </button>
            )}

            <Link
              href="/components/contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-3 text-sm font-semibold text-white  group relative overflow-hidden"
            >
             <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                TRANSLATE NOW
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenu(true)}
          >
            ☰
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[998] bg-black/95 flex flex-col items-center justify-center gap-6 text-white text-lg">
          
          <Link href="/" onClick={() => setMobileMenu(false)}>HOME</Link>
          <Link href="/components/about" onClick={() => setMobileMenu(false)}>ABOUT</Link>
          <Link href="/services" onClick={() => setMobileMenu(false)}>SERVICES</Link>
          <Link href="/components/contact" onClick={() => setMobileMenu(false)}>CONTACT</Link>

          {!isAuthenticated ? (
            <>
              <button
                onClick={() => {
                  setIsSignupMode(false);
                  setShowLogin(true);
                  setMobileMenu(false);
                }}
                className="text-yellow-400"
              >
                LOGIN
              </button>

              <button
                onClick={() => {
                  setIsSignupMode(true);
                  setShowLogin(true);
                  setMobileMenu(false);
                }}
                className="text-yellow-400"
              >
                SIGN UP
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                try {
                  localStorage.removeItem("auth_token");
                } catch (e) {
                  // ignore
                }
                setIsAuthenticated(false);
                setMobileMenu(false);
              }}
              className="text-yellow-400"
            >
              LOGOUT
            </button>
          )}

          <button
            onClick={() => setMobileMenu(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            <FaTimes />
          </button>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/60 pt-28">
          <div className="w-[530px] bg-white shadow-2xl">
            <div className="flex justify-between items-center h-14 px-4 bg-gray-200">
              LOGIN
              <button onClick={() => setShowLogin(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="p-6">
              <input
                className="w-full mb-4 p-3 border"
                placeholder="Login"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
              />
              <input
                className="w-full mb-4 p-3 border"
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              {loginError && (
                <div className="mb-2 text-red-600">{loginError}</div>
              )}

              {successMessage && (
                <div className="mb-2 text-green-600">{successMessage}</div>
              )}

              <button
                className="w-full bg-yellow-600 text-white py-3"
                onClick={async () => {
                  setLoginError(null);
                  setSuccessMessage(null);
                  setLoadingLogin(true);
                  try {
                    const endpoint = isSignupMode ? "/api/signup" : "/api/login";
                    const res = await fetch(endpoint, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ login: loginValue, password: passwordValue }),
                    });

                    const data = await res.json();
                    if (!res.ok) {
                      // If user not found on login attempt, switch to signup mode
                      if (!isSignupMode && res.status === 404 && data?.error && String(data.error).toLowerCase().includes("not found")) {
                        setIsSignupMode(true);
                        setSuccessMessage("No account found — please sign up.");
                        setLoginError(null);
                        setLoadingLogin(false);
                        return;
                      }

                      setLoginError(data?.error || (isSignupMode ? "Signup failed" : "Login failed"));
                      setLoadingLogin(false);
                      return;
                    }

                    // Save token for authentication (frontend-driven)
                    if (data.token) {
                      try {
                        localStorage.setItem("auth_token", data.token);
                      } catch (e) {
                        // ignore localStorage errors
                      }
                    }

                    setIsAuthenticated(true);

                    // Show appropriate success message
                    setSuccessMessage(isSignupMode ? "You signed up successfully." : "You are logged in.");

                    // close modal after short delay so user sees message
                    setTimeout(() => {
                      setShowLogin(false);
                      setLoginValue("");
                      setPasswordValue("");
                      setSuccessMessage(null);
                    }, 1200);
                  } catch (err) {
                    setLoginError("Unable to reach server");
                  } finally {
                    setLoadingLogin(false);
                  }
                }}
                disabled={loadingLogin}
              >
                {loadingLogin ? (isSignupMode ? "Signing up..." : "Logging in...") : (isSignupMode ? "Sign Up" : "Login")}
              </button>

              <div className="mt-3 text-sm text-center">
                {isSignupMode ? (
                  <>
                    Already have an account?{' '}
                    <button className="underline" onClick={() => setIsSignupMode(false)}>Login</button>
                  </>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <button className="underline" onClick={() => setIsSignupMode(true)}>Sign Up</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
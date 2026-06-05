'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  const quickReplies = [
    'Hi, I need help with translation.',
    'Can you translate a document for me?',
    'I would like a quote for translation services.',
  ];

  return (
    <div className="group fixed bottom-8 right-8 z-40 flex flex-col items-end">
      <div className="mb-3 hidden w-72 flex-col rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl transition-all duration-300 ease-out group-hover:flex group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">How can we help you?</p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Tap a message to open WhatsApp with your request.</p>
        <div className="mt-3 flex flex-col gap-2">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              type="button"
              onClick={() => openWhatsApp(reply)}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-left text-sm text-slate-800 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => openWhatsApp('Hello, I need translation services for my document.')}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8" />
      </button>
    </div>
  );
}

import './globals.css';
import type { Metadata } from 'next';

// import navbar from './components/navbar';
// import footer from './components/footer';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/navbar';
import Footer from './components/footer';
export const metadata: Metadata = {
  title: 'Transworld Translation',
  description:
    'Certified translation services in Islamabad for documents, legal papers, and embassy-authorized translations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">

        {/* Navbar */}
        <Navbar />

        {/* All Pages */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

      </body>
    </html>
  );
}
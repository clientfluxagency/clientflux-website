
import { motion } from 'framer-motion';
import './index.css';

export default function App() {
  const companyInfo = {
    name: 'ClientFlux',
    phone: '+91 9296948283',
    whatsapp: 'https://wa.me/919296948283',
    email: 'clientflux.in@gmail.com',
    instagram: 'https://instagram.com/clientflux.in',
    address:
      'RC Western Mall, 7th Floor, Office 704, RPS More, Bailey Road, Patna, Bihar',
  };

  const services = [
    'Social Media Marketing',
    'Meta Ads',
    'SEO Optimization',
    'Website Development',
    'Graphic Design',
    'Video Editing',
    'Product Photoshoot',
    'Model Photoshoot',
    'Brand Strategy',
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-black">
              Client<span className="text-blue-500">Fl</span>
              <span className="text-green-400">ux</span>
            </h1>
            <p className="text-xs text-gray-400 tracking-[4px] mt-1">
              DIGITAL MARKETING
            </p>
          </div>

          <a
            href={companyInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black px-5 py-2 rounded-xl font-semibold transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 py-24"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-green-400 tracking-[5px] mb-4">
            GROW • BRAND • SCALE
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Grow Your Business Digitally 🚀
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            ClientFlux is a modern digital marketing agency in Patna helping
            brands grow with Meta Ads, SEO, content creation, social media
            marketing, branding and creative services.
          </p>

          <a
            href={companyInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-2xl transition inline-block"
          >
            Free Consultation
          </a>
        </div>
      </motion.section>

      <section className="px-6 py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-green-400 mb-6" />

                <h3 className="text-2xl font-bold mb-4">{service}</h3>

                <p className="text-gray-400">
                  Professional service designed to grow your business online.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-10">Contact Us</h2>

          <div className="space-y-5 text-lg text-gray-300">
            <p>{companyInfo.phone}</p>
            <p>{companyInfo.email}</p>
            <p>{companyInfo.address}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 ClientFlux Digital Marketing Agency
      </footer>
    </div>
  );
}

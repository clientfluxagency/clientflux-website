import { motion } from 'framer-motion';

export default function ClientFluxWebsite() {
  // =============================
  // EASY EDIT SECTION 🚀
  // =============================

  const companyInfo = {
    companyName: 'ClientFlux',
    phone: '+91 9296948283',
    whatsapp: 'https://wa.me/919296948283',
    email: 'clientflux.in@gmail.com',
    instagram: 'https://instagram.com/clientflux.in',
    address:
      'RC Western Mall, 7th Floor, Office 704, RPS More, Bailey Road, Patna, Bihar',
  };

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Grow your business through Instagram & Facebook.',
    },
    {
      title: 'Meta Ads',
      description: 'High converting ad campaigns for leads & sales.',
    },
    {
      title: 'SEO Optimization',
      description: 'Rank your business higher on Google search.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      <header className="border-b border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-black">
            Client<span className="text-green-400">Flux</span>
          </h1>

          <a
            href={companyInfo.whatsapp}
            className="bg-green-500 text-black px-5 py-2 rounded-xl font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-6 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-6">
            Grow Your Business Digitally 🚀
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl">
            {companyInfo.companyName} is a modern digital marketing agency helping businesses grow online.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 ClientFlux Digital Marketing Agency
      </footer>
    </div>
  );
}

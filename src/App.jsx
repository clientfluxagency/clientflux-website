import { motion } from 'framer-motion';

export default function ClientFluxWebsite() {

const companyInfo = {
  name: 'ClientFlux',
  phone: '+91 9296948283',
  whatsapp: 'https://wa.me/919296948283',
  email: 'clientflux.in@gmail.com',
  instagram: 'https://instagram.com/clientflux.in',
  address: 'RC Western Mall, 7th Floor, Office 704, RPS More, Bailey Road, Patna, Bihar',
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

const portfolio = [1, 2, 3, 4, 5, 6];

return (
<div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
<section className="px-6 py-24">
<div className="max-w-7xl mx-auto">
<h1 className="text-5xl font-black">ClientFlux 🚀</h1>
<p className="text-gray-300 mt-6 text-lg">
Modern digital marketing agency helping brands grow digitally.
</p>

<div className="grid md:grid-cols-3 gap-8 mt-16">
{services.map((service,index)=>(
<div key={index} className="bg-white/5 p-8 rounded-3xl border border-white/10">
<h3 className="text-2xl font-bold mb-4">{service}</h3>
<p className="text-gray-400">
Professional solutions for business growth.
</p>
</div>
))}
</div>
</div>
</section>
</div>
);
}

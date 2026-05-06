/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, MapPin, Phone, CupSoda, Wind, Star } from 'lucide-react';

const MENU_ITEMS = [
  {
    category: 'Granizados',
    icon: <CupSoda className="w-8 h-8 text-miami-cyan" />,
    items: [
      { name: 'Manzana Verde', desc: 'Sabor súper refrescante', price: '$10K' },
      { name: 'Malibu', desc: 'Sabor tropical', price: '$10K' },
      { name: 'Fresa Bom Bom', desc: 'Dulce y delicioso', price: '$10K' },
    ]
  },
  {
    category: 'Vapers Destilados',
    icon: <Wind className="w-8 h-8 text-miami-pink" />,
    items: [
      { name: 'Vaper Desechable', desc: 'Sabores frutales, ice y clásicos (5000 puffs)', price: '$50K' },
      { name: 'Recargables Pro', desc: 'Equipos avanzados con control de flujo', price: '$120K' },
      { name: 'Esencias Premium', desc: 'Diversidad de sabores exclusivos y sales', price: '$35K' },
    ]
  }
];

const IG_PICS = [
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544145945-f9042519a771?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1601332822459-f8319fbf3b36?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514575110897-1253ff7b2cca?auto=format&fit=crop&q=80&w=800"
];

const BRAND_LOGO = "https://raw.githubusercontent.com/josesampayo01/Miami-granizados/refs/heads/main/public/images/logos/IMG_3930.jpeg";

const LOGOS = [
  "https://raw.githubusercontent.com/josesampayo01/Miami-granizados/refs/heads/main/public/images/logos/IMG_3931.jpeg",
  "https://raw.githubusercontent.com/josesampayo01/Miami-granizados/refs/heads/main/public/images/logos/IMG_3936.png",
];

const PROMOCIONES_PICS = [
  "https://raw.githubusercontent.com/josesampayo01/Miami-granizados/refs/heads/main/public/images/promociones/IMG_3933.png",
  "https://raw.githubusercontent.com/josesampayo01/Miami-granizados/refs/heads/main/public/images/promociones/IMG_3934.png",
];

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white font-body selection:bg-miami-pink selection:text-white">
      {/* HEADER / NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 mb-12 flex justify-between items-center mix-blend-difference">
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <img src={BRAND_LOGO} alt="Miami Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover shadow-[0_0_15px_rgba(45,212,191,0.5)] border border-miami-cyan/50" />
          <div className="font-display text-2xl tracking-wider text-miami-cyan hidden sm:block">MIAMI<span className="text-miami-pink">.</span></div>
        </a>
        <a 
          href="https://www.instagram.com/miamicocktailss?igsh=Y3A0MHp2enkza3Ry" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 bg-miami-pink text-white px-4 py-2 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-miami-pink transition-colors glow-pink"
        >
          <Instagram className="w-4 h-4" />
          <span>SÍGUENOS</span>
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        
        {/* Background ambient elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-miami-pink/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-miami-cyan/20 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <h1 className="font-display flex flex-col items-center leading-[0.8] mb-6">
            <span className="text-[18vw] md:text-[12vw] text-stroke-pink uppercase -rotate-2 transform">MIAMI</span>
            <span className="text-[12vw] md:text-[8vw] text-miami-cyan uppercase relative z-10 glow-cyan">GRANIZADOS</span>
          </h1>
          
          <div className="absolute -top-4 -right-4 md:right-10 rotate-12">
             <span className="inline-block bg-miami-pink text-white font-display px-4 py-2 text-xl md:text-3xl uppercase tracking-wider transform shadow-lg border-2 border-white">
                ¡Puesto pal parche!
             </span>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl md:max-w-xl mx-auto text-gray-300 font-light mt-8 tracking-wide"
          >
            Refrescando a <strong className="font-semibold text-white">Magangué</strong> con el verdadero sabor tropical, colores vibrantes y la mejor energía.
          </motion.p>
        </motion.div>
      </header>

      {/* MARQUEE */}
      <div className="bg-miami-yellow text-black font-display text-4xl md:text-6xl py-4 overflow-hidden -rotate-1 scale-105 border-y-4 border-black shadow-[0_0_30px_rgba(255,234,0,0.4)] relative z-20">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex whitespace-nowrap px-4">
              <span className="mx-4">🍹 MAGANGUÉ</span>
              <span className="mx-4 text-miami-pink">✦</span>
              <span className="mx-4">💨 VAPERS</span>
              <span className="mx-4 text-miami-cyan">✦</span>
              <span className="mx-4">🧊 GRANIZADOS</span>
              <span className="mx-4 text-miami-pink">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* MENU SECTION */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-7xl mb-4">NUESTRO MENÚ</h2>
          <p className="text-gray-400 max-w-lg mx-auto">Preparados al momento, con los mejores ingredientes y un toque único que no encontrarás en ningún otro lugar en Magangué.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {MENU_ITEMS.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                {section.icon}
                <h3 className="font-display text-4xl text-white tracking-widest uppercase">{section.category}</h3>
              </div>
              
              <ul className="space-y-6">
                {section.items.map((item, i) => (
                  <li key={i} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-xl font-bold font-display tracking-wide group-hover:text-miami-cyan transition-colors">{item.name}</h4>
                      <div className="flex-1 border-b border-dashed border-zinc-700 mx-4 opacity-30 group-hover:block transition-all" />
                      <span className="text-miami-pink font-bold font-display text-xl">{item.price}</span>
                    </div>
                    <p className="text-sm text-zinc-400 font-light">{item.desc}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-zinc-800">
                 <p className="text-xs text-zinc-500 italic uppercase tracking-wider flex items-center gap-2">
                   <Star className="w-3 h-3 text-miami-yellow" />
                   Pregunta por los especiales del día
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOGOS / MARCAS SECTION */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl mb-4 text-miami-cyan">NUESTRAS MARCAS</h2>
          <p className="text-gray-400 max-w-lg mx-auto">El distintivo de nuestra calidad y sabor inconfundible.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 max-w-4xl mx-auto">
          {LOGOS.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center justify-center group cursor-pointer"
            >
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                 <img 
                    src={img} 
                    alt={`Logo Miami ${i + 1}`} 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_25px_rgba(255,42,128,0.5)] group-hover:scale-105 transition-all duration-500 ease-out"
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM VIBE / GALLERY SECTION */}
      <section className="py-20 overflow-hidden">
        <div className="px-4 text-center mb-12">
             <h2 className="font-display text-5xl md:text-6xl mb-4 uppercase">
               Siente la <span className="text-miami-pink">vibra</span>
             </h2>
             <a href="https://www.instagram.com/miamicocktailss?igsh=Y3A0MHp2enkza3Ry" target="_blank" rel="noreferrer" className="inline-block text-miami-cyan underline underline-offset-4 hover:text-white transition-colors mb-12">
               @miamicocktailss
             </a>
             
             {/* Video Destacado */}
             <div className="max-w-[400px] mx-auto bg-zinc-900/50 p-2 rounded-[2rem] border border-zinc-800 shadow-[0_0_40px_rgba(255,42,128,0.2)] mb-12">
                <iframe 
                  src="https://www.instagram.com/reel/DSvfXLTka9t/embed/?autoplay=1"
                  className="w-full h-[600px] rounded-3xl"
                  frameBorder="0" 
                  scrolling="no" 
                  allowtransparency="true"
                ></iframe>
             </div>
        </div>

        {/* Diagonal photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-8 max-w-7xl mx-auto -rotate-2 transform scale-105 mb-16">
          {IG_PICS.map((img, i) => (
            <motion.a 
              href="https://www.instagram.com/miamicocktailss?igsh=Y3A0MHp2enkza3Ry"
              target="_blank"
              rel="noreferrer"
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                 scale: 1.03, 
                 zIndex: 10,
                 rotate: i % 2 === 0 ? 1 : -1,
                 boxShadow: "0px 10px 20px rgba(0,0,0,0.4)" 
               }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`block rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 border-2 border-transparent hover:border-miami-pink transition-all ${i % 2 === 0 ? 'translate-y-8' : ''}`}
            >
              <img src={img} alt="Miami Granizados feed" className="w-full h-full object-cover" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* PROMOCIONES SECTION (Moved to the bottom in blur mode) */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-black/60 backdrop-blur-xl border-y border-zinc-800">
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <div className="absolute top-1/2 left-0 w-96 h-96 bg-miami-cyan/50 blur-[120px] rounded-full mix-blend-screen transform -translate-y-1/2 -translate-x-1/2" />
           <div className="absolute top-1/2 right-0 w-96 h-96 bg-miami-pink/50 blur-[120px] rounded-full mix-blend-screen transform -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="font-display text-5xl md:text-7xl mb-4 text-white drop-shadow-[0_0_20px_rgba(255,42,128,0.5)]">PROMOCIONES</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg blur-0">Aprovecha nuestras promos increíbles, listas para refrescar tu momento a otro nivel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto relative z-10">
          {PROMOCIONES_PICS.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-[2rem] overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 hover:border-miami-pink/50 transition-colors backdrop-blur-md bg-white/5"
            >
              <div className="relative w-full aspect-[4/5] flex items-center justify-center p-4">
                 <img 
                    src={img} 
                    alt={`Promoción Miami ${i + 1}`} 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-700 ease-out shadow-2xl"
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="bg-black pt-24 pb-12 px-4 md:px-8 border-t border-zinc-900 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl text-stroke mb-8">VISÍTANOS</h2>
            <div className="space-y-4">
              <a href="https://www.google.com/search?q=Miami%20Granizados&kgmid=%2Fg%2F11z9x2r8qs" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-miami-cyan transition-colors">
                <MapPin className="w-6 h-6 shrink-0" />
                <p>Magangué, Bolívar<br/><span className="text-sm opacity-60">Haz clic aquí para ver nuestra ubicación en Google Maps.</span></p>
              </a>
              <a href="https://www.instagram.com/miamicocktailss?igsh=Y3A0MHp2enkza3Ry" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-miami-pink transition-colors">
                <Instagram className="w-6 h-6 shrink-0" />
                <p>@miamicocktailss</p>
              </a>
               <div className="flex items-center gap-4 text-zinc-300">
                <Phone className="w-6 h-6 shrink-0" />
                <p>Abierto en las tardes y noches<br/><span className="text-sm opacity-60">Ideal para refrescarte</span></p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 text-center">
             <h3 className="font-display inline-block text-3xl mb-4 px-4 py-2 bg-miami-pink text-white uppercase transform -rotate-2">
               ¡Puesto pal parche!
             </h3>
             <p className="text-zinc-400 font-light mb-8">
               Música, amigos, y el mejor ambiente de la ciudad. Ven a disfrutar de un granizado refrescante o explora nuestra variedad de vapers.
             </p>
             <a 
               href="https://www.instagram.com/miamicocktailss?igsh=Y3A0MHp2enkza3Ry" 
               target="_blank" 
               rel="noreferrer"
               className="inline-flex items-center gap-2 bg-miami-cyan text-black px-8 py-4 rounded-full font-bold font-display text-xl uppercase hover:bg-white hover:text-black transition-all glow-cyan transform hover:scale-105"
             >
               Ver Fotos y Videos
             </a>
          </div>
        </div>

        <div className="mt-20 text-center text-zinc-700 text-sm flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto border-t border-zinc-900 pt-8 gap-4">
          <div className="flex items-center gap-3">
             <img src={BRAND_LOGO} alt="Miami Logo" className="h-8 w-8 rounded-full object-cover grayscale opacity-50" />
             <p>© {new Date().getFullYear()} Miami Granizados.</p>
          </div>
          <p className="mt-2 md:mt-0">Magangué, Colombia 🌴</p>
        </div>
      </footer>

    </div>
  );
}

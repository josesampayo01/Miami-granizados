/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, MapPin, Phone, CupSoda, Wind, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';

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

const LOCAL_VIDEOS = [
  "/video/SaveClip.App_AQN0lLNqJzNDRwX4smvLautLXcQIalxQUDSbab_5lxRyi3dblu6JrI85vu3yiuHIOvMVnFC_AEPiJaIN_GXN4xpqEoXFI473ZlFOxEA.mp4",
  "/video/SaveClip.App_AQOyK59IxCDvr5nX9XSWBQ_0qY7vkqeg-jF7WHmVQPDXVCY1SFXflm5EsM-LAPQ2dqErtoPiSqBezDJxR_JDC3SY9idNEih0u0ciBEw.mp4"
];

const BRAND_LOGO = "/images/logos/roboneo_image_with_aigc.png";

const FLAVOR_LOGOS = [
  "/images/logos/roboneo_image_with_aigc.png",
  "/images/products/IMG_3942.png",
];

const VAPERS_ASSETS: { type: 'image' | 'video', src: string }[] = [
  { type: 'image', src: '/images/vapers/IMG_3937.jpeg'},
  { type: 'image', src: '/images/vapers/IMG_3938.jpeg'},
  { type: 'image', src: '/images/vapers/IMG_3939.jpeg'},
  { type: 'image', src: '/images/vapers/IMG_3940.jpeg'},
  { type: 'image', src: '/images/vapers/IMG_3941.jpeg'}
];

const PROMOCIONES_PICS = [
  "/images/promociones/IMG_3933.jpeg",
  "/images/promociones/IMG_3934.jpeg",
];

const SNOOP_IMAGE = "/images/Snoop/IMG_3942.png"; // <-- La ruta de la imagen de Snoop Dogg, asegúrate de subir la imagen en public/images/Snoop/IMG_3942.png

function AgeVerification({ onVerify }: { onVerify: () => void }) {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    // Simulate face scan
    const timer = setTimeout(() => {
      setScanning(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-md bg-zinc-950/80 border border-zinc-800/80 rounded-[2rem] p-8 flex flex-col items-center shadow-2xl relative overflow-hidden backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-miami-cyan/5 to-miami-pink/5 z-0" />
        
        {/* Top Badges & Titles */}
        <div className="z-10 w-full flex justify-center mb-6 relative">
          <div className="flex items-center gap-2">
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img src={BRAND_LOGO} alt="Miami Logo" className="w-10 h-10 rounded-full border border-miami-cyan/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]" />
            </motion.div>
            <div>
              <h2 className="font-display text-2xl text-white tracking-widest leading-none">VERIFICACIÓN</h2>
              <p className="text-miami-pink text-[10px] uppercase tracking-[0.3em] font-bold font-mono">Control de acceso</p>
            </div>
          </div>
        </div>

        {/* Face Scan / Distracción Psicológica Area */}
        <div className="relative w-full aspect-square max-w-full sm:max-w-xs rounded-[1.5rem] overflow-hidden mb-6 border-2 border-zinc-800 z-10 shadow-[0_0_50px_rgba(255,0,128,0.15)] bg-black">
           <motion.img 
             animate={scanning ? {
               scale: [1.02, 1.08, 1.05, 1.1, 1.02],
               filter: [
                 'hue-rotate(0deg) contrast(1.1) brightness(1)', 
                 'hue-rotate(90deg) contrast(1.5) brightness(1.2)', 
                 'hue-rotate(180deg) contrast(1.2) brightness(0.8)', 
                 'hue-rotate(270deg) contrast(1.8) brightness(1.5)', 
                 'hue-rotate(360deg) contrast(1.1) brightness(1)'
               ],
               x: [0, -3, 3, -1, 1, 0],
               y: [0, 3, -3, 1, -1, 0]
             } : {
               scale: 1,
               filter: 'hue-rotate(0deg) contrast(1.1) brightness(0.9)',
               x: 0,
               y: 0
             }}
             transition={scanning ? { duration: 0.8, repeat: Infinity, repeatType: "mirror" } : { duration: 0.8, type: "spring" }}
             src={SNOOP_IMAGE} 
             alt="Snoop Scan Focus" 
             className="w-full h-full object-cover opacity-90 mix-blend-screen"
           />
           
           {/* Dinámicas de Distracción Psicológica (Overlay) */}
           <AnimatePresence>
             {scanning && (
               <>
                 <motion.div 
                   animate={{ opacity: [0, 0.4, 0] }}
                   transition={{ duration: 0.15, repeat: Infinity }}
                   className="absolute inset-0 bg-red-600 mix-blend-overlay z-10"
                 />
                 <motion.div 
                   animate={{ opacity: [0, 0.2, 0] }}
                   transition={{ duration: 0.3, repeat: Infinity, repeatType: 'reverse' }}
                   className="absolute inset-0 bg-miami-cyan mix-blend-color-dodge z-10"
                 />
                 {/* Glitch textual */}
                 <motion.div
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 mix-blend-difference pointer-events-none"
                   animate={{ 
                     opacity: [0, 1, 0, 1, 0],
                     scale: [1, 1.1, 1, 1.2, 1],
                     skewX: [0, -20, 20, -10, 0]
                   }}
                   transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 1 }}
                 >
                   <span className="font-display text-4xl sm:text-5xl text-white opacity-50 tracking-widest">18+ ONLY</span>
                 </motion.div>
                 <motion.div
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-15 pointer-events-none mix-blend-screen opacity-70 flex items-center justify-center filter drop-shadow-[0_0_20px_rgba(255,42,128,0.8)]"
                   animate={{
                     scale: [0.8, 1.1, 0.9, 1.3, 0.8],
                     skewX: [0, -10, 10, -5, 0],
                     filter: [
                       'hue-rotate(0deg) contrast(1.5)', 
                       'hue-rotate(90deg) contrast(2) invert(1)', 
                       'hue-rotate(180deg) contrast(1.2)', 
                       'hue-rotate(270deg) contrast(1.8) invert(1)', 
                       'hue-rotate(0deg) contrast(1.5)'
                     ]
                   }}
                   transition={{ duration: 0.4, repeat: Infinity, repeatType: 'reverse' }}
                 >
                   <img src={BRAND_LOGO} alt="Roboneo Logo" className="w-full h-full object-contain rounded-xl mix-blend-color-dodge transition-all" />
                 </motion.div>
               </>
             )}
           </AnimatePresence>

           {/* Parental Advisory Badge Overlay */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="absolute bottom-4 left-4 z-20 pointer-events-none"
           >
             <div className="bg-white px-2 py-1 flex flex-col items-center justify-center border-2 border-black w-20 sm:w-24 shadow-2xl">
               <span className="text-black font-black text-[8px] sm:text-[10px] uppercase leading-none tracking-tight">Parental</span>
               <span className="text-black font-black text-[12px] sm:text-[14px] uppercase leading-none tracking-tight mt-[1px]">Advisory</span>
               <div className="w-full h-[2px] bg-black my-[2px]"></div>
               <span className="text-black font-bold text-[6px] sm:text-[8px] uppercase leading-none tracking-tight">Explicit Content</span>
             </div>
           </motion.div>
           
           {/* Scanning Line */}
           <AnimatePresence>
             {scanning && (
               <motion.div 
                 animate={{ top: ['0%', '100%', '0%'] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute left-0 right-0 h-[2px] bg-white shadow-[0_0_20px_4px_#00E5FF,0_0_40px_8px_#FF2A80] z-20"
               />
             )}
           </AnimatePresence>
           
           {/* Focus reticle corners */}
           <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-miami-pink opacity-80 z-20"></div>
           <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-miami-cyan opacity-80 z-20"></div>
           <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-miami-cyan opacity-80 z-20"></div>
           <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-miami-pink opacity-80 z-20"></div>
           
           {/* Cyber Grid */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 z-10 mix-blend-overlay"></div>
        </div>

        <div className="h-28 flex items-center justify-center w-full z-10">
          {scanning ? (
            <div className="flex flex-col items-center">
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 border-4 border-t-miami-cyan border-b-miami-pink border-l-transparent border-r-transparent rounded-full mb-3 shadow-[0_0_15px_rgba(255,42,128,0.5)]"
              />
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 0.1, repeat: Infinity }}
                className="text-center"
              >
                <p className="text-miami-cyan font-display tracking-[0.2em] text-lg drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">ANALIZANDO FRECUENCIA</p>
                <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest mt-1">Sintonizando vibras (+18) ...</p>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center w-full"
            >
              <p className="text-zinc-300 mb-5 text-sm font-light">Este sitio contiene experiencias para adultos.<br/>¿Confirmas tu mayoría de edad?</p>
              <div className="flex gap-3 justify-center w-full">
                <button 
                  onClick={onVerify}
                  className="flex-1 bg-white text-black font-black py-4 px-4 rounded-xl hover:bg-miami-cyan transition-all transform hover:-translate-y-1 active:scale-95 text-xs tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  SÍ, ENTRAR
                </button>
                <button 
                  onClick={() => window.location.href = "https://www.google.com"}
                  className="flex-1 bg-zinc-900 border border-zinc-700 text-zinc-400 font-bold py-4 px-4 rounded-xl hover:bg-zinc-800 hover:text-white transition-all text-xs tracking-[0.1em] uppercase"
                >
                  NO SOY MAYOR
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [selectedVaper, setSelectedVaper] = useState<{ type: 'image' | 'video', src: string } | null>(null);

  return (
    <div className="bg-dark-bg min-h-screen text-white font-body selection:bg-miami-pink selection:text-white relative">
      {!isAgeVerified && <AgeVerification onVerify={() => setIsAgeVerified(true)} />}

      <AnimatePresence>
        {selectedVaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 overflow-hidden"
          >
            {/* Dark overlay close area */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedVaper(null)} />
            
            <button 
              onClick={() => setSelectedVaper(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] bg-zinc-900 border border-zinc-800 rounded-full p-2 hover:bg-zinc-800 transition-colors"
            >
              <X className="w-6 h-6 text-miami-cyan" />
            </button>

            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative w-full max-w-3xl max-h-[90vh] flex items-center justify-center z-10 pointer-events-none"
            >
              {/* Smoke effect generator using motion */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 w-32 h-32 md:w-48 md:h-48 bg-zinc-400 blur-3xl rounded-full mix-blend-screen -z-10"
                  initial={{ y: 50, scale: 0.5, opacity: 0, x: 0 }}
                  animate={{ 
                    y: -500 - Math.random() * 300, 
                    x: (Math.random() - 0.5) * 400,
                    scale: 2 + Math.random() * 3, 
                    opacity: [0, 0.4, 0] 
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 3, 
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                />
              ))}

              {selectedVaper.type === 'video' ? (
                <video 
                  src={selectedVaper.src} 
                  autoPlay 
                  loop 
                  playsInline 
                  controls 
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.3)] pointer-events-auto" 
                />
              ) : (
                <img 
                  src={selectedVaper.src} 
                  alt="Vaper Expandido" 
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.3)] pointer-events-auto" 
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative mt-10">
        
        {/* Floating Brand Logos Decoration */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-0 md:-left-10 w-24 h-24 md:w-40 md:h-40 xl:w-48 xl:h-48 z-0 opacity-40 pointer-events-none"
        >
          <img src={FLAVOR_LOGOS[0]} alt="Miami Decoration" className="w-full h-full object-contain filter drop-shadow-2xl" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 md:-right-10 w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 z-0 opacity-40 pointer-events-none"
        >
          <img src={FLAVOR_LOGOS[1]} alt="Miami Decoration" className="w-full h-full object-contain filter drop-shadow-2xl" />
        </motion.div>

        <div className="text-center mb-16 relative z-10">
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

      {/* VAPERS SECTION */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl mb-4 text-miami-cyan">NUESTROS VAPERS</h2>
          <p className="text-gray-400 max-w-lg mx-auto">Explora nuestra colección de vapers y esencias premium.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
          {VAPERS_ASSETS.length > 0 ? VAPERS_ASSETS.map((asset, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)",
                borderColor: "rgba(0, 229, 255, 0.5)"
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              onClick={() => setSelectedVaper(asset)}
              className="relative w-full sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              {asset.type === 'video' ? (
                 <video 
                   src={asset.src} 
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                   controls
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
              ) : (
                 <img 
                   src={asset.src} 
                   alt={`Vaper ${i + 1}`} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
              )}
            </motion.div>
          )) : (
            <div className="text-center bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 w-full">
               <Wind className="w-16 h-16 text-miami-cyan mx-auto mb-4 opacity-50" />
               <p className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-2">Sección en construcción</p>
               <p className="text-zinc-600 italic">Sube tus fotos y videos de vapers a la carpeta /public/vapers/ y agrégalos en VAPERS_ASSETS</p>
            </div>
          )}
        </div>
      </section>



      {/* LOCAL VIDEOS SECTION */}
      <section className="py-20 overflow-hidden">
        <div className="px-4 text-center mb-12">
             <h2 className="font-display text-5xl md:text-6xl mb-4 uppercase">
               Nuestra <span className="text-miami-cyan">Vibra</span>
             </h2>
             <p className="text-zinc-400 max-w-lg mx-auto">Disfruta de nuestros mejores momentos.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {LOCAL_VIDEOS.map((vid, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 0, 115, 0.4)",
                borderColor: "rgba(255, 0, 115, 0.5)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-zinc-900 border-2 border-zinc-800 shadow-2xl"
            >
               <video 
                 src={vid} 
                 autoPlay 
                 muted 
                 loop 
                 playsInline
                 controls
                 className="w-full h-full object-cover"
               />
            </motion.div>
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
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 30px rgba(255, 42, 128, 0.4)",
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
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

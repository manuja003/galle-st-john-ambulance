import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const categories = ["All", "Training", "Events", "Community", "Emergency"];

const galleryItems = [
  { id: 1, title: "First Aid Training Session", category: "Training" },
  { id: 2, title: "Galle Literary Festival Coverage", category: "Events" },
  { id: 3, title: "Blood Donation Drive 2024", category: "Community" },
  { id: 4, title: "Flood Relief Operations", category: "Emergency" },
  { id: 5, title: "CPR Workshop for Schools", category: "Training" },
  { id: 6, title: "Annual Parade & Ceremony", category: "Events" },
  { id: 7, title: "Community Health Screening", category: "Community" },
  { id: 8, title: "Youth Division Camp", category: "Training" },
  { id: 9, title: "Dengue Awareness Campaign", category: "Community" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-white pt-28 pb-20 text-black border-b border-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
        <div className="container px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="mb-6 inline-block rounded-full bg-primary/20 border border-primary/30 px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">
              Our Visual Story
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9]">
              Moments of <br />
              <span className="text-primary italic">Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-black leading-relaxed font-bold max-w-2xl italic">
              A comprehensive gallery documenting our humanitarian work, community engagement, and emergency response efforts in Galle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-8">
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all italic border-2 ${
                  activeCategory === cat 
                    ? "bg-black text-white border-primary shadow-lg" 
                    : "bg-white text-black border-primary/20 hover:bg-black hover:text-white hover:border-primary shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] bg-secondary shadow-lg border-2 border-primary/20 hover:border-primary transition-all"
              >
                <img 
                    src={heroBg} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                   <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 italic">{item.category}</p>
                   <h3 className="text-xl font-black text-white uppercase italic tracking-tight leading-tight">{item.title}</h3>
                </div>
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-[8px] font-black text-white uppercase tracking-widest border border-white/20">
                    Galle District
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container px-4 md:px-8">
           <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter italic leading-none">Have photos <br/> of our work?</h2>
           <p className="text-lg md:text-xl text-white/60 mb-12 font-bold uppercase tracking-widest italic max-w-2xl mx-auto">We value community contributions. Share your photos with us from Galle's frontlines.</p>
           <button className="bg-black text-white px-12 py-5 rounded-xl text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all shadow-2xl italic">
              Submit Photos
           </button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative bg-white pt-28 pb-20 text-black border-b border-secondary overflow-hidden">
      {/* Background Image with High Clarity Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Galle St. John Volunteers" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-5xl"
        >
          <span className="mb-6 inline-block rounded-full bg-primary/20 border border-primary/30 px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">
            Galle District Brigade
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9] text-black drop-shadow-sm">
            Serving <br />
            <span className="text-primary italic">Humanity</span> <br />
            Since <span className="text-black">1906</span>
          </h1>
          <p className="text-lg md:text-xl text-black/90 leading-relaxed font-bold max-w-2xl mb-10 italic">
            Dedicated humanitarian services delivered by trained volunteers committed to saving lives and serving the Galle community.
          </p>
          
          <div className="flex flex-wrap gap-4">
               <Link 
                 to="/services"
                 className="border-2 border-primary text-primary bg-white/80 backdrop-blur-sm px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg italic"
               >
                 Learn First Aid
               </Link>
               <Link 
                 to="/volunteers"
                 className="border-2 border-black text-black bg-white/80 backdrop-blur-sm px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all italic shadow-md"
               >
                 Join the Brigade
               </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

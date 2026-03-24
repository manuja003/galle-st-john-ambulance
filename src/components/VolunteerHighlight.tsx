import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const VolunteerHighlight = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20 filter grayscale">
           <img src={heroBg} alt="Action background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
           >
               <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30">
                   <img src={heroBg} alt="Volunteers in action" className="w-full h-[500px] object-cover" />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl shadow-2xl hidden md:block border-4 border-black">
                   <p className="text-4xl font-black text-white uppercase italic tracking-tighter">85+</p>
                   <p className="text-white/80 font-bold text-[10px] tracking-widest uppercase mt-1">Years of Service</p>
               </div>
           </motion.div>

           <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
           >
               <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-8 italic text-center lg:text-left">Volunteer Impact</h2>
               <blockquote className="text-3xl md:text-5xl font-black italic mb-10 leading-[0.9] uppercase tracking-tighter text-center lg:text-left">
                   "We serve when it <br/> matters <span className="text-primary tracking-widest">most."</span>
               </blockquote>
               <p className="text-lg text-white/50 leading-relaxed mb-12 font-medium max-w-lg mx-auto lg:mx-0 italic text-center lg:text-left">
                   Our volunteers are the backbone of our organization. From event medical coverage to disaster response, we are always ready to help those in need across Galle District.
               </p>
               <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                    <Link
                        to="/volunteers"
                        className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-base font-black text-white transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-xl uppercase tracking-widest italic"
                    >
                        Join Us
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="h-0.5 w-12 bg-primary/30" />
                        <p className="text-xs font-black uppercase tracking-widest text-primary italic">Be a Hero</p>
                    </div>
               </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerHighlight;

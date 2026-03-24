import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter italic">Serving Galle</h2>
                <p className="text-lg md:text-xl text-foreground/60 leading-relaxed mb-10 font-medium">
                    The St. John Ambulance Brigade in Galle District is dedicated to <span className="text-primary italic font-black">saving lives</span> through first aid training, emergency response, and compassionate community care.
                </p>
                <Link
                    to="/about"
                    className="inline-flex h-14 items-center justify-center rounded-xl bg-black px-10 text-base font-black text-white transition-all hover:bg-primary hover:scale-105 active:scale-95 shadow-xl uppercase tracking-widest italic"
                >
                    Our History
                </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

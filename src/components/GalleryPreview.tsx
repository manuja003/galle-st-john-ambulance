import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-white border-t border-secondary overflow-hidden">
      <div className="container px-4 md:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter italic">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium italic mb-4">
              A glimpse into the lives of our volunteers and the impact we make in the community.
          </p>
      </div>
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="aspect-[4/3] rounded-3xl overflow-hidden bg-secondary shadow-lg border-2 border-primary/20 group hover:border-primary transition-all"
                >
                    <img 
                        src={heroBg} 
                        alt={`Gallery ${i}`} 
                        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                    />
                </motion.div>
            ))}
        </div>
        <div className="mt-16 text-center">
            <Link 
                to="/gallery" 
                className="inline-flex h-14 items-center justify-center rounded-xl bg-black px-12 text-base font-black text-white transition-all hover:bg-primary hover:scale-105 shadow-xl uppercase tracking-widest italic"
            >
                View Full Gallery
            </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import VolunteerHighlight from "@/components/VolunteerHighlight";
import GalleryPreview from "@/components/GalleryPreview";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => (
  <Layout>
    <Hero />
    <QuickActions />
    <Stats />
    <AboutPreview />
    <VolunteerHighlight />
    <GalleryPreview />
    
    {/* Contact CTA */}
    <section className="py-16 bg-white border-t border-border">
      <div className="container px-4 md:px-8">
        <div className="bg-primary rounded-[2rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase italic tracking-tighter">
              Need First Aid Support?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium italic">
              Whether it's for an event, training, or volunteering, we're here to help. Get in touch with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-black text-white px-10 py-4 rounded-xl text-lg font-black transition-all hover:scale-105 shadow-xl hover:bg-white hover:text-black uppercase tracking-widest italic"
              >
                Contact Us Now
              </Link>
              <a
                href="tel:+94912222222"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl text-lg font-black transition-all hover:bg-white/20 uppercase tracking-widest italic"
              >
                Call for Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;

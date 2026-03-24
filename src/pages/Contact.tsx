import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-white pt-28 pb-20 text-black border-b border-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Contact Us" 
          className="w-full h-full object-cover opacity-50"
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
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9]">
            We're Here <br />
            <span className="text-primary italic">To Help</span>
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed font-bold max-w-2xl italic">
            Have questions about training, event coverage, or volunteering? Reach out to our Galle District headquarters.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Contact Content */}
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight italic"> Our Headquarters </h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", text: "St. John Ambulance Galle District, Main Street, Galle, Sri Lanka" },
                  { icon: Phone, title: "Phone", text: "+94 91 222 2222" },
                  { icon: Mail, title: "Email", text: "galle@stjohn.lk" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 italic">{item.title}</p>
                      <p className="text-lg font-bold italic">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight italic">Follow Our Work</h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <button key={i} className="h-12 w-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-black hover:text-white transition-all shadow-md">
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black border-2 border-primary p-12 md:p-14 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden lg:mt-16 italic"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter italic leading-none">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-primary italic">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 focus:border-primary transition-all outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-primary italic">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 focus:border-primary transition-all outline-none font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-primary italic">Subject</label>
                  <input type="text" className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 focus:border-primary transition-all outline-none font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-primary italic">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 focus:border-primary transition-all outline-none font-bold resize-none" />
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-xl text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-xl italic">
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="py-24 bg-white border-t border-secondary">
       <div className="container px-4 md:px-8">
            <div className="rounded-[2.5rem] overflow-hidden border-2 border-secondary shadow-2xl h-[450px] grayscale hover:grayscale-0 transition-all duration-1000 bg-secondary flex items-center justify-center italic font-black text-black/10 text-4xl uppercase tracking-[0.5em]">
                District Headquarters Map
            </div>
       </div>
    </section>
  </Layout>
);

export default Contact;

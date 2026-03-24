import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronRight, Quote, Award } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const requirements = [
  "Must be committed to community service",
  "Willing to undergo professional training",
  "Team-oriented and disciplined mindset",
  "Must be 16 years or older",
  "Good physical and mental health",
  "No criminal record",
];

const benefits = [
  "Certified First Aid & CPR Training",
  "Leadership & Management Skills",
  "Direct Community Impact",
  "Professional Networking",
  "Personal Growth & Fulfillment",
  "Special Recognition & Awards",
];

const steps = [
  { step: "01", title: "Apply Online", description: "Fill out our volunteer application form with your details." },
  { step: "02", title: "Interview", description: "Meet our team to discuss your motivations and skills." },
  { step: "03", title: "Training", description: "Complete mandatory first aid training and orientation." },
  { step: "04", title: "Start Serving", description: "Join your unit and begin making a difference in Galle." },
];

const testimonials = [
  { name: "Kasun Rajapaksa", role: "Volunteer since 2018", text: "Joining St. John Ambulance was the best decision of my life. The training gave me the confidence to save a life at Unawatuna Beach." },
  { name: "Samanthi Dias", role: "Youth Division", text: "As a student, volunteering here taught me leadership and teamwork. It shaped who I am today." },
  { name: "Rev. Fr. Bandara", role: "Community Partner", text: "Their volunteers are dedicated and professional. An invaluable partner in our health initiatives." },
];

const Volunteers = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-white pt-28 pb-20 text-black border-b border-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Galle Volunteers" 
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
            Join the Brigade
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9]">
            Become a <br />
            <span className="text-primary italic">Life Saver</span>
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed font-bold max-w-2xl italic">
            Our volunteers are the backbone of our organization. They are trained, disciplined, and always ready to serve the community in Galle District.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Requirements & Benefits */}
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Requirements */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white border-2 border-primary text-black hover:bg-black hover:text-white transition-all rounded-[2.5rem] p-10 md:p-14 italic"
          >
            <h2 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tight italic">Requirements</h2>
            <ul className="grid gap-4">
              {requirements.map((r, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary group-hover:text-white transition-colors" />
                  <span className="text-lg font-bold">{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white border-2 border-primary text-black hover:bg-black hover:text-white transition-all rounded-[2.5rem] p-10 md:p-14 italic"
          >
            <h2 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tight italic">Benefits</h2>
            <ul className="grid gap-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <Award className="h-5 w-5 shrink-0 text-primary group-hover:text-white transition-colors" />
                  <span className="text-lg font-bold">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Steps to Join */}
    <section className="py-24 bg-secondary/20">
      <div className="container px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-black mb-16 uppercase tracking-tighter italic text-center">4 Simple Steps to Join</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border-2 border-secondary hover:border-primary rounded-[2.5rem] transition-all shadow-lg hover:-translate-y-2 italic"
            >
              <span className="text-5xl font-black text-primary/10 group-hover:text-primary transition-colors italic block mb-6">{s.step}</span>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight italic">{s.title}</h3>
              <p className="text-muted-foreground font-medium italic">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-black text-white overflow-hidden relative">
       <div className="absolute inset-0 z-0 opacity-10">
           <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
       </div>
       <div className="container relative z-10 px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter italic text-center">Volunteer Stories</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border-2 border-primary text-black hover:bg-white hover:shadow-2xl rounded-[2.5rem] transition-all relative italic"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-6 group-hover:text-primary transition-colors" />
              <p className="text-lg font-bold leading-relaxed mb-8 italic">"{t.text}"</p>
              <div>
                <p className="text-xl font-black uppercase italic tracking-tight">{t.name}</p>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-white border-t border-secondary">
      <div className="container px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter italic leading-none">Ready to <br/> make a difference?</h2>
        <p className="text-lg text-black/60 mb-10 font-bold uppercase tracking-widest italic max-w-2xl mx-auto">Join our elite team of volunteers today and serve with honor.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="bg-primary text-white h-14 px-12 rounded-xl flex items-center justify-center font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl italic"
          >
            Apply Now
          </Link>
          <div className="flex items-center gap-4">
             <div className="h-0.5 w-10 bg-primary/30" />
             <p className="text-xs font-black uppercase tracking-widest text-primary italic">Contact District Headquarters</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Volunteers;

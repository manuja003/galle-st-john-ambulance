import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const timeline = [
  { year: "Origins", text: "The St. John Ambulance movement dates back to the Order of St. John, evolving into one of the world's most recognized first aid organizations." },
  { year: "1936", text: "St. John Ambulance established in Sri Lanka (then Ceylon), beginning decades of active community service." },
  { year: "1950s", text: "Galle District unit officially formed, serving the Southern Province with first aid and emergency response." },
  { year: "1980s", text: "Expansion of community health programs and certified first aid training across Galle." },
  { year: "2004", text: "Played a critical role in the Indian Ocean Tsunami relief efforts in Southern Sri Lanka." },
  { year: "Present", text: "Continues to serve with 500+ active volunteers, contributing significantly to public health and emergency preparedness." },
];

const leaders = [
  { name: "Dr. Anura Perera", role: "District Commander" },
  { name: "Mrs. Kamala Jayawardena", role: "Deputy Commander" },
  { name: "Mr. Ranjith Silva", role: "Training Officer" },
  { name: "Ms. Nadeesha Fernando", role: "Youth Division Lead" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-white pt-28 pb-20 text-black border-b border-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
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
            About Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9]">
            Serving Galle <br />
            <span className="text-primary italic">Since 1936</span>
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed font-bold max-w-2xl italic">
            St. John Ambulance Galle District is a dedicated humanitarian organization committed to providing first aid, emergency medical support, and community health education.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: "To provide high-quality first aid training, emergency medical services, and humanitarian support to the community while fostering compassion." },
            { icon: Eye, title: "Our Vision", text: "To be a leading community-based organization in Galle District, ensuring that every individual has access to life-saving knowledge." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border-2 border-primary text-black hover:bg-black hover:text-white rounded-3xl p-10 shadow-xl transition-all group italic hover:-translate-y-1"
            >
              <item.icon className="mb-6 h-10 w-10 text-primary group-hover:text-white transition-colors" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight">{item.title}</h3>
              <p className="text-base leading-relaxed opacity-70 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 bg-secondary/20">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-4 uppercase tracking-tighter italic">Our Journey</h2>
            <p className="text-base text-muted-foreground font-medium italic">Decades of dedicated service to the community.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" />
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
            >
              <div className={`absolute top-1.5 h-4 w-4 rounded-full bg-primary border-2 border-white shadow-lg z-10 ${i % 2 === 0 ? 'left-[-8px] md:left-auto md:right-[-9px]' : 'left-[-8px] md:left-[-9px]'}`} />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-secondary hover:border-primary transition-all group"
              >
                  <span className="text-2xl font-black text-primary block mb-3 italic uppercase tracking-tighter">{item.year}</span>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed group-hover:text-black transition-colors italic">{item.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-4 uppercase tracking-tighter italic">Leadership</h2>
            <p className="text-base text-muted-foreground font-medium italic">The dedicated team steering our mission in Galle.</p>
        </div>
        
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 text-center bg-white border-2 border-primary text-black hover:bg-black hover:text-white rounded-3xl transition-all shadow-lg hover:-translate-y-1"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110 shadow-md">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-black text-black group-hover:text-white mb-1 uppercase tracking-tight italic leading-tight">{leader.name}</h4>
              <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px] italic">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

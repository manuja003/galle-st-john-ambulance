import { motion } from "framer-motion";
import { GraduationCap, Shield, Heart, Siren, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: GraduationCap,
    title: "First Aid Training",
    description: "Certified first aid and CPR training programs for schools, offices, and community groups across Galle District.",
    features: ["Schools & Universities", "Corporate Offices", "Community Groups", "CPR & AED Certification", "Advanced First Aid"],
  },
  {
    icon: Shield,
    title: "Event Medical Coverage",
    description: "Our trained volunteers provide first aid and emergency response at public gatherings throughout Galle.",
    features: ["Public Events & Festivals", "Sports Meets", "Religious Gatherings", "Risk Assessment", "Equipped First Aid Posts"],
  },
  {
    icon: Heart,
    title: "Community Health",
    description: "Awareness campaigns and health initiatives to promote well-being in underserved communities.",
    features: ["Safety Awareness", "Hygiene Education", "Blood Donation Drives", "Health Screening", "Disaster Preparedness"],
  },
  {
    icon: Siren,
    title: "Emergency Response",
    description: "Our brigade is ready to assist during accidents, natural disasters, and public emergencies.",
    features: ["Accident Assistance", "Natural Disaster Relief", "Search & Rescue Support", "Authority Coordination", "Rapid Response Teams"],
  },
];

const Services = () => (
  <Layout>
    <section className="bg-white pt-28 pb-20 text-black border-b border-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Galle First Aid" 
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
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9]">
            Professional <br />
            <span className="text-primary italic">First Aid & Care</span>
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed font-bold max-w-2xl italic">
            Dedicated humanitarian services delivered by trained volunteers committed to saving lives and serving the Galle community.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border-2 border-primary text-black hover:bg-black hover:text-white rounded-[2.5rem] transition-all shadow-xl italic"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary flex group-hover:bg-primary group-hover:text-white transition-all shadow-md group-hover:scale-110">
                  <service.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight italic">{service.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/70 mb-8 font-medium leading-relaxed italic line-clamp-2">{service.description}</p>
              <ul className="grid grid-cols-1 gap-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors italic">
                    <CheckCircle className="h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;

import { motion } from "framer-motion";

const stats = [
  { label: "Volunteers", value: "2000+", id: "volunteers" },
  { label: "Years of Service", value: "118", id: "years" },
  { label: "Community Events", value: "5000+", id: "events" },
  { label: "Trained First Aiders", value: "10000+", id: "trained" },
];

const Stats = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-8">
        <div className="bg-black text-white rounded-[2rem] p-10 md:p-14 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-black mb-2 italic tracking-tighter text-white group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40 italic">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

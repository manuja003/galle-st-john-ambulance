import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-white border-2 border-primary text-black hover:bg-black hover:text-white group rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-md hover:shadow-xl italic"
  >
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-black uppercase tracking-tight leading-tight">{title}</h3>
    <p className="mt-3 text-base leading-relaxed opacity-60 font-medium">{description}</p>
  </motion.div>
);

export default ServiceCard;

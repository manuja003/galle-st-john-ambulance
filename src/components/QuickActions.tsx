import { GraduationCap, Shield, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Learn First Aid",
    description: "Get certified training for schools and offices.",
    icon: GraduationCap,
    to: "/services",
  },
  {
    title: "Get Event Coverage",
    description: "Professional medical support for your events.",
    icon: Shield,
    to: "/services",
  },
  {
    title: "Become a Volunteer",
    description: "Join our team and serve the community.",
    icon: Users,
    to: "/volunteers",
  },
  {
    title: "Donate",
    description: "Support our mission to save lives.",
    icon: Heart,
    to: "/contact",
  },
];

const QuickActions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <Link
              key={action.title}
              to={action.to}
              className="bg-white border-2 border-primary text-black hover:bg-black hover:text-white group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl shadow-lg italic"
            >
              <action.icon className="h-10 w-10 mb-6 text-primary transition-transform group-hover:scale-110" />
              <h3 className="text-lg font-black mb-3 leading-tight uppercase tracking-tight">{action.title}</h3>
              <p className="opacity-70 text-sm font-medium leading-relaxed italic">{action.description}</p>
              
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-100 transition-opacity">
                 <Shield className="h-5 w-5 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;

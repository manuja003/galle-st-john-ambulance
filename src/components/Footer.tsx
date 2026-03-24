import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-black text-white border-t border-white/5">
    <div className="container px-4 py-12 md:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-white p-1.5">
              <img 
                src="/download.jfif" 
                alt="St. John Ambulance Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors italic leading-tight">St. John Ambulance</h3>
          </div>
          <p className="text-lg font-black text-primary mb-3 uppercase tracking-widest italic">Galle District</p>
          <p className="text-base text-white/40 leading-relaxed mb-6 font-medium italic">
            Serving the community through first aid, emergency response, and education since 1936.
          </p>
          <div className="flex gap-3">
               {[Facebook, Twitter, Instagram].map((Icon, i) => (
                   <a key={i} href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary hover:text-white transition-all border border-white/5 hover:border-transparent">
                       <Icon className="h-4 w-4" />
                   </a>
               ))}
          </div>
        </div>

        <div>
           <h4 className="text-lg font-black uppercase tracking-widest mb-6 border-b border-primary/30 pb-1 inline-block italic">Quick Links</h4>
           <ul className="space-y-3">
            {["About", "Services", "Volunteers", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="text-sm font-bold text-white/40 hover:text-primary transition-colors uppercase tracking-widest italic">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="text-lg font-black uppercase tracking-widest mb-6 border-b border-primary/30 pb-1 inline-block italic">Our Services</h4>
           <ul className="space-y-3">
            {["First Aid Training", "Event Coverage", "Health Programs", "Emergency Response"].map((s) => (
              <li key={s} className="text-sm font-bold text-white/40 uppercase tracking-widest italic">
                  {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="text-lg font-black uppercase tracking-widest mb-6 border-b border-primary/30 pb-1 inline-block italic">Contact Us</h4>
           <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <MapPin className="h-4 w-4 shrink-0 text-primary font-bold transition-transform group-hover:scale-110" />
              <span className="text-sm text-white/40 font-bold italic">Galle Fort, Galle, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone className="h-4 w-4 shrink-0 text-primary font-bold transition-transform group-hover:scale-110" />
              <span className="text-sm text-white/40 font-bold italic">+94 91 222 2222</span>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail className="h-4 w-4 shrink-0 text-primary font-bold transition-transform group-hover:scale-110" />
              <span className="text-sm text-white/40 font-bold italic">info@stjohngalle.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/5 flex flex-col items-center gap-2">
        <p className="text-xs font-bold text-white uppercase tracking-widest text-center italic">
          © 2026 St. John Ambulance Brigade – Galle District.
        </p>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">
          Developed by{" "}
          <a 
            href="https://www.manujaprofile.live/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors"
          >
            T.G.Manuja Pinsara
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

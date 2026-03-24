import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="text-center max-w-md">
        <h1 className="mb-6 text-9xl font-black italic tracking-tighter text-black uppercase">404</h1>
        <p className="mb-10 text-2xl font-black italic tracking-tight text-black/40 uppercase">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-primary px-10 py-5 rounded-2xl text-lg font-black text-white transition-all hover:scale-110 shadow-xl uppercase tracking-widest italic"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

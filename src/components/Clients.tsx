import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const clients = [
  { name: "Carborundum Universal Limited", domain: "cumi-murugappa.com", image: "/images/carborundum_logo.png" },
  { name: "3F Industries Ltd", domain: "3findustries.com", image: "/images/3f_logo.png" },
  { name: "Rane Brake Lining Limited", domain: "ranegroup.com", image: "/images/rane_logo.png" },
  { name: "TAFE Groups", domain: "tafe.com", image: "/images/tafe_logo.png" },
  { name: "Thermal Power Stations (All over India)", domain: "", image: "/images/thermal_power_logo.png" },
  { name: "Cryolor Asia Pacific", domain: "cryolor.com", image: "/images/cryolor_logo.png" }
];

const TrustMetric = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md border border-gray-200/60 px-6 py-3 rounded-2xl text-[15px] font-bold text-navy-950 shadow-sm hover:shadow-md transition-all">
    <CheckCircle2 className="w-5 h-5 text-brand-600" />
    {text}
  </div>
);

const ClientLogo = ({ name, domain, image }: { name: string, domain: string, image?: string }) => {
  const [error, setError] = useState(false);
  
  const imgSrc = image || (domain ? `https://logo.clearbit.com/${domain}` : null);
  
  return (
    <div className="flex flex-col items-center justify-center h-[180px] p-6 bg-white rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group border border-gray-100/50">
      <div className="flex-1 flex items-center justify-center w-full mb-3 overflow-hidden">
        {(!imgSrc || error) ? (
          <span className="font-outfit font-extrabold text-2xl text-navy-950 text-center tracking-tight leading-tight uppercase group-hover:scale-105 transition-transform duration-300">
            {name.split(' ')[0]}
          </span>
        ) : (
          <img 
            src={imgSrc} 
            alt={`${name} logo`} 
            className="max-h-[90px] max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
            onError={() => setError(true)}
          />
        )}
      </div>
      <span className="text-[16px] font-[600] text-gray-800 text-center w-full truncate px-4">
        {name}
      </span>
    </div>
  );
};

export default function Clients() {
  return (
    <section className="relative py-[100px] bg-gradient-to-b from-gray-50 to-white overflow-hidden border-y border-gray-200">
      
      {/* Subtle Blueprint/Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#0A1435 1px, transparent 1px), linear-gradient(90deg, #0A1435 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[42px] sm:text-[52px] lg:text-[64px] font-[800] text-navy-950 uppercase leading-[1.1] mb-6 tracking-tight">
            Our Esteemed Clients
          </h2>
          <p className="text-[18px] sm:text-[20px] font-medium text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Trusted by leading industrial manufacturers, power plants and engineering companies across India.
          </p>
          
          {/* Trust Metrics */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <TrustMetric text="200+ Projects Delivered" />
            <TrustMetric text="50+ Industrial Clients" />
            <TrustMetric text="45+ Years Experience" />
          </div>
        </div>

        {/* Client Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {clients.map((client, index) => (
            <ClientLogo key={index} name={client.name} domain={client.domain} image={client.image} />
          ))}
        </div>

        {/* Footer Trust Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[22px] sm:text-[26px] font-outfit font-semibold text-gray-800 leading-tight mb-10">
            "We are proud to serve some of India's most respected industrial organizations."
          </p>
          
          <div className="inline-flex flex-col items-center">
            <span className="text-[16px] font-bold text-navy-950 uppercase tracking-[0.15em] mb-4">
              Serving India's Industrial Leaders Since 1980
            </span>
            <div className="w-16 h-1.5 bg-brand-600 rounded-full shadow-sm" />
          </div>
        </div>

      </div>
    </section>
  );
}

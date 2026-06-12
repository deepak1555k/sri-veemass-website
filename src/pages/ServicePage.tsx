import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = id ? servicesData[id] : null;

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Redirect if service not found
    if (id && !service) {
      navigate('/services', { replace: true });
    }
  }, [id, service, navigate]);

  if (!service) {
    return null; // Will redirect in useEffect
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon className="w-10 h-10 text-brand-400" />
            <span className="text-brand-400 font-bold tracking-widest uppercase text-sm sm:text-base">
              Service Details
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-bold text-white mb-6 drop-shadow-lg">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-xl shadow-lg shadow-black/5 p-4 flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-brand-600 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-brand-600 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-900">{service.title}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="text-3xl font-outfit font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {service.overview}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-outfit font-bold text-gray-900 mb-8">Key Features & Capabilities</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-navy-950 rounded-3xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-2xl font-outfit font-bold mb-4">Request Service</h3>
              <p className="text-gray-400 mb-8">
                Ready to get started? Contact our expert technicians to discuss your specific requirements.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-brand-500/30"
              >
                Contact Us Now
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Or call us directly at <br/>
                <a href="tel:+918012909580" className="text-white font-bold text-lg hover:text-brand-400">
                  +91 80129 09580
                </a>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}

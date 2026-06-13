import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  
  const product = id ? productsData[id] : null;

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Redirect if product not found
    if (id && !product) {
      navigate('/products', { replace: true });
    }
  }, [id, product, navigate]);

  if (!product) {
    return null; // Will redirect in useEffect
  }

  const Icon = product.icon;

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon className="w-10 h-10 text-brand-400" />
            <span className="text-brand-400 font-bold tracking-widest uppercase text-sm sm:text-base">
              Product Details
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-bold text-white mb-6 drop-shadow-lg">
            {product.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            {product.shortDescription}
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
          <Link to="/products" className="hover:text-brand-600 transition-colors">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-900">{product.title}</span>
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
                {product.overview}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-outfit font-bold text-gray-900 mb-8">Key Features & Capabilities</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {product.keyFeatures.map((feature, idx) => (
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
              <h3 className="text-2xl font-outfit font-bold mb-4">Interested in this Product?</h3>
              <p className="text-gray-400 mb-8">
                Ready to get started? Request a quote or contact our experts to discuss your specific requirements.
              </p>
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-brand-500/30 mb-4"
              >
                Request a Quote
              </button>
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

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setShowQuoteModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-outfit text-2xl font-bold text-navy-950">Request Quote</h3>
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form 
              className="p-6 space-y-4" 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Quote request sent successfully! We will get back to you soon.'); 
                setShowQuoteModal(false); 
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                <input 
                  type="text" 
                  readOnly 
                  value={product.title} 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" required placeholder="Your name" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" required placeholder="Your phone number" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" required placeholder="Your email address" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements / Message</label>
                <textarea rows={4} placeholder="Please provide any specific requirements..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg shadow-lg shadow-brand-500/25 transition-all">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

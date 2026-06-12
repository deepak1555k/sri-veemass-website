import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Settings, Wrench, Zap, Layers, Cpu, PenTool, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const catalogueItems = [
  {
    id: '01',
    title: 'HYDRAULIC POWER PACKS',
    description: 'Custom designed power packs for various industrial applications. Compact, efficient & reliable.',
    image: '/images/power_pack.png',
    icon: Zap,
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: '02',
    title: 'HYDRAULIC CYLINDERS',
    description: 'We manufacture all types of Hydraulic Cylinders as per customer requirements.',
    image: '/images/hydraulic_cylinder.png',
    icon: Layers,
    color: 'from-gray-700 to-gray-900'
  },
  {
    id: '03',
    title: 'SPECIAL PURPOSE MACHINES (SPM)',
    description: 'Designing and manufacturing SPM for various industrial requirements.',
    image: '/images/spm.png',
    icon: Cpu,
    color: 'from-emerald-500 to-emerald-700'
  },
  {
    id: '04',
    title: 'HYDRAULIC PUMP SERVICING',
    description: 'Expert servicing of all types of hydraulic pumps with genuine spare parts.',
    image: '/images/hydraulic_pump.png',
    icon: Wrench,
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: '05',
    title: 'HYDRAULIC MANIFOLDS',
    description: 'Custom designed hydraulic manifolds for efficient and leak-free fluid routing.',
    image: '/images/manifold.jpg',
    icon: Layers,
    color: 'from-indigo-500 to-indigo-700'
  }
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Header Animation
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
      }

      // Cards Stagger Animation
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(cards, 
          { y: 80, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            duration: 0.8, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.products-grid',
              start: 'top 80%',
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white pt-28 pb-20">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50 rounded-full blur-3xl -z-10 opacity-70 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-70 -translate-x-1/2 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-6 border border-brand-100">
            Product Catalogue
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-950 leading-tight mb-6">
            Our Products <span className="text-brand-600">& Services</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Explore our comprehensive range of high-quality hydraulic power packs, cylinders, special purpose machines, and professional maintenance services.
          </p>
        </div>

        {/* Catalogue Grid */}
        <div className="products-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogueItems.map((item, index) => {
            return (
              <div 
                key={item.id}
                ref={el => { cardsRef.current[index] = el; }}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  
                  <div className="absolute bottom-4 left-4 text-brand-400 font-outfit font-bold text-xl opacity-80">
                    {item.id}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-outfit text-xl font-bold text-navy-950 mb-3 group-hover:text-brand-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                    {item.description}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedProduct(item.title)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 w-fit"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Bottom Border Accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

      </div>

      {/* Quote Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-outfit text-2xl font-bold text-navy-950">Request Quote</h3>
              <button 
                onClick={() => setSelectedProduct(null)}
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
                setSelectedProduct(null); 
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                <input 
                  type="text" 
                  readOnly 
                  value={selectedProduct} 
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
    </div>
  );
}

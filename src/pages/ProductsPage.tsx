import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { productsData } from '../data/productsData';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
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

  const productsList = Object.values(productsData);

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
          {productsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                ref={el => { cardsRef.current[index] = el; }}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image Section */}
                <Link to={`/product/${item.id}`} className="block relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </Link>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-outfit text-xl font-bold text-navy-950 mb-3 group-hover:text-brand-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                    {item.shortDescription}
                  </p>
                  
                  <Link 
                    to={`/product/${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 w-fit"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Bottom Border Accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

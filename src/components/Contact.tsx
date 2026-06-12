import { useState } from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', lines: ['No.13, Brahmin Street', 'Korattur, Chennai - 600 080', 'India'] },
  { icon: Phone, title: 'Call Us', lines: ['M. Seenivasan', '+91 80129 09580', '+91 73582 26207'] },
  { icon: Mail, title: 'Email Us', lines: ['sriveemasshydraulic@gmail.com'] },
  { icon: Clock, title: 'Working Hours', lines: ['Mon – Sat: 8:00 AM – 6:00 PM', 'Sun: Closed (Emergency support)'] },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.fromTo(infoRef.current, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.fromTo(formRef.current, { x: 60, opacity: 0 }, {
        x: 0, opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      Date: "'" + new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }),
      Name: formData.get('name') || '',
      Company: formData.get('company') || '',
      Email: formData.get('email') || '',
      Phone: formData.get('phone') || '',
      Service: formData.get('service') || '',
      Message: formData.get('message') || ''
    };

    try {
      const sheetPromise = fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: [data] })
      });

      const emailPromise = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '1f35d5d0-22ce-4728-8c90-5d2409b7a33c',
          subject: `New Lead: ${data.Service} - ${data.Name}`,
          name: data.Name,
          email: data.Email,
          phone: data.Phone,
          company: data.Company,
          service: data.Service,
          message: data.Message,
          from_name: 'Sri Veemass Website'
        })
      });

      const [sheetRes, emailRes] = await Promise.all([sheetPromise, emailPromise]);

      if (!sheetRes.ok || !emailRes.ok) {
        console.error("Submission failed", { sheet: sheetRes.status, email: emailRes.status });
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Ready to Power Your
            <span className="block text-brand-600">Next Project?</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Contact us for a free consultation and quote. Our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div ref={infoRef} className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-brand-50/50 transition-colors duration-300 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.lines.map((line) => (
                      <p key={line} className="text-gray-500 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div ref={formRef} className="lg:col-span-3">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 max-w-md">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input name="name" type="text" required placeholder="Your full name" className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                      <input name="company" type="text" placeholder="Your company" className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input name="email" type="email" required placeholder="email@example.com" className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                      <input name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                    <select name="service" className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-800">
                      <option value="">Select a service</option>
                      <option value="Hydraulic Cylinder Manufacturing">Hydraulic Cylinder Manufacturing</option>
                      <option value="Hydraulic System Design">Hydraulic System Design</option>
                      <option value="Power Pack Solutions">Power Pack Solutions</option>
                      <option value="Repair & Maintenance">Repair & Maintenance</option>
                      <option value="Industrial Automation">Industrial Automation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea name="message" required rows={4} placeholder="Describe your requirements..." className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-800 placeholder:text-gray-400 resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="group flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

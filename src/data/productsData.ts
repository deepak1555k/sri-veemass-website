import { Zap, Layers, Cpu, Wrench, Settings } from 'lucide-react';

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductData {
  id: string;
  title: string;
  image: string;
  icon: any;
  shortDescription: string;
  overview: string;
  keyFeatures: ProductFeature[];
  color: string;
}

export const productsData: Record<string, ProductData> = {
  'hydraulic-power-packs': {
    id: 'hydraulic-power-packs',
    title: 'HYDRAULIC POWER PACKS',
    image: '/images/power_pack.png',
    icon: Zap,
    shortDescription: 'Custom designed power packs for various industrial applications. Compact, efficient & reliable.',
    overview: 'Our hydraulic power packs are engineered to provide reliable and efficient fluid power for a wide range of industrial applications. From compact units to large, custom-built systems, we deliver power packs that meet the highest standards of performance and durability.',
    keyFeatures: [
      {
        title: 'Custom Design',
        description: 'Tailored solutions designed specifically for your unique operational requirements.'
      },
      {
        title: 'High Efficiency',
        description: 'Optimized fluid flow and pressure to minimize energy consumption and maximize output.'
      },
      {
        title: 'Compact Footprint',
        description: 'Space-saving designs that integrate seamlessly into your existing machinery and infrastructure.'
      }
    ],
    color: 'from-blue-500 to-blue-700'
  },
  'hydraulic-cylinders': {
    id: 'hydraulic-cylinders',
    title: 'HYDRAULIC CYLINDERS',
    image: '/images/hydraulic_cylinder.png',
    icon: Layers,
    shortDescription: 'We manufacture all types of Hydraulic Cylinders as per customer requirements.',
    overview: 'We offer a comprehensive range of hydraulic cylinders built to withstand rigorous industrial environments. Whether you need standard tie-rod cylinders or custom-engineered heavy-duty cylinders, we manufacture products that deliver precision and long-lasting reliability.',
    keyFeatures: [
      {
        title: 'Robust Construction',
        description: 'Manufactured using high-grade materials to ensure durability under extreme loads.'
      },
      {
        title: 'Custom Specifications',
        description: 'Available in various bore sizes, stroke lengths, and mounting configurations.'
      },
      {
        title: 'Leak-Free Performance',
        description: 'Advanced sealing technologies to prevent fluid leakage and maintain pressure.'
      }
    ],
    color: 'from-gray-700 to-gray-900'
  },
  'special-purpose-machines': {
    id: 'special-purpose-machines',
    title: 'SPECIAL PURPOSE MACHINES (SPM)',
    image: '/images/spm.png',
    icon: Cpu,
    shortDescription: 'Designing and manufacturing SPM for various industrial requirements.',
    overview: 'Our Special Purpose Machines (SPMs) are designed to automate and optimize specific manufacturing processes. By integrating advanced hydraulics and precision engineering, we deliver bespoke machinery that significantly improves production speed, accuracy, and overall efficiency.',
    keyFeatures: [
      {
        title: 'Process Automation',
        description: 'Automated solutions that reduce manual labor and increase production throughput.'
      },
      {
        title: 'High Precision',
        description: 'Engineered for exact tolerances, ensuring consistent quality in every cycle.'
      },
      {
        title: 'Turnkey Solutions',
        description: 'From initial concept and design to manufacturing, installation, and commissioning.'
      }
    ],
    color: 'from-emerald-500 to-emerald-700'
  },
  'hydraulic-pump-servicing': {
    id: 'hydraulic-pump-servicing',
    title: 'HYDRAULIC PUMP SERVICING',
    image: '/images/hydraulic_pump.png',
    icon: Wrench,
    shortDescription: 'Expert servicing of all types of hydraulic pumps with genuine spare parts.',
    overview: 'We provide expert servicing, repair, and overhaul for all types of hydraulic pumps. Our skilled technicians use advanced diagnostic equipment and genuine spare parts to restore your pumps to peak performance, minimizing downtime and extending equipment lifespan.',
    keyFeatures: [
      {
        title: 'Comprehensive Diagnostics',
        description: 'Thorough inspection and testing to accurately identify underlying issues.'
      },
      {
        title: 'Genuine Parts',
        description: 'We use only high-quality, authentic spare parts for reliable repairs.'
      },
      {
        title: 'Performance Testing',
        description: 'Rigorous post-repair testing to ensure pumps meet operational specifications.'
      }
    ],
    color: 'from-orange-500 to-orange-700'
  },
  'hydraulic-manifolds': {
    id: 'hydraulic-manifolds',
    title: 'HYDRAULIC MANIFOLDS',
    image: '/images/manifold.jpg',
    icon: Layers,
    shortDescription: 'Custom designed hydraulic manifolds for efficient and leak-free fluid routing.',
    overview: 'Our custom hydraulic manifolds are designed to consolidate complex valve circuits into a single, compact block. This reduces plumbing, minimizes the risk of leaks, and simplifies system maintenance, resulting in a cleaner and more efficient hydraulic setup.',
    keyFeatures: [
      {
        title: 'Compact Design',
        description: 'Consolidated valving to save space and reduce system footprint.'
      },
      {
        title: 'Leak Reduction',
        description: 'Fewer connections mean a significantly lower risk of fluid leaks.'
      },
      {
        title: 'Simplified Maintenance',
        description: 'Easy access to valves for faster troubleshooting and replacement.'
      }
    ],
    color: 'from-indigo-500 to-indigo-700'
  },
  'hydraulic-motors-drives': {
    id: 'hydraulic-motors-drives',
    title: 'HYDRAULIC MOTORS & DRIVES',
    image: '/images/hydraulic_motor.png',
    icon: Settings,
    shortDescription: 'High-performance hydraulic motors and drives for precise and powerful mechanical motion.',
    overview: 'We supply top-quality hydraulic motors and drives designed to deliver powerful, precise, and controlled rotary motion. Suitable for a wide variety of mobile and industrial applications, our products ensure robust performance even in the most demanding operational conditions.',
    keyFeatures: [
      {
        title: 'High Torque',
        description: 'Capable of delivering massive torque at low speeds for heavy-duty applications.'
      },
      {
        title: 'Variable Speed Control',
        description: 'Precise control over rotational speed to match varying operational demands.'
      },
      {
        title: 'Durable Construction',
        description: 'Built to withstand continuous operation and harsh industrial environments.'
      }
    ],
    color: 'from-red-500 to-red-700'
  }
};

import { LucideIcon, Settings, Truck, Building2, Package, Tractor, Anchor, Combine, Pickaxe, Hammer, Factory } from 'lucide-react';

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryData {
  id: string;
  name: string;
  image: string;
  icon: any; // using any for LucideIcon to avoid strict typing issues if they arise
  shortDescription: string;
  overview: string;
  keySolutions: IndustrySolution[];
}

export const industriesData: Record<string, IndustryData> = {
  manufacturing: {
    id: 'manufacturing',
    name: 'MANUFACTURING',
    image: '/images/industry_manufacturing_1781249756724.png',
    icon: Settings,
    shortDescription: 'Powering the future of the manufacturing sector with precision engineering and unmatched reliability.',
    overview: 'In the fast-paced manufacturing industry, downtime is not an option. We provide high-performance hydraulic systems designed to keep assembly lines moving efficiently and safely. From custom hydraulic power packs to specialized cylinders for heavy machinery, our solutions ensure optimal performance, precision control, and long-term durability in rigorous manufacturing environments.',
    keySolutions: [
      {
        title: 'Hydraulic Power Packs',
        description: 'Custom-built power units providing reliable fluid power for automated assembly lines and heavy presses.'
      },
      {
        title: 'Precision Cylinders',
        description: 'High-accuracy hydraulic cylinders designed for repetitive, high-speed manufacturing processes.'
      },
      {
        title: 'System Maintenance',
        description: 'Comprehensive servicing and preventive maintenance to eliminate unexpected downtime in your plant.'
      }
    ]
  },
  automobile: {
    id: 'automobile',
    name: 'AUTOMOBILE',
    image: '/images/industry_automobile_1781249770549.png',
    icon: Truck,
    shortDescription: 'Powering the future of the automobile sector with precision engineering and unmatched reliability.',
    overview: 'The automotive industry demands high speed, extreme precision, and unyielding safety standards. Sri Veemass Hydraulics supplies state-of-the-art hydraulic components for automotive assembly plants, test rigs, and component manufacturing. Our hydraulic solutions ensure smooth operations from chassis lifting to robotic welding stations.',
    keySolutions: [
      {
        title: 'Scissor Lift Hydraulics',
        description: 'Robust cylinders and power units tailored for vehicle lifting and positioning systems.'
      },
      {
        title: 'Test Rig Actuators',
        description: 'High-frequency actuators for automotive component fatigue testing and quality assurance.'
      },
      {
        title: 'Press Hydraulics',
        description: 'Heavy-duty hydraulic systems for sheet metal stamping and body panel forming presses.'
      }
    ]
  },
  construction: {
    id: 'construction',
    name: 'CONSTRUCTION',
    image: '/images/industry_construction_1781249783228.png',
    icon: Building2,
    shortDescription: 'Powering the future of the construction sector with precision engineering and unmatched reliability.',
    overview: 'Construction equipment operates in some of the harshest environments on earth. Our hydraulic systems are built tough to withstand dirt, debris, extreme loads, and continuous use. We supply and service hydraulic cylinders and pumps for excavators, cranes, loaders, and piling machines, ensuring your heavy equipment never misses a beat.',
    keySolutions: [
      {
        title: 'Heavy-Duty Excavator Cylinders',
        description: 'Ruggedized hydraulic cylinders built to withstand high impact and harsh outdoor conditions.'
      },
      {
        title: 'Crane Hydraulics',
        description: 'Precision control valves and lifting cylinders ensuring safe and stable load management.'
      },
      {
        title: 'On-Site Equipment Servicing',
        description: 'Rapid repair and refurbishment of construction machinery hydraulics to keep your projects on schedule.'
      }
    ]
  },
  'material-handling': {
    id: 'material-handling',
    name: 'MATERIAL HANDLING',
    image: '/images/industry_material_handling_1781249797113.png',
    icon: Package,
    shortDescription: 'Powering the future of the material handling sector with precision engineering and unmatched reliability.',
    overview: 'Efficient material handling is the backbone of modern logistics. We provide responsive, durable hydraulic solutions for forklifts, conveyor systems, stackers, and automated guided vehicles (AGVs). Our systems offer smooth lifting, precise positioning, and high energy efficiency to keep warehouses and distribution centers running smoothly.',
    keySolutions: [
      {
        title: 'Forklift Cylinders',
        description: 'High-reliability mast and tilt cylinders for safe and efficient pallet handling.'
      },
      {
        title: 'Conveyor Drive Systems',
        description: 'Hydraulic motors and drives providing consistent torque for heavy-duty material conveyors.'
      },
      {
        title: 'Dock Leveler Hydraulics',
        description: 'Compact power packs and cylinders for smooth, safe loading dock operations.'
      }
    ]
  },
  agriculture: {
    id: 'agriculture',
    name: 'AGRICULTURE',
    image: '/images/industry_agriculture_1781249822755.png',
    icon: Tractor,
    shortDescription: 'Powering the future of the agriculture sector with precision engineering and unmatched reliability.',
    overview: 'Modern agriculture relies heavily on robust machinery to maximize yields. Our agricultural hydraulic solutions are designed to operate reliably in dusty, wet, and demanding field conditions. From tractors and harvesters to irrigation equipment, we provide components that enhance productivity and reduce maintenance overhead for farmers.',
    keySolutions: [
      {
        title: 'Tractor Implement Hydraulics',
        description: 'Versatile cylinders and valves for controlling plows, seeders, and harvesting attachments.'
      },
      {
        title: 'Harvester Drive Systems',
        description: 'Efficient hydraulic motors for propulsion and crop processing in large agricultural machinery.'
      },
      {
        title: 'Agricultural Equipment Repair',
        description: 'Fast turnaround refurbishment of worn agricultural hydraulic components during harvest season.'
      }
    ]
  },
  port: {
    id: 'port',
    name: 'PORT',
    image: '/images/industry_port_1781249834923.png',
    icon: Anchor,
    shortDescription: 'Powering the future of the port sector with precision engineering and unmatched reliability.',
    overview: 'Ports operate 24/7, handling massive loads under corrosive marine conditions. Sri Veemass Hydraulics offers marine-grade hydraulic solutions for ship-to-shore cranes, container handlers, and docking systems. Our products feature specialized coatings and sealing technologies to resist saltwater corrosion and ensure maximum uptime.',
    keySolutions: [
      {
        title: 'Marine-Grade Cylinders',
        description: 'Corrosion-resistant cylinders designed for reach stackers and dockside gantry cranes.'
      },
      {
        title: 'Hatch Cover Hydraulics',
        description: 'Reliable power units and actuators for safe, weather-tight ship hatch operations.'
      },
      {
        title: 'Mooring System Hydraulics',
        description: 'Heavy-duty hydraulic winches and tensioning systems for secure vessel docking.'
      }
    ]
  },
  'rubber-plastics': {
    id: 'rubber-plastics',
    name: 'RUBBER & PLASTICS',
    image: '/images/industry_rubber_plastics_1781249848838.png',
    icon: Combine,
    shortDescription: 'Powering the future of the rubber & plastics sector with precision engineering and unmatched reliability.',
    overview: 'The rubber and plastics industries require immense pressure and precise temperature control. We manufacture high-pressure hydraulic cylinders and custom power packs tailored for injection molding machines, extruders, and vulcanizing presses. Our systems ensure consistent clamping force and rapid cycle times for high-quality production.',
    keySolutions: [
      {
        title: 'Injection Molding Hydraulics',
        description: 'High-speed, high-pressure clamping cylinders and injection unit actuators.'
      },
      {
        title: 'Press Automation Systems',
        description: 'Complete hydraulic power and control systems for rubber vulcanizing presses.'
      },
      {
        title: 'Energy-Efficient Power Packs',
        description: 'Variable displacement pump systems to reduce energy consumption during long molding cycles.'
      }
    ]
  },
  mining: {
    id: 'mining',
    name: 'MINING',
    image: '/images/industry_mining_1781249862350.png',
    icon: Pickaxe,
    shortDescription: 'Powering the future of the mining sector with precision engineering and unmatched reliability.',
    overview: 'Mining equipment is pushed to the absolute limits of mechanical endurance. We engineer hydraulic components that can survive extreme loads, abrasive dust, and continuous vibration. From dump trucks and excavators to drilling rigs, our mining hydraulic solutions are synonymous with rugged durability and uncompromising power.',
    keySolutions: [
      {
        title: 'Ultra-Heavy Duty Cylinders',
        description: 'Massive bore cylinders built for haul trucks and mining shovels.'
      },
      {
        title: 'Drill Rig Hydraulics',
        description: 'High-torque hydraulic motors and feed cylinders for surface and underground drilling.'
      },
      {
        title: 'Pump Rebuilding Services',
        description: 'Expert overhaul and testing of high-capacity hydraulic pumps used in mining operations.'
      }
    ]
  },
  'steel-scrap': {
    id: 'steel-scrap',
    name: 'STEEL SCRAP',
    image: '/images/industry_steel_scrap_1781249892514.png',
    icon: Hammer,
    shortDescription: 'Powering the future of the steel scrap sector with precision engineering and unmatched reliability.',
    overview: 'Recycling and processing steel scrap requires immense crushing and shearing force. Sri Veemass Hydraulics specializes in the heavy-duty hydraulic systems powering scrap balers, shear machines, and material handlers. We provide components that deliver the massive tonnage required to compress and cut thick steel safely.',
    keySolutions: [
      {
        title: 'Scrap Baler Cylinders',
        description: 'High-tonnage compaction cylinders designed to withstand extreme lateral forces.'
      },
      {
        title: 'Shear Machine Power Units',
        description: 'High-flow hydraulic power packs delivering rapid cycle times for scrap cutting.'
      },
      {
        title: 'Grapple Hydraulics',
        description: 'Robust rotary actuators and cylinders for scrap handling material cranes.'
      }
    ]
  },
  sugar: {
    id: 'sugar',
    name: 'SUGAR',
    image: '/images/industry_sugar_1781249903936.png',
    icon: Factory,
    shortDescription: 'Powering the future of the sugar sector with precision engineering and unmatched reliability.',
    overview: 'Sugar mills operate continuously during crushing season, where equipment failure can cause massive losses. We provide heavy-duty hydraulic solutions for cane crushers, mill drives, and material handling systems in sugar factories. Our robust designs ensure non-stop performance during critical operational periods.',
    keySolutions: [
      {
        title: 'Mill Roller Hydraulics',
        description: 'High-pressure hydraulic loading systems ensuring maximum juice extraction from sugarcane.'
      },
      {
        title: 'Cane Unloader Systems',
        description: 'Hydraulic grab and lifting systems for efficient sugarcane yard management.'
      },
      {
        title: 'Seasonal Overhaul Services',
        description: 'Comprehensive off-season maintenance programs to prepare your mill hydraulics for the next crush.'
      }
    ]
  }
};

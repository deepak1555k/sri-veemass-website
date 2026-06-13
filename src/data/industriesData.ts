import { Settings, Building2, Package, Tractor, Anchor, Pickaxe, Hammer, Factory } from 'lucide-react';

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
  cement: {
    id: 'cement',
    name: 'CEMENT',
    image: '/images/industry_cement.png',
    icon: Factory,
    shortDescription: 'Powering the future of the cement sector with heavy-duty engineering and unmatched reliability.',
    overview: 'The cement industry operates in extreme conditions involving heavy loads, constant vibration, and abrasive dust. Sri Veemass Hydraulics provides rugged, heavy-duty hydraulic components tailored for kilns, crushers, and material handling systems. Our robust hydraulic solutions guarantee continuous, reliable operation in the harshest cement plant environments.',
    keySolutions: [
      {
        title: 'Ball Mill Hydraulic Drives',
        description: 'Heavy-duty hydraulic drives designed to provide massive torque and reliable rotation for cement ball mills.'
      },
      {
        title: 'Power Packs & Servicing',
        description: 'All kinds of custom power packs and comprehensive hydraulic servicing systems to keep cement plant operations running smoothly.'
      },
      {
        title: 'Wagon Tippler & Tilting Systems',
        description: 'Complete hydraulic clamping cylinders, drives, and power packs for bulk raw material unloading.'
      },
      {
        title: 'Belt Tension Systems',
        description: 'Belt tension power packs and cylinders for long-distance limestone and clinker conveyors.'
      },
      {
        title: 'Chinese Mill Hydraulics',
        description: 'Manufacturing, service, and power packs for Chinese mill systems used in raw material grinding.'
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
      },
      {
        title: 'Wagon Tippler & Tilting Systems',
        description: 'Complete hydraulic clamping cylinders, drives, and power packs for heavy-duty wagon unloading.'
      },
      {
        title: 'Bucket Wheel & Conveyor Drives',
        description: 'High-torque bucket wheel drives and belt tension power packs/cylinders for bulk material transport.'
      },
      {
        title: 'Bottom Hopper Power Packs',
        description: 'Reliable power packs and drives ensuring consistent operation of bottom hopper discharge systems.'
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
  marine: {
    id: 'marine',
    name: 'MARINE',
    image: '/images/industry_port_1781249834923.png',
    icon: Anchor,
    shortDescription: 'Powering the future of the marine sector with precision engineering and unmatched reliability.',
    overview: 'Marine environments operate 24/7, handling massive loads under highly corrosive conditions. Sri Veemass Hydraulics offers marine-grade hydraulic solutions for ship-to-shore cranes, container handlers, and docking systems. Our products feature specialized coatings and sealing technologies to resist saltwater corrosion and ensure maximum uptime.',
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
      },
      {
        title: 'Luffing Cylinders & Power Packs',
        description: 'Heavy-duty luffing cylinders and power packs for precise boom control on ship-to-shore and harbor cranes.'
      },
      {
        title: 'Operated Cabin Hydraulics',
        description: 'Reliable power packs and cylinders for smooth, safe elevation and positioning of crane operator cabins.'
      }
    ]
  },
  hydroelectric: {
    id: 'hydroelectric',
    name: 'HYDROELECTRIC POWERPLANT',
    image: '/images/industry_hydroelectric.png',
    icon: Factory,
    shortDescription: 'Powering the future of the hydroelectric sector with precision engineering and unmatched reliability.',
    overview: 'Hydroelectric power generation demands fail-safe, high-pressure hydraulic systems capable of operating in extreme environments. Sri Veemass Hydraulics provides mission-critical servo cylinders, power units, and control manifolds that ensure the precise regulation of water flow and turbine speed. Our engineered solutions are designed for maximum safety, efficiency, and longevity in dam installations.',
    keySolutions: [
      {
        title: 'OPU Power Packs & Manifolds',
        description: 'Custom-designed Oil Pressure Units (OPU) and control manifolds for reliable turbine regulation.'
      },
      {
        title: 'Deflector Oil Servo Cylinders',
        description: 'High-precision servo cylinders engineered for rapid and accurate deflector control.'
      },
      {
        title: 'Nozzle Valve Servo Cylinders',
        description: 'Robust servo actuators providing exact control over nozzle valves to optimize turbine efficiency.'
      },
      {
        title: 'Penstock Gate Control Systems',
        description: 'Heavy-duty hydraulic cylinders paired with specialized manifolds and power packs for safe, reliable opening and closing of penstock gates.'
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
        title: 'Boom Conveyors Cylinder',
        description: 'Robust and reliable hydraulic cylinders designed specifically for boom conveyor systems.'
      },
      {
        title: 'Heavy Equipment String Control Cylinder',
        description: 'High-precision control cylinders for heavy-duty string and steering mechanisms.'
      },
      {
        title: 'Power Packs & Servicing',
        description: 'All kinds of custom power packs and comprehensive hydraulic servicing systems for uninterrupted mining operations.'
      },
      {
        title: 'Wagon Tippler & Tilting Systems',
        description: 'Heavy-duty clamping cylinders and hydraulic drives for ore unloading systems.'
      },
      {
        title: 'Belt Tension Systems',
        description: 'High-capacity belt tension power packs and cylinders for massive overland mining conveyors.'
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
  thermal: {
    id: 'thermal',
    name: 'THERMAL POWER',
    image: '/images/industry_thermal.png',
    icon: Factory,
    shortDescription: 'Powering the future of the thermal energy sector with precision engineering and unmatched reliability.',
    overview: 'Thermal power plants operate under extreme conditions, requiring highly reliable components to ensure uninterrupted electricity generation. Sri Veemass Hydraulics provides robust, heavy-duty hydraulic solutions tailored for critical power plant operations. From coal handling systems to turbine controls, our systems guarantee maximum uptime and safety.',
    keySolutions: [
      {
        title: 'Hydraulic Brakes & Power Packs',
        description: 'High-performance hydraulic braking systems and custom power packs for critical machinery control.'
      },
      {
        title: 'Reclaimer & Stacker',
        description: 'Heavy-duty hydraulic actuators and control systems for efficient bulk material handling.'
      },
      {
        title: 'Rail Clamps & Power Packs',
        description: 'Fail-safe hydraulic rail clamp systems powered by reliable, high-pressure power packs for securing heavy equipment.'
      },
      {
        title: 'Turbine Bypass Systems',
        description: 'High pressure (HP) and low pressure (LP) bypass power pack systems and accumulators for critical steam turbine control.'
      },
      {
        title: 'Coal Mill Hydraulics',
        description: 'Chinese mill hydraulic power packs, manufacturing, service, and Hydraulic Adjustment Devices (HAD).'
      }
    ]
  }
};

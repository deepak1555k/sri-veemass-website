import { Settings, Activity, PenTool, Wrench, Factory } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  image: string;
  icon: any;
  shortDescription: string;
  overview: string;
  keyFeatures: ServiceFeature[];
}

export const servicesData: Record<string, ServiceData> = {
  'pump-servicing': {
    id: 'pump-servicing',
    title: 'Hydraulic Pump Service',
    image: '/images/hydraulic_pump.png',
    icon: Settings,
    shortDescription: 'Expert servicing of all types of hydraulic pumps with genuine spare parts.',
    overview: 'Hydraulic pumps are the heart of any hydraulic system. When they fail, operations come to a grinding halt. Our expert technicians provide comprehensive diagnostics, repair, and testing for all types of hydraulic pumps—including gear, vane, and piston pumps. We use advanced testing rigs to ensure that repaired units meet or exceed OEM specifications.',
    keyFeatures: [
      {
        title: 'Precision Diagnostics',
        description: 'Advanced testing equipment used to pinpoint internal leaks, pressure drops, and component wear.'
      },
      {
        title: 'OEM Standard Rebuilds',
        description: 'We strictly utilize genuine OEM spare parts for all pump replacements and overhauls.'
      },
      {
        title: 'Dynamic Load Testing',
        description: 'Every serviced pump is subjected to rigorous dynamic load testing before being returned to service.'
      }
    ]
  },
  'equipment-maintenance': {
    id: 'equipment-maintenance',
    title: 'Hydraulic Equipment Maintenance',
    image: '/images/maintenance.jpg',
    icon: Activity,
    shortDescription: 'Preventive maintenance and troubleshooting for all hydraulic equipment.',
    overview: 'Unexpected breakdowns cost money. Our preventive maintenance programs are designed to keep your hydraulic equipment operating at peak efficiency. Through regular fluid analysis, filter replacements, and system inspections, we identify potential failures before they happen, extending the lifespan of your valuable machinery.',
    keyFeatures: [
      {
        title: 'Fluid Condition Monitoring',
        description: 'Regular sampling and analysis to detect contamination, viscosity changes, and oil degradation.'
      },
      {
        title: 'Scheduled Inspections',
        description: 'Routine checks of hoses, fittings, and seals to prevent catastrophic fluid leaks.'
      },
      {
        title: 'Customized Maintenance Plans',
        description: 'Tailored service schedules based on your equipment’s operating environment and duty cycle.'
      }
    ]
  },
  'cylinder-servicing': {
    id: 'cylinder-servicing',
    title: 'Hydraulic Cylinder Service',
    image: '/images/cylinder_service.jpg',
    icon: Settings,
    shortDescription: 'Expert repair, re-sealing, and complete overhauling of hydraulic cylinders.',
    overview: 'Hydraulic cylinders endure immense stress and wear. We offer complete cylinder repair services, including seal replacement, rod re-chroming, and custom fabrication of damaged components to restore your cylinders to OEM specifications.',
    keyFeatures: [
      {
        title: 'Complete Overhauls',
        description: 'Disassembly, inspection, and replacement of all worn seals, wear bands, and bearings.'
      },
      {
        title: 'Rod & Barrel Repair',
        description: 'Precision rod re-chroming and barrel honing to eliminate scratches and ensure a perfect seal.'
      },
      {
        title: 'Pressure Testing',
        description: '100% static and dynamic pressure testing to guarantee leak-free performance.'
      }
    ]
  },
  'system-design': {
    id: 'system-design',
    title: 'Hydraulic System Design & Installation',
    image: '/images/system_design_service.jpg',
    icon: PenTool,
    shortDescription: 'Complete hydraulic system designing, installation and commissioning.',
    overview: 'Whether you are upgrading an existing facility or building a new machine from the ground up, our engineering team can design the perfect hydraulic system. We specialize in creating energy-efficient, reliable hydraulic circuits, selecting the right components, and providing seamless turnkey installation and commissioning.',
    keyFeatures: [
      {
        title: 'Custom Circuit Design',
        description: 'Optimized schematics focusing on energy efficiency, safety, and precise control.'
      },
      {
        title: 'Component Selection',
        description: 'Expert sizing and selection of pumps, valves, cylinders, and accumulators for your specific application.'
      },
      {
        title: 'Turnkey Installation',
        description: 'Professional on-site piping, assembly, flushing, and final system commissioning.'
      }
    ]
  },
  'repair-overhauling': {
    id: 'repair-overhauling',
    title: 'Repair & Overhauling',
    image: '/images/repair_overhauling.jpg',
    icon: Wrench,
    shortDescription: 'Comprehensive repair and overhaul services to keep your hydraulic systems running smoothly.',
    overview: 'Our fully equipped repair facility handles everything from minor seal replacements to complete tear-downs and overhauls of heavy hydraulic machinery. We specialize in re-chroming cylinder rods, honing cylinder barrels, and machining custom replacement parts when OEM components are no longer available.',
    keyFeatures: [
      {
        title: 'Cylinder Refurbishment',
        description: 'Expert rod re-chroming, tube honing, and heavy-duty seal replacement.'
      },
      {
        title: 'Valve Reconditioning',
        description: 'Complete disassembly, cleaning, and testing of proportional and directional control valves.'
      },
      {
        title: 'Custom Machining',
        description: 'In-house fabrication of specialized pistons, glands, and obsolete components.'
      },
      {
        title: 'Complete Service & Supply',
        description: 'All kinds of hydraulic service, supply, and maintenance for industrial systems of any scale.'
      },
      {
        title: 'Sleeve Hydraulic Drives & Custom Systems',
        description: 'In-house manufacturing, repair, and supply of specialized power packs including sleeve hydraulic drives.'
      },
      {
        title: 'Chinese Mill Manufacturing & Service',
        description: 'Complete manufacturing, repair, and service support for Chinese mill hydraulic power packs and systems.'
      }
    ]
  },
  'industrial-automation': {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    image: '/images/industrial_automation_service.jpg',
    icon: Factory,
    shortDescription: 'Hydraulic-based industrial automation solutions for manufacturing, material handling, and process control.',
    overview: 'We bridge the gap between heavy hydraulic muscle and precise electronic control. By integrating electro-hydraulics, PLC controls, and modern sensor technology, we upgrade manual hydraulic machinery into fully automated, highly productive manufacturing systems.',
    keyFeatures: [
      {
        title: 'SPM & Hydraulic Presses',
        description: 'Custom design and automation of Special Purpose Machines (SPM) and heavy-duty hydraulic presses for specialized operations.'
      },
      {
        title: 'PLC Electrical Control Panels',
        description: 'Complete manufacturing, wiring, and programming of PLC electrical control panels to intelligently manage complex hydraulic systems.'
      },
      {
        title: 'Comprehensive Hydraulic Manufacturing',
        description: 'End-to-end manufacturing and automation solutions for all kinds of hydraulic equipment, customized to your specific production needs.'
      }
    ]
  }
};

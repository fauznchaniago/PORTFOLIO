import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Siemens PLC TIA Portal Troubleshooting (Remote) - Singapore',
    period: 'Feb 2026 – Feb 2026',
    description: 'Troubleshooting & System Optimization for Spanish OEM Machinery',
    longDescription: 'Expert-level diagnostic and repair for S7-1200/1500 controllers. Focused on minimizing downtime and optimizing cycle times through advanced TIA Portal diagnostics and logic refinement for industrial production machines.',
    features: [
      'Remote troubleshooting of complex PLC code',
      'OEM logic analysis and fault code strategies',
      'Real-time technical guidance for on-site teams',
      'System documentation and stability enhancements'
    ],
    tags: ['TIA Portal', 'S7-1200', 'Troubleshooting'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    timeline: [
      { label: 'CONCEPTUALIZATION', status: 'COMPLETED' },
      { label: 'ALPHA TESTING', status: 'COMPLETED' },
      { label: 'PUBLIC NEXUS', status: 'LIVE' }
    ]
  },
  {
    id: '2',
    title: 'Compressor Control & Modbus DCS Integration - Petrochina',
    period: 'Jan 2026 – Jan 2026',
    description: 'Compressor Control & Modbus DCS Integration for Petrochina using Siemens S7-1500',
    longDescription: 'Led the integration of a new compressor unit into the facility\'s Distributed Control System (DCS) utilizing a Siemens S7-1500 platform. Focused on establishing robust communication and control logic to enhance real-time monitoring.',
    features: [
      'Integrated compressor into DCS via Modbus TCP/IP & RTU protocol',
      'Developed automated start/stop and safety interlock sequences',
      'Performed precise instrument calibration and I/O validation',
      'Conducted Factory Acceptance Testing (FAT) for logic integrity'
    ],
    tags: ['Siemens S7-1500', 'Modbus TCP/IP', 'Modbus RTU', 'Control Logic'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '3',
    title: 'EPCI Akatara Gas Processing Facility - Jadestone Energy',
    period: 'Apr 2025 – Mei 2025',
    description: 'PLC & Instrumentation Engineering for Akatara Gas Processing Facility',
    longDescription: 'Commissioning and start-up of refrigerator compressors integrated with Sinamics Perfect Harmony GH180 VSD and MV Bypass Panels. Focused on Loop Testing and ESD system validation.',
    features: [
      'Sinamics VSD refrigerator compressor start-up support',
      'FAT/SAT verification for 6.6kV VSD Bypass Panels',
      'ESD system loop testing and dynamic commissioning',
      'Logic development in Ladder Diagram and SCL for GH180'
    ],
    tags: ['Siemens S7-1200', 'Sinamics VSD', 'ESD & SIS Systems'],
    image: 'https://lh3.googleusercontent.com/d/1EKugHNLdOdXDNbKiZ3IhhILaWGLFczdY',
    link: '#',
  },
  {
    id: '4',
    title: 'EPC(RDMP) Remote Compressor Control - Pertamina RU V',
    period: 'Mar 2025 – Apr 2025',
    description: 'Remote Control & Modbus Integration for Pertamina Balikpapan',
    longDescription: 'Implementation of remote control logic and Modbus integration for high-pressure compressor units. Focused on reliability and safety protocols for refinery operations.',
    features: [
      'Remote control logic design for refinery high-pressure units',
      'Modbus communication integration for real-time monitoring',
      'Advanced safety protocol implementation for refinery safety',
      'Performance benchmarking and optimization of control cycles'
    ],
    tags: ['Refinery Control', 'Modbus RTU', 'ESD & SIS System', 'S7-1500'],
    image: 'https://lh3.googleusercontent.com/d/1lowDG221MBJ3ELpznbhTppqE9TyOFlRb',
    link: '#',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'Jadestone Energy / Pertamina',
    role: 'PLC & Instrumentation Engineer',
    period: '2024 - Present',
    description: [
      'Leading commissioning and start-up of mission-critical gas processing facilities.',
      'Developing complex logic for Siemens S7-1200/1500 and Sinamics Perfect Harmony VSDs.',
      'Engineering high-availability Modbus TCP/RTU communications for DCS integration.'
    ]
  },
  {
    id: 'e2',
    company: 'Petrochina',
    role: 'Control Systems Specialist (Consultant)',
    period: '2022 - 2024',
    description: [
      'Engineered compressor control systems and safety interlocking mechanisms.',
      'Optimized industrial processes through advanced TIA Portal diagnostics and Step 7 logic.',
      'Performed remote troubleshooting and system audits for international industrial sites.'
    ]
  },
  {
    id: 'e3',
    company: 'Industrial Engineering Group',
    role: 'Junior Electrical Engineer',
    period: '2020 - 2022',
    description: [
      'Designed and implemented electrical control panels and LV/MV distribution systems.',
      'Assisted in FAT/SAT verification for major EPC projects in the oil and gas sector.',
      'Developed foundational skills in PLC programming and industrial instrumentation.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Deep Learning / ML', level: 94, category: 'AI' },
  { name: 'Python / C++', level: 92, category: 'Programming' },
  { name: 'Nvidia Jetson / Robotics', level: 88, category: 'Hardware' },
  { name: 'Siemens TIA Portal', level: 95, category: 'PLC' },
  { name: 'SCADA / HMI Design', level: 90, category: 'Systems' },
  { name: 'n8n / Industrial IoT', level: 85, category: 'Workflows' },
  { name: 'Cisco Networking', level: 82, category: 'Infrastructure' },
  { name: 'Control Systems', level: 94, category: 'Engineering' }
];

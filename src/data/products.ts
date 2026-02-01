export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
  }
  
  
  
  export const products: Product[] =  [
    {
      id: "scope-stretcher",
      name: "Scope Stretcher",
      description:
        "Durable medical stretcher designed for safe patient transport in emergency and clinical environments.",
      image: "/images/scope.jpeg",
    },
    {
      id: "auto-sterilizer",
      name: "Full Automatic Sterilizing Machine",
      description:
        "Advanced automatic sterilization system ensuring maximum infection control for medical instruments.",
      image: "/images/automatic-sterilizer.jpg",
    },
    {
      id: "autoclave",
      name: "Autoclave Machine",
      description:
        "High-performance autoclave for effective sterilization of surgical and medical equipment.",
      image: "/images/autoclave.jpeg",
    },
    {
      id: "portable-suction",
      name: "Portable Suction Machine",
      description:
        "Compact and efficient suction device for emergency and field medical use.",
      image: "/images/suction_machine.jpg",
    },
    {
      id: "manual-suction",
      name: "Manual Suction Machine",
      description:
        "Reliable hand-operated suction machine suitable for basic emergency procedures.",
      image: "/images/manual_suction.jpg",
    },
    {
      id: "otoscope",
      name: "Otoscope",
      description:
        "Precision diagnostic instrument for examining the ear canal and tympanic membrane.",
      image: "/images/otoscope.jpeg",
    },
    {
      id: "infrared-thermometer",
      name: "Infrared Thermometer",
      description:
        "Non-contact thermometer providing fast and accurate body temperature readings.",
      image: "/images/infrared_thermometer.jpeg",
    },
    {
      id: "bp-monitor",
      name: "Blood Pressure Monitor",
      description:
        "Accurate blood pressure monitoring device for clinical and home healthcare use.",
      image: "/images/bp-monitor.jpg",
    },
    // {
    //   id: "finger-splint",
    //   name: "Finger Splint",
    //   description:
    //     "Orthopedic support designed to stabilize and protect finger injuries.",
    //   image: "/images/finger-splint.jpg",
    // },
    {
      id: "cervical-collar",
      name: "Cervical Collar",
      description:
        "Neck support device used to immobilize the cervical spine during trauma care.",
      image: "/images/cervical-collar.jpg",
    },
    {
      id: "spine-board",
      name: "Spine Board",
      description:
        "Rigid board for spinal immobilization and safe patient transfer in emergencies.",
      image: "/images/spine-board.jpg",
    },
    {
      id: "ecg",
      name: "ECG Machine",
      description:
        "Electrocardiography system for monitoring and diagnosing heart conditions.",
      image: "/images/ecg.jpeg",
    },
    {
      id: "aed",
      name: "Automated External Defibrillator (AED)",
      description:
        "Life-saving device designed to deliver electrical shocks during sudden cardiac arrest.",
      image: "/images/aed.jpg",
    },
    {
      id: "ambu-bag",
      name: "Ambu Bag",
      description:
        "Manual resuscitator used to provide positive pressure ventilation to patients.",
      image: "/images/grab_bag.jpg",
    },
    {
      id: "pulse-oximeter",
      name: "Pulse Oximeter",
      description:
        "Non-invasive device for measuring blood oxygen saturation and pulse rate.",
      image: "/images/pulse_oximeter.jpeg",
    },
  ];
  
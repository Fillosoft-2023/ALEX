export const galleryCategories = [
  { id: 'all', name: 'All Facility Photos' },
  { id: 'asset-photos', name: 'Verified Hospital Facades' },
  { id: 'mgps', name: 'Medical Gas Pipelines (MGPS)' },
  { id: 'ot', name: 'Modular Operating Theatres' },
  { id: 'icu', name: 'ICU & Critical Care' },
];

export const galleryItems = [
  // --- PRIMARY USER ASSET PHOTOS (FEATURED PROMINENTLY) ---
  {
    id: 'ihr-guwahati-facade',
    title: 'Institute of Human Reproduction (IHR)',
    subtitle: 'Main Hospital Building & IVF Healthcare Centre',
    src: '/assets/ihr-guwahati.jpg',
    category: 'Verified Hospital Facades',
    categoryKey: 'asset-photos',
    location: 'Guwahati, Assam',
    isPrimaryAsset: true,
    tag: 'Verified Asset',
    caption: 'Flagship exterior of the Institute of Human Reproduction (IHR) in Guwahati, Assam — engineered with advanced cleanroom IVF surgical environments and medical life-support gas distribution.',
    projectId: '6',
    projectSlug: 'ihr-guwahati-siliguri-kolkata',
    details: [
      'NABH-compliant cleanroom facility architecture',
      'Centralized medical gas piping with manifold changeover',
      'Specialized IVF embryology suites with laminar airflow'
    ]
  },
  {
    id: 'kapili-hospital-facade',
    title: 'Kapili Hospital, Assam',
    subtitle: 'Multi-Speciality Hospital & Research Facility',
    src: '/assets/kapili.jpg',
    category: 'Verified Hospital Facades',
    categoryKey: 'asset-photos',
    location: 'Assam, India',
    isPrimaryAsset: true,
    tag: 'Verified Asset',
    caption: 'Exterior facade of Kapili Hospital in Assam, featuring an end-to-end medical gas pipeline network, degreased medical copper lines, and multi-bed telemetry distribution.',
    projectId: '1',
    projectSlug: 'kapili-hospital-assam',
    details: [
      'HTM 02-01 conforming medical copper pipeline network',
      'Multi-bed emergency & ICU gas terminal outlets',
      'Central oxygen and nitrous oxide changeover manifold room'
    ]
  },
  {
    id: 'metro-hospital-guwahati-facade',
    title: 'Metro Hospital, Guwahati',
    subtitle: 'Multi-Speciality Surgical High-Rise Healthcare Centre',
    src: '/assets/metro-guwahati.jpg',
    category: 'Verified Hospital Facades',
    categoryKey: 'asset-photos',
    location: 'Guwahati, Assam',
    isPrimaryAsset: true,
    tag: 'Verified Asset',
    caption: 'Facade view of Guwahati Metro Hospital in Assam — equipped with modular & semi-modular surgical theatres, HEPA laminar filtration, and critical life-support gas piping.',
    projectId: '3',
    projectSlug: 'metro-hospital-guwahati',
    details: [
      'Modular & semi-modular surgical operating theatres',
      'Class 10,000 / ISO Class 7 laminar airflow suites',
      'Integrated medical life-support gas distribution network'
    ]
  },
  {
    id: 'planet-hospital-nagaon-facade',
    title: 'Health Planet Hospital, Nagaon',
    subtitle: 'Critical Care Hospital & Multi-Speciality Centre',
    src: '/assets/planet-hospital-nagaon.jpg',
    category: 'Verified Hospital Facades',
    categoryKey: 'asset-photos',
    location: 'Nagaon, Assam',
    isPrimaryAsset: true,
    tag: 'Verified Asset',
    caption: 'Main multi-storey building facade of Health Planet Hospital in Nagaon, Assam — outfitted with upgraded ICU bed head trunking, sensor surgical scrub stations, and MGPS integration.',
    projectId: '2',
    projectSlug: 'health-planet-hospital-nagaon',
    details: [
      'ICU modernization with extruded aluminum bed head trunking',
      'Touchless surgical scrub sinks and cleanroom zoning',
      'Continuous vital signs and oxygen monitoring points'
    ]
  },

  // --- COMPLEMENTARY REAL FACILITY & INFRASTRUCTURE PHOTOS TO ENHANCE THE GALLERY ---
  {
    id: 'star-hospital-hojai',
    title: 'Star Hospital, Hojai',
    subtitle: '70-Bed Multi-Speciality Infrastructure',
    src: '/star1.png',
    category: 'Verified Hospital Facades',
    categoryKey: 'asset-photos',
    location: 'Hojai, Assam',
    isPrimaryAsset: false,
    tag: 'Hospital Development',
    caption: '70-bed multi-speciality hospital building delivered by Alex Healthcare System in Hojai, Assam including civil engineering, modular OT, and medical gas pipeline setup.',
    projectId: '0',
    projectSlug: 'star-hospital-hojai',
    details: [
      'Ground-up hospital civil construction and architectural zoning',
      'Full centralized MGPS network and manifold station',
      'Integrated modular operating theatre and recovery wards'
    ]
  },
  {
    id: 'kapili-pipeline-distribution',
    title: 'Kapili Inpatient Ward MGPS Network',
    subtitle: 'Degreased Medical Copper Pipeline Distribution',
    src: '/kapili2.jpg',
    category: 'Medical Gas Pipelines (MGPS)',
    categoryKey: 'mgps',
    location: 'Assam, India',
    isPrimaryAsset: false,
    tag: 'Life-Support MGPS',
    caption: 'On-site medical copper pipeline distribution network at Kapili Hospital, showing wall-mounted bed head panels, multi-gas terminal outlets, and leak-tested brazed joints.',
    projectId: '1',
    projectSlug: 'kapili-hospital-assam',
    details: [
      'High-purity degreased phosphorus-deoxidized copper tubing',
      'Nitrogen purged silver brazing conforming to HTM 02-01',
      '24-hour nitrogen holding pressure safety validation'
    ]
  },
  {
    id: 'health-planet-icu-ward',
    title: 'Health Planet Hospital ICU Ward',
    subtitle: 'Critical Care Telemetry & Bed Head Panels',
    src: '/healthplanetnagao1.webp',
    category: 'ICU & Critical Care',
    categoryKey: 'icu',
    location: 'Nagaon, Assam',
    isPrimaryAsset: false,
    tag: 'ICU Critical Care',
    caption: 'Inside the modernized Intensive Care Unit at Health Planet Hospital, Nagaon — featuring heavy-duty bed head trunking panels, life-support outlets, and continuous patient telemetry.',
    projectId: '2',
    projectSlug: 'health-planet-hospital-nagaon',
    details: [
      'Integrated medical gas, electrical, and data channels in aluminum trunking',
      'Direct pipeline connection for ventilators and vacuum suction',
      'Ergonomic clinical layout designed for rapid emergency access'
    ]
  },
  {
    id: 'metro-hospital-patient-ward',
    title: 'Metro Hospital Inpatient Care Infrastructure',
    subtitle: 'Ward Medical Gas Outlets & Monitoring Network',
    src: '/metroghy1.webp',
    category: 'Medical Gas Pipelines (MGPS)',
    categoryKey: 'mgps',
    location: 'Guwahati, Assam',
    isPrimaryAsset: false,
    tag: 'Patient Care',
    caption: 'Patient care ward infrastructure at Metro Hospital, Guwahati — showing integrated oxygen flowmeters, vacuum regulators, and hospital utility lines.',
    projectId: '3',
    projectSlug: 'metro-hospital-guwahati',
    details: [
      'Wall-mounted terminal units with color-coded safety gas indexing',
      'Zone valve isolation boxes for fire and emergency safety',
      'Seamless connectivity to central hospital oxygen supply'
    ]
  },
  {
    id: 'nagaon-metro-modular-ot',
    title: 'Nagaon Metro Hospital Modular OT',
    subtitle: 'Integrated Surgeon Panel & Anti-Microbial Cleanroom',
    src: '/nagaometro0.webp',
    category: 'Modular Operating Theatres',
    categoryKey: 'ot',
    location: 'Nagaon, Assam',
    isPrimaryAsset: false,
    tag: 'Modular OT',
    caption: 'Single modular operating theatre suite at Nagaon Metro Hospital & Research Centre — equipped with anti-microbial coved flooring, surgeon control panel, and sterile air balancing.',
    projectId: '4',
    projectSlug: 'nagaon-metro-hospital',
    details: [
      'Seamless anti-microbial conductive vinyl flooring with coved skirting',
      'Microprocessor surgeon control panel with environmental monitoring',
      'Hermetically sealed sliding access door with touchless optical sensors'
    ]
  },
  {
    id: 'health-city-modular-theatres',
    title: 'Health City Hospital Surgical Suites',
    subtitle: 'Six Full Modular Operating Theatres with Laminar Airflow',
    src: '/healthcityghy0.webp',
    category: 'Modular Operating Theatres',
    categoryKey: 'ot',
    location: 'Guwahati, Assam',
    isPrimaryAsset: false,
    tag: 'Cleanroom OT',
    caption: 'Class 10,000 / ISO Class 7 modular surgical theatre suite with ceiling laminar airflow plenum and stainless steel pass-through hatches at Health City Hospital, Guwahati.',
    projectId: '5',
    projectSlug: 'health-city-hospital-guwahati',
    details: [
      'Ceiling laminar airflow plenum with terminal HEPA filtration',
      'Dual articulated motorized ceiling pendants for anesthesia and surgery',
      'Strict bio-burden validation and particle count certification'
    ]
  },
  {
    id: 'ihr-cleanroom-embryology',
    title: 'IHR Cleanroom & Embryology Lab',
    subtitle: 'Sterile Positive Pressure Cleanroom Zoning',
    src: '/ihr.jpg',
    category: 'Modular Operating Theatres',
    categoryKey: 'ot',
    location: 'Guwahati, Assam',
    isPrimaryAsset: false,
    tag: 'IVF Cleanroom',
    caption: 'IVF cleanroom and embryology laboratory facility at Institute of Human Reproduction (IHR) — precision air filtration, VOC air scrubbing, and climate-controlled medical zoning.',
    projectId: '6',
    projectSlug: 'ihr-guwahati-siliguri-kolkata',
    details: [
      'Specialized VOC-free HEPA filtration for embryology lab',
      'Positive pressure gradient preventing airborne contaminants',
      'Temperature and humidity micro-climatic control systems'
    ]
  },
  {
    id: 'central-mgps-manifold-engineering',
    title: 'Central Medical Gas Manifold & Telemetry',
    subtitle: 'High-Pressure Oxygen & Nitrous Oxide Station',
    src: '/Engineering & Infrastructure Systems.jpg',
    category: 'Medical Gas Pipelines (MGPS)',
    categoryKey: 'mgps',
    location: 'Regional Hospitals, Assam',
    isPrimaryAsset: false,
    tag: 'Central Plant',
    caption: 'Central medical gas manifold room with high-pressure cylinder headers, automatic changeover regulator, and audiovisual line pressure monitoring alarms.',
    projectId: '1',
    projectSlug: 'kapili-hospital-assam',
    details: [
      'Dual-bank automatic changeover manifold for uninterruptible oxygen flow',
      'Digital line pressure transducers with remote telemetry alarms',
      'High-pressure safety relief valves and emergency supply manifold integration'
    ]
  }
];

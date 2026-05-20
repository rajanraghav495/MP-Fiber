/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  keyFeatures: string[];
}

export interface ProductItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  images: string[];
  specifications: { [key: string]: string };
  applications: string[];
}

export const CATEGORIES: ProductCategory[] = [
  {
    id: "duplex-board",
    name: "Coated Duplex Board",
    description: "High-grade multilayer coated duplex boards in Grey Back and White Back options, engineered for excellent stiffness and stellar multicolor offset printing.",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
    keyFeatures: [
      "Optimal GSM: 180 to 450",
      "Clay-coated gloss finish",
      "Pneumatically starch-sized",
      "Stiff folding retention"
    ]
  },
  {
    id: "writing-paper",
    name: "Writing & Printing Paper",
    description: "High-brightness super-calendered premium paper sheets crafted from eco-responsible fiber. Perfect for textbooks, journals, and office demands.",
    image: "https://images.unsplash.com/photo-1586075010633-2470fd205d6a?auto=format&fit=crop&q=80&w=800",
    keyFeatures: [
      "90% to 94% ISO Brightness",
      "Woodfree chemical base",
      "Excellent double-side opacity",
      "Optimized tensile tear indexes"
    ]
  },
  {
    id: "kraft-paper",
    name: "Industrial Kraft Paper",
    description: "Robust high-bursting factor kraft paper roll stocks designed for robust packaging, corrugation sheet fluting, and protective packaging wrappers.",
    image: "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=800",
    keyFeatures: [
      "22 BF to 35 BF rating",
      "Superb tear resistance",
      "100% recyclable fiber base",
      "Uniform moisture balance"
    ]
  },
  {
    id: "stationery",
    name: "Stationery & Office Products",
    description: "Premium office stationery, hardcover journals, notebooks, and Copier paper packs manufactured from our own eco-certified mills.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    keyFeatures: [
      "FSC-certified materials",
      "Bleed-resistant high smoothness",
      "Sturdy premium backing options",
      "Tailor-made customized logs"
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  // --- Coated Duplex Board Category ---
  {
    id: "eco-greyback",
    categoryId: "duplex-board",
    name: "EcoLuxe Greyback Duplex Board",
    description: "Multi-layered duplex board featuring a clay-coated white printing surface and a sturdy recycled greyback side. Extremely popular for fast-moving packing industries.",
    images: [
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512412046876-0c46442efbd6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1589739900243-4b53ce1b1df3?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "GSM Range": "230 GSM - 450 GSM",
      "Coat Weight": "18 - 22 g/m²",
      "Brightness": "78% - 82% ISO",
      "Stiffness (MD)": "Up to 520 mN.m",
      "Moisture": "6.5% - 7.5%"
    },
    applications: [
      "Cosmetics packaging cartons",
      "FMCG product boxes",
      "Matchbox outer sleeves",
      "Toiletry & Soap outer wraps"
    ]
  },
  {
    id: "ultra-whiteback",
    categoryId: "duplex-board",
    name: "UltraWhite Whiteback Duplex Board",
    description: "Premium duplex board with multi-clay coating on the front and a bleached clean white back side. Designed for luxury product validation and sterile hygiene requirements.",
    images: [
      "https://images.unsplash.com/photo-1589739900243-4b53ce1b1df3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "GSM Range": "200 GSM - 400 GSM",
      "Coat Weight": "20 - 24 g/m²",
      "Brightness": "84% - 88% ISO",
      "White Back Brightness": "72% - 75% ISO",
      "Stiffness (CD)": "Up to 240 mN.m"
    },
    applications: [
      "Pharmaceutical kits & medical boxes",
      "High-end perfume and retail gifts",
      "Premium confectionery boxes",
      "Electronics appliance packages"
    ]
  },
  {
    id: "glidecoat-barrier",
    categoryId: "duplex-board",
    name: "GlideCoat Oil & Water Barrier Board",
    description: "Specialty duplex board integrated with a certified organic barrier formula resistant to moisture, oils, and grease seepage. Biodegradable and perfect for food boxes.",
    images: [
      "https://images.unsplash.com/photo-1512412046876-0c46442efbd6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "GSM Range": "250 GSM - 425 GSM",
      "Barrier Rating": "3M KIT Test Value 8+",
      "COBB Value (60s)": "Under 30 g/m²",
      "Food Safety Cert": "FDA Compliant"
    },
    applications: [
      "Frozen food dry cartoons",
      "Cake, bakery, and pizza packaging",
      "Quick-service restaurant containers",
      "Takeaway dry catering packs"
    ]
  },

  // --- Writing & Printing Paper Category ---
  {
    id: "aquaflow-maplitho",
    categoryId: "writing-paper",
    name: "AquaFlow Silk Maplitho Paper",
    description: "High-density woodfree paper with stellar dimensional stability, specifically treated for fast high-speed rotary printing offset machinery without fluffing.",
    images: [
      "https://images.unsplash.com/photo-1586075010633-2470fd205d6a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "GSM Range": "60 GSM - 120 GSM",
      "ISO Brightness": "92% - 94%",
      "Opacity": "86% - 92%",
      "Cobb (Top/Wire)": "25 max",
      "Bulk": "1.20 - 1.25 cm³/g"
    },
    applications: [
      "School & university textbooks",
      "Informational booklets and catalogs",
      "Multicolor maps and atlas sheets",
      "Office invoices and statement folders"
    ]
  },
  {
    id: "supersmooth-woodfree",
    categoryId: "writing-paper",
    name: "SuperSmooth Woodfree Copy Master",
    description: "Premium ultra-calendered un-coated woodfree sheet. Delivers a soft tactile experience, glare-free readability, and reliable ink setting parameters.",
    images: [
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586075010633-2470fd205d6a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "GSM Range": "70 GSM - 100 GSM",
      "Smoothness": "150 ml/min Bendtsen",
      "Tear Index (MD)": "Up to 5.2 mN.m²/g",
      "pH Value": "Alkaline (Acid-Free)"
    },
    applications: [
      "Premium office documentation",
      "Reading books & premium novels",
      "Corporate letterheads & certificates",
      "High-density multi-page manuals"
    ]
  },

  // --- Industrial Kraft Paper Category ---
  {
    id: "fortress-kraft",
    categoryId: "kraft-paper",
    name: "Fortress Heavy-Duty Kraft Roll",
    description: "Engineered wrapper grade kraft roll stock. Features pristine long-fiber consistency resulting in premium bursting indicators, perfect for industrial wrapping.",
    images: [
      "https://images.unsplash.com/photo-1627389955805-720619756182?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "GSM Range": "80 GSM - 200 GSM",
      "Bursting Factor": "28 BF - 35 BF",
      "Shatter Point": "Double critical fold limit",
      "Moisture standard": "7.0% nominal"
    },
    applications: [
      "Cement bags and fertilizer sacks",
      "Heavy envelope lining panels",
      "Parcel protective wrapping",
      "Metal plate protective dividers"
    ]
  },
  {
    id: "corrugrid-fluting",
    categoryId: "kraft-paper",
    name: "CorruGrid Fluted Medium Stock",
    description: "Specialized resilient corrugating medium base offering highly stable ring crush levels. Essential for establishing the architectural core in box flutes.",
    images: [
      "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "GSM Range": "110 GSM - 180 GSM",
      "Burst Factor": "22 BF - 25 BF",
      "RCT (Ring Crush Test)": "1.30 kN/m at 150 GSM",
      "Fiber type": "100% Recycled Semi-Chemical"
    },
    applications: [
      "A, B, C & E tier flute liners",
      "Internal partition grids for glasswares",
      "Corrugated shipping cartons",
      "Shock absorbency paper cushions"
    ]
  },

  // --- Stationery & Office Products Category ---
  {
    id: "scribe-hardback",
    categoryId: "stationery",
    name: "Scribe Executive Hardbound Journal",
    description: "Luxurious heavy-cover binding registers. Utilizes woodfree bright pH-neutral cream inner writing paper designed for fluid fountain pens and high longevity.",
    images: [
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "Sheet Count": "160 Pages - 240 Pages",
      "Inner Paper density": "80 GSM bright woodfree",
      "Cover binding": "Acid-free heavy hardback board",
      "Bleed resistance": "Water/gel pen proof design"
    },
    applications: [
      "Industrial laboratory log books",
      "Executive corporate dairy logging",
      "Custom accounts journals",
      "Bespoke guest registries"
    ]
  },
  {
    id: "optima-copier",
    categoryId: "stationery",
    name: "Optima Premium Copier A4 Pack",
    description: "Anti-jam, dust-free cut copier sheets styled in compact outer shrink packs. Delivers clean printing on all major industrial laser or ink copier brands.",
    images: [
      "https://images.unsplash.com/photo-1586075010633-2470fd205d6a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512412046876-0c46442efbd6?auto=format&fit=crop&q=80&w=800"
    ],
    specifications: {
      "Density": "75 GSM & 80 GSM options",
      "ISO Brightness": "96% Super White",
      "Pack sheets": "500 sheets per bundle",
      "Moisture rating": "4.5% precision level"
    },
    applications: [
      "High volume xerox copying",
      "Laser and inkjet office printing",
      "Double-sided scanning workflows",
      "Daily fax and drafting reports"
    ]
  }
];

export const MACHINERY = [
  {
    id: "paper-mill-1",
    name: "Multi-Cylinder Fourdrinier Machine",
    description: "State-of-the-art dual-wire continuous Fourdrinier paper-making system. Features computer-monitored pneumatic steam drying hoods and real-time infrared caliber profiling for perfect sheet thickness consistency across the reel.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "coating-plant",
    name: "Thermoregulated Online Coating Assembly",
    description: "Fully-automated blade coating system with infrared air-flotation drying tunnels. Delivers perfect double-clay coating on duplex board products, resulting in superior gloss values and smooth print-ready surfaces.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
  }
];

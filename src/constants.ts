/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import machinery1 from "../Images/Products/Machinery1.png";
import cartonMaker from "../Images/Products/Carton_maker.jpg";
import bookProduction from "../Images/Products/book_production.png";
import convertingMachine from "../Images/Products/converting_machine.png";
import packagingMachine from "../Images/Products/packaging_machine.png";
import duplexBoard from "../Images/Products/Duplex_board.png";
import writingPaper from "../Images/Products/writing_paper1.png";
import craftPaper from "../Images/Products/Craft_paper.png";
import newsprintPaper from "../Images/Products/newsprint_paper1.png"
import paperBags from "../Images/Paper_bags.png";
import pizzaBox from "../Images/Pizza_box.png";
import corrugatedCarton from "../Images/Products/packaging_box.png";
import sosBags from "../Images/Products/SOS_bags.png"
import sosBag1 from "../Images/Products/SOS_bags1.png"
import kraftBag from "../Images/Products/kraft_bag.png"
import whiteBag from "../Images/Products/white_bags.png"
import BrownPizzaCarton from "../Images/Products/brown_pizza_carton.png"
import SicilianPizzaBrown from "../Images/Products/sicilian_pizza_brown.png"
import SicilianPizzaWhite from "../Images/Products/sicilian_pizza_white.png"
import WhitePizzaCarton from "../Images/Products/white_pizza_carton.png"
import ThermalPaper from "../Images/Products/thermal_paper1.png"
import ThermalPaper1 from "../Images/Products/thermal_paper.png"
import CompositionBook from "../Images/Products/composition_book.png"
import OneSubjectBook from "../Images/Products/one_subject.png"
import OneSubjectBook1 from "../Images/Products/one_subject1.png"
import ThreeSubjectBook from "../Images/Products/three_subject.png"
import FiveSubjectBook from "../Images/Products/five_subject.png"
import ColoringBook from "../Images/Products/coloring_book.png"
import FillerPaper from "../Images/Products/filler_paper.png"
import FillerPaper1 from "../Images/Products/filler_paper1.png"
import WritingTablet from "../Images/Products/writing_tablet.png"
import LegalPad from "../Images/Products/legal_pad.png"
import IndexCards from "../Images/Products/index_cards.png"
import PosterBoard from "../Images/Products/poster_board.png"
import PosterBoard1 from "../Images/Products/poster_board1.png"
import Envelope from "../Images/Products/envelop.png"
import Envelope1 from "../Images/Products/envelop1.png"
import Envelope2 from "../Images/Products/envelop40.png"
import YellowPencil from "../Images/Products/yellow_pencil.jfif"
import EcoPencil from "../Images/Products/eco_pencil.png"
import ColoringPencils from "../Images/Products/color_pencils.png"
import FillerPaper150 from "../Images/Products/filler_paper150.png"
import Stationary from "../Images/stationary.png"

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
    id: "machinery",
    name: "Machinery",
    description: "Complete turnkey machinery solutions for paper making, corrugated carton manufacturing, book making, and packaging conversion - supplied on semi-automatic and fully automatic configurations.",
    image: machinery1,
    keyFeatures: [
      "Turnkey project supply",
      "30 TPD to 150 TPD capacity range",
      "Semi-automatic & fully automatic options",
      "Recycled fiber compatible systems"
    ]
  },
  {
    id: "paper-and-boards",
    name: "Paper and Boards",
    description: "A complete range of paper and board products including Coated Duplex Boards, Writing & Printing Papers, and Industrial Kraft Papers - manufactured for packaging, printing, and industrial applications.",
    image: duplexBoard,
    keyFeatures: [
      "Coated Duplex Boards",
      "Writing & Printing Papers",
      "Industrial Kraft Papers",
      "Eco-certified sustainable fiber base"
    ]
  },
  {
    id: "paper-bags",
    name: "Paper Bags",
    description: "A complete range of paper bags including SOS Bags, Kraft Paper Bags, and White Paper Bags — available in various sizes as per customer requirements with multicolour printing options.",
    image: paperBags,
    keyFeatures: [
      "SOS Bags in sizes #1 to #25",
      "Kraft & White Paper Bags",
      "Twisted, Flat or No Handle options",
      "Up to 4 Colour Printing available"
    ]
  },
  {
    id: "pizza-cartons",
    name: "Pizza Cartons",
    description: "A complete range of pizza cartons and corrugated cartons including Brown, Sicilian, and White Pizza Cartons — available with up to 4 colour customized printing and shrink wrap export packing.",
    image: pizzaBox,
    keyFeatures: [
      "Brown & White Pizza Cartons",
      "Sicilian Pizza (13 x 17 inch)",
      "Corrugated Cartons (3 Ply, 5 Ply or Specialised)",
      "Upto 4 Colour Customized Printing"
    ]
  },
  {
    id: "stationery",
    name: "Stationery",
    description: "Premium office stationery, hardcover journals, notebooks, and Copier paper packs manufactured from our own eco-certified mills.",
    image: Stationary,
    keyFeatures: [
      "FSC-certified materials",
      "Bleed-resistant high smoothness",
      "Sturdy premium backing options",
      "Tailor-made customized logs"
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  // --- Duplex Board Category ---
  {
    id: "duplex-board",
    categoryId: "paper-and-boards",
    name: "Coated Duplex Board",
    description: "High-grade multilayer coated duplex boards in Grey Back and White Back options, engineered for excellent stiffness and stellar multicolor offset printing.",
    images: [duplexBoard],
    specifications: {
      "GSM Range": "230 GSM - 450 GSM",
      "Quality": "HWC – Grey Back, HWC – White Back, LWC – Grey Back",
      "Packing": "In Reels. Sheets in Bundles & Pallets"
    },
    applications: [
      "Cosmetics & FMCG packaging cartons",
      "Pharmaceutical kits & medical boxes",
      "Premium confectionery boxes",
      "Electronics appliance packages"
    ]
  },
  {
    id: "writing-paper",
    categoryId: "paper-and-boards",
    name: "Writing & Printing Paper",
    description: "High-brightness super-calendered premium paper sheets crafted from eco-responsible fiber. Perfect for textbooks, journals, and office demands.",
    images: [writingPaper],
    specifications: {
      "GSM Range": "50 GSM - 100 GSM",
      "Quality": "Brightness 80/85/90 Degree",
      "Packing": "In Reels. Sheets in Bundles"
    },
    applications: [
      "School & university textbooks",
      "Informational booklets and catalogs",
      "Corporate letterheads & certificates",
      "Office invoices and documentation"
    ]
  },
  {
    id: "kraft-paper",
    categoryId: "paper-and-boards",
    name: "Industrial Kraft Paper",
    description: "Robust high-bursting factor kraft paper roll stocks designed for robust packaging, corrugation sheet fluting, and protective packaging wrappers.",
    images: [craftPaper],
    specifications: {
     "GSM Range": "50 GSM - 350 GSM",
      "Quality": "Differenr grades for Papers Bags & Corrugated Cartons",
      "Packing": "In Reels"
    },
    applications: [
      "Food and Beverage packaging",
      "Corrugated shipping cartons",
      "Parcel protective wrapping",
      "Cargo protection"
    ]
  },
  {
    id: "newsprint-paper",
    categoryId: "paper-and-boards",
    name: "Newsprint Paper",
    description: "Standard newsprint paper supplied in reels, available in various grades suited for high-speed web offset printing for newspapers and publication use.",
    images: [newsprintPaper],
    specifications: {
      "GSM Range": "40 GSM - 48 GSM",
      "Quality": "Various Grades",
      "Packing": "Reels of Standard Size"
    },
    applications: [
      "Newspaper & various publication papers"
    ]
  },
  {
    id: "thermal-rolls",
    categoryId: "paper-and-boards",
    name: "Thermal Rolls",
    description: "High-quality imported thermal paper rolls available in Standard Register, One Ply, Two Ply, and Three Ply configurations. Sourced from premium manufacturers including Kohler, Mitsubishi, and Hansol for superior print quality and reliability.",
    images: [ThermalPaper, ThermalPaper1],
    specifications: {
      "GSM Range": "42 GSM - 48 GSM",
      "Quality": "Imported from Kohler, Mitsubishi, Hansol",
      "Ply Options": "Standard Register Rolls, One Ply, Two Ply, Three Ply Rolls",
      "Packing": "Seaworth Corrugated Cartons"
    },
    applications: [
      "Point of Sale (POS) and cash register printing",
      "ATM receipt and transaction printing",
      "Fax machine operations",
      "Thermal ticket and label printing",
      "Receipt and billing systems"
    ]
  },

  // --- Paper Bags Category ---
  {
    id: "sos-bags",
    categoryId: "paper-bags",
    name: "SOS Bags",
    description: "Self-opening SOS paper bags available in a wide range of sizes to suit customer requirements, commonly used for retail and food packaging.",
    images: [sosBag1, sosBags],
    specifications: {
      "Sizes": "1 to 25",
      "Size Options": "Various sizes as per Customers requirement",
      "Color": "Brown"
    },
    applications: [
      "Retail & grocery packaging",
      "Food & bakery packaging",
      "Pharmacy & medical packaging",
      "General merchandise bags"
    ]
  },
  {
    id: "kraft-paper-bags",
    categoryId: "paper-bags",
    name: "Kraft Paper Bags",
    description: "Durable Kraft paper bags available in various sizes with a choice of handle styles and up to 4 colour printing for branded packaging solutions.",
    images: [kraftBag],
    specifications: {
      "Size Options": "Various sizes as per Customers requirement",
      "Handle Options": "Twisted Handles, Flat Handle or without Handle",
      "Printing": "Upto 4 Colour Printing Can Be Done"
    },
    applications: [
      "Retail shopping bags",
      "Food & restaurant takeaway",
      "Gift & boutique packaging",
      "Corporate branded bags"
    ]
  },
  {
    id: "white-paper-bags",
    categoryId: "paper-bags",
    name: "White Paper Bags",
    description: "Premium white paper bags available in various sizes with handle options and up to 4 colour printing, ideal for high-end retail and branded packaging.",
    images: [whiteBag],
    specifications: {
      "Size Options": "Various sizes as per Customers requirement",
      "Handle Options": "Twisted Handles, Flat Handle or without Handle",
      "Printing": "Upto 4 Colour Printing Can Be Done"
    },
    applications: [
      "Luxury retail & boutique bags",
      "Pharmaceutical packaging",
      "Cosmetics & gift packaging",
      "Branded promotional bags"
    ]
  },

  // --- Pizza Cartons Category ---
  {
    id: "brown-pizza-cartons",
    categoryId: "pizza-cartons",
    name: "Brown Pizza Cartons",
    description: "Sturdy brown kraft pizza cartons available in sizes 10 inch to 18 inch with customized printing and shrink wrap export packing.",
    images: [BrownPizzaCarton],
    specifications: {
      "Size": "10 Inch to 18 Inch",
      "Printing": "Upto 4 Colour Customized Printing Available",
      "Packing": "Shrink Wrap Packing Export"
    },
    applications: [
      "Pizza delivery & takeaway packaging",
      "Restaurant & QSR carton boxes",
      "Export food packaging",
      "Branded pizza box printing"
    ]
  },
  {
    id: "sicilian-pizza",
    categoryId: "pizza-cartons",
    name: "Sicilian Pizza",
    description: "Rectangular Sicilian pizza cartons in standard 13 x 17 inch size with customized printing and shrink wrap export packing.",
    images: [SicilianPizzaWhite,SicilianPizzaBrown],
    specifications: {
      "Size": "13 x 17 Inch",
      "Printing": "Upto 4 Colour Customized Printing Available",
      "Packing": "Shrink Wrap Packing Export"
    },
    applications: [
      "Sicilian & rectangular pizza packaging",
      "Restaurant & QSR carton boxes",
      "Export food packaging",
      "Branded pizza box printing"
    ]
  },
  {
    id: "white-pizza-cartons",
    categoryId: "pizza-cartons",
    name: "White Pizza Cartons",
    description: "Premium white pizza cartons available in sizes 10 inch to 18 inch with customized printing and shrink wrap export packing.",
    images: [WhitePizzaCarton],
    specifications: {
      "Size": "10 Inch to 18 Inch",
      "Printing": "Upto 4 Colour Customized Printing Available",
      "Packing": "Shrink Wrap Packing Export"
    },
    applications: [
      "Premium pizza delivery packaging",
      "Branded restaurant boxes",
      "Export food packaging",
      "High-end pizza box printing"
    ]
  },
  {
    id: "corrugated-cartons",
    categoryId: "pizza-cartons",
    name: "Corrugated Cartons",
    description: "Heavy-duty corrugated cartons available in 3 Ply, 5 Ply or Specialised configurations with customized printing and shrink wrap export packing.",
    images: [corrugatedCarton],
    specifications: {
      "Type": "3 Ply, 5 Ply or Specialised Carton",
      "Printing": "Upto 4 Colour Customized Printing Available",
      "Packing": "Shrink Wrap Packing Export"
    },
    applications: [
      "Industrial & retail corrugated packaging",
      "E-commerce shipping cartons",
      "Export-grade packaging boxes",
      "FMCG & logistics carton supply"
    ]
  },

  // --- Machinery Category ---
  {
    id: "paper-making-machinery",
    categoryId: "machinery",
    name: "Kraft Paper, Duplex Board & Tissue Paper Making Machinery",
    description: "Complete turnkey paper making plant supplied on project basis for manufacturing Kraft Paper, Duplex Board, and Tissue Paper. Engineered around recycled fiber furnishes with full civil, mechanical, electrical, and commissioning support included from 30 TPD to 150 TPD capacity scales.",
    images: [machinery1],
    specifications: {
      "Capacity Range": "30 TPD to 150 TPD",
      "Raw Material": "100% Recycled Fibers",
      "Supply Basis": "Complete Turnkey Project",
      "Output Grades": "Kraft Paper, Duplex Board, Tissue Paper",
      "Commissioning": "Included with full civil & mechanical support"
    },
    applications: [
      "Kraft paper & packaging board mills",
      "Duplex board manufacturing units",
      "Tissue paper production facilities",
      "Recycled fiber processing plants"
    ]
  },
  {
    id: "corrugated-carton-plant",
    categoryId: "machinery",
    name: "Corrugated Carton Making Plant",
    description: "Complete semi-automatic and fully automatic plant for the end-to-end manufacture of corrugated cartons. Encompasses single-facer, double-facer, slitter-scorer, rotary die-cutter, folder-gluer, and bundling line, configurable to client production volumes and carton dimensions.",
    images: [cartonMaker],
    specifications: {
      "Automation Level": "Semi-Automatic & Fully Automatic",
      "Flute Profiles": "A, B, C, E & F Flute",
      "Max Board Width": "Up to 2500 mm",
      "Production Speed": "Up to 150 m/min (automatic line)",
      "Supply Scope": "Complete plant with installation"
    },
    applications: [
      "Industrial corrugated box manufacturing",
      "E-commerce & retail packaging units",
      "Export-grade corrugated carton plants",
      "FMCG and logistics packaging factories"
    ]
  },
  {
    id: "exercise-book-plant",
    categoryId: "machinery",
    name: "Exercise Book & Composition Book Making Plant",
    description: "End-to-end book making line for manufacturing exercise books and composition books in semi-automatic and fully automatic configurations. Line covers roll sheeting, ruling, gathering, stitching, cover feeding, pressing, and trimming — delivering finished books ready for retail or bulk supply.",
    images: [bookProduction],
    specifications: {
      "Automation Level": "Semi-Automatic & Fully Automatic",
      "Book Sizes": "A4, A5, Long Book & Custom Sizes",
      "Page Count Range": "32 to 200 Pages",
      "Production Output": "Up to 60 books/min (automatic)",
      "Binding Method": "Centre-pin stitching & perfect binding options"
    },
    applications: [
      "School exercise & composition book factories",
      "Stationery export manufacturing units",
      "Government notebook supply projects",
      "Branded premium notebook production lines"
    ]
  },
  {
    id: "packaging-converting-machinery",
    categoryId: "machinery",
    name: "Packaging & Converting Machinery",
    description: "A comprehensive range of paper converting and packaging machines including Slitter-Rewinders, Sheet Cutters, and Waste Paper Baling Presses. Each machine is available as standalone units or as integrated converting lines suited for paper mills, converters, and recycling operations.",
    images: [convertingMachine, packagingMachine],
    specifications: {
      "Machine Types": "Slitter-Rewinder, Sheet Cutter, Baling Press",
      "Slitter Speed": "Up to 800 m/min",
      "Sheet Cutter Output": "Up to 200 cuts/min",
      "Baling Press Capacity": "2 to 6 bales/hour",
      "Supply Format": "Standalone units or integrated line"
    },
    applications: [
      "Paper mill slitting & rewinding operations",
      "Sheet cutting for offset & copier paper",
      "Waste paper baling for recycling facilities",
      "Packaging converting & finishing plants"
    ]
  },

  // --- Stationery & Office Products Category ---
  {
    id: "composition-book",
    categoryId: "stationery",
    name: "Composition Book",
    description: "Quality composition books with sturdy binding, perfect for students and professionals. Features reliable sewn binding and durable covers for everyday use.",
    images: [CompositionBook],
    specifications: {
      "Size": "9.75\" x 7.5\"",
      "Sheet Count": "100 sheets",
      "Packaging": "6 pc shrink / 48 pc carton"
    },
    applications: [
      "Student note-taking",
      "Class composition writing",
      "Exercise books for schools",
      "Academic record keeping"
    ]
  },
  {
    id: "1-subject-book",
    categoryId: "stationery",
    name: "1 Subject Book",
    description: "Single-subject notebook ideal for focused note-taking and organized learning across all academic levels.",
    images: [OneSubjectBook, OneSubjectBook1],
    specifications: {
      "Size": "10.5\" x 8\"",
      "Sheet Count": "70 sheets",
      "Packaging": "6 pc shrink / 48 pc carton"
    },
    applications: [
      "Single-subject classroom notes",
      "Subject-specific study material",
      "Student exercise books",
      "Academic organization"
    ]
  },
  {
    id: "3-subject-book",
    categoryId: "stationery",
    name: "3 Subject Book",
    description: "Multi-subject notebook with dividers for managing three different subjects or topics in one convenient notebook.",
    images: [ThreeSubjectBook],
    specifications: {
      "Size": "10.5\" x 8\"",
      "Sheet Count": "120 sheets",
      "Packaging": "4 pc shrink / 48 pc carton"
    },
    applications: [
      "Multi-subject classroom organization",
      "College & university notes",
      "Cross-curricular studies",
      "Organized student documentation"
    ]
  },
  {
    id: "5-subject-book",
    categoryId: "stationery",
    name: "5 Subject Book",
    description: "Comprehensive five-subject notebook designed for students managing multiple courses or subjects simultaneously with organized section dividers.",
    images: [FiveSubjectBook],
    specifications: {
      "Size": "10.5\" x 8\"",
      "Sheet Count": "150 sheets",
      "Packaging": "3 pc shrink / 36 pc carton"
    },
    applications: [
      "Heavy course load organization",
      "College & university use",
      "Professional multi-topic documentation",
      "Comprehensive subject management"
    ]
  },
  {
    id: "colouring-book",
    categoryId: "stationery",
    name: "Colouring Book",
    description: "Creative colouring books available in multiple variants including basic colouring, alphabet designs, big colouring, and giant activity books for all ages.",
    images: [ColoringBook],
    specifications: {
      "Variants": "Colouring Book, Colouring Alphabet, Big Colouring Book, Giant Colouring & Activity Book",
      "Packaging": "12 pieces in shrink"
    },
    applications: [
      "Children's creative activities",
      "Preschool & kindergarten learning",
      "Alphabet learning & recognition",
      "Artistic development & entertainment"
    ]
  },
  {
    id: "filler-paper-100",
    categoryId: "stationery",
    name: "Filler Paper 100 Sheets",
    description: "High-quality ruled filler paper for replacement refills and supplementary note-taking in standard notebooks and binders.",
    images: [FillerPaper, FillerPaper1],
    specifications: {
      "Size": "10.5\" x 8\"",
      "Sheet Count": "100 sheets",
      "Packaging": "60 pack per carton"
    },
    applications: [
      "Notebook refills",
      "Binder supplementary pages",
      "Extra writing paper supply",
      "School & office use"
    ]
  },
  {
    id: "writing-tablet",
    categoryId: "stationery",
    name: "Writing Tablet",
    description: "Compact writing tablets with premium quality paper, ideal for portable note-taking and sketching.",
    images: [WritingTablet],
    specifications: {
      "Size": "6\" x 9\"",
      "Sheet Count": "100 sheets",
      "Packaging": "12 pcs shrink / 96 pcs per carton"
    },
    applications: [
      "Portable note-taking",
      "Sketching & drawing",
      "On-the-go documentation",
      "Travel writing pads"
    ]
  },
  {
    id: "legal-pads-pack-3",
    categoryId: "stationery",
    name: "Legal Pads Pack of 3",
    description: "Practical pack of 3 legal pads with ruled pages, perfect for office, legal, and professional documentation needs.",
    images: [LegalPad],
    specifications: {
      "Size": "5\" x 8\"",
      "Sheet Count": "25 sheets per pad",
      "Packaging": "3 pcs shrink / 98 pcs per carton"
    },
    applications: [
      "Legal & professional documentation",
      "Office note-taking",
      "Meeting notes & minutes",
      "Business correspondence"
    ]
  },
  {
    id: "100-index-card",
    categoryId: "stationery",
    name: "100 Index Card",
    description: "Premium quality index cards available in white and coloured options with plain and ruled formats for organizing information and flashcard learning.",
    images: [IndexCards],
    specifications: {
      "Size": "4\" x 6\" & 5\" x 3\"",
      "Sheet Count": "100 sheets",
      "Variants": "White & Coloured; Plain & Ruled",
      "Packaging": "100 sheet/pack / 72 pack/carton"
    },
    applications: [
      "Flashcard learning & studying",
      "Information organization & filing",
      "Reference card creation",
      "Student study materials"
    ]
  },
  {
    id: "poster-board",
    categoryId: "stationery",
    name: "Poster Board White & Coloured",
    description: "Durable poster board sheets suitable for display boards, school projects, presentations, and creative mounting applications.",
    images: [PosterBoard, PosterBoard1],
    specifications: {
      "Size": "11\" x 14\" & 22\" x 28\"",
      "Sheet Count": "25 sheets",
      "Packaging": "25 pc pack / 4 pack in carton",
      "Variants": "White & Coloured"
    },
    applications: [
      "School project boards",
      "Presentation display boards",
      "Craft and art mounting",
      "Office signage backing"
    ]
  },
  {
    id: "white-regular-envelope",
    categoryId: "stationery",
    name: "White Regular Envelope",
    description: "Standard white mailing envelopes designed for letters, documents, and everyday correspondence with reliable closure and presentation.",
    images: [Envelope],
    specifications: {
      "Size": "4-1/8\" x 9-1/2\"",
      "Quantity": "50 per box",
      "Packaging": "50 env/box / 24 box in carton"
    },
    applications: [
      "Letters & documents",
      "Business correspondence",
      "Invoice and statement mailing",
      "Personal mail dispatch"
    ]
  },
  {
    id: "peel-seal-envelope",
    categoryId: "stationery",
    name: "40 Peel & Seal Envelopes",
    description: "Self-sealing envelopes ideal for secure mailing of documents, statements, and important paperwork.",
    images: [Envelope2,Envelope1],
    specifications: {
      "Size": "4-1/8\" x 9-1/2\"",
      "Quantity": "40 per box",
      "Packaging": "40 env/box / 24 box in carton"
    },
    applications: [
      "Secure document mailing",
      "Invoice & statement dispatch",
      "Office correspondence",
      "Administrative filing"
    ]
  },
  {
    id: "yellow-pencil-ferrul",
    categoryId: "stationery",
    name: "Yellow Pencil with Ferrul",
    description: "Classic yellow pencils with ferrules for school, office, and general writing needs in a dependable everyday format.",
    images: [YellowPencil],
    specifications: {
      "Quantity": "10 pcs per pack",
      "Packaging": "10 pieces in a pack"
    },
    applications: [
      "School writing",
      "Office note-taking",
      "Drawing and sketching",
      "General educational use"
    ]
  },
  {
    id: "eco-friendly-pencil",
    categoryId: "stationery",
    name: "Eco Friendly Pencil",
    description: "Environmentally conscious pencils available in assorted fun designs for classrooms, crafts, and creative learning.",
    images: [EcoPencil],
    specifications: {
      "Quantity": "10 pcs per pack",
      "Packaging": "10 pieces in a pack",
      "Variants": "Plain, Wild Animals, Fruits, Rainbow"
    },
    applications: [
      "Classroom writing",
      "Children's art activities",
      "Learning and coloring practice",
      "Gift and promotional stationery"
    ]
  },
  {
    id: "colouring-pencils",
    categoryId: "stationery",
    name: "Colouring Pencils",
    description: "Assorted colouring pencils and crayons suited for artistic activities, classroom projects, and creative learning.",
    images: [ColoringPencils],
    specifications: {
      "Quantity": "12 pcs per pack",
      "Packaging": "12 pcs per pack",
      "Variants": "12 Assorted Colour Neon Polymer w/ Ferrul, Jumbo Crayon, Colour Crayon, Long Crayon"
    },
    applications: [
      "Art and craft activities",
      "School coloring projects",
      "Educational creativity",
      "Children's stationery kits"
    ]
  },
  {
    id: "filler-paper-150",
    categoryId: "stationery",
    name: "Filler Paper 150 Sheets",
    description: "Premium filler paper for notebooks, binders, and supplementary study pages in a higher sheet-count format.",
    images: [FillerPaper150],
    specifications: {
      "Size": "10.5\" x 8\"",
      "Sheet Count": "150 sheets",
      "Packaging": "48 packs per carton"
    },
    applications: [
      "Notebook refills",
      "Binder replacement pages",
      "Student study sheets",
      "Office documentation support"
    ]
  },
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

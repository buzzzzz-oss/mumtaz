import imgAgri from '../assets/sectors/sector_agriculture_1772304801840.png';
import imgAviation from '../assets/sectors/sector_aviation_1772304818278.png';
import imgConstruction from '../assets/sectors/sector_construction_1772304835402.png';
import imgDigital from '../assets/sectors/sector_digital_1772304856533.png';
import imgEvents from '../assets/sectors/sector_events_1772304874144.png';
import imgFM from '../assets/sectors/sector_fm_1772304892041.png';
import imgFMCG from '../assets/sectors/sector_fmcg_1772304908053.png';
import imgGov from '../assets/sectors/sector_government_1772304954671.png';
import imgHealth from '../assets/sectors/sector_healthcare_1772304971592.png';
import imgHosp from '../assets/sectors/sector_hospitality_1772304988889.png';
import imgIT from '../assets/sectors/sector_it_1772305005987.png';
import imgLogistics from '../assets/sectors/sector_logistics_1772305022721.png';
import imgMfg from '../assets/sectors/sector_manufacturing_1772305041612.png';
import imgOil from '../assets/sectors/sector_oilgas_1772305056410.png';
import imgProperty from '../assets/sectors/sector_property_1772305086482.png';
import imgRealEstate from '../assets/sectors/sector_realestate_1772305111267.png';
import imgRenewables from '../assets/sectors/sector_renewables_1772305128571.png';

// Fallback to related AI images due to quota limits
import imgRetail from '../assets/sectors/sector_hospitality_1772304988889.png'; // Using hospitality as fallback for retail
import imgShipping from '../assets/sectors/sector_logistics_1772305022721.png'; // Using logistics for shipping
import imgTransport from '../assets/sectors/sector_aviation_1772304818278.png'; // Using aviation for transport
import imgResidential from '../assets/sectors/sector_realestate_1772305111267.png'; // Using real estate for residential

export const standardSectors = [
    {
        id: "agriculture",
        title: "Agriculture",
        description: "Specialized pest control and facility management for UAE agricultural sectors, ensuring optimal safety and compliance.",
        icon: "🌱",
        image: imgAgri
    },
    {
        id: "aviation",
        title: "Aviation",
        description: "Premium cleaning and manpower solutions for Dubai and Abu Dhabi aviation facilities, maintaining strict industry standards.",
        icon: "✈️",
        image: imgAviation
    },
    {
        id: "construction",
        title: "Construction & Infrastructure",
        description: "Robust manpower supply and site maintenance for major UAE construction and infrastructure projects.",
        icon: "🏗️",
        image: imgConstruction
    },
    {
        id: "digital",
        title: "Digital",
        description: "Modern facility support for digital and tech hubs across the UAE, ensuring pristine working environments.",
        icon: "💻",
        image: imgDigital
    },
    {
        id: "events",
        title: "Events Management",
        description: "Reliable cleaning and manpower support for high-profile events in Dubai and across the Emirates.",
        icon: "🎟️",
        image: imgEvents
    },
    {
        id: "facilities",
        title: "Facilities Management",
        description: "Comprehensive integrated facilities management UAE, delivering tailored solutions for commercial properties.",
        icon: "🏢",
        image: imgFM
    },
    {
        id: "fmcg",
        title: "FMCG",
        description: "Hygiene and pest control UAE compliant services for Fast-Moving Consumer Goods manufacturing and storage.",
        icon: "📦",
        image: imgFMCG
    },
    {
        id: "government",
        title: "Government & Utilities",
        description: "Trusted municipality-approved services providing structured operations for UAE government facilities.",
        icon: "🏛️",
        image: imgGov
    },
    {
        id: "healthcare",
        title: "Healthcare and Pharmaceuticals",
        description: "Stringent industrial cleaning UAE and sanitation for hospitals and pharmaceutical environments.",
        icon: "🏥",
        image: imgHealth
    },
    {
        id: "hospitality",
        title: "Hospitality",
        description: "Premium housekeeping and maintenance services for luxury hotels and resorts in Dubai and Abu Dhabi.",
        icon: "🏨",
        image: imgHosp
    },
    {
        id: "it",
        title: "IT and Telecoms",
        description: "Specialized facility care ensuring clean and secure environments for UAE IT and telecom infrastructure.",
        icon: "📡",
        image: imgIT
    },
    {
        id: "logistics",
        title: "Logistics & Warehousing",
        description: "Efficient manpower supply UAE and cleaning solutions to keep logistics hubs operating smoothly.",
        icon: "🏭",
        image: imgLogistics
    },
    {
        id: "manufacturing",
        title: "Manufacturing",
        description: "Industrial cleaning UAE and maintenance tailored for heavy and light manufacturing plants.",
        icon: "⚙️",
        image: imgMfg
    },
    {
        id: "oil-gas",
        title: "Oil & Gas",
        description: "High-standard compliance and facility services designed for the rigorous demands of the UAE Oil & Gas sector.",
        icon: "🛢️",
        image: imgOil
    },
    {
        id: "property",
        title: "Property Developers",
        description: "End-to-end facilities management UAE partnering with leading property developers for newly built projects.",
        icon: "🏙️",
        image: imgProperty
    },
    {
        id: "real-estate",
        title: "Real Estate",
        description: "Reliable maintenance and cleaning services enhancing the value of commercial and residential UAE real estate.",
        icon: "🔑",
        image: imgRealEstate
    },
    {
        id: "renewables",
        title: "Renewables",
        description: "Forward-thinking facility support for the growing renewable energy sector across the Emirates.",
        icon: "☀️",
        image: imgRenewables
    },
    {
        id: "retail",
        title: "Retail and B2B",
        description: "Pristine cleaning and pest control services ensuring exceptional retail environments in UAE malls and business centers.",
        icon: "🛍️",
        image: imgRetail
    },
    {
        id: "shipping",
        title: "Shipping and Ports",
        description: "Robust manpower and maintenance solutions for the bustling and vital UAE shipping and port facilities.",
        icon: "🚢",
        image: imgShipping
    },
    {
        id: "transport",
        title: "Transport",
        description: "Keeping UAE public and private transport hubs clean and efficiently managed with our dedicated crews.",
        icon: "🚆",
        image: imgTransport
    }
];

export const featuredSector = {
    id: "residential",
    title: "Residential Communities",
    description: "Premium pest control services, villa deep cleaning, municipality-approved water tank cleaning, manpower support, and integrated facilities management solutions across Dubai, Sharjah, and Abu Dhabi. Serving high-end villa communities and residential developments with certified technicians and structured SOP-driven operations.",
    badge: "Core Sector",
    icon: "🏡",
    image: imgResidential
};

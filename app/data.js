import {
    Sparkles,
    Droplets,
    Utensils,
    Building,
    Shield,
    Leaf,
    Route,
    ShoppingBag,
    Trees,
    Plane,
    Train,
    GraduationCap,
    Stethoscope,
    Book,
    DoorClosed,
} from "lucide-react";

export const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#amenities", label: "Amenities" },
    { href: "#specifications", label: "Specifications" },
    { href: "#gallery", label: "Gallery" },
    { href: "#floor-plans", label: "Plans" },
    { href: "#location", label: "Location" },
];

export const galleryImages = [
    "/gallery1.jpg",
    "/gal2.jpg",
    "/gal3.jpg",
    "/gal4.jpg",
    "/gal5.jpg",
    "/gal6.jpg",
    "/gal7.jpg",
    "/gal8.jpg",
];

export const clubhouseImages = [
    { src: "", label: "3 Clubhouses", sublabel: "Citadel, Castle, Manor" },
    { src: "/CB 1.jpg", label: "Citadel" },
    { src: "/CB 2.jpg", label: "Castle" },
    { src: "/CB 3.jpg", label: "Manor" },
    { src: "", label: "3 Swimming Pools", sublabel: "" },
    { src: "/SP 1.jpg", label: "Swimming Pool 1" },
    { src: "/SP 2.jpg", label: "Swimming Pool 2" },
    { src: "/SP 3.jpg", label: "Swimming Pool 3" },
];


export const floorPlans = [
    { title: "2 BHK", image: "/2bhk2.png", size: "946 | 960 sq.ft", features: ["Well ventilated", "Abundant sunlight"] },
    { title: "2 BHK", image: "/2bhk1.png", size: "960 sq.ft", features: ["Vastu compliant", "Premium finishes"] }, 
    { title: "3 BHK", image: "/3bhk1.png", size: "1213 | 1226 | 1232 | 1239 | 1262 sq.ft", features: ["Smart home ready", "High ceilings"] },
    { title: "3 BHK", image: "/3bhk2.png", size: "1226 sq.ft", features: ["Power backup", "Video door phone"] },
    { title: "3 BHK", image: "/3bhk3.png", size: "1232 sq.ft", features: ["Italian flooring", "Designer lights"] },
    { title: "3 BHK", image: "/3bhk4.png", size: "1239 sq.ft", features: ["Modern kitchen", "Split AC pre-wire"] },
    { title: "3 BHK", image: "/3bhk5.png", size: "1262 sq.ft", features: ["Premium fixtures", "Wooden flooring"] },
    { title: "4 BHK", image: "/4bhk1.png", size: "1780 sq.ft", features: ["Panoramic views", "Luxury amenities"] },
    { title: "5 BHK (Couplet)", image: "/5bhk2.png", size: "1940 sq.ft", features: ["Private terrace", "Grand entry"] },
    { title: "6 BHK (Couplet)", image: "/6bhk2.png", size: "2470 sq.ft", features: ["Ultra premium", "Exclusive access"] },
];

export const specs = {
    living: {
        title: "Internal Finish",
        points: [
            "600 × 1200 mm vitrified tiles for flooring (AGL / equivalent)",
            "Anti-skid floor tiles for balconies / terraces",
            "Gypsum finish for walls and ceiling",
            "OBD paint finish for hall (Asian / Nerolac or equivalent)",
            "Building internal floor lobby halls – texture paint",
        ],
        icon: Sparkles,
    },
    kitchen: {
        title: "Kitchen",
        points: [
            "AGL or equivalent full-body slab for kitchen platform with S.S. sink",
            "Tiles for kitchen dado up to 2 feet",
            "Provision for washing machine in dry terrace",
            "Gas leak detector (for MNGL)",
            "Gas pipeline (MNGL)",
        ],
        icon: Utensils,
    },
    bath: {
        title: "Bathrooms",
        points: [
            "600 × 1200 mm dado tiles and 600 × 600 flooring (AGL / equivalent)",
            "Kohler or equivalent bathroom fittings",
            "Solar water supply only in master bedroom",
        ],
        icon: Droplets,
    },
    structure: {
        title: "Doors / Windows",
        points: [
            "Both-side laminated flush door",
            "Powder-coated aluminium sliding windows / sliding door with mosquito net",
            "Marble / granite / full-body tile sill",
            "Video door phone",
            "Biometric lock",
        ],
        icon: DoorClosed,
    },
    safety: {
        title: "Electrical",
        points: [
            "Legrand or equivalent switchboards",
            "AC provision in all rooms with outdoor ledge",
            "Polycab or equivalent cables for electrical wiring",
            "Provision for automation (limited points)",
            "Inverter provision",
            "Internet provision",
        ],
        icon: Shield,
    },
    logistics: {
        title: "Common Area",
        points: [
            "4-tier security – main gate, lobby gate, CCTV in common areas, biometric locks",
            "Firefighting – wet risers, sprinklers, smoke detectors and fire alarm systems in flat and common areas as per norms",
            "Designated society office",
            "Sewage treatment plant",
            "Common parking for guests",
            
        ],
        icon: Shield,
    }
};

export const locationHighlights = [
    { name: "Seasons Mall", distance: "5 Mins", icon: <ShoppingBag className="h-4 w-4" /> },
    { name: "Amanora Mall", distance: "4 Mins", icon: <ShoppingBag className="h-4 w-4" /> },
    { name: "Magarpatta IT Park", distance: "5 Mins", icon: <Building className="h-4 w-4" /> },
    { name: "Wisdom World School", distance: "1 Min", icon: <Book className="h-4 w-4" /> },
    { name: "EON IT Park", distance: "20 Mins", icon: <Building className="h-4 w-4" /> },
    { name: "WTC", distance: "25 Mins", icon: <Building className="h-4 w-4" /> },
    { name: "Koregaon Park", distance: "18 Mins", icon: <Trees className="h-4 w-4" /> },
    { name: "Umang Hospital", distance: "1 Min", icon: <Stethoscope className="h-4 w-4" /> },
    { name: "Pune Int. Airport", distance: "35 Mins", icon: <Plane className="h-4 w-4" /> },
    { name: "Falcon Street", distance: "0 Min", icon: <Building className="h-4 w-4" /> },
    { name: "HDFC School", distance: "4 Mins", icon: <GraduationCap className="h-4 w-4" /> },
    { name: "Noble Hospital", distance: "7 Min", icon: <Stethoscope className="h-4 w-4" /> },
];

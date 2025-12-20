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
    Stethoscope
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
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
];

export const clubhouseImages = [
    { src: "/pool.jpg", label: "Swimming Pools" },
    { src: "/spa.jpg", label: "Spa & Salon" },
    { src: "/gym.jpg", label: "Gym" },
    { src: "/hall.jpg", label: "Banquet Hall" },
    { src: "/indoor.jpg", label: "Indoor Games" },
    { src: "/guest.jpg", label: "Guest Room" },
    { src: "/dog park.jpg", label: "Dog Park" },
    { src: "/working space.jpg", label: "Co-working Space" },
];

export const floorPlans = [
    { title: "2 BHK", image: "/2bhk.png", size: "Approx. 1000–1100 sq.ft", features: ["Cross ventilation", "Balcony views"] },
    { title: "3 BHK", image: "/3bhk.png", size: "Approx. 1350–1450 sq.ft", features: ["Spacious Living", "Optimized"] },
    { title: "3 BHK Premium", image: "/3bhk2.png", size: "Approx. 1500–1600 sq.ft", features: ["Luxury Finish", "Courtyard View"] },
];

export const specs = {
    living: {
        title: "Living & Bedrooms",
        points: [
            "Italian marble in living/dining; wooden laminate in bedrooms",
            "UPVC/Aluminium large sliders for light & ventilation",
            "Premium matte-finish internal doors & hardware",
        ],
        icon: Sparkles,
    },
    bath: {
        title: "Bathrooms",
        points: [
            "Anti-skid vitrified tiles with designer dado",
            "Premium sanitary ware & fittings with glass shower partition",
            "Geyser & exhaust provisions; granite counters",
        ],
        icon: Droplets,
    },
    kitchen: {
        title: "Kitchen",
        points: [
            "Granite platform with SS sink & premium CP fittings",
            "Provision for water purifier, chimney & hob",
            "Dedicated washing machine & dishwasher points",
        ],
        icon: Utensils,
    },
    structure: {
        title: "Structure & Flooring",
        points: [
            "Earthquake-resistant RCC frame structure",
            "600x600 vitrified tiles in circulation areas",
            "Low-VOC paints for healthier indoors",
        ],
        icon: Building,
    },
    safety: {
        title: "Safety & Security",
        points: [
            "Smart access control & video door phone",
            "24x7 CCTV in common areas & fire detection systems",
            "Sprinklers/hydrants as per norms; refuge areas planned",
        ],
        icon: Shield,
    },
    comfort: {
        title: "Comfort & Sustainability",
        points: [
            "VRV/VRF-ready AC provision; cross-ventilated plans",
            "DG back-up for common areas & essential points",
            "Rainwater harvesting, sewage treatment, solar utilities",
        ],
        icon: Leaf,
    },
    logistics: {
        title: "Elevators & Parking",
        points: [
            "High-speed elevators with ARD and auto rescue",
            "Ample podium/covered parking with EV charging readiness",
            "Well-lit driveways with anti-skid paving",
        ],
        icon: Route,
    }
};

export const locationHighlights = [
    { name: "Seasons Mall", distance: "500 mtr", icon: <ShoppingBag className="h-4 w-4" /> },
    { name: "Amanora Mall", distance: "500 mtr", icon: <ShoppingBag className="h-4 w-4" /> },
    { name: "Magarpatta City", distance: "700 mtr", icon: <Building className="h-4 w-4" /> },
    { name: "Solapur Highway", distance: "300 mtr", icon: <Route className="h-4 w-4" /> },
    { name: "EON IT Park", distance: "4 km", icon: <Building className="h-4 w-4" /> },
    { name: "WTC", distance: "4 km", icon: <Building className="h-4 w-4" /> },
    { name: "Koregaon Park", distance: "5 km", icon: <Trees className="h-4 w-4" /> },
    { name: "Pune Int. Airport", distance: "8 km", icon: <Plane className="h-4 w-4" /> },
    { name: "Pune Camp", distance: "8 km", icon: <Train className="h-4 w-4" /> },
    { name: "HDFC School", distance: "500 mtr", icon: <GraduationCap className="h-4 w-4" /> },
    { name: "Nobel Hospital", distance: "600 mtr", icon: <Stethoscope className="h-4 w-4" /> },
];

export const client = {
  // Business Details
  name: "Greengage Garden Services",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Guildford.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07825 771830",
  email: "",
  website: "",

  // Location
  address: "Guildford",
  city: "Guildford",
  county: "",
  postcode: "",
  basedIn: "Guildford",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Max F.", rating: 5, text: "Top quality work from Greengage Garden Services. They redesigned our outdoor space and it's now our favourite part of the house. The whole family spends so much more time outside now. Couldn't be happier.", date: "4 months ago" },
    { name: "Mandy Cook", rating: 5, text: "Would give Greengage Garden Services 10 stars if I could. They transformed our tired-looking garden into a beautiful, functional space. The team were a pleasure to deal with and the price was very competitive for Guildford.", date: "8 months ago" },
    { name: "Mel Williams", rating: 5, text: "Really impressed with Greengage Garden Services. They came out, assessed what we needed, gave us honest advice about what would work best, and then delivered a fantastic result. No hard sell, just good honest work.", date: "3 years ago" },
    { name: "Wendy Walker", rating: 5, text: "Had Greengage Garden Services do our front and back gardens. The transformation is unreal — went from an embarrassing mess to something out of a magazine. The guys were polite, hardworking, and incredibly skilled.", date: "2 months ago" },
    { name: "Charlotte M.", rating: 5, text: "We found Greengage Garden Services online and after reading about their work, decided to give them a call. So glad we did — the garden has been completely transformed. Professional from start to finish.", date: "3 months ago" },
    { name: "Ryan Wilson", rating: 5, text: "Contacted Greengage Garden Services after a recommendation from a friend and I can see why they were so highly rated. Excellent communication, fair price, and the garden looks incredible. Thank you!", date: "a month ago" },
    { name: "Rebecca M.", rating: 5, text: "Greengage Garden Services recently completed a major landscaping project for us and the quality is exceptional. The team worked through some challenging weather but still delivered on time. Genuinely thrilled with the outcome.", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Greengage Garden Services | Landscaper in Guildford",
    description: "Professional landscaper in Guildford. 5.0-star rated on Google. Call for a free quote.",
  },
};

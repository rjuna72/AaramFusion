// Evidence and launch uncertainties are documented in PROJECT_RESEARCH.md.
export const business = {
  name: "Aaram Fusion",
  listingName: "Aaram Fusion Cafe",
  street: "664 Miles Platting Road",
  locality: "Rochedale",
  region: "QLD",
  postcode: "4123",
  address: "664 Miles Platting Road, Rochedale QLD 4123",
  orderUrl: "https://www.ubereats.com/au/store/aaram-fusion-cafe/f2jRohrbXDm6ij0kgZTlPw",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=664%20Miles%20Platting%20Road%2C%20Rochedale%20QLD%204123%2C%20Australia",
  phone: null,
  email: null,
  confirmedHours: null,
} as const;

export const menuGroups = [
  {
    id: "breakfast", number: "01", title: "Breakfast", subtitle: "Start with something good.",
    items: [
      { name: "Avocado on Toast", description: "Sourdough, avocado, feta & beetroot hummus." },
      { name: "Aaram Big Brekky", description: "Eggs, bacon, chorizo & the breakfast extras." },
      { name: "Egg Benny", description: "Poached eggs, bacon & hollandaise." },
    ],
  },
  {
    id: "lunch", number: "02", title: "Lunch & sweets", subtitle: "For a little later.",
    items: [
      { name: "Angus Beef Burger and Chips", description: "Beef, bacon, cheese & chips on the side." },
      { name: "Sweet Waffle", description: "Berries, maple & a little something sweet." },
    ],
  },
  {
    id: "coffee", number: "03", title: "Coffee", subtitle: "Make a moment of it.",
    items: [{ name: "Flat White", description: "A familiar café favourite." }],
  },
] as const;

export const photos = {
  breakfast: {
    src: "/images/breakfast-1200.webp",
    srcSet: "/images/breakfast-640.webp 640w, /images/breakfast-1200.webp 1200w, /images/breakfast-1800.webp 1800w",
    width: 1800, height: 1350,
    alt: "Illustrative photograph of avocado and egg toast on a ceramic plate; not an Aaram Fusion dish",
    credit: "Elena Golovchenko / Pexels",
    source: "https://www.pexels.com/photo/avocado-and-egg-toasts-11849970/",
  },
  coffee: {
    src: "/images/coffee-900.webp",
    srcSet: "/images/coffee-480.webp 480w, /images/coffee-900.webp 900w",
    width: 900, height: 1200,
    alt: "Illustrative photograph of a latte in an ivory cup on a dark table; not photographed at Aaram Fusion",
    credit: "Cup of Couple / Pexels",
    source: "https://www.pexels.com/photo/close-up-photo-of-a-latte-in-a-teacup-8472176/",
  },
} as const;

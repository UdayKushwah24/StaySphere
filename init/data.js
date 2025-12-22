const sampleListings = [
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis with a private pool and golden dunes view.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 12000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Snowy Retreat in Switzerland",
    description:
      "Cozy wooden chalet with breathtaking views of snow-covered peaks and warm fireplaces.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 15000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Beachfront Villa in Goa",
    description:
      "Wake up to ocean waves and golden sands in this stunning beachfront villa in Goa.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 8500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Mountain Cabin in Himachal",
    description:
      "A peaceful wooden cabin surrounded by pine forests and snow-clad mountains.",
    image:
      "https://images.unsplash.com/photo-1643263904933-2aa9fb29bd81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5haW5pdGFsJTJDJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    price: 6000,
    location: "Manali",
    country: "India",
  },
  {
    title: "Modern Apartment in New York",
    description:
      "Stay in the heart of Manhattan with city skyline views and premium amenities.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 20000,
    location: "New York City",
    country: "USA",
  },
  {
    title: "Riverside Cottage in Kerala",
    description:
      "Enjoy the calm of backwaters in this charming riverside retreat surrounded by coconut trees.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Countryside Farmhouse in Punjab",
    description:
      "Rustic farmhouse experience with fresh food, open fields, and traditional vibes.",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Ludhiana",
    country: "India",
  },
  {
    title: "Clifftop House in Santorini",
    description:
      "Whitewashed beauty perched over the Aegean Sea with world-famous sunset views.",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 18000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Luxury Suite in Paris",
    description:
      "A romantic escape near the Eiffel Tower with elegant interiors and French charm.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 25000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Forest Retreat in Coorg",
    description:
      "Reconnect with nature in this eco-friendly cabin surrounded by coffee plantations.",
    image:
      "https://images.unsplash.com/photo-1668173454602-3fe080fdd09a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0JTIwcmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    price: 7000,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Tropical Bungalow in Bali",
    description:
      "Private bamboo villa surrounded by rice fields and lush tropical gardens.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 9500,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Ski Lodge in Canada",
    description:
      "Warm up by the fire after a thrilling day of skiing in this cozy mountain lodge.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 14000,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Historic Riad in Marrakech",
    description:
      "Stay in a traditional Moroccan riad with colorful tiles and courtyard fountain.",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 11000,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Desert Camp in Rajasthan",
    description:
      "Luxury tents under starry skies in the Thar Desert — a royal experience.",
    image:
      "https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Lakeview Cabin in Nainital",
    description:
      "Charming lake-facing cabin with wooden interiors and peaceful surroundings.",
    image:
      "https://images.unsplash.com/photo-1586255028095-d93edb74e412?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFpbml0YWwlMjBsYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    price: 5500,
    location: "Nainital",
    country: "India",
  },
];

module.exports = { data: sampleListings };

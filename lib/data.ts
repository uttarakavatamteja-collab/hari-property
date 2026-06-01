export type PropertyCategory = 'buy' | 'rent' | 'commercial' | 'pg'

export interface Property {
  slug: string
  title: string
  category: PropertyCategory
  type: string
  city: string
  locality: string
  price: string
  budget: string
  bedrooms: number
  bathrooms: number
  area: string
  developer: string
  status: string
  image: string
  gallery: string[]
  description: string
  amenities: string[]
  tags: string[]
  rating: number
  featured: boolean
  newLaunch: boolean
  
  // Extra fields for enhanced categories
  deposit?: string
  furnishing?: string
  availableFrom?: string
  yield?: string
  parking?: string
  zoning?: string
  foodIncluded?: boolean
  wifi?: boolean
  laundry?: boolean
  security?: string
}

export interface Testimonial {
  name: string
  role: string
  location: string
  quote: string
  image: string
}

export interface Location {
  name: string
  description: string
  image: string
  properties: string
}

export interface Stat {
  value: string
  label: string
}

export const categories: Array<{ id: PropertyCategory; label: string }> = [
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'pg', label: 'PG' },
]

export const propertyTypes = [
  '2 BHK', 
  '3 BHK', 
  '4 BHK', 
  'Villa', 
  'Apartment', 
  'Office Space', 
  'Shop', 
  'Showroom', 
  'Warehouse', 
  'PG Room'
]

export const budgets = [
  'Under ₹50 L', 
  '₹50 L - ₹1 Cr', 
  '₹1 Cr - ₹2 Cr', 
  '₹2 Cr+', 
  'Under ₹30,000 / mo', 
  '₹30,000 - ₹1 Lakh / mo', 
  '₹1 Lakh+ / mo', 
  'Under ₹10,000 / mo (PG)'
]

export const properties: Property[] = [
  // ==================== BUY CATEGORY (6 listings) ====================
  {
    slug: 'mango-grove-villas',
    title: 'Mango Grove Luxury Villa',
    category: 'buy',
    type: 'Villa',
    city: 'Mysuru',
    locality: 'Narasimharaja',
    price: '₹3.2 Cr',
    budget: '₹2 Cr+',
    bedrooms: 4,
    bathrooms: 4,
    area: '2,800 sqft',
    developer: 'Hari Properties',
    status: 'Featured',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Bespoke architectural luxury villa with landscaped gardens, double-height ceilings, automated features, and prime family security inside Narasimharaja, Mysuru.',
    amenities: ['Private pool', 'Home theatre', 'Smart security', 'Landscaped garden'],
    tags: ['Premium', 'Gated community', 'Family living'],
    rating: 4.9,
    featured: true,
    newLaunch: false,
    parking: '3 Car Spaces'
  },
  {
    slug: 'royal-gardenia-villa',
    title: 'Royal Gardenia Villa',
    category: 'buy',
    type: 'Villa',
    city: 'Bengaluru',
    locality: 'Sarjapur Road',
    price: '₹4.5 Cr',
    budget: '₹2 Cr+',
    bedrooms: 4,
    bathrooms: 5,
    area: '3,850 sqft',
    developer: 'Prestige Developers',
    status: 'Premium',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ultra-luxurious gated villa community located in the high-growth Sarjapur technology corridor. Features premium materials and private terrace garden.',
    amenities: ['Gated access', 'Power backup', 'Infinity pool', 'Clubhouse'],
    tags: ['Luxury', 'Elite Community', 'Hot Location'],
    rating: 4.8,
    featured: true,
    newLaunch: false,
    parking: '3 Covered Spaces'
  },
  {
    slug: 'whitefield-crest-residences',
    title: 'Whitefield Crest Residences',
    category: 'buy',
    type: 'Apartment',
    city: 'Bengaluru',
    locality: 'Whitefield',
    price: '₹1.85 Cr',
    budget: '₹1 Cr - ₹2 Cr',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,100 sqft',
    developer: 'Sterling Group',
    status: 'New Launch',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Bespoke luxury sky-condo overlooking clean layouts in Whitefield. Modern fittings, full amenities and rapid access to major IT tech parks.',
    amenities: ['Gymnasium', 'Sports court', 'Jogging track', 'Rooftop Lounge'],
    tags: ['New Launch', 'Modern Condo', 'Near Tech Parks'],
    rating: 4.7,
    featured: false,
    newLaunch: true,
    parking: '2 Covered Spots'
  },
  {
    slug: 'lake-view-sanctuary-villa',
    title: 'Lake View Sanctuary Villa',
    category: 'buy',
    type: 'Villa',
    city: 'Mysuru',
    locality: 'Lalitha Mahal',
    price: '₹2.95 Cr',
    budget: '₹2 Cr+',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,200 sqft',
    developer: 'Hari Properties',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Serene lakeside living with unobstructed views of water bodies near Lalitha Mahal Palace. Features fully custom timber design and private deck.',
    amenities: ['Lake view deck', 'Billiards room', 'Automated security', 'Solar grid'],
    tags: ['Lakeside', 'Bespoke Villa', 'High Contrast'],
    rating: 4.9,
    featured: true,
    newLaunch: false,
    parking: '2 Garages'
  },
  {
    slug: 'vijayanagar-independent-manor',
    title: 'Vijayanagar Independent Manor',
    category: 'buy',
    type: 'Villa',
    city: 'Mysuru',
    locality: 'Vijayanagar',
    price: '₹1.45 Cr',
    budget: '₹1 Cr - ₹2 Cr',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,400 sqft',
    developer: 'Legacy Builders',
    status: 'Best Value',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An elegant independent house built with pure teakwood doors, expansive balconies, and independent water connections in prime Vijayanagar.',
    amenities: ['Rainwater harvesting', 'Modular kitchen', 'Italian marble', 'Private well'],
    tags: ['Independent House', 'Best Value', 'Teakwood Finishes'],
    rating: 4.6,
    featured: false,
    newLaunch: false,
    parking: '1 Port'
  },
  {
    slug: 'coorg-foothills-farmhouse',
    title: 'Coorg Foothills Farmhouse',
    category: 'buy',
    type: 'Villa',
    city: 'Mysuru',
    locality: 'Hunsur Road',
    price: '₹2.40 Cr',
    budget: '₹2 Cr+',
    bedrooms: 2,
    bathrooms: 2,
    area: '5,500 sqft',
    developer: 'Green Meadows Advisory',
    status: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A quiet resort-style farm investment located along the highway, featuring organic mango plantations, and customized premium design.',
    amenities: ['Organic farms', 'Fenced acreage', 'Concierge caretaker', 'Guest cottages'],
    tags: ['Farmhouse', 'Investment', 'Nature Retreat'],
    rating: 4.8,
    featured: true,
    newLaunch: false,
    parking: '5+ Spaces'
  },
  {
    slug: 'mandya-garden-homes',
    title: 'Mandya Garden Homes',
    category: 'buy',
    type: 'Villa',
    city: 'Mandya',
    locality: 'Mangalore Road',
    price: '₹1.75 Cr',
    budget: '₹1 Cr - ₹2 Cr',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,150 sqft',
    developer: 'Golden Horizons',
    status: 'New Launch',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Beautiful garden-facing villas designed for family living, with premium finishes and private outdoor spaces.',
    amenities: ['Garden', 'Gym', 'Secured entrance', 'Visitor parking'],
    tags: ['Family', 'New launch', 'Value'],
    rating: 4.5,
    featured: false,
    newLaunch: true,
    parking: '2 Covered'
  },

  // ==================== RENT CATEGORY (6 listings) ====================
  {
    slug: 'royal-pearl-apartments',
    title: 'Royal Pearl Furnished Flat',
    category: 'rent',
    type: 'Apartment',
    city: 'Bengaluru',
    locality: 'Whitefield',
    price: '₹95,000 / mo',
    budget: '₹30,000 - ₹1 Lakh / mo',
    bedrooms: 3,
    bathrooms: 3,
    area: '1,650 sqft',
    developer: 'Premium Living Estates',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designer fully-furnished rental residences with custom layout, imported furnishings, and high-speed Wi-Fi included in Whitefield.',
    amenities: ['Gym', 'Concierge Service', 'High-speed Wi-Fi', '24/7 Security'],
    tags: ['Fully Furnished', 'Immediate Availability', 'Concierge Support'],
    rating: 4.8,
    featured: true,
    newLaunch: false,
    deposit: '₹3.0 Lakhs',
    furnishing: 'Fully Furnished',
    availableFrom: 'Immediate',
    parking: '2 Dedicated'
  },
  {
    slug: 'corporate-executive-suite',
    title: 'Corporate Executive Suite',
    category: 'rent',
    type: 'Apartment',
    city: 'Bengaluru',
    locality: 'Indiranagar',
    price: '₹1,20,000 / mo',
    budget: '₹1 Lakh+ / mo',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,400 sqft',
    developer: 'Premium Living Estates',
    status: 'Premium',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ultra-premium fully-furnished business suite situated in the high-street of Indiranagar. Tailored for corporate relocations and expatriates.',
    amenities: ['Weekly Cleaning', 'Private Server Rack', 'Rooftop Patio', 'Dry Cleaning'],
    tags: ['Corporate Rental', 'Luxury Suite', 'Top Area'],
    rating: 4.9,
    featured: true,
    newLaunch: false,
    deposit: '₹4.0 Lakhs',
    furnishing: 'Fully Furnished',
    availableFrom: 'Immediate',
    parking: '1 Covered'
  },
  {
    slug: 'hebbal-lakeside-villa-rent',
    title: 'Hebbal Lakeside Family Villa',
    category: 'rent',
    type: 'Villa',
    city: 'Bengaluru',
    locality: 'Hebbal',
    price: '₹2,50,000 / mo',
    budget: '₹1 Lakh+ / mo',
    bedrooms: 4,
    bathrooms: 4,
    area: '4,200 sqft',
    developer: 'Elite Living Advisory',
    status: 'Featured',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An expansive lakeside rental villa featuring multi-layered garden lawns, separate staff quarters, and comprehensive visual security.',
    amenities: ['Jacuzzi', 'Lawn gardens', 'Servant room', 'CCTV monitoring'],
    tags: ['Luxury Villa', 'Lakeside Hebbal', 'High Value'],
    rating: 4.9,
    featured: true,
    newLaunch: false,
    deposit: '₹8.0 Lakhs',
    furnishing: 'Semi-Furnished',
    availableFrom: '1st July 2026',
    parking: '3 Spaces'
  },
  {
    slug: 'gokulam-luxury-studio',
    title: 'Gokulam Luxury Studio',
    category: 'rent',
    type: 'Apartment',
    city: 'Mysuru',
    locality: 'Gokulam',
    price: '₹28,000 / mo',
    budget: 'Under ₹30,000 / mo',
    bedrooms: 1,
    bathrooms: 1,
    area: '550 sqft',
    developer: 'Cozy Living Residences',
    status: 'Best Value',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Charming, designer studio apartment with contemporary finishes. Fully equipped with kitchen amenities, smart TV, and split air conditioning.',
    amenities: ['Smart home system', 'Elevator access', 'Rooftop gym', 'AC unit'],
    tags: ['Studio flat', 'Best Value', 'Immediate availability'],
    rating: 4.6,
    featured: false,
    newLaunch: false,
    deposit: '₹80,000',
    furnishing: 'Fully Furnished',
    availableFrom: 'Immediate',
    parking: '1 Spot'
  },
  {
    slug: 'whitefield-skyline-suite',
    title: 'Whitefield Skyline Suite',
    category: 'rent',
    type: 'Apartment',
    city: 'Bengaluru',
    locality: 'Whitefield',
    price: '₹85,000 / mo',
    budget: '₹30,000 - ₹1 Lakh / mo',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,150 sqft',
    developer: 'Sterling Group',
    status: 'New Listing',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A beautiful executive apartment overlooking Bengaluru skyline. Features customized timber detailing, modern modular layouts and gas pipeline.',
    amenities: ['Gas pipeline', 'Balcony', '24/7 Power', 'Children park'],
    tags: ['Skyline Views', 'Brand New Listing', 'Whitefield IT'],
    rating: 4.7,
    featured: false,
    newLaunch: true,
    deposit: '₹2.5 Lakhs',
    furnishing: 'Semi-Furnished',
    availableFrom: 'Immediate',
    parking: '1 Covered'
  },
  {
    slug: 'chamundi-hills-residency',
    title: 'Chamundi Foothills Serviced Villa',
    category: 'rent',
    type: 'Villa',
    city: 'Mysuru',
    locality: 'Chamundi Hill Road',
    price: '₹1,50,000 / mo',
    budget: '1 Lakh+ / mo',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,500 sqft',
    developer: 'Hari Properties',
    status: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Sleek luxury serviced villa near the base of Chamundi Hills. Features high-speed Wi-Fi, premium appliances, concierge check-in and power backup.',
    amenities: ['Housekeeping', 'Scenic views', 'High-speed Wi-Fi', 'Solar Backup'],
    tags: ['Serviced Villa', 'Hill views', 'Luxury stay'],
    rating: 4.8,
    featured: false,
    newLaunch: false,
    deposit: '₹4.0 Lakhs',
    furnishing: 'Fully Furnished',
    availableFrom: '15th June 2026',
    parking: '2 Covered'
  },

  // ==================== COMMERCIAL CATEGORY (6 listings) ====================
  {
    slug: 'emerald-business-park',
    title: 'Emerald Business Park Space',
    category: 'commercial',
    type: 'Office Space',
    city: 'Bengaluru',
    locality: 'Outer Ring Road',
    price: '₹4.5 Lakhs / mo',
    budget: '₹2 Cr+',
    bedrooms: 0,
    bathrooms: 4,
    area: '5,200 sqft',
    developer: 'Sterling Commercials',
    status: 'Featured',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A premium office destination with modern architecture, executive lounges, private fiber, and flexible floor plates for growing businesses.',
    amenities: ['Conference suites', 'Cafeteria', 'High-speed internet', 'Reception services'],
    tags: ['Corporate Office', 'Grade A Building', 'Outer Ring Road'],
    rating: 4.8,
    featured: true,
    newLaunch: false,
    deposit: '₹25 Lakhs',
    yield: '8.7% Yield',
    zoning: 'IT/ITeS Office',
    parking: '10 Spots'
  },
  {
    slug: 'prestige-retail-showroom',
    title: 'Prestige High-Street Retail',
    category: 'commercial',
    type: 'Showroom',
    city: 'Bengaluru',
    locality: 'MG Road',
    price: '₹8.5 Lakhs / mo',
    budget: '₹2 Cr+',
    bedrooms: 0,
    bathrooms: 2,
    area: '3,500 sqft',
    developer: 'Prestige Group',
    status: 'Premium',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0db9a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0db9a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Highly visible double-height premium retail showroom on high-footfall MG Road corner. Double facade glazing and private brand display panel.',
    amenities: ['Double height display', 'Pantry Room', 'Heavy Power Load', 'Central AC'],
    tags: ['Retail Showroom', 'High-Street MG Road', 'Premium Visibility'],
    rating: 4.9,
    featured: true,
    newLaunch: false,
    deposit: '₹50 Lakhs',
    yield: '9.2% Yield',
    zoning: 'Commercial Retail',
    parking: '4 Dedicated'
  },
  {
    slug: 'whitefield-tech-tower',
    title: 'Whitefield Tech Tower Suite',
    category: 'commercial',
    type: 'Office Space',
    city: 'Bengaluru',
    locality: 'Whitefield',
    price: '₹6.2 Lakhs / mo',
    budget: '₹2 Cr+',
    bedrooms: 0,
    bathrooms: 6,
    area: '8,800 sqft',
    developer: 'Sterling Group',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A massive corporate office floor equipped with customized seating layouts, private meeting rooms, executive boardrooms, and full RERA compliance.',
    amenities: ['Central Server Rooms', 'Lounge area', 'High speed elevators', 'Central Air'],
    tags: ['Tech Park Office', 'Verified Layout', 'Corporate Space'],
    rating: 4.7,
    featured: false,
    newLaunch: false,
    deposit: '₹40 Lakhs',
    yield: '8.5% Yield',
    zoning: 'Commercial Office',
    parking: '15 Spots'
  },
  {
    slug: 'huddle-space-kuvempunagar',
    title: 'Huddle Premium Co-Working',
    category: 'commercial',
    type: 'Office Space',
    city: 'Mysuru',
    locality: 'Kuvempunagar',
    price: '₹2.2 Lakhs / mo',
    budget: '₹1 Cr - ₹2 Cr',
    bedrooms: 0,
    bathrooms: 3,
    area: '2,800 sqft',
    developer: 'Sterling Commercials',
    status: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Fully plug-and-play modern co-working layout in the premium office hub of Kuvempunagar. Equipped with 60 workstations and 3 conference rooms.',
    amenities: ['60 workstations', 'Fiber Wi-Fi', 'Cafeteria', 'Biometric Security'],
    tags: ['Co-Working Space', 'Premium Location', 'Plug and Play'],
    rating: 4.7,
    featured: false,
    newLaunch: false,
    deposit: '₹12 Lakhs',
    yield: '7.9% Yield',
    zoning: 'Commercial Office',
    parking: '6 spots'
  },
  {
    slug: 'nanjangud-industrial-warehouse',
    title: 'Nanjangud Logistics Warehouse',
    category: 'commercial',
    type: 'Warehouse',
    city: 'Mysuru',
    locality: 'Nanjangud',
    price: '₹3.8 Lakhs / mo',
    budget: '₹2 Cr+',
    bedrooms: 0,
    bathrooms: 2,
    area: '18,500 sqft',
    developer: 'Industrial Space Advisory',
    status: 'Best Value',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Heavy logistics industrial warehouse. Height clearance of 35 feet, heavy concrete floor load capacity, double loading docks and security cabin.',
    amenities: ['Double Loading Docks', '35ft Height Clearance', '3-Phase heavy power', 'CCTV'],
    tags: ['Industrial warehouse', 'Logistics Center', 'Best Value Area'],
    rating: 4.6,
    featured: false,
    newLaunch: false,
    deposit: '₹20 Lakhs',
    yield: '10.1% Yield',
    zoning: 'Industrial Warehouse',
    parking: 'Ample Truck Spaces'
  },
  {
    slug: 'jayalakshmipuram-business-center',
    title: 'Jayalakshmipuram Business Center',
    category: 'commercial',
    type: 'Showroom',
    city: 'Mysuru',
    locality: 'Jayalakshmipuram',
    price: '₹12.5 Lakhs / mo',
    budget: '₹2 Cr+',
    bedrooms: 0,
    bathrooms: 8,
    area: '14,200 sqft',
    developer: 'Sterling Commercials',
    status: 'Featured',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An entire premium commercial building block on high-visibility corridor in Jayalakshmipuram. Perfect for elite banking institutions, IT offices, or retail anchors.',
    amenities: ['12 covered parkings', 'High capacity lift', 'Fire suppression', 'Backup generator'],
    tags: ['Whole Building', 'Featured Asset', 'Jayalakshmipuram Hub'],
    rating: 4.8,
    featured: true,
    newLaunch: false,
    deposit: '₹75 Lakhs',
    yield: '9.5% Yield',
    zoning: 'Commercial Building',
    parking: '12 Spaces'
  },

  // ==================== PG CATEGORY (6 listings) ====================
  {
    slug: 'sunrise-boys-executive-pg',
    title: 'Sunrise Boys Executive PG',
    category: 'pg',
    type: 'PG Room',
    city: 'Mysuru',
    locality: 'Kuvempunagar',
    price: '₹8,500 / mo',
    budget: 'Under ₹10,000 / mo (PG)',
    bedrooms: 1,
    bathrooms: 1,
    area: '250 sqft',
    developer: 'Comfort Stay Co.',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-155854816-80dc1221a5de?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-155854816-80dc1221a5de?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Premium executive boys PG. Offers 3 healthy home-cooked meals daily, high-speed fiber Wi-Fi, professional laundry, and 24/7 security wardens.',
    amenities: ['Home Cooked Meals', 'Fiber Wi-Fi', 'Regular Laundry', 'CCTV Security'],
    tags: ['Boys PG', 'Meals Included', 'Kuvempunagar'],
    rating: 4.7,
    featured: false,
    newLaunch: false,
    deposit: '₹15,000',
    furnishing: 'Fully Furnished',
    foodIncluded: true,
    wifi: true,
    laundry: true,
    security: '24/7 CCTV & Warden'
  },
  {
    slug: 'flora-girls-luxury-stay',
    title: 'Flora Girls Luxury Stay',
    category: 'pg',
    type: 'PG Room',
    city: 'Bengaluru',
    locality: 'Whitefield',
    price: '₹12,500 / mo',
    budget: '₹30,000 - ₹1 Lakh / mo', // PG falls into rent ranges sometimes
    bedrooms: 1,
    bathrooms: 1,
    area: '280 sqft',
    developer: 'Comfort Stay Co.',
    status: 'Premium',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'High-end fully-furnished girls luxury co-living PG. Offers biometric security access, premium beds, dedicated reading desks, and high quality catering.',
    amenities: ['Biometric Access', '3 meals + snacks', 'Housekeeping', 'Ironing room'],
    tags: ['Girls PG', 'Luxury Co-Living', 'Sarjapur & Whitefield'],
    rating: 4.8,
    featured: true,
    newLaunch: false,
    deposit: '₹20,000',
    furnishing: 'Fully Furnished',
    foodIncluded: true,
    wifi: true,
    laundry: true,
    security: 'Biometric & 24/7 Security Guards'
  },
  {
    slug: 'elite-co-living-executive-pg',
    title: 'Elite Co-Living Executive PG',
    category: 'pg',
    type: 'PG Room',
    city: 'Bengaluru',
    locality: 'Indiranagar',
    price: '₹16,000 / mo',
    budget: '₹30,000 - ₹1 Lakh / mo',
    bedrooms: 1,
    bathrooms: 1,
    area: '320 sqft',
    developer: 'Elite Stays',
    status: 'Featured',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Elite co-living space tailored for working IT professionals in Indiranagar. Equipped with smart card access, executive dining lounges, and dedicated laundry.',
    amenities: ['Dining lounge', 'Dedicated laundry', 'Smart TV in rooms', 'AC rooms available'],
    tags: ['Co-Living PG', 'Featured PG', 'Indiranagar Core'],
    rating: 4.9,
    featured: true,
    newLaunch: false,
    deposit: '₹30,000',
    furnishing: 'Fully Furnished',
    foodIncluded: true,
    wifi: true,
    laundry: true,
    security: 'Access Card & CCTV'
  },
  {
    slug: 'nest-premium-luxury-pg',
    title: 'Nest Premium Luxury PG',
    category: 'pg',
    type: 'PG Room',
    city: 'Bengaluru',
    locality: 'Sarjapur Road',
    price: '₹18,000 / mo',
    budget: '₹30,000 - ₹1 Lakh / mo',
    bedrooms: 1,
    bathrooms: 1,
    area: '350 sqft',
    developer: 'Comfort Stay Co.',
    status: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Luxury hotel-style co-living rooms in Sarjapur Road. Premium catering, 24/7 biometric security, private attached restrooms, and daily room service.',
    amenities: ['Daily housekeeping', 'Buffet Dining', 'Rooftop Gym Access', 'Work lounge'],
    tags: ['Luxury PG', 'Hot Deal Stay', 'Sarjapur IT'],
    rating: 4.8,
    featured: false,
    newLaunch: false,
    deposit: '₹35,000',
    furnishing: 'Fully Furnished',
    foodIncluded: true,
    wifi: true,
    laundry: true,
    security: 'Biometric Security & Concierge'
  },
  {
    slug: 'scholars-hub-student-pg',
    title: 'Scholars Hub Student PG',
    category: 'pg',
    type: 'PG Room',
    city: 'Mysuru',
    locality: 'Hebbal',
    price: '₹6,800 / mo',
    budget: 'Under ₹10,000 / mo (PG)',
    bedrooms: 1,
    bathrooms: 1,
    area: '220 sqft',
    developer: 'Cozy Living Residences',
    status: 'Best Value',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Extremely affordable, secure, and clean student housing block in Hebbal. Homely environment, high-speed Wi-Fi, study lounges, and warden care.',
    amenities: ['Shared study room', 'Washing machines', 'CCTV surveillance', '2 meals daily'],
    tags: ['Student PG', 'Affordable Stay', 'Hebbal Mysuru'],
    rating: 4.5,
    featured: false,
    newLaunch: false,
    deposit: '₹10,000',
    furnishing: 'Fully Furnished',
    foodIncluded: true,
    wifi: true,
    laundry: true,
    security: 'Warden & CCTV'
  },
  {
    slug: 'aspire-co-living-spaces',
    title: 'Aspire Co-Living PG Stay',
    category: 'pg',
    type: 'PG Room',
    city: 'Bengaluru',
    locality: 'Outer Ring Road',
    price: '₹14,500 / mo',
    budget: '₹30,000 - ₹1 Lakh / mo',
    bedrooms: 1,
    bathrooms: 1,
    area: '300 sqft',
    developer: 'Comfort Stay Co.',
    status: 'New Listing',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'High-end shared co-living PG located along the Outer Ring Road technology belt. High-speed Wi-Fi, complete modular furniture, and 24/7 hot water.',
    amenities: ['24/7 hot water', 'Power Backup', 'Professional Laundry', 'Buffet dinner'],
    tags: ['Co-Living PG', 'New Listing Stay', 'Outer Ring Road'],
    rating: 4.6,
    featured: false,
    newLaunch: true,
    deposit: '₹25,000',
    furnishing: 'Fully Furnished',
    foodIncluded: true,
    wifi: true,
    laundry: true,
    security: '24/7 Security Guard'
  }
]

export const featuredProjects = properties.filter((property) => property.featured)
export const newLaunches = properties.filter((property) => property.newLaunch)
export const compareProperties = [properties[0], properties[1], properties[2]]

export const builders = [
  {
    name: 'Hari Properties',
    tagline: 'Local expertise, premium service',
    logo: '/assets/images/assets/ils_02.svg',
    description: 'Boutique real estate advisory across Mysuru, Bengaluru, Mandya and Hassan.',
  },
  {
    name: 'Premium Living Estates',
    tagline: 'Refined rental residences',
    logo: '/assets/images/assets/ils_03.png',
    description: 'Designed rental communities with high-end amenities and concierge support.',
  },
  {
    name: 'Sterling Commercials',
    tagline: 'Corporate workplaces for growth',
    logo: '/assets/images/assets/ils_01.svg',
    description: 'Strategic office spaces built for businesses seeking premium visibility and connectivity.',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Ananya Sharma',
    role: 'Homebuyer',
    location: 'Mysuru',
    quote: 'Hari Properties helped us find a beautiful family home with a smooth and transparent process. Their market insight made all the difference.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    name: 'Rahul Menon',
    role: 'Investor',
    location: 'Bengaluru',
    quote: 'The team advised us on a commercial property with strong growth potential and handled negotiations professionally.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    name: 'Priya Nair',
    role: 'Tenant',
    location: 'Mysuru',
    quote: 'I found a premium rental apartment quickly thanks to Hari Properties. Their service was responsive and reassuring.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
  },
]

export const companyStats: Stat[] = [
  { value: '120+', label: 'Properties sold' },
  { value: '95%', label: 'Client satisfaction' },
  { value: '10+', label: 'Years of experience' },
]

export const featuredLocations: Location[] = [
  {
    name: 'Mysuru',
    description: 'Premium residential, investment and commercial opportunities with strong local demand.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80',
    properties: '42',
  },
  {
    name: 'Bengaluru',
    description: 'High-growth technology and premium lifestyle properties in core neighbourhoods.',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    properties: '68',
  },
  {
    name: 'Mandya',
    description: 'Serene villas and long-term investment properties near Mysuru and major highways.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    properties: '18',
  },
  {
    name: 'Hassan',
    description: 'Emerging markets with attractive land and residential opportunities.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    properties: '24',
  },
]

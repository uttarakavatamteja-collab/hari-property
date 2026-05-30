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

export const propertyTypes = ['2 BHK', '3 BHK', 'Studio', 'Shop', 'Office', 'PG Room']
export const budgets = ['Under ₹50 L', '₹50 L - ₹1 Cr', '₹1 Cr - ₹2 Cr', '₹2 Cr+']

export const properties: Property[] = [
  {
    slug: 'mango-grove-villas',
    title: 'Mango Grove Villas',
    category: 'buy',
    type: '4 BHK Villa',
    city: 'Mysuru',
    locality: 'Narasimharaja',
    price: '₹3.2 Cr',
    budget: '₹2 Cr+',
    bedrooms: 4,
    bathrooms: 4,
    area: '2,800 sqft',
    developer: 'Hari Properties',
    status: 'Featured',
    image: '/assets/images/assets/screen_01.png',
    gallery: ['/assets/images/assets/screen_01.png', '/assets/images/assets/screen_11.png', '/assets/images/assets/screen_12.png'],
    description: 'Luxury villas with bespoke finishes, private terraces, landscaped gardens, and executive family living in Mysuru.',
    amenities: ['Private pool', 'Home theatre', 'Smart security', 'Landscaped garden'],
    tags: ['Premium', 'Gated community', 'Family living'],
    rating: 4.9,
    featured: true,
    newLaunch: false,
  },
  {
    slug: 'royal-pearl-apartments',
    title: 'Royal Pearl Apartments',
    category: 'rent',
    type: '3 BHK Apartment',
    city: 'Bengaluru',
    locality: 'Whitefield',
    price: '₹95,000 / month',
    budget: '₹50 L - ₹1 Cr',
    bedrooms: 3,
    bathrooms: 3,
    area: '1,650 sqft',
    developer: 'Premium Living Estates',
    status: 'New Launch',
    image: '/assets/images/assets/screen_05.jpg',
    gallery: ['/assets/images/assets/screen_05.jpg', '/assets/images/assets/screen_06.png', '/assets/images/assets/screen_07.png'],
    description: 'Designer rental residences with executive amenities, concierge service, and excellent connectivity in Whitefield.',
    amenities: ['Clubhouse', 'Gym', '24/7 security', 'Valet parking'],
    tags: ['Furnished', 'Executive', 'Premium service'],
    rating: 4.8,
    featured: true,
    newLaunch: true,
  },
  {
    slug: 'emerald-business-park',
    title: 'Emerald Business Park',
    category: 'commercial',
    type: 'Office Space',
    city: 'Bengaluru',
    locality: 'Outer Ring Road',
    price: '₹13,500 / sqft',
    budget: '₹2 Cr+',
    bedrooms: 0,
    bathrooms: 2,
    area: '5,200 sqft',
    developer: 'Sterling Commercials',
    status: 'Featured',
    image: '/assets/images/assets/screen_08.png',
    gallery: ['/assets/images/assets/screen_08.png', '/assets/images/assets/screen_09.png', '/assets/images/assets/screen_10.png'],
    description: 'A premium office destination with modern architecture, executive lounges and flexible floor plates for growing businesses.',
    amenities: ['Conference suites', 'Cafeteria', 'High-speed internet', 'Reception services'],
    tags: ['Corporate', 'Grade A', 'Investment'],
    rating: 4.7,
    featured: true,
    newLaunch: false,
  },
  {
    slug: 'royal-residence-pg',
    title: 'Royal Residence PG',
    category: 'pg',
    type: 'PG Room',
    city: 'Mysuru',
    locality: 'Kuvempunagar',
    price: '₹14,000 / month',
    budget: 'Under ₹50 L',
    bedrooms: 1,
    bathrooms: 1,
    area: '320 sqft',
    developer: 'Comfort Stay',
    status: 'Popular',
    image: '/assets/images/assets/screen_04.png',
    gallery: ['/assets/images/assets/screen_04.png', '/assets/images/assets/screen_03.jpg', '/assets/images/assets/screen_02.jpg'],
    description: 'Premium PG rooms with homely service, secure access, and convenient proximity to major campuses and commercial centers.',
    amenities: ['Wi-Fi', 'Laundry', 'Housekeeping', 'Study area'],
    tags: ['All-inclusive', 'Safe stay', 'Professional'],
    rating: 4.6,
    featured: false,
    newLaunch: false,
  },
  {
    slug: 'mandya-garden-homes',
    title: 'Mandya Garden Homes',
    category: 'buy',
    type: '3 BHK Villa',
    city: 'Mandya',
    locality: 'Mangalore Road',
    price: '₹1.75 Cr',
    budget: '₹1 Cr - ₹2 Cr',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,150 sqft',
    developer: 'Golden Horizons',
    status: 'New Launch',
    image: '/assets/images/assets/screen_12.png',
    gallery: ['/assets/images/assets/screen_12.png', '/assets/images/assets/screen_11.png', '/assets/images/assets/screen_01.png'],
    description: 'Beautiful garden-facing villas designed for family living, with premium finishes and private outdoor spaces.',
    amenities: ['Garden', 'Gym', 'Secured entrance', 'Visitor parking'],
    tags: ['Family', 'New launch', 'Value'],
    rating: 4.5,
    featured: false,
    newLaunch: true,
  },
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
    image: '/assets/images/assets/2.png',
  },
  {
    name: 'Rahul Menon',
    role: 'Investor',
    location: 'Bengaluru',
    quote: 'The team advised us on a commercial property with strong growth potential and handled negotiations professionally.',
    image: '/assets/images/assets/3.png',
  },
  {
    name: 'Priya Nair',
    role: 'Tenant',
    location: 'Mysuru',
    quote: 'I found a premium rental apartment quickly thanks to Hari Properties. Their service was responsive and reassuring.',
    image: '/assets/images/assets/screen_02.jpg',
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
    image: '/assets/images/assets/screen_03.jpg',
    properties: '42',
  },
  {
    name: 'Bengaluru',
    description: 'High-growth technology and premium lifestyle properties in core neighbourhoods.',
    image: '/assets/images/assets/screen_05.jpg',
    properties: '68',
  },
  {
    name: 'Mandya',
    description: 'Serene villas and long-term investment properties near Mysuru and major highways.',
    image: '/assets/images/assets/screen_12.png',
    properties: '18',
  },
  {
    name: 'Hassan',
    description: 'Emerging markets with attractive land and residential opportunities.',
    image: '/assets/images/assets/screen_08.png',
    properties: '24',
  },
]

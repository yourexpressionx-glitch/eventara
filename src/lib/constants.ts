/**
 * EVENTARA: Data Foundation for Programmatic SEO
 * Central repository for all locations and services
 */

export const LOCATIONS = [
  {
    slug: 'siliguri',
    name: 'Siliguri',
    display: 'Siliguri',
    elevation: '125m',
    coordinates: { lat: 26.7271, lng: 88.3953 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Siliguri',
    description: 'Gateway to Northeast India, bustling commercial hub',
    localTerm: 'Siliguri',
  },
  {
    slug: 'darjeeling',
    name: 'Darjeeling',
    display: 'Darjeeling',
    elevation: '2134m',
    coordinates: { lat: 27.043, lng: 88.2663 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Darjeeling',
    description: 'Queen of the Hills, destination wedding capital',
    localTerm: 'Darjeeling',
  },
  {
    slug: 'gangtok',
    name: 'Gangtok',
    display: 'Gangtok',
    elevation: '1680m',
    coordinates: { lat: 27.5330, lng: 88.6114 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Gangtok',
    description: 'Capital of Sikkim, growing luxury event destination',
    localTerm: 'Gangtok',
  },
  {
    slug: 'kalimpong',
    name: 'Kalimpong',
    display: 'Kalimpong',
    elevation: '1250m',
    coordinates: { lat: 27.0820, lng: 88.4720 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Kalimpong',
    description: 'Heritage town with colonial charm and scenic venues',
    localTerm: 'Kalimpong',
  },
  {
    slug: 'kurseong',
    name: 'Kurseong',
    display: 'Kurseong',
    elevation: '1463m',
    coordinates: { lat: 26.8867, lng: 88.2897 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Kurseong',
    description: 'Tea garden town with exclusive boutique venues',
    localTerm: 'Kurseong',
  },
  {
    slug: 'bagdogra',
    name: 'Bagdogra',
    display: 'Bagdogra',
    elevation: '120m',
    coordinates: { lat: 26.6819, lng: 88.3136 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Bagdogra',
    description: 'Major airport hub, corporate event center',
    localTerm: 'Bagdogra',
  },
  {
    slug: 'mirik',
    name: 'Mirik',
    display: 'Mirik',
    elevation: '1768m',
    coordinates: { lat: 27.0533, lng: 88.3317 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Mirik',
    description: 'Serene hill station with lakeside event venues',
    localTerm: 'Mirik',
  },
  {
    slug: 'siliguri-bypass',
    name: 'Siliguri Bypass',
    display: 'Siliguri Bypass',
    elevation: '130m',
    coordinates: { lat: 26.7300, lng: 88.4100 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Siliguri',
    description: 'Emerging commercial corridor in Siliguri',
    localTerm: 'Siliguri Bypass',
  },
  {
    slug: 'new-jalpaiguri',
    name: 'New Jalpaiguri',
    display: 'New Jalpaiguri',
    elevation: '126m',
    coordinates: { lat: 26.7614, lng: 88.3169 },
    wikiUrl: 'https://en.wikipedia.org/wiki/New_Jalpaiguri',
    description: 'Major railway junction, growing event hub',
    localTerm: 'NJP / New Jalpaiguri',
  },
  {
    slug: 'rungti',
    name: 'Rungti',
    display: 'Rungti',
    elevation: '1300m',
    coordinates: { lat: 27.1200, lng: 88.2800 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Darjeeling_district',
    description: 'Scenic valley location for destination events',
    localTerm: 'Rungti',
  },
  {
    slug: 'teesta-view',
    name: 'Teesta View',
    display: 'Teesta View',
    elevation: '1100m',
    coordinates: { lat: 27.0900, lng: 88.3100 },
    wikiUrl: 'https://en.wikipedia.org/wiki/Darjeeling',
    description: 'Riverside event destination with scenic backdrops',
    localTerm: 'Teesta View',
  },
];

export const SERVICES = [
  // CORE SERVICES
  {
    slug: 'wedding-planner',
    name: 'Wedding Planner',
    category: 'core',
    display: 'Wedding Planning & Management',
    description: 'Full-service destination wedding planning from concept to celebration',
    keywords: ['wedding', 'marriage', 'engagement', 'bridal', 'groom'],
    vernacular: ['Shaadi Planner', 'Vivah Vibhag'],
  },
  {
    slug: 'corporate-events',
    name: 'Corporate Events',
    category: 'core',
    display: 'Corporate Event Management',
    description: 'Executive conferences, product launches, and team retreats',
    keywords: ['corporate', 'conference', 'summit', 'business event', 'retreat'],
    vernacular: ['Vyavasay Anushthan'],
  },
  {
    slug: 'destination-management',
    name: 'Destination Management',
    category: 'core',
    display: 'Destination Management & Logistics',
    description: 'Complete destination services including hotels, travel, and experiences',
    keywords: ['destination', 'dmc', 'travel', 'accommodation', 'logistics'],
    vernacular: ['Gantavya Prabandhan'],
  },

  // VERNACULAR SERVICES (HIGH PRIORITY)
  {
    slug: 'pandal-decoration',
    name: 'Pandal Decoration',
    category: 'vernacular',
    display: 'Pandal Decoration & Design',
    vernacularDisplay: 'Pandal Wala',
    description: 'Custom pandal construction with waterproof structures and thematic décor',
    keywords: [
      'pandal',
      'pandal wala',
      'pandal decoration',
      'temporary structure',
      'event pandal',
      'shamiyana',
      'tent decoration',
    ],
    vernacular: ['Pandal Wala', 'Pandal Banane Wala'],
    highlights: [
      'Waterproof temporary structures',
      'Theme-based design',
      'Weather-resistant materials',
      'Custom lighting integration',
    ],
  },
  {
    slug: 'floral-decor',
    name: 'Floral Decor',
    category: 'vernacular',
    display: 'Floral Decoration & Styling',
    vernacularDisplay: 'Flower Wala',
    description: 'Luxury floral arrangements, backdrop designs, and botanical themes',
    keywords: [
      'floral',
      'flowers',
      'flower decoration',
      'flower wala',
      'floral design',
      'arrangement',
      'bouquet',
    ],
    vernacular: ['Phool Wala', 'Flower Wala'],
    highlights: [
      'Fresh seasonal flowers',
      'Luxury arrangements',
      'Backdrop design',
      'Bridal bouquets',
    ],
  },
  {
    slug: 'catering',
    name: 'Catering',
    category: 'vernacular',
    display: 'Gourmet Catering & Food Service',
    vernacularDisplay: 'Kulhar Tea & Catering',
    description: 'Multi-cuisine catering from traditional Kulhar tea to gourmet dinners',
    keywords: [
      'catering',
      'food service',
      'kulhar tea',
      'puchka',
      'street food',
      'dining',
      'menu',
    ],
    vernacular: ['Khana Wala', 'Kulhar Tea Wala', 'Puchka Stall'],
    highlights: [
      'Multi-cuisine expertise',
      'Street food stations',
      'Gourmet dining',
      'Dietary accommodations',
    ],
  },

  // TECH SERVICES
  {
    slug: 'dj-sound-system',
    name: 'DJ & Sound System',
    category: 'tech',
    display: 'DJ Services & Sound Management',
    description: 'Professional DJ services with state-of-the-art audio equipment',
    keywords: ['dj', 'music', 'sound', 'dj services', 'sound system', 'audio'],
    vernacular: ['DJ Wala', 'Sangeet'],
  },
  {
    slug: 'led-rental',
    name: 'LED Display Rental',
    category: 'tech',
    display: 'LED Walls & Display Rentals',
    description: 'High-definition LED walls for presentations and entertainment',
    keywords: [
      'led',
      'led wall',
      'display',
      'screen',
      'visual',
      'projection',
      'rental',
    ],
    vernacular: ['LED Sceen Wala'],
  },
  {
    slug: 'live-streaming',
    name: 'Live Streaming',
    category: 'tech',
    display: 'Live Streaming & Recording',
    description: 'Professional live streaming for hybrid and virtual events',
    keywords: ['live streaming', 'broadcast', 'video', 'recording', 'hybrid event'],
    vernacular: ['Live Streaming Wala'],
  },

  // ADDITIONAL SERVICES
  {
    slug: 'photography',
    name: 'Photography',
    category: 'additional',
    display: 'Professional Photography',
    description: 'Wedding and event photography with cinematic videography',
    keywords: ['photography', 'photo', 'video', 'filmmaker', 'cinematic'],
    vernacular: ['Photographer Wala'],
  },
  {
    slug: 'venue-rental',
    name: 'Venue Rental',
    category: 'additional',
    display: 'Luxury Venue Rentals',
    description: 'Premium indoor and outdoor venues across the Darjeeling region',
    keywords: ['venue', 'hall', 'resort', 'hotel', 'space', 'banquet'],
    vernacular: ['Sthal Kiraye Par'],
  },

  // SPECIALIZED SERVICES
  {
    slug: 'wedding-pandit',
    name: 'Wedding Pandit',
    category: 'specialized',
    display: 'Wedding Pandit & Ceremonies',
    description: 'Professional wedding pandit for Hindu ceremonies and rituals',
    keywords: ['pandit', 'wedding ceremony', 'rituals', 'priest', 'wedding'],
    vernacular: ['Vivah Pandit'],
  },
  {
    slug: 'special-effects',
    name: 'Special Effects',
    category: 'specialized',
    display: 'Special Effects & Pyrotechnics',
    description: 'Fireworks, pyrotechnics, and special effects for grand celebrations',
    keywords: ['special effects', 'fireworks', 'pyrotechnics', 'effects', 'celebration'],
    vernacular: ['Patakha Wala', 'Special Effects'],
  },
  {
    slug: 'dancers-artists',
    name: 'Dancers & Artists',
    category: 'specialized',
    display: 'Dancers, Artists & Performers',
    description: 'Professional dancers, singers, and performers for entertainment',
    keywords: ['dancer', 'artist', 'performer', 'entertainment', 'live performance'],
    vernacular: ['Nritya Kaar', 'Entertainer'],
  },
  {
    slug: 'anchor-host',
    name: 'Anchor Services',
    category: 'specialized',
    display: 'Event Anchor & Host Services',
    description: 'Professional event anchors and hosts for ceremonies and celebrations',
    keywords: ['anchor', 'host', 'compere', 'master of ceremonies', 'mc'],
    vernacular: ['Anchor Wala', 'Compere'],
  },
  {
    slug: 'choreography',
    name: 'Choreography',
    category: 'specialized',
    display: 'Dance Choreography & Training',
    description: 'Professional choreography for weddings and event performances',
    keywords: ['choreography', 'dance', 'training', 'dance teacher', 'performance'],
    vernacular: ['Nach Sikhane Wala', 'Dance Master'],
  },
  {
    slug: 'bridal-care',
    name: 'Bridal Care',
    category: 'specialized',
    display: 'Bridal Care & Grooming',
    description: 'Complete bridal care services including makeup, skincare, and styling',
    keywords: ['bridal', 'makeup', 'grooming', 'skincare', 'bride'],
    vernacular: ['Dulhan Ke Liye'],
  },
  {
    slug: 'wedding-stationery',
    name: 'Wedding Stationery',
    category: 'specialized',
    display: 'Designer Wedding Invitations',
    description: 'Custom designed and printed wedding invitations and stationery',
    keywords: ['invitation', 'stationery', 'cards', 'designer', 'printed'],
    vernacular: ['Nimantran Patra'],
  },
  {
    slug: 'wedding-pandit-ceremonies',
    name: 'Ceremony Direction',
    category: 'specialized',
    display: 'Sangeet & Ceremony Direction',
    description: 'Professional direction for Sangeet, Mehndi, and other wedding ceremonies',
    keywords: ['sangeet', 'mehndi', 'ceremony', 'direction', 'coordination'],
    vernacular: ['Sangeet Sanchalan'],
  },
  {
    slug: 'guest-accommodation',
    name: 'Guest Accommodation',
    category: 'specialized',
    display: 'Guest Accommodation Coordination',
    description: 'Hotel booking and guest accommodation management for events',
    keywords: ['accommodation', 'hotel', 'booking', 'guest', 'hospitality'],
    vernacular: ['Mehman Sudh', 'Hotel Booking'],
  },
  {
    slug: 'menu-planning',
    name: 'Menu Planning',
    category: 'specialized',
    display: 'Custom Menu Planning & Catering',
    description: 'Professional menu planning and customized catering solutions',
    keywords: ['menu', 'catering', 'food', 'cuisine', 'dining'],
    vernacular: ['Khana Plan', 'Chef Sahab'],
  },
  {
    slug: 'videography',
    name: 'Videography',
    category: 'specialized',
    display: 'Professional Videography & Editing',
    description: 'Cinematic wedding and event videography with professional editing',
    keywords: ['video', 'videography', 'editing', 'film', 'cinematic'],
    vernacular: ['Video Wala'],
  },
  {
    slug: 'destination-coordination',
    name: 'Destination Coordination',
    category: 'specialized',
    display: 'Travel & Destination Coordination',
    description: 'Complete travel logistics and destination management for destination events',
    keywords: ['destination', 'travel', 'logistics', 'coordination', 'management'],
    vernacular: ['Yatra Prabandhan'],
  },
  {
    slug: 'party-themes',
    name: 'Bachelor/Bachelorette Parties',
    category: 'specialized',
    display: 'Bachelor & Bachelorette Party Planning',
    description: 'Exciting bachelor and bachelorette party planning and coordination',
    keywords: ['bachelor', 'bachelorette', 'party', 'celebration', 'planning'],
    vernacular: ['Bachelor Party Planner'],
  },

  // LONG-TAIL & HIGH-INTENT KEYWORDS (SEO DOMINATION)
  {
    slug: 'best-wedding-planner',
    name: 'Best Wedding Planner',
    category: 'longtail',
    display: 'Best Wedding Planner Services',
    description: 'Award-winning wedding planner in Siliguri and Darjeeling region',
    keywords: ['best wedding planner', 'top wedding planner', 'luxury wedding planner', 'premium wedding'],
    vernacular: ['Sabse Accha Shaadi Planner'],
  },
  {
    slug: 'affordable-wedding-packages',
    name: 'Affordable Wedding Packages',
    category: 'longtail',
    display: 'Budget-Friendly Wedding Packages',
    description: 'Affordable wedding planning with premium quality services',
    keywords: ['affordable wedding', 'cheap wedding planner', 'wedding budget', 'economy wedding package'],
    vernacular: ['Sasta Shaadi'],
  },
  {
    slug: 'luxury-wedding-destination',
    name: 'Luxury Wedding Destination',
    category: 'longtail',
    display: 'Luxury Destination Wedding Services',
    description: 'Ultra-premium destination wedding experiences in hill stations',
    keywords: ['luxury wedding', 'premium wedding', 'high-end wedding', 'exclusive wedding'],
    vernacular: ['Shahi Shaadi'],
  },
  {
    slug: 'intimate-wedding-services',
    name: 'Intimate Wedding Services',
    category: 'longtail',
    display: 'Small & Intimate Wedding Planning',
    description: 'Specialized planning for intimate gatherings and small weddings',
    keywords: ['intimate wedding', 'small wedding', 'elopement', 'micro wedding'],
    vernacular: ['Chhota Shaadi'],
  },
  {
    slug: 'destination-wedding-planner',
    name: 'Destination Wedding Planner',
    category: 'longtail',
    display: 'Destination Wedding Planning Expert',
    description: 'Complete destination wedding management for destination lovers',
    keywords: ['destination wedding', 'destination wedding planner', 'hill wedding', 'resort wedding'],
    vernacular: ['Gantavya Shaadi'],
  },
  {
    slug: 'best-wedding-decorator',
    name: 'Best Wedding Decorator',
    category: 'longtail',
    display: 'Premium Wedding Decoration Services',
    description: 'Award-winning wedding decorator for stunning event spaces',
    keywords: ['best wedding decorator', 'top decorator', 'wedding decoration expert', 'theme decorator'],
    vernacular: ['Sabse Accha Decorator'],
  },
  {
    slug: 'pandal-wala-near-me',
    name: 'Pandal Wala Near Me',
    category: 'longtail',
    display: 'Local Pandal Decoration Services',
    description: 'Local pandal specialists available near your location',
    keywords: ['pandal wala near me', 'local decorator', 'nearby pandal', 'close by decoration'],
    vernacular: ['Mere Paas Pandal Wala'],
  },
  {
    slug: 'flower-decoration-expert',
    name: 'Flower Decoration Expert',
    category: 'longtail',
    display: 'Expert Floral Design Services',
    description: 'Expert floral designers for stunning flower arrangements',
    keywords: ['flower decoration expert', 'expert florist', 'floral arrangement', 'flower design'],
    vernacular: ['Phool Ka Kaam Karne Wala'],
  },
  {
    slug: 'wedding-photography-videography',
    name: 'Wedding Photography & Videography',
    category: 'longtail',
    display: 'Combined Photography & Videography',
    description: 'Professional combined photography and videography services',
    keywords: ['wedding photography videography', 'photo video combo', 'cinematic wedding', 'professional coverage'],
    vernacular: ['Photo Video Wala'],
  },
  {
    slug: 'dj-light-decoration-package',
    name: 'DJ Light & Decoration Package',
    category: 'longtail',
    display: 'DJ with Light Decoration Bundle',
    description: 'Complete DJ service combined with light decoration package',
    keywords: ['dj light decoration', 'dj with lights', 'sound and light', 'complete dj setup'],
    vernacular: ['DJ Aur Lights'],
  },
  {
    slug: 'corporate-event-management',
    name: 'Corporate Event Management',
    category: 'longtail',
    display: 'Professional Corporate Event Services',
    description: 'End-to-end corporate event management for businesses',
    keywords: ['corporate event', 'business event', 'corporate management', 'professional event'],
    vernacular: ['Vyavasay Samaroh'],
  },
  {
    slug: 'product-launch-event',
    name: 'Product Launch Event',
    category: 'longtail',
    display: 'Product Launch Management',
    description: 'Professional product launch event planning and execution',
    keywords: ['product launch', 'launch event', 'product launch planner', 'new product event'],
    vernacular: ['Naya Product Launches'],
  },
  {
    slug: 'conference-seminar-planning',
    name: 'Conference & Seminar Planning',
    category: 'longtail',
    display: 'Conference & Seminar Management',
    description: 'Professional conference and seminar organization',
    keywords: ['conference', 'seminar', 'workshop', 'conference planning', 'seminar management'],
    vernacular: ['Sammelan Aur Seminar'],
  },
  {
    slug: 'birthday-party-planner',
    name: 'Birthday Party Planner',
    category: 'longtail',
    display: 'Birthday Party Planning Services',
    description: 'Creative birthday party planning for all age groups',
    keywords: ['birthday party planner', 'birthday event', 'birthday celebration', 'party planning'],
    vernacular: ['Janmdin Ka Party'],
  },
  {
    slug: 'anniversary-celebration',
    name: 'Anniversary Celebration',
    category: 'longtail',
    display: 'Anniversary Party Planning',
    description: 'Romantic anniversary celebration planning and coordination',
    keywords: ['anniversary celebration', 'anniversary party', 'anniversary planner', 'romantic dinner'],
    vernacular: ['Varshikotam Parv'],
  },
  {
    slug: 'family-reunion-event',
    name: 'Family Reunion Event',
    category: 'longtail',
    display: 'Family Reunion Planning',
    description: 'Family reunion organization and coordination services',
    keywords: ['family reunion', 'family event', 'family gathering', 'reunion planning'],
    vernacular: ['Parivar Milan'],
  },
  {
    slug: 'engagement-ceremony-planner',
    name: 'Engagement Ceremony Planner',
    category: 'longtail',
    display: 'Engagement Ceremony Planning',
    description: 'Professional engagement ceremony planning and management',
    keywords: ['engagement', 'engagement ceremony', 'roka', 'commitment ceremony', 'engagement planner'],
    vernacular: ['Shagun Ke Ayyoji'],
  },
  {
    slug: 'mehndi-ceremony-specialist',
    name: 'Mehndi Ceremony Specialist',
    category: 'longtail',
    display: 'Mehndi Ceremony Management',
    description: 'Specialized mehndi ceremony planning with traditional touch',
    keywords: ['mehndi ceremony', 'mehndi event', 'mehndi planner', 'henna ceremony'],
    vernacular: ['Mehndi Ke Din Ka Karyakram'],
  },
  {
    slug: 'sangeet-ceremony-director',
    name: 'Sangeet Ceremony Director',
    category: 'longtail',
    display: 'Sangeet Ceremony Direction',
    description: 'Professional sangeet ceremony direction and coordination',
    keywords: ['sangeet ceremony', 'sangeet director', 'sangeet planner', 'music ceremony'],
    vernacular: ['Sangeet Ki Tyyari'],
  },
  {
    slug: 'baraat-management-service',
    name: 'Baraat Management Service',
    category: 'longtail',
    display: 'Baraat Planning & Management',
    description: 'Professional baraat management with theme and entertainment',
    keywords: ['baraat management', 'baraat planner', 'baraat ceremony', 'groom procession'],
    vernacular: ['Baraat Ki Tyyari'],
  },
  {
    slug: 'reception-planning-service',
    name: 'Reception Planning Service',
    category: 'longtail',
    display: 'Wedding Reception Planning',
    description: 'Complete wedding reception planning and execution',
    keywords: ['reception planning', 'wedding reception', 'reception event', 'reception management'],
    vernacular: ['Risepshan Ki Tyyari'],
  },
  {
    slug: 'honeymoon-coordination',
    name: 'Honeymoon Coordination',
    category: 'longtail',
    display: 'Honeymoon Planning & Coordination',
    description: 'Romantic honeymoon package coordination and management',
    keywords: ['honeymoon coordination', 'honeymoon planner', 'romantic getaway', 'honeymoon package'],
    vernacular: ['Suhaagraat Ki Tyyari'],
  },
  {
    slug: 'catering-service-premium',
    name: 'Premium Catering Service',
    category: 'longtail',
    display: 'Premium Catering & Dining',
    description: 'High-end catering with multi-cuisine expertise',
    keywords: ['premium catering', 'luxury catering', 'gourmet catering', 'fine dining'],
    vernacular: ['Sushil Khana Service'],
  },
  {
    slug: 'vegetarian-catering',
    name: 'Vegetarian Catering',
    category: 'longtail',
    display: 'Vegetarian Catering Services',
    description: 'Specialized vegetarian catering for all events',
    keywords: ['vegetarian catering', 'vegan catering', 'sattvic food', 'vegetarian menu'],
    vernacular: ['Shakahari Khana'],
  },
  {
    slug: 'non-vegetarian-catering',
    name: 'Non-Vegetarian Catering',
    category: 'longtail',
    display: 'Non-Vegetarian Catering Services',
    description: 'Specialized non-vegetarian catering with premium meats',
    keywords: ['non-vegetarian catering', 'meat catering', 'bbq catering', 'meat preparations'],
    vernacular: ['Maans Ke Pakwan'],
  },
  {
    slug: 'fusion-cuisine-catering',
    name: 'Fusion Cuisine Catering',
    category: 'longtail',
    display: 'Fusion Cuisine Catering',
    description: 'Modern fusion cuisine blending traditional and contemporary flavors',
    keywords: ['fusion cuisine', 'fusion catering', 'modern food', 'experimental cuisine'],
    vernacular: ['Naya Zaika'],
  },
  {
    slug: 'makeup-bridal-services',
    name: 'Bridal Makeup Services',
    category: 'longtail',
    display: 'Professional Bridal Makeup',
    description: 'Expert bridal makeup with HD and waterproof options',
    keywords: ['bridal makeup', 'bride makeup', 'wedding makeup', 'makeup artist'],
    vernacular: ['Dulhan Ka Makeup'],
  },
  {
    slug: 'groom-styling-service',
    name: 'Groom Styling Service',
    category: 'longtail',
    display: 'Professional Groom Styling',
    description: 'Complete groom grooming and styling services',
    keywords: ['groom styling', 'groom makeup', 'groom preparation', 'men grooming'],
    vernacular: ['Dulhe Ki Tayyari'],
  },
  {
    slug: 'guest-makeup-service',
    name: 'Guest Makeup Service',
    category: 'longtail',
    display: 'Guest Makeup & Styling',
    description: 'Professional makeup services for all wedding guests',
    keywords: ['guest makeup', 'party makeup', 'makeup service', 'makeup artist on demand'],
    vernacular: ['Mehmano Ke Liye Makeup'],
  },
  {
    slug: 'event-management-company',
    name: 'Event Management Company',
    category: 'longtail',
    display: 'Full-Service Event Management',
    description: 'Complete event management company for all types of events',
    keywords: ['event management company', 'event management', 'event organizer', 'event management services'],
    vernacular: ['Event Management Kampani'],
  },
];


/**
 * UTILITY: Generate all possible slug combinations
 * Used by generateStaticParams in [slug]/page.tsx
 */
export function generateAllSlugCombinations() {
  const combinations: string[] = [];

  SERVICES.forEach((service) => {
    LOCATIONS.forEach((location) => {
      // Format: service-slug-location-slug (e.g., wedding-planner-darjeeling)
      combinations.push(`${service.slug}-${location.slug}`);
    });
  });

  return combinations;
}

/**
 * UTILITY: Parse slug and extract service + location
 * Input: "wedding-planner-darjeeling"
 * Output: { service, location }
 */
export function parseSlug(slug: string) {
  // Find matching service by checking if slug starts with service slug
  const service = SERVICES.find(
    (s) => slug.startsWith(s.slug) && slug[s.slug.length] === '-'
  );

  if (!service) return null;

  // Extract location part
  const locationSlug = slug.substring(service.slug.length + 1);
  const location = LOCATIONS.find((l) => l.slug === locationSlug);

  if (!location) return null;

  return { service, location };
}

/**
 * UTILITY: Get WhatsApp message for service-location combo
 */
export function getWhatsAppMessage(service: typeof SERVICES[0], location: typeof LOCATIONS[0]) {
  const vernacularName = service.vernacularDisplay || service.display;
  return `Hi Eventara, I need ${vernacularName} services in ${location.name}. Please provide details and pricing.`;
}

/**
 * UTILITY: Get WhatsApp phone number (main business number)
 */
export const WHATSAPP_NUMBER = '919332345023';

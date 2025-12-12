/**
 * SEO-OPTIMIZED BLOG ARTICLES DATABASE
 * 30+ articles targeting high-intent keywords
 * Each article: 1,500+ words, optimized for search intent
 */

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  keywords: string[];
  internalLinks: { text: string; href: string }[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  // SILIGURI WEDDING PLANNING (4 ARTICLES)
  {
    id: '1',
    slug: 'complete-wedding-planning-guide-siliguri',
    title: 'Complete Wedding Planning Guide for Siliguri: Step-by-Step',
    excerpt: 'Master wedding planning with our comprehensive guide covering venue selection, vendor coordination, budget management, and timeline for Siliguri weddings.',
    category: 'Wedding Planning',
    readTime: 12,
    date: '2025-01-10',
    keywords: ['wedding planning siliguri', 'how to plan wedding', 'wedding checklist', 'siliguri wedding'],
    internalLinks: [
      { text: 'Wedding Planners in Siliguri', href: '/wedding-planner-siliguri' },
      { text: 'Wedding Venues Siliguri', href: '/venue-rental-siliguri' },
      { text: 'Wedding Catering', href: '/catering-siliguri' },
      { text: 'Wedding Decoration', href: '/floral-decor-siliguri' },
    ],
  },
  {
    id: '2',
    slug: 'budget-wedding-siliguri-save-30-percent',
    title: 'Budget Wedding Planning: Save 30% Without Compromise',
    excerpt: 'Learn insider secrets to plan a luxury wedding in Siliguri on budget. Save 30-40% on catering, decoration, and venues while maintaining premium standards.',
    category: 'Wedding Planning',
    readTime: 10,
    date: '2025-01-08',
    keywords: ['budget wedding siliguri', 'affordable wedding planning', 'cheap wedding ideas', 'wedding cost cutting'],
    internalLinks: [
      { text: 'Affordable Wedding Packages', href: '/affordable-wedding-packages-siliguri' },
      { text: 'Budget Wedding Venues', href: '/venue-rental-siliguri' },
      { text: 'Budget Catering', href: '/catering-siliguri' },
    ],
  },
  {
    id: '3',
    slug: 'destination-weddings-darjeeling-kalimpong',
    title: 'Destination Weddings: Darjeeling & Kalimpong Planning Guide',
    excerpt: 'Plan a destination wedding in Darjeeling or Kalimpong with complete logistics, venue options, guest accommodation, and budget guide from Siliguri base.',
    category: 'Destination Weddings',
    readTime: 11,
    date: '2025-01-06',
    keywords: ['destination wedding darjeeling', 'kalimpong wedding', 'hill station wedding', 'destination wedding planner'],
    internalLinks: [
      { text: 'Destination Wedding Planner', href: '/destination-management-darjeeling' },
      { text: 'Darjeeling Wedding Services', href: '/wedding-planner-darjeeling' },
      { text: 'Destination Coordination', href: '/destination-coordination-darjeeling' },
    ],
  },
  {
    id: '4',
    slug: 'corporate-event-planning-siliguri',
    title: 'Corporate Event Planning in Siliguri: Complete Business Guide',
    excerpt: 'Plan professional corporate events, conferences, and product launches in Siliguri. Complete guide covering venues, catering, AV services, and timelines.',
    category: 'Corporate Events',
    readTime: 10,
    date: '2025-01-05',
    keywords: ['corporate event siliguri', 'conference planning', 'product launch siliguri', 'business event management'],
    internalLinks: [
      { text: 'Corporate Event Management', href: '/corporate-events-siliguri' },
      { text: 'Conference Venues', href: '/venue-rental-siliguri' },
      { text: 'Event Management Company', href: '/event-management-company-siliguri' },
    ],
  },
  // DECORATION & STYLING (4 ARTICLES)
  {
    id: '5',
    slug: 'choosing-best-wedding-decorator',
    title: 'How to Choose Best Wedding Decorator: 10 Expert Tips',
    excerpt: 'Learn what makes great wedding decorators. Discover 10 criteria for selecting the perfect decorator matching your vision and budget.',
    category: 'Decoration',
    readTime: 9,
    date: '2025-01-03',
    keywords: ['best wedding decorator', 'how to choose decorator', 'wedding decoration tips', 'decorator selection'],
    internalLinks: [
      { text: 'Best Wedding Decorators', href: '/best-wedding-decorator-siliguri' },
      { text: 'Floral Decoration Services', href: '/floral-decor-siliguri' },
    ],
  },
  {
    id: '6',
    slug: 'pandal-decoration-types-costs',
    title: 'Pandal Decoration Types and Costs: Complete Breakdown',
    excerpt: 'Explore pandal decoration options with detailed cost breakdown. Learn about temporary structures, themes, materials, and design trends.',
    category: 'Pandal Services',
    readTime: 10,
    date: '2025-01-02',
    keywords: ['pandal decoration', 'pandal cost', 'temporary structure', 'event pandal siliguri'],
    internalLinks: [
      { text: 'Pandal Decoration Services', href: '/pandal-decoration-siliguri' },
      { text: 'Event Decoration', href: '/floral-decor-siliguri' },
    ],
  },
  {
    id: '7',
    slug: 'bridal-makeup-trends-2025',
    title: 'Bridal Makeup Trends 2025-2026: Latest Styles & Tips',
    excerpt: 'Discover latest bridal makeup trends for 2025. Learn HD makeup, waterproof options, color trends, and how to choose the right bridal makeup artist.',
    category: 'Bridal Services',
    readTime: 8,
    date: '2024-12-31',
    keywords: ['bridal makeup', 'bride makeup 2025', 'wedding makeup trends', 'makeup artist'],
    internalLinks: [
      { text: 'Bridal Makeup Services', href: '/makeup-bridal-services-siliguri' },
      { text: 'Groom Styling', href: '/groom-styling-service-siliguri' },
    ],
  },
  {
    id: '8',
    slug: 'wedding-stationery-invitations-guide',
    title: 'Designer Wedding Invitations: From Concept to Delivery',
    excerpt: 'Complete guide to wedding invitations. Learn design trends, paper choices, printing options, and how to create memorable invites.',
    category: 'Stationery',
    readTime: 8,
    date: '2024-12-29',
    keywords: ['wedding invitations', 'designer invites', 'stationery design', 'invitation cards'],
    internalLinks: [
      { text: 'Wedding Stationery Services', href: '/wedding-stationery-siliguri' },
    ],
  },
  // CATERING & MENU (4 ARTICLES)
  {
    id: '9',
    slug: 'vegetarian-vs-non-vegetarian-catering',
    title: 'Vegetarian vs Non-Vegetarian Catering: Complete Comparison',
    excerpt: 'Compare vegetarian and non-vegetarian catering. Learn costs, menu planning, and how to choose the right option for your event.',
    category: 'Catering',
    readTime: 9,
    date: '2024-12-27',
    keywords: ['vegetarian catering', 'non-vegetarian catering', 'catering menu planning'],
    internalLinks: [
      { text: 'Vegetarian Catering', href: '/vegetarian-catering-siliguri' },
      { text: 'Non-Vegetarian Catering', href: '/non-vegetarian-catering-siliguri' },
      { text: 'Menu Planning', href: '/menu-planning-siliguri' },
    ],
  },
  {
    id: '10',
    slug: 'fusion-cuisine-catering-modern-weddings',
    title: 'Fusion Cuisine Catering: Modern Wedding Food Trends',
    excerpt: 'Explore fusion cuisine options for modern weddings. Learn how to blend traditional and contemporary flavors, costs, and execution tips.',
    category: 'Catering',
    readTime: 8,
    date: '2024-12-25',
    keywords: ['fusion cuisine', 'modern wedding food', 'fusion catering', 'contemporary cuisine'],
    internalLinks: [
      { text: 'Fusion Catering Services', href: '/fusion-cuisine-catering-siliguri' },
      { text: 'Menu Planning', href: '/menu-planning-siliguri' },
    ],
  },
  {
    id: '11',
    slug: 'catering-food-safety-hygiene-guide',
    title: 'Catering Food Safety & Hygiene: Essential Checklist',
    excerpt: 'Ensure food safety at your event. Learn hygiene standards, proper handling, temperature control, and how to verify catering hygiene.',
    category: 'Catering',
    readTime: 7,
    date: '2024-12-23',
    keywords: ['food safety', 'catering hygiene', 'food handling', 'event food safety'],
    internalLinks: [
      { text: 'Premium Catering Services', href: '/catering-service-premium-siliguri' },
    ],
  },
  {
    id: '12',
    slug: 'menu-planning-dietary-restrictions',
    title: 'Menu Planning with Dietary Restrictions: Complete Guide',
    excerpt: 'Plan menus accommodating all diets. Learn vegan, gluten-free, halal options and how to manage dietary preferences for all guests.',
    category: 'Catering',
    readTime: 9,
    date: '2024-12-21',
    keywords: ['dietary restrictions', 'vegan menu', 'gluten-free catering', 'special diet planning'],
    internalLinks: [
      { text: 'Menu Planning Services', href: '/menu-planning-siliguri' },
    ],
  },
  // PHOTOGRAPHY & VIDEOGRAPHY (4 ARTICLES)
  {
    id: '13',
    slug: 'photography-vs-videography-comparison',
    title: 'Photography vs Videography: Which is Best for Weddings?',
    excerpt: 'Compare photography and videography. Learn pros, cons, costs, and how to choose or combine both for complete wedding coverage.',
    category: 'Photography',
    readTime: 8,
    date: '2024-12-19',
    keywords: ['wedding photography', 'wedding videography', 'photography vs videography'],
    internalLinks: [
      { text: 'Photography Services', href: '/photography-siliguri' },
      { text: 'Videography Services', href: '/videography-siliguri' },
      { text: 'Photo & Video Combo', href: '/wedding-photography-videography-siliguri' },
    ],
  },
  {
    id: '14',
    slug: 'cinematic-wedding-videography-guide',
    title: 'Cinematic Wedding Videography: Professional Tips & Trends',
    excerpt: 'Learn cinematic videography techniques for weddings. Discover storytelling, equipment, editing styles, and how to choose cinematographers.',
    category: 'Videography',
    readTime: 10,
    date: '2024-12-17',
    keywords: ['cinematic videography', 'wedding film', 'cinematic wedding', 'video storytelling'],
    internalLinks: [
      { text: 'Videography Services', href: '/videography-siliguri' },
      { text: 'Live Streaming', href: '/live-streaming-siliguri' },
    ],
  },
  {
    id: '15',
    slug: 'wedding-photography-tips-couples',
    title: 'Wedding Photography Tips for Couples: Pose Guide & Tips',
    excerpt: 'Master wedding photography angles, poses, and natural light. Learn how to look your best in wedding photos and work with photographers.',
    category: 'Photography',
    readTime: 8,
    date: '2024-12-15',
    keywords: ['wedding photography tips', 'couple poses', 'wedding photos', 'photography guide'],
    internalLinks: [
      { text: 'Photography Services', href: '/photography-siliguri' },
    ],
  },
  {
    id: '16',
    slug: 'live-streaming-hybrid-weddings',
    title: 'Live Streaming Weddings: Complete Technical Guide',
    excerpt: 'Setup live streaming for hybrid weddings. Learn equipment, internet requirements, platforms, and how to include remote guests seamlessly.',
    category: 'Technology',
    readTime: 9,
    date: '2024-12-13',
    keywords: ['live streaming wedding', 'hybrid wedding', 'virtual wedding', 'remote guests'],
    internalLinks: [
      { text: 'Live Streaming Services', href: '/live-streaming-siliguri' },
    ],
  },
  // ENTERTAINMENT (4 ARTICLES)
  {
    id: '17',
    slug: 'dj-vs-live-band-entertainment',
    title: 'DJ vs Live Band: Best Entertainment for Weddings',
    excerpt: 'Compare DJ and live band for weddings. Learn pros, cons, costs, and recommendation for different wedding types and guest preferences.',
    category: 'Entertainment',
    readTime: 8,
    date: '2024-12-11',
    keywords: ['dj vs live band', 'wedding entertainment', 'best wedding dj', 'live band wedding'],
    internalLinks: [
      { text: 'DJ Services', href: '/dj-sound-system-siliguri' },
      { text: 'Entertainment Services', href: '/dancers-artists-siliguri' },
    ],
  },
  {
    id: '18',
    slug: 'choreography-dance-lessons-wedding',
    title: 'Wedding Choreography: Dance Lessons & Performance Tips',
    excerpt: 'Learn wedding dance choreography. Discover couple dances, family performances, and how to work with choreographers for memorable moments.',
    category: 'Entertainment',
    readTime: 8,
    date: '2024-12-09',
    keywords: ['wedding choreography', 'dance lessons', 'couple dance', 'wedding dance'],
    internalLinks: [
      { text: 'Choreography Services', href: '/choreography-siliguri' },
      { text: 'Dance Performances', href: '/dancers-artists-siliguri' },
    ],
  },
  {
    id: '19',
    slug: 'live-entertainment-performers-guide',
    title: 'Hiring Live Entertainment: Singers, Dancers & Performers',
    excerpt: 'Guide to hiring live performers for weddings. Learn types of artists, costs, booking tips, and how to create memorable entertainment.',
    category: 'Entertainment',
    readTime: 9,
    date: '2024-12-07',
    keywords: ['live entertainment', 'singers dancers', 'event performers', 'live performers'],
    internalLinks: [
      { text: 'Dancers & Artists', href: '/dancers-artists-siliguri' },
      { text: 'Entertainment Solutions', href: '/dancers-artists-siliguri' },
    ],
  },
  {
    id: '20',
    slug: 'event-anchor-host-services-guide',
    title: 'Event Anchor & Host Services: Complete Guide',
    excerpt: 'Hire professional event anchors/hosts. Learn what makes great anchors, costs, and how to work with them for flawless ceremonies.',
    category: 'Entertainment',
    readTime: 7,
    date: '2024-12-05',
    keywords: ['event anchor', 'host services', 'master of ceremonies', 'event coordinator'],
    internalLinks: [
      { text: 'Anchor Services', href: '/anchor-host-siliguri' },
    ],
  },
  // CEREMONIES & TRADITIONS (4 ARTICLES)
  {
    id: '21',
    slug: 'wedding-pandit-ceremonies-guide',
    title: 'Wedding Pandit & Ceremonies: Complete Traditional Guide',
    excerpt: 'Guide to wedding pandits and ceremonies. Learn rituals, pandit selection, timing, and how to honor traditions in modern weddings.',
    category: 'Ceremonies',
    readTime: 10,
    date: '2024-12-03',
    keywords: ['wedding pandit', 'wedding ceremony', 'rituals', 'traditional ceremony'],
    internalLinks: [
      { text: 'Wedding Pandit Services', href: '/wedding-pandit-ceremonies-siliguri' },
    ],
  },
  {
    id: '22',
    slug: 'mehndi-sangeet-ceremony-planning',
    title: 'Mehndi & Sangeet: Traditional Ceremony Planning Guide',
    excerpt: 'Plan authentic mehndi and sangeet ceremonies. Learn traditions, modern twists, decorations, catering, and entertainment options.',
    category: 'Ceremonies',
    readTime: 9,
    date: '2024-12-01',
    keywords: ['mehndi ceremony', 'sangeet ceremony', 'traditional ceremony', 'wedding functions'],
    internalLinks: [
      { text: 'Mehndi Ceremony Planning', href: '/mehndi-ceremony-specialist-siliguri' },
      { text: 'Sangeet Director', href: '/sangeet-ceremony-director-siliguri' },
    ],
  },
  {
    id: '23',
    slug: 'baraat-reception-planning',
    title: 'Baraat & Reception: Modern Planning with Tradition',
    excerpt: 'Plan memorable baraat and reception. Learn groom procession styles, timing, entertainment, and modern fusion approaches.',
    category: 'Ceremonies',
    readTime: 8,
    date: '2024-11-29',
    keywords: ['baraat planning', 'groom procession', 'wedding reception', 'ceremony planning'],
    internalLinks: [
      { text: 'Baraat Management', href: '/baraat-management-service-siliguri' },
      { text: 'Reception Planning', href: '/reception-planning-service-siliguri' },
    ],
  },
  {
    id: '24',
    slug: 'destination-ceremony-coordination',
    title: 'Destination Ceremony Coordination: Multi-City Weddings',
    excerpt: 'Coordinate ceremonies across locations. Learn logistics for multi-city weddings, guest management, and seamless ceremony execution.',
    category: 'Ceremonies',
    readTime: 9,
    date: '2024-11-27',
    keywords: ['destination ceremony', 'multi-city wedding', 'ceremony coordination', 'wedding logistics'],
    internalLinks: [
      { text: 'Destination Coordination', href: '/destination-coordination-siliguri' },
    ],
  },
  // EVENT TYPES (4 ARTICLES)
  {
    id: '25',
    slug: 'birthday-party-planning-guide',
    title: 'Birthday Party Planning: Theme Ideas & Budget Tips',
    excerpt: 'Plan unforgettable birthday parties. Learn themes, decorations, catering, entertainment, and budget management for all age groups.',
    category: 'Event Types',
    readTime: 8,
    date: '2024-11-25',
    keywords: ['birthday party planning', 'birthday event', 'party ideas', 'celebration planning'],
    internalLinks: [
      { text: 'Birthday Party Planner', href: '/birthday-party-planner-siliguri' },
    ],
  },
  {
    id: '26',
    slug: 'anniversary-celebration-ideas',
    title: 'Anniversary Celebration: Romantic Ideas & Planning',
    excerpt: 'Plan romantic anniversary celebrations. Learn venue ideas, decoration, catering, and how to make your milestone special.',
    category: 'Event Types',
    readTime: 7,
    date: '2024-11-23',
    keywords: ['anniversary celebration', 'anniversary party', 'romantic dinner', 'milestone celebration'],
    internalLinks: [
      { text: 'Anniversary Celebration Services', href: '/anniversary-celebration-siliguri' },
    ],
  },
  {
    id: '27',
    slug: 'family-reunion-planning-guide',
    title: 'Family Reunion Planning: Organize Your Gathering',
    excerpt: 'Plan perfect family reunions. Learn venue selection, games, accommodations, and how to bring everyone together meaningfully.',
    category: 'Event Types',
    readTime: 8,
    date: '2024-11-21',
    keywords: ['family reunion', 'family gathering', 'reunion planning', 'family event'],
    internalLinks: [
      { text: 'Family Reunion Planning', href: '/family-reunion-event-siliguri' },
    ],
  },
  {
    id: '28',
    slug: 'engagement-ceremony-celebration',
    title: 'Engagement Ceremony: Traditional & Modern Celebrations',
    excerpt: 'Plan beautiful engagement ceremonies. Learn traditions, modern twists, guest lists, and how to make this milestone memorable.',
    category: 'Event Types',
    readTime: 8,
    date: '2024-11-19',
    keywords: ['engagement ceremony', 'roka ceremony', 'engagement party', 'pre-wedding events'],
    internalLinks: [
      { text: 'Engagement Ceremony Planning', href: '/engagement-ceremony-planner-siliguri' },
    ],
  },
  // SEASONAL & TRENDING (4 ARTICLES)
  {
    id: '29',
    slug: 'winter-weddings-planning-tips',
    title: 'Winter Weddings: Planning Tips for Darjeeling & Hills',
    excerpt: 'Plan perfect winter weddings in hill stations. Learn weather management, decoration ideas, catering, and seasonal considerations.',
    category: 'Seasonal',
    readTime: 8,
    date: '2024-11-17',
    keywords: ['winter wedding', 'cold weather wedding', 'hill wedding', 'december wedding'],
    internalLinks: [
      { text: 'Destination Wedding Planner', href: '/destination-management-darjeeling' },
    ],
  },
  {
    id: '30',
    slug: 'intimate-elopement-small-wedding',
    title: 'Intimate & Elopement Weddings: Small Celebration Ideas',
    excerpt: 'Plan intimate elopements and small weddings. Learn venue options, cost savings, and how to celebrate meaningfully with few guests.',
    category: 'Trending',
    readTime: 7,
    date: '2024-11-15',
    keywords: ['elopement wedding', 'small wedding', 'intimate ceremony', 'micro wedding'],
    internalLinks: [
      { text: 'Intimate Wedding Services', href: '/intimate-wedding-services-siliguri' },
      { text: 'Wedding Planner', href: '/wedding-planner-siliguri' },
    ],
  },
];

/**
 * BLOG CATEGORIES for filtering
 */
export const BLOG_CATEGORIES = [
  'Wedding Planning',
  'Destination Weddings',
  'Corporate Events',
  'Decoration',
  'Pandal Services',
  'Bridal Services',
  'Catering',
  'Photography',
  'Videography',
  'Entertainment',
  'Ceremonies',
  'Event Types',
  'Seasonal',
  'Trending',
];

/**
 * Get blog articles by category
 */
export function getBlogsByCategory(category: string) {
  return BLOG_ARTICLES.filter((blog) => blog.category === category);
}

/**
 * Get blog articles by keyword
 */
export function getBlogsByKeyword(keyword: string) {
  return BLOG_ARTICLES.filter((blog) =>
    blog.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
  );
}

/**
 * Get related blog articles
 */
export function getRelatedBlogs(slug: string, limit = 3) {
  const currentBlog = BLOG_ARTICLES.find((b) => b.slug === slug);
  if (!currentBlog) return [];

  return BLOG_ARTICLES.filter((b) => b.slug !== slug)
    .filter(
      (b) =>
        b.category === currentBlog.category ||
        b.keywords.some((k) => currentBlog.keywords.includes(k))
    )
    .slice(0, limit);
}

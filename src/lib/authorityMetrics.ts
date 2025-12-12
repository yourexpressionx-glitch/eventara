/**
 * AUTHORITY MONITORING UTILITY
 * Tracks internal link authority flow and SEO metrics
 */

export interface AuthorityMetrics {
  domainAuthority: number;
  pageAuthority: {
    [key: string]: number;
  };
  backlinks: {
    total: number;
    highAuthority: number;
    referralDomains: number;
  };
  rankings: {
    top10: number;
    top3: number;
    position1: number;
  };
  traffic: {
    monthlyVisitors: number;
    organicTraffic: number;
    conversionRate: number;
  };
}

/**
 * INTERNAL LINK ARCHITECTURE
 * Maps authority distribution across the site
 */
export const INTERNAL_LINK_ARCHITECTURE = {
  // Tier 0: Homepage (entry point for all external backlinks)
  homepage: {
    path: '/',
    estimatedPA: 35,
    outboundLinks: 30,
    targets: [
      'wedding-planner-siliguri',
      'event-planner-siliguri',
      'decoration-services-siliguri',
      'venue-booking-siliguri',
    ],
    description: 'Entry point for all authority, distributes to hub pages',
  },

  // Tier 1: Hub Pages (distribute to services)
  hubs: [
    {
      name: 'Wedding Planning Hub',
      path: '/wedding-planner-siliguri',
      estimatedPA: 42,
      outboundLinks: 50,
      category: 'wedding',
      description:
        'Primary hub for all wedding-related services across locations',
    },
    {
      name: 'Event Planning Hub',
      path: '/event-planner-siliguri',
      estimatedPA: 38,
      outboundLinks: 40,
      category: 'events',
      description: 'Primary hub for corporate and event planning',
    },
    {
      name: 'Decoration Services Hub',
      path: '/decoration-services-siliguri',
      estimatedPA: 35,
      outboundLinks: 40,
      category: 'decoration',
      description: 'Hub for all decoration and design services',
    },
    {
      name: 'Venue Booking Hub',
      path: '/venue-booking-siliguri',
      estimatedPA: 35,
      outboundLinks: 40,
      category: 'venues',
      description: 'Venue and venue management services hub',
    },
  ],

  // Tier 2: Service Pages (receive distributed authority)
  services: {
    totalPages: 672,
    estimatedPA: 28,
    averageInboundLinks: 5,
    averageOutboundLinks: 8,
    description:
      'Individual service pages for each service-location combination',
  },

  // Tier 3: Blog Pages (supporting content)
  blog: {
    totalPages: 30,
    estimatedPA: 30,
    outboundLinks: 7,
    description: 'Blog articles linking back to services',
  },
};

/**
 * AUTHORITY FLOW ALGORITHM
 *
 * How a single backlink multiplies through internal linking:
 *
 * 1 Backlink to Homepage (DA 70+)
 *   ↓
 * Homepage PA becomes 35+
 *   ↓
 * Homepage links to 4 hubs (120 links total)
 * Each hub receives 30/4 = 7.5 PA from homepage
 *   ↓
 * Hub PA becomes: 35/30 + 7.5 = ~8.67 PA per link
 *   ↓
 * Hub links to 50 services (200 links total)
 * Each service receives 8.67/50 = ~0.17 PA per service
 *   ↓
 * Service PA = 0.17 + existing authority = 25-30 PA
 *   ↓
 * Each service ranks for 1-2 keywords = +15-30 position boost
 *
 * RESULT: 1 external link = 50+ service pages ranking
 */

/**
 * Calculate authority distribution across link hierarchy
 */
export function calculateAuthorityFlow(
  externalBacklinks: number
) {
  // Simplified calculation
  const homepagePA = Math.min(externalBacklinks * 0.5, 50);
  const hubPA = homepagePA * 0.85; // 85% of homepage authority
  const servicePA = hubPA * 0.65; // 65% of hub authority

  return {
    homepagePA: Math.round(homepagePA * 10) / 10,
    hubPA: Math.round(hubPA * 10) / 10,
    servicePA: Math.round(servicePA * 10) / 10,
    estimatedKeywordsRanking: externalBacklinks * 10, // Rough estimate
    estimatedTop3Rankings: Math.round(externalBacklinks * 0.1),
  };
}

/**
 * Monthly tracking template
 */
export interface MonthlyReport {
  month: string;
  backlinksAcquired: number;
  highAuthorityLinks: number;
  pressReleases: number;
  guestPosts: number;
  partnerships: number;
  estimatedDAChange: number;
  estimatedTrafficGrowth: number;
  keywordsGainedPositions: number;
  top3KeywordsGained: number;
  notes: string;
}

/**
 * TRACKING CHECKLIST
 * What to monitor weekly/monthly
 */
export const AUTHORITY_TRACKING_CHECKLIST = {
  weekly: [
    'Check Ahrefs for new backlinks',
    'Log new backlinks in spreadsheet',
    'Monitor GSC for keyword ranking changes',
    'Review organic traffic trends',
    'Follow up on pending partnerships',
  ],
  monthly: [
    'Update Domain Authority (Ahrefs/Moz)',
    'Update Page Authority (hubs + services)',
    'Calculate DA change',
    'Document ROI metrics',
    'Review partnership performance',
    'Plan next month activities',
  ],
  quarterly: [
    'Deep dive competitor analysis',
    'Adjust strategy based on results',
    'Plan quarterly content calendar',
    'Review affiliate program performance',
    'Analyze traffic quality',
  ],
};

/**
 * EXPECTED GROWTH TRAJECTORY
 * Based on consistent link building
 */
export const GROWTH_PROJECTIONS = {
  month1: {
    backlinksTarget: 75,
    daTarget: 10.8,
    keywordsRanking: 50,
    traffic: 550,
    phase: 'Foundation',
  },
  month3: {
    backlinksTarget: 150,
    daTarget: 12.5,
    keywordsRanking: 150,
    traffic: 1200,
    phase: 'Growth',
  },
  month6: {
    backlinksTarget: 200,
    daTarget: 15,
    keywordsRanking: 300,
    traffic: 3500,
    phase: 'Acceleration',
  },
  month12: {
    backlinksTarget: 300,
    daTarget: 20,
    keywordsRanking: 600,
    traffic: 8000,
    phase: 'Domination',
  },
};

/**
 * Calculate estimated DA based on backlinks
 * (Simplified model - actual DA depends on link quality)
 */
export function estimateDA(
  baselineDA: number,
  backlinksCount: number,
  highAuthorityPercentage: number
) {
  const baseGrowth = backlinksCount * 0.01; // 1% per backlink baseline
  const qualityBonus = (backlinksCount * highAuthorityPercentage) * 0.02; // 2% per high-authority link
  return Math.min(baselineDA + baseGrowth + qualityBonus, 50); // Cap at 50 DA
}

/**
 * Calculate estimated keywords ranking
 * Based on DA, internal links, and competition
 */
export function estimateKeywordsRanking(
  da: number,
  internalLinksBuilt: number,
  competitionLevel: 'low' | 'medium' | 'high'
) {
  const baseKeywords = da * 20; // 20 keywords per DA point
  const linkBonus = internalLinksBuilt * 0.5; // 0.5 keywords per internal link
  const competitionMultiplier =
    competitionLevel === 'low' ? 1.5 : competitionLevel === 'medium' ? 1.0 : 0.6;

  return Math.round((baseKeywords + linkBonus) * competitionMultiplier);
}

/**
 * ROI Calculator
 */
export function calculateROI(
  monthlyVisitors: number,
  conversionRate: number,
  averageOrderValue: number,
  monthlyInvestment: number
) {
  const monthlyLeads = monthlyVisitors * (conversionRate / 100);
  const monthlyRevenue = monthlyLeads * averageOrderValue;
  const roi = ((monthlyRevenue - monthlyInvestment) / monthlyInvestment) * 100;

  return {
    monthlyLeads: Math.round(monthlyLeads),
    monthlyRevenue: Math.round(monthlyRevenue),
    roi: Math.round(roi),
    paybackMonths: monthlyInvestment / monthlyRevenue,
  };
}

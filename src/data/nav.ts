export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: string;
  desc?: string;
}

export interface NavGroup {
  id: string;
  label: string;
  icon: string;
  href: string;
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'nda-exam',
    label: 'NDA Exam',
    icon: 'Shield',
    href: '/what-is-nda',
    items: [
      { id: 'what-is-nda', label: 'What is NDA', icon: 'Info', href: '/what-is-nda', desc: 'Overview, history & wings' },
      { id: 'eligibility', label: 'Eligibility', icon: 'CheckCircle', href: '/eligibility', desc: 'Age, education & physical standards' },
      { id: 'exam-pattern', label: 'Exam Pattern', icon: 'FileText', href: '/exam-pattern', desc: 'Papers, marking & cutoffs' },
      { id: 'syllabus', label: 'Syllabus', icon: 'BookMarked', href: '/syllabus', desc: 'Topic-wise complete syllabus' },
      { id: 'previous-year-papers', label: 'Previous Year Papers', icon: 'Archive', href: '/previous-year-papers', badge: 'NEW', desc: 'PYQs 2019–2025' },
      { id: 'cutoff-analysis', label: 'Cutoff Analysis', icon: 'TrendingUp', href: '/cutoff-analysis', desc: 'Historical cutoff trends' },
    ],
  },
  {
    id: 'preparation',
    label: 'Preparation',
    icon: 'BookOpen',
    href: '/roadmap',
    items: [
      { id: 'roadmap', label: 'Study Roadmap', icon: 'Map', href: '/roadmap', desc: 'Class 10, 11, 12 & dropper plans' },
      { id: 'books', label: 'Books & Resources', icon: 'BookOpen', href: '/syllabus', desc: 'Best books subject-wise' },
      { id: 'current-affairs', label: 'Daily Current Affairs', icon: 'Newspaper', href: '/current-affairs', badge: 'DAILY', desc: 'Defence & GK updates' },
      { id: 'mock-tests', label: 'Mock Tests', icon: 'ClipboardCheck', href: '/mock-tests', badge: 'BETA', desc: 'Practice full-length tests' },
      { id: 'fitness', label: 'Fitness Tracker', icon: 'Activity', href: '/fitness', desc: 'PT & physical prep guide' },
    ],
  },
  {
    id: 'ssb',
    label: 'SSB',
    icon: 'Users',
    href: '/ssb',
    items: [
      { id: 'ssb-overview', label: 'SSB Overview', icon: 'Info', href: '/ssb', desc: '5-day selection process' },
      { id: 'screening', label: 'Screening', icon: 'Filter', href: '/ssb/screening', desc: 'OIR test & PPDT' },
      { id: 'psychology', label: 'Psychology Tests', icon: 'Brain', href: '/ssb/psychology', desc: 'TAT, WAT, SRT & SDT' },
      { id: 'gto', label: 'GTO Tasks', icon: 'Users', href: '/ssb/gto', desc: 'Group outdoor tasks' },
      { id: 'pi', label: 'Interview', icon: 'MessageSquare', href: '/ssb/personal-interview', desc: 'Personal interview prep' },
      { id: 'cpss', label: 'CPSS', icon: 'Plane', href: '/ssb/cpss', desc: 'Pilot aptitude battery' },
      { id: 'medical', label: 'Medical Examination', icon: 'Heart', href: '/medical', desc: 'Medical standards & prep' },
    ],
  },
  {
    id: 'career',
    label: 'Career',
    icon: 'Award',
    href: '/salary',
    items: [
      { id: 'salary', label: 'Salary & Perks', icon: 'IndianRupee', href: '/salary', desc: 'Complete pay breakdown' },
      { id: 'rank-structure', label: 'Rank Structure', icon: 'Award', href: '/rank-structure', desc: 'Army, Navy & Air Force' },
      { id: 'training', label: 'NDA Training Life', icon: 'Dumbbell', href: '/training', desc: '3-year academy life' },
      { id: 'success-stories', label: 'Success Stories', icon: 'Star', href: '/success-stories', desc: 'Real aspirant journeys' },
      { id: 'defence-news', label: 'Defence News', icon: 'Radio', href: '/defence-news', desc: 'Latest from the forces' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'Target',
    href: '/rank-predictor',
    items: [
      { id: 'rank-predictor', label: 'AIR Rank Predictor', icon: 'Target', href: '/rank-predictor', badge: 'LIVE', desc: 'Predict your rank with UPSC data' },
      { id: 'marks-calculator', label: 'Marks Calculator', icon: 'Calculator', href: '/rank-predictor', desc: 'Calculate your total score' },
      { id: 'eligibility-checker', label: 'Eligibility Checker', icon: 'CheckCircle', href: '/eligibility', desc: 'Quick eligibility check' },
      { id: 'cutoff-predictor', label: 'Cutoff Predictor', icon: 'BarChart2', href: '/cutoff-analysis', desc: 'Written cutoff estimator' },
      { id: 'branch-predictor', label: 'Branch Predictor', icon: 'GitBranch', href: '/rank-predictor', desc: 'Army / Navy / Air Force chances' },
    ],
  },
];

// Keep legacy NAV_ITEMS for backward compat
export interface NavItem2 {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: string;
  children?: NavItem2[];
}
export type { NavItem2 as LegacyNavItem };
export const NAV_ITEMS = NAV_GROUPS.flatMap(g => g.items);

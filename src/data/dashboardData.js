export const dashboardStats = [
  { label: 'Total land records', value: '24,860', trend: '+8.4%', note: 'vs previous period', tone: 'success' },
  { label: 'Verified evidence', value: '18,420', trend: '+12.7%', note: 'source records verified', tone: 'success' },
  { label: 'Active disputes', value: '1,284', trend: '-4.2%', note: 'open cases in review', tone: 'info' },
  { label: 'High-risk parcels', value: '326', trend: '+6.8%', note: 'require attention', tone: 'danger' },
];

export const evidenceActivity = {
  '7D': [{ day: 'Mon', collected: 84, verified: 61 }, { day: 'Tue', collected: 108, verified: 82 }, { day: 'Wed', collected: 96, verified: 76 }, { day: 'Thu', collected: 132, verified: 101 }, { day: 'Fri', collected: 118, verified: 94 }, { day: 'Sat', collected: 76, verified: 58 }, { day: 'Sun', collected: 92, verified: 70 }],
  '30D': [{ day: '01 Apr', collected: 420, verified: 310 }, { day: '08 Apr', collected: 560, verified: 404 }, { day: '15 Apr', collected: 510, verified: 390 }, { day: '22 Apr', collected: 690, verified: 532 }, { day: '28 Apr', collected: 742, verified: 601 }],
  '90D': [{ day: 'Feb', collected: 1240, verified: 920 }, { day: 'Mar', collected: 1680, verified: 1210 }, { day: 'Apr', collected: 2140, verified: 1692 }],
  '1Y': [{ day: 'Q1', collected: 3420, verified: 2410 }, { day: 'Q2', collected: 4180, verified: 3090 }, { day: 'Q3', collected: 4960, verified: 3750 }, { day: 'Q4', collected: 5820, verified: 4510 }],
};

export const riskDistribution = [
  { name: 'Low', value: 11240, color: '#3F8F7A' },
  { name: 'Moderate', value: 6280, color: '#C58D43' },
  { name: 'High', value: 2180, color: '#B85F55' },
  { name: 'Critical', value: 326, color: '#7D3F3F' },
];

export const verificationFunnel = [
  ['Collected', '2,840', 100],
  ['Processing', '2,312', 81],
  ['Verified', '1,984', 70],
  ['Approved', '1,742', 61],
];

export const priorityIntelligence = [
  { status: 'HIGH RISK', title: 'Parcel UP-LKO-004276 requires verification', detail: 'Sarojini Nagar • boundary signal', time: '12 min ago', route: '/land-records/UP-LKO-004276', tone: 'danger' },
  { status: 'DISPUTE', title: 'Evidence conflict detected in Gomti Nagar', detail: 'Boundary conflict • 4 linked sources', time: '38 min ago', route: '/disputes', tone: 'warning' },
  { status: 'VERIFICATION', title: '12 evidence items awaiting review', detail: 'Field and satellite observations', time: '1 hr ago', route: '/evidence', tone: 'info' },
  { status: 'POLICY', title: 'New policy scenario requires analysis', detail: 'Agricultural conversion threshold', time: '2 hrs ago', route: '/policy-simulator', tone: 'success' },
];

export const policySnapshot = { scenarios: 18, regions: 6, impact: '+8.5%', label: 'environmental risk estimate' };
export const provenanceSnapshot = { integrity: '98.7%', sources: 18420, verified: 17204 };

type Role = { company: string; role: string; location: string; dates: string; bullets: string[]; tools?: string[] }

export const experience: Role[] = [
  {
    company: 'Booz Allen Hamilton',
    role: 'Lead Technologist / SharePoint Administrator',
    location: 'Annapolis Junction, MD',
    dates: '2024 – Present',
    bullets: [
      'Provided operational/product support for DISA secure mobility services to mission partners.',
      'Designed and launched SharePoint solutions with workflow automation and compliance features.',
      'Published three DISA Knowledge Base articles improving onboarding/troubleshooting.',
      'Migrated 5,000+ legacy files into a repository with enhanced search, version control, and tagging.',
      'Increased SharePoint engagement from ~30 to 1,000+ views in six months.'
    ],
    tools: [
      'SharePoint Online','SharePoint Admin Center','Microsoft 365',
      'Power Automate','Microsoft Forms','Teams','OneDrive','Lists',
      'Governance & Compliance','DoD365J','DSMR','DISA Knowledge Base',
      'Excel','Visio','Word','PowerPoint'
    ]
  },
  {
    company: 'WWC Federal',
    role: 'Contract Lead / Manpower Analyst',
    location: 'Tampa, FL',
    dates: '2019 – 2024',
    bullets: [
      'Executed 250+ Manpower Change Requests impacting 2,600+ personnel; supported UIC creation and command restructuring.',
      'Standardized data and reporting processes, improving accuracy by ~45%.',
      'Coordinated onboarding, scheduling, and document control with high accuracy.',
      'Built and maintained SharePoint workspaces and access controls for cross-functional teams.',
      'Produced concise weekly dashboards/briefs to support leadership decisions.'
    ],
    tools: [
      'SharePoint','Microsoft 365','Excel','PowerPoint','Word','Teams',
      'Access Control','Records Management','Process Improvement','Scheduling'
    ]
  },
  {
    company: 'U.S. Navy',
    role: 'Administrative Services Manager',
    location: 'Various Locations',
    dates: '2000 – 2020',
    bullets: [
      'Managed admin programs, classified document control, and training for 150+ staff.',
      'Coordinated 1,500+ official ceremonies and 30,000+ pay/personnel transactions with 99% accuracy.',
      'Developed training programs yielding a 94% promotion rate and 28% improvement in certification timeliness.',
      'Oversaw $1M+ in budget allocations with full accountability and zero discrepancies.',
      'Coordinated Navy Funeral Honors operations across a 16-state region with consistent QA.'
    ],
    tools: [
      'SharePoint','MS Office Suite','Training Management','Personnel & Pay Systems',
      'Records Management','Scheduling','Budgeting','Quality Assurance'
    ]
  }
]

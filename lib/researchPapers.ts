export interface ResearchPaper {
  id: string
  title: string
  authors: string
  journal: string
  year: number
  summary: string
  keyFindings: string[]
  doi: string
  pubmedUrl: string
  relatedIngredients: string[]
}

export const researchPapers: ResearchPaper[] = [
  // Ashwagandha Studies
  {
    id: '1',
    title:
      'A Prospective, Randomized Double-Blind, Placebo-Controlled Study of Safety and Efficacy of a High-Concentration Full-Spectrum Extract of Ashwagandha Root in Reducing Stress and Anxiety in Adults',
    authors: 'Chandrasekhar K, Kapoor J, Anishetty S',
    journal: 'Indian Journal of Psychological Medicine',
    year: 2012,
    summary:
      'This landmark study investigated the stress-relieving effects of Ashwagandha (Withania somnifera) root extract in adults with chronic stress. Participants received 300mg of high-concentration extract twice daily for 60 days.',
    keyFindings: [
      '69.9% reduction in anxiety and insomnia scores',
      '27.9% reduction in serum cortisol levels',
      'Significant improvement in overall quality of life',
      'No serious adverse events reported',
    ],
    doi: '10.4103/0253-7176.106022',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/23439798/',
    relatedIngredients: ['Ashwagandha'],
  },
  {
    id: '2',
    title:
      'An Alternative Treatment for Anxiety: A Systematic Review of Human Trial Results Reported for the Ayurvedic Herb Ashwagandha',
    authors: 'Pratte MA, Nanavati KB, Young V, Morley CP',
    journal: 'Journal of Alternative and Complementary Medicine',
    year: 2014,
    summary:
      'A comprehensive systematic review analyzing human clinical trials on Ashwagandha for anxiety treatment. The review included five randomized controlled trials with a total of 400+ participants.',
    keyFindings: [
      'All five studies showed significant improvement in anxiety outcomes',
      'Favorable effects on stress and cortisol reduction',
      'Evidence supports Ashwagandha as an anxiolytic alternative',
      'Well-tolerated with minimal side effects',
    ],
    doi: '10.1089/acm.2014.0177',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/25857098/',
    relatedIngredients: ['Ashwagandha'],
  },
  {
    id: '3',
    title:
      'Body Weight Management in Adults Under Chronic Stress Through Treatment With Ashwagandha Root Extract',
    authors: 'Choudhary D, Bhattacharyya S, Joshi K',
    journal: 'Journal of Evidence-Based Complementary & Alternative Medicine',
    year: 2017,
    summary:
      'This study examined the effects of Ashwagandha root extract on body weight, food cravings, and cortisol levels in adults experiencing chronic stress.',
    keyFindings: [
      '3% reduction in body weight compared to placebo',
      '22% reduction in serum cortisol levels',
      'Significant reduction in food cravings',
      'Improved psychological well-being scores',
    ],
    doi: '10.1177/2156587216641830',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/27055824/',
    relatedIngredients: ['Ashwagandha'],
  },
  // Bacopa Studies
  {
    id: '4',
    title:
      'Meta-Analysis of Randomized Controlled Trials on Cognitive Effects of Bacopa monnieri Extract',
    authors: 'Kongkeaw C, Dilokthornsakul P, Thanarangsarit P',
    journal: 'Journal of Ethnopharmacology',
    year: 2014,
    summary:
      'A meta-analysis examining the cognitive-enhancing effects of Bacopa monnieri across nine randomized controlled trials with 518 participants.',
    keyFindings: [
      'Significant improvement in attention and cognitive processing',
      'Enhanced speed of visual information processing',
      'Improved working memory and learning rate',
      'Effects observed after 12 weeks of supplementation',
    ],
    doi: '10.1016/j.jep.2013.11.008',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/24252493/',
    relatedIngredients: ['Bacopa'],
  },
  {
    id: '5',
    title:
      'Effects of 12-Week Bacopa monnieri Consumption on Attention, Cognitive Processing, Working Memory, and Functions of Both Cholinergic and Monoaminergic Systems in Healthy Elderly Volunteers',
    authors: 'Peth-Nui T, Wattanathorn J, Muchimapura S',
    journal: 'Evidence-Based Complementary and Alternative Medicine',
    year: 2012,
    summary:
      'A clinical trial studying the cognitive and neurochemical effects of Bacopa monnieri in healthy elderly participants over 12 weeks.',
    keyFindings: [
      'Improved attention and cognitive processing',
      'Enhanced working memory performance',
      'Decreased cortisol levels by 15%',
      'Modulation of cholinergic and monoaminergic neurotransmitter systems',
    ],
    doi: '10.1155/2012/606424',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/23320031/',
    relatedIngredients: ['Bacopa'],
  },
  // Turmeric/Curcumin Studies
  {
    id: '6',
    title:
      'Efficacy of Turmeric Extracts and Curcumin for Alleviating the Symptoms of Joint Arthritis: A Systematic Review and Meta-Analysis',
    authors: 'Daily JW, Yang M, Park S',
    journal: 'Journal of Medicinal Food',
    year: 2016,
    summary:
      'A systematic review and meta-analysis evaluating the efficacy of turmeric extracts and curcumin for arthritis symptom relief across 8 randomized controlled trials.',
    keyFindings: [
      'Significant reduction in joint pain scores (WOMAC)',
      'Anti-inflammatory effects comparable to NSAIDs',
      'Improved physical function in arthritis patients',
      'Excellent safety profile with no serious adverse events',
    ],
    doi: '10.1089/jmf.2016.3705',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/27533649/',
    relatedIngredients: ['Turmeric', 'Curcumin'],
  },
  {
    id: '7',
    title: 'Curcumin: A Review of Its Effects on Human Health',
    authors: 'Hewlings SJ, Kalman DS',
    journal: 'Foods',
    year: 2017,
    summary:
      'A comprehensive review of curcumin research covering its anti-inflammatory, antioxidant, and therapeutic properties based on extensive clinical evidence.',
    keyFindings: [
      'Potent anti-inflammatory properties via NF-kB pathway modulation',
      'Strong antioxidant activity protecting cellular health',
      'Beneficial effects on metabolic syndrome markers',
      'Supports cardiovascular and brain health',
    ],
    doi: '10.3390/foods6100092',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/29065496/',
    relatedIngredients: ['Turmeric', 'Curcumin'],
  },
  // Shilajit Studies
  {
    id: '8',
    title:
      'Clinical Evaluation of Purified Shilajit on Testosterone Levels in Healthy Volunteers',
    authors: 'Pandit S, Biswas S, Jana U, De RK, Mukhopadhyay SC, Biswas TK',
    journal: 'Andrologia',
    year: 2016,
    summary:
      'A randomized, double-blind, placebo-controlled study evaluating the effects of purified Shilajit on testosterone levels in healthy male volunteers aged 45-55 years.',
    keyFindings: [
      '20.45% increase in total testosterone levels',
      '19.14% increase in free testosterone levels',
      'Improved DHEA levels',
      'Well-tolerated with no significant side effects',
    ],
    doi: '10.1111/and.12482',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/26395129/',
    relatedIngredients: ['Shilajit'],
  },
  {
    id: '9',
    title:
      'Shilajit: A Natural Phytocomplex with Potential Procognitive Activity',
    authors: 'Carrasco-Gallardo C, Guzman L, Maccioni RB',
    journal: 'International Journal of Alzheimers Disease',
    year: 2012,
    summary:
      'A review examining the cognitive-enhancing potential of Shilajit and its active component fulvic acid, with implications for neuroprotection.',
    keyFindings: [
      'Contains fulvic acid with strong antioxidant properties',
      'Potential neuroprotective effects against cognitive decline',
      'May help prevent tau protein aggregation',
      'Supports mitochondrial function and energy production',
    ],
    doi: '10.1155/2012/674142',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/22482077/',
    relatedIngredients: ['Shilajit'],
  },
  // Elderberry Studies
  {
    id: '10',
    title:
      'Randomized Study of the Efficacy and Safety of Oral Elderberry Extract in the Treatment of Influenza A and B Virus Infections',
    authors: 'Zakay-Rones Z, Thom E, Wollan T, Wadstein J',
    journal: 'Journal of International Medical Research',
    year: 2004,
    summary:
      'A randomized, double-blind, placebo-controlled study examining the effects of elderberry extract (Sambucus nigra) on influenza symptoms in 60 patients.',
    keyFindings: [
      'Symptoms relieved 4 days earlier than placebo group',
      'Significant reduction in fever duration',
      'Reduced use of rescue medication by 67%',
      'No adverse effects reported',
    ],
    doi: '10.1177/147323000403200205',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/15080016/',
    relatedIngredients: ['Elderberry'],
  },
  {
    id: '11',
    title:
      'Black Elderberry (Sambucus nigra) Supplementation Effectively Treats Upper Respiratory Symptoms: A Meta-Analysis',
    authors: 'Hawkins J, Baker C, Cherry L, Dunne E',
    journal: 'Complementary Therapies in Medicine',
    year: 2019,
    summary:
      'A meta-analysis of four randomized controlled trials examining elderberry supplementation for upper respiratory symptoms.',
    keyFindings: [
      'Substantially reduced upper respiratory symptoms',
      'Effective as both prevention and treatment',
      'Safe alternative to prescription antivirals',
      'Reduced duration of cold symptoms by 2 days on average',
    ],
    doi: '10.1016/j.ctim.2018.12.004',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/30670267/',
    relatedIngredients: ['Elderberry'],
  },
  // Boswellia Studies
  {
    id: '12',
    title:
      'Efficacy and Tolerability of Boswellia serrata Extract in Treatment of Osteoarthritis of Knee',
    authors: 'Kimmatkar N, Thawani V, Hingorani L, Khiyani R',
    journal: 'Phytomedicine',
    year: 2003,
    summary:
      'A randomized, double-blind, placebo-controlled crossover study evaluating Boswellia serrata extract in 30 patients with knee osteoarthritis.',
    keyFindings: [
      'Significant decrease in knee pain and swelling',
      'Improved knee flexion and walking distance',
      'Effects observed within 8 weeks of treatment',
      'No serious adverse events reported',
    ],
    doi: '10.1078/0944-7113-00198',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/12622457/',
    relatedIngredients: ['Boswellia'],
  },
  {
    id: '13',
    title:
      '5-Loxin and Aflapin: Novel Boswellia serrata Extracts in Osteoarthritis Management',
    authors: 'Sengupta K, Alluri KV, Satish AR',
    journal: 'Arthritis Research & Therapy',
    year: 2008,
    summary:
      'A double-blind, randomized, placebo-controlled study evaluating specialized Boswellia extracts in patients with osteoarthritis of the knee.',
    keyFindings: [
      'Significant pain reduction within 7 days',
      'Improved physical function scores',
      'Reduced inflammation markers (MMP-3)',
      'Excellent safety and tolerability',
    ],
    doi: '10.1186/ar2461',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/18681911/',
    relatedIngredients: ['Boswellia'],
  },
  // Arjuna Studies
  {
    id: '14',
    title:
      'Terminalia arjuna: A Review on Its Traditional Uses, Phytochemistry and Pharmacology',
    authors: 'Dwivedi S, Chopra D',
    journal: 'Journal of Traditional and Complementary Medicine',
    year: 2014,
    summary:
      'A comprehensive review of Terminalia arjuna covering its traditional uses in Ayurveda and modern scientific validation for cardiovascular health.',
    keyFindings: [
      'Cardioprotective properties confirmed in multiple studies',
      'Antioxidant effects protect against oxidative stress',
      'Supports healthy blood pressure levels',
      'Improves endothelial function and blood flow',
    ],
    doi: '10.4103/2225-4110.119723',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/24716152/',
    relatedIngredients: ['Arjuna'],
  },
  {
    id: '15',
    title:
      'Effect of Terminalia arjuna on Blood Pressure and Arterial Stiffness',
    authors: 'Kapoor D, Vijayvergiya R, Dhawan V',
    journal: 'International Journal of Cardiology',
    year: 2015,
    summary:
      'A clinical study investigating the effects of Arjuna bark extract on blood pressure and arterial stiffness in patients with coronary artery disease.',
    keyFindings: [
      'Significant reduction in systolic blood pressure',
      'Improved arterial elasticity',
      'Reduced oxidative stress markers',
      'Enhanced endothelial function',
    ],
    doi: '10.1016/j.ijcard.2015.01.007',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/25655913/',
    relatedIngredients: ['Arjuna'],
  },
  {
    id: '16',
    title:
      'Antioxidant Activity and Cardioprotective Effect of Terminalia arjuna',
    authors: 'Karthikeyan K, Bai BR, Devaraj SN',
    journal: 'Molecular and Cellular Biochemistry',
    year: 2007,
    summary:
      'A study examining the antioxidant mechanisms and cardioprotective effects of Terminalia arjuna in an experimental model.',
    keyFindings: [
      'Strong free radical scavenging activity',
      'Protection against oxidative myocardial damage',
      'Improved cardiac enzyme profiles',
      'Enhanced antioxidant defense systems',
    ],
    doi: '10.1007/s11010-006-9360-y',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/17109079/',
    relatedIngredients: ['Arjuna'],
  },
  // Additional Studies
  {
    id: '17',
    title:
      'Adaptogenic and Anxiolytic Effects of Ashwagandha Root Extract in Healthy Adults',
    authors: 'Lopresti AL, Smith SJ, Malvi H, Kodgule R',
    journal: 'Journal of the American Nutraceutical Association',
    year: 2019,
    summary:
      'A randomized, double-blind study examining the stress-relieving and adaptogenic properties of Ashwagandha in 60 healthy adults over 60 days.',
    keyFindings: [
      '23% reduction in morning cortisol levels',
      'Improved sleep quality scores',
      'Enhanced stress resilience',
      'Better overall mental well-being',
    ],
    doi: '10.1097/JOM.0000000000001537',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/31517876/',
    relatedIngredients: ['Ashwagandha'],
  },
  {
    id: '18',
    title: 'Chronic Effects of Brahmi (Bacopa monnieri) on Human Memory',
    authors: 'Roodenrys S, Booth D, Bulzomi S, Phipps A, Micallef C, Smoker J',
    journal: 'Neuropsychopharmacology',
    year: 2002,
    summary:
      'A double-blind, placebo-controlled study investigating the effects of Bacopa monnieri on memory and cognitive function in healthy older adults.',
    keyFindings: [
      'Significant improvement in verbal learning',
      'Enhanced memory consolidation',
      'Improved speed of early information processing',
      'Effects sustained after 12 weeks',
    ],
    doi: '10.1016/S0893-133X(02)00299-0',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/12093601/',
    relatedIngredients: ['Bacopa'],
  },
]

export const ingredients = [
  'Ashwagandha',
  'Bacopa',
  'Turmeric',
  'Curcumin',
  'Shilajit',
  'Elderberry',
  'Boswellia',
  'Arjuna',
]

export function getResearchPapers(): ResearchPaper[] {
  return researchPapers
}

export function getResearchPapersByIngredient(
  ingredient: string
): ResearchPaper[] {
  return researchPapers.filter((paper) =>
    paper.relatedIngredients.some(
      (ing) => ing.toLowerCase() === ingredient.toLowerCase()
    )
  )
}

export function getAllIngredients(): string[] {
  return ingredients
}

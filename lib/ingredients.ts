export interface Ingredient {
  id: string
  name: string
  sanskritName: string
  scientificName: string
  slug: string
  icon: string
  description: string
  traditionalUses: string[]
  benefits: string[]
  concerns: string[]
  relatedProducts: string[]
  origin: string
  partUsed: string
}

export const ingredients: Ingredient[] = [
  {
    id: '1',
    name: 'Ashwagandha',
    sanskritName: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    slug: 'ashwagandha',
    icon: '🌿',
    description:
      'Known as "Indian Ginseng," Ashwagandha is one of the most revered adaptogenic herbs in Ayurveda. It has been used for over 3,000 years to relieve stress, increase energy levels, and improve concentration. The name means "smell of the horse," indicating its ability to impart the vigor and strength of a stallion.',
    traditionalUses: [
      'Rasayana (rejuvenation) therapy',
      'Balancing Vata and Kapha doshas',
      'Supporting Ojas (vital essence)',
      'Enhancing mental clarity and stamina',
    ],
    benefits: [
      'Reduces stress and anxiety',
      'Supports healthy cortisol levels',
      'Enhances energy and vitality',
      'Improves cognitive function',
      'Supports healthy sleep patterns',
    ],
    concerns: ['energy-vitality', 'memory-focus', 'hormonal-balance'],
    relatedProducts: ['hormone-balance', 'power-blend', 'bacopa-ashwagandha'],
    origin: 'India, Middle East, Africa',
    partUsed: 'Root',
  },
  {
    id: '2',
    name: 'Bacopa',
    sanskritName: 'Brahmi',
    scientificName: 'Bacopa monnieri',
    slug: 'bacopa',
    icon: '🧠',
    description:
      'Brahmi is a legendary brain tonic revered in Ayurveda for centuries. Named after Brahma, the creator god in Hindu tradition, this herb is believed to enhance intelligence, memory, and creativity. It thrives in wetlands and is known for its small, succulent leaves and delicate white flowers.',
    traditionalUses: [
      'Medhya Rasayana (brain rejuvenation)',
      'Enhancing Saraswati (goddess of knowledge)',
      'Supporting students and scholars',
      'Calming Pitta dosha',
    ],
    benefits: [
      'Enhances memory and learning',
      'Supports focus and concentration',
      'Promotes mental clarity',
      'Supports healthy mood',
      'Antioxidant protection for brain cells',
    ],
    concerns: ['memory-focus'],
    relatedProducts: ['bacopa-ashwagandha'],
    origin: 'India, Nepal, Sri Lanka, Vietnam',
    partUsed: 'Whole plant',
  },
  {
    id: '3',
    name: 'Turmeric',
    sanskritName: 'Haldi / Haridra',
    scientificName: 'Curcuma longa',
    slug: 'turmeric',
    icon: '🌼',
    description:
      'The "Golden Spice" of India, turmeric has been a cornerstone of Ayurvedic medicine for over 4,000 years. Its brilliant golden color and powerful properties make it one of the most studied herbs in modern science. The active compound curcumin is responsible for many of its therapeutic benefits.',
    traditionalUses: [
      'Blood purification (Rakta Shodhana)',
      'Skin health and radiance',
      'Digestive support',
      'Balancing all three doshas',
    ],
    benefits: [
      'Powerful anti-inflammatory properties',
      'Supports joint comfort',
      'Promotes digestive health',
      'Supports immune function',
      'Antioxidant protection',
    ],
    concerns: ['joint-support', 'immunity', 'skin-hair-nails'],
    relatedProducts: ['boswellia-turmeric', 'elderberry-giloy'],
    origin: 'India, Southeast Asia',
    partUsed: 'Rhizome (root)',
  },
  {
    id: '4',
    name: 'Shilajit',
    sanskritName: 'Shilajit',
    scientificName: 'Asphaltum punjabianum',
    slug: 'shilajit',
    icon: '⛰️',
    description:
      'Known as the "Destroyer of Weakness," Shilajit is a mineral-rich substance that oozes from rocks in the Himalayan mountains during warm months. Formed over centuries from the decomposition of plants, it contains over 80 minerals in ionic form plus fulvic acid, making it a powerful rejuvenator.',
    traditionalUses: [
      'Rasayana (rejuvenation) therapy',
      'Enhancing Ojas and vitality',
      'Supporting reproductive health',
      'Building strength and endurance',
    ],
    benefits: [
      'Enhances energy and stamina',
      'Supports cognitive function',
      'Promotes cellular regeneration',
      'Rich in fulvic acid and minerals',
      'Supports healthy aging',
    ],
    concerns: ['energy-vitality', 'memory-focus'],
    relatedProducts: ['power-blend'],
    origin: 'Himalayan Mountains',
    partUsed: 'Mineral exudate',
  },
  {
    id: '5',
    name: 'Shatavari',
    sanskritName: 'Shatavari',
    scientificName: 'Asparagus racemosus',
    slug: 'shatavari',
    icon: '🌸',
    description:
      'The name Shatavari means "she who possesses a hundred husbands," indicating its traditional use as a female reproductive tonic. This climbing plant with needle-like leaves is considered the premier herb for women in Ayurveda, supporting all stages of a woman\'s life from menstruation through menopause.',
    traditionalUses: [
      'Female reproductive health',
      'Lactation support (Stanya)',
      'Balancing Pitta and Vata',
      'Nourishing and cooling the body',
    ],
    benefits: [
      'Supports hormonal balance',
      'Promotes reproductive health',
      'Nourishes and hydrates tissues',
      'Supports healthy lactation',
      'Adaptogenic stress support',
    ],
    concerns: ['hormonal-balance', 'energy-vitality'],
    relatedProducts: ['hormone-balance', 'boswellia-turmeric'],
    origin: 'India, Sri Lanka, Nepal',
    partUsed: 'Root',
  },
  {
    id: '6',
    name: 'Arjuna',
    sanskritName: 'Arjuna',
    scientificName: 'Terminalia arjuna',
    slug: 'arjuna',
    icon: '❤️',
    description:
      'Named after the heroic archer from the Mahabharata, Arjuna is the premier heart tonic in Ayurveda. The bark of this majestic tree has been used for over 3,000 years to strengthen the heart muscle and support healthy cardiovascular function. It is considered a "Hridaya" or heart-friendly herb.',
    traditionalUses: [
      'Hridaya (heart health)',
      'Blood circulation support',
      'Balancing Kapha and Pitta',
      'Strengthening cardiac muscle',
    ],
    benefits: [
      'Supports cardiovascular health',
      'Promotes healthy blood pressure',
      'Strengthens heart muscle',
      'Supports healthy cholesterol levels',
      'Rich in antioxidants (arjunolic acid)',
    ],
    concerns: ['heart-health'],
    relatedProducts: ['arjuna-hawthorn'],
    origin: 'India, Sri Lanka, Myanmar',
    partUsed: 'Bark',
  },
  {
    id: '7',
    name: 'Giloy',
    sanskritName: 'Guduchi',
    scientificName: 'Tinospora cordifolia',
    slug: 'giloy',
    icon: '🛡️',
    description:
      'Called "Amrita" (nectar of immortality) in Sanskrit, Giloy is one of the most valued herbs for immunity in Ayurveda. This climbing shrub with heart-shaped leaves is believed to be one of the divine elixirs that keeps celestial beings eternally youthful. It is a powerful immunomodulator.',
    traditionalUses: [
      'Rasayana (rejuvenation)',
      'Jwara (fever management)',
      'Balancing all three doshas',
      'Detoxification (Ama Pachana)',
    ],
    benefits: [
      'Strengthens immune system',
      'Supports healthy inflammatory response',
      'Promotes detoxification',
      'Supports respiratory health',
      'Adaptogenic stress support',
    ],
    concerns: ['immunity'],
    relatedProducts: ['elderberry-giloy'],
    origin: 'India, Sri Lanka, Myanmar',
    partUsed: 'Stem, leaves',
  },
  {
    id: '8',
    name: 'Tulsi',
    sanskritName: 'Tulsi',
    scientificName: 'Ocimum sanctum',
    slug: 'tulsi',
    icon: '🌱',
    description:
      'Revered as the "Queen of Herbs" and considered sacred in Hindu tradition, Tulsi or Holy Basil is found in almost every Indian household. Beyond its spiritual significance, it is a powerful adaptogen that has been used for thousands of years to promote longevity and support overall wellbeing.',
    traditionalUses: [
      'Respiratory health (Pranavaha Srotas)',
      'Stress adaptation (Sattvic herb)',
      'Purification and protection',
      'Balancing Kapha and Vata',
    ],
    benefits: [
      'Supports respiratory health',
      'Powerful adaptogenic properties',
      'Supports immune function',
      'Promotes mental clarity',
      'Antioxidant and antimicrobial',
    ],
    concerns: ['immunity', 'energy-vitality'],
    relatedProducts: ['elderberry-giloy'],
    origin: 'India, Southeast Asia',
    partUsed: 'Leaves, seeds',
  },
  {
    id: '9',
    name: 'Boswellia',
    sanskritName: 'Shallaki',
    scientificName: 'Boswellia serrata',
    slug: 'boswellia',
    icon: '🌳',
    description:
      'Known in the West as Indian Frankincense, Boswellia resin has been used in Ayurvedic medicine for centuries. The gum resin extracted from the bark contains boswellic acids, which are highly studied for their ability to support joint health and a healthy inflammatory response.',
    traditionalUses: [
      'Joint health (Sandhi Shodhana)',
      'Respiratory support',
      'Skin health',
      'Balancing Vata and Kapha',
    ],
    benefits: [
      'Supports joint comfort and mobility',
      'Promotes healthy inflammatory response',
      'Supports cartilage health',
      'Aids respiratory function',
      'Promotes overall comfort',
    ],
    concerns: ['joint-support'],
    relatedProducts: ['boswellia-turmeric'],
    origin: 'India, North Africa, Middle East',
    partUsed: 'Gum resin',
  },
  {
    id: '10',
    name: 'Hawthorn',
    sanskritName: 'Nagaphani',
    scientificName: 'Crataegus',
    slug: 'hawthorn',
    icon: '🍒',
    description:
      'While primarily a Western herb, Hawthorn has found its place in modern Ayurvedic formulations for heart health. The berries, leaves, and flowers of this thorny shrub have been used for centuries in European and Chinese medicine. It complements Arjuna beautifully in cardiovascular support formulas.',
    traditionalUses: [
      'Cardiovascular tonic',
      'Digestive support',
      'Emotional heart support',
      'Gentle nervine',
    ],
    benefits: [
      'Supports healthy heart function',
      'Promotes circulation',
      'Supports blood pressure already in normal range',
      'Rich in flavonoids and antioxidants',
      'Gentle cardiotonic action',
    ],
    concerns: ['heart-health'],
    relatedProducts: ['arjuna-hawthorn'],
    origin: 'Europe, North America, Asia',
    partUsed: 'Berries, leaves, flowers',
  },
  {
    id: '11',
    name: 'Elderberry',
    sanskritName: 'Sambucus',
    scientificName: 'Sambucus nigra',
    slug: 'elderberry',
    icon: '🫐',
    description:
      'Elderberry has been used for thousands of years as a folk remedy across many cultures. The dark purple berries are packed with antioxidants and vitamins, making them a natural ally for immune support. When combined with Ayurvedic herbs like Giloy, it creates a powerful immune-boosting synergy.',
    traditionalUses: [
      'Immune support during cold season',
      'Respiratory health',
      'Fever support',
      'Antioxidant protection',
    ],
    benefits: [
      'Supports immune system function',
      'Rich in vitamin C and antioxidants',
      'Supports respiratory health',
      'Promotes healthy inflammatory response',
      'Seasonal wellness support',
    ],
    concerns: ['immunity'],
    relatedProducts: ['elderberry-giloy'],
    origin: 'Europe, North America',
    partUsed: 'Berries',
  },
  {
    id: '12',
    name: 'Ginger',
    sanskritName: 'Adrak / Shunti',
    scientificName: 'Zingiber officinale',
    slug: 'ginger',
    icon: '🫚',
    description:
      'Called "Vishwabhesaj" (universal medicine) in Ayurveda, ginger is considered one of the most sattvic spices. Fresh ginger (Adrak) and dried ginger (Shunti) have slightly different properties, but both are prized for their warming, digestive, and circulation-enhancing qualities.',
    traditionalUses: [
      'Digestive fire (Agni) enhancement',
      'Circulation support',
      'Nausea relief',
      'Balancing Kapha and Vata',
    ],
    benefits: [
      'Supports healthy digestion',
      'Promotes circulation',
      'Supports joint comfort',
      'Enhances nutrient absorption',
      'Warming and invigorating',
    ],
    concerns: ['joint-support', 'immunity', 'heart-health'],
    relatedProducts: [
      'elderberry-giloy',
      'arjuna-hawthorn',
      'boswellia-turmeric',
    ],
    origin: 'Southeast Asia, India',
    partUsed: 'Rhizome (root)',
  },
  {
    id: '13',
    name: 'Black Pepper',
    sanskritName: 'Pippali / Maricha',
    scientificName: 'Piper nigrum',
    slug: 'black-pepper',
    icon: '🌶️',
    description:
      'Known as the "King of Spices," black pepper is far more than a culinary ingredient in Ayurveda. It contains piperine, a bioactive compound that dramatically enhances the absorption of other herbs and nutrients. This is why it appears in most Pure Prana formulas as a bioavailability enhancer.',
    traditionalUses: [
      'Bioavailability enhancement',
      'Digestive fire stimulation',
      'Respiratory support',
      'Balancing Kapha',
    ],
    benefits: [
      'Enhances nutrient absorption',
      'Supports digestive health',
      'Promotes respiratory clarity',
      'Supports metabolism',
      'Antioxidant properties',
    ],
    concerns: ['weight-support', 'immunity'],
    relatedProducts: [
      'bacopa-ashwagandha',
      'arjuna-hawthorn',
      'elderberry-giloy',
      'glutathione-collagen',
      'green-tea-garcinia',
      'boswellia-turmeric',
    ],
    origin: 'India (Malabar Coast)',
    partUsed: 'Fruit (peppercorn)',
  },
]

export function getIngredientBySlug(slug: string) {
  return ingredients.find((ingredient) => ingredient.slug === slug)
}

export function getIngredientsByConcern(concern: string) {
  return ingredients.filter((ingredient) =>
    ingredient.concerns.includes(concern)
  )
}

export function getAllIngredients() {
  return ingredients
}

export function searchIngredients(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return ingredients.filter(
    (ingredient) =>
      ingredient.name.toLowerCase().includes(lowercaseQuery) ||
      ingredient.sanskritName.toLowerCase().includes(lowercaseQuery) ||
      ingredient.scientificName.toLowerCase().includes(lowercaseQuery) ||
      ingredient.description.toLowerCase().includes(lowercaseQuery) ||
      ingredient.benefits.some((benefit) =>
        benefit.toLowerCase().includes(lowercaseQuery)
      )
  )
}

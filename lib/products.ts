import { Product } from './types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Hormone Balance',
    slug: 'hormone-balance',
    price: 29.95,
    description:
      'Premium Ayurvedic formula designed to support hormonal balance and overall wellness. Made with carefully selected herbs including Shatavari and Ashwagandha following traditional Ayurvedic principles for PMS relief, menstrual support, and stress resilience.',
    shortDescription: 'Natural support for hormonal wellness',
    images: ['/images/products/hormone-balance.jpg'],
    amazonUrl:
      'https://www.amazon.com/dp/B0DZ23LJGJ?maas=maas_adg_84A44F397FEA8C72D117122508FB7E23_afap_abs&ref_=aa_maas&tag=maas',
    rating: 4.5,
    reviewCount: 489,
    category: 'Hormonal Balance',
    concerns: ['hormonal-balance', 'womens-health'],
    tags: [
      'hormone-balance',
      'wellness',
      'ayurveda',
      'womens-health',
      'pms',
      'menstrual',
    ],
    benefits: [
      'Supports hormonal balance',
      'PMS relief & menstrual support',
      'Promotes stress resilience',
      'Third-party tested for purity',
    ],
    usage:
      'Take 1 capsule daily with food or as directed by your healthcare provider',
    featured: true,
    inStock: true,
    supplementFacts: {
      servingSize: '1 Capsule',
      servingsPerContainer: 60,
      ingredients: [
        {
          name: 'Shatavari (Asparagus racemosus) 10:1 Extract',
          amount: '300 mg',
        },
        {
          name: 'Ashwagandha (Withania somnifera) 20:1 Extract',
          amount: '150 mg',
        },
        {
          name: 'Tribulus Terrestris (Gokshura) 10:1 Extract',
          amount: '100 mg',
        },
        { name: 'Ashoka (Saraca asoca) 10:1 Extract', amount: '50 mg' },
      ],
    },
  },
  {
    id: '2',
    name: 'Power Blend',
    slug: 'power-blend',
    price: 29.95,
    description:
      'Powerful combination of Shilajit, Ashwagandha, and Gokshura. This traditional Ayurvedic blend is designed to enhance vitality, energy, brain function, and overall performance with extra strength 12000mg equivalent formula.',
    shortDescription: 'Premium vitality and energy supplement',
    images: ['/images/products/power-blend.jpg'],
    amazonUrl:
      'https://www.amazon.com/dp/B0CWS4NCCF?maas=maas_adg_5A8C87AD130CE1AA2FA46560E3E26154_afap_abs&ref_=aa_maas&tag=maas',
    rating: 4.5,
    reviewCount: 129,
    category: 'Energy & Vitality',
    concerns: ['energy-vitality', 'mens-health'],
    tags: [
      'shilajit',
      'ashwagandha',
      'gokshura',
      'energy',
      'vitality',
      'mens-health',
      'brain',
    ],
    benefits: [
      'Boosts energy and stamina',
      'Enhances vitality & libido',
      'Supports brain function',
      'GMP certified facility',
    ],
    usage:
      'Take 1 capsule daily with food or as directed by your healthcare provider',
    featured: true,
    inStock: true,
    supplementFacts: {
      servingSize: '1 Capsule',
      servingsPerContainer: 60,
      ingredients: [
        {
          name: 'Shilajit (Asphaltum punjabianum) 20:1 Extract',
          amount: '300 mg',
        },
        {
          name: 'Ashwagandha (Withania somnifera) 20:1 Extract',
          amount: '150 mg',
        },
        {
          name: 'Gokshura (Tribulus terrestris) 10:1 Extract',
          amount: '150 mg',
        },
        {
          name: 'Kaunch Beej (Mucuna pruriens) 10:1 Extract',
          amount: '100 mg',
        },
        {
          name: 'Safed Musli (Chlorophytum borivilianum) 10:1 Extract',
          amount: '100 mg',
        },
      ],
    },
  },
  {
    id: '3',
    name: 'Bacopa & Ashwagandha',
    slug: 'bacopa-ashwagandha',
    price: 29.95,
    description:
      'Natural nootropic brain booster combining Bacopa (Brahmi), Ashwagandha, Shankhpushpi, and Jatamansi. This cognitive support formula enhances memory, focus, clarity, and mood support for adults and seniors.',
    shortDescription: 'Memory, Focus & Clarity support',
    images: ['/images/products/bacopa-ashwagandha.jpg'],
    amazonUrl:
      'https://www.amazon.com/dp/B0G3P9BXHK?maas=maas_adg_92BD83EF5E1E72462C33FCA02B1F319C_afap_abs&ref_=aa_maas&tag=maas',
    rating: 4.5,
    reviewCount: 87,
    category: 'Memory & Focus',
    concerns: ['memory-focus', 'brain-health'],
    tags: [
      'bacopa',
      'brahmi',
      'ashwagandha',
      'memory',
      'focus',
      'clarity',
      'nootropic',
      'brain',
    ],
    benefits: [
      'Enhances memory & recall',
      'Improves focus & clarity',
      'Supports mood balance',
      'Calm energy without jitters',
    ],
    usage:
      'Take 1 capsule daily with food or as directed by your healthcare provider',
    featured: true,
    inStock: true,
    supplementFacts: {
      servingSize: '1 Capsule',
      servingsPerContainer: 60,
      ingredients: [
        { name: 'Brahmi (Bacopa monnieri) 20:1 Extract', amount: '250 mg' },
        {
          name: 'Shankhpushpi (Convolvulus prostratus) 20:1 Extract',
          amount: '250 mg',
        },
        {
          name: 'Jatamansi (Nardostachys jatamansi) 20:1 Extract',
          amount: '250 mg',
        },
        {
          name: 'Ashwagandha (Withania somnifera) 10:1 Extract',
          amount: '250 mg',
        },
        { name: 'Black Pepper (seed) 10:1 Extract', amount: '10 mg' },
      ],
    },
  },
  {
    id: '4',
    name: 'Arjuna & Hawthorn',
    slug: 'arjuna-hawthorn',
    price: 29.95,
    description:
      'Ayurvedic heart health supplement featuring 400mg Terminalia Arjuna with Hawthorn Berry, Beet Root, Grape Seed, and CoQ10 support. Traditional formula for circulation and blood pressure support.',
    shortDescription: 'Heart Health & Circulation support',
    images: ['/images/products/arjuna-hawthorn.jpg'],
    amazonUrl:
      'https://www.amazon.com/dp/B0G3KFMQ42?maas=maas_adg_367A0A2862355C9133CF739634DE3E2F_afap_abs&ref_=aa_maas&tag=maas',
    rating: 4.5,
    reviewCount: 64,
    category: 'Heart Health',
    concerns: ['heart-health', 'circulation'],
    tags: [
      'arjuna',
      'hawthorn',
      'heart',
      'circulation',
      'blood-pressure',
      'cardiovascular',
    ],
    benefits: [
      'Supports heart health',
      'Promotes healthy circulation',
      'Blood pressure support',
      'Antioxidant protection',
    ],
    usage:
      'Take 1 capsule daily with food or as directed by your healthcare provider',
    featured: true,
    inStock: true,
    supplementFacts: {
      servingSize: '1 Capsule',
      servingsPerContainer: 60,
      ingredients: [
        { name: 'Arjuna (stem bark) 20:1 Extract', amount: '400 mg' },
        { name: 'Beet Root (Beta vulgaris) 20:1 Extract', amount: '150 mg' },
        { name: 'Grape Seed (Vitis vinifera) 20:1 Extract', amount: '150 mg' },
        { name: 'Olive Leaf (Olea europaea) 20:1 Extract', amount: '100 mg' },
        { name: 'Hawthorn (Crataegus) 10:1 Extract', amount: '100 mg' },
        { name: 'Garlic (Allium sativum) 20:1 Extract', amount: '50 mg' },
        { name: 'Ginger (root) 10:1 Extract', amount: '50 mg' },
        { name: 'Black Pepper (seed) 10:1 Extract', amount: '10 mg' },
      ],
    },
  },
  {
    id: '5',
    name: 'Elderberry & Giloy',
    slug: 'elderberry-giloy',
    price: 29.95,
    description:
      '10-herb immunity booster featuring Elderberry and Giloy (Guduchi) with Tulsi, Neem, Turmeric, and Ginger. Ayurvedic seasonal defense and respiratory support supplement.',
    shortDescription: 'Immunity & Respiratory support',
    images: ['/images/products/elderberry-giloy.jpg'],
    amazonUrl:
      'https://www.amazon.com/dp/B0G3KPT191?maas=maas_adg_B7CBE5D63DDC64720D984B1F2490A59F_afap_abs&ref_=aa_maas&tag=maas',
    rating: 4.5,
    reviewCount: 52,
    category: 'Immunity',
    concerns: ['immunity', 'respiratory'],
    tags: [
      'elderberry',
      'giloy',
      'guduchi',
      'immunity',
      'tulsi',
      'neem',
      'respiratory',
    ],
    benefits: [
      'Boosts immune function',
      'Seasonal defense support',
      'Respiratory health',
      'Rich in antioxidants',
    ],
    usage:
      'Take 1 capsule daily with food or as directed by your healthcare provider',
    featured: true,
    inStock: true,
    supplementFacts: {
      servingSize: '1 Capsule',
      servingsPerContainer: 60,
      ingredients: [
        { name: 'Tulsi (Ocimum tenuiflorum) 30:1 Extract', amount: '100 mg' },
        { name: 'Turmeric (Curcuma longa) 10:1 Extract', amount: '100 mg' },
        { name: 'Neem (leaves) 30:1 Extract', amount: '150 mg' },
        { name: 'Ashwagandha 20:1 Extract', amount: '150 mg' },
        { name: 'Elderberry (Sambucus) 10:1 Extract', amount: '150 mg' },
        { name: 'Giloy (leaves) 30:1 Extract', amount: '150 mg' },
        { name: 'Ginger (root) 10:1 Extract', amount: '100 mg' },
        { name: 'Cinnamon (stem bark) 10:1 Extract', amount: '100 mg' },
        { name: 'Black Pepper (seed) 10:1 Extract', amount: '10 mg' },
      ],
    },
  },
  {
    id: '6',
    name: 'Glutathione & Collagen',
    slug: 'glutathione-collagen',
    price: 29.95,
    description:
      'Brightening and anti-aging supplement with 300mg Glutathione and Vegan Collagen Builder. Enhanced with Hyaluronic Acid, Vitamin C & E for radiant skin, healthy hair, and strong nails.',
    shortDescription: 'Skin, Hair & Nails beauty formula',
    images: ['/images/products/glutathione-collagen.jpg'],
    amazonUrl:
      'https://www.amazon.com/dp/B0G3KDYKY4?maas=maas_adg_780E8627089B3C74D1C530B4C8CD5846_afap_abs&ref_=aa_maas&tag=maas',
    rating: 4.5,
    reviewCount: 73,
    category: 'Skin, Hair & Nails',
    concerns: ['skin-hair-nails', 'beauty', 'anti-aging'],
    tags: [
      'glutathione',
      'collagen',
      'skin',
      'hair',
      'nails',
      'beauty',
      'anti-aging',
      'brightening',
    ],
    benefits: [
      'Promotes radiant skin',
      'Supports hair & nail health',
      'Anti-aging properties',
      'Brightening formula',
    ],
    usage:
      'Take 1 capsule daily with food or as directed by your healthcare provider',
    featured: true,
    inStock: true,
    supplementFacts: {
      servingSize: '1 Capsule',
      servingsPerContainer: 60,
      ingredients: [
        { name: 'Glutathione 20:1 Extract', amount: '300 mg' },
        { name: 'Collagen 20:1 Extract', amount: '300 mg' },
        { name: 'Hyaluronic Acid 10:1 Extract', amount: '150 mg' },
        { name: 'Vitamin C 10:1 Extract', amount: '100 mg' },
        { name: 'Vitamin E 10:1 Extract', amount: '10 mg' },
        { name: 'Turmeric (stem root) 10:1 Extract', amount: '150 mg' },
        { name: 'Black Pepper (seed) 10:1 Extract', amount: '10 mg' },
      ],
    },
  },
  {
    id: '7',
    name: 'Green Tea & Garcinia',
    slug: 'green-tea-garcinia',
    price: 29.95,
    description:
      'Herbal metabolic and weight support formula with Green Tea, Garcinia, Berberine, Green Coffee, and Guggul. Traditional Ayurvedic formula for energy, vitality, and healthy weight management.',
    shortDescription: 'Weight Support & Metabolism boost',
    images: ['/images/products/green-tea-garcinia.jpg'],
    amazonUrl:
      'https://www.amazon.com/dp/B0G3KKQ53V?maas=maas_adg_27DD7D5A3DECDE6D5D7C63F1350E1EE3_afap_abs&ref_=aa_maas&tag=maas',
    rating: 4.5,
    reviewCount: 41,
    category: 'Weight Support',
    concerns: ['weight-support', 'metabolism'],
    tags: [
      'green-tea',
      'garcinia',
      'weight',
      'metabolism',
      'berberine',
      'fat-burn',
    ],
    benefits: [
      'Supports healthy weight',
      'Boosts metabolism',
      'Natural energy support',
      'Appetite management',
    ],
    usage:
      'Take 1 capsule daily with food or as directed by your healthcare provider',
    featured: true,
    inStock: true,
    supplementFacts: {
      servingSize: '1 Capsule',
      servingsPerContainer: 60,
      ingredients: [
        { name: 'Green Tea (leaves) 30:1 Extract', amount: '150 mg' },
        { name: 'Green Coffee (leaves) 30:1 Extract', amount: '150 mg' },
        { name: 'Garcinia (fruit) 20:1 Extract', amount: '150 mg' },
        {
          name: 'Berberine (roots, stem & leaves) 10:1 Extract',
          amount: '100 mg',
        },
        { name: 'Cinnamon (stem bark) 20:1 Extract', amount: '100 mg' },
        { name: 'Triphala (fruit & seed) 30:1 Extract', amount: '150 mg' },
        { name: 'Guggulu (stem resin) 10:1 Extract', amount: '100 mg' },
        { name: 'Ashwagandha 20:1 Extract', amount: '100 mg' },
        { name: 'Black Pepper (seed) 10:1 Extract', amount: '10 mg' },
      ],
    },
  },
  {
    id: '8',
    name: 'Boswellia & Turmeric',
    slug: 'boswellia-turmeric',
    price: 29.95,
    description:
      'Comprehensive joint support formula featuring Boswellia, Turmeric, Guggul, and 9 more Ayurvedic herbs. Traditional blend for joint comfort, flexibility, and mobility support.',
    shortDescription: 'Joint Support & Flexibility',
    images: ['/images/products/boswellia-turmeric.jpg'],
    amazonUrl: '',
    rating: 0,
    reviewCount: 0,
    category: 'Joint Support',
    concerns: ['joint-support', 'mobility'],
    tags: [
      'boswellia',
      'turmeric',
      'joint',
      'flexibility',
      'mobility',
      'inflammation',
    ],
    benefits: [
      'Supports joint comfort',
      'Promotes flexibility',
      'Mobility support',
      'Traditional Ayurvedic formula',
    ],
    usage:
      'Take 1 capsule daily with food or as directed by your healthcare provider',
    featured: false,
    inStock: false,
    comingSoon: true,
    supplementFacts: {
      servingSize: '1 Capsule',
      servingsPerContainer: 60,
      ingredients: [
        { name: 'Guggul (Commiphora wightii) 10:1 Extract', amount: '100 mg' },
        { name: 'Harsringar (leaves & flower) 20:1 Extract', amount: '100 mg' },
        {
          name: 'Boswellia (Boswellia serrata) 10:1 Extract',
          amount: '100 mg',
        },
        { name: 'Turmeric (Curcuma longa) 10:1 Extract', amount: '50 mg' },
        { name: 'Ginger (Zingiber officinale) 10:1 Extract', amount: '60 mg' },
        {
          name: 'Shatavari (Asparagus racemosus) 20:1 Extract',
          amount: '160 mg',
        },
        {
          name: 'Ashwagandha (Withania somnifera) 10:1 Extract',
          amount: '100 mg',
        },
        { name: 'Rasna (Alpinia galanga) 10:1 Extract', amount: '100 mg' },
        { name: 'Cissus quadrangularis (stem) 10:1 Extract', amount: '100 mg' },
        { name: 'Vitex negundo (leaves) 10:1 Extract', amount: '80 mg' },
        {
          name: 'Malkangni (Celastrus paniculatus) 10:1 Extract',
          amount: '80 mg',
        },
        { name: 'Black Pepper (seed) 10:1 Extract', amount: '10 mg' },
      ],
    },
  },
]

export function getFeaturedProducts() {
  return products.filter((product) => product.featured)
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category)
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getProductsByConcern(concern: string) {
  return products.filter((product) => product.concerns.includes(concern))
}

export function getAvailableProducts() {
  return products.filter((product) => !product.comingSoon)
}

export function getAllProducts() {
  return products
}

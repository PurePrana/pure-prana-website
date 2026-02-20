export interface Concern {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string
}

export const concerns: Concern[] = [
  {
    id: '1',
    name: 'Memory & Focus',
    slug: 'memory-focus',
    description:
      'Support cognitive function, mental clarity, and concentration',
    icon: '🧠',
    color: 'bg-purple-100 text-purple-800',
  },
  {
    id: '2',
    name: 'Heart Health',
    slug: 'heart-health',
    description: 'Support cardiovascular health and healthy circulation',
    icon: '❤️',
    color: 'bg-red-100 text-red-800',
  },
  {
    id: '3',
    name: 'Joint Support',
    slug: 'joint-support',
    description: 'Promote joint comfort, flexibility, and mobility',
    icon: '🦴',
    color: 'bg-orange-100 text-orange-800',
  },
  {
    id: '4',
    name: 'Immunity',
    slug: 'immunity',
    description: 'Boost immune function and seasonal defense',
    icon: '🛡️',
    color: 'bg-green-100 text-green-800',
  },
  {
    id: '5',
    name: 'Skin, Hair & Nails',
    slug: 'skin-hair-nails',
    description: 'Support radiant skin, healthy hair, and strong nails',
    icon: '✨',
    color: 'bg-pink-100 text-pink-800',
  },
  {
    id: '6',
    name: 'Weight Support',
    slug: 'weight-support',
    description: 'Support healthy metabolism and weight management',
    icon: '⚖️',
    color: 'bg-teal-100 text-teal-800',
  },
  {
    id: '7',
    name: 'Energy & Vitality',
    slug: 'energy-vitality',
    description: 'Boost energy, stamina, and overall vitality',
    icon: '⚡',
    color: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: '8',
    name: 'Hormonal Balance',
    slug: 'hormonal-balance',
    description: 'Support hormonal health and overall wellness',
    icon: '🌸',
    color: 'bg-indigo-100 text-indigo-800',
  },
]

export function getConcernBySlug(slug: string) {
  return concerns.find((concern) => concern.slug === slug)
}

export function getAllConcerns() {
  return concerns
}

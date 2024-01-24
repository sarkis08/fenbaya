export const PRODUCT_CATEGORIES = [
  {
    label: 'USA and Canada Mattresses',
    value: 'mattress' as const,
    featured: [
      {
        name: 'Steans and Foster Mattresses',
        href: `/products?category=stains_and_fosters_mattresses`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'Beautyrest Mattresses',
        href: '/products?category=beautyrest_mattresses&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Orthopedic Mattresses',
        href: '/products?category=orthopedic_mattresses',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Home Furnitures',
    value: 'salone_foods' as const,
    featured: [
      {
        name: 'Salone Foods',
        href: `/products?category=salone_foods`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=salone_foods&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Africa Products',
        href: '/products?category=salone_foods',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]

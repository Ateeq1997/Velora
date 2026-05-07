export const contactDetails = {
  primaryEmail: 'hello@aurevia.studio',
  officeEmail: 'concierge@aurevia.studio',
  storeEmail: 'gallery@aurevia.studio',
  phone: '+1 (323) 555-0148',
  altPhone: '+1 (310) 555-0196',
  footerAddress: '18 Mercer Atelier, West Hollywood, CA',
  officeAddress: '18 Mercer Atelier, West Hollywood, CA',
  storeAddress: '245 Ocean Avenue, Santa Monica, CA',
}

export const catalog = [
  { id: 1, image: '/img/product-1.jpg', name: 'Aurevia Wave ANC Headphones', price: 149, category: 'Electronics & Gadgets', brand: 'TechPro', tags: ['Premium', 'Trending'] },
  { id: 2, image: '/img/product-2.jpg', name: 'Selene Leather Moto Jacket', price: 299, category: 'Fashion & Clothing', brand: 'LuxeWear', tags: ['Luxury', 'Exclusive'] },
  { id: 3, image: '/img/product-3.jpg', name: 'PulseTrack Pro Watch', price: 199, category: 'Sports & Fitness', brand: 'EliteFit', tags: ['Trending', 'Premium'] },
  { id: 4, image: '/img/product-4.jpg', name: 'Luna Satin Evening Dress', price: 129, category: 'Fashion & Clothing', brand: 'StyleCo', tags: ['New Arrivals', 'Fashion'] },
  { id: 5, image: '/img/product-5.jpg', name: 'Arc Performance Mouse', price: 89, category: 'Electronics & Gadgets', brand: 'TechPro', tags: ['Gadgets', 'Sale'] },
  { id: 6, image: '/img/product-6.jpg', name: 'Raw Edge Straight Denim', price: 79, category: 'Fashion & Clothing', brand: 'UrbanEdge', tags: ['Clothing', 'Trending'] },
  { id: 7, image: '/img/product-7.jpg', name: 'Noir Bloom Fragrance Duo', price: 119, category: 'Beauty & Personal Care', brand: 'NexBrand', tags: ['Luxury', 'Beauty'] },
  { id: 8, image: '/img/product-8.jpg', name: 'RoomTune Portable Speaker', price: 99, category: 'Electronics & Gadgets', brand: 'TechPro', tags: ['Electronics', 'Premium'] },
  { id: 9, image: '/img/product-9.jpg', name: 'Velocity Knit Runners', price: 139, category: 'Sports & Fitness', brand: 'EliteFit', tags: ['Sports', 'New Arrivals'] },
  { id: 10, image: '/img/product-10.jpg', name: 'Monaco Frame Sunglasses', price: 69, category: 'Fashion & Clothing', brand: 'LuxeWear', tags: ['Accessories', 'Sale'] },
  { id: 11, image: '/img/product-11.jpg', name: 'Sculpt Crossbody Bag', price: 159, category: 'Fashion & Clothing', brand: 'StyleCo', tags: ['Accessories', 'Exclusive'] },
  { id: 12, image: '/img/product-12.jpg', name: 'HydraSteel Sport Bottle', price: 39, category: 'Sports & Fitness', brand: 'UrbanEdge', tags: ['Sports', 'Premium'] },
]

export const featuredProductIds = [1, 2, 3, 4, 5]
export const recentProductIds = [6, 7, 8, 9, 10]
export const relatedProductIds = [10, 8, 6, 4]

export const selectProducts = (ids) => ids
  .map((id) => catalog.find((product) => product.id === id))
  .filter(Boolean)

export const productDetailContent = {
  productId: 1,
  originalPrice: 199,
  description: 'The Aurevia Wave ANC Headphones combine immersive audio, adaptive noise cancellation, and an editorial matte finish designed to look as refined as they sound. Built for focused work sessions, long-haul travel, and late-night playlists, they balance comfort, battery life, and clarity without feeling bulky.',
  specifications: [
    'Driver Size: 40mm precision dynamic drivers',
    'Battery Life: Up to 30 hours with ANC enabled',
    'Connectivity: Bluetooth 5.3 and wired 3.5mm input',
    'Modes: Transparency, adaptive ANC, and low-latency audio',
    'Finish: Soft-touch graphite shell with memory-foam cushions',
  ],
  submittedReview: {
    reviewer: 'Nadia Brooks',
    date: '15 Mar 2024',
    text: 'The build feels premium, the soundstage is wider than expected, and the matte finish makes them look far more elevated than typical wireless headphones.',
  },
  carouselReviews: [
    {
      quote: 'The packaging, finish, and listening experience all feel considered. It reads like a luxury product, not a generic gadget.',
      author: 'Mila Santos',
    },
    {
      quote: 'Aurevia nailed the balance between style and performance. These became my default pair for work, travel, and editing sessions.',
      author: 'Jordan Lee',
    },
    {
      quote: 'Excellent comfort over long sessions and a noticeably richer sound than most options in this price range.',
      author: 'Priya Desai',
    },
  ],
}
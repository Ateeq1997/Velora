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

export const getProductById = (productId) => catalog.find((product) => product.id === Number(productId)) || catalog[0]

export const getProductPath = (productId) => `/product-detail/${productId}`

const detailOverrides = {
  1: {
    originalPrice: 199,
    description: 'The Aurevia Wave ANC Headphones combine immersive audio, adaptive noise cancellation, and an editorial matte finish designed to look as refined as they sound. Built for focused work sessions, long-haul travel, and late-night playlists, they balance comfort, battery life, and clarity without feeling bulky.',
    specifications: [
      'Driver Size: 40mm precision dynamic drivers',
      'Battery Life: Up to 30 hours with ANC enabled',
      'Connectivity: Bluetooth 5.3 and wired 3.5mm input',
      'Modes: Transparency, adaptive ANC, and low-latency audio',
      'Finish: Soft-touch graphite shell with memory-foam cushions',
    ],
    sizes: ['Standard'],
    colors: ['Graphite', 'Black', 'Blue'],
  },
  2: {
    originalPrice: 369,
    description: 'The Selene Leather Moto Jacket is cut for a clean silhouette with enough structure to sit sharply over basics, tailoring, or knitwear. It gives the catalog a stronger fashion edge while still feeling wearable for everyday styling.',
    specifications: [
      'Material: Supple lambskin leather exterior',
      'Lining: Satin-touch interior for easy layering',
      'Closure: Asymmetric zip with tonal hardware',
      'Fit: Tailored cut with adjustable waist tabs',
      'Care: Professional leather care recommended',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Mocha', 'Stone'],
  },
  3: {
    originalPrice: 249,
    description: 'PulseTrack Pro Watch is designed for users who want sharper activity tracking without wearing something that looks overly technical. The case feels streamlined, the data is clear, and the finish works as well with streetwear as it does with activewear.',
    specifications: [
      'Display: High-brightness AMOLED touch screen',
      'Sensors: Heart rate, sleep, recovery, and GPS',
      'Battery Life: Up to 12 days on standard use',
      'Resistance: Water resistant up to 5 ATM',
      'Sync: iOS and Android companion support',
    ],
    sizes: ['40mm', '44mm'],
    colors: ['Black', 'Silver', 'Midnight Blue'],
  },
}

const reviewPool = [
  { quote: 'The finish, packaging, and overall presentation feel more like a studio release than a marketplace template.', author: 'Mila Santos' },
  { quote: 'Aurevia feels curated. The product mix has a clear point of view instead of reading like a random catalog.', author: 'Jordan Lee' },
  { quote: 'Strong visuals, clean pricing, and better product storytelling than most storefront demos.', author: 'Priya Desai' },
  { quote: 'The details feel deliberate, especially the product pages and the way recommendations are merchandised.', author: 'Evan Cole' },
]

export const getProductDetailContent = (productId) => {
  const product = getProductById(productId)
  const override = detailOverrides[product.id] || {}
  const related = selectProducts(relatedProductIds.filter((id) => id !== product.id))
  const gallery = [
    product.image,
    ...related.slice(0, 3).map((item) => item.image),
    ...catalog.filter((item) => item.id !== product.id && !related.some((relatedItem) => relatedItem.id === item.id)).slice(0, 2).map((item) => item.image),
  ].slice(0, 6)

  return {
    product,
    originalPrice: override.originalPrice || product.price + 50,
    description: override.description || `${product.name} is presented as part of the Aurevia edit, balancing premium materials, sharp styling, and practical everyday use. It is designed to feel elevated on the page and believable in a modern retail portfolio.` ,
    specifications: override.specifications || [
      `Category: ${product.category}`,
      `Brand: ${product.brand}`,
      'Presentation: Editorial merchandising with premium visual direction',
      'Use Case: Designed for everyday wear, gifting, or standout styling moments',
      'Availability: Limited release through the current seasonal edit',
    ],
    sizes: override.sizes || ['S', 'M', 'L', 'XL'],
    colors: override.colors || ['Ivory', 'Black', 'Sand'],
    gallery,
    submittedReview: {
      reviewer: 'Nadia Brooks',
      date: '15 Mar 2024',
      text: `I ordered the ${product.name} because it looked polished online, and it absolutely delivered. The finish feels premium and the overall presentation makes the product feel far more considered than a typical storefront item.`,
    },
    carouselReviews: reviewPool,
  }
}
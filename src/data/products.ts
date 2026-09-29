// Product catalog and boutique data for HANDSTRUNG (Pakistan Edition)
import heroEditorialImg from '../assets/images/hero_pearl_collection_1790695440596.jpg';
import pearlGraceBagImg from '../assets/images/product_pearl_grace_bag_1790695452122.jpg';
import pearlDecorBoxImg from '../assets/images/product_pearl_decor_box_1790695464080.jpg';
import bridalPearlVineImg from '../assets/images/product_bridal_pearl_vine_1790695474839.jpg';
import craftArtisanHandsImg from '../assets/images/craft_artisan_hands_1790695485711.jpg';

export interface Product {
  id: string;
  name: string;
  category: 'Bags' | 'Décor' | 'Accessories' | 'Gifts' | 'Bridal';
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  description: string;
  story: string;
  details: string[];
  materials: string[];
  dimensions: string;
  handmadeProcess: string;
  shipping: string;
  returns: string;
  inStock: boolean;
  stockCount: number;
  images: string[];
  featured?: boolean;
  giftTag?: 'For Her' | 'Bridal' | 'Birthday' | 'Special Moments';
}

export const CATEGORIES = [
  {
    id: 'bags',
    name: 'BAGS',
    displayName: 'Bags',
    subtitle: 'Pearl handbags & clutches for weddings & evenings',
    description: 'Sculptural pearl bags woven by hand for weddings, festive dinners, and timeless statement wear.',
    image: pearlGraceBagImg,
    count: 6,
  },
  {
    id: 'decor',
    name: 'DÉCOR',
    displayName: 'Décor',
    subtitle: 'Beautiful handmade details for your home & vanity',
    description: 'Tactile home accents, vanity boxes, and sculptural objects with glistening pearl texture.',
    image: pearlDecorBoxImg,
    count: 5,
  },
  {
    id: 'accessories',
    name: 'ACCESSORIES',
    displayName: 'Accessories',
    subtitle: 'Little pieces that make an elegant statement',
    description: 'Heirloom baroque pearl jewelry, hair combs, and delicate feminine adornments.',
    image: bridalPearlVineImg,
    count: 7,
  },
  {
    id: 'gifts',
    name: 'GIFTS',
    displayName: 'Gifts',
    subtitle: 'Thoughtful handmade wedding & birthday gifts',
    description: 'Handcrafted keepsake boxes, monogram charms, and bridal proposal sets.',
    image: pearlDecorBoxImg,
    count: 6,
  },
  {
    id: 'bridal',
    name: 'BRIDAL',
    displayName: 'Bridal',
    subtitle: 'Pearl pieces for Barat, Walima & Nikkah moments',
    description: 'Ethereal vines, wedding day clutches, and heirloom bridal keepsakes.',
    image: bridalPearlVineImg,
    count: 5,
  },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'pearl-grace-bag',
    name: 'Pearl Grace Bag',
    category: 'Bags',
    subtitle: 'Hand-woven sculptural shoulder bag with lustrous Grade-AAA pearls',
    price: 18500,
    originalPrice: 22000,
    rating: 4.9,
    reviewCount: 48,
    badge: 'Artisan Bestseller',
    featured: true,
    giftTag: 'For Her',
    description:
      'The crown jewel of our atelier. Each Pearl Grace Bag requires over 36 hours of continuous manual bead-weaving. Structured yet tactile, it captures and refracts light with every movement.',
    story:
      'Conceived as an heirloom accessory that blurs the boundary between jewelry and handbag. Crafted using high-tensile clear monofilament woven through grade-AAA simulated teardrop and round pearls.',
    details: [
      'Over 950 hand-placed lustrous ivory pearls',
      'Reinforced ergonomic arched handle',
      'Removable satin pouch insert with drawstring closure',
      'Sized comfortably for smartphone, cards, lip gloss & keys',
    ],
    materials: [
      'Grade-AAA simulated freshwater pearls with organic high-gloss nacre',
      'High-durability 0.6mm Japanese monofilament weave core',
      'Mulberry silk-blend interior lining pouch',
    ],
    dimensions: '7.8" L × 3.2" W × 5.9" H (Handle drop: 5.5")',
    handmadeProcess:
      'Every single pearl is individually inspected for luster and uniformity before being hand-threaded in cross-hatched tension lattices by a master artisan.',
    shipping: 'Complimentary Express Delivery across Pakistan (2-3 business days via TCS/Trax). Cash on Delivery available.',
    returns: '7-Day Atelier Checking Warranty & Replacement Guarantee.',
    inStock: true,
    stockCount: 4,
    images: [
      pearlGraceBagImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'pearl-bloom-box',
    name: 'Pearl Bloom Keepsake Box',
    category: 'Décor',
    subtitle: 'Handcrafted vanity box with floral pearl finial and velvet interior',
    price: 9500,
    originalPrice: 11000,
    rating: 5.0,
    reviewCount: 36,
    badge: 'Atelier Favorite',
    featured: true,
    giftTag: 'Special Moments',
    description:
      'A sculptural accent for dressing tables, bedside vanities, or coffee table styling. Handcrafted with hundreds of layered pearls forming a blooming floral finial upon a textured beaded cylinder.',
    story:
      'Inspired by classic boudoir vanity jars, reimagined with contemporary organic beadwork that elevates any room into a tranquil, feminine sanctuary.',
    details: [
      'Sculptural petal-shaped pearl lid handle',
      'Plush champagne velvet-lined interior base',
      'Heavy weighted base preventing tipping',
      'Ideal for gold rings, fine jewelry, trinkets, or ittar bottles',
    ],
    materials: [
      'High-luster pearlized ivory beads',
      'Champagne micro-velvet interior lining',
      'Solid non-tarnish alloy foundation armature',
    ],
    dimensions: '4.5" Diameter × 5.2" Height',
    handmadeProcess:
      'Artisans meticulously bind bead tiers around a bespoke circular frame, culminating in the hand-sculpted bloom topper.',
    shipping: 'Complimentary shipping across Pakistan on orders over Rs. 5,000. Dispatched in signature keepsake box with velvet bow.',
    returns: '7-day hassle-free replacement warranty.',
    inStock: true,
    stockCount: 6,
    images: [
      pearlDecorBoxImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'bridal-pearl-crystal-vine',
    name: 'Bridal Pearl & Crystal Floral Vine',
    category: 'Bridal',
    subtitle: 'Flexible bridal hair vine with freshwater pearls & shimmering crystal beads',
    price: 12500,
    originalPrice: 15000,
    rating: 4.9,
    reviewCount: 52,
    badge: 'Bridal Essential',
    featured: true,
    giftTag: 'Bridal',
    description:
      'An ethereal hairpiece designed for Barat, Walima, Nikkah, and bridal showers. Delicate sprigs of hand-twisted gold wire bloom into lustrous pearls and light-catching faceted crystal buds.',
    story:
      'Designed to weave seamlessly into romantic bridal updos, half-up twists, or dupatta settings. Hand-twisted to allow complete flexibility so it contours naturally to your hairstyle.',
    details: [
      'Flexible hand-twisted gold wire branches that bend to any hairstyle or dupatta pin setting',
      'Secured with invisible bobby pins or matching ivory satin ribbons (included)',
      'Feather-light weight (38g) for all-day bridal comfort',
      'Gift packaged in gold-foiled bridal presentation box',
    ],
    materials: [
      'Selected baroque & rice pearls',
      'Faceted Austrian crystal beads',
      'Tarnish-resistant 14k gold-plated jewelry wire',
    ],
    dimensions: '14.5" Length × 1.8" Maximum Width',
    handmadeProcess:
      'Twisted entirely by hand strand by strand, ensuring each petal cluster sits with graceful organic asymmetry.',
    shipping: 'Express bridal courier delivery across Pakistan. Dispatches within 24 hours.',
    returns: 'Peace-of-mind checking guarantee.',
    inStock: true,
    stockCount: 7,
    images: [
      bridalPearlVineImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'ivory-pearl-minaudiere-clutch',
    name: 'Ivory Pearl Minaudière Clutch',
    category: 'Bags',
    subtitle: 'Hard-case evening clutch embellished with iridescent pearl mosaics',
    price: 16500,
    originalPrice: 19500,
    rating: 4.8,
    reviewCount: 28,
    badge: 'Limited Run',
    featured: true,
    giftTag: 'For Her',
    description:
      'A festive statement piece crafted with faceted ivory beads and hand-inlaid mother-of-pearl tiles. Features a refined top clasp and a detachable pearl-and-gold cross-body chain.',
    story:
      'Designed for wedding receptions, festive galas, and intimate celebrations. The hard-shell structure keeps your evening essentials secure while exuding quiet luxury.',
    details: [
      'Hard shell clutch with brushed champagne gold hardware',
      'Includes detachable 42" pearl strand cross-body strap',
      'Magnetic lock clasp with pearl cabochon',
      'Fits iPhone Pro Max and makeup touch-up essentials',
    ],
    materials: [
      'High-grade pearl beads and hand-cut mother of pearl',
      'Brushed champagne gold electroplated brass hardware',
      'Satin interior with card pocket',
    ],
    dimensions: '7.5" L × 2.0" D × 4.8" H',
    handmadeProcess:
      'Each tile and bead is handset with archival jewelers resin over a hand-formed metal frame.',
    shipping: 'Fast nationwide delivery with Cash on Delivery.',
    returns: '7-day replacement warranty.',
    inStock: true,
    stockCount: 3,
    images: [
      heroEditorialImg,
      pearlGraceBagImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'beaded-baroque-vanity-tray',
    name: 'Beaded Baroque Vanity Tray',
    category: 'Décor',
    subtitle: 'Mirrored tray with ornate hand-strung pearl borders and crystal corners',
    price: 11000,
    originalPrice: 13500,
    rating: 4.9,
    reviewCount: 39,
    badge: 'Décor Favorite',
    featured: true,
    giftTag: 'For Her',
    description:
      'Elevate your perfume bottles, skincare rituals, and daily jewelry. A heavy mirrored base surrounded by intricate multi-strand pearl and crystal bead rail weaving.',
    story:
      'Created to bring tactile beauty to everyday spaces. Placed on a dresser or dressing table, the tray reflects ambient room lighting into a soft golden pearl glow.',
    details: [
      'High-clarity beveled mirror base',
      'Protective velvet backing to prevent scratching furniture',
      'Reinforced four-tiered pearl guardrail',
      'Holds 5-8 perfume flacons plus daily jewels',
    ],
    materials: [
      'Grade-AAA simulated pearls and faceted glass crystal beads',
      'Tempered 4mm beveled glass mirror',
      'Anti-slip champagne micro-suede underside',
    ],
    dimensions: '11.0" L × 7.5" W × 1.8" H',
    handmadeProcess:
      'The multi-tier pearl lattice is hand-strung directly onto the perimeter pins and hand-tensioned for structural rigidity.',
    shipping: 'Double-boxed with corner shock absorbers for secure transit across Pakistan.',
    returns: 'Full replacement guarantee if damaged in transit.',
    inStock: true,
    stockCount: 5,
    images: [
      pearlDecorBoxImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'pearl-charm-bracelet',
    name: 'Heirloom Pearl Charm Bracelet',
    category: 'Accessories',
    subtitle: 'Lustrous baroque pearls with sculpted 14k gold-dipped floral charms',
    price: 6800,
    originalPrice: 8500,
    rating: 4.9,
    reviewCount: 64,
    badge: 'Popular Gift',
    featured: true,
    giftTag: 'Birthday',
    description:
      'A delicate yet tactile wrist piece alternating natural freshwater baroque pearls with tiny hand-strung seed beads and a dainty brushed gold floral charm.',
    story:
      'A cherished everyday reminder of grace and intention. Stackable with a watch or worn as a solitary feminine accent.',
    details: [
      'Hand-selected irregular freshwater baroque pearls',
      'Adjustable 6.5" to 8" extender chain with lobster clasp',
      'Water-resistant and hypoallergenic nickel-free build',
      'Comes in a keepsake velvet jewelry pouch',
    ],
    materials: [
      'Natural freshwater pearls',
      '14k gold-filled hardware & extender chain',
      'Braided jewelers wire core',
    ],
    dimensions: '6.5" + 1.5" extender (Adjustable fit)',
    handmadeProcess:
      'Individual pearls are hand-knotted with silk thread for fluidity and heirloom longevity.',
    shipping: 'Complimentary shipping over Rs. 5,000. Dispatched within 24 hours.',
    returns: '7-day exchange or refund.',
    inStock: true,
    stockCount: 12,
    images: [
      bridalPearlVineImg,
      pearlGraceBagImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'pearl-flower-sculptural-ornament',
    name: 'Pearl Flower Sculptural Accent',
    category: 'Décor',
    subtitle: 'Hand-sculpted pearl blossom for table styling, napkins, or vanity',
    price: 4800,
    rating: 4.7,
    reviewCount: 24,
    badge: 'Handmade Unique',
    featured: false,
    giftTag: 'Special Moments',
    description:
      'A miniature work of art. 18 hand-shaped wire petals densely woven with hundreds of micro-pearls, curling open around a golden beaded stamen center.',
    story:
      'Use as a tactile paperweight, place atop books on your bedside, or style as an exquisite place-setting accent for dawat and dinner tables.',
    details: [
      'Three-dimensional blooming rose/peony botanical form',
      'Felt-padded underside for scratch-free placement',
      'Multi-tonal ivory and champagne micro-beads',
    ],
    materials: ['Glass micro-pearls', 'Gold-plated wire frame', 'Suede protective pad'],
    dimensions: '4.2" Diameter × 2.0" Height',
    handmadeProcess:
      'Each petal is shaped on a wooden mold before micro-pearls are woven through in concentric loops.',
    shipping: 'Dispatches within 1 business day via courier.',
    returns: '7-day return policy.',
    inStock: true,
    stockCount: 8,
    images: [
      pearlDecorBoxImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'signature-beaded-gift-box',
    name: 'Signature Beaded Keepsake Box',
    category: 'Gifts',
    subtitle: 'Deluxe handmade gift box with pearl ribbon bow and monogram tag option',
    price: 7800,
    rating: 5.0,
    reviewCount: 51,
    badge: 'Ready to Gift',
    featured: true,
    giftTag: 'Birthday',
    description:
      'A presentation box that is itself a lifelong gift. The lid is entirely encrusted with hand-woven cream pearls, crowned with a sculpted dimensional pearl bow.',
    story:
      'Created for those who believe the packaging should be as unforgettable as what lies within. Loved for birthdays, bridesmaids proposals, and milestone anniversaries.',
    details: [
      'Includes personalized handwritten calligraphy Urdu/English card option',
      'Removable cushioned jewelry bed inside',
      'Signature gold foil HANDSTRUNG seal on base',
    ],
    materials: [
      'Over 600 pearlized beads',
      'Hardboard structured core',
      'Plush champagne velvet interior',
    ],
    dimensions: '5.0" L × 5.0" W × 3.5" H',
    handmadeProcess:
      'Crafted by our senior artisans, weaving the intricate ribbon bow as a single seamless strand.',
    shipping: 'Express gift delivery available across all Pakistani cities.',
    returns: '7-day replacement guarantee.',
    inStock: true,
    stockCount: 9,
    images: [
      pearlDecorBoxImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'bridal-pearl-chignon-comb',
    name: 'Bridal Pearl Chignon Hair Comb',
    category: 'Bridal',
    subtitle: 'Curved hair comb adorned with cascading pearl clusters & crystals',
    price: 8800,
    originalPrice: 10500,
    rating: 4.9,
    reviewCount: 33,
    badge: 'Bridal Classic',
    featured: false,
    giftTag: 'Bridal',
    description:
      'Crafted to anchor into bridal chignons, bridal buns, or under dupattas. Features a secure gold-tone metal comb crowned with organic pearl clusters of varying dimensions.',
    story:
      'Designed to bring an effortless royal romantic touch to Pakistani brides, sisters of the bride, and bridesmaids.',
    details: [
      'Curved 12-tooth metal comb that grips securely without pulling hair',
      'Varied pearl diameters from 3mm to 10mm for natural depth',
      'Shimmers softly under wedding hall chandelier lights',
    ],
    materials: ['Simulated pearls', 'Cubic zirconia crystal accents', 'Electroplated gold alloy comb'],
    dimensions: '4.8" Width × 2.6" Height',
    handmadeProcess:
      'Hand-wired using the traditional bridal wire-weaving technique practiced in our workshop.',
    shipping: 'Fast courier shipping in bridal presentation box.',
    returns: '7-day return policy.',
    inStock: true,
    stockCount: 6,
    images: [
      bridalPearlVineImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'luminous-mini-pearl-tote',
    name: 'Luminous Mini Pearl Tote',
    category: 'Bags',
    subtitle: 'Compact top-handle mini bag hand-beaded with lustrous round pearls',
    price: 14500,
    originalPrice: 17000,
    rating: 4.8,
    reviewCount: 25,
    badge: 'New Arrival',
    featured: false,
    giftTag: 'For Her',
    description:
      'Playful yet deeply refined. A compact structured tote with twin pearl handles, perfect for hi-teas, festive lunches, or Eid gatherings.',
    story:
      'A tribute to timeless elegance, turning natural pearl iridescence into a tactile companion for festive events and evenings.',
    details: [
      'Twin rigid pearl arc handles',
      'Stands upright on its flat beaded base',
      'Supplied with removable ivory satin lining bag',
    ],
    materials: ['High-luster round acrylic pearls', 'Multi-strand reinforced nylon cord', 'Satin pouch'],
    dimensions: '6.5" L × 2.8" W × 5.0" H (Handle drop: 4.0")',
    handmadeProcess:
      'Requires 28 hours of precision bead stringing and hand-knotted stress points.',
    shipping: 'Complimentary shipping across Pakistan on orders over Rs. 5,000.',
    returns: '7-day atelier returns.',
    inStock: true,
    stockCount: 5,
    images: [
      pearlGraceBagImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'baroque-pearl-drop-earrings',
    name: 'Baroque Pearl Drop Earrings',
    category: 'Accessories',
    subtitle: 'Dramatic natural teardrop baroque pearls on 14k gold-filled huggies',
    price: 5400,
    rating: 5.0,
    reviewCount: 42,
    badge: 'Everyday Luxury',
    featured: false,
    giftTag: 'Birthday',
    description:
      'Subtle drama for every day. Handpicked organic baroque pearls with distinctive natural contours, suspended from comfortable 14k gold-filled huggie hoops.',
    story:
      'No two pearls are identical, making every pair uniquely yours. They sway gently, catching the light and illuminating your face.',
    details: [
      'Natural organic freshwater pearls (approx. 12-14mm)',
      'Click-in huggie hoop mechanism for effortless daily wear',
      'Ultra lightweight and gentle on sensitive ears',
    ],
    materials: ['Natural baroque freshwater pearls', '14k gold-filled hypoallergenic hoops'],
    dimensions: 'Drop length: 1.4"',
    handmadeProcess:
      'Each pair is meticulously matched for harmonious balance in luster and silhouette.',
    shipping: 'Dispatches within 24 hours.',
    returns: '7-day return policy.',
    inStock: true,
    stockCount: 14,
    images: [
      bridalPearlVineImg,
      pearlGraceBagImg,
      craftArtisanHandsImg,
    ],
  },
  {
    id: 'pearl-scalloped-candle-holder',
    name: 'Pearl Scalloped Candle Holder',
    category: 'Décor',
    subtitle: 'Hand-beaded tea light & taper candle holder with scalloped pearl collar',
    price: 5800,
    rating: 4.8,
    reviewCount: 29,
    badge: 'Romantic Living',
    featured: false,
    giftTag: 'Special Moments',
    description:
      'A dreamy glow for intimate dawat dinners and cozy evenings. A scalloped collar of luminous pearls surrounds standard votive candles or tea lights.',
    story:
      'When lit, the candlelight dances against the smooth curves of the pearls, projecting a soft, ambient halo onto table surfaces.',
    details: [
      'Dual-use: accommodates both standard taper candles and tea lights',
      'Heavy heat-tempered glass center insert included',
      'Protective velvet padded base',
    ],
    materials: ['Simulated ivory pearls', 'Heat-resistant glass liner', 'Gold wire framing'],
    dimensions: '3.8" Diameter × 3.2" Height',
    handmadeProcess:
      'The scalloped petals are formed and strung by hand over a three-tier circular frame.',
    shipping: 'Complimentary shipping over Rs. 5,000.',
    returns: '7-day return policy.',
    inStock: true,
    stockCount: 8,
    images: [
      pearlDecorBoxImg,
      heroEditorialImg,
      craftArtisanHandsImg,
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 'rev-1',
    author: 'Ayesha Khan',
    location: 'Lahore, DHA Phase 5',
    rating: 5,
    title: 'An absolute work of art for my Barat',
    quote:
      'I ordered the Pearl Grace Bag for my wedding reception in Lahore and all my cousins and guests literally kept asking where I bought it! The weight, luster of the pearls, and neat finishing feel truly couture. So proud that such quality is available in Pakistan.',
    productName: 'Pearl Grace Bag',
    verified: true,
    date: '3 days ago',
  },
  {
    id: 'rev-2',
    author: 'Fatima Zahra',
    location: 'Karachi, Clifton',
    rating: 5,
    title: 'Elevated my dressing room aesthetic',
    quote:
      'The Pearl Bloom Box sits on my vanity alongside my perfume collection and it looks stunning. The beadwork detail is so intricate and the packaging was so premium. Fast 2-day delivery to Karachi with Cash on Delivery!',
    productName: 'Pearl Bloom Keepsake Box',
    verified: true,
    date: '1 week ago',
  },
  {
    id: 'rev-3',
    author: 'Mahnoor Tariq',
    location: 'Islamabad, F-7',
    rating: 5,
    title: 'Breathtaking bridal hair vine',
    quote:
      'The Bridal Hair Vine was even more gorgeous in real life than in photos. My bridal salon stylist in Islamabad was amazed at how flexible it was to pin into my updo with my heavy dupatta. 10/10 recommend!',
    productName: 'Bridal Pearl & Crystal Floral Vine',
    verified: true,
    date: '2 weeks ago',
  },
  {
    id: 'rev-4',
    author: 'Zoya Malik',
    location: 'Rawalpindi, Bahria Town',
    rating: 5,
    title: 'The most elegant gift for my sister',
    quote:
      'Ordered the Heirloom Charm Bracelet and Signature Keepsake Box for my sister’s engagement gift. The gold foil HANDSTRUNG box and velvet pouch felt like a luxury designer unboxing. Will definitely order again!',
    productName: 'Signature Beaded Keepsake Box',
    verified: true,
    date: 'Yesterday',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    image: heroEditorialImg,
    caption: 'Wedding season mornings with coffee, raw silk, and handcrafted pearls. 🕊️ #HandstrungMoments #PakistaniWeddings',
    likes: '2,420',
    productTag: 'Pearl Grace Bag',
    category: 'Handbags',
  },
  {
    id: 'insta-2',
    image: pearlGraceBagImg,
    caption: 'Every corner of life deserves a little hand-strung wonder. The Pearl Grace Bag in natural golden hour light.',
    likes: '3,180',
    productTag: 'Pearl Grace Bag',
    category: 'Handbags',
  },
  {
    id: 'insta-3',
    image: pearlDecorBoxImg,
    caption: 'Vanity details. Handcrafted dressing table pieces designed to store your most cherished heirloom jewelry. ✨',
    likes: '1,480',
    productTag: 'Pearl Bloom Box',
    category: 'Décor',
  },
  {
    id: 'insta-4',
    image: craftArtisanHandsImg,
    caption: 'In the atelier: 36 hours of patience, grade-AAA pearls, and artisan hands weaving timeless magic.',
    likes: '4,250',
    productTag: 'Atelier Stories',
    category: 'Craftsmanship',
  },
  {
    id: 'insta-5',
    image: bridalPearlVineImg,
    caption: 'Walking into your special Nikkah & Barat moments adorned in handmade pearls. To have and to hold forever. 💍',
    likes: '3,890',
    productTag: 'Bridal Floral Vine',
    category: 'Bridal',
  },
  {
    id: 'insta-6',
    image: pearlDecorBoxImg,
    caption: 'Gifts that feel personal, timeless, and deeply loved. Delivering nationwide across Pakistan in luxury keepsake boxes.',
    likes: '1,920',
    productTag: 'Keepsake Box',
    category: 'Gifts',
  },
];

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  badge?: string
}

export const products: Product[] = [
  {
    id: "9",
    name: "KUE SEPEDA",
    description: "Kreasi spesial bergaya sepeda merah yang unik, lembut di setiap lapisan, dan siap jadi pusat perhatian di momen kejutan paling berkesan.",
    price: 100000,
    image: "/images/kue-sepeda.svg",
    category: "Modern",
    badge: "Limited"
  },
  {
    id: "1",
    name: "Kue Lapis Legit Premium",
    description: "Kue lapis tradisional dengan lapisan yang sempurna, dibuat dengan mentega Wijsman asli",
    price: 100000,
    image: "/images/lapis-legit.jpg",
    category: "Tradisional",
    badge: "Best Seller"
  },
  {
    id: "2",
    name: "Black Forest Cake",
    description: "Kue coklat lembut dengan ceri segar dan whipped cream premium",
    price: 100000,
    image: "/images/black-forest.jpg",
    category: "Modern"
  },
  {
    id: "3",
    name: "Nastar Keju Premium",
    description: "Nastar dengan filling nanas asli dan taburan keju Edam pilihan",
    price: 100000,
    image: "/images/nastar.jpg",
    category: "Kue Kering"
  },
  {
    id: "4",
    name: "Red Velvet Cake",
    description: "Kue red velvet dengan cream cheese frosting yang lembut",
    price: 100000,
    image: "/images/red-velvet.jpg",
    category: "Modern",
    badge: "New"
  },
  {
    id: "5",
    name: "Bolu Pandan Kukus",
    description: "Bolu pandan lembut dengan aroma pandan asli dari daun",
    price: 100000,
    image: "/images/bolu-pandan.jpg",
    category: "Tradisional"
  },
  {
    id: "6",
    name: "Cheese Cake Premium",
    description: "Cheese cake New York style dengan base oreo yang renyah",
    price: 100000,
    image: "/images/cheese-cake.jpg",
    category: "Modern"
  },
  {
    id: "7",
    name: "Putri Salju",
    description: "Kue kering dengan taburan gula halus yang meleleh di mulut",
    price: 100000,
    image: "/images/putri-salju.jpg",
    category: "Kue Kering"
  },
  {
    id: "8",
    name: "Tiramisu Cake",
    description: "Tiramisu autentik dengan mascarpone Italia dan kopi espresso",
    price: 100000,
    image: "/images/tiramisu.jpg",
    category: "Modern",
    badge: "Premium"
  }
]

export const categories = ["Semua", "Tradisional", "Modern", "Kue Kering"]

export function formatRupiah(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

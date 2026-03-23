"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredProducts = activeCategory === "Semua"
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <section id="produk" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Koleksi Kami
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Produk Pilihan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai kue lezat untuk setiap momen spesial Anda
          </p>
        </div>

        {/* Category Filter */}
        <div id="kategori" className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

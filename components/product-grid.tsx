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
    <section id="produk" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Etalase Gura
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Produk pilihan dengan nuansa belanja ala marketplace
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Scroll seperti sedang cuci mata di Tokopedia, tapi semua isinya fokus ke kue premium, hampers manis, dan kreasi custom Gura.
            </p>
          </div>
          <div className="rounded-2xl bg-card px-5 py-4 shadow-sm ring-1 ring-border">
            <p className="text-sm text-muted-foreground">Produk tampil</p>
            <p className="text-2xl font-bold text-foreground">{filteredProducts.length} item</p>
          </div>
        </div>

        <div id="kategori" className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 ${activeCategory === category ? "shadow-[0_10px_20px_rgba(46,184,77,0.22)]" : "bg-card"}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

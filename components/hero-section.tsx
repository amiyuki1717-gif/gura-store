"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Toko Kue Premium
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              Kelezatan Autentik dalam Setiap Gigitan
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Nikmati berbagai pilihan kue tradisional dan modern, dibuat dengan cinta dan bahan-bahan berkualitas terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#produk">
                  Lihat Produk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="#tentang">Tentang Kami</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-2xl">
              <img
                src="/images/hero-cake.jpg"
                alt="Kue premium Gura"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-card rounded-xl p-4 shadow-lg border border-border">
              <p className="text-sm text-muted-foreground">Dipercaya oleh</p>
              <p className="font-serif text-2xl font-semibold text-foreground">5000+</p>
              <p className="text-sm text-muted-foreground">Pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

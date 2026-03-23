"use client"

import { Search, ShoppingCart, Menu, X, MapPin, MessageCircle, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const { totalItems, setIsCartOpen } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const quickLinks = [
    { href: "#produk", label: "Kue Pilihan" },
    { href: "#kategori", label: "Kategori" },
    { href: "#tentang", label: "Kenapa Gura" },
    { href: "https://t.me/mantelkagura", label: "Kontak", external: true },
  ]

  const menuPills = [
    "Promo Hari Ini",
    "Kreasi Baru",
    "Favorit Anak",
    "Custom Event",
    "Siap Kirim",
    "Best Seller",
  ]

  const mobileMenuLinks = [
    ...quickLinks,
    { href: "https://t.me/mantelkagura", label: "Chat Telegram", external: true },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="border-b border-border/70 bg-[#F3F4F5]">
        <div className="container mx-auto hidden items-center justify-between px-4 py-2 text-xs text-muted-foreground md:flex">
          <div className="flex items-center gap-5">
            <span className="font-medium text-foreground">Belanja di Gura</span>
            <span>Promo kue custom untuk ulang tahun & hampers</span>
          </div>
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 py-3 md:gap-5">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-[0_12px_24px_rgba(46,184,77,0.24)]">
              <span className="font-serif text-xl font-bold text-primary-foreground">G</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-2xl font-semibold leading-none text-foreground">Gura</p>
              <p className="text-xs text-muted-foreground">Cake marketplace vibes</p>
            </div>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center gap-3 md:flex">
            <button className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40">
              <Menu className="h-4 w-4" />
              Kategori
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>

            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-border bg-card px-4 py-3 shadow-sm ring-1 ring-transparent transition-all hover:border-primary/40 hover:ring-primary/10">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="truncate text-sm text-muted-foreground">
                Cari kue ulang tahun, hampers, atau kreasi custom favoritmu
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="max-w-32 truncate">Kirim ke Jakarta</span>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden rounded-full md:inline-flex">
              <Bell className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full"
              onClick={() => setIsCartOpen(true)}
              aria-label="Keranjang belanja"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="hidden rounded-full border-primary/20 bg-primary/8 text-primary hover:bg-primary/14 md:inline-flex"
              asChild
            >
              <a href="https://t.me/mantelkagura" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Chat Admin
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu navigasi"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="hidden gap-2 overflow-x-auto pb-4 md:flex">
          {menuPills.map((pill) => (
            <a
              key={pill}
              href="#produk"
              className="shrink-0 rounded-full border border-[#DDEADF] bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
            >
              {pill}
            </a>
          ))}
        </div>

        {isMobileMenuOpen && (
          <nav className="border-t border-border py-4 md:hidden">
            <div className="mb-3 flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3">
              <Search className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Cari kue favoritmu</span>
            </div>
            <div className="flex flex-col gap-2">
              {mobileMenuLinks.map((link) => (
                <a
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {menuPills.slice(0, 4).map((pill) => (
                <a
                  key={pill}
                  href="#produk"
                  className="rounded-full bg-secondary px-3 py-2 text-xs font-medium text-secondary-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {pill}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

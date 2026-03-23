"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BadgePercent, Clock3, ShieldCheck, Sparkles, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-8 pt-6 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[1.65fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0F9D58_0%,#16A34A_52%,#7ED957_100%)] px-6 py-7 text-primary-foreground shadow-[0_28px_60px_rgba(19,148,68,0.24)] md:px-10 md:py-10">
            <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-0 right-12 h-40 w-40 rounded-full bg-lime-200/15 blur-2xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-2 text-sm font-medium backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Banner kreasi Gura dengan nuansa marketplace
                </div>
                <h1 className="max-w-2xl font-sans text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
                  Belanja Kue Jadi Lebih Seru, Cepat, dan Bikin Lapar Mata
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/88 md:text-lg">
                  Dari kue ulang tahun sampai hampers manis, semua tampil lebih segar dengan vibe hijau yang familiar dan pengalaman belanja yang terasa ringan.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="rounded-full bg-white px-7 text-base font-semibold text-primary hover:bg-white/92" asChild>
                    <a href="#produk">
                      Belanja Sekarang
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/30 bg-white/10 px-7 text-base text-white hover:bg-white/16 hover:text-white"
                    asChild
                  >
                    <a href="https://t.me/mantelkagura" target="_blank" rel="noopener noreferrer">
                      Tanya Menu Custom
                    </a>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Gratis kartu ucapan",
                    "Bisa same day area tertentu",
                    "Desain custom by request",
                  ].map((item) => (
                    <div key={item} className="rounded-full bg-black/10 px-4 py-2 text-sm text-white/92 backdrop-blur">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[28px] bg-white/14 p-4 backdrop-blur">
                  <div className="grid grid-cols-[1fr_auto] gap-4 rounded-[24px] bg-white px-4 py-4 text-foreground shadow-lg">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Promo Gura</p>
                      <h3 className="mt-2 text-2xl font-bold">Diskon manis sampai 25%</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Untuk whole cake, dessert box, dan hampers yang lagi banyak dicari minggu ini.
                      </p>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <BadgePercent className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    { icon: Star, title: "4.9/5", text: "Rating pelanggan puas" },
                    { icon: Clock3, title: "Fast Response", text: "Admin aktif tiap hari" },
                    { icon: ShieldCheck, title: "Aman", text: "Packing rapi & premium" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[24px] bg-white/14 p-4 text-white backdrop-blur">
                      <item.icon className="mb-4 h-6 w-6" />
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm text-white/78">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-border bg-card p-5 shadow-[0_18px_36px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sedang ramai</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground">Pilihan cepat buat checkout hari ini</h2>
              <div className="mt-5 space-y-3">
                {[
                  { name: "KUE SEPEDA", info: "Limited edition untuk hadiah unik", image: "/images/kue-sepeda.svg" },
                  { name: "Red Velvet Cake", info: "Lembut, bold, dan paling cepat habis", image: "/images/red-velvet.jpg" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href="#produk"
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background p-3 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-2xl bg-secondary">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[28px] bg-[#DDF8E6] p-5">
                <p className="text-sm font-medium text-[#0B7A34]">Voucher pelanggan baru</p>
                <p className="mt-2 text-3xl font-bold text-[#065F2C]">15%</p>
                <p className="mt-1 text-sm text-[#0B7A34]">Min. belanja Rp150.000</p>
              </div>
              <div className="rounded-[28px] bg-[#FFF4D8] p-5">
                <p className="text-sm font-medium text-[#9A6500]">Custom cepat</p>
                <p className="mt-2 text-3xl font-bold text-[#7A4E00]">2 Jam</p>
                <p className="mt-1 text-sm text-[#9A6500]">Estimasi respon desain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

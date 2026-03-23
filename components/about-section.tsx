import { Award, Heart, Leaf, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    description: "Setiap kue dibuat dengan penuh kasih sayang dan dedikasi untuk memberikan yang terbaik."
  },
  {
    icon: Leaf,
    title: "Bahan Berkualitas",
    description: "Kami hanya menggunakan bahan-bahan premium dan segar tanpa pengawet buatan."
  },
  {
    icon: Award,
    title: "Resep Autentik",
    description: "Resep turun-temurun yang telah diwariskan dan disempurnakan selama puluhan tahun."
  },
  {
    icon: Users,
    title: "Pelayanan Prima",
    description: "Tim kami siap melayani Anda dengan sepenuh hati untuk kepuasan pelanggan."
  }
]

export function AboutSection() {
  return (
    <section id="tentang" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Tentang Kami
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gura telah melayani pelanggan sejak 2010, menghadirkan kelezatan 
            autentik dengan sentuhan modern untuk setiap momen spesial Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[24px] border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

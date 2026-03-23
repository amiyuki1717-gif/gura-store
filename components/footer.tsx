import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="kontak" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg font-bold">G</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Gura</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Toko kue premium dengan berbagai pilihan kue tradisional dan modern, 
              dibuat dengan cinta dan bahan berkualitas.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Jl. Sudirman No. 123, Jakarta Pusat 10220</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>hello@kuenusantara.id</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Jam Operasional</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Senin - Jumat</p>
                  <p>08:00 - 21:00 WIB</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">Sabtu - Minggu</p>
                  <p>09:00 - 22:00 WIB</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Pembayaran</h3>
            <p className="text-sm text-background/70 mb-4">
              Kami menerima berbagai metode pembayaran e-wallet Indonesia:
            </p>
            <div className="flex flex-wrap gap-2">
              {["GoPay", "OVO", "DANA", "ShopeePay"].map((wallet) => (
                <span
                  key={wallet}
                  className="px-3 py-1.5 bg-background/10 rounded-full text-xs font-medium"
                >
                  {wallet}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Gura. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

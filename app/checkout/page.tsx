"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, CreditCard, Truck, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { formatRupiah } from "@/lib/products"
import { PaymentModal } from "@/components/payment-modal"

const SHIPPING_COST = 25000

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    notes: ""
  })

  const grandTotal = totalPrice + SHIPPING_COST

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else if (step === 2 && paymentMethod) {
      setIsPaymentModalOpen(true)
    }
  }

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false)
    setStep(3)
    clearCart()
  }

  if (items.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Keranjang Kosong
          </h1>
          <p className="text-muted-foreground mb-6">
            Anda belum memiliki item di keranjang belanja
          </p>
          <Button asChild>
            <Link href="/">Kembali ke Toko</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-sm font-bold">K</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Checkout
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { num: 1, label: "Pengiriman", icon: Truck },
            { num: 2, label: "Pembayaran", icon: CreditCard },
            { num: 3, label: "Selesai", icon: Check }
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={`flex items-center gap-2 ${step >= s.num ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= s.num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > s.num ? <Check className="h-5 w-5" /> : <s.icon className="h-5 w-5" />}
                </div>
                <span className="hidden sm:inline text-sm font-medium">{s.label}</span>
              </div>
              {i < 2 && (
                <div className={`w-12 sm:w-20 h-0.5 mx-2 ${step > s.num ? 'bg-primary' : 'bg-muted'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Success State */}
        {step === 3 ? (
          <Card className="max-w-lg mx-auto text-center">
            <CardContent className="pt-10 pb-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                Pembayaran Berhasil!
              </h2>
              <p className="text-muted-foreground mb-6">
                Terima kasih telah berbelanja di Gura. Pesanan Anda sedang diproses.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Konfirmasi pesanan telah dikirim ke email Anda.
              </p>
              <Button asChild>
                <Link href="/">Kembali ke Beranda</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Shipping Info */}
                {step === 1 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif">
                        <User className="h-5 w-5" />
                        Informasi Pengiriman
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nama Lengkap</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Nomor Telepon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="08123456789"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Alamat Lengkap</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="Jl. Sudirman No. 123, RT 01/RW 02"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">Kota</Label>
                          <Input
                            id="city"
                            name="city"
                            placeholder="Jakarta"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Kode Pos</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            placeholder="12345"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Catatan (Opsional)</Label>
                        <Input
                          id="notes"
                          name="notes"
                          placeholder="Instruksi khusus untuk pengiriman"
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Lanjut ke Pembayaran
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Payment */}
                {step === 2 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif">
                        <CreditCard className="h-5 w-5" />
                        Metode Pembayaran
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="space-y-3">
                          {[
                            { id: "gopay", name: "GoPay", color: "bg-green-500" },
                            { id: "ovo", name: "OVO", color: "bg-purple-500" },
                            { id: "dana", name: "DANA", color: "bg-blue-500" },
                            { id: "shopeepay", name: "ShopeePay", color: "bg-orange-500" }
                          ].map((wallet) => (
                            <label
                              key={wallet.id}
                              className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                                paymentMethod === wallet.id 
                                  ? 'border-primary bg-primary/5' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <RadioGroupItem value={wallet.id} id={wallet.id} />
                              <div className={`w-10 h-10 rounded-lg ${wallet.color} flex items-center justify-center text-white font-bold text-sm`}>
                                {wallet.name.charAt(0)}
                              </div>
                              <span className="font-medium text-foreground">{wallet.name}</span>
                            </label>
                          ))}
                        </div>
                      </RadioGroup>

                      <div className="flex gap-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setStep(1)}
                          className="flex-1"
                        >
                          Kembali
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1" 
                          disabled={!paymentMethod}
                        >
                          Bayar Sekarang
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="font-serif">Ringkasan Pesanan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.quantity}x {formatRupiah(item.price)}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {formatRupiah(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">{formatRupiah(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ongkos Kirim</span>
                      <span className="text-foreground">{formatRupiah(SHIPPING_COST)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-serif text-xl font-bold text-primary">
                      {formatRupiah(grandTotal)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onSuccess={handlePaymentSuccess}
        paymentMethod={paymentMethod}
        amount={grandTotal}
      />
    </div>
  )
}

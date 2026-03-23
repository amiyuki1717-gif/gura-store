"use client"

import { useState, useEffect } from "react"
import { Check, Loader2, Smartphone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { formatRupiah } from "@/lib/products"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  paymentMethod: string
  amount: number
}

const walletConfig: Record<string, { name: string; color: string; bgColor: string }> = {
  gopay: { name: "GoPay", color: "text-green-600", bgColor: "bg-green-500" },
  ovo: { name: "OVO", color: "text-purple-600", bgColor: "bg-purple-500" },
  dana: { name: "DANA", color: "text-blue-600", bgColor: "bg-blue-500" },
  shopeepay: { name: "ShopeePay", color: "text-orange-600", bgColor: "bg-orange-500" }
}

export function PaymentModal({ isOpen, onClose, onSuccess, paymentMethod, amount }: PaymentModalProps) {
  const [status, setStatus] = useState<"pending" | "processing" | "success">("pending")
  const [countdown, setCountdown] = useState(300) // 5 minutes

  const wallet = walletConfig[paymentMethod] || walletConfig.gopay

  useEffect(() => {
    if (!isOpen) {
      setStatus("pending")
      setCountdown(300)
      return
    }

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSimulatePayment = () => {
    setStatus("processing")
    // Simulate payment processing
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => {
        onSuccess()
      }, 1500)
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-center">
            Pembayaran {wallet.name}
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {status === "pending" && (
            <div className="text-center space-y-6">
              {/* Wallet Icon */}
              <div className={`w-20 h-20 rounded-2xl ${wallet.bgColor} flex items-center justify-center mx-auto`}>
                <span className="text-white font-bold text-2xl">
                  {wallet.name.charAt(0)}
                </span>
              </div>

              {/* Amount */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Pembayaran</p>
                <p className={`font-serif text-3xl font-bold ${wallet.color}`}>
                  {formatRupiah(amount)}
                </p>
              </div>

              {/* QR Code Simulation */}
              <div className="bg-muted rounded-xl p-6 mx-auto max-w-[200px]">
                <div className="aspect-square bg-foreground rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-1 p-4">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-sm ${Math.random() > 0.5 ? 'bg-background' : 'bg-foreground'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Scan QR di aplikasi {wallet.name}
                </p>
              </div>

              {/* Countdown */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Selesaikan pembayaran dalam</p>
                <p className="text-xl font-mono font-bold text-foreground">
                  {formatTime(countdown)}
                </p>
              </div>

              {/* Instructions */}
              <div className="bg-secondary/50 rounded-lg p-4 text-left">
                <p className="text-sm font-medium text-foreground mb-2">Cara Pembayaran:</p>
                <ol className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">1.</span>
                    <span>Buka aplikasi {wallet.name} di HP Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">2.</span>
                    <span>Pilih menu Scan untuk scan QR Code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0">3.</span>
                    <span>Konfirmasi pembayaran di aplikasi</span>
                  </li>
                </ol>
              </div>

              {/* Demo Button */}
              <div className="pt-2">
                <Button onClick={handleSimulatePayment} className="w-full" size="lg">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Simulasi Pembayaran Berhasil
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Klik untuk simulasi pembayaran berhasil (Demo)
                </p>
              </div>
            </div>
          )}

          {status === "processing" && (
            <div className="text-center py-10">
              <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground">Memproses Pembayaran...</p>
              <p className="text-sm text-muted-foreground mt-2">
                Mohon tunggu sebentar
              </p>
            </div>
          )}

          {status === "success" && (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <p className="text-lg font-medium text-foreground">Pembayaran Berhasil!</p>
              <p className="text-sm text-muted-foreground mt-2">
                Terima kasih atas pembayaran Anda
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useAccount, useBalance } from "wagmi"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function Hero() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">BASE</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">DAY 2: Foundations of Building on Base</span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Build on Base <span className="text-primary">without limits.</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Connect your wallet and start building on the Base blockchain. Experience seamless Web3 integration with
                OnchainKit.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://docs.base.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors font-medium"
                >
                  View Documentation
                </a>
                <a
                  href="https://base.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-border hover:bg-card transition-colors font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right content - Wallet Info or Connection Prompt */}
            <div className="lg:pl-12">
              {mounted && isConnected ? (
                <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Wallet Info</h3>
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">Connected Address</p>
                          <p className="font-mono text-sm truncate">{address}</p>
                        </div>
                      </div>

                      <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                        <p className="text-sm text-muted-foreground mb-2">ETH Balance</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-4xl font-bold text-primary">
                            {balance ? Number.parseFloat(balance.formatted).toFixed(4) : "0.0000"}
                          </p>
                          <p className="text-xl text-muted-foreground">ETH</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">on Base Network</p>
                      </div>

                      <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">Base Mainnet</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Get Started</h3>
                    <p className="text-muted-foreground">
                      Connect your wallet using the button in the top right corner to view your ETH balance and start
                      building on Base.
                    </p>
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm text-primary">Click "Connect Wallet" in the header to begin</p>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function WalletComponents() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const getConnectorDisplayName = (connector: any) => {
    const name = connector.name.toLowerCase()
    const id = connector.id.toLowerCase()

    if (name.includes("coinbase") || id.includes("coinbase")) {
      return "Coinbase Wallet"
    }
    if (name.includes("metamask") || id.includes("metamask")) {
      return "MetaMask"
    }
    if (name.includes("injected") || id.includes("injected")) {
      return "Browser Wallet"
    }
    if (name.includes("walletconnect") || id.includes("walletconnect")) {
      return "WalletConnect"
    }

    return connector.name || "Wallet"
  }

  return (
    <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Wallet Connection</h3>
          {isConnected && <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />}
        </div>

        {!isConnected ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">Connect your wallet to get started with Base blockchain</p>

            <div className="space-y-3">
              {connectors.map((connector) => (
                <Button
                  key={connector.id}
                  onClick={() => connect({ connector })}
                  disabled={isPending}
                  className="w-full h-12 text-base"
                  variant="default"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  {isPending ? "Connecting..." : `Connect ${getConnectorDisplayName(connector)}`}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Wallet Info */}
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

              {/* Balance Display */}
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

              {/* Network Info */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">Base Mainnet</span>
              </div>
            </div>

            {/* Actions */}
            <Button onClick={() => disconnect()} variant="outline" className="w-full">
              Disconnect Wallet
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}

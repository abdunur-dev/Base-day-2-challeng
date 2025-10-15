"use client"

import type React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import { http, createConfig } from "wagmi"
import { base } from "wagmi/chains"
import { coinbaseWallet, injected } from "wagmi/connectors"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    injected(),
    coinbaseWallet({
      appName: "Base OnchainKit App",
      preference: "eoaOnly", // Use EOA only to minimize SDK features
    }),
  ],
  transports: {
    [base.id]: http(),
  },
})

if (typeof window !== "undefined") {
  const originalError = console.error
  console.error = (...args: any[]) => {
    if (typeof args[0] === "string" && args[0].includes("Analytics SDK")) {
      return // Suppress analytics errors
    }
    originalError.apply(console, args)
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  baseSepolia,
  base,
  avalanche,
  avalancheFuji
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { http } from "wagmi";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "Randamu",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  chains: [
    baseSepolia,
    base,
    avalanche,
    avalancheFuji,
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
    [avalanche.id]: http(),
    [avalancheFuji.id]: http(),
  },
});

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

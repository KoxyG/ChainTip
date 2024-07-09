import {
    RainbowKitProvider,
    lightTheme,
    connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { injectedWallet } from "@rainbow-me/rainbowkit/wallets";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { http, WagmiProvider, createConfig } from "wagmi";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { celo, celoAlfajores } from "wagmi/chains";
import { Poppins } from 'next/font/google';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const connectors = connectorsForWallets(
    [
        {
            groupName: "Recommended",
            wallets: [injectedWallet],
        },
    ],
    {
        appName: "Celo Composer",
        projectId: "044601f65212332475a09bc14ceb3c34",
    }
);

const config = createConfig({
    connectors,
    chains: [celo, celoAlfajores],
    transports: {
        [celo.id]: http(),
        [celoAlfajores.id]: http(),
    },
});

const queryClient = new QueryClient();

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
  });

function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                  theme={lightTheme({
                    accentColor: '#ac740c',
                    accentColorForeground: 'white',
                    borderRadius: 'medium',
                    fontStack: 'system',
                  })}  
                >
                    <div className="className={poppins.className}">
                    <Layout >
                        <Component {...pageProps} />
                    </Layout>
                    </div>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default App;

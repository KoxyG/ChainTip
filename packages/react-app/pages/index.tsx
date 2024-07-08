import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Hero from "@/components/Home/hero";

export default function Home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="">
            
            {isConnected ? (
                <div className="">
                    Your address: {userAddress}
                </div>
            ) : (
                <div>
                  <Hero />
                </div>
            )}
        </div>
    );
}

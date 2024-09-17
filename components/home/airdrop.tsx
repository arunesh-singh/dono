"use client";

import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { useWalletStore } from "@/store/wallet-store";
import { ConnectWallet } from "./connect-wallet";

interface AirdropProps {
  amount: string;
}

export const Airdrop: React.FC<AirdropProps> = ({ amount }) => {
  const wallet = useWalletStore((state) => state.wallet);

  const { isConnected, publicKey } = useMemo(() => {
    if (wallet) {
      return {
        isConnected: wallet.connected,
        publicKey: wallet.publicKey,
      };
    }

    return {
      isConnected: false,
      publicKey: null,
    };
  }, [wallet]);

  console.log(isConnected, publicKey);

  return isConnected ? (
    <Button size="lg" className="w-full ">
      Request Airdrop
    </Button>
  ) : (
    <Button size="lg" className="w-full ">
      Connect Wallet
    </Button>
  );
};

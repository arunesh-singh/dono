import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { create } from 'zustand';

export interface WalletStore {
  wallet: UnsafeBurnerWalletAdapter | null;
  setWallet: (wallet: UnsafeBurnerWalletAdapter) => void;
}

export const useWalletStore = create<WalletStore>((set) => ({
  wallet: null,
  setWallet: (wallet) => set({ wallet }),
}));
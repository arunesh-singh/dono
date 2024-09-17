"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardIcon, SunIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath, getMasterKeyFromSeed } from "ed25519-hd-key";
import { Keypair, Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { use, useCallback, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { set } from "react-hook-form";
import { WalletDetails } from "@/components/home/wallet/wallet-details";

type Wallet = {
  seed: string[];
  secret: string;
  publicKey: string;
  balance?: number;
};

export const LAMPORTS_PER_SOL = 1000000000;

const WalletPage = () => {
  const [mnemonicWords, setMnemonicWords] = useState<string[]>([]);
  const [vault, setVault] = useState<Wallet | null>(null);
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);

  const createConnection = () => {
    return new Connection(clusterApiUrl("devnet"));
  };

  console.log(createConnection());

  const createAccount = () => {
    const mnemonic = generateMnemonic();

    setMnemonicWords(mnemonic.split(" "));
    const seed = mnemonicToSeedSync(mnemonic);

    const path = `m/44'/501'/${0}'/0'`;

    // from this derived seed we can get modified mnemonic
    const derivedSeed = derivePath(path, seed.toString("hex")).key;

    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

    const keypair = Keypair.fromSecretKey(secret);

    const privateKey = Buffer.from(keypair.secretKey).toString("base64");
    // console.log("privateKey: ", privateKey);
    setPublicKey(keypair.publicKey);
    const publicKey = keypair.publicKey.toBase58();

    const initialBalance = 0;
    setVault({
      seed: mnemonic.split(" "),
      secret: privateKey,
      publicKey: publicKey,
      balance: initialBalance,
    });
  };

  const getBalance = async (publicKey: PublicKey) => {
    const connection = createConnection();

    const lamports = await connection.getBalance(publicKey).catch((err) => {
      console.error(`Error: ${err}`);
    });

    return lamports ? lamports / LAMPORTS_PER_SOL : 0;
  };

  return (
    <section className="w-full space-y-4 px-20">
      <h1 className="text-[4rem] font-bold leading-10 mt-8">Wallet</h1>
      <h5 className="text-2xl ">
        A personal Web-3 Wallet for Harkirat&apos;s cohort 3.0 assignment.
      </h5>
      <div className="flex w-full gap-8">
        <Input
          placeholder="Enter your secret phrase (or leave black to generate)"
          className="w-full h-10 rounded-xl"
        />
        <Button onClick={() => createAccount()} className=" rounded-xl">
          Add Wallet
        </Button>
      </div>
      {vault && <WalletDetails wallet={vault} />}
      <Button
        onClick={() => console.log("Balance: ", getBalance(publicKey!))}
        className=" rounded-xl">
        Get Balance
      </Button>
    </section>
  );
};

export default WalletPage;

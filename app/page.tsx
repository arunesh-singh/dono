import Image from "next/image";
import NextLogo from "@/public/next.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInGoogleButton } from "@/components/auth/signInGoogle";

export default function Home() {
  return (
    <main className="h-full w-full bg-gradient-to-t to-indigo-500 from-black">
      <header className="flex items-center justify-between px-20 py-10">
        <Image src={NextLogo} alt="Create Next App" width={200} height={200} />
        <div className="flex item-center border gap-8 px-4 py-2 rounded-full">
          <Link href="/">
            <Button variant="link" className="text-white">
              Home
            </Button>
          </Link>
          <Link href="/">
            <Button variant="link" className="text-white">
              Features
            </Button>
          </Link>
          <Link href="/">
            <Button variant="link" className="text-white">
              Resource Library
            </Button>
          </Link>
          <Link href="/">
            <Button variant="link" className="text-white">
              Compare
            </Button>
          </Link>
          <Link href="/">
            <Button variant="link" className="text-white">
              Token
            </Button>
          </Link>
        </div>
        <SignInGoogleButton />
      </header>
      <section className="h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-[4rem] leading-[6rem] font-semibold text-white">
          Decentralised Web3
        </h2>
        <h1 className="text-[5rem] font-bold text-white">
          Wallet For Self Custody
        </h1>
        <div className="mt-20">
          <SignInGoogleButton dashboard />
        </div>
      </section>
    </main>
  );
}

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";
import GoogleIcon from "@/public/google.svg";
import Link from "next/link";

export const SignInGoogleButton = ({ dashboard }: { dashboard?: boolean }) => {
  const session = useSession();
  return session.data?.user && !dashboard ? (
    <Button
      onClick={() => signOut()}
      className="rounded-full h-14 px-12 font-white border bg-transparent flex gap-4">
      Sign Out
    </Button>
  ) : session.data?.user && dashboard ? (
    <Link href="/dashboard">
      <Button className="rounded-full h-14 px-12 font-white border bg-transparent flex gap-4">
        Go to Dashboard
      </Button>
    </Link>
  ) : (
    <Button
      onClick={() => signIn()}
      className="rounded-full h-14 px-12 font-white border bg-transparent flex gap-4">
      <Image src={GoogleIcon} alt="Google" width={20} height={20} />
      Sign In With Google
    </Button>
  );
};

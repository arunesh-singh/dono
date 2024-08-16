// app/api/auth/[...nextauth].ts

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import db from "@/db";
import { Keypair } from "@solana/web3.js";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      const email = user?.email;
      if (account?.provider === "google") {
        if (!email) {
          return false;
        }
        const userDb = await db.user.findFirst({
          where: { username: email as string }
        });

        if (userDb) {
          return true;
        }
        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toBase58();
        const privateKey = keypair.secretKey

        await db.user.create({
          data: {
            username: email as string,
            name: profile?.name,
            //@ts-ignore
            profileUri: profile?.picture,
            provider: "Google",
            SolWallet: {
              create: {
                privateKey: privateKey.toString(),
                publicKey: publicKey,
              }
            },
            InrWallet: {
              create: {
                balance: 0
              }
            }
          }
        });

        return true;
      }
      return false;
    }
  }
})

export { handler as GET, handler as POST }
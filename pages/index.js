import { Inter } from "next/font/google";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

    </main>
  );
}

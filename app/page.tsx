"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white-pattern">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-between pb-10 md:pb-20">
        <div className="flex justify-between items-center pt-20 md:pt-32 container mx-auto px-4 md:px-16 ">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/assets/logos/logo.svg"
              width={150}
              height={150}
              alt="Randamu Logo"
            />
          </Link>
        </div>
        <div className="container mx-auto px-4 md:px-16">
          <div className="pt-10 md:pt-20">
            {/* Main Content */}
            <div className="space-y-4 md:space-y-6 mb-10 md:mb-16">
              <h1 className="font-funnel-display text-3xl md:text-5xl lg:text-7xl font-bold text-black max-w-4xl">
                RUSD Faucet
              </h1>
              <p className="font-funnel-display text-lg md:text-xl text-gray-500">
                Get test RUSD tokens from the faucet for OnlySwaps Portal
              </p>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 md:pt-8 gap-4 md:gap-0">
            <div className="flex items-center gap-2">
              <span className="ffont-funnel-display text-gray-900">
                Mint RUSD Tokens
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 w-full md:w-auto">
              <Link href="/faucet" className="w-full md:w-[200px]">
                <div className="w-full md:w-[200px] py-3 text-gray-900 border border-gray-200 hover:border-gray-400 transition-colors text-center font-funnel-display">
                  Get Faucet
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Hero from "./dashboard/_components/Hero";
import Features from "./dashboard/_components/Features";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
    </div>
  );
}

import Image from "next/image";
import {Inter} from "next/font/google";
import MidHead from "@/components/Headers/MidHead";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <main className="app-block">
      <section className="app-box"></section>
      <div className="section-line" />
      <section className="app-box">
        <MidHead />
        <div className="body-block"></div>
      </section>
      <div className="section-line" />
      <section className="app-box"></section>
    </main>
  );
}

import Image from "next/image";
import {Inter} from "next/font/google";
import MidHead from "@/components/Headers/MidHead";
import SideNav from "@/components/Nav/SideNav";
import {FiMoreHorizontal} from "react-icons/fi";
import Post from "@/components/Post/Post";
import RightHead from "@/components/Headers/RightHead";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <main className="app-block">
      <section className="app-box left-block">
        <SideNav />
        <div className="profile-block">
          <div className="profile-nav">
            <div className="profile">
              <div className="profile-image">
                <img src="/profileDummy.jpg" alt="" />
              </div>
              <div className="profile-name">
                <span className="username">AI ZeeK</span>
                <span className="twitter_name">@mamba_dev</span>
              </div>
            </div>
            <div className="profile-more">
              <FiMoreHorizontal fontSize={20} />
            </div>
          </div>
        </div>
      </section>
      <div className="section-line" />
      <section className="app-box mid-block">
        <MidHead />
        <Post />
        <div className="body-block"></div>
      </section>
      <div className="section-line" />
      <section className="app-box right-block">
        <RightHead />
      </section>
    </main>
  );
}

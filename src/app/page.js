import Blog from "@/components/blog";
import Features from "@/components/Features";
import Hero from "@/components/hero"
import Team from "@/components/team";
import Video from "@/components/video";
import Testimonial from "../components/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Team />
      <Video />
      <Blog />
      <Testimonial />
    </>
  );
}

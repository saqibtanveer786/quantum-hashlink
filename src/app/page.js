import Features from "@/components/Features";
import Hero from "@/components/hero"
import Team from "@/components/team";
import Video from "@/components/video";
import Testimonial from "../components/testimonial";
import Projects from "@/components/projects";
import Cta from "@/components/cta";
import Contact from "@/components/contact";
import FeaturedBlogs from "@/components/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Team />
      <Projects />
      <Video />
      <Testimonial />
      <Cta />
      <Contact />
      <FeaturedBlogs />
    </>
  );
}

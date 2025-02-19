import FormField from "@/components/form-field";
import Hero from "@/components/hero";
import KeyFeatures from "@/components/key-features";
import ProgramInfo from "@/components/program-info";
import Reviews from "@/components/reviews";
import ReviewsCarousel from "@/components/reviews-carousel";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProgramInfo />
      <KeyFeatures />
      <Reviews />
      <ReviewsCarousel />
      <FormField />
    </div>
  );
}

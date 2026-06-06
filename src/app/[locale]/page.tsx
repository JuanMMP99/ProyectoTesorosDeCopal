import AboutWorkshop from "@/components/home/AboutWorkshop";
import CallToAction from "@/components/home/CallToAction";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <FeaturedProducts locale={locale} />
      <AboutWorkshop locale={locale} />
      <CallToAction locale={locale} />
    </>
  );
}
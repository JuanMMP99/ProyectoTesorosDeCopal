import AboutWorkshop from "@/components/home/AboutWorkshop";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WorkshopPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <AboutWorkshop locale={locale} />
    </>
  );
}
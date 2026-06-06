import CallToAction from "@/components/home/CallToAction";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <CallToAction locale={locale} />
    </>
  );
}
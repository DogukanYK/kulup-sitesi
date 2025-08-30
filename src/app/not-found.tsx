import Image from "next/image";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center px-6 bg-white min-h-[calc(100vh-64px)]">
      <div className="text-center">
        {/* Büyük logo */}
        <Image
          src="/kulup-logo-siyah.png"
          alt="KHAS Media All"
          width={1000}
          height={500}
          priority
          className="mx-auto h-32 sm:h-40 md:h-56 lg:h-64 w-auto object-contain"
        />

        <h1 className="mt-6 text-3xl font-bold text-blue-700">Sayfa bulunamadı</h1>
        <p className="mt-2 text-sm text-gray-600">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        </p>

        <div className="mt-6">
          <Button href="/" variant="primary">Ana sayfaya dön</Button>
        </div>
      </div>
    </section>
  );
}
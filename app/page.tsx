import AcmeLogo from "@/app/ui/acme-logo";
import Image from 'next/image';
import NavLinks from "@/app/ui/dashboard/nav-links";
export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
          <NavLinks/>
          <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
              <AcmeLogo/>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              <Image
                  src="/hero-desktop.png"
                  width={1000}
                  height={760}
                  className="hidden md:block"
                  alt="Screenshots of the dashboard project showing desktop version"
              />
          </div>
      </main>
  );
}

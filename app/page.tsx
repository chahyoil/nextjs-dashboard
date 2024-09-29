// /app/page.tsx
import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

// 홈페이지
export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col p-6'>
      {/* 페이지 상단 */}
      <div className='flex h-20 shrink-0 items-end rounded-3xl bg-blue-500 p-4 md:h-52'>
        <AcmeLogo />
      </div>
      {/* 하단 */}
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        {/* 하단 좌측 환영 문구 */}
        <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <em className='font-bold not-italic'>환영합니다. </em>
            <strong>Welcome to Acme.</strong>{" "}
          </p>
          <Link
            href='/login'
            className='flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'
          >
            <span>Log in</span> <ArrowRightIcon className='w-5 md:w-6' />
          </Link>
        </div>
        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
          {/* Add Hero Images Here */}
          <Image
            src='/hero-desktop.png'
            alt='Screenshots of the dashboard project showing desktop version'
            width={1000}
            height={760}
            priority={true}
            className='hidden md:block'
          />
          <Image
            src='/hero-desktop.png'
            alt='Screenshots of the dashboard project showing mobile version'
            width={560}
            height={620}
            priority={true}
            className='block md:hidden'
          />
        </div>
      </div>
    </main>
  );
}

// /dashboard/invoices/page.tsx
import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

// 총페이지수 가져오는 함수
import { fetchInvoicesPages } from "@/app/lib/data";

// 객체타입의 ?는 키가 없을수 있다는 의미
export default async function InvoicesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  // 객체?. 은 해당 객체가 없을 경우 에러 방지
  // || 연산자는 왼쪽값이 있으면 왼쪽값 리턴하고 없으면 오른쪽값 리턴
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  // 검색된 데이터 갯수 기준 총 페이지수
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div>
      <div>
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Search placeholder='Search invoices...' />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

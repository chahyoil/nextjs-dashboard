// app/ui/search.tsx
"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  // 검색 매개변수훅을 변수에 대입
  const searchParams = useSearchParams();
  // URL 경로 가져오기
  const pathname = usePathname();
  // 라우터 replace함수로 url 업데이트
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    // 검색어 입력시 페이지 매개변수 1로 재설정
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className='relative flex flex-grow'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        className='peer w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm placeholder:text-gray-500'
        placeholder={placeholder}
        id='search'
        onChange={(e) => handleSearch(e.target.value)}
        // value를 사용하지 않고 url의 쿼리스트링 값을 사용하므로
        // 초기값만 value로 사용. (value를 계속해서 사용하려면, value를 사용해야함. 지금은 url만 사용)
        // state와 연결해서 사용하려면, value를 사용해야함.
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
    </div>
  );
}

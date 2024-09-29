// app/layout.tsx
import { Metadata } from "next";
import "@/app/ui/global.css";
import { pretendard } from "@/app/ui/fonts";

export const metadata: Metadata = {
  // Acme Dashboard 기본 제목으로 사용, 서브페이지 제목있을 경우 템플릿사용, %s에 서브페이지 제목 들어옴
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "차효일이 학원에서 들으면서 개발한 Next.js 코스 프로젝트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}

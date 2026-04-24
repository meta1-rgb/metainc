import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "METAINC - 통합 마케팅 파트너",
  description: "데이터 기반 통합 디지털 마케팅 기업, 고객사의 브랜드 가치를 극대화합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased text-gray-900">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <Image src="/logo.png" alt="METAINC 로고" width={160} height={40} preload />
            <nav className="hidden md:flex space-x-8 font-medium">
              <a href="#" className="hover:text-[#8C1515]">Company</a>
              <a href="#" className="hover:text-[#8C1515]">Service</a>
              <a href="#" className="hover:text-[#8C1515]">Portfolio</a>
              <a href="#" className="hover:text-[#8C1515]">Contact Us</a>
            </nav>
            <button className="bg-[#8C1515] text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-[#6E1010] transition">
              빠른상담
            </button>
          </div>
        </header>

        <main className="pt-20">{children}</main>

        {/* Footer: 기관 심사 필수 정보 */}
        <footer className="bg-[#8C8C8C] text-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#707070] pb-8">
              <div>
                <h2 className="text-white text-xl font-bold mb-4">META-INC</h2>
                <p className="text-sm leading-6">
                  서울특별시 구로구 디지털로32길 30 코오롱빌란트1차 7층<br />
                  대표이사: 신요섭 | 사업자등록번호: 240-88-01769<br />
                  Tel: 02-2103-8077 | Email: meta-inc@nate.com
                </p>
              </div>
              <div className="flex md:justify-end space-x-4 items-end text-xs">
                <a href="#" className="hover:underline">개인정보처리방침</a>
                <a href="#" className="hover:underline">이용약관</a>
              </div>
            </div>
            <p className="mt-8 text-xs text-center">
              © 2026 YOUR COMPANY. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
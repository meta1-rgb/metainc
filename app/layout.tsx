import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(주)하나애드아이엠씨 스타일 - 통합 마케팅 파트너",
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
            <div className="text-2xl font-bold text-blue-600">HANA AD STYLE</div>
            <nav className="hidden md:flex space-x-8 font-medium">
              <a href="#" className="hover:text-blue-600">Company</a>
              <a href="#" className="hover:text-blue-600">Service</a>
              <a href="#" className="hover:text-blue-600">Portfolio</a>
              <a href="#" className="hover:text-blue-600">Contact Us</a>
            </nav>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-blue-700 transition">
              빠른상담
            </button>
          </div>
        </header>

        <main className="pt-20">{children}</main>

        {/* Footer: 기관 심사 필수 정보 */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-800 pb-8">
              <div>
                <h2 className="text-white text-xl font-bold mb-4">META INC</h2>
                <p className="text-sm leading-6">
                  서울특별시 영등포구 의사당대로 8 삼환까뮤빌딩 2층<br />
                  대표이사: 홍길동 | 사업자등록번호: 000-00-00000<br />
                  Tel: 02-1234-5678 | Email: contact@yourdomain.com
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
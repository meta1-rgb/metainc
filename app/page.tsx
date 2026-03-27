export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-50 py-24 md:py-40 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#8C1515] font-bold tracking-widest uppercase text-sm">Creativity + Tech Solution</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            데이터 기반의 <br className="md:hidden" />
            <span className="text-[#8C1515]">통합 디지털 마케팅</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            고객사 브랜드 가치를 극대화하고 소비자를 하나로 연결하는<br className="hidden md:block" /> 최적의 마케팅 서비스를 제공합니다.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-[#8C1515] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#6E1010]">회사소개서 다운로드</button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold hover:bg-slate-50">포트폴리오 보기</button>
          </div>
        </div>
      </section>

      {/* 2. Service Section (반응형 그리드) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Service</h2>
            <div className="w-12 h-1 bg-[#8C1515] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Brand Marketing", desc: "브랜드의 가치를 새롭게 재탄생시킵니다." },
              { title: "Performance Marketing", desc: "데이터 분석을 통한 매출 극대화를 실현합니다." },
              { title: "Social Marketing", desc: "소셜 미디어를 통해 고객과 전략적으로 소통합니다." },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-slate-50">
                <div className="w-12 h-12 bg-[#FCEAEA] rounded-lg flex items-center justify-center mb-6 text-[#8C1515] font-bold">0{idx+1}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Quick Contact Form (심사 시 중요 포인트) */}
      <section className="py-24 px-4 bg-[#8C1515]">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">빠른 상담 문의</h2>
            <p className="text-gray-500 mt-2">전문가와 상담하여 비즈니스의 해답을 찾으세요.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="고객사명" className="p-4 border border-gray-200 rounded-lg focus:outline-[#8C1515]" />
            <input type="text" placeholder="담당자명" className="p-4 border border-gray-200 rounded-lg focus:outline-[#8C1515]" />
            <input type="text" placeholder="연락처" className="p-4 border border-gray-200 rounded-lg focus:outline-[#8C1515]" />
            <select className="p-4 border border-gray-200 rounded-lg focus:outline-[#8C1515]">
              <option>관심 상품 선택</option>
              <option>검색광고</option>
              <option>바이럴광고</option>
              <option>기타</option>
            </select>
            <textarea placeholder="문의내용" className="md:col-span-2 p-4 border border-gray-200 rounded-lg h-32 focus:outline-[#8C1515]"></textarea>
            <button className="md:col-span-2 bg-slate-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-black transition">문의하기</button>
          </form>
        </div>
      </section>
    </div>
  );
}
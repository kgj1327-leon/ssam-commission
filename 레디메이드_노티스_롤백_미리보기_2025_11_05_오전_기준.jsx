"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SsamMainDesign() {
  type View =
    | 'home'
    | 'process'      // 커미션 작업과정 (임시 문구)
    | 'refund'       // 커미션 환불규정 (임시 문구)
    | 'r_process'    // 레디메이드 작업과정
    | 'r_refund'     // 레디메이드 환불규정
    | 'c_faq'        // 커미션 FAQ
    | 'r_faq';       // 레디메이드 FAQ

  const [view, setView] = useState<View>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("준비중입니다");

  const homeMenus = [
    { title: ["commision", "notice"], items: ["작업과정", "자주 묻는 질문", "환불규정", "커미션 타입", "커미션 포폴"] },
    { title: ["readmade", "notice"], items: ["작업과정", "자주 묻는 질문", "환불규정", "레디메이드 모음"] },
    { title: ["collaboration", "request"], items: ["협력 리퀘 모음", "자주 묻는 질문"] },
    { title: ["online design", "class"], items: ["강의 커리큘럼", "자주 묻는 질문"] },
  ];

  const BackBtn = (
    <motion.button
      onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
      animate={{ x: [-4, 4, -4] }}
      transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
      aria-label="뒤로가기"
    >
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </motion.button>
  );

  return (
    <div className="min-h-screen overflow-hidden font-pretendard bg-white text-gray-900">
      {/* ===== HOME ===== */}
      {view === 'home' && (
        <div className="min-h-screen">
          <header className="fixed top-0 left-0 w-full h-14 text-white flex items-center justify-between px-8 z-50" style={{ backgroundColor: '#2a2a2a' }}>
            <h1 className="font-bold lowercase tracking-tight" style={{ fontSize: '15pt' }}>ssam commision</h1>
            <nav className="flex items-center gap-8 text-sm opacity-80">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>home</button>
              <button>menu</button>
              <button onClick={() => (window.location.href = 'mailto:kgj1327@gmail.com')}>mail</button>
            </nav>
          </header>

          <section className="text-white text-center relative" style={{ paddingTop: 128, backgroundColor: '#2a2a2a' }}>
            <div className="pb-24">
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-extrabold" style={{ fontSize: '30pt', lineHeight: '34pt' }}>
                ssam<br/>commision
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-[30px] text-neutral-300" style={{ fontSize: '18pt' }}>
                안녕하세요. 쌈- 커미션입니다.
              </motion.p>
            </div>
          </section>

          <section id="menu-section" className="mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-left" style={{ maxWidth: 1152 }}>
            {homeMenus.map((col, idx) => (
              <div key={idx}>
                <h3 className="font-bold mb-6 lowercase leading-tight" style={{ fontSize: '17pt' }}>
                  <span className="block">{col.title[0]}</span>
                  <span className="block">{col.title[1]}</span>
                </h3>
                <ul className="space-y-[16px] text-gray-700" style={{ fontSize: '12pt' }}>
                  {col.items.map((label, i) => (
                    <li key={i} className="flex items-center gap-[10px]">
                      <div style={{ width: 3, height: 20, backgroundColor: '#9ca3af' }} />
                      <button
                        className="text-left hover:text-gray-900 transition cursor-pointer"
                        onClick={() => {
                          // Commision Notice
                          if (idx === 0 && label === '작업과정') setView('process');
                          if (idx === 0 && label === '자주 묻는 질문') setView('c_faq');
                          if (idx === 0 && label === '환불규정') setView('refund');

                          // Readymade Notice
                          if (idx === 1 && label === '작업과정') setView('r_process');
                          if (idx === 1 && label === '자주 묻는 질문') setView('r_faq');
                          if (idx === 1 && label === '환불규정') setView('r_refund');

                          // Collaboration / Online design - 준비중 팝업
                          if ((idx === 2 || idx === 3) && label === '자주 묻는 질문') {
                            setModalText('준비중입니다');
                            setModalOpen(true);
                          }
                        }}
                      >{label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      )}

      {/* ===== Detail: 레디메이드 노티스 – 작업과정 ===== */}
      {view === 'r_process' && (
        <motion.div className="fixed inset-0 bg-white overflow-y-auto" style={{ zIndex: 55 }} initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
          <div className="text-white" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
              <div className="relative flex items-center justify-center text-center" style={{ height: 260 }}>
                {BackBtn}
                <h2 className="font-extrabold" style={{ color: 'white', fontSize: '36pt', lineHeight: '40pt' }}>레디메이드 작업과정</h2>
              </div>
            </div>
          </div>

          <div className="mx-auto px-8 py-10" style={{ maxWidth: 1440 }}>
            <p className="mb-6" style={{ fontSize: '12pt' }}>쌈- 커미션의 레디메이드 입니다! 꼼꼼히 확인해주세요!</p>

            <ul className="list-disc pl-6 space-y-2 leading-relaxed" style={{ fontSize: '12pt' }}>
              <li>작업물의 저작권은 제작인 쌈(@hwasan_sam)에게 있습니다.</li>
              <li>작업물 무단배포 및 수정, 2차 가공, 재판매 및 트레이싱이 불가합니다.</li>
              <li>예약 1차 후 환불된 시안은 다른 분 시안으로 판매 될 수 있습니다.</li>
            </ul>

            <ol className="list-decimal pl-6 space-y-3 leading-relaxed mt-6" style={{ fontSize: '12pt' }}>
              <li>문의 → 입금 → 작업 → 최종파일 전달</li>
              <li>타이틀, 작가명, 세네카(책등) 작업 후 전달드립니다.</li>
              <li>선입금으로 진행되며, 입금 후 상세 양식 보내드립니다.</li>
              <li>후가공이 있을 경우 미리 말씀해주셔야 조정해드릴 수 있습니다!</li>
              <li>작업 기간은 문의주신 날로부터 최대 7일 입니다.
                <div className="text-gray-600" style={{ fontSize: '11pt' }}>- 스케줄에 따라 기간 변동이 있습니다. 문의 시 안내 드립니다.</div>
              </li>
              <li>책등 사이즈 및 페이지 수 미정일 경우, 1차 예약이 진행되며 인쇄소 발주전 문의 부탁드립니다.
                <ul className="list-disc pl-6 mt-2" style={{ fontSize: '11.5pt' }}>
                  <li>행사명과 발주일정 및 인쇄소 꼭 전달부탁드립니다.</li>
                </ul>
              </li>
              <li>모니터/ 인쇄소 상황에 따라 색상 차이가 있을 수 있으니, 유념해주세요.</li>
              <li>최종 파일 전달 후 생기는 문제는 책임지지 않습니다.
                <div className="text-gray-600" style={{ fontSize: '11pt' }}>- 꼭 꼼꼼히 살펴주세요</div>
              </li>
              <li>최종 파일은 300dpi/CMYK/JPG/PDF/여백 3mm 기본세팅으로 전달드립니다.</li>
              <li>인쇄 사이즈 꼭 확인 전달 부탁드립니다. (출력 소: 정 사이즈 / 인쇄소 정 사이즈 +3mm)</li>
              <li>최종 파일 전달 전 인쇄소 업로드 사양에 맞추어 문의 주시면 인쇄소 링크 전달 부탁드립니다.</li>
            </ol>
          </div>
        </motion.div>
      )}

      {/* ===== Detail: 레디메이드 노티스 – 환불규정 ===== */}
      {view === 'r_refund' && (
        <motion.div className="fixed inset-0 bg-white overflow-y-auto" style={{ zIndex: 55 }} initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
          <div className="text-white" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
              <div className="relative flex items-center justify-center text-center" style={{ height: 260 }}>
                {BackBtn}
                <h2 className="font-extrabold" style={{ color: 'white', fontSize: '36pt', lineHeight: '40pt' }}>레디메이드 환불규정</h2>
              </div>
            </div>
          </div>

          <div className="mx-auto px-8 py-12 leading-relaxed" style={{ maxWidth: 1440, fontSize: '12pt' }}>
            <ul className="list-disc pl-6 space-y-3">
              <li>1차 예약 후 50% 환불
                <ul className="list-disc pl-6 mt-1">
                  <li>선예약금의 50% 환불</li>
                </ul>
              </li>
              <li>최종 진행 후 환불 불가</li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* ===== Detail: 레디메이드 노티스 – 자주 묻는 질문 ===== */}
      {view === 'r_faq' && (
        <motion.div className="fixed inset-0 bg-white overflow-y-auto" style={{ zIndex: 55 }} initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
          <div className="text-white" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
              <div className="relative flex items-center justify-center text-center" style={{ height: 260 }}>
                {BackBtn}
                <h2 className="font-extrabold" style={{ color: 'white', fontSize: '36pt', lineHeight: '40pt' }}>레디메이드 FAQ</h2>
              </div>
            </div>
          </div>

          <div className="mx-auto px-8 py-12 space-y-10 leading-relaxed" style={{ maxWidth: 1440, fontSize: '12pt' }}>
            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>레디메이드는 어떻게 구매하나요?</h3>
              <p>- 오픈카톡으로 문의 (메일도 가능!) → 레디메이드 번호명 전달 → 협의 및 입금 안내 → 수정작업 → 완료</p>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>수정 작업에는 어떤것이 들어가나요?</h3>
              <p>- 각 레디메이드 표지의 수정사항을 확인부탁드립니다!</p>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>책등 사이즈가 미정일때는?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>책등 사이즈가 미정일때는 1차로 작업 후 인쇄 들어가기전 책등계산하셔서 전달주시면 수정해드립니다! (수정기회 차감X)</li>
                <li>레디메이드 구매전에 꼭 행사명과 발주일정을 꼭 전달주셔야 합니다! (스케쥴 체크용)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>사이즈가 달라요!</h3>
              <p>- 인쇄소의 경우 사방재단 3mm를 하며 출력소 경우 정사이즈를 하기때문에 출력소인지 인쇄소인지 알려주셔야 합니다 😊</p>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>문의 양식</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>오픈카톡으로 문의 부탁드립니다.</li>
                <li>모든 답변은 최소 24시간 내에 드리고 있습니다. 답변이 없다면 재문의 주시면 확인하겠습니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>다른 문의사항은 오픈카톡으로 언제든 문의해주세요!</h3>
              <p>👉🏻 <a href="https://open.kakao.com/o/s2sjXCpf" className="text-blue-600 underline">https://open.kakao.com/o/s2sjXCpf</a></p>
            </div>
          </div>
        </motion.div>
      )}

      {/* ===== Detail: 커미션 노티스 – 자주 묻는 질문 ===== */}
      {view === 'c_faq' && (
        <motion.div className="fixed inset-0 bg-white overflow-y-auto" style={{ zIndex: 55 }} initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
          <div className="text-white" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
              <div className="relative flex items-center justify-center text-center" style={{ height: 260 }}>
                {BackBtn}
                <h2 className="font-extrabold" style={{ color: 'white', fontSize: '36pt', lineHeight: '40pt' }}>커미션 FAQ</h2>
              </div>
            </div>
          </div>

          <div className="mx-auto px-8 py-12 space-y-10 leading-relaxed" style={{ maxWidth: 1440, fontSize: '12pt' }}>
            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>커미션 어떻게 신청하나요?</h3>
              <p>- 오픈카톡으로 문의 (메일도 가능!) → 생각하는 바를 설명 (구구절절 ok!) → 협의 및 커미션 확정 → 작업 시작 및 금액 전달 → 작업 후 전달</p>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>생각하는 바를 어떻게 설명하나요?</h3>
              <p>- 구구절절 설명하시면 됩니다!</p>
              <div className="mt-2 text-gray-700 whitespace-pre-line" style={{ fontSize: '11.5pt' }}>
예시: 안녕하세요. 제가 커미션은 처음이라 신청을 어떻게 할지 모르겠습니다만 겨울에 관련된 책을 내고싶습니다. <strong>표지</strong>를 제작하고싶어요. 추운 겨울 눈이 내리는 산중에 붉은 산수화열매가 있으면 좋겠습니다.

라는 식으로 표현해도 ok!랍니다 🙂
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>커미션 비용은 어떻게 되나요?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>오픈카톡으로 문의 후 작업 확정하 후 디자인 제작 비용에 맞추어 전달 드릴 예정이며 선 예약금 50%를 입금 하시면 됩니다!</li>
                <li>작업이 모두 완료 후 제작비용의 차액을 최종으로 입금하면 완료!</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>커미션 수정은 몇번인가요?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>총 2회 사용가능 — 모든 작업이 완료 후 수정 시 회차 사용</li>
                <li>1차 러프 시안 공유 시 수정사항 차감 X — 1차 러프 시안 공유 확인시 모든 수정사항을 말씀 주셔야 합니다.(모든 작업 후 수정 시 2회만 사용가능)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>문의 양식</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>오픈카톡으로 문의 부탁드립니다.</li>
                <li>모든 답변은 최소 24시간 내에 드리고 있습니다.답변이 없다면 재문의 주시면 확인하겠습니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '15pt' }}>다른 문의사항은 오픈카톡으로 언제든 문의해주세요!</h3>
              <p>👉🏻 <a href="https://open.kakao.com/o/s2sjXCpf" className="text-blue-600 underline">https://open.kakao.com/o/s2sjXCpf</a></p>
            </div>
          </div>
        </motion.div>
      )}

      {/* ===== Detail: 커미션 노티스 – 작업과정 (임시) ===== */}
      {view === 'process' && (
        <motion.div className="fixed inset-0 bg-white overflow-y-auto" style={{ zIndex: 55 }} initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
          <div className="text-white" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
              <div className="relative flex items-center justify-center text-center" style={{ height: 260 }}>
                {BackBtn}
                <h2 className="font-extrabold" style={{ color: 'white', fontSize: '36pt', lineHeight: '40pt' }}>커미션 작업과정</h2>
              </div>
            </div>
          </div>
          <div className="mx-auto px-8 py-12" style={{ maxWidth: 1440, fontSize: '12pt' }}>
            <p>커미션 작업과정 본문은 이후 제공해주면 그대로 반영할게요. (임시 페이지)</p>
          </div>
        </motion.div>
      )}

      {/* ===== Detail: 커미션 노티스 – 환불규정 (임시) ===== */}
      {view === 'refund' && (
        <motion.div className="fixed inset-0 bg-white overflow-y-auto" style={{ zIndex: 55 }} initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
          <div className="text-white" style={{ backgroundColor: '#2a2a2a' }}>
            <div className="mx-auto px-8" style={{ maxWidth: 1440 }}>
              <div className="relative flex items-center justify-center text-center" style={{ height: 260 }}>
                {BackBtn}
                <h2 className="font-extrabold" style={{ color: 'white', fontSize: '36pt', lineHeight: '40pt' }}>커미션 환불규정</h2>
              </div>
            </div>
          </div>
          <div className="mx-auto px-8 py-12" style={{ maxWidth: 1440, fontSize: '12pt' }}>
            <p>커미션 환불규정 본문도 주시면 즉시 반영해 둘게요. (임시 페이지)</p>
          </div>
        </motion.div>
      )}

      {/* ===== 준비중 모달 ===== */}
      {modalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 70 }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            style={{ width: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-lg font-semibold mb-2">알림</div>
            <div className="text-gray-700 mb-4">{modalText}</div>
            <button
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: '#2a2a2a' }}
              onClick={() => setModalOpen(false)}
            >확인</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

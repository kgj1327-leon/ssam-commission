import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const menus = [
    {
      title: "커미션",
      items: ["작업과정", "자주 묻는 질문", "환불규정", "커미션 타입", "커미션 포폴"],
    },
    {
      title: "레디메이드",
      items: ["작업과정", "자주 묻는 질문", "환불규정", "레디메이드 모음집"],
    },
    {
      title: "협업 / 의뢰",
      items: ["협업 레퍼런스", "의뢰 접수", "자주 묻는 질문"],
    },
    {
      title: "온라인 클래스",
      items: ["강의 커리큘럼", "자주 묻는 질문"],
    },
  ];

  return (
    <>
      <header>
        <h1>쌈 — Commission Notice</h1>
        <nav>
          <button onClick={() => window.scrollTo(0, 0)}>HOME</button>
        </nav>
      </header>

      <section id="menu-section">
        {menus.map((menu) => (
          <div key={menu.title}>
            <h3>{menu.title}</h3>
            <ul>
              {menu.items.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setModalText(`${menu.title} / ${item} 준비중입니다`);
                      setModalOpen(true);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
          <div className="modal-content">
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

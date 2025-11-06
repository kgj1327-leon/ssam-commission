/* 기본 리셋 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #ffffff;
  color: #111;
  overflow-x: hidden;
}

/* 중앙 정렬 기본 */
section {
  margin: 0 auto;
  padding: 2rem;
  max-width: 1152px;
}

/* 헤더 스타일 */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: #2a2a2a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  z-index: 100;
}

header h1 {
  font-size: 1.1rem;
  font-weight: bold;
}

header nav button {
  background: none;
  border: none;
  color: #ccc;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s;
}

header nav button:hover {
  color: #fff;
}

/* 메인 섹션 */
section#menu-section {
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #111;
  margin-bottom: 1rem;
}

ul li {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #555;
}

ul li button {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
}

ul li button:hover {
  color: #000;
}

/* 모달 */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.modal-content {
  background: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 320px;
}

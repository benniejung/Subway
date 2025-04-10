import React from "react";
import styled from "styled-components";

// Nav 스타일 컴포넌트
const NavLayout = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: center;
`;
const NavBar = styled.nav`
  display: flex;
  width: 65vw;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.strong`
  font-size: 1vw;

  cursor: pointer;

  &:hover {
    // &는 현재 선택자를 의미하는 문법
    color: #1f9e1f;
    border-bottom: 3px solid #1f9e1f;
    cursor: pointer;
  }
`;

export default function Nav() {
  return (
    <NavLayout>
      <NavBar>
        <NavItem>메뉴소개</NavItem>
        <NavItem>이용방법</NavItem>
        <NavItem>새소식</NavItem>
        <NavItem>써브웨이</NavItem>
        <NavItem>가맹점</NavItem>
        <NavItem>온라인 주문</NavItem>
      </NavBar>
    </NavLayout>
  );
}

// ✅ 스타일 컴포넌트를 적용하지 않은 모습
/*
export default function Nav() {
  return (
    <nav className="nav-layout">
      <ul className="nav-bar">
        <li className="nav-item">메뉴소개</li>
        <li className="nav-item">이용방법</li>
        <li className="nav-item">새소식</li>
        <li className="nav-item">써브웨이</li>
        <li className="nav-item">가맹점</li>
        <li className="nav-item">온라인 주문</li>
      </ul>
    </nav>
  );
}
  */

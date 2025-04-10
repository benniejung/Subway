import styled from "styled-components";
import LOGO from "../../assets/logo.png";

// Header 스타일 컴포넌트
const HeaderLayout = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 13vw;
`;

const LogoImg = styled.img`
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderLayout>
      <Logo>
        <LogoImg src={LOGO} alt="Logo" />
      </Logo>
    </HeaderLayout>
  );
}

/* ✅ 스타일 컴포넌트를 적용하지 않은 모습
    export default function Header() {
      return (
        <div className="header-layout">
          <div className="logo">
            <img className="logo-img" src={LOGO} alt="Logo" />
          </div>
        </div>
      );
} */

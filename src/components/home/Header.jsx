import * as S from "../../styles/home/home.style";
import LOGO from "../../assets/logo.png";

export default function Header() {
  return (
    <S.HeaderLayout>
      <S.Logo>
        <S.LogoImg src={LOGO} />
      </S.Logo>
    </S.HeaderLayout>
  );
}

/*
export default function Header() {
  return (
    <div className="header-layout">
      <div className="logo">
        <img className="logo-img" src={LOGO} alt="Logo" />
      </div>
    </div>
  );
} */

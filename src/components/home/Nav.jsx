import React from "react";
import * as S from "../../styles/home/home.style";

export default function Nav() {
  return (
    <S.NavLayout>
      <S.NavBar>
        <S.NavItem>메뉴소개</S.NavItem>
        <S.NavItem>이용방법</S.NavItem>
        <S.NavItem>새소식</S.NavItem>
        <S.NavItem>써브웨이</S.NavItem>
        <S.NavItem>가맹점</S.NavItem>
        <S.NavItem>온라인 주문</S.NavItem>
      </S.NavBar>
    </S.NavLayout>
  );
}

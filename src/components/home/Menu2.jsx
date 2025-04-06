import React from "react";
import * as S from "../../styles/home/home.style";
import SUBWAY2 from "../../assets/subway2.png";

export default function Menu2() {
  return (
    <S.MenuItemLayout>
      <S.MenuItemImg src={SUBWAY2} />
      <S.MenuItemName>이탈리안 비엠티</S.MenuItemName>
      <S.MenuItemDescription>
        페페로니,살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는
        써브웨이의 베스트셀러!
      </S.MenuItemDescription>
    </S.MenuItemLayout>
  );
}

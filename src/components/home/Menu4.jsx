import React from "react";
import * as S from "../../styles/home/home.style";
import SUBWAY4 from "../../assets/subway4.png";

export default function Menu4() {
  return (
    <S.MenuItemLayout>
      <S.MenuItemImg src={SUBWAY4} />
      <S.MenuItemName>햄</S.MenuItemName>
      <S.MenuItemDescription>
        기본 중에 기본! 풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연
      </S.MenuItemDescription>
    </S.MenuItemLayout>
  );
}

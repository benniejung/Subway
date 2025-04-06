import React from "react";
import * as S from "../../styles/home/home.style";
import SUBWAY3 from "../../assets/subway3.png";

export default function Menu3() {
  return (
    <S.MenuItemLayout>
      <S.MenuItemImg src={SUBWAY3} />
      <S.MenuItemName>비엘티</S.MenuItemName>
      <S.MenuItemDescription>
        오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그래도
      </S.MenuItemDescription>
    </S.MenuItemLayout>
  );
}

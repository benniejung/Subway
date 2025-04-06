import React from "react";
import * as S from "../../styles/home/home.style";
import SUBWAY1 from "../../assets/subway1.png";

export default function Menu1() {
  return (
    <S.MenuItemLayout>
      <S.MenuItemImg src={SUBWAY1} />
      <S.MenuItemName>에그마요</S.MenuItemName>
      <S.MenuItemDescription>
        부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러
      </S.MenuItemDescription>
    </S.MenuItemLayout>
  );
}

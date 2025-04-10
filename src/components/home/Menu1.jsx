import React from "react";
import styled from "styled-components";
import SUBWAY1 from "../../assets/subway1.png";

// Menu1 스타일 컴포넌트
const MenuItemLayout = styled.div`
  width: 14vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5vw;
`;

const MenuItemImg = styled.img`
  width: 10vw;
`;

const MenuItemName = styled.strong`
  display: inline-block;
  text-align: center;
  font-size: 1vw;
  margin-bottom: 1.8vh;
`;

const MenuItemDescription = styled.span`
  font-size: 0.8vw;
  color: #808080;
`;

export default function Menu1() {
  return (
    <MenuItemLayout>
      <MenuItemImg src={SUBWAY1} />
      <MenuItemName>에그마요</MenuItemName>
      <MenuItemDescription>
        부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러
      </MenuItemDescription>
    </MenuItemLayout>
  );
}

// ✅ 스타일 컴포넌트를 적용하지 않은 모습
/*

export default function Menu1() {
  return (
    <div className="menu-item-layout">
      <img className="menu-item-img" src={SUBWAY1} alt="에그마요" />
      <strong className="menu-item-name">에그마요</strong>
      <span className="menu-item-description">
        부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러
      </span>
    </div>
  );
}
  */

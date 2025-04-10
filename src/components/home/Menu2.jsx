import React from "react";
import styled from "styled-components";

import SUBWAY2 from "../../assets/subway2.png";

// Menu2 스타일 컴포넌트
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

export default function Menu2() {
  return (
    <MenuItemLayout>
      <MenuItemImg src={SUBWAY2} />
      <MenuItemName>이탈리안 비엠티</MenuItemName>
      <MenuItemDescription>
        페페로니,살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는
        써브웨이의 베스트셀러!
      </MenuItemDescription>
    </MenuItemLayout>
  );
}

import React from "react";
import styled from "styled-components";
import SUBWAY4 from "../../assets/subway4.png";

// Menu4 스타일 컴포넌트
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

export default function Menu4() {
  return (
    <MenuItemLayout>
      <MenuItemImg src={SUBWAY4} />
      <MenuItemName>햄</MenuItemName>
      <MenuItemDescription>
        기본 중에 기본! 풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연
      </MenuItemDescription>
    </MenuItemLayout>
  );
}

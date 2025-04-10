import React from "react";
import styled from "styled-components";
import SUBWAY3 from "../../assets/subway3.png";

// Menu3 스타일 컴포넌트
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

export default function Menu3() {
  return (
    <MenuItemLayout>
      <MenuItemImg src={SUBWAY3} />
      <MenuItemName>비엘티</MenuItemName>
      <MenuItemDescription>
        오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그래도
      </MenuItemDescription>
    </MenuItemLayout>
  );
}

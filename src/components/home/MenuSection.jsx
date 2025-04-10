import styled from "styled-components";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";

// MenuSection 스타일 컴포넌트
const MenuSectionLayout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7vh;
  gap: 2vw;
`;
export default function MenuSection() {
  return (
    <MenuSectionLayout>
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
    </MenuSectionLayout>
  );
}

// ✅ 스타일 컴포넌트를 적용하지 않은 모습
/*
export default function MenuSection() {
  return (
    <section className="menu-section-layout">
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
    </section>
  );
}
  */

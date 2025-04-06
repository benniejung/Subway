import * as S from "../../styles/home/home.style";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";

export default function MenuSection() {
  return (
    <S.MenuSectionLayout>
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
    </S.MenuSectionLayout>
  );
}

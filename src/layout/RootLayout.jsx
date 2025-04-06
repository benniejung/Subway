import { Outlet } from "react-router-dom";
import * as S from "./RootLayout.style";
import Header from "../components/header/Header";

export default function RootLayout() {
  return (
    <S.RootLayout>
      <Header />
      {/* Outlet을 사용하여 중첩된 라우트(자식 컴포넌트) 렌더링 */}
      <Outlet />
    </S.RootLayout>
  );
}

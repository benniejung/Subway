import { GlobalStyle } from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { BrowserRouter } from "react-router-dom";

/*
  ⛳ 다른 방식의 라우터 설정 예시 (createBrowserRouter 사용 방식)
  - RouterProvider와 함께 사용하는 방식
  - 대규모 프로젝트나 레이아웃 중첩이 필요할 때 자주 사용

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]); 

*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        {/* 라우터 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* 또다른 라우터 설정방법 */}
        {/* <RouterProvider router={router} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

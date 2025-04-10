import styled from "styled-components";
import MAIN from "../../assets/main.png";

// BannerSection 스타일 컴포넌트
const BannerSectionLayout = styled.div`
  width: 100vw;
`;

const BannerImg = styled.img`
  width: 100%;
`;

export default function BannerSection() {
  return (
    <BannerSectionLayout>
      <BannerImg src={MAIN}></BannerImg>
    </BannerSectionLayout>
  );
}

/* ✅ 스타일 컴포넌트를 적용하지 않은 모습
export default function BannerSection() {
  return (
    <div className="banner-section-layout">
      <img className="banner-img" src={MAIN} alt="메인 배너" />
    </div>
  );
}
  */

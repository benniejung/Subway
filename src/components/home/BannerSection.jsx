import * as S from "../../styles/home/home.style";
import MAIN from "../../assets/main.png";

export default function BannerSection() {
  return (
    <S.BannerSectionLayout>
      <S.BannerImg src={MAIN}></S.BannerImg>
    </S.BannerSectionLayout>
  );
}

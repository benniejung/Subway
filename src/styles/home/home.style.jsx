import styled from "styled-components";
import colors from "../colors";

// Header
export const HeaderLayout = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 13vw;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

// Nav
export const NavLayout = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: center;
`;
export const NavBar = styled.nav`
  display: flex;
  width: 65vw;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.strong`
  font-size: 1vw;

  cursor: pointer;

  &:hover {
    // &는 현재 선택자를 의미하는 문법
    color: ${colors.green};
    border-bottom: 3px solid ${colors.green};
    cursor: pointer;
  }
`;

// BannerSection
export const BannerSectionLayout = styled.div`
  width: 100vw;
`;

export const BannerImg = styled.img`
  width: 100%;
`;

// MenuSection
export const MenuSectionLayout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7vh;
  gap: 2vw;
`;
export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
`;

export const MenuItemLayout = styled.div`
  width: 14vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5vw;
`;

export const MenuItemImg = styled.img`
  width: 10vw;
`;

export const MenuItemName = styled.strong`
  display: inline-block;
  text-align: center;
  font-size: 1vw;
  margin-bottom: 1.8vh;
`;

export const MenuItemDescription = styled.span`
  font-size: 0.8vw;
  color: ${colors.gray};
`;

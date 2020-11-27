import SiteLogo from '../../SiteLogo.svg';
import styled from "styled-components";

// Styled component named Olditem List
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }

  .header--logo {
    height: auto;
    width: 300px;

    @media screen and (min-width: 800px) {
      max-height: auto;
      width: 300px;
      height: auto;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .header--main {
    @media screen and (min-width: 800px) {
      width: calc(100% - 300px);
      padding-left: 2rem;
    }
  }

  h1 {
    border-bottom: 10px solid var(--main-border-color);
    text-align: center;

    @media (min-width: 800px) {
      text-align: left;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <aside className="header--logo"> <img src={SiteLogo} className="Site-logo" alt="Logo reading search for treasure" /> </aside>
      <section className="header--main">
        <h1>DUNGEON WORLD ITEM FINDER</h1>
      </section>
    </HeaderContainer>
  );
}

export default Header;
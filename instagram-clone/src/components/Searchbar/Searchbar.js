import React from "react";
import styled from 'styled-components';

const Searchbar = props => {
  const HeaderDiv = styled.div`
    display: flex;

    top: 0;
    z-index: 1;
    justify-content: space-between;
    align-items: stretch;
    order: 0;
    flex-direction: column;
    position: relative;
    flex-basis: 75px;
  `;

  const HeaderRoot = styled.div`
    position: fixed;
    height: 77px;
    z-index: 1;
    width: 100%;
    align-items: center;
    background: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    display: flex;
    flex-direction: column;
  `;

  const ContentDiv = styled.div`
    height: 77px;
    width: 100%;
    padding: 26px 20px;
    display: flex;
    flex-direction: row;
    max-width: 1010px;
    align-items: center;
    box-sizing: border-box;
  `;

  const Logos = styled.div`
    flex: 1 9999 0%;
    min-width: 40px;
    align-items: stretch;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    flex-direction: column;
  `;

  const Container = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  align-content: stretch;
  `;

  const MiniLogo = styled.div`
    background-repeat: no-repeat;
    background-position: -239px -202px;
    width: 24px;
    height: 24px;
    display: block;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_glyphs_c8c6b3ac563b.png/c8c6b3ac563b.png);
  `;

  const Divider = styled.div`
    background-color: #262626;
    height: 28px;
    margin: 0 16px;
    width: 1px;
  `;

  const WideLogo = styled.div`
    display: block;
    background-repeat: no-repeat;
    background-position: -94px -72px;
    height: 29px;
    width: 103px;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_glyphs_c8c6b3ac563b.png/c8c6b3ac563b.png);
    margin: 0;
    padding: 0;
    border: 0;
    margin-top: 7px;
  `;

  const SearchSection = styled.div`
    height: 28px;
    flex: 0 1 auto;
    min-width: 125px;
    width: 215px;

    align-items: stretch;
    box-sizing: border-box;
    border: 0 solid #000;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    position: relative;
  `;
  
  const SearchField = styled.input`
    font-size: 16px;
    box-sizing: border-box;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    color: #262626;
    outline: 0;
    padding: 3px 10px 3px 26px;
    z-index: 2;
    height: 100%;
    width: 100%;
    line-height: 18px;
  `;
  
  const Navigation = styled.div`
    align-content: center;
    display: flex;
    align-items: center;
    flex: 1 0 0%;
    flex-wrap: wrap;
    justify-content: flex-end;
    box-sizing: border-box;
    position: relative;
  `;

  const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 24px;
    white-space: nowrap;
    align-items: stretch;
  `;

  const Explore = styled.div`
    width: 24px;
    height: 24px;
    background-position: -52px -286px;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_glyphs_c8c6b3ac563b.png/c8c6b3ac563b.png);
    cursor: pointer;
  `;

  const Activity = styled.div`
    margin-left: 30px;
    width: 24px;
    height: 24px;
    background-position: -271px -234px;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_glyphs_c8c6b3ac563b.png/c8c6b3ac563b.png);
    cursor: pointer;
  `;

  const Profile = styled.div`
   margin-left: 30px;
    width: 24px;
    height: 24px;
    background-position: -271px -104px;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_glyphs_c8c6b3ac563b.png/c8c6b3ac563b.png);
    cursor: pointer;
  `;

  return (
    <HeaderDiv>
      <HeaderRoot>
        <ContentDiv>
          <Logos>
            <Container>
              <MiniLogo></MiniLogo>
              <Divider></Divider>
              <WideLogo></WideLogo>
            </Container>
          </Logos>
          <SearchSection>
            <SearchField onChange={props.updateQuery} type="text" placeholder='Search' />
          </SearchSection>
          <Navigation >
            <Buttons>
              <Explore />
              <Activity />
              <Profile />
            </Buttons>
          </Navigation>
        </ContentDiv>
      </HeaderRoot>
    </HeaderDiv>
  );
};

export default Searchbar;

import React from "react";
import styled from "styled-components";
import { createSelector } from "reselect";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selector";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const AnimeItemContainer = styled.div`
  width: 17em;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 15em;

  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  font-size: 15px;
  margin-top: 8px;
  color: #000;
  font-weight: 500;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

export function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return <div>Loading...</div>;

  return (
    <HotAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime) => (
          <AnimeItemContainer>
            <AnimeCover>
              {console.log("IMAGE: ", anime?.coverImage)}
              <img src={anime?.coverImage?.extraLarge || ""} />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
          </AnimeItemContainer>
        ))}
    </HotAnimeContainer>
  );
}

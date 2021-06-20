import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-left: 20px;
  color: white;
`;

export const CardTitle = styled.h1``;

export const RowImage = styled.img`
  object-fit: contain;
  cursor: pointer;
  width: 100%;
  /* max-height: 144px; */
  margin-right: 10px;
  transition: transform 450ms;
  border-radius: 4px;
  @media (max-width: 768px) {
    max-height: 100px;

    .row__posterLarge {
      max-height: 280px;
    }
  }
  @media (min-width: 1200px) {
    max-height: 160px;

    .row__posterLarge {
      max-height: 360px;
    }
  }
  &:hover {
    transform: scale(1.08);
  }
  .row__posterLarge {
    max-height: 320px;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
    @media (max-width: 768px) {
      max-height: 280px;
    }
    @media (min-width: 1200px) {
      max-height: 360px;
    }
  }
`;

export const RowItem = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0 20px 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ArrowRight = styled.div`
  padding: 20px 0;
  background-clip: content-box;
  box-sizing: border-box;
  transition: 400ms all ease-in-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  &:hover {
    background: rgba(20, 20, 20, 0.5);
    transition: 400ms all ease-in-out;
  }
`;
export const ArrowLeft = styled.div`
  background-clip: content-box;
  padding: 20px 0;
  box-sizing: border-box;
  transition: 400ms all ease-in-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;

  &:hover {
    background: rgba(20, 20, 20, 0.5);
    transition: 400ms all ease-in-out;
  }
`;
export const Slider = styled.div`
  position: relative;
  display: flex;
  padding: 20px;

  &:hover ${ArrowRight}, &:hover ${ArrowLeft} {
    transition: 400ms all ease-in-out;
    visibility: visible;
  }
`;

// `;

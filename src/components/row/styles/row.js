import styled from 'styled-components/macro';
import ScrollContainer from 'react-indiana-drag-scroll';

export const Container = styled.div`
  margin-left: 20px;
  color: white;
`;
export const Slider = styled(ScrollContainer)`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;
`;
export const CardTitle = styled.h1``;

export const RowSubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const RowText = styled.p`
  margin-top: 5px;
  font-size: 7px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const RowMeta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const RowImage = styled.img`
  border: 0;
  /* width: 100%; */
  /* width: auto; */
  max-width: 200px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    width: 1000px;
  }
`;

export const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1000px) {
    &:hover ${RowMeta}, &:hover ${RowText}, &:hover ${RowSubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

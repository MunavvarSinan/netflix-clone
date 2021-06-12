import styled from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  /* @media (max-width: 600px) {
    font-size: 35px;
  } */
  @media (min-width: 550px) and (max-width: 949px) {
    font-size: 2.5rem;
  }
  @media (max-width: 549px) {
    font-size: 1.625rem;
  }
`;
export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
// export const VideoContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   max-width: 73%;
//   max-height: 54%;
//   position: absolute;
//   top: 46%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
// export const Video = styled.video`
//   width: 100%;
//   height: 100%;
//   display: inline-block;
//   vertical-align: baseline;
//   object-fit: contain;
// `;

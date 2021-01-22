import styled, { css } from 'styled-components';
import atmBackground from '../../resources/card2.jpeg';
export const ATMBackground = styled.div`
  perspective: 120rem;
  position: relative;
  z-index: 700;
  box-shadow: 0 0.6rem 0.9rem var(--color-black-dark);
`;
export const FrontofCard = styled.div`
  /* general card styling*/
  height: 20rem;
  color: var(--color-white);
  font-size: 2rem;
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 25%;
  width: 100%;
  box-shadow: 0 0.6rem 0.9rem var(--color-black-dark);
  transition: all 1s;
  /* front of card specific styling*/
  background-image: url(${atmBackground});
  width: 23%;
  border-radius: 1rem;
  ${(props) =>
    props.rotate
      ? css`
          & {
            transform: rotateY(-180deg);
          }
        `
      : css`
          & {
            transform: rotateY(0);
          }
        `}
`;
export const BackofCard = styled.div`
  height: 20rem;
  color: var(--color-white);
  font-size: 2rem;
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 25%;
  width: 100%;
  box-shadow: 0 0.6rem 0.9rem var(--color-black-dark);
  transition: all 1s;
  /* back of card specific styling*/
  background-image: url(${atmBackground});
  width: 23%;
  border-radius: 1rem;
  ${(props) =>
    props.rotate
      ? css`
          & {
            transform: rotateY(0);
          }
        `
      : css`
          & {
            transform: rotateY(180deg);
          }
        `}
`;
export const ATMChip = styled.img`
  width: 10%;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
export const ATMProvider = styled.img`
  width: 20%;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
export const ATMDigits = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ATMHolder = styled.div`
  font-size: 1.5rem;
  position: absolute;
  top: 13rem;
  left: 1rem;
  font-weight: 100;
`;
export const ATMHolderTitle = styled.span`
  display: block;
  margin: 0.5rem 0;
  color: var(--color-white-dark);
`;
export const ATMHolderName = styled.span`
  display: block;
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
`;
export const ATMExpiry = styled.div`
  font-size: 1.5rem;
  position: absolute;
  top: 15rem;
  right: 1rem;
  font-weight: 100;
`;
export const ATMExpiryTitle = styled.span`
  display: block;
  color: rgba($color-white, 0.8);
`;
export const ATMExpiryDetailsMonth = styled.span``;
export const ATMExpiryDetailsYear = styled.span``;

export const ATMCVV = styled.p`
  border-radius: 3px;
  border: 1px solid var(--color-white);
  width: 80%;
  background-color: var(--color-white);
  padding: 0.5rem;
  text-align: right;
  color: var(--color-black);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

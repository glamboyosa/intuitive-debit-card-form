import styled from 'styled-components';
export const IntuitiveAtmParent = styled.div`
  background-image: linear-gradient(
    to bottom right,
    var(--color-primary),
    var(--color-primary)
  );
  position: relative;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
`;
export const IntuitiveAtmCardParent = styled.div`
  position: relative;
  top: 8%;
  left: 13%;
`;
export const IntuitiveAtmForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 40rem;
  padding: 1rem 3rem;
  border-radius: 3px;
  background-color: var(--color-white);
  box-shadow: 0 0.8rem 0.9rem var(--color-black-dark);
`;
export const IntuitiveAtmFormSpan = styled.span`
  color: var(--color-black);
  font-size: 1.2rem;
  text-align: left;
`;
export const IntuitiveAtmCardDetailsBlock = styled.div`
  display: flex;
`;
export const IntuitiveAtmCardDetailsBlocks = styled.div`
  margin-left: 1rem;
`;
export const Button = styled.button`
  font-family: inherit;
  width: 100%;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 3px;
  color: var(--color-white);
  background-color: var(--color-primary);
  border: none;
  margin: 1rem 0;
`;
export const CVVInput = styled.input`
  width: 10rem;
  font-family: inherit;
  margin-top: 1rem;
  padding: 1rem;
`;
export const Input = styled.input`
  width: 100%;
  font-family: inherit;
  margin-top: 1rem;
  padding: 0.5rem;
`;
export const Select = styled.select`
  font-family: inherit;
  margin-top: 1rem;
  padding: 1rem;
  width: 10rem;
`;
export const Option = styled.option``;
export const PadDown = styled.div`
  margin-top: 12rem;
`;
export const MarginUtilityContainer = styled.div`
  margin: 1rem 0 1rem 0;
`;

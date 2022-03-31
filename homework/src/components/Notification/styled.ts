import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

type TStNotification = {
    isSuccess: string
};

export const StNotification = styled.div<TStNotification>`
  background: ${({isSuccess}) => isSuccess ? 'green' : 'red'};
  text-align: center;
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 1px solid grey;
  padding: 5px;
  height: 50px;
  width: 400px;
  font-size: 18px;
  border-radius: 8px;
  box-shadow: 0 10px 14px -7px grey; 
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-10px);
  opacity: 0;
  animation: ${fadeIn} .5s ease-in-out forwards;
`;

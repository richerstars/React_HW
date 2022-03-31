import styled from 'styled-components';
import colors from '../constants';

export const StyledInput = styled.input`
  outline: none;
  width: 430px;
  height: 60px;
  border: 1px solid ${colors.inputColor};
  font-size: 25px;
  padding-left: 15px;
  margin: 20px 0;
  text-align: center;
`;

export const StyledButton = styled.button`
  width: 67px;
  height: 60px;
  border: none;
  background: ${colors.buttonColor};
  color: ${colors.semiColor};
  font-size: 22px;
  cursor: pointer;
  margin-left: 10px;
  &:disabled{
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export  const StyledMainWrapp = styled.div`
  margin: 200px auto;
  max-width: 600px;
  width: 100%;
  background: ${colors.semiColor};
  border-radius: 5px;
  padding: 46px;
`;
export  const StyledTheme = styled.button`
  background: ${colors.buttonColor};
  color: ${colors.semiColor};
  border: none;
  margin-left: 450px;
  height: 30px;
  cursor: pointer;
`;

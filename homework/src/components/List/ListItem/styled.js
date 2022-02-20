import styled from 'styled-components';
import colors from '../../constants/constants';

export const StyledBtnsDiv = styled.div`
  gap: 10px;
  display: flex;
`;

export const StyledButton = styled.button`
  background: ${colors.semiColor};
  border-radius: 3px;
  cursor: pointer;
  width: 65px;
  height: 30px;
`;

export const StyledTasksDiv = styled.div`
  padding: 10px;
  margin-top: 10px;
  border: 2px solid ${({isChecked}) => isChecked ? `${colors.borderDoneColor}` : `${colors.borderMainColor}`};
  display: flex;
  justify-content: space-between;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  color: black;
  font-size: 30px;
  margin-top: -3px;
  margin-left: 80px;
`;

import styled from "styled-components";
//todo choose default color for buttons
const Button = styled.button<{ textColor?: string; bg?: string }>`
  padding: 5px 15px;
  font-size: 16px;
  border: none;
  color: ${({ textColor }) => textColor?textColor:'red'};
  background-color: ${({ bg }) => bg?bg:'green'};
`;

export default Button;

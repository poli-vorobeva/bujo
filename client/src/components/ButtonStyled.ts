import styled from "styled-components";

const Button = styled.button<{ textColor:string, bg:string }>`
  padding: 5px 15px;
  font-size: 16px;
  border: none;
  color: ${({ textColor}) => textColor};
  background-color: ${({ bg }) => bg};
`;

export default Button;
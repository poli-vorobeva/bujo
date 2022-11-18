import styled from "styled-components";

const Title = styled.p<{ color: string }>`
  text-align: center;
  font-size: 20px;
  padding: 3px;
  color: ${({ color }) => color};
`;

export default Title;

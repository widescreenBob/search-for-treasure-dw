import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
  border: none;
`;

function Elstyled() {
  // Use it like any other component.
  return <StyledButton> Login </StyledButton>;
}

export default Elstyled;
import styled from "@emotion/styled";

export const Button = styled.button`
  font-family: "SFUIbold";
  font-size: 1em;
  color: #000000;
  border: 0;
  border-radius: 3em;
  padding: 1em 2em;
  margin: 2em 0em 0.5em;
  display: inline-block;
  line-height: 1;
  background-image: var(--bg-main-gradient);
  cursor: pointer;
`;
export const WhiteButton = styled(Button)`
  background: #ffffff;
  cursor: pointer;
`;

import React from "react";
import styled from "styled-components";

import Container from "../Container/Container";

const FooterText = styled.p`
  text-align: center;
`;

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterText>2023 BlueVendo - Krzysztof Baraniecki</FooterText>
      </Container>
    </footer>
  );
};

export default Footer;

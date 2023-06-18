import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  padding: 0 27px;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;

import React from 'react';
import styled from "styled-components";

export const FooterBackground = styled(({className}) =>
  <svg className={className} xmlns="http://www.w3.org/2000/svg">
    <pattern id="Pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
      <polygon points="100,10 40,198 190,78 10,78 160,198"/>
    </pattern>
    <rect fill="url(#Pattern)" width="100%" height="100%"/>
  </svg>
)`
  with: 100%;
  height: 100%;
`
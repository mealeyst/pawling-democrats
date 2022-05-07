import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme/color';
import { up } from '../../theme/mediaQueies';
import { spacing } from '../../theme/spacing';
import { PawlingDemIconWithText } from '../Icons/PawlingDemIconWithText';

export const Footer = styled(({className}) =>
  <footer className={className}>
    <section>
      <div><PawlingDemIconWithText /></div>
      <form>
        <label>Join Us:<input type="text" name="email" /></label>
        <button>Submit</button>
      </form>
    </section>
  </footer>
)`
  background-color: ${color("primary.400")};
  width: 100%;
  min-height: ${spacing(30)};
  padding: ${spacing(4, 4)};
  section {
    max-width: 1440px;
    display: grid;
    margin: auto;
    color: ${color("white.50")};
    display: grid;
    ${up('md')`
      grid-template-columns: repeat(12, 1fr);
      gap: ${spacing(6)};
      >*:first-child{
        grid-column-start: 1;
        grid-column-end: 4;
      }
    `}
    ${PawlingDemIconWithText}{
      width: 100%;
    }
  }
`
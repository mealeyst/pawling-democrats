import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme/color';
import { up } from '../../theme/mediaQueies';
import { spacing } from '../../theme/spacing';
import { Button, Input, Label } from '../Forms';
import { PawlingDemIconWithText } from '../Icons/PawlingDemIconWithText';

export const Footer = styled(({className}) =>
  <footer className={className}>
    <section>
      <div className="logo">
        <PawlingDemIconWithText />
      </div>
      <form className="contact">
        <Label>
          Join Us:
          <Input secondary type="email" />
        </Label>
        <footer className="mt-2">
          <Button>Submit</Button>
        </footer>
      </form>
    </section>
  </footer>
)`
  background-color: ${color("primary.400")};
  width: 100%;
  min-height: ${spacing(30)};
  padding: ${spacing(10, 4)};
  section {
    max-width: 1440px;
    display: grid;
    margin: auto;
    color: ${color("white.50")};
    display: grid;
    ${up('md')`
      grid-template-columns: repeat(12, 1fr);
      gap: ${spacing(6)};
      .logo {
        grid-column-start: 1;
        grid-column-end: 4;
      }
      .contact {
        grid-column-start: 10;
        grid-column-end: 13;
      }
    `}
    ${PawlingDemIconWithText}{
      width: 100%;
    }
  }
`
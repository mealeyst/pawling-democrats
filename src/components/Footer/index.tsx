import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme/color';
import { up } from '../../theme/mediaQueies';
import { spacing } from '../../theme/spacing';
import { Button, Input, Label } from '../Forms';
import { PawlingDemIconWithText } from '../Icons/PawlingDemIconWithText';
import { FooterBackground } from './FooterBackground';

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
background-color: #0a1f43;
background-image: linear-gradient(145deg, hsla(219, 59%, 24%, 0.8), hsla(218, 74%, 15%, 0.8)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23233f71' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  width: 100%;
  min-height: ${spacing(30)};
  padding: ${spacing(10, 4)};
  position: relative;
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
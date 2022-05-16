import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme/color';
import { up } from '../../theme/mediaQueies';
import { spacing } from '../../theme/spacing';
import { Button, Input, Label } from '../Forms';
import { PawlingDemIconWithText } from '../Icons/PawlingDemIconWithText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';

export const Footer = styled(({className}) =>
  <footer className={className}>
    <div className="footer-content">
      <PawlingDemIconWithText className="logo"/>
      <form className="contact">
        <Label>
          Join Us:
          <Input secondary type="email" />
        </Label>
        <footer className="mt-2">
          <Button>Submit</Button>
        </footer>
      </form>
      <div className="social-region">
          <span>Follow us:</span>
          <a href="https://www.facebook.com/pawlingdems/">
            <FontAwesomeIcon icon={faFacebookF} size="lg"/>
          </a>
      </div>
      <section className="copyright-info">
        <span>This website maintained by the Pawling Democratic Committee ©2022</span>
      </section>
    </div>
  </footer>
)`
  background-color: ${color("primary.400")};
  background-image: linear-gradient(145deg, hsla(219, 59%, 24%, 0.75), hsla(218, 74%, 15%, 0.75)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23233f71' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  color: ${color("white.50")};
  width: 100vw;
  box-sizing: border-box;
  min-height: ${spacing(30)};
  padding: ${spacing(10, 4)};
  .footer-content {
    max-width: 1440px;
    display: grid;
    margin: auto;
    display: grid;
    ${up('md')`
    grid-template-columns: repeat(8, 1fr);
    gap: ${spacing(6)};
    .logo {
      grid-column-start: 1;
      grid-column-end: 5;
    }
    .contact {
      grid-column-start: 5;
      grid-column-end: 9;
    }
    .social-region {
      grid-column-start: 3;
      grid-column-end: 7;
      justify-content: center;
    }
    .copyright-info {
      grid-column-start: 1;
      grid-column-end: 9;
    }
  `}
    ${up('lg')`
      grid-template-columns: repeat(12, 1fr);
      gap: ${spacing(6)};
      .logo {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      .contact {
        grid-column-start: 10;
        grid-column-end: 13;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      .copyright-info {
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row-start: 3;
        grid-row-end: 4;
      }
      .social-region {
        grid-column-start: 10;
        grid-column-end: 13;
        grid-row-start: 3;
        grid-row-end: 4;
      }
    `}
    ${PawlingDemIconWithText}{
      width: 80%;
      ${up('md')`
        width: 100%;
      `}
    }
    .copyright-info {
      border-top: ${spacing(0.5)} solid ${color("white.50")};
      margin-top: ${spacing(6)};
      padding-top: ${spacing(6)};
      width: 100%;
    }
    .social-region{
      display: flex;
      align-items: end;
      a {
        margin-left: ${spacing(4)};
      }
    }
    a, a:hover {
      color: ${color("white.50")}
    }
  }
`
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { color } from '../theme/color'
import { query } from '../theme/mediaQueies'
import { spacing } from '../theme/spacing'
import { PawlingDemIconWithText } from '../Icons/PawlingDemIconWithText'

export const Footer = styled(({ className }) => (
  <footer className={className}>
    <div className="footer-content">
      <PawlingDemIconWithText className="logo" />
      <div className="helpful-links">
        <h4>Helpful Links:</h4>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.pawling.org/"
                target="_blank"
                rel="noreferrer"
              >
                Town of Pawling
              </a>
            </li>
            <li>
              <a
                href="https://www.pawlingschools.org/"
                target="_blank"
                rel="noreferrer"
              >
                Pawling Central School District
              </a>
            </li>
            <li>
              <a
                href="https://www.pawlingfreelibrary.org/"
                target="_blank"
                rel="noreferrer"
              >
                Pawling Free Library
              </a>
            </li>
            <li>
              <a
                href="https://www.ny.gov/services/register-vote"
                target="_blank"
                rel="noreferrer"
              >
                Register To Vote
              </a>
            </li>
            <li>
              <a
                href="https://www.senate.gov/senators/senators-contact.htm?State=NY"
                target="_blank"
                rel="noreferrer"
              >
                United States Senators
              </a>
            </li>
            <li>
              <a
                href="https://www.dutchessdems.com/"
                target="_blank"
                rel="noreferrer"
              >
                Dutchess County Democrats
              </a>
            </li>
            <li>
              <a href="https://democrats.org/" target="_blank" rel="noreferrer">
                National Democratic Party
              </a>
            </li>
            <li>
              <a
                href="https://elections.dutchessny.gov/"
                target="_blank"
                rel="noreferrer"
              >
                Dutchess County Board of Elections
              </a>
            </li>
            <li>
              <a
                href="https://elections.dutchessny.gov/candidate-information/district-maps/"
                target="_blank"
                rel="noreferrer"
              >
                District Maps
              </a>
            </li>
            <li>
              <a
                href="https://www.thepawlingnews.com/"
                target="_blank"
                rel="noreferrer"
              >
                The Pawling Daily Chronicle
              </a>
            </li>
            <li>
              <a href="https://ag.ny.gov/" target="_blank" rel="noreferrer">
                Attorney General Letitia James
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social-region">
        <span>Follow us:</span>
        <a href="https://www.facebook.com/pawlingdems/">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
      </div>
      <section className="copyright-info">
        <span>
          This website maintained by the Pawling Democratic Committee ©2023
        </span>
      </section>
    </div>
  </footer>
))`
  background-color: ${color('primary.400')};
  background-image: linear-gradient(
      145deg,
      hsla(219, 59%, 24%, 0.75),
      hsla(218, 74%, 15%, 0.75)
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23233f71' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  color: ${color('white.50')};
  width: 100%;
  box-sizing: border-box;
  margin-top: ${spacing(10)};
  padding: ${spacing(10, 4)};
  grid-area: footer;
  .footer-content {
    max-width: 1440px;
    display: grid;
    margin: auto;
    display: grid;
    .contact {
      margin: ${spacing(10, 0)};
    }
    .helpful-links ul{
      list-style: none;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      li {
        padding: ${spacing(1, 0)};
      }
    }
    ${query('md')} {
      grid-template-columns: repeat(8, 1fr);
      gap: ${spacing(6)};
      .logo {
        grid-column-start: 1;
        grid-column-end: 5;
      }
      .helpful-links {
        grid-column-start: 5;
        grid-column-end 10;
        h4 {
          margin-top: 0;
        }
        ul {
          flex-direction: row;
          flex-wrap: wrap;
        }
        li {
          width: 50%;
        }
      }
      .contact {
        grid-column-start: 5;
        grid-column-end: 9;
        margin: ${spacing(0)};
      }
      .social-region {
        grid-column-start: 2;
        grid-column-end: 8;
        justify-content: center;
      }
      .copyright-info {
        grid-column-start: 1;
        grid-column-end: 9;
      }
    }
    ${query('lg')} {
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
        grid-row-start: 4;
        grid-row-end: 5;
      }
      .social-region {
        grid-column-start: 10;
        grid-column-end: 13;
        grid-row-start: 3;
        grid-row-end: 4;
      }
    }
    ${PawlingDemIconWithText} {
      width: 80%;
      ${query('md')} {
        width: 100%;
      }
    }
    .copyright-info {
      border-top: ${spacing(0.5)} solid ${color('white.50')};
      margin-top: ${spacing(6)};
      padding-top: ${spacing(6)};
      width: 100%;
    }
    .social-region {
      display: flex;
      align-items: end;
      padding-top: ${spacing(8)};
      a {
        margin-left: ${spacing(4)};
      }
    }
    a,
    a:hover {
      color: ${color('white.50')};
    }
  }
`

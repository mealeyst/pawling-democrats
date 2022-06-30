import styled, { css } from 'styled-components'
import { color } from './color'
import { query } from './mediaQueies'
import { spacing } from './spacing'

type BodyProps = {
  desktopMarginTop?: boolean
}

export const Body = styled.section<BodyProps>`
  margin-left: auto;
  margin-right: auto;
  padding: ${spacing(0, 4)};
  margin-top: ${spacing(24)};
  max-width: 1440px;

  ${query('md')} {
    ${({ desktopMarginTop = true }) =>
      desktopMarginTop
        ? css`
            margin-top: ${spacing(35)};
          `
        : css`
            margin-top: 0;
          `}
  }
`

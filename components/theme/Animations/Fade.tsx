import { HTMLAttributes } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface Props {
  duration?: number
  animation: 'fadeIn' | 'fadeOut'
}

const fadeIn = keyframes`
{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

const fadeOut = keyframes`
{
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`

export const animations = { fadeIn, fadeOut }

export const fadeStyles = css<Props>`
  animation: ${({ animation }) => animations[animation]}
    ${({ duration = 250 }) => duration}ms normal forwards ease-in-out;
`

export const Fade = styled.div<Props & HTMLAttributes<HTMLDivElement>>`
  ${fadeStyles}
`

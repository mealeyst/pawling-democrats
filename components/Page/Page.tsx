import styled from 'styled-components'

export const Page = styled.main`
  display: grid;
  min-height: 100vh;
  height: 100%;

  /* grid container settings */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`

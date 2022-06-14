import styled from 'styled-components'
import { spacing } from '../spacing'
import { Input } from './Input'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  ${Input} {
    margin-top: ${spacing(1)};
  }
`

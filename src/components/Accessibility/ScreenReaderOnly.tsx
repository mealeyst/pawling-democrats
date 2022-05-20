import styled from 'styled-components';
import { rem } from '../../theme/rem';

export const ScreenReaderOnly = styled.span`
position: absolute;
width: ${rem(1)};
height: ${rem(1)};
padding: ${rem(0)};
margin: -${rem(1)};
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: ${rem(0)};
`;

import styled from 'styled-components';
import { up } from '../../../theme/mediaQueies';
import { spacing } from '../../../theme/spacing';

export const LinkListItem = styled.li`
  margin: ${spacing(2, 0)};
  ${up('sm')`
    margin: ${spacing(0, 4)};
  `}
`;

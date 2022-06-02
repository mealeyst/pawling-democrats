import styled from 'styled-components';
import { query } from '../../../theme/mediaQueies';
import { spacing } from '../../../theme/spacing';

export const LinkListItem = styled.li`
  margin: ${spacing(2, 0)};
  ${query('sm')}{
    margin: ${spacing(0, 4)};
  }
`;

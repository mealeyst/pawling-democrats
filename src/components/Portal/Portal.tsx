import { FC, ReactChildren, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../../hooks/usePortal';

interface Props {
  id: string,
  children: ReactElement
}

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */
const Portal: FC<Props> = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(
    children,
    target,
  );
};

export default Portal;
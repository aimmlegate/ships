import { flip, shift } from '@floating-ui/dom';
import {
  autoUpdate,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';
import { ReactNode, useState } from 'react';

interface Props {
  referenceNode: ReactNode;
  floatingNode: ReactNode;
}

export const Popover: React.FC<Props> = ({ referenceNode, floatingNode }) => {
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const { x, y, strategy, refs, context } = useFloating({
    open: isDetailsOpen,
    onOpenChange: setDetailsOpen,
    placement: 'right',
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift()],
  });

  const { isMounted, styles } = useTransitionStyles(context);
  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {referenceNode}
      </div>
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            zIndex: 130,
            ...styles,
          }}
          {...getFloatingProps()}
        >
          {floatingNode}
        </div>
      )}
    </>
  );
};

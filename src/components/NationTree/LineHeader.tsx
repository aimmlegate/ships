import { ReactNode } from 'react';

interface Props {
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  children: ReactNode;
}

export const LineHeader: React.FC<Props> = ({ handleMouseOver, handleMouseOut, children }) => {
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="flex pl-3 align-middle h-[40px] items-center sticky top-0 z-50"
    >
      {children}
    </div>
  );
};

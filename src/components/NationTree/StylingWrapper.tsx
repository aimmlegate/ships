import cx from 'classnames';

interface Props {
  children: React.ReactNode;
  isActive?: boolean;
  isNonActive?: boolean;
}

export const StylingWrapper: React.FC<Props> = ({ children, isActive, isNonActive }) => {
  return (
    <div
      className={cx(
        'flex flex-col space-y-4 mr-4 ml-4 transition-all ease-in pt-[40px] pb-[40px]',
        {
          'text-slate-100': isActive,
          'text-slate-500': !isActive,
          'opacity-50': isNonActive,
        },
      )}
    >
      {children}
    </div>
  );
};

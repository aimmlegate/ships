interface Props {
  children: React.ReactNode;
  isActive?: boolean;
  isNonActive?: boolean;
}

export const StylingWrapper: React.FC<Props> = ({
  children,
  isActive,
  isNonActive,
}) => {
  return (
    <div
      className={`flex flex-col space-y-4 mr-4 ml-4 transition-all ease-in pt-[40px] pb-[40px] ${
        isActive ? "text-slate-100" : "text-slate-500"
      } ${isNonActive ? "opacity-50" : ""}`}
    >
      {children}
    </div>
  );
};

interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ sidebar, content }) => {
  return (
    <div className="flex relative">
      <div className="w-[100%] h-[40px] fixed z-50 bg-zinc-800 border-b border-zinc-600 bg-gradient-to-r from-zinc-800 to-gray-900 shadow-xl" />
      <div className="min-w-[250px] fixed pt-[40px]  z-40 h-[100%] side-menu">
        <div className="sticky pt-10">{sidebar}</div>
      </div>
      <div className="ml-[250px] flex-1">{content}</div>
    </div>
  );
};

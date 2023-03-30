import React from "react";

interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ sidebar, content }) => {
  return (
    <div className="flex">
      <div className="min-w-[300px] fixed">
        <div className="sticky top-4">{sidebar}</div>
      </div>
      <div className="flex justify-center ml-[300px] flex-1">{content}</div>
    </div>
  );
};

import React from 'react';

export const PageTemplate = ({ children }) => {
  return (
    <div className="mx-auto pt-6 lg:pt-[8rem] min-h-[500px]">
      {children}
    </div>
  );
};

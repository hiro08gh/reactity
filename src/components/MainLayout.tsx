import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => <div>{children}</div>;

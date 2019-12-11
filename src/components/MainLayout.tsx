import React from 'react';
import { GlobalStyles } from '../shared/globalStyles';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    {children}
  </>
);

export default MainLayout;

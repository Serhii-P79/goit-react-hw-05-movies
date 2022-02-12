//import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'components';
import { Nav, Wrapper, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        <Link to="/">HomePage</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Outlet />
      <Toaster />
    </Wrapper>
  );
};

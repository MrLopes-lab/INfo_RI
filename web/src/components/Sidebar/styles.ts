import styled from 'styled-components';

export const Container = styled.div`
  flex: auto;
`;

export const PageHeader = styled.div`
  background-color: #060b26;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }
  &.nav-menu {
    background-color: #060b26;
    width: 200px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }
  &.nav-menu.active {
    left: 0;
    transition: 350ms;
  }
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }
  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 18px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #12afcb;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .navbar-singOut {
    width: 100%;
    height: 80px;
    display: flex;
    margin-top: auto;
    justify-content: center;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }

  button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12afcb;
    border-radius: 16px;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    list-style: none;

    &:hover {
      background: #17d6eb;
    }
  }
`;

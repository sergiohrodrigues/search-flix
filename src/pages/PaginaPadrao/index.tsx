import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from 'styled-components';

const Container = styled.main`
  min-height: 100vh;
`;

export default function PaginaPadrao(){
  return(
    <>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}
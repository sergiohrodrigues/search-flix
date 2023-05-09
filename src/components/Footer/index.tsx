import styled from 'styled-components';

const FooterContainer = styled.footer`
    font-family: 'Bruno Ace SC', cursive;
    font-size: 0.8rem;
    text-align: center;
    margin-top: 3rem;
    padding: 1rem 0;
    @media screen and (min-width: 768px){
    font-size: 1.2rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>Desenvolvidor por Sergio Rodrigues.</FooterContainer>
  );
}
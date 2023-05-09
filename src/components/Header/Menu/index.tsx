import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.nav`
margin-top: 1rem;
display: flex;
gap: 1rem;
  a{
  font-family: 'Bruno Ace SC', cursive;
  font-size: 0.8rem;
  text-decoration: none;
  color: #000;
  }
  .active{
    color: blue;
    text-decoration: underline blue 2px;
  }
  @media screen and (min-width: 768px){
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  a{
  font-family: 'Bruno Ace SC', cursive;
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  }
  a:hover{
    color: blue;
    transition: 1s;
  }
  .pending{
    font-size: 2rem;
  }
}
`;

export default function Menu(){
  const paginas = [
    {
      label: 'Início',
      to: '/'
    },
    {
      label: 'Todos os Filmes',
      to: '/todos-os-filmes'
    },
    {
      label: 'Minha Lista',
      to: '/minha-lista'
    },
  ];
  
  return(
    <MenuContainer>
      {paginas.map((item, index) => 
        <NavLink
          to={item.to} 
          key={index}
          className={({ isActive }) =>
            isActive ? 'active' : ''
          }
        >
          {item.label}
        </NavLink>
      )}
    </MenuContainer>
  );
}
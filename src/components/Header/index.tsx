import styled from 'styled-components';
import Menu from './Menu';
// import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const HeaderContainer = styled.header`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  span{
    font-size: 1.3rem;
    font-family: 'Bruno Ace SC', cursive;
  }
  strong{
    color: blue;
  }
  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 1rem 0;
    margin: 0;
    span{
      font-size: 1.5rem;
    }
}
`;

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <HeaderContainer>
      <span {...menu ? {color : 'white'} : {color : '#000'}} >Search <strong>Flix</strong></span>
      <Menu/>
    </HeaderContainer>
  );
}
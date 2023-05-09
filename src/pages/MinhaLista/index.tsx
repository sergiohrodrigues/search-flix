import styled from 'styled-components';
import { Filme } from '../../interface/filme';
import { GrSubtractCircle } from 'react-icons/gr';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MinhaListaContainer = styled.section`
  width: 90%;
  margin: 2rem auto 0 auto;
  min-height: 76vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  h2{
    font-size: 3rem;
    margin-top: 2rem;
  }
`;

const FilmeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 300px;
  height: 400px;
  img{
    width: 60%;
  }
  h3{
    font-size: 1.2rem;
    text-align: center;
  }
`;

interface Props {
  minhaLista: Filme[],
  imagem: string,
  setMinhaLista: React.Dispatch<React.SetStateAction<Filme[]>>
}

export default function MinhaLista({minhaLista, imagem, setMinhaLista} : Props) {
  const navigate = useNavigate();

  const removeList = (filme : Filme) => {
    const listaAtualizada = minhaLista.filter(item => item.id !== filme.id);
    setMinhaLista(listaAtualizada);

    localStorage.setItem('minhaLista', JSON.stringify(listaAtualizada));
  };
  
  useEffect(() => {
    const listaLocalStorage = localStorage.getItem('minhaLista');
    const listaLocalStorageConvertida = JSON.parse(listaLocalStorage || '[]');
    if(listaLocalStorageConvertida.length){
      setMinhaLista(listaLocalStorageConvertida);
    } else {
      setMinhaLista([]);
    }
  }, []);
  
  return (
    <MinhaListaContainer>
      {minhaLista.length == 0 
        ? <h2>Lista Vazia</h2>
        : minhaLista.map((filme, index) => (
          <FilmeContainer key={index}>
            <img src={`${imagem}${filme.poster_path}`} alt={`imagem do filme ${filme.title}`} onClick={() => navigate(`/filme/${filme.id}`)}/>
            <h3>{filme.title}</h3>
            <GrSubtractCircle id={`myList${index}`} style={{cursor: 'pointer'}} size={30} color='#000' onClick={() => removeList(filme)}/>
          </FilmeContainer>
        ))}
    </MinhaListaContainer>
  );
}
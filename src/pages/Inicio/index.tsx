import { useEffect, useState } from 'react';
import { APIKey } from '../../key';
import { Filme } from '../../interface/filme';
import styled from 'styled-components';
import Card from '../../components/Card';

const FilmesContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const FilmeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 250px;
  height: 320px;
  img{
    width: 60%;
  }
  h3{
    font-size: 1.2rem;
    text-align: center;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }
  .btnMinhaLista:hover{
    cursor: pointer;
    color: gray;
  }
  `;

const Titulo = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin: 3rem 0 2rem 0;
  @media screen and (min-width: 768px){
    font-size: 2.5rem;
  }
`;

interface Props {
  minhaLista: Filme[],
  setMinhaLista: React.Dispatch<React.SetStateAction<Filme[]>>,
  imagem: string,
  idDoFilme: number[]
}

export default function Inicio({minhaLista, setMinhaLista, imagem, idDoFilme} : Props) {
  const [filmesPopulares, setFilmesPopulares] = useState<Filme[]>([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(resposta => {
        setFilmesPopulares(resposta.results);
      });
  }, []);
  
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
    <>
      <Titulo>Filmes populares</Titulo>
      <FilmesContainer>
        {filmesPopulares.map((filme, index) => (
          <FilmeContainer key={index}>
            <Card filme={filme} imagem={imagem} minhaLista={minhaLista} setMinhaLista={setMinhaLista} idDoFilme={idDoFilme}/>
          </FilmeContainer>
        ))}
      </FilmesContainer>
    </>
  );
}
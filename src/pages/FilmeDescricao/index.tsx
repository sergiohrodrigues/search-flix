import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { APIKey } from '../../key';
import styled from 'styled-components';

const DescricaoContainer = styled.div`
width: 90%;
margin: 3rem auto 0 auto;
text-align: center;
display: flex;
flex-direction: column;
  img{
    width: 90%;
    margin: 0 auto;
  }
  h2{
    margin-top: 1rem;
    font-size: 1.6rem;
    padding: 0 1rem;
  }
  h3{
    margin-top: 1.5rem;
    font-size: 1.3rem;
  }
  p{
    font-size: 1.2rem;
    color: gray;
    margin-top: 0.5rem;
    padding: 0 1rem;
    text-align: justify;
  }
  @media screen and (min-width: 768px){
    flex-direction: row;
    width: 60%;
    gap: 3rem;
    img{
      width: 250px;
      height: 300px;
    }
    div{
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;

const TraillerContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
  h2{
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  iframe{
    width: 90%;
    height: 200px;
  }
  @media screen and (min-width: 768px){
    iframe{
      width: 70%;
      height: 500px;
    }
  }
`;

interface props {
  imagem: string
}

export default function FilmeDescricao({imagem} : props) {
  const [ trailler, setTrailler] = useState('');
  const [ detalhes, setDetalhes] = useState('');
  const [ titulo, setTitulo] = useState('');
  const [ imagemFilme, setImagemFilme] = useState('');
  const youtube = 'https://www.youtube.com/embed/';
  const params = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${APIKey}&language=pt-BR`)
      .then(response => response.json())
      .then(resposta => {
        setTrailler(`${youtube}${resposta.results[0].key}`);
      });
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${APIKey}&language=pt-BR`)
      .then(response => response.json())
      .then(resposta => {
        setImagemFilme(resposta.backdrop_path);
        setDetalhes(resposta.overview);
        setTitulo(resposta.title);
      });
  },[]);

  return (
    <>
      <DescricaoContainer>
        <img src={`${imagem}${imagemFilme}`} alt={titulo} />
        <div>
          <h2>{titulo}</h2>
          <p>{detalhes}</p>
        </div>
      </DescricaoContainer>
      <TraillerContainer>
        <h2>Assista ao trailler</h2>
        <iframe
          width="800"
          src={trailler}
          title='Titulo taltaltla'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </TraillerContainer>
    </>
  );
}
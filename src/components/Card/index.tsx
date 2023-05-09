import { Filme } from '../../interface/filme';
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  imagem: string,
  minhaLista: Filme[],
  setMinhaLista: React.Dispatch<React.SetStateAction<Filme[]>>,
  filme: Filme,
  idDoFilme: number[]
}

export default function Card({filme, imagem, minhaLista, setMinhaLista, idDoFilme} : Props){
  const [btnMinhaLista, setBtnMinhaLista] = useState(false);
  const navigate = useNavigate();

  const adicionarNaLista = (filme : Filme) => {
    const filmeJaAdicionadoNaLista = minhaLista.some(movie => movie.id === filme.id);

    if(!filmeJaAdicionadoNaLista){
      const novaLista = [...minhaLista, filme];
      setMinhaLista(novaLista);
      localStorage.setItem('minhaLista', JSON.stringify(novaLista));
      setBtnMinhaLista(true);
    }
  };

  const removerDaLista = (filme : Filme) => {
    const listaAtualizada = minhaLista.filter(item => item.id !== filme.id);
    setMinhaLista(listaAtualizada);

    localStorage.setItem('minhaLista', JSON.stringify(listaAtualizada));
    setBtnMinhaLista(false);
  };
  
  useEffect(() => {
    const listaLocalStorage = localStorage.getItem('minhaLista');
    const listaLocalStorageConvertida = JSON.parse(listaLocalStorage || '[]');
    if(listaLocalStorageConvertida.length){
      const hasInList = listaLocalStorageConvertida.find((item : Filme) => item.id === filme.id);
      setMinhaLista(listaLocalStorageConvertida);
      setBtnMinhaLista(hasInList);
    } else {
      setMinhaLista([]);
    }
  }, []);

  return(
    <>
      <img src={`${imagem}${filme.poster_path}`} alt={`imagem do filme ${filme.title}`} onClick={() => navigate(`filme/${filme.id}`)}/>
      <div>
        <h3>{filme.title}</h3>
        {btnMinhaLista ? <GrSubtractCircle id={`idBtn${filme.id}`} className='btnMinhaLista' color='black' size={30} onClick={() => removerDaLista(filme)}/> : <GrAddCircle className='btnMinhaLista' color='black' size={30} onClick={() => adicionarNaLista(filme)}/>}
      </div>
    </>
  );
}
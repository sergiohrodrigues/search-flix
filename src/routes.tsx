import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import PaginaPadrao from './pages/PaginaPadrao';
import Inicio from './pages/Inicio';
import { useState } from 'react';
import { Filme } from './interface/filme';
import TodosOsFilmes from './pages/TodosOsFilmes';
import MinhaLista from './pages/MinhaLista';
import FilmeDescricao from './pages/FilmeDescricao';

function AppRoutes() {
  const [minhaLista, setMinhaLista] = useState<Filme[]>([]);
  const imagem = 'https://image.tmdb.org/t/p/w500';

  const idDoFIlme = minhaLista.map(idFilme => idFilme.id);
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio minhaLista={minhaLista} setMinhaLista={setMinhaLista} imagem={imagem} idDoFilme={idDoFIlme}/>}/>
          <Route path='filme/:id' element={<FilmeDescricao imagem={imagem}/>}/>
          {/* <Route path='todos-os-filmes' element={<TodosOsFilmes />}/> */}
          <Route path='minha-lista' element={<MinhaLista minhaLista={minhaLista} imagem={imagem} setMinhaLista={setMinhaLista}/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
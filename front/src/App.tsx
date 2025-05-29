import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CadastrarProduto from "./pages/produtos/CadastrarProduto";
import ListarProdutos from "./pages/produtos/ListarProdutos";
//1 - Um componente SEMPRE deve começar com a primeira letra maiúscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML
function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<ListarProdutos />} />
          <Route path="/pages/produtos/listar" element={<ListarProdutos />} />
          <Route path="/pages/produtos/cadastrar" element={<CadastrarProduto />} />
          <Route path="/pages/produtos/alterar/:id" element={<CadastrarProduto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
export default App;
import CardProduto from './components/CardProduto';

function App() {
  return (
    <div className="container">
      <CardProduto
        nome="Notebook Gamer"
        preco={4599.90}
      />

      <CardProduto
        nome="Mouse Sem Fio"
        preco={149.90}
      />
    </div>
  );
}

export default App;
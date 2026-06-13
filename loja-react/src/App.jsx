import CardProduto from './components/CardProduto';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <CardProduto
        nome="Notebook Gamer"
        preco={4599.90}
        adicionado={false}
      />

      <CardProduto
        nome="Mouse Sem Fio"
        preco={149.90}
        adicionado={true}
      />
    </div>
  );
}

export default App;
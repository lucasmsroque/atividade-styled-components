import styled from 'styled-components';

const CardContainer = styled.div`
  width: 280px;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const NomeProduto = styled.h2`
  margin-bottom: 12px;
`;

const PrecoProduto = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
`;

const BotaoAdicionar = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  background-color: ${(props) =>
    props.adicionado ? '#198754' : '#6c757d'};
`;

function CardProduto({ nome, preco, adicionado }) {
  return (
    <CardContainer>
      <NomeProduto>{nome}</NomeProduto>

      <PrecoProduto>
        R$ {preco.toFixed(2)}
      </PrecoProduto>

      <BotaoAdicionar adicionado={adicionado}>
        Adicionar ao carrinho
      </BotaoAdicionar>
    </CardContainer>
  );
}

export default CardProduto;
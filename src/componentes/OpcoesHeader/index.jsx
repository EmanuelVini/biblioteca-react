import './estilo.css';

const textoOpcoes = ['Home', 'Categorias', 'Favoritos', 'Minhas Estante'];

function OpcoesHeader() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto) => (
        <li className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}

export default OpcoesHeader;

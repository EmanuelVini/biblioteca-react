import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';
import './estilo.css';

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone} alt="img-icone" />
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;

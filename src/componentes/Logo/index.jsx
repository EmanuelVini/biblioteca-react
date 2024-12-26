import logo from '../../assets/logo.svg';
import './estilos.css';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logotipo" className="logo-img"></img>
      <p>
        <strong>Public</strong>Books!
      </p>
    </div>
  );
}

export default Logo;

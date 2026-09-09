import "./Header.css"

function Header() {
  return (
    <header>
      <h1>Explorando o universo</h1>

      <p>Uma viagem pelo espaço começa aqui</p>

      <nav aria-label="Navegação principal">
        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>

          <li>
            <a href="#planetas">Planetas</a>
          </li>

          <li>
            <a href="#curiosidades">Curiosidades</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import "./Main.css"

function Main() {
  return (
    <main id="inicio">
      <section aria-labelledby="titulo-conteudo">
        <h2 id="titulo-conteudo">Descubra os mistérios do universo</h2>

        <p>
          Nesta página você encontrará algumas curiosidades sobre o universo,
          seus planetas e outros fenômenos incríveis encontrados no espaço.
        </p>
      </section>

      <section id="planetas" aria-labelledby="titulo-planetas">
        <h2 id="titulo-planetas">Planetas e curiosidades</h2>

        <article>
          <h3>Marte</h3>

          <p>
            Marte é conhecido como o planeta vermelho por causa da presença
            de óxido de ferro em sua superfície.
          </p>
        </article>

        <article>
          <h3>Júpiter</h3>

          <p>
            Júpiter é o maior planeta do Sistema Solar e possui dezenas de
            luas conhecidas.
          </p>
        </article>

        <article>
          <h3>Saturno</h3>

          <p>
            Saturno é famoso por seus grandes anéis formados principalmente
            por partículas de gelo e rocha.
          </p>
        </article>
      </section>

      <section id="curiosidades" aria-labelledby="titulo-curiosidades">
        <h2 id="titulo-curiosidades">Curiosidades do espaço</h2>

        <p>
          O universo possui bilhões de galáxias, estrelas, planetas e outros
          corpos celestes que ainda estão sendo estudados pelos cientistas.
        </p>
      </section>
    </main>
  );
}

export default Main;
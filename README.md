# 🌌 Explorando o Universo

Uma pequena aplicação web desenvolvida em **React.js** como projeto introdutório para aprender e praticar o conceito de **componentes funcionais**, organização de arquivos e estilização responsiva.

---

## 📌 O que é?

**Explorando o Universo** é uma página web educativa que apresenta informações e curiosidades sobre o espaço e alguns planetas do Sistema Solar.

O projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais do **React.js**, especialmente a criação, organização e reutilização de **componentes funcionais**.

A aplicação é dividida em três componentes principais:

* 🚀 `Header.jsx` — cabeçalho e navegação;
* 🌎 `Main.jsx` — conteúdo principal e cards sobre planetas;
* 🛰️ `Footer.jsx` — rodapé da aplicação.

O projeto também utiliza **HTML semântico**, recursos de **acessibilidade** e **CSS responsivo**, proporcionando uma estrutura organizada e uma experiência adequada em diferentes tamanhos de tela.

### 🎯 Objetivos alcançados

* ✅ Criar componentes funcionais em React;
* ✅ Separar a interface em componentes independentes;
* ✅ Utilizar HTML semântico;
* ✅ Aplicar conceitos básicos de acessibilidade;
* ✅ Organizar os estilos em arquivos CSS separados;
* ✅ Utilizar Flexbox e CSS Grid;
* ✅ Criar um layout responsivo;
* ✅ Praticar a estrutura de um projeto React;
* ✅ Desenvolver uma interface simples e agradável para aprendizado.

---

## 🛠️ Tecnologias Utilizadas

As principais tecnologias utilizadas no projeto são:

| Tecnologia               | Utilização                                        |
| ------------------------ | ------------------------------------------------- |
| ⚛️ **React.js**          | Criação dos componentes e construção da interface |
| 🟨 **JavaScript (ES6+)** | Lógica e desenvolvimento dos componentes          |
| 🎨 **CSS3**              | Estilização e responsividade                      |
| 🧱 **HTML5**             | Estrutura semântica da aplicação                  |
| ⚡ **Vite**               | Ferramenta de desenvolvimento e build             |
| 🌐 **Git**               | Controle de versão                                |
| 🐙 **GitHub**            | Hospedagem do código-fonte                        |

### Conceitos praticados

```text
React
├── Componentes funcionais
├── JSX
├── Importação e exportação
└── Organização de componentes

HTML5
├── header
├── nav
├── main
├── section
├── article
└── footer

CSS3
├── Flexbox
├── CSS Grid
├── Media Queries
├── Medidas flexíveis
└── Design responsivo

Acessibilidade
├── aria-label
├── aria-labelledby
├── Hierarquia de títulos
└── Foco visível para navegação por teclado
```

---

## 🚀 Como Executar o Projeto

Para executar o projeto localmente, é necessário ter algumas ferramentas instaladas.

### 📋 Pré-requisitos

Antes de começar, certifique-se de possuir:

* **Node.js** instalado;
* **npm** instalado;
* **Git** instalado;
* Um editor de código, como o **Visual Studio Code**.

Você pode verificar se o Node.js e o npm estão instalados utilizando:

```bash
node --version
```

```bash
npm --version
```

Se os comandos retornarem as versões instaladas, o ambiente está pronto.

---

### 1️⃣ Clone o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

> 💡 Substitua `SEU-USUARIO` e `SEU-REPOSITORIO` pelos dados reais do seu repositório.

---

### 2️⃣ Entre na pasta do projeto

```bash
cd explorando-o-universo
```

Caso o nome da pasta seja diferente, utilize o nome correspondente ao seu repositório.

---

### 3️⃣ Instale as dependências

Utilizando npm:

```bash
npm install
```

Ou, caso utilize Yarn:

```bash
yarn
```

Esse comando instala todas as dependências necessárias para executar a aplicação.

---

### 4️⃣ Execute o projeto

Com npm:

```bash
npm run dev
```

Ou com Yarn:

```bash
yarn dev
```

Após executar o comando, o terminal deverá apresentar um endereço semelhante a:

```text
http://localhost:5173/
```

Abra esse endereço no navegador para visualizar a aplicação.

---

### 🛑 Para encerrar o servidor

No terminal, pressione:

```text
Ctrl + C
```

---

## ⚙️ Como Funciona?

A aplicação foi estruturada utilizando **componentes funcionais do React**, separando cada parte da interface em um arquivo próprio.

Essa organização facilita a manutenção do código e ajuda a compreender o conceito de componentização.

### 📁 Estrutura do projeto

Uma estrutura possível para a aplicação é:

```text
explorando-o-universo/
│
├── public/
│
├── src/
│   ├── App.jsx
│   │
│   ├── Header.jsx
│   ├── Header.css
│   │
│   ├── Main.jsx
│   ├── Main.css
│   │
│   ├── Footer.jsx
│   ├── Footer.css
│   │
│   ├── global.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

### ⚛️ `App.jsx`

O `App.jsx` funciona como o componente principal da aplicação.

Ele importa os três componentes e determina a ordem em que eles aparecem na página:

```jsx
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
```

A estrutura final fica:

```text
App
│
├── Header
│
├── Main
│
└── Footer
```

---

### 🚀 `Header.jsx`

O componente `Header` representa o cabeçalho da aplicação.

Ele contém:

* Título principal;
* Frase introdutória;
* Menu de navegação.

Também utiliza a tag semântica:

```html
<header>
```

e uma navegação:

```html
<nav aria-label="Navegação principal">
```

O atributo `aria-label` fornece uma identificação mais clara da navegação para tecnologias assistivas, como leitores de tela.

Seu estilo está separado em:

```text
Header.css
```

---

### 🌎 `Main.jsx`

O `Main` representa o conteúdo principal da página.

Ele utiliza:

```html
<main>
```

Dentro dele existem diferentes seções:

```html
<section>
```

e conteúdos independentes representados por:

```html
<article>
```

Os cards apresentam informações sobre:

* 🔴 Marte;
* 🟠 Júpiter;
* 🪐 Saturno.

Exemplo de estrutura:

```jsx
<article>
  <h3>Marte</h3>

  <p>
    Marte é conhecido como o planeta vermelho.
  </p>
</article>
```

O conteúdo principal possui seu próprio arquivo de estilos:

```text
Main.css
```

Nesse arquivo são utilizados recursos como:

* CSS Grid;
* Flexbox;
* `clamp()`;
* `minmax()`;
* Media Queries;
* medidas em `rem`, `%` e `ch`.

---

### 🛰️ `Footer.jsx`

O componente `Footer` representa o rodapé da página.

Ele utiliza a tag semântica:

```html
<footer>
```

E apresenta:

```text
Missão concluída

Projeto desenvolvido para aprender React.js
```

Seu estilo está separado no arquivo:

```text
Footer.css
```

---

### 🎨 Organização dos arquivos CSS

Cada componente possui seu próprio arquivo de estilos.

```text
Header.jsx
   └── Header.css

Main.jsx
   └── Main.css

Footer.jsx
   └── Footer.css
```

Essa organização evita concentrar todos os estilos em um único arquivo e facilita a identificação de qual CSS pertence a cada componente.

Além disso, o projeto possui:

```text
global.css
```

O `global.css` fica responsável pelas configurações globais da aplicação, incluindo o **CSS Reset**.

Os arquivos individuais dos componentes não repetem o Reset.

---

### 📱 Responsividade

O projeto segue uma abordagem **Mobile-First**.

O layout começa considerando telas menores e é adaptado progressivamente para tablets e desktops.

A responsividade utiliza:

```css
@media (min-width: 48rem) {
  /* Tablet */
}

@media (min-width: 64rem) {
  /* Desktop */
}
```

O Grid dos cards também muda de acordo com o tamanho da tela:

```text
📱 Smartphone
┌───────────────┐
│     Card      │
├───────────────┤
│     Card      │
├───────────────┤
│     Card      │
└───────────────┘

📱 Tablet
┌──────────┬──────────┐
│  Card    │  Card    │
├──────────┼──────────┤
│  Card    │          │
└──────────┴──────────┘

🖥️ Desktop
┌────────┬────────┬────────┐
│  Card  │  Card  │  Card  │
└────────┴────────┴────────┘
```

---

### ♿ Acessibilidade

A aplicação também considera princípios básicos de acessibilidade.

Entre as práticas utilizadas estão:

* Uso de HTML semântico;
* Hierarquia adequada de títulos;
* Navegação identificada com `aria-label`;
* Seções identificadas com `aria-labelledby`;
* Links com área de interação adequada;
* Foco visível para navegação por teclado;
* Contraste adequado entre texto e fundo;
* Respeito à preferência de usuários que optam por reduzir animações.

Exemplo:

```html
<nav aria-label="Navegação principal">
```

E:

```css
a:focus-visible {
  outline: 0.2rem solid #facc15;
}
```

O `focus-visible` ajuda usuários que navegam utilizando teclado a identificar qual elemento está atualmente selecionado.

---

## 🌐 Onde Posso Acessar?

O projeto pode ser publicado em plataformas como **Vercel**, **Netlify** ou **GitHub Pages**.

### 🔗 Deploy

> 🚧 **Projeto ainda não publicado.**

Quando o deploy estiver disponível, substitua esta seção pelo endereço da aplicação:

```text
https://seu-projeto.vercel.app
```

### 📦 Repositório

```text
https://github.com/SEU-USUARIO/SEU-REPOSITORIO
```

> 💡 Substitua os endereços acima pelos links reais do projeto.

---

## 👥 Quem Desenvolveu?

### 👩‍💻 Desenvolvedor(a)

**Nome:** Seu Nome

🐙 **GitHub:**
`https://github.com/seu-usuario`

💼 **LinkedIn:**
`https://www.linkedin.com/in/seu-usuario/`

---

### 📚 Sobre o projeto

Este projeto foi desenvolvido com finalidade **educacional**, como prática introdutória de React.js, componentização, HTML semântico, acessibilidade e CSS responsivo.

---

⭐ **Se este projeto foi útil para seus estudos, considere deixar uma estrela no repositório!**

🚀 **Missão concluída — próximo destino: novos conceitos em React.js!**

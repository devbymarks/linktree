# 💻 Linktree — Matheus Marks

Linktree pessoal desenvolvido para apresentar minha trajetória profissional, projetos, estudos, tecnologias e formas de contato em uma interface moderna, responsiva e visualmente profissional.

## 🚀 Sobre o Projeto

O projeto funciona como uma página centralizadora de links, permitindo reunir em um único lugar:

- 👨‍💻 Perfil profissional
- 📧 Contato por e-mail
- 💼 LinkedIn
- 🐙 GitHub
- 📸 Instagram
- 🌐 Portfólio
- 📚 Informações sobre estudos e carreira

A página possui uma identidade visual moderna, com fundo animado, efeitos de transição e uma experiência simples e intuitiva.

## ✨ Funcionalidades

- 🌎 Suporte a **Português e Inglês**
- 🇧🇷 🇺🇸 Seletor de idioma
- 💻 Tela de carregamento personalizada
- 👤 Foto e apresentação do perfil
- 🔗 Links para redes profissionais
- 📧 Link direto para envio de e-mail
- ✨ Animações e efeitos visuais
- 📱 Design responsivo para dispositivos móveis
- 💾 Preferência de idioma salva no navegador através do `localStorage`
- 🎨 Interface com tema escuro e detalhes em verde
- ⚡ Navegação com animações suaves

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura da página
- **CSS3** — Estilização, animações e responsividade
- **JavaScript** — Interações, traduções e funcionalidades
- **Font Awesome** — Ícones
- **Google Fonts / Inter** — Tipografia
- **LocalStorage** — Persistência da preferência de idioma

## 📁 Estrutura do Projeto

```text
linktree/
│
├── img/
│   ├── IMG_1027.jpeg
│   └── loading-image.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Responsável pela estrutura principal da página, incluindo:

- Perfil
- Foto
- Descrição
- Contato
- Redes profissionais
- Seletor de idioma
- Tela de carregamento

### `style.css`

Responsável pela identidade visual do projeto:

- Layout responsivo
- Tema escuro
- Gradientes
- Animações
- Efeitos de carregamento
- Background animado
- Cards e botões
- Responsividade para celulares

### `script.js`

Responsável pelas funcionalidades interativas:

- Tradução PT/EN
- Seleção de idioma
- Salvamento do idioma escolhido
- Animações durante a navegação
- Efeitos ao entrar na página

### `img/

Armazena as imagens utilizadas no projeto, como:

- Foto de perfil
- Imagem da tela de carregamento

## 🌎 Sistema de Idiomas

O projeto possui dois idiomas:

🇧🇷 **Português**

🇺🇸 **English**

A preferência selecionada pelo usuário é armazenada no navegador utilizando:

```javascript
localStorage.setItem('preferredLanguage', lang);
```

Assim, ao acessar novamente a página, o idioma escolhido anteriormente pode ser carregado automaticamente.

## ▶️ Como Executar

Como o projeto utiliza apenas HTML, CSS e JavaScript, não é necessário instalar dependências.

Basta abrir o arquivo:

```text
index.html
```

no navegador.

Também é possível executar utilizando uma extensão como **Live Server** no Visual Studio Code.

## 🌐 Publicação

O projeto pode ser hospedado gratuitamente utilizando **GitHub Pages**.

Depois de publicar o repositório, o GitHub poderá disponibilizar a página através de um endereço semelhante a:

```text
https://seuusuario.github.io/linktree/
```

## 🎯 Objetivo

O objetivo do projeto é criar uma página profissional e personalizada para centralizar informações, contatos, redes sociais, projetos e portfólio em um único endereço.

Além de funcionar como uma página pessoal, o projeto também demonstra conhecimentos em:

- Desenvolvimento Front-End
- HTML
- CSS
- JavaScript
- Responsividade
- Animações
- Manipulação do DOM
- LocalStorage
- Organização de projetos
- Git e GitHub

## 📌 Possíveis Melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

- [ ] Formulário de contato
- [ ] Modo claro/escuro
- [ ] Analytics de acessos
- [ ] Mais idiomas
- [ ] Integração com API
- [ ] Página de projetos
- [ ] Download do currículo
- [ ] PWA para instalação no celular

## 👨‍💻 Autor

**Matheus Marks**

Estudante de Engenharia de Software e estagiário em Desenvolvimento de Sistemas.

### 💡 Áreas de interesse

- Desenvolvimento de Software
- Front-End
- Back-End
- APIs
- Banco de Dados
- Linux
- Infraestrutura
- Automação
- Cloud Computing

---

⭐ **Gostou do projeto? Deixe uma estrela no repositório!**

# Pokémon App - Teste Frontend FTeam

Este é um projeto de aplicação web construído com Next.js que consome a PokeAPI para exibir uma lista de Pokémons, seus detalhes e permite a busca e navegação paginada.

## Funcionalidades

- **Internacionalização:** i18n para usuários que sabem inglês ou português.
- **Tema claro/escuro:** O usuário pode
- **Listagem de Pokémons:** Exibe uma lista paginada de Pokémons com seus nomes e imagens.
- **Detalhes do Pokémon:** Ao clicar em um Pokémon, exibe uma página de detalhes com nome, espécie e estatísticas.
- **Busca com Debounce:** Permite buscar Pokémons por nome em toda a lista (não apenas na página atual) com um atraso para otimizar as requisições.
- **Paginação:** Navegação entre as páginas da lista de Pokémons.

## Tecnologias Utilizadas

- **Next.js:** Framework React para aplicações web.
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Styled-Components:** Biblioteca para estilização de componentes React.
- **Hooks Personalizados:** Para encapsular a lógica de requisições à API e debounce.
- **Docker & Docker Compose:** Para conteinerização e orquestração do ambiente de desenvolvimento e produção.

## Arquitetura

O projeto usa uma adaptação do padrão arquitetural **MVVM (Model-View-ViewModel)** para o React:

- **Model:** Representado pelos arquivos em `src/models` (definições de tipos de dados) e `src/services/pokeapi.ts` (lógica de acesso à PokeAPI).
- **View:** Os componentes React em `src/app/page.tsx`, `src/app/pokemon/[name]/page.tsx` e `src/components/PokemonCard.tsx` são responsáveis pela interface do usuário.
- **ViewModel:** Os hooks personalizados em `src/hooks` (`usePokemons.ts`, `usePokemonDetails.ts`, `useDebounce.ts`) atuam como ViewModels, fornecendo dados e lógica para as Views.

## Configuração e Execução Local

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão 22 ou superior)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)
- [Docker](https://www.docker.com/get-started) & [Docker Compose](https://docs.docker.com/compose/install/)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd poke
    ```
2.  Instale as dependências do projeto:
    ```bash
    yarn install
    ```

3. Crie o seguinte arquivo .env:
```
NEXT_PUBLIC_POKEAPI_BASE_URL=https://pokeapi.co/api/v2
NEXT_PUBLIC_POKEMON_SPRITE_BASE_URL=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
```


### Executando a Aplicação (Modo Desenvolvimento)

Para iniciar o servidor de desenvolvimento:

```bash
yarn dev
```

A aplicação estará disponível em `http://localhost:3000`.

### Executando a Aplicação (Com Docker Compose)

Para construir a imagem Docker e subir o contêiner:

```bash
docker compose up --build -d
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```
poke/
├── src/
│   ├── app/                  # Páginas do Next.js App Router
│   │   ├── pokemon/[name]/   # Página de detalhes do Pokémon
│   │   │   └── page.tsx
│   │   │   └── style.ts
│   │   ├── page.tsx          # Página principal (listagem de Pokémons)
│   │   └── style.ts
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── PokemonCard.tsx
│   │   └── style.ts
│   ├── hooks/                # Hooks personalizados (Viewmodels)
│   │   ├── useDebounce.ts
│   │   ├── usePokemonDetails.ts
│   │   └── usePokemons.ts
│   ├── lib/                  # Utilitários (ex: StyledComponentsRegistry)
│   │   └── registry.tsx
│   ├── models/               # Definições de tipos de dados
│   │   └── pokemon.ts
│   └── services/             # Lógica de requisições à API
│       └── pokeapi.ts
├── Dockerfile                # Definição da imagem Docker
├── docker-compose.yml        # Orquestração de contêineres Docker
├── next.config.js            # Configuração do Next.js
├── package.json
├── yarn.lock
└── README.md                 # Este arquivo
```

## Referência da API

Este projeto utiliza a [PokeAPI](https://pokeapi.co/docs/v2).

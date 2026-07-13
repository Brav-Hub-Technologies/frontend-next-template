# Template Frontend - BRAV HUB Technologies

Este é o repositório base (template) para todos os novos projetos e sistemas de interface visual da organização. Ele foi construído utilizando as melhores e mais modernas práticas de arquitetura front-end, garantindo consistência, escalabilidade e facilidade de manutenção em nossos projetos.

## 🚀 Tecnologias Utilizadas

- **[Next.js 16](https://nextjs.org/)**: Framework React com App Router e React Compiler ativado para otimização extrema de performance.
- **[React 19](https://react.dev/)**: Biblioteca base atualizada, oferecendo os recursos mais recentes de renderização.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática rigorosa para maior segurança e prevenção de bugs.
- **CSS Modules**: Estilização isolada por escopo de componente (zero-runtime), garantindo que estilos não colidam entre diferentes partes da aplicação sem a dependência de frameworks externos.
- **Prettier & ESLint**: Ferramentas configuradas nativamente para garantir a padronização automática do código.

## 🛠 Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado (recomendamos a versão **v20 LTS ou superior**).
2. Instale as dependências executando na raiz do projeto:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Outros Comandos Úteis

- `npm run formatar`: Varre todo o projeto e formata o espaçamento e aspas dos arquivos usando o Prettier.
- `npm run lint`: Verifica se há erros de padronização estrutural no código.

---

## 📁 Estrutura de Pastas e Arquitetura

Para garantir que o código cresça de forma saudável, adotamos uma separação rigorosa de responsabilidades. Cada pasta principal dentro de `src/` contém seu próprio arquivo `README.md` detalhando as regras locais, mas aqui está um resumo geral:

### 🌐 Roteamento e Telas
- **`src/app/`**: Coração do App Router do Next.js. Contém a estrutura de rotas da aplicação, definindo as páginas (`page.tsx`) e layouts (`layout.tsx`).

### 🧩 Componentização (Atomic Design)
A pasta `src/components/` segue uma divisão clara para reaproveitamento visual:
- **`ui/` (ou comuns)**: Componentes atômicos e "burros" (Botões, Inputs, Modais) que funcionam através de `props` e não possuem regra de negócio.
- **`secoes/` (ou features)**: Grandes blocos de interface (HeroSections, Tabelas de Dados, Formulários Complexos) que unem vários componentes de `ui/`.
- **`layout/`**: Estruturas globais e repetitivas, como `Cabecalho` e `Rodape`.

### ⚙️ Lógica e Regras de Negócio
- **`src/constants/`**: Variáveis estáticas, dicionários, mapeamento de rotas e configurações imutáveis (evita "magic strings" soltas no código).
- **`src/hooks/`**: React Custom Hooks (funções `useSomething`) para encapsular lógicas de estado e side-effects reaproveitáveis.
- **`src/services/`**: Concentra todas as chamadas HTTP (API) e comunicação externa, isolando o fetching de dados dos componentes visuais.
- **`src/utils/`**: Funções puras utilitárias (formatação de moeda, máscaras de CPF, validações matemáticas) independentes do React.
- **`src/types/`**: Definições globais do TypeScript (Interfaces, Types, Enums).
- **`src/lib/`**: Inicialização e configuração centralizada de bibliotecas de terceiros (como instância configurada do Axios, Analytics, etc).

### 🖼️ Arquivos Estáticos (Public)
A pasta `public/` é exposta na raiz da URL. As imagens seguem uma separação rígida:
- **`public/imagens/`**: As imagens NUNCA devem ficar soltas. São separadas em subpastas descritivas como `icones/`, `logos/`, `ilustracoes/` e `fotos/`. Recomendamos o uso do componente `<Image>` do Next.js para renderizá-las otimizadas.

---

## 📝 Regras e Convenções Oficiais

### 1. Padrão de Idioma (Estrito)
**Todo o código deve ser escrito em Português Brasileiro.** Isso inclui:
- Nomes de variáveis, constantes e funções.
- Nomes de componentes e arquivos.
- Comentários e documentações internas (Docstrings).

### 2. Fluxo de Git e Branches
- **Nomenclatura Kebab-case**: Todos os nomes de branches devem ser em letras minúsculas separadas por hífen (ex: `feat/nova-tela-login`, NUNCA `feat/NovaTelaLogin`).
- **Padrão de Branches**:
  - `main`: Produção (Protegida, recebe código apenas via Pull Request).
  - `develop`: Testes e Homologação.
  - `feat/nome-da-tarefa`: Para novas funcionalidades.
  - `fix/nome-do-bug`: Para correção de erros.
  - `chore/nome-da-tarefa`: Para ajustes técnicos, dependências ou documentação.
- **Conventional Commits (Padrão iuricode)**: As mensagens de commit devem seguir estritamente o guia de **[Convenções de Commits do iuricode](https://github.com/iuricode/padroes-de-commits)** para manter o histórico padronizado e rastreável (ex: `✨ feat: adiciona componente de tabela padronizado` ou `🐛 fix: corrige erro no formulário`).

### 3. Padrões de Código Front-end
- **Alias de Importação**: O projeto está configurado para utilizar alias de importação. Utilize importações absolutas começando com `@/` ao invés de navegar com múltiplos `../../`.
  * *Correto*: `import { Botao } from '@/components/ui/Botao/Botao';`
  * *Incorreto*: `import { Botao } from '../../components/ui/Botao/Botao';`
- **Estilização Isolada**: Cada componente visual deve ter sua própria pasta contendo o arquivo principal (ex: `Botao.tsx`) e seu respectivo arquivo de estilo (ex: `Botao.module.css`). Não adicione classes específicas de componentes no `globals.css`.
- **Server Components vs Client Components**: No Next.js, os componentes nascem no lado do servidor por padrão. Se o seu componente precisa de interatividade no navegador (como `onClick`, `useState` ou `useEffect`), declare a diretiva `'use client';` estritamente na primeira linha do arquivo.

> Este é um template vivo. Consulte os arquivos `README.md` espalhados pelas subpastas para entender profundamente o papel de cada estrutura. Mãos à obra! 🚀
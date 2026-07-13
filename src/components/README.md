# Components

Esta pasta contém todos os componentes reutilizáveis da interface de usuário da aplicação. Para manter a organização à medida que o sistema cresce, utilizamos subdivisões claras.

## Estrutura de Pastas Internas:

- **`ui/` (ou `comuns`)**: Destinada aos "Atomic Components" e utilitários visuais pequenos e genéricos. Eles devem ser totalmente independentes de regra de negócio, funcionando apenas através de `props`.
  - Exemplos: `Botao`, `Input`, `Modal`, `Tooltip`, `Card`.
  
- **`secoes/` (ou `features`)**: Destinada a componentes maiores e mais complexos que representam grandes blocos ou funcionalidades de uma página. Geralmente englobam múltiplos componentes da pasta `ui`.
  - Exemplos: `TabelaDeUsuarios`, `HeroSection`, `FormularioDeLogin`, `SecaoDeDepoimentos`.

- **`layout/`**: Destinada a elementos estruturais que costumam se repetir e envolver o conteúdo de várias páginas.
  - Exemplos: `Cabecalho` (Header), `Rodape` (Footer), `MenuLateral` (Sidebar).

## Regras de Criação de Componentes:
1. **Agrupamento:** Cada componente deve ficar em sua própria pasta (ex: `src/components/ui/Botao`).
2. **Arquivos do Componente:** Dentro da pasta, você deve incluir:
   - O arquivo principal do componente (ex: `Botao.tsx`).
   - O arquivo de estilos isolados (ex: `Botao.module.css`).
3. **Reutilização:** Procure construir componentes "burros" (Dumb Components) nas pastas `ui` e `layout`, deixando para as páginas ou componentes em `secoes` a responsabilidade de conectar os dados (lógica de negócio).

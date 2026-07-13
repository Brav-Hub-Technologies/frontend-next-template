# Hooks

Esta pasta é usada para armazenar Hooks Customizados do React (Custom Hooks).

## Como deve ser usada:
- **O que são:** Custom Hooks são funções JavaScript cujo nome começa com `use` e que podem chamar outros Hooks (como `useState`, `useEffect`, `useContext`).
- **Encapsular Lógica:** Sempre que você perceber que uma lógica de estado ou efeitos colaterais está se repetindo em mais de um componente (ex: lógica de modal, detecção de clique fora do elemento, busca em API com estados de carregamento), abstraia para um hook customizado e coloque-o aqui.
- **Exemplo de Nomenclatura:** `useCarregamento.ts`, `useAutenticacao.ts`, `useJanela.ts`.
- Mantenha a interface do seu hook simples, retornando apenas os estados e métodos estritamente necessários para os componentes que os consumirem.

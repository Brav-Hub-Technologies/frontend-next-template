# Utils

Esta pasta é usada para guardar funções utilitárias auxiliares.

## Como deve ser usada:
- **O que são funções utilitárias:** São funções "puras" que recebem parâmetros e retornam um resultado de forma previsível e sem efeitos colaterais. Elas não devem depender de lógicas do React (como hooks ou estados).
- **Exemplos de Conteúdo:**
  - Formatação de dados: `formatarMoeda.ts`, `formatarData.ts`, `mascaraCpf.ts`.
  - Validações: `validarEmail.ts`, `validarSenha.ts`.
  - Cálculos ou manipulações matemáticas isoladas.
- **Boas Práticas:** Cada função ou grupo de funções coesas deve estar em seu próprio arquivo. Isso torna mais fácil testar as funções utilitárias com testes unitários (ex: Jest).
- Evite criar um único arquivo `utils.ts` gigantesco contendo todas as funções da aplicação, pois isso prejudica a manutenibilidade.

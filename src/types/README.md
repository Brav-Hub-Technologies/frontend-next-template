# Types

Esta pasta contém todas as definições de tipagem global para o TypeScript na aplicação.

## Como deve ser usada:
- **Interfaces e Tipos:** Declare interfaces, types, e enums genéricos que são compartilhados por múltiplas partes da aplicação.
- **Exemplos de Conteúdo:**
  - Tipagens de Modelos de Dados: `IUsuario`, `IProduto`, `IPedido`.
  - Tipagens de Respostas de API.
- Se a tipagem for muito específica de um único componente ou página, você pode mantê-la no mesmo arquivo do componente. Mas se dois ou mais arquivos precisarem compartilhar uma interface, ela deve ser movida para cá.
- Tente agrupar tipos similares em arquivos com nomes descritivos, como `usuario.types.ts` ou `api.types.ts`.

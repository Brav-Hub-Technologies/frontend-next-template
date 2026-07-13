# Services

Esta pasta é responsável por toda a comunicação externa da aplicação com serviços de terceiros ou com a API back-end (Business Logic / Lógica de Serviços).

## Como deve ser usada:
- **Requisições à API:** Crie funções que englobam a busca, criação, atualização e exclusão de dados da API.
- **Exemplo de Organização:** Se a sua aplicação lida com usuários, crie um `usuarios.service.ts` com funções como `buscarUsuarios()`, `criarUsuario(dados)`, etc.
- **Isolamento de Lógica de Requisição:** Ao concentrar as chamadas REST ou GraphQL aqui, seus componentes e hooks ficam mais limpos e ignorantes de *como* os dados são obtidos. Eles apenas chamam as funções desta pasta.
- Idealmente, essas funções utilizam a instância do cliente configurado na pasta `src/lib` (como o axios).

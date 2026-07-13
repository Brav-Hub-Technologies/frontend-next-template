# Constants

Esta pasta destina-se a armazenar todas as constantes da aplicação, ou seja, valores estáticos e imutáveis.

## Como deve ser usada:
- **Exemplos de Conteúdo:** Rotas do sistema (`rotas.ts`), chaves de configuração, mensagens de erro padronizadas, limites numéricos (ex: `LIMITE_PAGINACAO = 20`), opções de select (ex: lista de estados do Brasil), e temas globais.
- **Evitar Magic Numbers e Magic Strings:** Em vez de espalhar strings ou números avulsos pelo código, defina-os aqui com nomes descritivos em MAIÚSCULAS_COM_SNAKE_CASE e importe nos arquivos necessários.
- Isso facilita manutenções futuras: caso uma rota ou mensagem mude, você a altera em um só lugar.

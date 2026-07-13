# Lib

A pasta `lib` (de library / biblioteca) é destinada a centralizar as configurações, instâncias e inicializações de bibliotecas de terceiros.

## Como deve ser usada:
- **Exemplos de Conteúdo:**
  - Instância do cliente HTTP configurado (ex: `axios.ts` com interceptadores).
  - Inicialização do cliente de banco de dados (ex: Prisma, Supabase, Firebase).
  - Configurações de provedores de autenticação (ex: NextAuth).
  - Configurações e instâncias de logs ou análises de dados (Sentry, Google Analytics).
- **Isolamento:** Em vez de importar e configurar diretamente as bibliotecas externas nos seus componentes ou páginas, você configura na `lib` e exporta a instância pronta para uso. Isso garante que a aplicação não fique acoplada às configurações de terceiros em diversos arquivos.

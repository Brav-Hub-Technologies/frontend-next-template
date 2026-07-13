# App

Esta pasta é o coração da aplicação no Next.js (utilizando a App Router).

## Como deve ser usada:
- **Páginas e Layouts:** Crie aqui as rotas da sua aplicação. Um arquivo `page.tsx` dentro de uma pasta cria uma nova rota (ex: `app/sobre/page.tsx` será `/sobre`).
- **Layouts e Templates:** Arquivos como `layout.tsx` e `template.tsx` devem ser colocados aqui para envolver páginas específicas ou todo o site.
- **Componentes Server-side e Client-side:** Por padrão, os componentes aqui são renderizados no servidor (Server Components). Se precisar de estado (`useState`, `useEffect`) ou eventos (`onClick`), adicione a diretiva `'use client'` no topo do arquivo.
- Mantenha componentes menores e reutilizáveis na pasta `src/components`, e deixe a pasta `app` mais focada na estrutura de rotas e layouts.

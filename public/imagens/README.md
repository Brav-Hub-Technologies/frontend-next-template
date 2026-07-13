# Imagens

Esta pasta é o local correto para guardar todos os arquivos visuais estáticos (PNG, JPG, SVG, WebP, etc.) da sua aplicação que não são importados diretamente pelos arquivos de estilos.

## Regras de Organização

**NUNCA** jogue todas as imagens soltas diretamente aqui ou na raiz da pasta `public/`. Conforme o projeto cresce, fica impossível encontrar o que você precisa. 

**Você deve sempre separar as imagens em subpastas por contexto ou tipo.**

### Exemplos de Subpastas Recomendadas:
- 📂 **`icones/`**: Para SVGs de ícones pequenos (ex: seta, lupa, sino de notificação).
- 📂 **`logos/`**: Para a logomarca do sistema, de parceiros ou patrocinadores.
- 📂 **`ilustracoes/`**: Para desenhos e vetores maiores usados para compor o visual das páginas.
- 📂 **`fotos/`**: Para imagens de fato (fotos de pessoas, backgrounds, produtos, etc).

### Dicas de Uso no Next.js:
- As imagens colocadas aqui podem ser acessadas diretamente através da URL raiz. Por exemplo, uma imagem salva em `public/imagens/logos/minha-logo.svg` será renderizada usando `<img src="/imagens/logos/minha-logo.svg" />` ou usando o componente otimizado do Next `<Image src="/imagens/logos/minha-logo.svg" alt="Logo" width={100} height={100} />`.
- Dê preferência ao componente `<Image>` do `next/image` para imagens pesadas, pois ele otimiza o peso e converte para formatos modernos como WebP automaticamente!

# RO Warmancer Page

Este repositório serve como uma página estática para GitHub Pages dedicada ao tutorial da build Warmancer em Ragnarok Online. Todo o conteúdo textual está em português para facilitar edições manuais, e os gráficos são renderizados por JavaScript no próprio navegador.

## Estrutura do projeto

- `index.html` — único HTML da página, com seções editáveis em português.
- `assets/css/style.css` — estilos globais com foco em leitura noturna.
- `assets/js/charts.js` — dados e renderização dos gráficos de nível, armas e cards.
- `images/` — local para colocar prints, mockups ou recursos visuais usados no tutorial.
- `.github/workflows/pages.yml` — workflow que publica a branch `main` no GitHub Pages.

## Como editar o tutorial

1. Abra `index.html` e atualize os títulos, parágrafos e artigos nas seções `sobre`, `pico-de-poder`, `estrategia`, `tutorial`, `galeria` e `contato`.
2. Se quiser alterar os gráficos ou os cards dos níveis, edite os arrays no `assets/js/charts.js`. As mudanças são aplicadas automaticamente no carregamento da página.
3. Acrescente imagens em `images/` e, se necessário, coloque novos blocos HTML na seção de galeria para exibí-las.
4. Commit e publique: o workflow em `.github/workflows/pages.yml` dispara a cada push no `main`.

## Próximos passos sugeridos

- Adicionar dicas adicionais por nível direto nos cards do `levelDetailsContainer`.
- Documentar builds alternativas criando novas seções ou páginas auxiliares.
- Revisar e expandir a galeria com capturas de tela atualizadas.

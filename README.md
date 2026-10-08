# Dispositivos Móveis — FATEC

Projeto da disciplina de Dispositivos Móveis, desenvolvido com React Native e Expo. As versões de cada aula estão separadas em branches para consulta e avaliação.

## Versões em ordem das aulas

| Aula | Versão | Conteúdo e situação |
| --- | --- | --- |
| 01 | [aula-01](https://github.com/davisouza5017/dispositivos-moveis-aula01/tree/aula-01) | Hello World, interpolação no JSX, StyleSheet e Flexbox. Inclui o README atualizado da aula. |
| 02 | Pendente de identificação | Não foi localizada uma versão correspondente no histórico disponível. |
| 03 | Pendente de identificação | O commit chamado “aula 03” reintroduziu o App.js da Aula 01 com erro de sintaxe; não comprova uma implementação da Aula 03. |
| 04 | [aula-04](https://github.com/davisouza5017/dispositivos-moveis-aula01/tree/aula-04) | Catálogo de produtos em TypeScript, componentes, filtro de categorias, favoritos, NativeWind e TailwindCSS. |
| 05 | [aula-05](https://github.com/davisouza5017/dispositivos-moveis-aula01/tree/aula-05) | Expo Router, abas, detalhe de produto, tela de erro, temas e typedRoutes. |

A branch `main` reúne a implementação da Aula 05 e este índice. As branches anteriores preservam as respectivas versões.

## Como consultar uma aula

Clique no link da versão na tabela ou use o seletor de branches do GitHub. Para baixar uma versão, selecione a branch e use **Code → Download ZIP**.

Para executar localmente:

```bash
git clone https://github.com/davisouza5017/dispositivos-moveis-aula01.git
cd dispositivos-moveis-aula01
git switch aula-01
npm ci
npm start
```

Substitua `aula-01` por `aula-04` para consultar o catálogo. Execute novamente `npm ci` ao trocar de versão, pois as dependências mudaram.

## Aula 05 — Expo Router

- `app/_layout.tsx`: pilha raiz, CSS global e StatusBar.
- `app/(tabs)/_layout.tsx`: abas Catálogo e Favoritos, ícones e botão de tema.
- `app/(tabs)/index.tsx`: catálogo, filtro e favoritos locais.
- `app/(tabs)/favoritos.tsx`: tela estática prevista no laboratório. O estado compartilhado fica para a Aula 09.
- `app/produto/[id].tsx`: detalhe, conversão do parâmetro para número e tratamento de produto inexistente.
- `app/+not-found.tsx`: tela de endereço inexistente e link para o catálogo.

O ponto de entrada agora é `expo-router/entry`. Foram removidos `App.tsx`, `index.js`, `Cabecalho.tsx` e `src/screens/CatalogoScreen.tsx`.

### Executar e conferir

```bash
git switch aula-05
npm ci
npx expo start --go -c
```

Para abrir no navegador, use `npm run web`. Inicie o Expo uma vez antes de executar `npm run check`: o servidor gera `.expo/types/router.d.ts`, usado pelo typedRoutes. A pasta `.expo` e `expo-env.d.ts` ficam fora do Git.

O scheme é `vitrine`, por exemplo `vitrine://produto/3` numa instalação nativa com o scheme registrado. Expo Go usa seu próprio endereço de desenvolvimento.

- A estrela deve alternar o favorito sem abrir o detalhe.
- Tocar no nome abre o detalhe fora das abas; voltar preserva filtro e favoritos.
- Trocar de aba preserva o filtro do catálogo.
- O botão de tema altera tela, cabeçalho e barra de abas.
- `/produto/999` mostra “Produto não encontrado”. Um caminho inexistente mostra “Esta tela não existe”.
- Com o servidor já iniciado, troque temporariamente `/produto/` por `/produtos/` no catálogo: `npm run check` deve falhar. Desfaça a alteração e confira novamente.

## Componentes e dados

- `src/components/`: cards dos produtos, filtro e botão de tema.
- `src/constants/`: produtos de exemplo e tema.
- `src/types/produto.ts`: tipos dos dados.
- Arquivos de configuração do NativeWind, TailwindCSS, Metro e TypeScript na raiz.

## Rastreabilidade

| Versão | Commit de origem |
| --- | --- |
| Aula 01 | `08162b4a47f6d568bfbaf0a7a3d1a2ec541faa4e` |
| Aula 04 | `e07d462377bfa53ace4f0689166bb7e4f6c0db8a` |

O estado anterior à organização foi preservado em [historico/estado-original](https://github.com/davisouza5017/dispositivos-moveis-aula01/tree/historico/estado-original), no commit `316227716813c5c0c53cefdd327f27761c2c9116`. O histórico de commits foi mantido.

As aulas 02 e 03 devem ser identificadas ou implementadas conforme os enunciados do professor antes da entrega completa.

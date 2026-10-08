# Dispositivos Móveis — FATEC

Projeto da disciplina de Dispositivos Móveis, desenvolvido com React Native e Expo. As versões de cada aula estão separadas em branches para consulta e avaliação.

## Versões em ordem das aulas

| Aula | Versão | Conteúdo e situação |
| --- | --- | --- |
| 01 | [aula-01](https://github.com/davisouza5017/dispositivos-moveis-aula01/tree/aula-01) | Hello World, interpolação no JSX, StyleSheet e Flexbox. Inclui o README atualizado da aula. |
| 02 | Pendente de identificação | Não foi localizada uma versão correspondente no histórico disponível. |
| 03 | Pendente de identificação | O commit chamado “aula 03” reintroduziu o App.js da Aula 01 com erro de sintaxe; não comprova uma implementação da Aula 03. |
| 04 | [aula-04](https://github.com/davisouza5017/dispositivos-moveis-aula01/tree/aula-04) | Catálogo de produtos em TypeScript, componentes, filtro de categorias, favoritos, NativeWind e TailwindCSS. |

A branch `main` reúne o catálogo da Aula 04 e este índice. As branches das aulas preservam os arquivos dos respectivos commits, sem alterações de código.

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

## Organização do catálogo

- `App.tsx`: entrada visual do aplicativo.
- `src/screens/CatalogoScreen.tsx`: lista, categorias e estado dos favoritos.
- `src/components/`: cabeçalho, cards dos produtos e filtro.
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

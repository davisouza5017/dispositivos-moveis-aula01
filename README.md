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
| 06 | [aula-06](https://github.com/davisouza5017/dispositivos-moveis-aula01/tree/aula-06) | FlatList com 500 produtos, estados da lista, atualização simulada e memoização. |
| 07 | [aula-07](https://github.com/davisouza5017/dispositivos-moveis-aula01/tree/aula-07) | Login e cadastro com React Hook Form, Yup, Controller e envio simulado. |

A branch `main` reúne a implementação da Aula 07 e este índice. As branches anteriores preservam as respectivas versões.

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

## Aula 06 — listas, estados e desempenho

O catálogo usa `FlatList`, com filtro em `ListHeaderComponent`, mensagem vazia em `ListEmptyComponent` e espaçamento em `ItemSeparatorComponent`. As chaves são IDs únicos, convertidos para texto.

- `src/utils/gerarProdutos.ts` gera 500 itens uma única vez. O detalhe e o catálogo consultam a mesma constante `PRODUTOS_TESTE`.
- `src/components/CardProduto.tsx` usa `memo`. As funções `abrir` e `alternarFavorito` usam `useCallback`, e a abertura recebe o ID do cartão.
- `useMemo` refaz a filtragem somente quando a categoria muda.
- `src/components/EstadosDeLista.tsx` contém `Carregando`, `Vazio` e `Erro`, com callback para tentar novamente.
- `refreshing` e `onRefresh` simulam a atualização em 1,2 segundo, desligando o indicador no bloco `finally`.
- `sceneStyle` acompanha o tema das abas, inclusive quando a tela exibe carregamento ou erro.

Nesta aula os dados são locais: o carregamento fica em `false`, e o componente de erro fica preparado para a busca da Aula 08. A versão final mantém quatro categorias e não contém os logs nem os estados forçados usados nos experimentos.

Para executar esta versão, use `git switch aula-06`, `npm ci` e `npx expo start --go`. Depois de iniciar o servidor uma vez, execute `npm run check`.

Consulte [as medições e os testes da Aula 06](docs/aula-06-validacao.md). O gesto de puxar para atualizar e a taxa de quadros devem ser conferidos no celular ou emulador.

## Aula 07 — formulários e validação

- `app/(auth)/login.tsx` e `cadastro.tsx`: formulários, envio assíncrono simulado e navegação com `replace`.
- `src/validacao/`: regras Yup e tipos derivados com `InferType`.
- `src/components/CampoTexto.tsx`: rótulo, campo controlado pelo `Controller`, erro e cores dos dois temas.
- `mode: 'onBlur'`: valida após sair do campo. Ao corrigir um campo com erro, o componente revalida durante a digitação. `reValidateMode: 'onChange'` também atua após o envio.
- `isSubmitting` bloqueia o botão e mostra o texto de espera. `setError('root', ...)` mostra o erro geral do login; `setError('email', ...)` mostra o erro de e-mail já usado.

Abra `/login` ou `/cadastro` no navegador (`npm run web`). No Expo Go, abra esses caminhos no endereço do servidor de desenvolvimento. O link temporário em Favoritos foi removido, conforme o laboratório; a integração com sessão fica para a Aula 09.

O login de teste é **emilys / emilyspass**. O cadastro simula duplicidade para **emily.johnson@x.dummyjson.com**. Não há API, sessão ou conta persistida nesta aula: um cadastro válido retorna ao login, e somente as credenciais de teste entram no catálogo.

Consulte [os testes da Aula 07](docs/aula-07-validacao.md).

### Dados e componentes compartilhados

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

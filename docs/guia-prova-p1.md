# Guia de estudo — P1

Use o código da branch aula-07 para estudar. Não decore frases: abra cada arquivo e explique o caminho dos dados.

## Como o app funciona

1. `app/_layout.tsx` configura a pilha de navegação, o tema e a StatusBar.
2. `app/(tabs)/_layout.tsx` define as abas e o botão de tema.
3. `app/(tabs)/index.tsx` guarda categoria e IDs favoritos com useState. Filtra os 500 produtos com useMemo e entrega os itens à FlatList.
4. `CardProduto.tsx` recebe produto, favorito e duas funções. A estrela chama a função com o ID; o título abre o detalhe. memo evita renderizar cartões cujas props não mudaram.
5. `app/produto/[id].tsx` recebe o ID da rota, transforma em número e busca o produto. Se não existir, apresenta uma mensagem.
6. Login e cadastro usam useForm. CampoTexto conecta TextInput ao formulário através de Controller. Yup descreve as regras; yupResolver entrega os erros ao React Hook Form.
7. handleSubmit valida e só chama aoEnviar com dados válidos. isSubmitting permanece verdadeiro enquanto a Promise está pendente. setError adiciona um erro simulado de servidor. replace troca a tela atual; reset limpa os valores do cadastro.

## Trechos que você precisa conseguir explicar

- `useState`: valor atual e função para atualizá-lo; a atualização provoca nova renderização.
- `setFavoritos(atuais => ...)`: usa o estado mais recente. Se o ID existe, filter o remove; se não existe, cria um novo array incluindo-o.
- `useMemo`: guarda o resultado do filtro até a categoria mudar.
- `useCallback`: mantém a identidade da função enquanto suas dependências não mudam. Ajuda o memo do cartão; não impede por si só a execução da função.
- `FlatList`: renderiza uma janela de itens; keyExtractor identifica cada item. initialNumToRender e windowSize controlam a janela inicial e a região mantida.
- `finally`: desliga a atualização mesmo se ocorrer erro.
- `DadosLogin = yup.InferType<...>`: deriva o tipo dos dados a partir do esquema.
- `T extends FieldValues` e `Path<T>`: CampoTexto aceita diferentes formulários, mas o nome precisa pertencer àquele formulário.
- `onChange`, `onBlur` e `value`: digitar informa o novo valor; sair do campo dispara validação; value mostra o valor do formulário.
- `errors.usuario?.message`: lê a mensagem se houver erro; o ponto de interrogação evita acessar uma propriedade de undefined.
- `dark:`: aplica a classe quando o tema escuro está ativo.
- `push` acrescenta uma tela à pilha; `replace` substitui a tela atual.

## Treino de pequena alteração

Faça cada exercício sozinho, explique antes de executar e desfaça depois para manter os requisitos entregues:

1. Mudar o mínimo da senha para oito no esquema e ajustar o placeholder. Testar sete e oito caracteres. Explique por que mudar só o texto não muda a regra.
2. Mudar a mensagem para usuário com espaço. Testar `emi lys` e `emilys`.
3. Acrescentar uma categoria ao array CATEGORIAS. Testar uma que tenha itens e outra vazia. Explique a relação entre o filtro e ListEmptyComponent.
4. Mudar o texto de espera de um botão através de textoEnviando. Explique que a regra de bloqueio continua vindo de isSubmitting.
5. Mudar o tempo da simulação de 1200 para 2000. Observe o botão desabilitado enquanto a Promise aguarda.

## Limites da versão

Login e cadastro são simulados. Não há sessão persistida ou autenticação real. Os favoritos permanecem locais ao catálogo. Isso segue a sequência das aulas: API e sessão entram depois. As aulas 02 e 03 ainda precisam ser identificadas conforme os enunciados.

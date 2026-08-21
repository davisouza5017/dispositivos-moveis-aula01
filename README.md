# Aula 01 - Dispositivos Móveis (FATEC)

Atividade prática da Aula 01 da disciplina de Dispositivos Móveis

## Sobre o projeto

Primeiro app feito em React Native utilizando Expo (SDK 57). O objetivo foi entender a estrutura básica de componentes, estilização com StyleSheet, funcionamento do Flexbox e a lógica inicial de estados no React

## Tecnologias

- React Native (0.86.2)
- React (19.2.3)
- Expo SDK 57
- Suporte web configurado (`react-dom`, `react-native-web`, `@expo/metro-runtime`)

## Exercícios da apostila

### Exercícios 1 e 3
- Criação da tela inicial com o texto "Hello World!" estilizado (fontSize: 32, bold e cor azul `#2563eb`).
- Declaração da constante `nome = 'Aluno'` e interpolação no JSX exibindo "Hello, {nome}!"

### Exercício 2 - Flexbox
- No React Native o padrao é `flexDirection: 'column'`:
  - Eixo principal: vertical (alinhado por `justifyContent`).
  - Eixo cruzado: horizontal (alinhado por `alignItems`).
- Ao alterar para `flexDirection: 'row'`:
  - O eixo principal passa a ser o horizontal, logo o `justifyContent` passa a centralizar/alinhar na horizontal.
  - O eixo cruzado passa a ser o vertical, logo o `alignItems` passa a alinhar na vertical.

### Exercício 4 - Pensar em Estado (Login)
Mapeamento dos dados dos quais a tela depende:

- `usuario` / `email` (string): armazena o que o usuário digita no campo de login.
- `senha` (string): armazena o texto digitado no campo de senha mascarada.
- `carregando` (boolean): quando true, exibe o indicador de loading e desabilita o botão para evitar cliques duplicados.
- `erroAutenticacao` (string/boolean): quando houver falha, exibe a mensagem de erro em vermelho na tela.

## ler dps >> Como rodar o projeto

1. Instalar as dependencias:
   ```bash
   npm install

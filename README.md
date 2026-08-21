# Dispositivos Móveis - Aula 01: Meu Primeiro App em React Native

Projeto prático desenvolvido para a disciplina de **Dispositivos Móveis** da **FATEC**, ministrada pelo **Prof. Arnaldo Sanchez**.

---

## 📱 Sobre o Projeto

Este repositório contém a implementação do primeiro aplicativo em **React Native** utilizando o framework **Expo (SDK 57)**, abordando os conceitos fundamentais de componentes funcionais, estilização com `StyleSheet`, sistema de layout **Flexbox** e introdução ao gerenciamento de **Estado**.

---

## 🛠️ Tecnologias Utilizadas

- **React Native**: 0.86.2
- **React**: 19.2.3
- **Expo SDK**: ~57.0.0
- **Suporte Web**: `react-dom`, `react-native-web`, `@expo/metro-runtime`

---

## 📝 Respostas dos Exercícios Teóricos e Práticos

### Exercício 1 & 3: Hello World e Interpolação de Constantes
- **Exercício 1**: Criação da estrutura inicial exibindo o texto estilizado `"Hello World!"`.
- **Exercício 3**: Declaração da constante `const nome = 'Aluno';` e exibição dinâmica do texto `"Hello, {nome}!"` utilizando interpolação JSX.

---

### Exercício 2: Comportamento do Flexbox no React Native

> **Pergunta / Conceito:** Qual a diferença entre a orientação padrão e como os eixos se comportam ao alterar `flexDirection`?

* **Padrão no React Native (`flexDirection: 'column'`)**:
  - **Eixo Principal (Main Axis)**: Vertical (de cima para baixo).
  - **Eixo Cruzado (Cross Axis)**: Horizontal (da esquerda para a direita).
  - `justifyContent`: Alinha os elementos ao longo do eixo vertical.
  - `alignItems`: Alinha os elementos ao longo do eixo horizontal.

* **Ao alterar para `flexDirection: 'row'`**:
  - **Eixo Principal (Main Axis)**: Passa a ser o eixo **horizontal** (linha).
  - **Eixo Cruzado (Cross Axis)**: Passa a ser o eixo **vertical** (coluna).
  - `justifyContent`: Passa a atuar e centralizar/alinhar no **eixo horizontal** (eixo principal).
  - `alignItems`: Passa a atuar e centralizar/alinhar no **eixo vertical** (eixo cruzado).

---

### Exercício 4: Pensar em Estado (Tela de Login)

Em React Native, o estado (`state`) representa os dados dinâmicos que sofrem mutação com a interação do usuário ou respostas assíncronas, refletindo diretamente na renderização da interface gráfica.

Para uma tela de autenticação/login, a estrutura de estados recomendada e seus respectivos reflexos visuais são:

| Estado | Tipo | Descrição | Reflexo Visual na Tela |
| :--- | :--- | :--- | :--- |
| `email` / `usuario` | `string` | Armazena o texto digitado pelo usuário no campo de identificação/e-mail. | Atualiza o valor visível dentro do `TextInput` de e-mail/usuário em tempo real. |
| `senha` | `string` | Armazena o texto digitado no campo de senha. | Atualiza os caracteres ocultos/mascarados (`secureTextEntry`) no campo de senha. |
| `carregando` (`isLoading`) | `boolean` | Indica se a requisição de autenticação com a API está em andamento. | Exibe um indicador de progresso (`ActivityIndicator`), desabilita o botão de login para evitar múltiplos cliques e altera a opacidade do botão. |
| `erroAutenticacao` | `string` ou `boolean` | Armazena a mensagem de erro retornada pela validação ou serviço de autenticação (ex: "Credenciais inválidas"). | Renderiza uma mensagem de erro em vermelho (ex: `<Text style={styles.errorText}>`), aplica bordas vermelhas nos campos correspondentes ou exibe um alerta/modal ao usuário. |

---

## 🚀 Como Executar o Projeto

1. **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no computador.

2. **Instalação das dependências** (caso esteja clonando o repositório):
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento Expo**:
   ```bash
   npx expo start
   ```

4. **Execução nos ambientes**:
   - **Dispositivo Físico**: Abra o aplicativo **Expo Go** (Android/iOS) e escaneie o QR Code gerado no terminal.
   - **Navegador Web**: Pressione `w` no terminal durante a execução do Expo.
   - **Emulador Android**: Pressione `a` no terminal.
   - **Simulador iOS** (macOS): Pressione `i` no terminal.

# Aula 07 — validação

Implementação baseada no laboratório, resumo e slides fornecidos pelo professor. Mantém React Hook Form, Yup, yupResolver, Controller genérico, InferType, erros por campo e geral, isSubmitting, reset, replace e envio simulado de 1,2 segundo.

## Verificação no navegador

- Usuário `ab`: nenhum erro antes de sair do campo; após sair, erro de mínimo de três caracteres.
- Usuário com espaço: mensagem correspondente; corrigir para `emilys` remove o erro durante a digitação.
- Senha curta: mensagem de mínimo de seis caracteres.
- Credenciais incorretas: espera com botão desabilitado, depois erro geral.
- Cadastro vazio: quatro mensagens obrigatórias e foco no primeiro campo inválido.
- E-mail inválido e senhas diferentes: mensagens específicas; correção remove os erros.
- E-mail de teste duplicado: erro abaixo do campo após a espera.
- Cadastro válido: retorna ao login com formulário novo.
- Login `emilys / emilyspass`: abre catálogo.
- Links entre login e cadastro usam `replace`.
- Aparência dos formulários e mensagens conferida nos temas claro e escuro.

Após simplificar, foram rechecados os botões compartilhados e a alternância de favorito. A tabela de cores removida não tinha referências no app.

`npm run check` verifica TypeScript após o Expo gerar os tipos das rotas. O teclado virtual, o ajuste do KeyboardAvoidingView e o gesto de atualização devem ser conferidos em celular/emulador; o navegador não comprova esses comportamentos nativos.

## Detalhe da revalidação

Na biblioteca, `reValidateMode: 'onChange'` passa a atuar após o primeiro envio. Para cumprir também a correção imediata após o primeiro erro descrita no laboratório, CampoTexto chama `onBlur` após `onChange` quando já há mensagem de erro. Mantém-se `mode: 'onBlur'` e não se exibem erros antes da primeira saída do campo.

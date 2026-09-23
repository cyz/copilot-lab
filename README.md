# Lab: Desenvolvimento Agentic com Copilot Chat

## O que vamos construir

Vamos construir uma calculadora simples com frontend em Tailwind CSS e backend em Node.js com Express.

O foco não é a calculadora em si. O objetivo é aprender a estruturar um sistema de desenvolvimento agentic, onde a IA atua com contexto e governança definidos por você.

## Ambiente do laboratório

Este laboratório usa o harness **Local** do GitHub Copilot no VS Code.

### Criar e abrir a pasta do projeto

1. No VS Code, abra o menu **File** e selecione **Open Folder...**.
2. Na janela que abrir, acesse a pasta **Desktop**.
3. Selecione a opção para criar uma nova pasta.
4. Dê à pasta o nome `calculadora-copilot-lab`.
5. Selecione a pasta criada e clique em **Open**.
6. No Explorer do VS Code, confirme que `calculadora-copilot-lab` está aberta e vazia.

Durante os exercícios:

1. Use o modo **Agent**.
2. Confirme que as ferramentas de terminal e navegador estão disponíveis.

> Os comandos `/create-instructions`, `/create-prompt`, `/create-agent` e `/init`, assim como os prompt files, são usados aqui no contexto do harness Local. Eles podem não estar disponíveis em outros harnesses.

### Onde encontrar os recursos no VS Code

Use estes ícones durante o laboratório:

- **Explorer**: ícone de dois arquivos na barra lateral esquerda. Use-o para acompanhar os arquivos criados no projeto.
- **Chat**: ícone do GitHub Copilot na barra lateral. Use-o para abrir o chat e executar os prompts.
- **Configure Chat**: ícone de engrenagem no Chat. Use-o para abrir as configurações e customizações do Copilot.

Para abrir o painel de customizações:

1. Clique no ícone do **GitHub Copilot** na barra lateral.
2. No Chat, clique no ícone de engrenagem **Configure Chat**.
3. No editor de customizações que abrir, use as seções **Instructions**, **Prompts**, **Skills** e **Agents** para visualizar e gerenciar os artefatos do laboratório.

![Editor Chat Customizations do VS Code com o harness Local e as categorias Agents, Skills, Instructions e Prompts](https://code.visualstudio.com/assets/docs/agent-customization/customization/create-instructions-file.png)

> A aparência e a posição dos ícones podem variar ligeiramente entre versões do VS Code. Procure pelos mesmos nomes exibidos na imagem.

> Se a engrenagem não estiver visível, abra a Command Palette com `Cmd+Shift+P` no macOS ou `Ctrl+Shift+P` no Windows e Linux, procure por **Chat: Open Customizations** e pressione Enter.

### Mapa dos artefatos

| Artefato                      | Papel no sistema                             |
| ----------------------------- | -------------------------------------------- |
| Instruction de arquitetura    | Define stack, estrutura e estilo visual do projeto |
| Instruction de calculadora    | Especializa comportamento no domínio de cálculo    |
| Prompt file do Local          | Escala geração de código com consistência          |
| Skill                         | Testa a experiência real da calculadora            |
| Agent de Code Review          | Revisa o código e aponta melhorias com autonomia   |
| Copilot Instructions          | Orienta o agente sobre o projeto como um todo       |


---

# Passo 1: Instruction de Arquitetura

Estabelece a stack e a estrutura do projeto. O Copilot vai considerar essas informações sempre que trabalhar em qualquer arquivo do repositório.

## No chat, digite

`/create-instructions`

## Cole este prompt

```
Crie uma instruction de workspace chamada arquitetura em
.github/instructions/arquitetura.instructions.md.

Configure a instruction com applyTo: "**" e defina as tecnologias,
a estrutura e os padrões de código do projeto.

Stack:
- JavaScript com Node.js e Express no backend
- Tailwind CSS no frontend, com interface moderna no estilo dark mode do VS Code

Estrutura:
- src/calculadora/ para funções puras de domínio
- src/services/calcService.js para validação e orquestração
- src/routes/calculadora.js para as rotas HTTP
- public/ para o frontend
- tests/ para os testes automatizados

Padrões de código:
- Funções pequenas com uma única responsabilidade
- Separação clara entre rota, serviço e lógica de domínio
- Sem lógica de negócio diretamente nas rotas
- Scripts npm para iniciar a aplicação e executar os testes
```

Depois de salvar, confirme que o arquivo aparece em **Configure Chat > Instructions**.

Para verificar:

1. No Chat, clique na engrenagem **Configure Chat**.
2. No editor de customizações, abra **Instructions**.
3. Confirme que `arquitetura.instructions.md` aparece como uma instruction do workspace.
4. Clique no nome da instruction e verifique se o campo `applyTo` contém `**`.

---

# Passo 2: Instruction de Calculadora

Especializa o comportamento do Copilot para o domínio de cálculo. Entra em ação sempre que o Copilot trabalha com arquivos da calculadora.

## No chat, digite

`/create-instructions`

## Cole este prompt

```
Crie uma instruction de workspace chamada calculadora em
.github/instructions/calculadora.instructions.md.

Configure a instruction com applyTo: "src/**/*.js" e oriente o Copilot
ao trabalhar com código de operações matemáticas.

O Copilot deve sempre:
- Usar funções puras
- Validar entradas numéricas antes de operar
- Retornar erro explícito para divisão por zero
- Atualizar os testes a cada mudança de operação
- Evitar efeitos colaterais e logs desnecessários

O Copilot deve evitar:
- Funções com múltiplas responsabilidades
- Assumir que entradas são válidas
- Ignorar casos de erro
```

Depois de salvar, confirme que o arquivo aparece em **Configure Chat > Instructions**.

Para verificar:

1. No Chat, clique na engrenagem **Configure Chat**.
2. No editor de customizações, abra **Instructions**.
3. Confirme que `calculadora.instructions.md` aparece como uma instruction do workspace.
4. Clique no nome da instruction e verifique se o campo `applyTo` contém `src/**/*.js`.

---

# Passo 3: Criar a Calculadora

Com as instructions prontas, é hora de gerar o esqueleto da aplicação. O Copilot vai usar o contexto definido nos passos anteriores para produzir código já alinhado com a arquitetura e o domínio.

## No chat, cole este prompt

```
Crie uma aplicação de calculadora básica que faça soma e subtração
recebendo dois valores.

Siga a estrutura definida nas instructions do workspace:
- src/calculadora/
- src/services/calcService.js
- src/routes/calculadora.js
- public/
- tests/

Requisitos:
- Inicialize o projeto Node.js.
- Configure Express e Tailwind CSS.
- Crie scripts npm para iniciar a aplicação e executar os testes.
- Sirva a aplicação em http://localhost:3000.
- Implemente testes automatizados para soma, subtração e entradas inválidas.
- Crie um README com instruções de instalação, teste e execução.
- Instale as dependências, execute os testes e corrija eventuais falhas.
```

## Verificação

No terminal, execute:

```bash
npm test
npm start
```

Com o servidor em execução, abra `http://localhost:3000` e confirme que soma e subtração funcionam.

---

# Passo 4: Prompt Reutilizável

## O que é

Um prompt parametrizado que permite gerar novas operações de forma consistente.

## Objetivo

Escalar a criação de código mantendo padrão e qualidade.

## No chat, digite

`/create-prompt`

## Cole este prompt

```
Crie um prompt file de workspace chamado nova-operacao em
.github/prompts/nova-operacao.prompt.md.

Configure o prompt com:
- name: nova-operacao
- description: Implementa e valida uma nova operação da calculadora
- argument-hint: Nome da operação matemática
- agent: agent

O prompt deve usar a variável ${input:nome_operacao} e solicitar ao Copilot:

1. Inspecionar a estrutura atual antes de editar.
2. Implementar a operação em JavaScript como função pura.
3. Validar entradas numéricas.
4. Tratar os erros previsíveis.
5. Atualizar rota, serviço, interface e testes.
6. Executar os testes automatizados e corrigir eventuais falhas.
7. Iniciar ou reutilizar o servidor local.
8. Testar a operação no navegador.

Ao final, informe:
- Operação implementada
- Arquivos alterados
- Testes executados e resultado
- Validação realizada no navegador
```

## Verificar o prompt file

1. No Chat, clique na engrenagem **Configure Chat**.
2. No editor de customizações, abra **Prompts**.
3. Confirme que `nova-operacao.prompt.md` aparece como um prompt do workspace.
4. Abra o prompt e verifique se o nome é `nova-operacao` e se o argumento `nome_operacao` está presente.

---

## 🧪 Teste intermediário

Use o prompt criado para gerar duas novas operações. No chat, execute:

```
/nova-operacao
```

Quando solicitado, informe `multiplicacao` para a variável `nome_operacao`.
Em seguida, execute novamente:

```
/nova-operacao
```

Desta vez, informe `divisao`.

Observe:

* Consistência do código entre as duas gerações
* Validação de entrada
* Tratamento de divisão por zero

---

# Passo 5: Skill

Antes de criar a skill, vamos gerar o comportamento que ela vai encapsular. O agente abre o browser, usa a calculadora como um usuário real e produz um relatório crítico.

Antes de executar o prompt, confirme que a aplicação está disponível em `http://localhost:3000`.

## Primeiro, execute este prompt no chat

```
Teste a calculadora em http://localhost:3000 como um usuário exigente.

Use a ferramenta de navegador para:
- Testar todas as operações disponíveis
- Verificar entradas inválidas e divisão por zero
- Avaliar estados de erro, clareza dos controles e responsividade
- Não alterar o código durante esta avaliação

Ao final, produza um relatório com evidências, problemas encontrados,
severidade e sugestões de melhoria.
```

## Depois, salve como skill

Use `/create-skill` — ou simplesmente diga no chat:

```text
Salve este fluxo como uma skill de workspace chamada
calculadora-dogfooding em
.github/skills/calculadora-dogfooding/SKILL.md.
```

## Verificar a skill

1. No Chat, clique na engrenagem **Configure Chat**.
2. No editor de customizações, abra **Skills**.
3. Confirme que `calculadora-dogfooding` aparece como uma skill do workspace.
4. Abra a skill e confirme que o arquivo `SKILL.md` descreve quando ela deve ser usada.

## Para acionar a skill no futuro

Uma vez salva, use este prompt no chat para invocar o comportamento:


```
faça dogfooding da calculadora
```

Confirme na seção **References** da resposta que a skill foi carregada.

---

# Passo 6: Modernização Visual

Antes de criar o agent, vamos melhorar a experiência da calculadora com um ajuste pontual: trocar os nomes das operações por símbolos matemáticos. Isso torna a interface mais intuitiva e próxima de uma calculadora real.

## No chat, cole este prompt

```
Atualize o frontend da calculadora para uma interface moderna inspirada na calculadora do iOS, substituindo o modelo de dois inputs por um fluxo interativo com teclado numérico. 

A interface deve ter um display no topo para entrada e resultado, teclado com dígitos (0–9, decimal e botão de apagar), botões de operações baseados nas rotas existentes, além de "=" para executar e "C" para limpar. 

O usuário deve inserir os valores sequencialmente e selecionar a operação antes do cálculo. Utilize um tema dark, com botões grandes, boa hierarquia visual e feedback de interação, garantindo responsividade.

Preserve as rotas existentes, atualize os testes necessários, execute
a suíte automatizada e valide o resultado no navegador em
http://localhost:3000.
```

---

# Passo 7: Agent de Code Review

Um agente que lê o código da calculadora, verifica a aderência às instructions e produz um relatório crítico com problemas encontrados e sugestões de melhoria.

O que diferencia este agent de um simples prompt é a autonomia: ele navega por múltiplos arquivos, cruza as regras das instructions com o código real e entrega um parecer estruturado sem precisar de orientação manual.

## No chat, digite

`/create-agent`

## Cole este prompt

```
Crie um custom agent de workspace chamado code-review-calc em
.github/agents/code-review-calc.agent.md.

O agent deve revisar o código sem modificar arquivos. Configure apenas
as ferramentas necessárias para pesquisar e ler o workspace e executar
comandos de verificação que não alterem o projeto.

O agent deve:

1. Inspecionar a estrutura real do projeto.
2. Ler todos os arquivos em src/calculadora/.
3. Ler src/services/calcService.js.
4. Ler src/routes/calculadora.js.
5. Ler os testes relacionados.
6. Verificar se os padrões definidos nas instructions estão sendo seguidos:
   - Funções puras sem efeitos colaterais
   - Validação de entradas no serviço
   - Sem lógica de negócio nas rotas
   - Tratamento explícito de erros previsíveis
7. Identificar código duplicado, validações ausentes e casos de erro sem cobertura.
8. Executar os testes e registrar o resultado, sem corrigir os problemas.

Ao final, produzir um relatório estruturado com:
- Arquivo analisado
- Linha ou símbolo relacionado
- Problema identificado
- Severidade
- Sugestão de correção
```

## Verificar o custom agent

1. No Chat, clique na engrenagem **Configure Chat**.
2. No editor de customizações, abra **Agents**.
3. Confirme que `code-review-calc` aparece como um agent do workspace.
4. Volte ao Chat, abra o seletor de agentes na caixa de mensagem e selecione `code-review-calc`.

## Para acionar o agent no chat, use o seletor de agent e o prompt:

```
revise o código da calculadora
```

---

# Passo 8: Copilot Instructions

Gera instruções gerais do projeto com base no que já existe no repositório. É executado por último para que o `/init` consiga analisar a aplicação, os testes e as customizações criadas durante o laboratório.

## No chat, digite

`/init`

> No harness Local, o Copilot vai analisar o projeto e propor as instruções globais automaticamente em `.github/copilot-instructions.md`.

Revise o arquivo gerado:

1. Clique no ícone do **Explorer** na barra lateral esquerda.
2. Expanda a pasta `.github`.
3. Abra `copilot-instructions.md`.
4. Confirme se os comandos de instalação, teste e execução estão corretos.
5. Compare as regras com as instructions de arquitetura e calculadora.
6. Remova duplicações e resolva eventuais contradições.
7. Execute uma tarefa pequena em um novo chat.
8. Abra **References** na resposta e confirme que as instructions esperadas foram usadas.

## Checklist de conclusão

Ao final do laboratório, confirme que:

- As duas instructions aparecem em **Configure Chat > Instructions**.
- Soma, subtração, multiplicação e divisão possuem testes automatizados.
- O prompt `/nova-operacao` funciona no harness Local.
- A skill de dogfooding é carregada automaticamente.
- O custom agent aparece no seletor de agents e não modifica arquivos.
- `npm test` passa.
- A calculadora funciona em `http://localhost:3000`.

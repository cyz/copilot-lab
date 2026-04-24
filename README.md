# Lab: Desenvolvimento Agentic com Copilot Chat

## O que vamos construir

Vamos construir uma calculadora simples com frontend em Tailwind CSS e backend em Node.js com Express.

O foco não é a calculadora em si. O objetivo é aprender a estruturar um sistema de desenvolvimento agentic, onde a IA atua com contexto e governança definidos por você.


### Mapa dos artefatos

| Artefato                      | Papel no sistema                             |
| ----------------------------- | -------------------------------------------- |
| Instruction de arquitetura    | Define stack, estrutura e estilo visual do projeto |
| Instruction de calculadora    | Especializa comportamento no domínio de cálculo    |
| Prompt            | Escala geração de código com consistência          |
| Skill                         | Testa a experiência real da calculadora            |
| Agent de Code Review          | Revisa o código e aponta melhorias com autonomia   |
| Copilot Instructions          | Consolida o contexto geral do projeto              |


---

# Passo 1: Instruction de Arquitetura

Estabelece a stack e a estrutura do projeto. O Copilot vai considerar essas informações sempre que trabalhar em qualquer arquivo do repositório.

## No chat, digite

`/create-instructions`

## Cole este prompt

```
Crie uma instruction chamada arquitetura que defina as tecnologias usadas e padrões de código do projeto.

Stack:
- JavaScript com Node.js e Express no backend
- Tailwind CSS no frontend, com interface moderna no estilo dark mode do VS Code

Padrões de código:
- Funções pequenas com uma única responsabilidade
- Separação clara entre rota, serviço e lógica de domínio
- Sem lógica de negócio diretamente nas rotas
```

---

# Passo 2: Instruction de Calculadora

Especializa o comportamento do Copilot para o domínio de cálculo. Entra em ação sempre que o Copilot trabalha com arquivos da calculadora.

## No chat, digite

`/create-instructions`

## Cole este prompt

```
Crie uma instruction chamada calculadora que oriente o Copilot ao trabalhar com código de operações matemáticas.

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

---

# Passo 3: Criar a Calculadora

Com as instructions prontas, é hora de gerar o esqueleto da aplicação. O Copilot vai usar o contexto definido nos passos anteriores para produzir código já alinhado com a arquitetura e o domínio.

## No chat, cole este prompt

```
Crie a estrutura de uma calculadra básica que faça operação de soma e subtração recebendo dois valores.
```

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
Crie um prompt chamado nova-operacao para gerar operações da calculadora.

O prompt deve usar uma variável chamada nome_operacao e solicitar ao Copilot:

1. Implementação da operação em JavaScript como função pura
2. Validação de entradas numéricas
3. Tratamento dos erros previsíveis
4. Atualizar a interface com a nova função, mantendo a qualidade visual
5. Explicação curta da regra aplicada
6. Teste manual no navegador após implementação

A resposta deve ser estruturada em:
- Código da função
- Testes
- Explicação
- Instruções para testar no browser para validar a operação
```

---

## 🧪 Teste intermediário

Use o prompt criado para gerar as duas primeiras operações. No chat, execute:

```
/nova-operacao soma
```

Em seguida:

```
/nova-operacao divisao
```

Observe:

* Consistência do código entre as duas gerações
* Validação de entrada
* Tratamento de divisão por zero

---

# Passo 5: Skill

Antes de criar a skill, vamos gerar o comportamento que ela vai encapsular. O agente abre o browser, usa a calculadora como um usuário real e produz um relatório crítico.

## Primeiro, execute este prompt no chat

```
Teste a calculadora como um usuário exigente. Abra o app, use todas as operações e dê um feedback crítico sobre a experiência.
```

## Depois, salve como skill

Use `/create-skill` — ou simplesmente diga no chat: `salve isso como uma skill de dogfooding`

## Para acionar a skill no futuro

Uma vez salva, use qualquer um destes prompts no chat para invocar o comportamento:


```
faça dogfooding da calculadora
```

---

# Passo 6: Modernização Visual

Antes de criar o agent, vamos melhorar a experiência da calculadora com um ajuste pontual: trocar os nomes das operações por símbolos matemáticos. Isso torna a interface mais intuitiva e próxima de uma calculadora real.

## No chat, cole este prompt

```
Atualize o frontend da calculadora para uma interface moderna inspirada na calculadora do iOS, substituindo o modelo de dois inputs por um fluxo interativo com teclado numérico. 

A interface deve ter um display no topo para entrada e resultado, teclado com dígitos (0–9, decimal e botão de apagar), botões de operações baseados nas rotas existentes, além de "=" para executar e "C" para limpar. 

O usuário deve inserir os valores sequencialmente e selecionar a operação antes do cálculo. Utilize um tema dark, com botões grandes, boa hierarquia visual e feedback de interação, garantindo responsividade.
```

---

# Passo 7: Agent de Code Review

Um agente que lê o código da calculadora, verifica a aderência às instructions e produz um relatório crítico com problemas encontrados e sugestões de melhoria.

O que diferencia este agent de um simples prompt é a autonomia: ele navega por múltiplos arquivos, cruza as regras das instructions com o código real e entrega um parecer estruturado sem precisar de orientação manual.

## No chat, digite

`/create-agent`

## Cole este prompt

```
Crie um agent chamado code-review-calc que revise o código da calculadora e aponte melhorias.

O agent deve:

1. Ler todos os arquivos em src/calculadora/
2. Ler src/services/calcService.js
3. Ler src/routes/calculadora.js
4. Verificar se os padrões definidos nas instructions estão sendo seguidos:
   - Funções puras sem efeitos colaterais
   - Validação de entradas no serviço
   - Sem lógica de negócio nas rotas
   - Tratamento explícito de erros previsíveis
5. Identificar código duplicado, validações ausentes e casos de erro sem cobertura

Ao final, produzir um relatório estruturado com:
- Arquivo analisado
- Problema identificado
- Sugestão de correção
```

## Para acionar o agent no chat, use o seletor de agent e o prompt:

```
revise o código da calculadora
```

---

# Passo 8: Copilot Instructions

Consolida o contexto geral do projeto em um único artefato sempre ativo. É criado por último porque o `/init` analisa o que já existe no repositório e gera as instruções globais com base nisso.

## No chat, digite

`/init`

> O Copilot vai analisar o projeto e propor as instruções globais automaticamente. Revise o resultado e ajuste se necessário.

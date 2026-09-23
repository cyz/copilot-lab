# Lab: Side Chats com `/btw`

**Duração estimada:** 15 minutos

## O que vamos construir

Vamos construir um mini gerador de senhas com interface web e testes automatizados.

Enquanto o agente implementa o projeto, vamos usar `/btw` para fazer perguntas sobre as decisões técnicas sem interromper o trabalho principal. Ao final, vamos transformar uma das respostas do side chat em uma melhoria real nos testes.

## Ambiente do laboratório

Este laboratório deve ser executado no **Agents Window**.

> **Importante:** o `/btw` não está disponível no Chat lateral do VS Code.

### Criar e abrir a pasta do projeto

1. No VS Code, abra o menu **File** e selecione **Open Folder...**.
2. Na janela que abrir, acesse a pasta **Desktop**.
3. Selecione a opção para criar uma nova pasta.
4. Dê à pasta o nome `gerador-senhas-agent`.
5. Selecione a pasta criada e clique em **Open**.
6. No Explorer, confirme que `gerador-senhas-agent` está aberta e vazia.

### Abrir o Agents Window

1. Na barra lateral do VS Code, clique no ícone **Agents**, representado pelo Copilot com um balão de conversa.
2. Uma janela dedicada ao trabalho com agentes será aberta.
3. Inicie uma nova sessão para a pasta `gerador-senhas-agent`.
4. Confirme que a conversa está no **Agents Window**, e não no Chat lateral.

### Mapa dos artefatos

| Artefato | Papel no projeto |
|---|---|
| `index.html` | Estrutura da interface |
| `styles.css` | Tema e layout |
| `app.js` | Interações da interface |
| `src/passwordGenerator.js` | Lógica pura de geração de senhas |
| `tests/passwordGenerator.test.js` | Testes automatizados |
| `package.json` | Scripts do projeto |

---

# Passo 1: Criar o gerador de senhas

## No Agents Window, cole este prompt

```text
Crie neste workspace um mini gerador de senhas usando HTML, CSS e
JavaScript, sem dependências externas.

Estrutura:
- index.html
- styles.css
- app.js
- src/passwordGenerator.js
- tests/passwordGenerator.test.js
- package.json

Requisitos:
- escolher um tamanho entre 8 e 32 caracteres
- opções para letras maiúsculas, números e símbolos
- sempre incluir pelo menos um caractere de cada opção selecionada
- botão para gerar a senha
- botão para copiar a senha
- separar a lógica de geração da interface
- criar testes com o módulo node:test
- adicionar um script npm test

Implemente diretamente nos arquivos, execute os testes e corrija
eventuais falhas.
```

Assim que o agente começar a criar os arquivos, avance para o próximo passo. Não espere o turno terminar.

---

# Passo 2: Fazer uma pergunta com `/btw`

O `/btw` abre um side chat que compartilha o contexto da conversa principal sem adicionar a pergunta ao histórico principal.

## Durante a implementação, digite

```text
/btw Por que a lógica de geração deve ficar separada da interface?
```

Observe:

- A pergunta abre em um side chat.
- O chat principal continua executando a implementação.
- A resposta considera o projeto que está sendo criado.

## Faça uma segunda pergunta

```text
/btw Como os testes garantem que cada tipo de caractere selecionado aparece na senha?
```

<video src="https://code.visualstudio.com/assets/updates/1_132/ask-question.mp4" title="Pergunta contextual aberta em um side chat com /btw." autoplay loop controls muted></video>

> Se `/btw` não aparecer como comando, confirme que você está no Agents Window. Feche o Chat lateral e retorne à janela dedicada de agentes.

---

# Passo 3: Voltar ao trabalho principal

1. Feche ou deixe o side chat em segundo plano.
2. Volte ao chat principal.
3. Aguarde a implementação terminar.
4. No Explorer, confirme que os artefatos do projeto foram criados.
5. Confira o resumo e os resultados dos testes apresentados pelo agente.

## Verificação

No terminal, execute:

```bash
npm test
```

Confirme que todos os testes passam.

---

# Passo 4: Usar a resposta do side chat

Com base na explicação recebida, solicite uma cobertura mais explícita.

## No chat principal, cole este prompt

```text
Adicione um teste que gere uma senha com todas as opções habilitadas e
verifique explicitamente a presença de letra maiúscula, número e símbolo.
Execute novamente os testes.
```

## Verificação

Confirme que:

- O novo teste foi adicionado em `tests/passwordGenerator.test.js`.
- O teste verifica separadamente letra maiúscula, número e símbolo.
- `npm test` continua passando.

---

## Checklist de conclusão

- O mini gerador de senhas foi criado.
- O exercício foi executado no Agents Window.
- O `/btw` abriu um side chat durante o turno principal.
- O trabalho do agente continuou sem ser interrompido.
- A resposta do side chat orientou uma melhoria real.
- Todos os testes passam.

Fonte: [VS Code 1.132 - Side chats with `/btw`](https://code.visualstudio.com/updates/v1_132#_side-chats-with-btw)

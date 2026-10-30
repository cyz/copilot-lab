# Lab: Side Chats com `/btw`

**Duração estimada:** até 15 minutos.

## Pré-requisitos

- VS Code 1.132 ou superior, atualizado, com GitHub Copilot autenticado e acesso ao Agents Window.
- Node.js LTS e npm instalados: confira `node --version` e `npm --version`.
- Permissão para executar ferramentas de terminal. Revise as solicitações antes de aprová-las.

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

1. Abra o **Agents Window** pelo menu de agentes disponível na sua versão do VS Code.
2. Se não encontrar o comando, abra a Command Palette (`Cmd+Shift+P` no macOS ou `Ctrl+Shift+P` no Windows/Linux) e procure por **Agents**.
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
| `server.js` | Servidor HTTP local para testar a interface |

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
- server.js

Requisitos:
- escolher um tamanho entre 8 e 32 caracteres
- incluir letras minúsculas sempre; maiúsculas, números e símbolos são opcionais
- opções para letras maiúsculas, números e símbolos
- sempre incluir pelo menos um caractere de cada opção selecionada
- usar Web Crypto (crypto.getRandomValues), nunca Math.random, com seleção
  sem viés por módulo e embaralhamento seguro
- rejeitar comprimentos fora da faixa ou não inteiros com erro explícito
- botão para gerar a senha
- botão para copiar a senha
- separar a lógica de geração da interface
- criar testes com o módulo node:test
- adicionar um script npm test
- usar módulos ES de forma compatível no navegador e no Node.js
- criar servidor HTTP com recursos nativos do Node.js, escutando somente
  na interface local e servindo apenas index.html, styles.css, app.js e
  src/passwordGenerator.js por uma lista explícita de caminhos permitidos
- adicionar npm start e informar a URL local, sem iniciar servidores duplicados
- exibir confirmação de cópia apenas quando a Clipboard API tiver sucesso;
  exibir mensagem de erro e permitir seleção manual se ela não estiver disponível

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

Se continuar indisponível, atualize o VS Code e confirme as políticas da organização. Perguntas comuns no chat principal não substituem o side chat. Se a implementação terminar rápido demais, use `/btw` durante a próxima tarefa do passo 4, sem enviar uma ordem de cancelamento.

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
Verifique também letras minúsculas, tamanhos 8 e 32, as opções desabilitadas
e erros para 7, 33 e valores não inteiros. Não teste "duas senhas sempre
diferentes", pois uma colisão aleatória é possível. Não substitua Web Crypto
por Math.random para facilitar os testes.
Execute novamente os testes.
```

## Verificação

Confirme que:

- O novo teste foi adicionado em `tests/passwordGenerator.test.js`.
- O teste verifica separadamente letra maiúscula, número e símbolo.
- `npm test` continua passando.

## Passo 5: Validar a interface

Execute `npm start` em um terminal e abra a URL informada. Se o servidor já estiver rodando, reutilize-o.

1. Gere senhas de 8 e 32 caracteres e confira o tamanho.
2. Desabilite as três opções: a senha ainda deve conter letras minúsculas.
3. Habilite todas: confirme minúsculas, maiúsculas, números e símbolos.
4. Clique em copiar e cole em um campo local descartável. Não use senhas reais no exercício.
5. Se o navegador negar acesso à área de transferência, confirme que aparece um erro útil, não uma confirmação falsa.

O teste de categorias confirma o contrato, não comprova sozinho a qualidade criptográfica. Este é um protótipo educativo, não um gerenciador de senhas auditado.

---

## Checklist de conclusão

- O mini gerador de senhas foi criado.
- O exercício foi executado no Agents Window.
- O `/btw` abriu um side chat durante o turno principal.
- O trabalho do agente continuou sem ser interrompido.
- A resposta do side chat orientou uma melhoria real.
- Todos os testes passam.
- A interface foi testada e o botão copiar trata sucesso e falha.

## Encerramento

Pare apenas o servidor deste laboratório com `Ctrl+C` no terminal correspondente. Guarde o projeto para consulta; excluir a pasta é opcional.

Fonte: [VS Code 1.132 - Side chats with `/btw`](https://code.visualstudio.com/updates/v1_132#_side-chats-with-btw)

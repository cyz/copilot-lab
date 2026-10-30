# Lab: Feedback para Agentes no Navegador

**Duração estimada:** até 15 minutos.

## Pré-requisitos

- VS Code 1.132 ou superior, atualizado, com GitHub Copilot autenticado.
- Node.js LTS e npm: confira `node --version` e `npm --version`.
- Ferramentas de terminal e navegador habilitadas conforme a política da organização. Revise as solicitações de execução antes de aprová-las.

## O que vamos construir

Vamos construir uma landing page para uma cafeteria fictícia chamada **Café Aurora**.

Depois que o agente criar a primeira versão, vamos selecionar elementos diretamente no navegador integrado, adicionar comentários específicos e enviar esse contexto visual ao agente para refinar a interface.

## Ambiente do laboratório

Este laboratório usa o Chat em modo **Agent** e o navegador integrado do VS Code.

### Criar e abrir a pasta do projeto

1. No VS Code, abra o menu **File** e selecione **Open Folder...**.
2. Na janela que abrir, acesse a pasta **Desktop**.
3. Selecione a opção para criar uma nova pasta.
4. Dê à pasta o nome `landing-page-agent`.
5. Selecione a pasta criada e clique em **Open**.
6. No Explorer, confirme que `landing-page-agent` está aberta e vazia.

### Onde encontrar os recursos

- **Explorer**: ícone de dois arquivos na barra lateral. Use-o para acompanhar os arquivos criados.
- **Chat**: ícone do GitHub Copilot. Use-o para enviar os prompts ao agente.
- **Browser**: navegador integrado usado pelo agente para abrir e testar a página.

### Mapa dos artefatos

| Artefato | Papel no projeto |
|---|---|
| `index.html` | Estrutura e conteúdo da landing page |
| `styles.css` | Tema e layout responsivo |
| `app.js` | Interações da página |
| `server.js` | Servidor HTTP local |
| `package.json` | Script para iniciar a aplicação |

---

# Passo 1: Criar a landing page

## No chat, cole este prompt

```text
Crie neste workspace uma landing page para uma cafeteria fictícia
chamada Café Aurora.

Estrutura:
- index.html
- styles.css
- app.js
- server.js
- package.json

Requisitos:
- usar HTML, CSS e JavaScript sem bibliotecas externas
- incluir hero, três diferenciais, cardápio resumido e chamada para ação
- usar um tema escuro com tons quentes
- criar layout responsivo
- criar um servidor HTTP simples usando apenas recursos nativos do Node.js
- servir apenas index.html, styles.css e app.js por uma lista explícita
  de caminhos permitidos; escutar somente na interface local
- adicionar um script npm start
- usar links reais para seções existentes, sem simular envio de pedidos
- manter rótulos acessíveis, contraste legível e navegação por teclado
- iniciar a aplicação e abri-la no navegador integrado

Implemente diretamente nos arquivos e informe a URL utilizada.
```

## Verificação

Confirme que:

- Os cinco artefatos aparecem no Explorer.
- O servidor está em execução.
- A landing page está aberta no navegador integrado.
- A página contém hero, diferenciais, cardápio e chamada para ação.

Se o agente não conseguir abrir o navegador, use a Command Palette e procure **Browser** para abrir a URL no navegador integrado. Um navegador externo permite testar o site, mas não substitui a etapa de comentários integrados.

---

# Passo 2: Comentar elementos no navegador

Com o navegador integrado em foco, ative o modo de comentários:

- macOS: `Option+Cmd+C`
- Windows e Linux: `Ctrl+Alt+C`

Você pode selecionar vários elementos e adicionar um comentário a cada um antes de enviar tudo ao Chat.

## Comente o título principal

```text
Torne o título mais curto e mantenha o nome Café Aurora em destaque.
```

## Comente o botão principal

```text
Troque o texto para "Ver cardápio" e faça o botão levar até a seção do cardápio.
```

## Comente a seção de diferenciais

```text
Melhore a leitura em telas pequenas, empilhando os cards e aumentando o espaço entre eles.
```

Depois de adicionar os três comentários, envie-os ao Chat em uma única solicitação.

Antes de enviar, confira se cada comentário inclui o elemento selecionado. Mencionar apenas "o botão" no chat não demonstra o uso de contexto visual.

<video src="https://code.visualstudio.com/assets/updates/1_132/browser-commenting.mp4" title="Comentários em elementos do navegador integrado." autoplay loop controls muted></video>

---

# Passo 3: Implementar o feedback

## No chat, cole este prompt

```text
Implemente os comentários anexados, preserve o restante do design e
teste a página novamente no navegador.
```

Aguarde o agente editar os arquivos e atualizar a aplicação.

---

# Passo 4: Testar a nova versão

## Verificação

No navegador integrado:

1. Confirme que o nome Café Aurora permanece em destaque.
2. Clique em **Ver cardápio** e verifique se a página navega até a seção correta.
3. Reduza a largura do navegador para aproximadamente 375 px.
4. Confirme que os cards ficam empilhados e legíveis, sem rolagem horizontal.
5. Use `Tab` e `Enter` para ativar **Ver cardápio** e confira se o foco permanece visível.
6. Volte à largura de desktop e confirme que o restante do design foi preservado.

Se algum item falhar, descreva o comportamento observado ao agente e peça a correção.

---

## Checklist de conclusão

- A landing page foi criada e iniciada pelo agente.
- A aplicação foi aberta no navegador integrado.
- Três elementos receberam comentários específicos.
- Os comentários foram enviados juntos ao agente.
- O agente implementou o feedback visual.
- O botão e o layout responsivo foram testados.

## Problemas comuns e encerramento

- **Atalho não funciona:** mantenha o foco no navegador integrado e procure a ação de comentários na barra de ferramentas. Confira se a versão instalada possui o recurso.
- **Porta ocupada:** reutilize o servidor deste projeto ou peça outra porta; não encerre servidores desconhecidos.
- **Página não atualiza:** confirme a URL e recarregue após salvar. Peça ao agente para verificar o terminal se houver erro.
- Pare o servidor deste lab com `Ctrl+C` no terminal correspondente. Guarde o projeto ou exclua apenas a pasta criada para este exercício, se desejar.

Fonte: [VS Code 1.132 - Commenting in the integrated browser](https://code.visualstudio.com/updates/v1_132#_commenting-in-the-integrated-browser)

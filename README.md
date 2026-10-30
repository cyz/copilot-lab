# Copilot Quick Labs by @cyz

Laboratórios práticos de GitHub Copilot no VS Code, com site em **português brasileiro, inglês e espanhol**. Os três projetos são independentes; a sequência abaixo oferece uma progressão de aprendizado.

## Exercícios

| Ordem | Projeto e recurso | Duração | Português | English | Español |
| --- | --- | --- | --- | --- | --- |
| 1 | Calculadora: instructions, prompts, skills e revisão | Até 15 min | [Lab](./content/pt-BR/lab-01.md) | [Lab](./content/en/lab-01.md) | [Lab](./content/es/lab-01.md) |
| 2 | Gerador de senhas: side chats com `/btw` | Até 15 min | [Lab](./content/pt-BR/lab-03.md) | [Lab](./content/en/lab-03.md) | [Lab](./content/es/lab-03.md) |
| 3 | Café Aurora: comentários no navegador integrado | Até 15 min | [Lab](./content/pt-BR/lab-02.md) | [Lab](./content/en/lab-02.md) | [Lab](./content/es/lab-02.md) |

Os nomes dos arquivos originais foram preservados dentro de cada idioma. O lab 2 da sequência está em `lab-03.md`; o lab 3 está em `lab-02.md`. Todos os exercícios ficam em `content/<idioma>/`.

## Antes de começar

- Instale Node.js LTS e npm; confira `node --version` e `npm --version`.
- Use VS Code atualizado com GitHub Copilot autenticado e acesso aos recursos do seu plano e da sua organização.
- Side chats e comentários no navegador foram introduzidos no VS Code 1.132. Atualize se os comandos não aparecerem.
- A calculadora usa **Chat, modo Agent, harness Local**. O exercício `/btw` usa o **Agents Window**. São ambientes diferentes.
- Abra uma pasta separada para cada projeto. Leia os prompts antes de enviá-los e revise permissões de ferramentas e alterações geradas.
- Valide os resultados com os exemplos e checklists de cada lab. Uma resposta do agente dizendo "funciona" não substitui testes.
- Ao terminar, pare apenas o servidor do exercício com `Ctrl+C`. Guardar ou excluir a pasta é opcional.

## Executar o site localmente

O site não usa frameworks, CDN, pacotes npm nem serviços externos para traduzir ou renderizar os exercícios. Não precisa de `npm install`. Imagens e vídeos demonstrativos da documentação do VS Code precisam de internet.

```bash
npm test
npm start
```

Abra `http://127.0.0.1:4173`. Para outra porta, use `PORT=4174 npm start` no macOS/Linux ou `$env:PORT=4174; npm start` no PowerShell.

O seletor traduz a interface, as instruções e os prompts. A página inicial mostra os três laboratórios; clicar em um card abre a página de detalhes, por exemplo `lab.html?lang=es&lab=passwords`. O link **Todos os laboratórios** volta para a lista no idioma selecionado. URLs antigas com `#lang=es&lab=passwords` redirecionam para os detalhes.

O progresso dos três labs é compartilhado entre idiomas e fica apenas no navegador, sem conta ou telemetria. Se o armazenamento estiver bloqueado, o site avisa e mantém o progresso somente até recarregar. O botão **Limpar progresso** limpa os três labs.

Há navegação por etapas, botões para copiar cada bloco de código, temas claro/escuro com identidade visual azul, suporte a teclado e layout responsivo. A página inicial destaca a inspiração no workshop de James Montemagno, com link para o projeto original nos três idiomas. Se o navegador negar acesso à área de transferência, o site seleciona o texto e orienta a cópia manual.

## Gerar e publicar no GitHub Pages

```bash
npm run build
```

O resultado fica em `_site/` (ignorado pelo Git). Sirva essa pasta com um servidor HTTP; não abra o HTML diretamente por `file://`, pois o site usa módulos JavaScript.

O workflow de publicação é iniciado manualmente:

1. Envie as alterações para o GitHub quando estiver pronto.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como origem.
3. Em **Actions → Publish labs to GitHub Pages → Run workflow**, selecione a branch com o site e execute.
4. Confira a URL no resultado do job de deploy. No repositório `cyz/copilot-lab`, a URL padrão esperada é `https://cyz.github.io/copilot-lab/`, mas ela só funcionará após uma publicação bem-sucedida e se Pages estiver habilitado.

O workflow testa, gera e publica apenas `_site/`, com caminhos relativos compatíveis com o subdiretório do repositório.

## Atualizar o conteúdo

- Os originais PT-BR estão em [content/pt-BR/](./content/pt-BR/), com a mesma estrutura de [content/en/](./content/en/) e [content/es/](./content/es/).
- As traduções completas estão em [content/en/](./content/en/) e [content/es/](./content/es/). Localize nomes específicos dos exercícios (pastas de projeto, customizações, comandos personalizados e variáveis) e atualize todas as referências no mesmo idioma. Preserve comandos nativos, APIs, extensões de arquivo e caminhos padronizados como `.github/prompts/`.
- Edite os três idiomas juntos. O build lê os Markdown diretamente; não mantenha outra cópia dos exercícios dentro do JavaScript.
- [scripts/build.mjs](./scripts/build.mjs) define ordem, durações e número de etapas; [app.js](./app.js) contém os rótulos da interface.
- [markdown.js](./markdown.js) renderiza o subconjunto utilizado: títulos, parágrafos, listas simples, tabelas, links, imagens, citações, vídeos de demonstração e blocos cercados por três crases. HTML arbitrário não é executado.
- Após editar, rode `npm test` e `npm run build`. Confira também as interações no navegador.

## Referências

O layout foi adaptado de [First Steps with GitHub Copilot](https://github.com/jamesmontemagno/first-steps-with-github-copilot), conforme a referência visual: cabeçalho fixo, hero com prévia do editor, seletor de rota na visão geral, navegação lateral e etapas em uma linha do tempo. Os avisos da licença MIT original estão em [THIRD_PARTY_NOTICES](./THIRD_PARTY_NOTICES) e são incluídos no build.

- [Customizações de agentes](https://code.visualstudio.com/docs/agent-customization/overview)
- [Side chats com /btw](https://code.visualstudio.com/updates/v1_132#_side-chats-with-btw)
- [Comentários no navegador integrado](https://code.visualstudio.com/updates/v1_132#_commenting-in-the-integrated-browser)

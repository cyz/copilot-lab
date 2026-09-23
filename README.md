# Labs de Desenvolvimento com Agentes no VS Code

Este repositório contém três laboratórios práticos para experimentar o GitHub Copilot e recursos de agentes no VS Code.

Cada lab dura aproximadamente 15 minutos e cria um mini projeto funcional. Os exercícios podem ser realizados separadamente.

## Labs disponíveis

| Lab | Projeto | Recurso explorado | Duração |
|---|---|---|---:|
| [Desenvolvimento Agentic com Copilot Chat](./lab-01.md) | Calculadora web | Instructions, implementação autônoma e teste no navegador | 15 min |
| [Side Chats com `/btw`](./lab-02.md) | Gerador de senhas | Perguntas contextuais sem interromper o agente | 15 min |
| [Feedback para Agentes no Navegador](./lab-03.md) | Landing page de uma cafeteria | Comentários em elementos do navegador integrado | 15 min |

## 1. Desenvolvimento Agentic com Copilot Chat

Crie uma calculadora web com HTML, CSS e JavaScript.

Durante o exercício, você vai:

- Criar uma instruction de workspace para orientar o agente.
- Pedir ao agente para implementar a calculadora e seus testes.
- Executar os testes automatizados.
- Validar a aplicação no navegador integrado.

[Abrir o lab](./lab-01.md)

## 2. Side Chats com `/btw`

Crie um gerador de senhas com interface web e testes automatizados.

Enquanto o agente implementa o projeto, você vai usar `/btw` para fazer perguntas sobre arquitetura e testes sem interromper o turno principal. Depois, vai aplicar uma das respostas para melhorar a cobertura de testes.

> Este exercício deve ser realizado no **Agents Window**, onde o comando `/btw` está disponível.

[Abrir o lab](./lab-02.md)

## 3. Feedback para Agentes no Navegador

Crie uma landing page para uma cafeteria fictícia e refine a interface visualmente.

Durante o exercício, você vai:

- Pedir ao agente para criar e iniciar a aplicação.
- Abrir a página no navegador integrado.
- Selecionar elementos específicos da interface.
- Anexar comentários aos elementos selecionados.
- Pedir ao agente para implementar e testar o feedback.

[Abrir o lab](./lab-03.md)

## Como realizar os labs

1. Escolha um dos exercícios na tabela.
2. Abra o arquivo do lab.
3. Crie a pasta indicada no Desktop e abra-a no VS Code.
4. Siga os prompts e as verificações na ordem apresentada.
5. Use o checklist final para confirmar que concluiu o exercício.
6. Depois de explorar o recurso, feche o projeto no VS Code e exclua do Desktop a pasta criada pelo lab.

Para uma introdução gradual, comece pela calculadora, continue com `/btw` e finalize com os comentários no navegador.

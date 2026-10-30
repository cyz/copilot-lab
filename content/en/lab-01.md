# Lab: Agentic Development with Copilot Chat

**Estimated duration:** 15 minutes

## Prerequisites

- An up-to-date version of VS Code, with access to GitHub Copilot and an authenticated session.
- Node.js LTS and npm installed. In the terminal, check `node --version` and `npm --version`.
- Internet access to install Express and Tailwind CSS.
- Permission to run terminal and browser tools. Review each request before approving it; you do not need to approve all tools automatically.

## What we will build

We will build a simple calculator with a Tailwind CSS frontend and a Node.js backend using Express.

The focus is not the calculator itself. The goal is to learn how to structure an agentic development system, where the AI works with context and guardrails that you define.

## Lab environment

This lab uses the GitHub Copilot **Local** harness in VS Code.

### Create and open the project folder

1. In VS Code, open the **File** menu and select **Open Folder...**.
2. In the window that opens, go to the **Desktop** folder.
3. Select the option to create a new folder.
4. Name the folder `calculator-copilot-lab`.
5. Select the folder you created and click **Open**.
6. In the VS Code Explorer, confirm that `calculator-copilot-lab` is open and empty.

During the exercises:

1. Use **Agent** mode.
2. Confirm that terminal and browser tools are available.

> The `/create-instructions`, `/create-prompt`, `/create-agent`, and `/init` commands, as well as prompt files, are used here in the context of the Local harness. They may not be available in other harnesses.

If a creation command does not appear, ask Chat in natural language to create the same file at the specified path. Do not switch to another harness to run this lab's prompt files.

### Where to find the features in VS Code

Use these icons throughout the lab:

- **Explorer**: the two-file icon in the left sidebar. Use it to keep track of files created in the project.
- **Chat**: the GitHub Copilot icon in the sidebar. Use it to open Chat and run the prompts.
- **Configure Chat**: the gear icon in Chat. Use it to open Copilot settings and customizations.

To open the customizations panel:

1. Click the **GitHub Copilot** icon in the sidebar.
2. In Chat, click the **Configure Chat** gear icon.
3. In the customizations editor that opens, use the **Instructions**, **Prompts**, **Skills**, and **Agents** sections to view and manage the lab artifacts.

![VS Code Chat Customizations editor with the Local harness and the Agents, Skills, Instructions, and Prompts categories](https://code.visualstudio.com/assets/docs/agent-customization/customization/create-instructions-file.png)

> The appearance and position of icons may vary slightly between VS Code versions. Look for the same names shown in the image.

> If the gear is not visible, open the Command Palette with `Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows and Linux, search for **Chat: Open Customizations**, and press Enter.

### Artifact map

| Artifact | Role in the system |
|---|---|
| Architecture instruction | Defines the project's stack, structure, and visual style |
| Calculator instruction | Specializes behavior for the calculation domain |
| Local prompt file | Scales code generation consistently |
| Skill | Tests the calculator's real user experience |
| Code review agent | Reviews code and independently identifies improvements |
| Copilot Instructions | Guides the agent on the project as a whole |

---

# Step 1: Architecture Instruction

Establishes the project's stack and structure. Copilot will consider this information whenever it works on any file in the repository.

## Type in Chat

`/create-instructions`

## Paste this prompt

```
Create a workspace instruction named architecture at
.github/instructions/architecture.instructions.md.

Configure the instruction with applyTo: "**" and define the project's
technologies, structure, and coding standards.

Stack:
- JavaScript with Node.js and Express on the backend
- Tailwind CSS on the frontend, with a modern interface inspired by VS Code's dark mode
- Compile Tailwind CSS locally using tooling compatible with the installed version, without relying on a CDN in the browser

Structure:
- src/calculator/ for pure domain functions
- src/services/calcService.js for validation and orchestration
- src/routes/calculator.js for HTTP routes
- public/ for the frontend
- tests/ for automated tests

Coding standards:
- Small functions with a single responsibility
- Clear separation between routes, services, and domain logic
- No business logic directly in routes
- npm scripts to start the application and run tests
```

After saving, confirm that the file appears under **Configure Chat > Instructions**.

To check:

1. In Chat, click the **Configure Chat** gear.
2. In the customizations editor, open **Instructions**.
3. Confirm that `architecture.instructions.md` appears as a workspace instruction.
4. Click the instruction's name and check that the `applyTo` field contains `**`.

---

# Step 2: Calculator Instruction

Specializes Copilot's behavior for the calculation domain. It takes effect whenever Copilot works with calculator files.

## Type in Chat

`/create-instructions`

## Paste this prompt

```
Create a workspace instruction named calculator at
.github/instructions/calculator.instructions.md.

Configure the instruction with applyTo: "src/calculator/**/*.js,src/services/**/*.js" and guide Copilot
when working with code for mathematical operations.

Copilot must always:
- Use pure functions
- Validate numeric inputs before performing operations
- Return an explicit error for division by zero
- Update tests whenever an operation changes
- Avoid side effects and unnecessary logs

Copilot must avoid:
- Functions with multiple responsibilities
- Assuming inputs are valid
- Ignoring error cases
```

After saving, confirm that the file appears under **Configure Chat > Instructions**.

To check:

1. In Chat, click the **Configure Chat** gear.
2. In the customizations editor, open **Instructions**.
3. Confirm that `calculator.instructions.md` appears as a workspace instruction.
4. Click the instruction's name and check that the `applyTo` field contains `src/calculator/**/*.js,src/services/**/*.js`. The domain functions are pure; the service validates and orchestrates calls.

---

# Step 3: Create the Calculator

With the instructions ready, it is time to generate the application skeleton. Copilot will use the context defined in the previous steps to produce code already aligned with the architecture and domain.

## Paste this prompt in Chat

```
Create a basic calculator application that adds and subtracts
two input values.

Follow the structure defined in the workspace instructions:
- src/calculator/
- src/services/calcService.js
- src/routes/calculator.js
- public/
- tests/

Requirements:
- Initialize the Node.js project.
- Set up Express and Tailwind CSS.
- Create npm scripts to start the application and run tests.
- Serve the application at http://localhost:3000.
- Implement automated tests for addition, subtraction, and invalid inputs.
- Define a consistent HTTP contract: requests with an operation and two numbers,
  successful responses with a numeric result, and HTTP 400 with a message for invalid
  input. Reject missing, empty, and non-finite values without converting them to zero.
- Also test HTTP routes and error propagation through to the interface.
- Use node:test for tests and document the request format in the README.
- Create a README with installation, testing, and running instructions.
- Install dependencies, run the tests, and fix any failures.
```

## Verification

In the terminal, run:

```bash
npm test
npm start
```

With the server running, open `http://localhost:3000` and confirm that addition and subtraction work.

Test `2 + 3 = 5`, `2 - 5 = -3`, and `1.5 + 2.25 = 3.75`. An empty field should produce a validation message, not a numeric result. Check the domain and HTTP tests in the terminal.

If the agent has already started the server, reuse it instead of running `npm start` again. If port 3000 is occupied by another project, ask for a free port and use the provided URL in all subsequent steps. Do not stop processes belonging to other projects.

---

# Step 4: Reusable Prompt

## What it is

A parameterized prompt that lets you generate new operations consistently.

## Goal

Scale code creation while maintaining standards and quality.

## Type in Chat

`/create-prompt`

## Paste this prompt

```
Create a workspace prompt file named new-operation at
.github/prompts/new-operation.prompt.md.

Configure the prompt with:
- name: new-operation
- description: Implements and validates a new calculator operation
- argument-hint: Name of the mathematical operation
- agent: agent

The prompt must use the variable ${input:operation_name} and ask Copilot to:

1. Inspect the current structure before editing.
2. Implement the operation in JavaScript as a pure function.
3. Validate numeric inputs.
4. Handle foreseeable errors.
5. Update the route, service, interface, and tests.
6. Run automated tests and fix any failures.
7. Start or reuse the local server.
8. Test the operation in the browser.

At the end, report:
- Operation implemented
- Files changed
- Tests run and results
- Browser validation performed
```

If the installed version does not ask for the input variable, run `/new-operation multiplication` and ask the prompt to use the supplied argument without guessing an operation.

## Check the prompt file

1. In Chat, click the **Configure Chat** gear.
2. In the customizations editor, open **Prompts**.
3. Confirm that `new-operation.prompt.md` appears as a workspace prompt.
4. Open the prompt and check that its name is `new-operation` and the `operation_name` argument is present.

---

## 🧪 Intermediate test

Use the prompt you created to generate two new operations. In Chat, run:

```
/new-operation
```

When prompted, enter `multiplication` for the `operation_name` variable.
Then run it again:

```
/new-operation
```

This time, enter `division`.

Observe:

* Code consistency across the two generations
* Input validation
* Division-by-zero handling

---

# Step 5: Skill

Before creating the skill, we will generate the behavior it will encapsulate. The agent opens the browser, uses the calculator as a real user, and produces a critical assessment.

Before running the prompt, confirm that the application is available at `http://localhost:3000`.

## First, run this prompt in Chat

```
Test the calculator at http://localhost:3000 as a demanding user.

Use the browser tool to:
- Test all available operations
- Check invalid inputs and division by zero
- Assess error states, control clarity, and responsiveness
- Do not change the code during this assessment

At the end, produce a report with evidence, issues found,
severity, and suggestions for improvement.
```

## Then save it as a skill

Use `/create-skill`, or simply say in Chat:

```text
Save this workflow as a workspace skill named
calculator-dogfooding at
.github/skills/calculator-dogfooding/SKILL.md.
```

## Check the skill

1. In Chat, click the **Configure Chat** gear.
2. In the customizations editor, open **Skills**.
3. Confirm that `calculator-dogfooding` appears as a workspace skill.
4. Open the skill and confirm that the `SKILL.md` file describes when it should be used.

## To trigger the skill in the future

Once saved, use this prompt in Chat to invoke the behavior:

```
dogfood the calculator
```

Confirm in the response's **References** section that the skill was loaded.

This section's name may vary between versions. Expand the response's context or tool details and look for the path `.github/skills/calculator-dogfooding/SKILL.md`. A response that merely says it tested the page does not prove that the skill was loaded.

---

# Step 6: Visual Modernization

Before creating the agent, we will replace the form with a calculator keypad. This is an interaction change, not just a label change: it needs new state and input tests.

## Paste this prompt in Chat

```
Update the calculator frontend to a modern interface inspired by the iOS calculator, replacing the two-input model with an interactive numeric keypad workflow.

The interface must have a display at the top for input and results, a keypad with digits (0–9, a decimal separator, and a delete button), operation buttons based on the existing routes, plus "=" to calculate and "C" to clear.

The user must enter values sequentially and select the operation before calculating. Use a dark theme with large buttons, a clear visual hierarchy, and interaction feedback, ensuring responsiveness.

Define and test: only one decimal separator per operand; C clears all
state; delete removes the last digit; = without two operands does not send
an invalid request; division by zero displays an error and allows starting over.
Keep accessible labels and keyboard operation.

Preserve the existing routes, update the necessary tests, run
the automated suite, and validate the result in the browser at
http://localhost:3000.
```

## Verification

Test `12 + 3 = 15`, `C`, `9 - 12 = -3`, `1.5 × 2 = 3`, and `8 ÷ 0`. After the error, use `C` and confirm that `8 ÷ 2 = 4` works. Reduce the width to 375 px and check that the controls remain visible and usable.

---

# Step 7: Code Review Agent

An agent that reads the calculator's code, checks compliance with the instructions, and produces a critical assessment with issues found and suggestions for improvement.

What sets this agent apart from a simple prompt is its autonomy: it navigates multiple files, compares the instruction rules against the actual code, and delivers a structured assessment without manual guidance.

## Type in Chat

`/create-agent`

## Paste this prompt

```
Create a workspace custom agent named code-review-calc at
.github/agents/code-review-calc.agent.md.

The agent must review code without modifying files. Configure only
the reading and search tools available in the tool picker.
Do not enable editing or terminal tools. Ask the user for the output
of npm test as context for the review.

The agent must:

1. Inspect the actual project structure.
2. Read all files in src/calculator/.
3. Read src/services/calcService.js.
4. Read src/routes/calculator.js.
5. Read the related tests.
6. Check that the standards defined in the instructions are being followed:
   - Pure functions without side effects
   - Input validation in the service
   - No business logic in routes
   - Explicit handling of foreseeable errors
7. Identify duplicated code, missing validation, and error cases without test coverage.
8. Analyze the provided test output and record the result, making
   it clear that it did not run the tests itself.

At the end, produce a structured report with:
- File analyzed
- Related line or symbol
- Issue identified
- Severity
- Suggested fix
```

Before selecting the agent, run `npm test` in the terminal and attach the output to the conversation. Tool restrictions make the review read-only; a text instruction saying "do not edit" alone does not prevent terminal commands that write files.

## Check the custom agent

1. In Chat, click the **Configure Chat** gear.
2. In the customizations editor, open **Agents**.
3. Confirm that `code-review-calc` appears as a workspace agent.
4. Return to Chat, open the agent picker in the message box, and select `code-review-calc`.

## To invoke the agent in Chat, use the agent picker and this prompt:

```
review the calculator's code
```

---

# Step 8: Copilot Instructions

Generates general project instructions based on what already exists in the repository. This runs last so that `/init` can analyze the application, tests, and customizations created during the lab.

## Type in Chat

`/init`

> In the Local harness, Copilot will analyze the project and automatically propose project-wide instructions in `.github/copilot-instructions.md`.

If `/init` is unavailable, ask Chat to analyze the project and create `.github/copilot-instructions.md` with the commands that actually exist, without installing dependencies or modifying the application.

Review the generated file:

1. Click the **Explorer** icon in the left sidebar.
2. Expand the `.github` folder.
3. Open `copilot-instructions.md`.
4. Confirm that the installation, testing, and running commands are correct.
5. Compare the rules with the architecture and calculator instructions.
6. Remove duplication and resolve any contradictions.
7. Run a small task in a new chat.
8. Open **References** in the response and confirm that the expected instructions were used.

## Completion checklist

At the end of the lab, confirm that:

- Both instructions appear under **Configure Chat > Instructions**.
- Addition, subtraction, multiplication, and division have automated tests.
- The `/new-operation` prompt works in the Local harness.
- The dogfooding skill loads automatically.
- The custom agent appears in the agent picker and does not modify files.
- `npm test` passes.
- The calculator works at `http://localhost:3000`.

## Common issues and wrap-up

- **Instruction not applied:** confirm the Local harness, path, and YAML frontmatter. Open a file matching `applyTo` and check the response's context.
- **Tailwind styles missing:** ask the agent to check the local build and the path of the CSS served by Express.
- **Browser unavailable:** open the URL manually in the integrated browser through the Command Palette. If organizational policy blocks the tool, check manually and record this limitation.
- When finished, stop only this lab's server with `Ctrl+C` in its terminal. Keep the project if you want to reuse the customizations; deleting the folder is optional.

Sources: [Customizations](https://code.visualstudio.com/docs/agent-customization/overview), [prompt files](https://code.visualstudio.com/docs/agent-customization/prompt-files), and [skills](https://code.visualstudio.com/docs/agent-customization/agent-skills).

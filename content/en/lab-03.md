# Lab: Side Chats with `/btw`

**Estimated duration:** 15 minutes

## Prerequisites

- An up-to-date version of VS Code, version 1.132 or later, with GitHub Copilot authenticated and access to the Agents Window.
- Node.js LTS and npm installed: check `node --version` and `npm --version`.
- Permission to run terminal tools. Review requests before approving them.

## What we will build

We will build a small password generator with a web interface and automated tests.

While the agent implements the project, we will use `/btw` to ask questions about technical decisions without interrupting the main task. At the end, we will turn one of the side chat answers into a real improvement to the tests.

## Lab environment

This lab must be completed in the **Agents Window**.

> **Important:** `/btw` is not available in VS Code's Chat sidebar.

### Create and open the project folder

1. In VS Code, open the **File** menu and select **Open Folder...**.
2. In the window that opens, go to the **Desktop** folder.
3. Select the option to create a new folder.
4. Name the folder `password-generator-agent`.
5. Select the folder you created and click **Open**.
6. In the Explorer, confirm that `password-generator-agent` is open and empty.

### Open the Agents Window

1. Open the **Agents Window** from the agents menu available in your version of VS Code.
2. If you cannot find the command, open the Command Palette (`Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows/Linux) and search for **Agents**.
3. Start a new session for the `password-generator-agent` folder.
4. Confirm that the conversation is in the **Agents Window**, not the Chat sidebar.

### Artifact map

| Artifact | Role in the project |
|---|---|
| `index.html` | Interface structure |
| `styles.css` | Theme and layout |
| `app.js` | Interface interactions |
| `src/passwordGenerator.js` | Pure password generation logic |
| `tests/passwordGenerator.test.js` | Automated tests |
| `package.json` | Project scripts |
| `server.js` | Local HTTP server for testing the interface |

---

# Step 1: Create the Password Generator

## Paste this prompt in the Agents Window

```text
Create a small password generator in this workspace using HTML, CSS, and
JavaScript, without external dependencies.

Structure:
- index.html
- styles.css
- app.js
- src/passwordGenerator.js
- tests/passwordGenerator.test.js
- package.json
- server.js

Requirements:
- choose a length between 8 and 32 characters
- always include lowercase letters; uppercase letters, numbers, and symbols are optional
- provide options for uppercase letters, numbers, and symbols
- always include at least one character from each selected option
- use Web Crypto (crypto.getRandomValues), never Math.random, with selection
  free of modulo bias and secure shuffling
- reject out-of-range or non-integer lengths with an explicit error
- a button to generate the password
- a button to copy the password
- separate generation logic from the interface
- create tests with the node:test module
- add an npm test script
- use ES modules compatible with both the browser and Node.js
- create an HTTP server with native Node.js features that serves only the
  allowlisted application files index.html, styles.css, app.js, and
  src/passwordGenerator.js; never serve arbitrary files or expose any other files;
  listen only on the local interface
- add npm start and report the local URL, without starting duplicate servers
- show copy confirmation only when the Clipboard API succeeds;
  show an error message and allow manual selection if it is unavailable

Implement directly in the files, run the tests, and fix
any failures.
```

As soon as the agent starts creating files, move on to the next step. Do not wait for the turn to finish.

---

# Step 2: Ask a Question with `/btw`

`/btw` opens a side chat that shares the main conversation's context without adding the question to the main history.

## During implementation, type

```text
/btw Why should generation logic be kept separate from the interface?
```

Observe:

- The question opens in a side chat.
- The main chat continues implementing the project.
- The answer takes the project being created into account.

## Ask a second question

```text
/btw How do the tests ensure that each selected character type appears in the password?
```

<video src="https://code.visualstudio.com/assets/updates/1_132/ask-question.mp4" title="A contextual question opened in a side chat with /btw." autoplay loop controls muted></video>

> If `/btw` does not appear as a command, confirm that you are in the Agents Window. Close the Chat sidebar and return to the dedicated agents window.

If it remains unavailable, update VS Code and check your organization's policies. Regular questions in the main chat do not replace the side chat. If implementation finishes too quickly, use `/btw` during the next task in step 4, without sending a cancellation request.

---

# Step 3: Return to the Main Task

1. Close the side chat or leave it in the background.
2. Return to the main chat.
3. Wait for implementation to finish.
4. In the Explorer, confirm that the project artifacts were created.
5. Check the summary and test results presented by the agent.

## Verification

In the terminal, run:

```bash
npm test
```

Confirm that all tests pass.

---

# Step 4: Use the Side Chat Answer

Based on the explanation you received, request more explicit coverage.

## Paste this prompt in the main chat

```text
Add a test that generates a password with all options enabled and
explicitly checks for an uppercase letter, a number, and a symbol.
Also check lowercase letters, lengths 8 and 32, disabled options,
and errors for 7, 33, and non-integer values. Do not test that "two passwords
are always different," because a random collision is possible. Do not replace Web Crypto
with Math.random to make testing easier.
Run the tests again.
```

## Verification

Confirm that:

- The new test was added to `tests/passwordGenerator.test.js`.
- The test checks separately for an uppercase letter, a number, and a symbol.
- `npm test` still passes.

## Step 5: Validate the Interface

Run `npm start` in a terminal and open the provided URL. If the server is already running, reuse it.

1. Generate passwords of 8 and 32 characters and check their length.
2. Disable all three options: the password must still contain lowercase letters.
3. Enable all options: confirm lowercase letters, uppercase letters, numbers, and symbols.
4. Click copy and paste into a disposable local field. Do not use real passwords in this exercise.
5. If the browser denies clipboard access, confirm that a helpful error appears, not a false confirmation.

The character-category test verifies the contract; it does not, on its own, prove cryptographic quality. This is an educational prototype, not an audited password manager.

---

## Completion checklist

- The small password generator was created.
- The exercise was completed in the Agents Window.
- `/btw` opened a side chat during the main turn.
- The agent's work continued without interruption.
- The side chat answer guided a real improvement.
- All tests pass.
- The interface was tested and the copy button handles both success and failure.

## Wrap-up

Stop only this lab's server with `Ctrl+C` in its terminal. Keep the project for reference; deleting the folder is optional.

Source: [VS Code 1.132 - Side chats with `/btw`](https://code.visualstudio.com/updates/v1_132#_side-chats-with-btw)

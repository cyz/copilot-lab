# Lab: Browser Feedback for Agents

**Estimated duration:** 15 minutes

## Prerequisites

- An up-to-date version of VS Code, version 1.132 or later, with GitHub Copilot authenticated.
- Node.js LTS and npm: check `node --version` and `npm --version`.
- Terminal and browser tools enabled according to your organization's policy. Review execution requests before approving them.

## What we will build

We will build a landing page for a fictional coffee shop called **Café Aurora**.

After the agent creates the first version, we will select elements directly in the integrated browser, add specific comments, and send that visual context to the agent to refine the interface.

## Lab environment

This lab uses Chat in **Agent** mode and VS Code's integrated browser.

### Create and open the project folder

1. In VS Code, open the **File** menu and select **Open Folder...**.
2. In the window that opens, go to the **Desktop** folder.
3. Select the option to create a new folder.
4. Name the folder `landing-page-agent`.
5. Select the folder you created and click **Open**.
6. In the Explorer, confirm that `landing-page-agent` is open and empty.

### Where to find the features

- **Explorer**: the two-file icon in the sidebar. Use it to keep track of the files created.
- **Chat**: the GitHub Copilot icon. Use it to send prompts to the agent.
- **Browser**: the integrated browser the agent uses to open and test the page.

### Artifact map

| Artifact | Role in the project |
|---|---|
| `index.html` | Landing page structure and content |
| `styles.css` | Theme and responsive layout |
| `app.js` | Page interactions |
| `server.js` | Local HTTP server |
| `package.json` | Script to start the application |

---

# Step 1: Create the Landing Page

## Paste this prompt in Chat

```text
Create a landing page in this workspace for a fictional coffee shop
called Café Aurora.

Structure:
- index.html
- styles.css
- app.js
- server.js
- package.json

Requirements:
- use HTML, CSS, and JavaScript without external libraries
- include a hero section, three selling points, a short menu, and a call to action
- use a dark theme with warm tones
- create a responsive layout
- create a simple HTTP server using only native Node.js features
- serve only the allowlisted application files index.html, styles.css, and app.js;
  never serve arbitrary files or allow access to other paths; listen only on the local interface
- add an npm start script
- use real links to existing sections, without simulating order submission
- keep accessible labels, readable contrast, and keyboard navigation
- start the application and open it in the integrated browser

Implement directly in the files and report the URL used.
```

## Verification

Confirm that:

- The five artifacts appear in the Explorer.
- The server is running.
- The landing page is open in the integrated browser.
- The page contains a hero section, selling points, a menu, and a call to action.

If the agent cannot open the browser, use the Command Palette and search for **Browser** to open the URL in the integrated browser. An external browser lets you test the site, but does not replace the integrated commenting step.

---

# Step 2: Comment on Elements in the Browser

With the integrated browser focused, activate commenting mode:

- macOS: `Option+Cmd+C`
- Windows and Linux: `Ctrl+Alt+C`

You can select several elements and add a comment to each before sending everything to Chat.

## Comment on the main heading

```text
Make the heading shorter and keep the name Café Aurora prominent.
```

## Comment on the main button

```text
Change the text to "View menu" and make the button navigate to the menu section.
```

## Comment on the selling points section

```text
Improve readability on small screens by stacking the cards and increasing the space between them.
```

After adding all three comments, send them to Chat in a single request.

Before sending, check that each comment includes the selected element. Merely mentioning "the button" in Chat does not demonstrate the use of visual context.

<video src="https://code.visualstudio.com/assets/updates/1_132/browser-commenting.mp4" title="Comments on elements in the integrated browser." autoplay loop controls muted></video>

---

# Step 3: Implement the Feedback

## Paste this prompt in Chat

```text
Implement the attached comments, preserve the rest of the design, and
test the page again in the browser.
```

Wait for the agent to edit the files and update the application.

---

# Step 4: Test the New Version

## Verification

In the integrated browser:

1. Confirm that the name Café Aurora remains prominent.
2. Click **View menu** and check that the page navigates to the correct section.
3. Reduce the browser width to approximately 375 px.
4. Confirm that the cards are stacked and readable, with no horizontal scrolling.
5. Use `Tab` and `Enter` to activate **View menu** and check that focus remains visible.
6. Return to desktop width and confirm that the rest of the design has been preserved.

If any item fails, describe the observed behavior to the agent and ask for a fix.

---

## Completion checklist

- The landing page was created and started by the agent.
- The application was opened in the integrated browser.
- Three elements received specific comments.
- The comments were sent together to the agent.
- The agent implemented the visual feedback.
- The button and responsive layout were tested.

## Common issues and wrap-up

- **Shortcut does not work:** keep focus in the integrated browser and look for the commenting action in the toolbar. Check that the installed version includes the feature.
- **Port occupied:** reuse this project's server or ask for another port; do not stop unknown servers.
- **Page does not update:** confirm the URL and reload after saving. Ask the agent to check the terminal if there is an error.
- Stop this lab's server with `Ctrl+C` in its terminal. Keep the project, or delete only the folder created for this exercise if you wish.

Source: [VS Code 1.132 - Commenting in the integrated browser](https://code.visualstudio.com/updates/v1_132#_commenting-in-the-integrated-browser)

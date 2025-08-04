const codeEditor = document.getElementById("code-editor");
const languageSelect = document.getElementById("language-select");
const outputConsole = document.getElementById("output-console");
const compileBtn = document.getElementById("compile-btn");
const clearBtn = document.getElementById("clear-output");

const examples = {
  python: 'print("Hello World")',
  javascript: 'console.log("Hello World");',
  c: '#include <stdio.h>\n\nint main() {\n    printf("Hello World\\n");\n    return 0;\n}',
  cpp: '#include <iostream>\n\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}',
  java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}',
};

codeEditor.value = examples.python;

languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  if (confirm("Load example code for " + lang + "?")) {
    codeEditor.value = examples[lang];
  }
});

clearBtn.addEventListener("click", () => {
  outputConsole.textContent = "Click 'Run Code' to see output here...";
});

compileBtn.addEventListener("click", async () => {
  const code = codeEditor.value;
  const language = languageSelect.value;

  if (!code.trim()) {
    outputConsole.textContent = "Error: Please write some code first!";
    return;
  }

  compileBtn.textContent = "Running...";
  compileBtn.disabled = true;
  outputConsole.textContent = "Compiling...";

  try {
    const response = await fetch("https://codequotient.com/api/executeCode", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "/",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        langId: language,
      }),
    });

    const data = await response.json();

    if (data.run && data.run.output) {
      outputConsole.textContent = "Output:\n" + data.run.output;
    } else if (data.run && data.run.stderr) {
      outputConsole.textContent = "Error:\n" + data.run.stderr;
    } else if (data.output) {
      outputConsole.textContent = "Output:\n" + data.output;
    } else if (data.error) {
      outputConsole.textContent = "Error:\n" + data.error;
    } else {
      outputConsole.textContent = "No output received.";
    }
  } catch (error) {
    outputConsole.textContent = "Error: " + error.message;
  }

  compileBtn.textContent = "Run Code";
  compileBtn.disabled = false;
});

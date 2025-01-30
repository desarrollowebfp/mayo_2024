const { ipcRenderer } = require("electron");

document.addEventListener("DOMContentLoaded", async () => {
    const titleInput = document.getElementById("snippet-title");
    const languageSelect = document.getElementById("snippet-language");
    const contentInput = document.getElementById("snippet-content");
    const saveButton = document.getElementById("save-snippet");
    const snippetsList = document.getElementById("snippets-list");

    // Función para cargar los snippets guardados
    async function loadSnippets() {
        const snippets = await ipcRenderer.invoke("get-snippets");
        snippetsList.innerHTML = snippets.map(snippet => `
            <div>
                <h3>${snippet.title} (${snippet.language})</h3>
                <pre>${snippet.content}</pre>
            </div>
        `).join("");
    }

    // Guardar un snippet nuevo
    saveButton.addEventListener("click", () => {
        const snippet = {
            title: titleInput.value,
            language: languageSelect.value,
            content: contentInput.value,
        };
        
        ipcRenderer.send("save-snippet", snippet);
        titleInput.value = "";
        contentInput.value = "";
        loadSnippets();
    });

    // Cargar snippets al inicio
    loadSnippets();
});

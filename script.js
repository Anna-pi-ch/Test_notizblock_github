function addTodo() {
    let input = document.getElementById('todoField');
    let list = document.getElementById('todoList');

    if (input.value.trim() === "") return; // Leere Eingabe verhindern

    // Notiz hinzufügen + Löschen-Button
    list.innerHTML += `
    <li>
        ${input.value} 
        <button onclick="this.parentElement.remove()">🗑️</button>
    </li>`;

    input.value = ""; // Eingabefeld leeren
}

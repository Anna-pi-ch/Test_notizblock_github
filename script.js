function addTodo() {
    let input = document.getElementById('todoField');
    let list = document.getElementById('todoList');

    if (input.value.trim() === "") return; // Leere Eingabe verhindern

    list.innerHTML += `<li>${input.value}</li>`; // Text speichern/anzeigen

    input.value = ""; // Eingabefeld leeren
}
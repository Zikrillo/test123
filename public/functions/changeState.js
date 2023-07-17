export default class Functions {
    _createPromt() {
        const name = prompt("Write down your name");
        const age = Number.parseInt(prompt("Write down your age")) || 0;
        const height = Number.parseInt(prompt("Write down your height")) || 0;
        return { name, age, height };
    }
    createPerson(container) {
        const newPerson = this._createPromt();
        const state = JSON.parse(localStorage.getItem("dataArray") || "[]");
        localStorage.setItem("dataArray", JSON.stringify([...state, newPerson]));
        this.refresh(JSON.parse(localStorage.getItem("dataArray") || "[]"), container);
    }
    refresh(state, container) {
        container.innerHTML = "";
        state.forEach(element => {
            const paragraph = document.createElement("div");
            paragraph.innerText = "Name: " + element.name + " height: " + element.height + " age: " + element.age;
            container.appendChild(paragraph);
        });
    }
    editPerson() { }
}

function carica() {
    const schema = [
        {
            type: "text",
            label: "Nome"
        },
        {
            type: "select",
            label: "Nome",
            options: ["Mario", "Giovanni", "Paolo"]
        },
        {
            type: "checkbox",
            label: "Nome",
            options: ["Francesco", "Michele", "Lorenzo"]
        },
        {
            type: "radio",
            label: "Nome",
            options: ["Mario", "Giovanni", "Paolo"]
        },
        {
            type: "textarea",
            label: "Nome"
        }
    ];

    const body = document.getElementsByTagName("body")[0];
    const form = document.createElement("form");

    schema.forEach(oggetto => {

        if (oggetto.type === "text" || oggetto.type === "textarea") {
            const input = document.createElement(oggetto.type === "textarea" ? "textarea" : "input");
            input.type = oggetto.type;
            input.placeholder = oggetto.label;
            form.appendChild(input);
        } else if (oggetto.type === "select") {
            const select = document.createElement("select");
            const defaultOption = document.createElement("option");
            select.appendChild(defaultOption);

            oggetto.options.forEach(opzioni => {
                const opzione = document.createElement("option");
                opzione.value = opzioni;
                opzione.text = opzioni;
                select.appendChild(opzione);
            });

            form.appendChild(select);
        } else if (oggetto.type === "checkbox" || oggetto.type === "radio") {
            oggetto.options.forEach(opzioni => {
                const opzion = document.createElement("label");
                opzion.textContent = opzioni;
                const input = document.createElement("input");
                input.type = oggetto.type;
                input.name = oggetto.name;
                input.value = opzioni;
                opzion.appendChild(input);
                form.appendChild(opzion);
            });
        }

        
    });

    const bottone = document.createElement("button");
    bottone.textContent = "Invia";
    form.appendChild(bottone);

    body.appendChild(form);
}

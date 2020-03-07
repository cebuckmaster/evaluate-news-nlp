function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    console.log('in checkforname');
    if(names.includes(inputText)) {
        alert("Welcome, Captain!");
    }
}

export { checkForName }

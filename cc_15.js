// Task 1: Creating the Base Structure
const riskSelector = document.getElementById("riskContainer");
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically

function addRiskItem(riskName, riskLevel, department) {
    const newCard = document.createElement("div"); // Creating a new div
    newCard.setAttribute("class", "riskCard"); // setting the div class to riskCard

// Setting the text for individual elements of the card (name, level, department) in case future editing is needed 

    const name = document.createElement("h3");
    name.textContent = `Risk Name: ${riskName}`;
    newCard.appendChild(name); // appending changes to newCard

    const level = document.createElement("p");
    level.textContent = `Risk Level: ${riskLevel}`;
    newCard.appendChild(level);

    const dep = document.createElement("p");
    dep.textContent = `Department: ${department}`;
    newCard.appendChild(dep);

// Task 3: Removing Risk Items

const resolveButton = document.createElement("button");
resolveButton.textContent = `Resolve`;
newCard.appendChild(resolveButton);

// On clicking the resolve button we will remove the risk card associated with it from the riskContainer div

resolveButton.addEventListener("click", function() {
    riskSelector.removeChild(newCard);
});

// Task 4: Categorizing Risks by Level

// Applying some basic styling to make it look more appealing (idk if i lose points for unnecessary code)
newCard.style.padding = `10px`;
newCard.style.margin = '10px';
newCard.style.borderRadius = '5px';
newCard.style.display ='inline-block'; // Taken from previous coding challenges 

// Applying color to the card based on riskLevel

if (riskLevel === "Low") {
    newCard.style.backgroundColor = 'lightgreen';
}
else if (riskLevel === "Medium") {
    newCard.style.backgroundColor = 'yellow';
}
else if (riskLevel === "High") {
    newCard.style.backgroundColor = 'red';
}
else {
    newCard.style.backgroundColor = 'gray';
}

// appending newCard with all its changes to riskSelector
    riskSelector.appendChild(newCard);
};

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

const submitButton = document.getElementById("buttonId"); // links the submit button to javascript

submitButton.addEventListener("click", function() {
    
// Creating variables that represent the values inside the input forms, and passing them to addRiskItem as parameters

    const riskNameSelector = document.getElementById("riskName1").value; // Took me forever to realize i needed .value
    const riskLevelSelector = document.getElementById("riskLevel1").value;
    const departmentNameSelector = document.getElementById("departmentName").value;

    addRiskItem(riskNameSelector, riskLevelSelector, departmentNameSelector);
});

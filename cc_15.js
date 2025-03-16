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

    riskSelector.appendChild(newCard); // appending newCard with all its changes to riskSelector
};

addRiskItem("Bad Ads", "Low", "Advertising");

const submitButton = document.getElementById("buttonId"); // links the submit button to javascript

submitButton.addEventListener("click", function() {
    
// Creating variables that represent the values inside the input forms, and passing them to addRiskItem as parameters

    const riskNameSelector = document.getElementById("riskName1").value; // Took me forever to realize i needed .value
    const riskLevelSelector = document.getElementById("riskLevel1").value;
    const departmentNameSelector = document.getElementById("departmentName").value;

    addRiskItem(riskNameSelector, riskLevelSelector, departmentNameSelector);
});
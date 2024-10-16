function calculateProteinInfo(name, totalCost, totalServings, proteinPerServing, requiredProtein) {
  const totalProtein = totalServings * proteinPerServing;
  const costPerGramProtein = totalCost / totalProtein;
  const servingsForRequiredProtein = requiredProtein / proteinPerServing;
  const costForRequiredProtein = (totalCost / totalServings) * servingsForRequiredProtein;

  return {
    name: name,
    costPerGramProtein: Number(costPerGramProtein.toFixed(4)),
    costPerServing: Number((totalCost / totalServings).toFixed(2)),
    proteinPerServing: proteinPerServing,
    servingsForRequiredProtein: Number(servingsForRequiredProtein.toFixed(2)),
    costForRequiredProtein: Number(costForRequiredProtein.toFixed(2)),
  };
}

function calculateAndDisplay() {
  const name = document.getElementById('name').value.trim();
  const totalCost = parseFloat(document.getElementById('totalCost').value);
  const totalServings = document.getElementById('totalServings').value.trim();
  const proteinPerServing = document.getElementById('proteinPerServing').value.trim();
  const requiredProtein = document.getElementById('requiredProtein').value.trim();

  const resultsDiv = document.getElementById('results');

  // Check if all fields are filled
  if (!name || !totalCost || !totalServings || !proteinPerServing || !requiredProtein) {
    resultsDiv.innerHTML = '<p class="text-red-500 text-center">Please fill in all fields.</p>';
    return;
  }

  // Convert string values to numbers and check if they're valid
  const numTotalCost = parseFloat(totalCost);
  const numTotalServings = parseFloat(totalServings);
  const numProteinPerServing = parseFloat(proteinPerServing);
  const numRequiredProtein = parseFloat(requiredProtein);

  if (
    isNaN(numTotalCost) ||
    isNaN(numTotalServings) ||
    isNaN(numProteinPerServing) ||
    isNaN(numRequiredProtein)
  ) {
    resultsDiv.innerHTML =
      '<p class="text-red-500 text-center">Please enter valid numbers for all numeric fields.</p>';
    return;
  }

  // Check if numeric values are positive
  if (
    numTotalCost <= 0 ||
    numTotalServings <= 0 ||
    numProteinPerServing <= 0 ||
    numRequiredProtein <= 0
  ) {
    resultsDiv.innerHTML =
      '<p class="text-red-500 text-center">Please enter positive numbers for all numeric fields.</p>';
    return;
  }

  const result = calculateProteinInfo(
    name,
    totalCost,
    totalServings,
    proteinPerServing,
    requiredProtein
  );

  resultsDiv.innerHTML = `
          <h2 class="text-xl font-bold mb-2">Results for ${result.name}:</h2>
          <p>Cost per gram of protein: $${result.costPerGramProtein}</p>
          <p>Cost per serving: $${result.costPerServing}</p>
          <p>Protein per serving: ${result.proteinPerServing}g</p>
          <p>Servings needed for ${requiredProtein}g of protein: ${result.servingsForRequiredProtein}</p>
          <p>Cost for ${requiredProtein}g of protein: $${result.costForRequiredProtein}</p>
      `;
}

// Add this function to your JavaScript
function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  calculateAndDisplay();
}

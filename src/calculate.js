function calculateProteinInfo(name, totalCost, totalServings, proteinPerServing, requiredProtein) {
  const totalProtein = totalServings * proteinPerServing;
  const costPerGramProtein = totalCost / totalProtein;
  const servingsForRequiredProtein = requiredProtein / proteinPerServing;
  const costForRequiredProtein = (totalCost / totalServings) * servingsForRequiredProtein;
  const daysSupply = Math.floor(totalProtein / requiredProtein);

  return {
    name: name,
    costPerGramProtein: Number(costPerGramProtein.toFixed(4)),
    costPerServing: Number((totalCost / totalServings).toFixed(2)),
    proteinPerServing: proteinPerServing,
    servingsForRequiredProtein: Number(servingsForRequiredProtein.toFixed(2)),
    costForRequiredProtein: Number(costForRequiredProtein.toFixed(2)),
    daysSupply: daysSupply,
  };
}

function calculateAndDisplay() {
  const name = document.getElementById('name').value.trim();
  const totalCost = parseFloat(document.getElementById('totalCost').value);
  const totalServings = document.getElementById('totalServings').value.trim();
  const proteinPerServing = document.getElementById('proteinPerServing').value.trim();
  const requiredProtein = document.getElementById('requiredProtein').value.trim();

  // const resultsDiv = document.getElementById('results');
  const resultsDiv = document.getElementById('modalContent');

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
          <div class="mt-4 bg-blue-100 p-4 rounded-md">
              <p class="font-medium">Duration Analysis:</p>
              <p>This container will provide ${result.daysSupply} servings of ${requiredProtein}g protein</p>
          </div>
      `;
  showModal();
}

// Add this function to your JavaScript
function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  calculateAndDisplay();
}

function showModal() {
  const modalBackdrop = document.getElementById('modalBackdrop');
  modalBackdrop.classList.remove('hidden');
  modalBackdrop.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  const modalBackdrop = document.getElementById('modalBackdrop');
  modalBackdrop.classList.add('hidden');
  modalBackdrop.classList.remove('flex');
  document.body.style.overflow = '';

  document.getElementById('proteinForm').reset();
}

// Add these event listeners at the bottom of your file
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('closeModal').addEventListener('click', hideModal);

  document.getElementById('modalBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalBackdrop')) {
      hideModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideModal();
    }
  });
});

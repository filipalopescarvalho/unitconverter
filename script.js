function convert() {
    const inputValue = parseFloat(document.getElementById("userInput").value);
    const unit = document.getElementById('unit').value;
    let result = 0;
  
    if (isNaN(inputValue) || inputValue < 0) {
      alert("Please enter a valid positive number.");
      return;
    }
  
    if (unit === 'milesToKm') {
      result = (inputValue * 1.60934).toFixed(2);
      document.getElementById('resultElement').innerText = `${inputValue} miles are ${result} kilometers`;
    } else if (unit === 'kmToMiles') {
      result = (inputValue / 1.60934).toFixed(2);
      document.getElementById('resultElement').innerText = `${inputValue} kilometers are ${result} miles`;
    } else if (unit === 'kgToPounds') {
      result = (inputValue * 2.20462).toFixed(2);
      document.getElementById('resultElement').innerText = `${inputValue} kilograms are ${result} pounds`;
    } else if (unit === 'poundsToKg') {
      result = (inputValue / 2.20462).toFixed(2);
      document.getElementById('resultElement').innerText = `${inputValue} pounds are ${result} kilograms`;
    }
  
    const resultContainer = document.querySelector('.result-container');
    resultContainer.classList.add('highlight');
    setTimeout(() => {
      resultContainer.classList.remove('highlight');
    }, 300); 
  
    updateHistory(inputValue, unit, result);
  }
  
  function clearInput() {
    document.getElementById('userInput').value = '';
    document.getElementById('resultElement').innerText = '0';
  }
  
  function updateHistory(input, unit, result) {
    const historyList = document.getElementById('history');
    const newItem = document.createElement('li');
    if (unit === 'milesToKm') {
      newItem.innerText = `${input} miles = ${result} km`;
    } else if (unit === 'kmToMiles') {
      newItem.innerText = `${input} kilometers = ${result} miles`;
    } else if (unit === 'kgToPounds') {
      newItem.innerText = `${input} kilograms = ${result} pounds`;
    } else if (unit === 'poundsToKg') {
      newItem.innerText = `${input} pounds = ${result} kilograms`;
    }
    historyList.appendChild(newItem);
  }
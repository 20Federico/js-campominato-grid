

//recupera l'elemento in cui dovrai creare le celle
const campoContainer = document.querySelector('.campo_container');
// recupera l'elemento select
const selectLevel = document.querySelector('nav select');
// recupera l'elemento bottone
const btnPlay = document.querySelector('nav button');

// eventListener al click del bottone che visalizza il valore della select
btnPlay.addEventListener('click', 
function() {
  
  //reupera il valore che indica il livello del gioco dalla select
  const level = selectLevel.value;

  const cellsNumber = getCellNumber(level);

  toCreateCells(cellsNumber);

});

//funzione che in base al livello trova il numero di celle da stampare
function getCellNumber(level) {

  let result

  switch(level) {
    case 'facile':
      result = 49;
      break;
    case 'medio':
      result = 81;
      break;
    case 'difficile':
      result = 100;
      break;
  }

  return result
};

//funzione che determina il ciclo per creare le celle
function toCreateCells(cellsNumber)  {

  campoContainer.innerHTML = '';

  const cellSize = 100 / Math.sqrt(cellsNumber);

  for (let i = 0; i < cellsNumber; i++) {
    
    const newCell = document.createElement('div');
    campoContainer.append(newCell);
    newCell.classList.add('box');
    newCell.style.width = cellSize + '%';
    newCell.style.height = cellSize + '%';
    newCell.textContent = i + 1;
    newCell.addEventListener('click', newCellActive)
  }
};

//event listener al click di una cella per cambiare il colore di background 
function newCellActive () {
  this.style.backgroundColor = '#6495ED';
  this.style.color = 'white';
}
// Display painting info in the DOM
export const displayPaintingInfo = (info) => {
    const infoElement = document.getElementById('info-dipinto'); // Get the reference
    // Add the 'show' class
  
    // Set the html content inside info element
if(infoElement.className === "show"){
  return
}
infoElement.classList.remove('animation-hide-class'); 
    infoElement.innerHTML = `
    <div class = "info-content">
      <h3>${info.title}</h3>
      <p>Descrizione: ${info.description}</p>
      <p>data di creazione: ${info.year}</p>
      </div>
    `;
    infoElement.classList.add('show'); // Add the 'show' class
  };
  
  // Hide painting info in the DOM
  export const hidePaintingInfo = () => {
    const infoElement = document.getElementById('info-dipinto'); // Get the reference
    infoElement.classList.remove('show'); // Remove the 'show' class
    infoElement.classList.add('animation-hide-class'); // Add the 'show' class

  };
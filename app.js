

    // Create Dino Constructor
    //************************************************************************************ */
    function dinosaur(species, weight, height, diet, where, when, fact, image) {
      this.species = species;
      this.weight = weight;
      this.height = height;
      this.diet = diet;
      this.where = where;
      this.when = when;
      this.fact = fact;
      this.image = image;
    }

    const getDinoData = async () => {
      const fetchedData = await fetch("./dino.json");
      const data = await fetchedData.json();
      return data.Dinos;
    };

    const dinos = [];

    window.onload = async () => {
      const dinoArray = await getDinoData();

      dinoArray.forEach(item => {
        const dino = new dinosaur (
          item.species,
          item.weight,
          item.height,
          item.diet,
          item.where,
          item.when,
          item.fact
        );
        dinos.push(dino);
      });
      console.log(dinos)


    };


    // Create Dino Objects


    // Create Human Object













    function displayData (){

     for (let i=0; i < dinos.length; i++) {
      const grid = document.querySelector("#grid");
      grid.innerHTML += `
            <div class="grid-item">
                <h3>${dinos[i].species}</h3>
                <img src="./images/${dinos[i].species.toLowerCase()}.png" alt="a draw of a ${dinos[i].species}" />
                <p>${dinos[i].fact}</p>
                
              </div>
          `;
     }

     }









    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', ()=>{
    const elem = document.querySelector('#dino-compare');
    elem.remove();
    displayData();
    console.log('pressed');
});
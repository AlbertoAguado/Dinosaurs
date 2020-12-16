
// Create Dino Constructor
    function Dinosaur(species, height, weight, diet, where, when, fact, image) {
      this.species = species;
      this.height = height;
      this.weight = weight;
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

// Create Dino Objects
    const dinos = [];

    window.onload = async () => {
      const dinoArray = await getDinoData();

      dinoArray.forEach(item => {
        const dino = new Dinosaur (
          item.species,
          item.height,
          item.weight,
          item.diet,
          item.where,
          item.when,
          item.fact,
          item.species.toLowerCase()+'.png'
        );
        dinos.push(dino);
      });
      console.log(dinos)
    };


// Create Human Object

const human = new Dinosaur (
  'asdfa', 2342134, 1234123, 'herbavore', 'Spain', 'long time ago', 'facto','human.png'
);

/*

const human = {
  image:'images/human.png'
};
  // Use IIFE to get human data from form
document.getElementById('btn').addEventListener('click', (event)=>{
  (function getHumanData (e) {
      human.name = document.getElementById('name').value,
      human.feet = document.getElementById('feet').value,
      human.inches = document.getElementById('inches').value,
      human.weight = document.getElementById('weight').value,
      human.diet = document.getElementById('diet').value.toLowerCase()
  }());
  console.log(human);
});

*/


    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    function displayData (){
      dinos.splice(4, 0, human);
      for (let i=0; i < dinos.length; i++) {
       const grid = document.querySelector("#grid");
       grid.innerHTML += `
             <div class="grid-item">
                 <h3>${dinos[i].species}</h3>
                 <img src="./images/${dinos[i].image}" alt="a draw of a ${dinos[i].species}" />
                 <p>${dinos[i].fact}</p>
                 
               </div>
           `;
      }
 
      }
        // Add tiles to DOM

    // Remove form from screen

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', ()=>{
    const elem = document.querySelector('#dino-compare');
    elem.remove();
    displayData();
    console.log('pressed');
});
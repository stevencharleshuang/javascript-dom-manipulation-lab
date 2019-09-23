let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();



  // Do all of your work below in the following functions
  // DON'T FORGET TO CALL THE FUNCTIONS TO SEE YOUR WORK!


// Accessing DOM Elements (Querying)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Change the text of the title to something shorter.
  function shortenPageTitle() {
    let mainTitle = document.querySelector('#main-title');
    
    mainTitle.innerText = 'Dom Toretto';
  }

  shortenPageTitle();

  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  function changeBodyBgColor() {
    let body = document.querySelector('body');
   
    body.style.background = 'lightblue';
  }

  changeBodyBgColor();

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  function removeLastFavoriteThing() {
    let favoriteThingsLI = document.querySelectorAll('#favorite-things li');
    let lastLI = favoriteThingsLI[favoriteThingsLI.length - 1];
    
    lastLI.parentNode.removeChild(lastLI);
  }

  removeLastFavoriteThing();
  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem.
  // Remember you might have to iterate through the list of elements

  function makeSpecialTitlesBigger() {
    let specialTitles = document.querySelectorAll('.special-title');

    specialTitles.forEach(title => title.style.fontSize = '2rem');

  }

  makeSpecialTitlesBigger();


  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  function RemoveChicagoRace() {
    let pastRaces = document.querySelectorAll('#past-races li');

    pastRaces.forEach(city => {
      if (city.innerText === 'Chicago') {
        city.parentNode.removeChild(city);
      }
    });

  }

  RemoveChicagoRace();

// Creating New DOM Elements

  // Part 6
  // Let's add to DOM's  Past Races  list.
  // Create a new <li> element, change the new <li> text to the name of a city, and append it to the  Past Races  list.
  function addPastRace() {
    let pastRaces = document.querySelector('#past-races');
    let ladysmith = document.createElement('li');

    ladysmith.innerText = 'Ladysmith';
    pastRaces.append(ladysmith);
  }

  addPastRace();

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text.
  // Think about what order you want to create the elements, and what order you want to append them in.
  function createNewBlogPost() {
    let main = document.querySelector('.main');
    let newPost = document.createElement('div');

    newPost.setAttribute('class', 'blog-post purple');
    main.append(newPost);

    let newTitle = document.createElement('h1');
    newTitle.innerText = 'Ladysmith';
    newPost.append(newTitle);

    let newDescription = document.createElement('p');
    newDescription.innerText = 'I raced the streets of Ladysmith, Wisconsin. Mad cows...';
    newPost.append(newDescription);
  }

  createNewBlogPost();
});


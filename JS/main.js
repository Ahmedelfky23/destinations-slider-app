// Destinations data
var destinations = [
  {
    counter: "01 / 04",
    badge: "01",
    country: "FRANCE",
    city: "Paris",
    description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    language: "French",
    image: "images/paris.jpg"
  },
  {
    counter: "02 / 04",
    badge: "02",
    country: "JAPAN",
    city: "Tokyo",
    description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    continent: "Asia",
    food: "Sushi, Ramen",
    place: "Tokyo Tower",
    language: "Japanese",
    image: "images/tokyo.jpg"
  },
  {
    counter: "03 / 04",
    badge: "03",
    country: "ITALY",
    city: "Rome",
    description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
    continent: "Europe",
    food: "Pizza, Pasta",
    place: "Colosseum",
    language: "Italian",
    image: "images/roma.jpg"
  },
  {
    counter: "04 / 04",
    badge: "04",
    country: "EGYPT",
    city: "Cairo",
    description: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
    continent: "Africa",
    food: "Koshari, Foul",
    place: "Pyramids",
    language: "Arabic",
    image: "images/cairo.jpg"
  }
];

var currentIndex = 0;

// DOM Elements
var cardCounter = document.getElementById("cardCounter");
var cardCountry = document.getElementById("cardCountry");
var cardCity = document.getElementById("cardCity");
var cardDescription = document.getElementById("cardDescription");
var specContinent = document.getElementById("specContinent");
var specFood = document.getElementById("specFood");
var specPlace = document.getElementById("specPlace");
var specLanguage = document.getElementById("specLanguage");
var cardImage = document.getElementById("cardImage");
var badgeNumber = document.getElementById("badgeNumber");

var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var dots = document.querySelectorAll(".pagination-dots .dot");

// Function to display the destination
function showDestination(index) {
  var item = destinations[index];

  cardCounter.innerText = item.counter;
  cardCountry.innerText = item.country;
  cardCity.innerText = item.city;
  cardDescription.innerText = item.description;
  specContinent.innerText = item.continent;
  specFood.innerText = item.food;
  specPlace.innerText = item.place;
  specLanguage.innerText = item.language;
  badgeNumber.innerText = item.badge;
  cardImage.src = item.image;

  // Update dots using a classic for loop (no forEach)
  for (var i = 0; i < dots.length; i++) {
    if (i === index) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }

  // Highlight Next button on screens 2 to 4
  if (index > 0) {
    nextBtn.classList.add("highlighted");
  } else {
    nextBtn.classList.remove("highlighted");
  }
}

// Next Button click
nextBtn.onclick = function () {
  currentIndex++;
  if (currentIndex >= destinations.length) {
    currentIndex = 0;
  }
  showDestination(currentIndex);
};

// Previous Button click
prevBtn.onclick = function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = destinations.length - 1;
  }
  showDestination(currentIndex);
};

// Dots click using simple loop
for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {
    currentIndex = i;
    showDestination(currentIndex);
  };
}

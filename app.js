// local reviews data
const reviews = [
    {
      id: 1,
      name: "Ronaldinho",
      job: "Medio Campista",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ronaldinho_in_2019.jpg/245px-Ronaldinho_in_2019.jpg",
      text:
        "Debutó como futbolista profesional en Grêmio, de su natal Porto Alegre, pero desarrolló gran parte de su carrera futbolista en Europa, donde jugó en el París Saint-Germain, F. C. Barcelona y A. C. Milan.",
    },
    {
      id: 2,
      name: "Rafael Márquez",
      job: "Defensa",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/RafaelMarquezAlvarez.jpg/220px-RafaelMarquezAlvarez.jpg",
      text:
        "Considerado uno de los mejores jugadores mexicanos de todos los tiempos, fue jugador internacional absoluto con la Selección de México desde 1997 hasta su retiro en el Mundial de Rusia 2018.",
    },
    {
      id: 3,
      name: "Ronaldo Luis Nazarío",
      job: "Delantero",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ronaldo_Cannes.jpg/220px-Ronaldo_Cannes.jpg",
      text:
        "Conocido como «O fenômeno» (en español, «El fenómeno»), es considerado por diversos organismos, personajes y medios vinculados al deporte, como el mejor delantero centro de la historia del fútbol",
    },
    {
      id: 4,
      name: "Christian Giménez",
      job: "Delantero",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Chacogimenezself.jpg/160px-Chacogimenezself.jpg",
      text:
        "Llegó a México en el segundo semestre de 2004 para los Tiburones Rojos de Veracruz, jugando el Apertura 2004 y Clausura 2005.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
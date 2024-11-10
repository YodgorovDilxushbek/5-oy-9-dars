


// const form = document.querySelector("#form");
// const cardContainer = document.querySelector("#card");
// const field = document.querySelector("#search");

// function createCard(data) {
//   return `
//     <div class="card">
//       <h2>${data.name}</h2>
//       <div class="image">
//         <img src="./image/pen-solid.svg" width="15px" alt="">
//         <img src="./image/trash-solid.svg" width="15px" alt="" class="delete-button" data-id="${data.id}">
//       </div>
//     </div>`;
// }
//  function getData() {
//     let storage = [];
// if (localStorage.getItem("data")) {
//   storage = JSON.parse(localStorage.getItem("data"));
// }
// return data;
// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
  
//   const todo = {
//     id: Date.now(),
//     name: field.value
//   };
   


  
//   const block = createCard(todo);
//   cardContainer.innerHTML += block;
//   field.value = "";

//   let data = getData()
//   data.push(todo);
//   localStorage.setItem(`data`, JSON.stringify(data))
// });



const form = document.querySelector("#form");
const cardContainer = document.querySelector("#card");
const field = document.querySelector("#search");

// Karta yaratish funksiyasi
function createCard(data) {
  return `
    <div class="card">
      <h2>${data.name}</h2>
      <div class="image">
        <img src="./image/pen-solid.svg" width="15px" alt="">
        <img src="./image/trash-solid.svg" width="15px" alt="" class="delete-button" data-id="${data.id}">
      </div>
    </div>`;
}

// Ma'lumotlarni localStorage dan olish funksiyasi
function getData() {
  let storage = [];
  if (localStorage.getItem("data")) {
    storage = JSON.parse(localStorage.getItem("data"));
  }
  return storage;
}

// Sahifa yuklanganda mavjud kartalarni ko'rsatish
document.addEventListener("DOMContentLoaded", function () {
  const data = getData();
  data.forEach(item => {
    cardContainer.innerHTML += createCard(item);
  });

 
});



form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const todo = {
    id: Date.now(),
    name: field.value
  };

  const block = createCard(todo);
  cardContainer.innerHTML += block;
  field.value = "";

  let data = getData();
  data.push(todo);
  localStorage.setItem("data", JSON.stringify(data));

});



  

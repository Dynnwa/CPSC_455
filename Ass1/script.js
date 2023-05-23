let defaultData = `[{
  "name": "fork",
  "price": "3",
  "description": "its a fork",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDTu-8YF1QJpG5YPfLPGtc7xWuw3AeJWHdckuEEGmnA&s"
  },
  {
  "name": "spoon",
  "price": "4",
  "description": "its a spoon",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDTu-8YF1QJpG5YPfLPGtc7xWuw3AeJWHdckuEEGmnA&s"
}]`;
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("item-form");
    const deleteButton = document.getElementById("delete-button");
    const itemList = document.getElementById("dynamic-list");
  
    let jsonData = JSON.parse(defaultData);

    displayItems();

    deleteButton.addEventListener("click", function(event) {
      event.preventDefault();
      jsonData = [];
      displayItems();
    });
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name");
      const description = document.getElementById("description");
      const price = document.getElementById("price");
      const image = document.getElementById("image");
  
      const newItem = {
        name: name.value,
        description: description.value,
        price: price.value,
        image: image.value,
      };
  
      jsonData.push(newItem);
  
      name.value = "";
      description.value = "";
      price.value = "";
      image.value = "";
  
      displayItems();
    });

    form.addEventListener("reset", function(event) {
      event.preventDefault();
      const name = document.getElementById("name");
      const description = document.getElementById("description");
      const price = document.getElementById("price");
      const image = document.getElementById("image");

      name.value = "";
      description.value = "";
      price.value = "";
      image.value = "";
  
      displayItems();
    });
  
    function displayItems() {
      itemList.innerHTML = "";
      let total = 0;
  
      jsonData.forEach(item => {
        total += parseInt(item.price);
        const p = document.createElement("p");
        p.textContent = `Name: ${item.name}, Description: ${item.description}, Price: ${item.price}, Image: ${item.image}`;
        itemList.appendChild(p);
      });

      const p = document.createElement("p");
        p.textContent = `Total Price: ${total}`;
        itemList.appendChild(p);
    }
  });
  
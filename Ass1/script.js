  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("item-form");
    const deleteButton = document.getElementById("delete-button");
    const itemList = document.getElementById("dynamic-list");
  
    let jsonData = [{
        name: "fork",
        price: "3",
        description: "its a fork",
        image: "data:image/jpeg;base64,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",
        },
        {
        name: "spoon",
        price: "4",
        description: "its a spoon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDTu-8YF1QJpG5YPfLPGtc7xWuw3AeJWHdckuEEGmnA&s",
      }];

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
  
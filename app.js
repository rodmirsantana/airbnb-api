const div_cards = document.getElementById('cards');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
  return parent.appendChild(element);
}

fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
    .then(response => response.json())
    .then(data => {
        for(const places of Object.values(data)){
            let div = createNode('div'),
                p_name  = createNode('p'),
                p_price = createNode('p'),
                name = document.createTextNode(places["name"]),
                price = document.createTextNode("Price: $" + places["price"] + " / night"),
                img = createNode('img');
            img.src = places["photo"];
            append(p_name, name);
            append(p_price,price);
            append(div,img);
            append(div,p_name);
            append(div,p_price);
            // div.className += "room";
            append(div_cards,div);
        }  
    })
    .catch(error => {
        console.log("Error!");
    });

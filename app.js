const ul = document.getElementById('rooms');

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
        let li = createNode('li'),
        texto = document.createTextNode(places["name"]),
        // console.log(texto)
        img = createNode('img');
        img.src = places["photo"];
        append(li,texto);
        append(li,img);
        append(ul,li);
    }
    
});

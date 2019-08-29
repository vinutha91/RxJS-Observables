import { Observable } from 'rxjs';

console.log(Observable);

function addItem(data: any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(data);
    node.appendChild(textNode);
    document.getElementById('list').appendChild(node);
}
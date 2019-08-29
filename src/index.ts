import { Observable } from 'rxjs';

let myFirstObservable = Observable.create(function(observer: any) {
    observer.next('Hii!!');
    observer.next('How are you?');

    observer.complete();

    observer.next('This will not print!');
});

myFirstObservable.subscribe(
    (data: any) => {
        addItem(data);
    },
    (error: any) => {},
    () => {
        addItem('OBSERVABLE COMPLETE!');
    }
);

function addItem(data: any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(data);
    node.appendChild(textNode);
    document.getElementById('list').appendChild(node);
}
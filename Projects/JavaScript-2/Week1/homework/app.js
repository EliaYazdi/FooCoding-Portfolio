// assert = chai.assert.deepEqual

'use strict';
/*//make an array

const bookList = [
  'the-kite-runner',
  'number-the-stars',
  'pride-and-prejudice',
  'the-outsiders',
  'little-women',
];
//this is how I printed my array in the DOM but not like a list. like a line!
document.querySelector('#myArr').innerHTML = `My bookList Array : ${bookList}`

//Now I want to creat an unordered list out of the bookList array

function createList() {
  let uList = document.createElement('ul');
  uList.setAttribute('id', 'li');
  document.body.appendChild(uList);


  for (let index in bookList) {
    let eachBook = document.createElement('li');
    uList.appendChild(eachBook);

    eachBook.textContent = bookList[index];
  }
}
createList();*/

//Now I have an object array of my must read books information



let books = [
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    language: 'English',
    cover: 'kite.jpg'
  },
  {
    title: 'Number the Stars',
    author: 'lois Lowry',
    language: 'English',
    cover: 'number.jpg'

  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    language: 'English',
    cover: 'pride.jpg'
  },
  {
    title: 'The Outsiders',
    author: 'S.E Hinton',
    language: 'English',
    cover: 'outsiders.jpeg'

  },
  {
    title: 'Little Women',
    author: 'Louisa May',
    language: 'English',
    cover: 'Little.png'
  }
]

document.body.onload = printBooks;
//now I want to print all the information in the DOM.

function createAndAppend(typ, parent, attributes = {}) {
  const elem = document.createElement(typ);
  parent.appendChild(elem);
  for (const key in attributes) elem[key] = attributes[key]
  return elem
}

function printBooks() {
  const h1 = createAndAppend('h1', document.body, { innerText: 'My Must Read Books' });
  const ul = createAndAppend('ul', document.body);
  for (const book of books) {
    const li = createAndAppend('li', ul);
    const h2 = createAndAppend('h2', li, { innerText: book.title });
    const author = createAndAppend('h4', li, { innerText: `Author: ${book.author}` })
    const language = createAndAppend('h4', li, { innerText: `Language: ${book.language}` })
    const img = createAndAppend('img', li, { src: book.cover, height: 350, width: 250 })
  }
}

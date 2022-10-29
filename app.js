// variable

// what feature do i want ?
// 1. add eventListener to the Mark button
// 2. add function to the action (store it into a variable?)
// 3. when the user click submit btn , display none the main contact, and set the seond part to display block;

const marks = document.querySelectorAll('#mark');
const btn = document.querySelector('#btn');
const showPannel = document.querySelector('#showPannel');
const giveMark = document.querySelector('#giveMark');

let markCount = document.querySelector('#mark-count');

console.log(markCount);
console.log(marks);
console.log(showPannel);
console.log(giveMark);

// if the user click on submmit btn, display none the main page and shows the thank u page
const submitResult = function () {
  // if (giveMark.style.display === 'none') {
  giveMark.style.display = 'block';
  showPannel.style.display = 'none';
  // }
  //  else if (giveMark.style.display === 'block') {
  //   giveMark.style.display = 'none';
  // }
};

btn.addEventListener('click', submitResult);

marks.forEach(function (mark) {
  mark.addEventListener('click', () => {
    mark.style.backgroundColor = 'hsl(25, 97%, 53%)';
    markCount.innerHTML = mark.innerHTML;
  });
});

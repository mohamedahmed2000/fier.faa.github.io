//the image codes//
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/FireFox.png') {
      myImage.setAttribute('src','images/fox.png');
    } else {
      myImage.setAttribute('src','images/FireFox.png');
    }
}

//the Button codes//
let myButton = document.querySelector('button');

//the Heading codes//
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'welcome, '  + myName;
  }
  if(!localStorage.getItem('name')){
      setUserName();
  }else{
      let storedName = localStorage.getItem('name');
      myHeading.textContent = 'welcome, ' + storedName;
  }

myButton.onclick = function () {
  setUserName();
}
function setUserName() {
  let myName=prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  }else {
    localStorage.setItem('name' , myName);
    myHeading.textContent = 'welcome, ' + myName;
  }
}

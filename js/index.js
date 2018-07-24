/////////////////////////////////////////////////////////////////////////
//                  Written by Doug Luce for Free Code Camp
//                  

'use strict'

// This object is storing all of the calculation in a an object
let operators = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b
};
//////////////////////////////////////////////////////////////////////////
//                    Setting up my static variables
let numbers1 = [];
let numbers2 = [];
let secondNum = false;
let switch1 = true;
let switch2 = true;
let op = '';
let opSet = false;
let buttons = {
  'buttonOne': {
    name: 'button[name=one]',
    value: 1
  },
  'buttonTwo': {
    name: 'button[name=two]',
    value: 2
  },
  'buttonThree': {
    name: 'button[name=three]',
    value: 3
  },
  'buttonFour': {
    name: 'button[name=four]',
    value: 4
  },
  'buttonFive': {
    name: 'button[name=five]',
    value: 5
  },
  'buttonSix': {
    name: 'button[name=six]',
    value: 6
  },
  'buttonSeven': {
    name: 'button[name=seven]',
    value: 7
  },
  'buttonEight': {
    name: 'button[name=eight]',
    value: 8
  },
  'buttonNine': {
    name: 'button[name=nine]',
    value: 9
  },
  'buttonZero': {
    name: 'button[name=zero]',
    value: 0
  },
  'buttonDecimal': {
    name: 'button[name=decimal]',
    value: '.'
  }
};

//////////////////////////////////////////////////////////////////////////
//                    Click logic for each button
// I'm using an object that contains all of the buttons names and values
// to push those into arrays. The bottom 2 functions are for testing.

//creating the click handlers for most of the buttons
function button(buttonName, value) {
  $(buttonName).click(() => {
    if (!secondNum) { //if false push number into numbers1 array
      if (numbers1.length < 10) {
        //check for the decimal
        if (value === '.') {
          if (switch1) {
            //Check for multiple decimals here
            numbers1.push('.');
            switch1 = false;
          }

        } else {
          numbers1.push(value);
          $('.display').text(numbers1.join(''));
        }

      }
      console.log(numbers1);
    } else if (secondNum) { //if true push number into numbers2 array
      if (numbers2.length < 10) {
        if (value === '.') {
          if (switch2) {
            numbers2.push('.');
            switch2 = false;
          }

        } else {
          numbers2.push(value);
          $('.display').text(numbers2.join(''));
        }

      }
      console.log(numbers2);
    }

  });
}
// All Clear button 
$('button[name=AC]').click(() => {
  $('.display').text('0'); // change the display to show 0
  
  secondNum = false;
  switch1 = true;
  switch2 = true;
  numbers1 = [];
  numbers2 = [];
  opSet = false;
});

// Clear entry button CE
$('button[name=CE]').click(() => {
  if (!secondNum) {
    // remove last added element from numbers1
    numbers1.pop();
    if (numbers1.length >= 1) {
      $('.display').text(numbers1.join(''));
    }

  } else if (secondNum) {
    // remove last added element from numbers1
    numbers2.pop();
    if (numbers1.length >= 1) {
      $('.display').text(numbers2.join(''));
    }

  }
});

//Button calls. What else can I do here, this seems like a crappy way to call these.
button(buttons.buttonOne.name, buttons.buttonOne.value);
button(buttons.buttonTwo.name, buttons.buttonTwo.value);
button(buttons.buttonThree.name, buttons.buttonThree.value);
button(buttons.buttonFour.name, buttons.buttonFour.value);
button(buttons.buttonFive.name, buttons.buttonFive.value);
button(buttons.buttonSix.name, buttons.buttonSix.value);
button(buttons.buttonSeven.name, buttons.buttonSeven.value);
button(buttons.buttonEight.name, buttons.buttonEight.value);
button(buttons.buttonNine.name, buttons.buttonNine.value);
button(buttons.buttonZero.name, buttons.buttonZero.value);
button(buttons.buttonDecimal.name, buttons.buttonDecimal.value);

////////////////////////////////////////////////////////////
//                Do math stuff here
$('button[name=add]').click(() => {
  if (!opSet) {
    $('.display').text('+');
  }
  
  op = '+';
  secondNum = true;
});

$('button[name=subtract]').click(() => {
  if (!opSet) {
    $('.display').html('&#8722');
  }
  
  op = '-';
  secondNum = true;
  opSet = true;
});

$('button[name=multiply]').click(() => {
  if (!opSet) {
    $('.display').html('&#215');
  }
  
  op = '*';
  secondNum = true;
  opSet = true;
});

$('button[name=divide]').click(() => {
  if (!opSet) {
    $('.display').html('&#247');
  }
  
  op = '/';
  secondNum = true;
  opSet = true;
});

$('button[name=equal]').click(() => {
  let sum1 = parseFloat(numbers1.join(''), 10);
  let sum2 = parseFloat(numbers2.join(''), 10);
  
  $('.display').text(operators[op](sum1, sum2));

  switch1 = true;
  secondNum = false;
  numbers1 = [];
  numbers2 = [];
  opSet = false;
});
function calculateHandler(event) {
  debugger;

  // read & process user input from event
  let x = parseInt(document.querySelector('#value1').value);
  let y = parseInt(document.querySelector('#value2').value);
  let op = document.querySelector('#operator').value;

  // pass user input through core logic
  const result = doMath(op, x, y); // leave this line!
  
  // render output to DOM for user
  document.getElementById('result').innerHTML = result;

  // log user action for developers
  console.log('\n--- calculate ---');
  console.log('x:', typeof x, '\n', x);
  console.log('y:', typeof y, '\n', y);
  console.log('op:', typeof op, '\n', op);
  console.log('result:', typeof result, '\n', result);


  // return true for the browser
  return true;
}
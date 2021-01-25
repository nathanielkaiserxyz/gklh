let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(400, 400);
  background('#262421')
  input = createInput();

  button = createButton('go');
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is your lichess username');
  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('');
  input.value('');

  //turning input into the seed
  let seed = [];
  let sname = split(name, '');
  let i = 0
  while(sname[i] != null)
  {
    i++
    append(seed, unchar(sname[i]));
  }
  strseed = join(seed, '');
  s = int(strseed);
  //randomseed(s);

  for (let i = 0; i < 5; i++) {
    push();
    fill(random(['#5E9CFE','#22269E','#8849FF']));
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}

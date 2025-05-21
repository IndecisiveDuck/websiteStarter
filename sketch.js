let barHeights = 20
let usernamePressed = false;
let passwordPressed = false;
let passwordTwoPressed = false;
let emailPressed = false;
let enterScreen = false;
let thisWorkPls = false;

//universal settings that need to be up here because they're a b-
  let barSize = 5;

function setup() {
  //the stuff we need to do the thing
  createCanvas(windowWidth, windowHeight);
  usernameInput = createInput();
  passwordInput = createInput();
  passwordTwoInput = createInput();
  emailInput = createInput();
  signUpButton = createButton("Sign up")
  .mousePressed(() => enterScreen = true);
  completeButton = createButton("Complete")
  .mousePressed(() => thisWorkPls = true);
  logInButton = createButton("Log in")
  .mousePressed(() => enterScreen = false);
  
}

function draw() {
  background(220);
    signUpButton.position((windowWidth*35)/100,(windowHeight*10)/100);
  logInButton.position((windowWidth*55)/100,(windowHeight*10)/100)
  strokeWeight(1);
  stroke(0);
  rect((windowWidth*20)/100,(windowHeight*5)/100,(windowWidth*60)/100,(windowHeight*90)/100);
  
  //universal settings
  let font = '20px';
  completeButton.position((windowWidth*45)/100,(windowHeight*85)/100);
  if(enterScreen == false){
    
    if(thisWorkPls == true){
      for(let i = 0; i < 1; i++){
        findUser();
        thisWorkPls = false;
      }
    }
    
  col = color(0,0,0,0);
  usernameInput.style('background-color', col);
  usernameInput.style('font-size', font);
  passwordInput.style('background-color', col);
  passwordInput.style('font-size', font);
  usernameInput.size((windowWidth*58)/100, (windowHeight*barSize)/100)
  passwordInput.size((windowWidth*58)/100, (windowHeight*barSize)/100);
    text("Username",(windowWidth*23)/100,(windowHeight*(19+barHeights))/100);
  usernameInput.position((windowWidth*21)/100,(windowHeight*(20+barHeights))/100);
    text("Password:",(windowWidth*23)/100,(windowHeight*(39+barHeights))/100);
  passwordInput.position((windowWidth*21)/100,(windowHeight*(40+barHeights))/100);
  
  if(usernamePressed == true){
    strokeWeight(2);
    stroke(255,0,255)
  }else{
    strokeWeight(1);
    stroke(0)
  }
  rect((windowWidth*21)/100,(windowHeight*(20+barHeights))/100,(windowWidth*58)/100, (windowHeight*barSize)/100);
  if(passwordPressed == true){
    strokeWeight(2);
    stroke(255,0,255)
  }else{
    strokeWeight(1);
    stroke(0);
  }
    rect((windowWidth*21)/100,(windowHeight*(40+barHeights))/100,(windowWidth*58)/100, (windowHeight*barSize)/100);
    
    
  }else if(enterScreen == true){
  
    if(thisWorkPls == true){
    for(let i = 0; i<1; i++){
      let response = findUser();
      if(response == "Error"){
        console.log("Ayyye")
      }
      thisWorkPls = false;
    }
  }
    
    
    
    col = color(0,0,0,0);
    usernameInput.style('background-color', col);
    usernameInput.style('font-size', font);
    passwordInput.style('background-color', col);
  passwordInput.style('font-size', font);
  passwordTwoInput.style('background-color', col);
  passwordTwoInput.style('font-size', font);
  emailInput.style('background-color', col);
  emailInput.style('font-size', font);
  usernameInput.size((windowWidth*58)/100, (windowHeight*barSize)/100);
  passwordInput.size((windowWidth*58)/100, (windowHeight*barSize)/100);
    passwordTwoInput.size((windowWidth*58)/100, (windowHeight*barSize)/100);
    emailInput.size((windowWidth*58)/100, (windowHeight*barSize)/100);
    textSize(15);
    text("Username:",(windowWidth*23)/100,(windowHeight*(4+barHeights))/100);
  usernameInput.position((windowWidth*21)/100,(windowHeight*(5+barHeights))/100);
    text("Password:",(windowWidth*23)/100,(windowHeight*(19+barHeights))/100)
  passwordInput.position((windowWidth*21)/100,(windowHeight*(20+barHeights))/100);
    text("Confirm Password:",(windowWidth*23)/100, (windowHeight*(34+barHeights))/100)
    passwordTwoInput.position((windowWidth*21)/100, (windowHeight*(35+barHeights))/100);
    text("Email:",(windowWidth*23)/100,(windowHeight*(49+barHeights))/100)
    emailInput.position((windowWidth*21)/100,(windowHeight*(50+barHeights))/100);
  
  if(usernamePressed == true){
    strokeWeight(2);
    stroke(255,0,255)
  }else{
    strokeWeight(1);
    stroke(0)
  }
  rect((windowWidth*21)/100,(windowHeight*(5+barHeights))/100,(windowWidth*58)/100, (windowHeight*barSize)/100);
  if(emailPressed == true){
    strokeWeight(2);
    stroke(255,0,255)
  }else{
    strokeWeight(1);
    stroke(0);
  }
    rect((windowWidth*21)/100,(windowHeight*(20+barHeights))/100,(windowWidth*58)/100, (windowHeight*barSize)/100);
  if(passwordPressed == true){
    strokeWeight(2);
    stroke(255,0,255)
  }else{
    strokeWeight(1);
    stroke(0);
  }
    rect((windowWidth*21)/100,(windowHeight*(35+barHeights))/100,(windowWidth*58)/100, (windowHeight*barSize)/100);
  if(passwordTwoPressed == true){
    strokeWeight(2);
    stroke(255,0,255)
  }else{
    strokeWeight(1);
    stroke(0);
  }
    rect((windowWidth*21)/100,(windowHeight*(50+barHeights))/100,(windowWidth*58)/100, (windowHeight*barSize)/100);
  }
}

function mousePressed(){
  if(enterScreen == false){
  if(mouseX > (windowWidth*21)/100 &&
    mouseX < (windowWidth*21)/100+(windowWidth*58)/100 &&
    mouseY > (windowHeight*(20+barHeights))/100 &&
    mouseY < (windowHeight*(20+barHeights))/100+(windowHeight*barSize)/100){
    usernamePressed = true;
    passwordPressed = false;
  }else if(mouseX > (windowWidth*21)/100 &&
           mouseX < (windowWidth*21)/100+(windowWidth*58)/100&&
          mouseY > (windowHeight*(40+barHeights))/100&&
          mouseY < (windowHeight*(40+barHeights))/100+ (windowHeight*barSize)/100){
    passwordPressed = true;
    usernamePressed = false;
  }else{
    usernamePressed = false;
    passwordPressed = false;
  }
  }else if(enterScreen == true){
    
    
    if(mouseX > (windowWidth*21)/100 &&
    mouseX < (windowWidth*21)/100+(windowWidth*58)/100 &&
    mouseY > (windowHeight*(5+barHeights))/100 &&
    mouseY < (windowHeight*(5+barHeights))/100+(windowHeight*barSize)/100){
    usernamePressed = true;
    passwordPressed = false;
    passwordTwoPressed = false;
    emailPressed = false;
  }else if(mouseX > (windowWidth*21)/100 &&
           mouseX < (windowWidth*21)/100+(windowWidth*58)/100&&
          mouseY > (windowHeight*(20+barHeights))/100&&
          mouseY < (windowHeight*(20+barHeights))/100+ (windowHeight*barSize)/100){
    passwordPressed = false;
    usernamePressed = false;
    passwordTwoPressed = false;
    emailPressed = true;
  }else if(mouseX > (windowWidth*21)/100 &&
    mouseX < (windowWidth*21)/100+(windowWidth*58)/100 &&
    mouseY > (windowHeight*(35+barHeights))/100 &&
    mouseY < (windowHeight*(35+barHeights))/100+(windowHeight*barSize)/100){
    passwordPressed = true;
    usernamePressed = false;
    passwordTwoPressed = false;
    emailPressed = false;
  }else if(mouseX > (windowWidth*21)/100 &&
    mouseX < (windowWidth*21)/100+(windowWidth*58)/100 &&
    mouseY > (windowHeight*(50+barHeights))/100 &&
    mouseY < (windowHeight*(50+barHeights))/100+(windowHeight*barSize)/100){
    passwordPressed = false;
    usernamePressed = false;
    passwordTwoPressed = true;
    emailPressed = false;
    
  }else{
    passwordPressed = false;
    usernamePressed = false;
    passwordTwoPressed = false;
    emailPressed = false;
  }
  }
}
function handleData(data){
  //Oooo
  for(let i =0; i< data.length; i++){
    if(data[i].includes(usernameInput.value()) &&
       usernameInput.value() != ''){
      if(data[i].includes(passwordInput.value()) &&
         passwordInput.value() != ''){
        let userDirPath = data[i].replace('{'+passwordInput.value()+'}','');
        console.log(userDirPath);
        window.location.assign("Users"+userDirPath+"/user.html");
      }else{
        alert("Password is wrong");
      }
    }else{
        alert("Can't find this username");
    }
  }
}
function handleError(error) {
  console.log("Whoops",error);
}
function createUser(){
  console.log(passwordInput.value());
  console.log(usernameInput.value());
  console.log(passwordTwoInput.value());
  console.log(emailInput.value());
  let Pass = passwordInput.value();
  let vary = passwordTwoInput.value();
  console.log("Huh");
  if(Pass != vary){
    return "Error";
  }
}
function findUser(){
  let dir;
  //the part that does the cool thing
  dir = loadStrings('Users/userList.txt',handleData,handleError);
}

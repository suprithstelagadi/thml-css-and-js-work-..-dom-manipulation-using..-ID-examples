let con = document.getElementById("container");

con.style.display = "flex";
con.style.flexDirection = "column";
con.style.justifyContent = "center";
con.style.height = "100vh";
con.style.alignItems = "center";
con.style.backgroundColor = "#F5E6D3";


// BOX
let box = document.getElementById("box");

box.style.width = "60%";
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.alignItems = "center";
box.style.border = "1px solid #A67B5B";
box.style.padding = "30px 20px";
box.style.backgroundColor = "#E8D3B9";
box.style.gap = "25px";
box.style.borderRadius = "20px";
box.style.boxShadow = "0px 10px 30px rgba(59, 36, 26, 0.25)";


// H1
let h1 = document.getElementById("one");

h1.innerText = "hello,";
h1.style.textTransform = "capitalize";
h1.style.fontSize = "22px";
h1.style.color = "#795548";
h1.style.fontFamily = "Arial, sans-serif";


// H2
let h2 = document.getElementById("two");

h2.innerText = "I Am Suprith S Telagadi";
h2.style.textTransform = "capitalize";
h2.style.fontSize = "55px";
h2.style.color = "#3B241A";
h2.style.fontFamily = "Georgia, serif";
h2.style.textAlign = "center";


// H3
let h3 = document.getElementById("three");

h3.innerText = "i am Doing internship at Dcl";
h3.style.textTransform = "capitalize";
h3.style.fontSize = "22px";
h3.style.color = "#6F4E37";
h3.style.fontFamily = "Arial, sans-serif";


// H4
let h4 = document.getElementById("four");

h4.innerText = "Java full stack";
h4.style.textTransform = "capitalize";
h4.style.fontSize = "15px";
h4.style.color = "#8B5A2B";
h4.style.letterSpacing = "2px";


// IMAGE
let pic = document.getElementById("image");

pic.style.width = "150px";
pic.style.height = "200px";
pic.style.padding="8px 8px"

pic.style.border = "2px solid #A67B5B";
pic.style.borderRadius="25px"
pic.style.boxShadow = "0px 8px 20px rgba(59, 36, 26, 0.3)";


// TEXT
let text = document.getElementById("text");

text.style.fontSize = "15px";
text.style.lineHeight = "1.7";
text.style.color = "#4E342E";
text.style.textAlign = "center";
text.style.maxWidth = "700px";
text.style.fontFamily = "Arial, sans-serif";


// BUTTON CONTAINER
let btns = document.getElementById("btns");

btns.style.display = "flex";
btns.style.flexDirection = "row";
btns.style.gap = "20px";


// BUTTONS
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let bt = document.getElementById("bt");


// BUTTON TEXT
btn1.innerText = "Show";
btn2.innerText = "Hide";
bt.innerText = "Image";


// BUTTON COMMON STYLE
btn1.style.padding = "12px 25px";
btn1.style.border = "none";
btn1.style.borderRadius = "8px";
btn1.style.backgroundColor = "#8B5A2B";
btn1.style.color = "white";
btn1.style.fontSize = "15px";
btn1.style.cursor = "pointer";


btn2.style.padding = "12px 25px";
btn2.style.border = "none";
btn2.style.borderRadius = "8px";
btn2.style.backgroundColor = "#5C3317";
btn2.style.color = "white";
btn2.style.fontSize = "15px";
btn2.style.cursor = "pointer";


bt.style.padding = "12px 25px";
bt.style.border = "none";
bt.style.borderRadius = "8px";
bt.style.backgroundColor = "#6F4E37";
bt.style.color = "white";
bt.style.fontSize = "15px";
bt.style.cursor = "pointer";


// IMAGE BUTTON
bt.addEventListener("click", () => {

    pic.src = "https://images.unsplash.com/photo-1789948731559-5d113d8744b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D";

});


// SHOW BUTTON
btn1.addEventListener("click", () => {

    pic.style.display = "block";

});


// HIDE BUTTON
btn2.addEventListener("click", () => {

    pic.style.display = "none";

});
alert('მოგესალმებით ფრიუნელებო ამა ქვეყნისა, თანასწორთა შორის პირველებო, თუ გშიათ დააჭირეთ ok ღილაკს');


function alertBtn(){
    alert("you just clicked me, it hurts :( ");

}

  
  
  
  

  function showDiv() {
    var div = document.getElementById("myDiv");
    var btnArtura = document.getElementById("btnartura");
    btnArtura.style.display = "none";
    div.style.display = "block";
  }
 


  function submited(){
    var search = document.getElementById("search");
    alert("იძებნება....-'"+search.value+"'")
  }

  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }

  function colorchanger(){
    document.body.style.backgroundColor = randomColor();
  }

  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

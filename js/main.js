function update() {
    var x = window.getComputedStyle(document.getElementById("update")).display;
    if (x != "none") {
        var a = document.getElementById("update");
        a.style.display = "none";
    }
    else {
        var a = document.getElementById("update");
        a.style.display = "inline-block";
    }
}

function addCard() {
    var add = document.getElementById("AddCard");
    add.insertAdjacentHTML('beforeEnd', "<div class='col s12 l4'><div class='card' id='card'><div class='card-image' id='card-img'> <span class='right  menu-btn'></span> <span class='right menu-btn-icon'><i class='material-icons ' onclick='update()'>more_vert</i></span><div class='' id='update'><ul class='collection'><li class='collection-item' onclick='UpdateBtn()'>UPDATE</li><li class='collection-item'>DELETE</li></ul></div> <img src='images/5.jpg' alt='' class='responsive-img materialboxed'> </div><div class='card-content'><h1 class='card-title text-justify' contentEditable='false' Id='titleNm'>Rabbit</h1><p contentEditable='flase' Id='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsum maiores minima culpa, lorem</p></div></div></div>");
    $('.materialboxed').materialbox();
}

function UpdateBtn() {
    var x = document.getElementById("titleNm").style.contentEditable;
    console.log(x);
    var y = document.getElementById("details");
    x.style.contentEditable = "true";
    y.style.contentEditable = "true";
}
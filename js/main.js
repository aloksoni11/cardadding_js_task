function update(t) {

    var item = document.getElementById("update" + t);

    var x = window.getComputedStyle(item).display;

    console.log(x);

    if (x != "none") {
        item.style.display = "none";
    } else {
        item.style.display = "block";
    }



}

var count = 0;

function addCard() {

    count++;

    var add = document.getElementById("AddCard");
    add.insertAdjacentHTML('beforeEnd', "<div class='col s12 l4'><div class='card' id='card'><div class='card-image' id='card-img'> <span class='right  menu-btn'></span> <span class='right menu-btn-icon'><i class='material-icons ' onclick='update(" + count + ")'>more_vert</i></span><div class='Update' id=update" + count + "><ul class='collection'><li class='collection-item' onclick='UpdateBtn("+count+")'>UPDATE</li><li class='collection-item' onclick='DeleteBtn(this)'>DELETE</li></ul></div> <img src='images/5.jpg' alt='' class='responsive-img materialboxed'> </div><div class='card-content'><h1 class='card-title text-justify' id=titleNm"+count+">Rabbit</h1><p id=details"+count+">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsum maiores minima culpa, lorem</p></div></div></div>");
    $('.materialboxed').materialbox();
}

function UpdateBtn(t) {
    var x = document.getElementById("titleNm"+t);
    var y = document.getElementById("details"+t);
    console.log(x);
    if (x.contentEditable != "true" && y.contentEditable != "true") {
        x.contentEditable = "true";
        y.contentEditable = "true";
    } else {
        x.contentEditable = "false";
        y.contentEditable = "false";
    }

}

function DeleteBtn(t) {

    var x = t.parentNode.parentNode.parentNode.parentNode.parentNode;
    x.remove();
}

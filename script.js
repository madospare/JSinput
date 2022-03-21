var form = document.getElementById("form");
var output = document.getElementById("tekst");

form.addEventListener("submit", function(event) {

    var data = form.elements;
    var navn = data.navn.value;

    output.innerHTML = "Hei, jeg heter " + navn + "!";

    event.preventDefault();

});
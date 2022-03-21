var form = document.getElementById("form");
var output = document.getElementById("output");

form.addEventListener("submit", function(event) {

    var data = form.elements;
    var navn = data.navn.value;
    var alder = data.alder.value;
    var drikke = data.drikke.value;
    var mat = data.mat.value;
    var matTyper = "";

    for (var i = 0; mat[i]; i++) 
    {
        if (mat[i].checked) 
        {
            matTyper = mat[i].value;
            break;
        }
    }

    output.innerHTML = "Hei, jeg heter " + navn + "! Jeg er " + alder + " år og liker å drikke " + drikke + ". Jeg liker å spise " + matTyper + ".";

    event.preventDefault();

});
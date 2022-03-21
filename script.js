var form = document.getElementById("form");
var output = document.getElementById("output");

form.addEventListener("submit", function(event) {

    var data = form.elements;
    var navn = data.navn.value;
    var alder = data.alder.value;
    var drikke = data.drikke.value;
    var mat = data.mat;
    var matTyper = [];
    var lag = data.lag.value;
    var dato = data.dato.value;

    for (var i = 0; mat[i]; i++) 
    {
        if (mat[i].checked) 
        {
            matTyper.push(" " + mat[i].value);
        }
    }
    
    output.innerHTML = "Hei, jeg heter " + navn + " og er " + alder + " år. Jeg liker å drikke " + drikke + " og spise" + matTyper + ". Som løk har jeg mange lag. Jeg har akkurat " + lag + " lag. Jeg eksisterte kun én gang, og det var " + dato + ".";

    event.preventDefault();

});
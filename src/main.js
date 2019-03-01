//variables

let actualCountry;
let actualGender;
let actualIndicator;
let Indicators;
//Funciones


// función que llena el <selec> identificado con el id indicado como parametro, con los elementos del array list

const fillList = (list,id) =>{
    let htmlcodes="";
    list.forEach(element => {
        htmlcodes = htmlcodes+ "<option id="+ element + ">" + element+ "</option>";
    })

    document.getElementById(id).innerHTML = htmlcodes;
    }
    //función para actualizar los valores de la selección que el usuario seleccionó, se gurda lo seleccionado en estas variables
const updateSelection=()=>{
    actualCountry = selectCountry.options[selectCountry.selectedIndex].value;
    actualGender = selectGender.options[selectGender.selectedIndex].value;
    actualIndicator = selectGender.options[selectGender.selectedIndex].value;
}
// Actualiza el listado de indicadores de acuerdo a la selección del usuario 
const updateIndicators=()=>{
    Indicators = GenerateSubList(WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators.sort();
    if(actualGender==="Hombre"){Indicators=Indicators.filter(filterForMen);}
    if(actualGender==="Mujer"){Indicators=Indicators.filter(filterForWomen);}
    fillList(Indicators,"selectIndicators");
}

//-----------------------
// define variables para os objetos de html
const selectCountry=document.getElementById("selectCountry");
const selectGender=document.getElementById("selectGender");
const selectIndicators=document.getElementById("selectIndicators");
selectCountry.addEventListener("click", ()=>{
    updateSelection();//actualiza las variables que guarda la selección del usuario
    updateIndicators(); //actualiza el listado de indicadores de la etiqueta selec a partir de las variables que guardan la selección del usuario
    document.getElementById("selectIndicators").style.display = "block"; // hace visible el select de indicadores

})
//lo mismo de country pero con la selección de genero
selectGender.addEventListener("click", ()=>{
    updateSelection();
    updateIndicators();
    document.getElementById("selectIndicators").style.display = "block";   
})
selectIndicators.addEventListener("click", ()=>{
    
})

//Funcion de inicio
const start=()=> {

    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
  }


//Funcion para llamar al div de indicadores 
const enterIndicators=()=> {

    document.getElementById("index").style.display="none";
    document.getElementById("definition").style.display="none";
    document.getElementById("indicators").style.display="block";
  }

//Funcion para llamar al div de incio y definición
const enterInitialPage=()=> {

    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
  }  
  





  window.onload= start
  







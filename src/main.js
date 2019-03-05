//variables globales

let actualCountry;//el pais seleccionado por el usuario
let actualGender;//sexo seleccionado por el usuario 
let actualIndicator;//el indicador seleccionado por el usuario
let Indicators;

// define variables para los objetos de html
const selectCountry=document.getElementById("selectCountry");
const selectGender=document.getElementById("selectGender");
const selectIndicators=document.getElementById("selectIndicators"); 

// Función que llena el <selec> identificado con el id indicado como parametro, con los elementos del array list
//Crea la lista desplegable de indicadores
const fillList = (list,id) =>{
    let htmlcodes="";
    list.forEach(element => {
        htmlcodes = htmlcodes+ "<option id="+ element + ">" + element+ "</option>";
    })
    document.getElementById(id).innerHTML = htmlcodes;
    }
    
   
//Actualiza los valores que el usuario seleccionó
const updateSelection=()=>{
    actualCountry = selectCountry.options[selectCountry.selectedIndex].value;
    actualGender = selectGender.options[selectGender.selectedIndex].value;
    try {actualIndicator = selectIndicators.options[selectIndicators.selectedIndex].value;}
    catch {}
}

// Actualiza el listado de indicadores de acuerdo a la selección del usuario 
// Actualiza el listado de indicadores de acuerdo a la selección de país y genero 
const updateIndicators=()=>{
    Indicators = GenerateSubList(WORLDBANK[actualCountry].indicators,"indicatorName");
    Indicators.sort();
    if(actualGender==="Hombre"){Indicators=Indicators.filter(filterForMen);}
    if(actualGender==="Mujer"){Indicators=Indicators.filter(filterForWomen);}
    fillList(Indicators,"selectIndicators");
}

//Conecta el botón "siguiente" para que muestre la lista de indicadores filtrada
const showlist=document.getElementById("next-button").addEventListener("click", ()=> {    updateSelection();//actualiza las variables que guarda la selección del usuario
    updateIndicators(); //actualiza el listado de indicadores de la etiqueta selec a partir de las variables que guardan la selección del usuario
    document.getElementById("selectIndicators").style.display = "block"; // hace visible el select de indicadores    
    document.getElementById("showDataScreen").style.display="block";
}) 
//Lo de abajo no es necesario porque el botón ya esta llamando a esas funciones
//selectCountry.addEventListener("click", ()=>{
//    updateSelection();//actualiza las variables que guarda la selección del usuario
//    updateIndicators(); //actualiza el listado de indicadores de la etiqueta selec a partir de las variables que guardan la selección del usuario
//    document.getElementById("selectIndicators").style.display = "block"; // hace visible el select de indicadores
//})
//lo mismo de country pero con la selección de genero
//selectGender.addEventListener("click", ()=>{
//    updateSelection();
//    updateIndicators();
//    document.getElementById("selectIndicators").style.display = "block";   
//})

//Genera el codigo html para llenar la tabla con la data, llena la tabla con los datos de data (año e indicador)
const fillTable =(arr)=>{
    let htmlCode=   "<tr>"+
                        "<th>Año</th>"+
                        "<th>Indicador</th>"+
                    "</tr>";
    arr.forEach(element => {
        htmlCode=htmlCode+ "<tr>"+
        "<td>"+element[0]+"</td>"

        if(element[1]===""){
        htmlCode=htmlCode+  "<td>"+"-"+"</td>"+
            "</tr>";
        }
        else {
        htmlCode=htmlCode+  "<td>"+element[1]+"</td>"+
            "</tr>";
        } 
    });
    document.getElementById("tableIndicator").innerHTML=htmlCode;      
}

//Conecta el botón A-Z para que ordene
const orderIndicator=document.getElementById("order-button").addEventListener("click",()=> {
     
    organizedIndicators=orderData(Indicators);
    selectIndicators.innerHTML="";

    fillList(organizedIndicators,"selectIndicators")
    })

//Conecta el botón "ver indicador" para que muestre la tabla de los indicadores, esconde las primeras pantallas 
const showIndicatorValue=document.getElementById("indicator-button").addEventListener("click", ()=> {    updateSelection();//actualiza las variables que guarda la selección del usuario
    let actualIndexIndicator=updateIndexIndicator(actualIndicator);
    let arrayData=updateIndicatorData(actualCountry,actualIndexIndicator);
    fillTable(arrayData);//dibuja tabla
    document.getElementById("tableIndicator").style.display = "block"; // hace visible el select de indicadores    
    document.getElementById("tableScreen").style.display="block"
    document.getElementById("index").style.display="none";
    document.getElementById("definition").style.display="none";
    document.getElementById("indicators").style.display="none";
})
//Lo de abajo ya no es necesario  
//selectIndicators.addEventListener("click", ()=>{
//    updateSelection();
  //  let actualIndexIndicator=updateIndexIndicator(actualIndicator);
    //let arrayData=updateIndicatorData(actualCountry,actualIndexIndicator);
//    fillTable(arrayData);//dibuja tabla
  //  fillStats(arrayData); //agrega estadisticas
//})

//Conecta el botón "promedio" y muestra el valor, esconde las primeras pantallas 
const showStats=document.getElementById("average-button").addEventListener("click", ()=> {
    updateSelection();//actualiza las variables que guarda la selección del usuario
    let actualIndexIndicator=updateIndexIndicator(actualIndicator);
    let arrayData=updateIndicatorData(actualCountry,actualIndexIndicator);
    fillStats(arrayData);//dibuja tabla
    document.getElementById("showDataScreen").style.display="block" // hace visible el select de indicadores    
    document.getElementById("tableScreen").style.display="block"
    document.getElementById("index").style.display="none";
    document.getElementById("definition").style.display="none";
    document.getElementById("indicators").style.display="none";
})

//Genera codigo para agregar Stats
const fillStats=(arr)=>{
  document.getElementById("idStats").innerHTML= "<p> <strong>Promedio: </strong>"+computeMean(arr)+"</p>"
 }
  //+
    //                                                "<p> <strong>Mediana: </strong>"+computeMedian(arr)+"</p>"+
      //                                              "<p> <strong>Maximo: </strong>"+computeMax(arr)+"</p>"+
        //                                            "<p> <strong>Minimo: </strong>"+computeMin(arr)+"</p>"; 
//

//Empieza manejo de visualizar y ocultar pantallas
//Llama al div de incio y definición y ocultar el de indicadores
const enterInitialPage=()=> {
    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
    document.getElementById("tableScreen").style.display="none";
  }
  
 //Regresa a pantalla de incio 
  const returnToInitialPage=document.getElementById("welcome-page1").addEventListener("click",()=> {
    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
    document.getElementById("tableScreen").style.display="none";
  })
 
  //Regresar a segunda pantalla
  const returnToSecondPage=document.getElementById("welcome-page2").addEventListener("click",()=> {
    document.getElementById("index").style.display="block";
    document.getElementById("definition").style.display="block";
    document.getElementById("indicators").style.display="none";
    document.getElementById("tableScreen").style.display="none";
  }) 
  //Llama al div de indicadores y ocultar el de inicio y definición
  const enterIndicators=document.getElementById("indicators-pages").addEventListener("click", () =>{
    document.getElementById("index").style.display="none";
    document.getElementById("definition").style.display="none";
    document.getElementById("indicators").style.display="block";
    document.getElementById("showDataScreen").style.display="none";
   
  })





  window.onload= enterInitialPage
  







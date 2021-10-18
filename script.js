
 var contador=1;
 var bandera=1;
 
 
 
 var btnAvanzar=document.getElementById("btnNext");
 btnAvanzar.addEventListener('click', avanzar);
 btnAvanzar.addEventListener('click', posicion_scrum);
 
 var btnRetroceso = document.getElementById("btnPrevious");
 btnRetroceso.addEventListener('click', retroceder);
 btnRetroceso.addEventListener('click', posicion_scrum);
 
 var btnMenu = document.getElementById("iconMenu");
 btnMenu.addEventListener('click', alternar);

 var MenuDesplegable = document.getElementById("menu");

 var botonesMenu = document.getElementsByClassName('btnMenu');

 window.onresize= hiddenMenu;

 for(var i=0; i<=botonesMenu.length-1; i++){
     botonesMenu[i].addEventListener('click',hiddenMenu);
    }
    
function avanzar(){
       /* console.log(contador); */
       alternardiv();
        contador=contador+1;
        /* console.log(contador); */
        alternardiv();
        /* window.location.hash = "seccion_3"; */
     
     btnRetroceso.classList.remove('hidden');
     if(contador==3){
         btnAvanzar.classList.add('hidden');
        }
    }
    
 function retroceder(){
     /* console.log(contador); */
    alternardiv();
    contador=contador-1;
    /* console.log(contador); */
    alternardiv();

    /* window.location.hash = "seccion_3"; */
    
    if(contador==1){
        btnRetroceso.classList.add('hidden');
    }if(contador==2){
        btnAvanzar.classList.remove('hidden');
    }
}

function alternardiv(){
    var contPunto ='punto'+contador;
    var mostrado = document.getElementById(contador);
    var enfasis = document.getElementById(contPunto);
   /*  mostrado.classList.toggle('row'); */
    mostrado.classList.toggle('hidden');
    enfasis.classList.toggle('enfasis');
}

function alternar(){
if(bandera%2!=0){
    MenuDesplegable.style.display ='block';
    bandera++;
}
else{
    MenuDesplegable.style.display='none';
    bandera++;}
}

function hiddenMenu(){
    bandera=1;
    var windowWidth = window.innerWidth;
    if(windowWidth<=820){
        MenuDesplegable.style.display='none';        
    }
    else
    MenuDesplegable.style.display='block';
}

function posicion_scrum(){
    /* window.location.hash = "seccion_3"; */
    document.getElementById('seccion_3').scrollIntoView();
}
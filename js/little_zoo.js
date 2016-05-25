$(document).on("ready",function(){
  $("#carrusel").owlCarousel({
    autoPlay: true,
    pagination: false
  });
  lightbox.option({
      albumLabel: "Imagen %1 de %2" 
    })
});

function roberto(){
  texto = prompt('metele texto a esta vaina:');
  alert('lo que escribiste fue: '+texto);
  alert('lo que escribiste tiene '+texto.length+' letras')
};


var img_actual = 1;
function mover_imagen(movimiento){
  if (img_actual == 1 && movimiento == 'atras'|| img_actual == 3 && movimiento == 'adelante'){
    alert('No hay imagenes para mostrar');
  }
  if (img_actual == 1 && movimiento == 'adelante'){
    valor_nuevo_img_actual = 2;
    document.getElementById('cualquier').src = 'img/supa.jpg'
  }
  if (img_actual == 2 && movimiento == 'adelante'){
    valor_nuevo_img_actual = 3;
    document.getElementById('cualquier').src = 'img/con_randy_and_kan.jpg'
  }
  if (img_actual == 3 && movimiento == 'atras'){
    valor_nuevo_img_actual = 2;
    document.getElementById('cualquier').src = 'img/supa.jpg'
  }
  if (img_actual == 2 && movimiento == 'atras'){
  valor_nuevo_img_actual = 1;
  document.getElementById('cualquier').src = 'img/galeria_1.jpg'
  };
  img_actual = valor_nuevo_img_actual;
};

function escoger(){
  document.childNodes[0].childNodes[2].style.background ='black';
  alert('Escogere el nombre de document '+document.nodeName);
  alert('Escogere el valor de document ' + document.nodeValue);
  alert('Cuantos hijos tiene document ' + document.children.length);
  alert('Como se llama el hijo de document ' + document.childNodes[0].nodeName);
  alert('Como se llama el hijo numero 2 de html ' + document.childNodes[0].childNodes[1].nodeName);
  alert('Que valor tiene el hijo numero 2 de html ' + document.childNodes[0].childNodes[1].nodeValue);
  alert('Cuantos hijos tiene html ' + document.childNodes[0].children.length);
  alert('Como se llama el hijo numero 2 de html ' + document.childNodes[0].childNodes[0].nodeName);
  alert('Como se llama el hijo numero 2 de html ' + document.childNodes[0].childNodes[2].nodeName);
    document.write('<p> Nombre del primer hijo de Body ' + document.childNodes[0].childNodes[2].childNodes[0].nodeName+'</p>');
  document.write('<p> Cuantos hijos tiene body '+ document.childNodes[0].childNodes[2].children.length+'</p>');
};

function elegir_color(){
  var color = prompt('¿Que color quieres el background?');
  document.childNodes[1].childNodes[2].style.background= color;
};
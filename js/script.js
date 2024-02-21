 //-Volume audio
 var audio = document.getElementById("myaudio");
 audio.volume = 0.2;

 //mudança de tamanho
 function mudouTamanho() {
     if (window.innerWidth >= 768) {
         menu_itens.style.display = 'block'
     } else {
         menu_itens.style.display = 'none'
     }
 }
 //Menu burguer
 function clickMenu() {
     if (menu_itens.style.display == 'block') {
         menu_itens.style.display = 'none'
     } else {
         menu_itens.style.display = 'block'
     }
 }
/*DESCRIZIONE:
- Griglia 6x6,
- ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
- Se il num ritornato è <= 5 il quadrato diventa giallo,
- se è > di 5 il quadrato diventa verde.
- Il numero ottenuto appare al centro del quadrato

NOTE:
la griglia per la richiesta base è statica, quindi scritta a mano da me in html;
come sempre i bonus vanno in sottocartelle. */

$( document ).ready(function() {
    console.log( "ready!" );

    /* ------ CLICK ----- */
    $('.quadrato').click( //ad ogni click (su ogni rettangolino)...
      function(){

        var $this = $(this); //this non è riconosciuto all'interno della chiamata quindi bisogna assegnare una var fuori per poi riprenderla nella chiamata
        var $pNum = $('.num', this);

        /* ------ CHIAMATA AJAX ----- */
        $.ajax({ //...parte una richiesta AJAX...

          url: 'https://flynn.boolean.careers/exercises/api/random/int', // ...che prende un numero random da 1 a 9 ...

          success: function(data,stato){
            var responseNumRandom = data.response;
            console.log(responseNumRandom);

            if (responseNumRandom <= 5) { // ..Se il num ritornato è <= 5
              $this.css({ "background": "#FFEB3B"}); // ...il quadrato diventa giallo, ...
            } else {
              $this.css({ "background": "#8bc34a"}); // ...se è > di 5 il quadrato diventa verde. ...
            }

            $pNum.html(responseNumRandom); // ...Il numero ottenuto appare al centro del quadrato.
          },

          error: function(richiesta,stato,error){
            $pNum.html('OPS! Qualcosa è andato storto: ' + error);
          },
        });
        /* ------ / CHIAMATA AJAX ----- */


    });



});

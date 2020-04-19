/*
BONUS: (ma solo se il resto è fatto)
- se utente clicca 2 volte sullo stesso rettangolo lo mando a ca… gli dico che non si può;
- generare dinamicamente la griglia dei quadrati;
- Curo per bene l’output, creando un layout carino;
varie che vi vengono in mente per sperimentare;*/

$( document ).ready(function() {
    console.log( "ready!" );

    function popUpFade(){
      $('.gia-cliccato').fadeOut()
    }


    /* ------ CLICK ----- */
    $('.quadrato').click( //ad ogni click (su ogni rettangolino)...
      function(){

        var $this = $(this); //this non è riconosciuto all'interno della chiamata quindi bisogna assegnare una var fuori per poi riprenderla nella chiamata
        var $pNum = $('.num', this);

        /* ------- ISTRUZIONE CONDIZIONALE IN CASO DI DOPPIO CLICK ------ */
        if ($this.attr('statusClick') === 'clicked') {

          $this.append('<div class="gia-cliccato"><p>Gia Cliccato!</p></div>');
          $this.css({ "position": "relative"})
          $('.gia-cliccato', this).show()

          setTimeout(popUpFade, 1000)

        } else {

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


          $this.attr('statusClick', 'clicked'); // aggiunta attr per istruzione condizionale

        } // fine else


    }); // fine click



});

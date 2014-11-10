$('#Playfield').on("click",".card.down", function(event){	
   $(this).addClass('card-flip').removeClass('down').addClass('up');
      if($('.card.up').length==2){
       	var cardsUp=document.getElementsByClassName('up');
       	if(cardsUp[0].getAttribute('data-face')==cardsUp[1].getAttribute('data-face')){
       		$('.card.up').removeClass('up').addClass('persist').removeClass('card-flip');
       	}
       	else{
       		setTimeout(function(){
       		$('.card.up').removeClass('up').addClass('down').removeClass('card-flip');
       	}, 1000);
       	}
       }    
});



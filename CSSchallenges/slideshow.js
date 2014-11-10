var cons = 0;
var timeoutID;
var direction=false;
var element=document.getElementById("carousel");
var pictures = document.getElementById('carousel').getElementsByTagName('li');
var selection=document.getElementById('selection');
var automatic=document.getElementById('automatic');
var previous=document.getElementById('previous');
var next=document.getElementById('next');

previous.addEventListener('click', function(){direction=true;
	makeTransition();}, false);
next.addEventListener('click', function(){direction=false;makeTransition();}, false);
selection.addEventListener('change', slideShow, false);
automatic.addEventListener('click', slideShow, false);

function slideShow(){	
	if(selection.selectedIndex==1){
		element.className='fade';
	}
	if(selection.selectedIndex==2){
		element.className='blind';
	}
	if(selection.selectedIndex==3){
		element.className='drawer';
	}
	if(timeoutID!=undefined){
		clearInterval(timeoutID);
	}
	if(automatic.checked){
		if(element.className==undefined){
			element.className='fade';
		}
		timeoutID=setInterval(makeTransition, 3000);
	}
}

function makeTransition(){
	if(element.className==""){
			element.className='fade';
		}
		if(direction==false){
			cons++;
			if(cons >= pictures.length){
  				cons = 0;		
 				}
		}
		if(direction==true){
			cons-=1;
			if(cons<0){cons=pictures.length-1;};
						
			
		}
	
for(var n=cons; n <= pictures.length; n++){	
console.log(cons);	
 pictures[n].className = 'selected';
 for(var i = 0; i<pictures.length; i++){
  if(i!=cons){
  pictures[i].className = 'noselected';
  }		
 }
 							
  break;
 }	

}





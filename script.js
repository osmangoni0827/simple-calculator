const buttons= document.getElementById('allbuttons');
var output,previuseValu,NewValue;

buttons.addEventListener('click',function(e){
  output=document.getElementById('input');
  previuseValu=output.value;
  NewValue=e.target.innerText;
  if(NewValue=='C')
  {
      output.value='';
  }
  else if(NewValue=='=')
  {
      output.value=eval(output.value);
  }
  else
  {
      output.value=previuseValu+NewValue;
  }
})

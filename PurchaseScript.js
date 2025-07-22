fields = document.querySelectorAll(".txtinp");
sbmt = document.querySelector("#sbmt");
msg = document.querySelector("#msg")
function onSubmit(e){
  e.preventDefault();
  let flag = true
  for(field of fields)
    if(field.value==""){
      flag = false
      break
    }
  if(flag){
    msg.style=`
    background-color: darkgreen;
    color: white;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    `
      msg.textContent=`Thank you ${fields[0].value}! Your order for\
    1984, by George Orwell, has been placed.`
  }
  else{
    window.alert("All fields must be complete")
  }
};
sbmt.addEventListener("click", onSubmit);
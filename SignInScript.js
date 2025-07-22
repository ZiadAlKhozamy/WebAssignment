fields = document.querySelectorAll(".txtinp")
document.querySelector("#sbmt").addEventListener("click", onSubmit)
function onSubmit(e){
  e.preventDefault()
  if(fields[0].value!="" || fields[6].value!="")
    window.alert("Welcome back, " + fields[0].value)
  else{
    window.alert("Name and Password must not be empty")
  }
}
/*---------Month--------*/


let p=new Date();
let b=p.getMonth();
document.write("<br>")
if(0<=b && b<=3){
  document.write("Spring")
  document.write("<br>")
}
else if(4<=b && b<=7){
  document.write("Summer")
  document.write("<br>")
}
else if(8<=b && b<=11){
  document.write("Winter")
  document.write("<br>")
}
else{
   document.write("ERROR")
}
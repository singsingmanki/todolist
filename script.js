
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);



function myFunction() {



  let para = document.createElement("div");

  let name1 = document.getElementById("lname").value

  let name2 = document.getElementById("2name").value

  para.innerText = name1 + "\n" + name2

  
  

 
     document.getElementById("xyz").appendChild(para);


     
para.addEventListener("click", removeFunction);

function removeFunction(){
  document.getElementById("xyz").removeChild(para);
}


  

}


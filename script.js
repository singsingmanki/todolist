

const element = document.getElementById("myBtn");



element.addEventListener("click", myFunction);



function myFunction() {



  let button = document.createElement("button")
  button.classList.add("button")
  button.innerText = "X"


  let para = document.createElement("div");
  para.classList.add("my");


  let name1 = document.getElementById("lname").value


  let name2 = document.getElementById("2name").value  
  
  
  para.innerText = name1 + "\n" + name2
  
  

 if(name1 != 0){
     document.getElementById("xyz").appendChild(para).appendChild(button)
 } 

     
button.addEventListener("click", removeFunction);

function removeFunction(){
  document.getElementById("xyz").removeChild(para);
}


  

}


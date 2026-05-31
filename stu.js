var in1=document.getElementById("name")
var in2=document.getElementById("age")
var in3=document.getElementById("gender")
var in4=document.getElementById("course")
var in5=document.getElementById("email")
var btn1=document.getElementById("btn1")


var input1=document.getElementById("input1")
var input2=document.getElementById("input2")
var input3=document.getElementById("input3")
var input4=document.getElementById("input4")
var input5=document.getElementById("input5")


var body=document.getElementById("body")


btn1.addEventListener("click",function(){
    var row=document.createElement("tr")
    body.appendChild(row)

    var td1=document.createElement("td")
    td1.textContent=in1.value
    row.appendChild(td1)
    in1.value=""

    var td1=document.createElement("td")
    td1.textContent=in2.value
    row.appendChild(td1)
    in2.value=""

    var td1=document.createElement("td")
    td1.textContent=in3.value
    row.appendChild(td1)
   document.querySelector(".male").checked=false
   document.querySelector(".female").checked=false
    
    

    var td1=document.createElement("td")
    td1.textContent=in4.value
    row.appendChild(td1)
    in4.value=""


    var td1=document.createElement("td")
    td1.textContent=in5.value
    row.appendChild(td1)
    in5.value=""


    var td1=document.createElement("td")
    var btn2=document.createElement("Button")
    btn2.textContent="Delete"
    td1.appendChild(btn2)
    row.appendChild(td1)
   btn2.style.backgroundColor="red"
   btn2.style.color="white"
   btn2.style.width="100%"
   btn2.style.textAlign="center"
   btn2.style.cursor="pointer"
   btn2.style.border="none"
   btn2.addEventListener("click",function(){

    row.remove()
})
})






const input = document.querySelector("#text")
const ul = document.querySelector(".list")
const button = document.querySelector("#btn")
const done = document.querySelector(".divdone")
// const uldone = document.querySelector(".uldone")
// const deleteButtons = document.querySelectorAll('#edit');




button.addEventListener('click', function () {
    const text = input.value
//     const divbut= document.createElementNS("div")
// const divbutclass=document.setAttribute("class")
// divbutclass.value="divbut"
// divbut.setAttributeNode(divbut)
    const div = document.createElement("div")
    const lid = document.createAttribute("class")
    lid.value = "divli"
    div.setAttributeNode(lid)
    const span = document.createElement('span')

    const aa = document.createAttribute("contentEditable")
    span.setAttributeNode(aa)
    span.innerHTML = text
    div.append(span)
    const btundone=document.createElement("button")
    const classdone=document.createAttribute("class")
    classdone.value="buttondone"
    btundone.setAttributeNode(classdone)
    btundone.innerHTML="done ✔"
    const btun = document.createElement("button")
    const btunc = document.createAttribute("class")
    btunc.value = "butrem"
    btun.setAttributeNode(btunc)
    btun.innerHTML = "removeX"
    input.value = ""
    btun.addEventListener('click', function () {
        span.remove()
        btun.remove()
        btundone.remove()





    })

    div.append(btun)
    ul.append(div)
    div.append(btundone)


    btundone.addEventListener('click', function () {
        done.append(div)
        // console.log(div)
        


        // div.style.color = "green"
        // div.style.textDecoration = "line-through"

    })
    // div.addEventListener('dblclick',function(){
    //     div.style.color = "black"
    //     div.style.textDecoration = "none"

    // })




    //     deleteButtons.forEach( button => {
    //         button.addEventListener('click', removeMe); // add the event listener to each button
    //       });

    //       function removeMe() {
    //          this.closest(ul).remove(); // this is the button, from there you want to move up in DOM and find the closes <li> to remove
    //       }


})


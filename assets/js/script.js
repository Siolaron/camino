
/* --------------------------------------------------------------------------------------------
                                      FUNCTIONS
-------------------------------------------------------------------------------------------- */

console.log(localStorage.element_view1,localStorage.element_view2,localStorage.element_view3)
console.log(localStorage.element_view1_checked,localStorage.element_view2_checked,localStorage.element_view3_checked)

let toggles = document.querySelectorAll('#element_view')

toggles.forEach(toggle =>{
    toggle.addEventListener('change',viewElement)
})

function viewElement(e){
    if(e.target.checked){
        localStorage.setItem(e.target.name+'_checked','checked')
        localStorage.setItem(e.target.name,e.target.parentElement.parentElement[0].value)
    }else{
        if(e.target.name === 'element_view1'){
            console.log('test2')
            localStorage.removeItem(e.target.name+'_checked')
        }
        if(e.target.name === 'element_view2'){
            console.log('test')
            localStorage.removeItem(e.target.name+'_checked')
        }
        if(e.target.name === 'element_view3'){
            localStorage.removeItem(e.target.name+'_checked')
        }
    }
}

let element1 = document.querySelector('.element1')
let element2 = document.querySelector('.element2')
let element3 = document.querySelector('.element3')

let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')

/*
    Create element on load
 */
window.addEventListener("load",function (){

    if(localStorage.element_view1_checked === "checked"){
        if(document.querySelector('[name="element_view1"]'))
            document.querySelector('[name="element_view1"]').checked = true;
    }else{
        if(document.querySelector('.element1'))
            document.querySelector('.element1').style.display = "none"
    }

    if(localStorage.element_view2_checked === "checked"){
        if(document.querySelector('[name="element_view2"]'))
            document.querySelector('[name="element_view2"]').checked = true;
    }else{
        if(document.querySelector('.element2'))
            document.querySelector('.element2').style.display = "none"
    }

    if(localStorage.element_view3_checked === "checked"){
        if(document.querySelector('[name="element_view3"]'))
            document.querySelector('[name="element_view3"]').checked = true;
    }else{
        if(document.querySelector('.element3'))
            document.querySelector('.element3').style.display = "none"
    }

    if(document.querySelector('[name="element_name1"]'))
        document.querySelector('[name="element_name1"]').value = localStorage.element_view1

    if(document.querySelector('[name="element_name2"]'))
        document.querySelector('[name="element_name2"]').value = localStorage.element_view2

    if(document.querySelector('[name="element_name3"]'))
        document.querySelector('[name="element_name3"]').value = localStorage.element_view3

    p1.textContent = localStorage.element_view1
    element1.appendChild(p1)

    p2.textContent = localStorage.element_view2
    element2.appendChild(p2)

    p3.textContent = localStorage.element_view3
    element3.appendChild(p3)

})

/*
    Refresh element when it change in storage
 */
window.addEventListener("storage",function (){
    element1.textContent=""
    element2.textContent=""
    element3.textContent=""

    if(localStorage.element_view1_checked === "checked"){
        if(document.querySelector('.element1'))
            document.querySelector('.element1').style.display = ""
    }else{
        if(document.querySelector('.element1'))
            document.querySelector('.element1').style.display = "none"
    }

    if(localStorage.element_view2_checked === "checked"){
        if(document.querySelector('.element2'))
            document.querySelector('.element2').style.display = ""
    }else{
        if(document.querySelector('.element2'))
            document.querySelector('.element2').style.display = "none"
    }

    if(localStorage.element_view3_checked === "checked"){
        if(document.querySelector('.element3'))
            document.querySelector('.element3').style.display = ""
    }else{
        if(document.querySelector('.element3'))
            document.querySelector('.element3').style.display = "none"
    }

    p1.textContent = localStorage.element_view1
    element1.appendChild(p1)

    p2.textContent = localStorage.element_view2
    element2.appendChild(p2)

    p3.textContent = localStorage.element_view3
    element3.appendChild(p3)

})
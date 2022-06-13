
/* --------------------------------------------------------------------------------------------
                                      FUNCTIONS
-------------------------------------------------------------------------------------------- */

/*
    Select different elements
 */
let element1 = document.querySelector('.item1')
let element2 = document.querySelector('.item2')
let element3 = document.querySelector('.item3')

let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')

let toggles = document.querySelectorAll('#element_view')

toggles.forEach(toggle =>{
    toggle.addEventListener('change',viewElement)
})

/*
    Function to display element on index
 */
function viewElement(e){
    if(e.target.checked){
        localStorage.setItem(e.target.name+'_checked','checked')
        localStorage.setItem(e.target.parentElement.parentElement[0].name,e.target.parentElement.parentElement[0].value)
    }else{
        if(e.target.name === 'item1_check'){
            localStorage.removeItem(e.target.name+'_checked')
        }
        if(e.target.name === 'item2_check'){
            localStorage.removeItem(e.target.name+'_checked')
        }
        if(e.target.name === 'item3_check'){
            localStorage.removeItem(e.target.name+'_checked')
        }
    }
}

/*
* Create element on index
*/
function createElementIndex(){
    p1.textContent = localStorage.item1_name
    element1.appendChild(p1)

    p2.textContent = localStorage.item2_name
    element2.appendChild(p2)

    p3.textContent = localStorage.item3_name
    element3.appendChild(p3)
}

/*
* Display element on Index
*/
function displayItemIndex(){

    if(document.querySelector('.item1')){
        if(localStorage.item1_check_checked === "checked"){
            document.querySelector('.item1').style.display = ""
        }else{
            document.querySelector('.item1').style.display = "none"
        }
    }

    if(document.querySelector('.item2')){
        if(localStorage.item2_check_checked === "checked"){
            document.querySelector('.item2').style.display = ""
        }else{
            document.querySelector('.item2').style.display = "none"
        }
    }

    if(document.querySelector('.item3')){
        if(localStorage.item3_check_checked === "checked"){
            document.querySelector('.item3').style.display = ""
        }else{
            document.querySelector('.item3').style.display = "none"
        }
    }
}

/*
    Create element on load
 */
window.addEventListener("load",function (){

    /*
        This line is for dashboard value form
     */
    if(localStorage.item1_check_checked === "checked"){
        if(document.querySelector('[name="item1_check"]'))
            document.querySelector('[name="item1_check"]').checked = true;
    }

    if(localStorage.item2_check_checked === "checked"){
        if(document.querySelector('[name="item2_check"]'))
            document.querySelector('[name="item2_check"]').checked = true;
    }

    if(localStorage.item3_check_checked === "checked"){
        if(document.querySelector('[name="item3_check"]'))
            document.querySelector('[name="item3_check"]').checked = true;
    }

    if(document.querySelector('[name="item1_name"]'))
        document.querySelector('[name="item1_name"]').value = localStorage.item1_name

    if(document.querySelector('[name="item2_name"]'))
        document.querySelector('[name="item2_name"]').value = localStorage.item2_name

    if(document.querySelector('[name="item3_name"]'))
        document.querySelector('[name="item3_name"]').value = localStorage.item3_name

    /*
        This line is for Index
     */
    createElementIndex()
    displayItemIndex()

})

/*
    Refresh element when it change in storage
 */
window.addEventListener("storage",function (){
    /*
        This line is for refresh automatically index
    */
    element1.textContent=""
    element2.textContent=""
    element3.textContent=""

    displayItemIndex()
    createElementIndex()

})
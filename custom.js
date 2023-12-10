var inputField = document.querySelector('.inputfield');
var subButton = document.querySelector(".subbtn");
var delButton = document.querySelector(".delbtn");
var addContent = document.querySelector('.addcont');
var text = document.querySelector(".text")

subButton.addEventListener('click', function (e) {
    text.innerHTML = "Add Items";
    setTimeout(() => {
        text.innerHTML = "";
        inputField.value = "";
    }, 2000);

    var doc = document.createElement("p");
    var spa = document.createElement("input");
    spa.toggleAttribute("readonly");
    spa.setAttribute("type","text");
    spa.setAttribute("size","60");
   
    var edit = document.createElement('button');
    var del = document.createElement('button');
    // if (!inputField.value) {
    //     doc.innerHTML = "";
    // }
    spa.value = inputField.value;
    edit.innerHTML = "Edit";
    edit.style.position = "absolute";
    del.style.position = "absolute";
    
    del.innerHTML = "Delete";
    edit.addEventListener("click", function () {
            // inputField.value = spa.value;
            spa.toggleAttribute("readonly");
    })
    
    
    del.addEventListener("click", function () {
        doc.innerHTML = "";
        doc.style.border = "0px solid #000";
        doc.style.padding = "0px";
    })
    doc.append(spa);
    doc.append(edit);
    doc.append(del);
if(inputField.value === ""){
    spa.innerHTML = "";
    doc.innerHTML = "";
    doc.style.border = "0px solid #000";
        doc.style.padding = "0px";
}
    addContent.append(doc);
})
delButton.addEventListener('click', function () {
    text.innerHTML = "Delete All Items";
    setTimeout(() => {
        text.innerHTML = "";
    }, 2000);
    addContent.innerHTML = "";
})

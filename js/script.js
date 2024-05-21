var siteNameInput= document.getElementById('bookmarkName')
var siteUrlInput= document.getElementById('bookmarkURL')
var submitBtn= document.getElementById('submitBtn')
var bookMarkList=[];


if(localStorage.getItem("productsContainer")!== null){
    bookMarkList=JSON.parse(localStorage.getItem("productsContainer"))
    displayData()
}

submitBtn.onclick=submit;

function submit(){
   
   if(validationName()==true && validationUrl()==true){
    var bookMark={
        ///// in obj اللي بتتكتبvalue بيخزن ال  
            name:siteNameInput.value,
            url:siteUrlInput.value,
     
        }
        bookMarkList.push(bookMark)
        localStorage.setItem("productsContainer",JSON.stringify( bookMarkList))
        displayData()
         clearForm();  
        console.log(bookMarkList);


  }
      
   }
   


    
function clearForm(){
    siteNameInput.value=null;
    siteUrlInput.value=null;
    siteNameInput.classList.remove('is-valid')
    siteUrlInput.classList.remove('is-valid')
    
}

function displayData(){
    var cartona ="";
    for(var i=0 ; i<bookMarkList.length ; i++){
cartona+=`<tr>
<td>${i+1}</td>
<td>${bookMarkList[i].name}</td>

<td>
  <button onclick=document.location='${bookMarkList[i].url}' class="btn btn-visit"><i class="fa-solid fa-eye"></i> Visit</button>
</td>
<td> 
  <button onclick="deleteitem(${i})" class="btn btn-delete "><i class="fa-solid fa-trash"></i> Delete</button>
</td>
</tr> `
    }

    document.getElementById('tableContent').innerHTML=cartona;
   
}

function deleteitem(indexItem){
    bookMarkList.splice(indexItem ,1)
    localStorage.setItem("productsContainer",JSON.stringify( bookMarkList))
    displayData()
    console.log(bookMarkList);
}

function validationName(){
    var text =siteNameInput.value
    var regex=/^[a-zA-Z0-9]{3,}[ a-zA-Z0-9]{0,}$/
    var msgNmmeElement=document.getElementById('msgName')
     
    if(regex.test(text)== true){
        siteNameInput.classList.add("is-valid")
        siteNameInput.classList.remove("is-invalid")
        msgNmmeElement.classList.add('d-none')
        return true;
    }else{
        siteNameInput.classList.add("is-invalid") 
        siteNameInput.classList.remove("is-valid")
        msgNmmeElement.classList.remove('d-none')
        return false
    }

    
}

function validationUrl() {
    var url=siteUrlInput.value
    // var regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/;
    var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    var msgUrlElement=document.getElementById('msgUrl')
    if(regex.test(url)== true){
        siteUrlInput.classList.add("is-valid")
        siteUrlInput.classList.remove("is-invalid")
        msgUrlElement.classList.add('d-none')
        return true
    }else{
        siteUrlInput.classList.add("is-invalid") 
        siteUrlInput.classList.remove("is-valid") 
        msgUrlElement.classList.remove('d-none')
        return false
    }
   
}

  




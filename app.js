/*============================================================================================
Requerment :
create a Project that project take input as your book list and show your given book list
there have three input filed such as Title, Authir, Year and one submit button
==============================================================================================*/

/*==============================================================================================
Steps :
1.DOM Selection
2.Add Event Listener
3.Basic Validation
4.creating Element
5.Append Element
==============================================================================================*/

// STEP : 1
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const btn = document.getElementById("btn");
const bookList = document.getElementById("book_list");

// STEP : 2 ,3 ,4 , 5

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Please Fill the Input Field");
    }else{
        const newRow = document.createElement("tr");

        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle);
        title.value = "";

    
        
        const newAuthor= document.createElement("th");
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor);
        author.value = "";

        
        const newYear = document.createElement("th");
        newYear.innerHTML = year.value
        newRow.appendChild(newYear);
        bookList.appendChild(newRow);
        year.value = ""

    }
})

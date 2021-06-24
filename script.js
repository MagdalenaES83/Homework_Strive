/*


//my previous try :(((((((((((())))))))))))

// fetch and display first book 
const request = new XMLHttpRequest();
request.open("GET", ' https://striveschool-api.herokuapp.com/books' );
request.send();

request.addEventListener("load",function(){
    // tu tlumaczymy json na string 
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //request(data);

const html = ` <article class="book">
<div class="card" style="width: 18rem;">
  <img class="book__img" src="${data.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="book_name">${data.title}</h3>
    <p class="book__row"><span>Category: ${data.category}</span></p>
           
            <p class="book__row"><span>Price: ${data.price}💰 £</span></p>
            <p class="card-text"><span>🗣️</span>description </p>
    <a href="#" class="btn btn-primary">Click and Buy </a>
  </div>
</div>
        </article> `;
    

bookContainer.insertAdjacentHTML('beforeend', html);            
bookContainer.style.opacity = 1; 

});
*/
let bookList



const requestBook = async () => {
    try{
        let response = await fetch("https://striveschool-api.herokuapp.com/books")
        let dataSearched = await response.json()
        return dataSearched
    } catch (e){
        return e
    }
}

const getProduct = async () => {
        let data = await requestBook()    
        
        bookList = data
        displayBooks()
}

window.onload = () => {
getProduct()
}


function productHTML(category, img, price, title, asin){
    return`<div class="col">
                <div class="card">
                     <img src="${img}" class="card-img-top img-fluid " alt="...">
                     <span  ">${category}</span>
                    <div class="card-body">
                         <h5 class="card-title">Title: ${title}</h5>
                         <p class="card-text" value="${price}" data="${asin}">💰£ ${price}</p>
                         <div class="d-flex justify-content-between">
                         <a href="#" class="btn btn-primary">buy it</a>
                        </div>
                    </div>
                </div>
            </div>` 
        }
        // <button class="btn btn-outline" onclick="hide(event)>Hide</button>


function displayBooks(){
    let section = document.querySelectorAll('.book-section')

    bookList.forEach(book => {
        section[0].insertAdjacentHTML('beforeend', `${productHTML(book.category, book.img, book.price, book.title, book.asin)}`)
        
    });
    
}

















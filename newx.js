console.log("we are going to start news")
// 40264a1eb1424833b200172b192c4aa1
// Initialize the news parameter
let source = 'bbc-news';
let apiKey = '40264a1eb1424833b200172b192c4aa1';
let newsAccordion = document.getElementById("accordiannews");
// Create an ajax get request 
const xhr = new XMLHttpRequest();
xhr.open('GET', `json.txt`, true);
// this is for post xhr.getAllResponseHeader('content-type', 'application/json');
//what to done when response is ready
xhr.onload = function () {
    if (this.status == 200) {
        //make a variabel for storing a string type variable in json and using json
        let json=JSON.parse(this.responseText);
        console.log(json);
        let articals=json.articles;
        // console.log(articals);
        let newshtml="";
        articals.forEach(function(element,index){
            
    
            
            let news = `<div class="newssearch card">
          <div class="card-header" id="heading${index}">
            <h5 class="mb-0">
              <button class="btn btn-link  " data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
               <b>Breaking News${index+1}: </b>${element["title"]}
              </button>
            </h5>
          </div>
      
          <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="accordiannews">
            <div class="card-body">
             ${element["content"]}.<a href="${element['url']} " target="_blank">read more</a>
            </div>
          </div>
        </div>`;
        newshtml+=news;});
accordiannews.innerHTML=newshtml;
        }
    
    else {
        console.log("some error occred ");
    }
}
xhr.send();
let searchi=document.getElementById('search');
searchi.addEventListener("input",function(){
  let inpcall=searchi.value;
  console.log(inpcall);
let newssearch1=document.getElementsByClassName('newssearch');
Array.from(newssearch1).forEach(function(element){
let cardtext=element.getElementsByTagName("button")[0].innerText;
console.log(cardtext);
if(cardtext.includes(inpcall)){
  element.style.display="block";

}
else{
  element.style.display="none";
}
})
});
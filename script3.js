var Tweet
function countCharacters(e) {                                    
  var textEntered, countRemaining, counter;          
  textEntered = document.getElementById('mytweet').value;  
  counter = (140 - (textEntered.length));
  countRemaining = document.getElementById('characters'); 
  countRemaining.textContent = counter + " characters remaining";       
}
Tweet = document.getElementById('mytweet');                   
Tweet.addEventListener('keyup', countCharacters, false);

let listofTweet = []

let addTweet = document.getElementById('input');

addTweet.addEventListener('click', function() {
  let Tweet = document.getElementById('mytweet');
  listofTweet.push({text: Tweet.value, isLiked: false});
  Tweet.value = ''
  updateTweet()
})

function updateTweet() {
    let html = " ";
    
    for(let i = 0; i < listofTweet.length; i++){

        html += `<li>${listofTweet[i].text} 
            <button onclick="copyTweet(${i})"> Retweet </button>
            <button onclick="toggleLike(${i})"> ${listofTweet[i].isLiked ? ' Unlike ' : ' Like '} </button> </li>`;
    }

    document.getElementById('show').innerHTML = html
}

function copyTweet(i){
    listofTweet.push(listofTweet[i]);
    updateTweet();
}

function toggleLike(i){
 
    listofTweet[i].isLiked = !listofTweet[i].isLiked;
    updateTweet();
}
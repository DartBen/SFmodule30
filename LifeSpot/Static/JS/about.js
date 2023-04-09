function addReview() {
    let review =  new Map();
    review.set("name", prompt("Пожалуйста, введите ваше имя"));
    review.set("comment", prompt("Введите коментарий"));
    review.set("date", new Date().toLocaleString());
    if ((review.get("name") == null) || (review.get("comment") == null)
        || review.get("name") == ""  || review.get("comment")=="")
    {
        return ;
    }
    postComment(review);
}

const postComment = review => {
    document.getElementsByClassName('reviews')[0].innerHTML +=
        '<div class="review-text">\n' +
            `<p> <i> <b>${review.get("name")}</b>  ${review.get("date")}</i></p>` +
            `<p>${review.get("comment")}</p>`  +
        '</div>';
}


function addComment() {
    let review = {};
    review.name = prompt("Пожалуйста, введите ваше имя");
    review.comment = prompt("Введите коментарий");
    review.date = new Date().toLocaleString();

    if ((review.name == null) || (review.comment == null)
        || review.name == ""  || review.comment=="")
    {
        return ;
    }
    else{
        console.log(review.date);
    }

    let likes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if(likes){
        let comment = Object.create(review)
        comment.rate = 0;
        postReview(comment)
    } else{
        postReview(review)
    }
}

const postReview = review => {
    let likeCounter = '';

    if(review.hasOwnProperty('rate')){
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + '<button id =“RANDOM_NUMBER” onclick=addLike(this.id)>❤️ 0</button>'
    }

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['name']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['comment']}</p>`  +
        '</div>';
}

function postCommnetByConstruct(){
    let review = new getReview();

    if ((review.name == null) || (review.comment == null)
        || review.name == ""  || review.comment=="")
    {
        return ;
    }
    else{
        console.log(review.date);
    }
    let likes = confirm('Разрешить пользователям оценивать ваш отзыв?')
    if(likes){
        let comment = Object.create(review)
        comment.rate = 0;
        postReview(comment)
    } else{
        postReview(review)
    }
}

function getReview(){

    this.name = prompt("Пожалуйста, введите ваше имя");
    this.comment = prompt("Введите коментарий");
    this.date = new Date().toLocaleString();
}

function addLike(id){
    let text = document.getElementById(id).innerText;
    let rate = 0;
    rate   =Number(text.substring(2));
    rate += 1;
    document.getElementById(id).innerText = '❤️ ' + rate;
}
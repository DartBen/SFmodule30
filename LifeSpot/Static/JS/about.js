

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

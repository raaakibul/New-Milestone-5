document.getElementById('post-button').addEventListener('click', function(){
    // console.log('clicked');
    const comment = document.getElementById('new-comment');
    // console.log(comment.value);
    const userComment = comment.value;
    
    const p = document.createElement('p');
    p.innerText = userComment;

    // append 
    const commentContainer = document.getElementById('comment-container');
    
    commentContainer.appendChild(p);
    comment.value = '';

})
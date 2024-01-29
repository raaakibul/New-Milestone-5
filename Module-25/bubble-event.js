document.getElementById('second-item').addEventListener('click', function(event){
    console.log("second-item clicked");
    event.stopPropagation();
})
// ul

document.getElementById('list-container').addEventListener('click', function(){
    console.log("object");
})
// section 

document.getElementById('section-container').addEventListener('click', function(){
    console.log("Section clicked");
})


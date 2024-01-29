document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = 'none';
})

//focus
document.getElementById('delete-confirm').addEventListener('focus', function(){
    // console.log("object is deleted");
    document.body.style.backgroundColor = 'lightcoral';
})

// blur 

document.getElementById('delete-confirm').addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white';
})

// keydown
// document.getElementById('delete-confirm').addEventListener('keydown', function(){
//     // console.log("object");
//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value); 
// })

//keypress 
document.getElementById('delete-confirm').addEventListener('keypress', function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value); 
})
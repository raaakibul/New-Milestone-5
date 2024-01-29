const blogTitles = document.getElementsByTagName('h3');
// console.log(blogTitles);
for(const h3 of blogTitles){
    // console.log(h3);
    // console.log(h3.innerHTML);
    // console.log(h3.innerText);
}

const blogDetails = document.getElementsByTagName('p');
for (const p of blogDetails){
    // console.log(p);
    // console.log(p.innerText);
}

const firstTitle = document.getElementById('first-title');
firstTitle.style.color = 'red';
firstTitle.style.backgroundColor = 'black';

const secondTitle = document.getElementById('second-title');
secondTitle.style.textAlign = 'center';
secondTitle.style.color = 'red';
secondTitle.style.fontSize = '20px';
secondTitle.style.backgroundColor = 'yellow';
secondTitle.style.fontWeight = 'bold';
secondTitle.innerText= 'Title updated by JavaScript';
secondTitle.style.padding='10px';
secondTitle.style.marginLeft = '20px';

// get elements by class name
const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    // console.log(blog);
    blog.style.border='2px solid orange';
    blog.style.borderRadius='10px';
    blog.style.margin='5px';
    blog.style.padding='5px';
}

// create elements
const li = document.createElement('li');
li.innerText = 'blog-5';
const ul = document.getElementById('blog-list');
ul.appendChild(li);

const article = document.createElement('article');
const h3 = document.createElement('h3');
h3.innerText ='My Awesome Blog';
const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit am lorem. Cum sociis natoque penatibus et lorem. Lorem ipsum dolor sit am lorem';
article.appendChild(h3);
article.appendChild(p);

const blogSection = document.getElementById('blogs');
blogSection.appendChild(article);




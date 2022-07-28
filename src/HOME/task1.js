/* 
   Вивести на сторінці 5 постів з ресурсу
    http://jsonplaceholder.typicode.com/posts?_start=8&_limit=5

    У довільній формі вивести
   - заголовок посту
   - Посилання на автора цієї посади
      <span class="author-link">Get author</span>

    При click на посилання "Get author" виконати запит на сервер
    https://jsonplaceholder.typicode.com/users/<ID_автора>
    https://jsonplaceholder.typicode.com/posts?userId=1
     - name, username, email
     - кількість постів цього user     

    */

const posts = document.getElementById("posts");

posts.innerHTML = "<h1>Todo here</h1>";

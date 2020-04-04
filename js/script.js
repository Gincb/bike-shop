const link = "http://colorless.in/wordpress-portfolio/bike-shop/wp-json/wp/v2/posts";
    window.addEventListener("DOMContentLoaded", getData);

    function getData() {
        fetch(link)
        .then(res=>res.json())
        .then(handleData);
    }

    function handleData(posts) {
        posts.forEach(showData);
    }

    function showData(data) {
        // console.log(singleRowData.gsx$brand.$t, " - ", singleRowData.gsx$name.$t, ", ",singleRowData.gsx$price.$t);

        const templateElement = document.querySelector("#template").content;
        const myClone = templateElement.cloneNode(true);

    
        myClone.querySelector(".content").innerHTML = data.content.rendered;
        
        const where = document.querySelector("main");
        where.appendChild(myClone);
    }

let JQue = (e)=> document.querySelectorAll(e);


JQue("header ul li").forEach(element => {
    element.addEventListener("click", function(e){
        document.getElementById(e.target.dataset.url).scrollIntoView();
    })
});
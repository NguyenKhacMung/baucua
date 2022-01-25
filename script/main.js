var btn = document.querySelector(".btn");

function imgchange() {
    btn.classList.add("anmbtn");
    setTimeout(function() {
        btn.classList.remove("anmbtn");
    }, 250);
    const myImages1 = ["./image/bau.png", "./image/cua.png", "./image/tom.png", "./image/ca.png", "./image/ga.png", "./image/nai.png"];



    // document.querySelector(".image-item img").src = myImages1[rnd];
    const node = [...document.querySelectorAll(".image-item img")];
    node.forEach(function(item, index) {
        var rnd = Math.floor(Math.random() * myImages1.length);

        item.parentElement.classList.add("imageRot");
        item.parentElement.parentElement.parentElement.classList.add("shake");
        document.querySelector("h4").classList.add("anmbtn")

        setTimeout(function() {
            item.parentElement.classList.remove("imageRot");
            item.parentElement.parentElement.parentElement.classList.remove("shake");
            document.querySelector("h4").classList.remove("anmbtn");
            item.src = myImages1[rnd];
        }, 500);



    });

}
var btn = document.querySelector(".btn");
btn.addEventListener('click', function(event) {

    imgchange();
});

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function(item) {
    item.addEventListener ("click", function(e) {
        const currentItem = document.querySelector(".active");
        if (currentItem){currentItem.classList.remove("active");}
        e.target.classList.add("active");
    })
});
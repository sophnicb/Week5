
// Account Pop Up
document.querySelector("#account")
.addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
 });
 document.querySelector(".popup .close-btn")
 .addEventListener("click",function(){
     document.querySelector(".popup").classList.remove("active");
  });


  // Cart Pop up
    document.querySelector("#cart")
  .addEventListener("click",function(){
      document.querySelector(".popup-cart").classList.add("active");
   });
   document.querySelector(".popup-cart .close-btn")
   .addEventListener("click",function(){
       document.querySelector(".popup-cart").classList.remove("active");
    }); 
   

    // Search Bar
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector(".search-input");
    const magnifyingGlass = document.querySelector(".magnifying-glass");

    magnifyingGlass.addEventListener("click", function () {
        searchInput.classList.toggle("expanded");
        searchForm.classList.toggle("expanded");
    });


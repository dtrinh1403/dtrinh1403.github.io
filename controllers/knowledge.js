let acc = document.querySelectorAll(".accordion");

let currentPanelPos = 0;

// =================ACCORDION================
acc.forEach((section, index)=>{
   
   section.addEventListener("click",()=>{
     
       section.classList.toggle("active");

       let panel = section.nextElementSibling;
      
       if(panel.style.display === "block"){
           panel.style.display = "none";
       }
       else{
           panel.style.display = "block";
       }

    //    panel.classList.toggle("active");

    //    if(panel.style.maxHeight){
    //        panel.style.maxHeight = null;
    //    }
    //    else{
    //        panel.style.maxHeight = panel.scrollHeight + "px";
    //    }
   })

   

   
});


// =================SWIPER================
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


   //-------------quality js---------------
//popup-vid js
let play_button = document.querySelectorAll(".quality_button");
let popup_vid = document.querySelector(".popup_vid");
let close_button = document.querySelector(".popup_vid .close_button");
let iframe = document.querySelector(".popup_vid .iframewrap iframe");

play_button.forEach((button, index)=>{
    button.addEventListener("click", ()=>{
        let video_id = button.getAttribute("data-video-id");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + video_id);
        popup_vid.style.display = "flex";
    })
});

close_button.addEventListener("click", ()=>{
    iframe.setAttribute("src", " ");
    popup_vid.style.display = "none";
});

popup_vid.addEventListener("click", ()=>{
    popup_vid.style.display = "none";
})
  
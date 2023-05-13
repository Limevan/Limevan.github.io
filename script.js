// Scrolling animations 

$("#Home--button").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 1500);
 return false; 
 });

$("#Projects--button").click(function() {
    $('html, body').animate({
    scrollTop: $("#Projects").offset().top
   }, 1500);
   });      

$("#Websites--button").click(function() {
    $('html, body').animate({
    scrollTop: $("#Website").offset().top
   }, 1500);
   });

$("#About--button").click(function() {
    $('html, body').animate({
    scrollTop: $("#About").offset().top
   }, 1500);
   }); 

// Scroll to reveal animations

// For title
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
           entry.target.classList.add('show'); 
        }

        //This is commented in case I would like objects to hide again after it is not in the screen

        // else{
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer.observe(el));
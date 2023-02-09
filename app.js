$(document).ready(function(){

    //For the Navbar to appear on Scroll

    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing-1",{
        strings:[
            "Front-End Development", "Back-End Development", "Web Designing",
            "Web Development" 
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings:[
            "Front-End Developer", "Back-End Developer", "Web Designer",
            "Web Developer" 
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
});
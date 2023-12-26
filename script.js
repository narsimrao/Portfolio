$(document).ready(function(){
    var skills = "";
    var aboutme = "";
    

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $(window).load("https://raw.githubusercontent.com/narsimrao/narsimrao.github.io/main/Files/Skills.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
        {
            var individualskills = responseTxt.split(";");
            var i;

            for (i = 0; i < individualskills.length-1; i++)
            {
                var skill = individualskills[i].split(",");
                if(i % 2 == 0)
                {
                    document.getElementsByClassName("skilldataleft")[0].innerHTML += 
                    '<div class="bars"><div class="info"><span>' + skill[0] + '</span></div></div>';
                }
                else{
                    document.getElementsByClassName("skilldataright")[0].innerHTML += 
                    '<div class="bars"><div class="info"><span>' + skill[0] + '</span></div></div>';
                }
            } 
        }
        if(statusTxt == "error")
        {
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        }
        $.get   

    //   if(statusTxt == "success")
    //     var individualskills = responseTxt.split(";");
    //     var i;
    //     for (i = 0; i < individualskills.length-1; i++)
    //     {
    //         var skill = individualskills[i].split(",");
    //         if(i % 2 == 0)
    //         {
    //             document.getElementsByClassName("skilldataleft")[0].innerHTML += 
    //             '<div class="bars"><div class="info"><span>' + skill[0] + '</span><span>' + skill[1] + '%</span></div><div class="line ' + skill[0] + '"></div></div>';
    //         }
    //         else
    //         {
    //             document.getElementsByClassName("skilldataright")[0].innerHTML += 
    //             '<div class="bars"><div class="info"><span>' + skill[0] + '</span><span>' + skill[1] + '%</span></div><div class="line ' + skill[0] + '"></div></div>';
    //         }
            
    //     }      
    //   if(statusTxt == "error")
    //     alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    $(window).load("https://raw.githubusercontent.com/narsimrao/narsimrao.github.io/main/Files/AboutMe.txt", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
      document.getElementsByClassName("aboutcontent")[0].textContent = responseTxt;
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Data Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    ;

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });  
});

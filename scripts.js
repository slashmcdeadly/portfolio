const portfolio = {};

portfolio.skills = () => {
    $('.about button').on('click', function(){
        console.log(this.value);
        if (this.value === 'aboutMe') {
            $('#aboutText').html("You might know me from a shadow I made on a wall in an episode of Smallville, or perhaps from a news article that put me on a list of people in Montreal. But in case you aren't an aficinado of Smallville photo-double work or don't keep clippings of entertainment articles from the Montreal Gazette, I'm Scott Carter and I make websites and web-applications! I'm a recent graduate of Juno College of Technology's Front end Web Development bootcamp and I'm looking for my first job in the industry! Please hire me...")
        } else if (this.value === 'skills'){
            $('#aboutText').html('<div class="skillsBars"><p>HTML</p><div class="container"><div class="skills html">100%</div></div><p>CSS</p><div class="container"><div class="skills css">90%</div></div><p>JavaScript</p><div class="container"><div class="skills js">85%</div></div><p>React</p><div class="container"><div class="skills react">70%</div></div></div>');
            $('.aboutScott').html('');
        } else if(this.value === 'education'){
            $('#aboutText').html('<p><strong>Juno College of Technology</strong> - Certificate in Front end Web Development</p> <p><strong>Univeristy of British Columbia</strong> - 3 years of a History degree </p>');
            $('.aboutScott').html('');
        }
    })
}

portfolio.hireMe = () => {
    $('.hireMe').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
        $('.popupContainer').html('<div class="popup"><h2>Please Hire Me!</h2><p>Thank you so much for your interest, please fill out this form or book a meeting with me at my <a href="https://calendly.com/scottandrewcarter1">Calendly!</a></p><button class="buttonWhite">Close</button></div>')
    })
}

portfolio.nav = () => {
    $('.scroll').on('click', function(){
        $('html, body').animate({
            scrollTop: $(this.value).offset().top
        }, 1000);
    })
}

portfolio.close = function(){
    $('.popupContainer').on('click', 'button', function(){
        $('.popupContainer').addClass('hidden');
    })
}

portfolio.hamburger = () => {
    $('.hamburger').on('click', function(){
        $('.hiddenMenu').toggle('slow')
    })
    $('.hiddenMenu button').on('click', function(){
        $('.hiddenMenu').toggle('slow')
    })
}

portfolio.modal = function(){
    $('.left').hover(() => {
        { $('.modalTL').toggleClass('hidden');
        $('.left a').toggleClass('opacity') }
    })

    $('.right').hover(() => {
        { $('.modalTR').toggleClass('hidden');
        $('.right a').toggleClass('opacity') } 
    })

    $('.bLeft').hover(() => {
        { $('.modalBL').toggleClass('hidden');
        $('.bLeft a').toggleClass('opacity') }
    })

    $('.bRight').hover(() => {
        { $('.modalBR').toggleClass('hidden');
        $('.bRight a').toggleClass('opacity') } 
    })
}

portfolio.init = () => {
    portfolio.skills();
    portfolio.hireMe();
    portfolio.nav();
    portfolio.close();
    portfolio.hamburger();
    portfolio.modal();
}

$(function(){
    portfolio.init();
})
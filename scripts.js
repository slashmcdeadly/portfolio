const portfolio = {};

portfolio.skills = () => {
    $('.about button').on('click', function(){
        console.log(this.value);
        if (this.value === 'aboutMe') {
            $('#aboutText').html("You might know me from a shadow I made on a wall in an episode of Smallville, or perhaps from a news article that put me on a list of people in Montreal. But in case you aren't an aficinado of Smallville photo-double work or don't keep clippings of small entertainment articles in the Montreal Gazette from 5 years ago, I'm comedian Scott Andrew Carter, who now knows how to make websites and applications! I'm a recent graduate of Juno College of Technology's Front end Web Development bootcamp and I'm looking to get started in this new creative field!")
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

portfolio.init = () => {
    portfolio.skills();
    portfolio.hireMe();
    portfolio.nav();
    portfolio.close();
    portfolio.hamburger();
}

$(function(){
    portfolio.init();
})
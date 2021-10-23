var randomArray = [
    "“All our dreams can come true, if we have the courage to pursue them.”",
    "“The secret of getting ahead is getting started.”",
    "“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.”",
    "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”",
    "“The best time to plant a tree was 20 years ago. The second best time is now.”",
    "“Only the paranoid survive.”",
    "“It’s hard to beat a person who never gives up.”",
    "“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.”",
    "“If people are doubting how far you can go, go so far that you can’t hear them anymore.”",
    "“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.”",
    "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.”",
    "“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.”",
    "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”",
    "“Everything you can imagine is real.”",
    "“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”",
    "“Do one thing every day that scares you.”",
    "“It’s no use going back to yesterday, because I was a different person then.”",
    "“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.”",
    "“Do what you feel in your heart to be right – for you’ll be criticized anyway.”",
    "“Happiness is not something ready made. It comes from your own actions.”",
    "“Whatever you are, be a good one.”",
    "“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.”",
    "“If we have the attitude that it’s going to be a great day it usually is.”",
    "“You can either experience the pain of discipline or the pain of regret. The choice is yours.”",
    "“Impossible is just an opinion.”",
    "“Your passion is waiting for your courage to catch up.”",
    "“Magic is believing in yourself. If you can make that happen, you can make anything happen.”",
    "“If something is important enough, even if the odds are stacked against you, you should still do it.”",
    "“Hold the vision, trust the process.”",
    "“Don’t be afraid to give up the good to go for the great.”",
    "“People who wonder if the glass is half empty or full miss the point. The glass is refillable.”",
    "“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”",
    "“Things may come to those who wait, but only the things left by those who hustle.”",
    "“Everything comes to him who hustles while he waits.”",
    "“Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.”",
    "“Invest in your dreams. Grind now. Shine later.”",
    "“Hustlers don’t sleep, they nap.”",
    "“Greatness only comes before hustle in the dictionary.”",
    "“Without hustle, talent will only carry you so far.”",
    "“Work like there is someone working twenty four hours a day to take it away from you.”",
    "“Hustle in silence and let your success make the noise.”",
    "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”",
    "“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.”",
    "“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.”",
    "“If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.”",
    "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”",
    "“Some people want it to happen, some wish it would happen, others make it happen.”",
    "“Great things are done by a series of small things brought together”",
    "“If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.”",
    "“Very often, a change of self is needed more than a change of scene.”",
    "“Leaders can let you fail and yet not let you be a failure.”",
    "“It’s not the load that breaks you down, it’s the way you carry it.”",
	"You’re so much stronger than your excuses.",
    "Don’t compare yourself to others. Be like the sun and the moon and shine when it’s your time.",
    "Don’t Quit",
    "Don’t tell everyone your plans, instead show them your results.",
    "“I choose to make the rest of my life, the best of my life.”",
    "“Nothing can dim the light that shines from within.”",
    "“Be so good they can’t ignore you.”",
    "“Take criticism seriously, but not personally. If there is truth or merit in the criticism, try to learn from it. Otherwise, let it roll right off you.”",
    "“This is a reminder to you to create your own rule book, and live your life the way you want it.”",
    "“If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.”",
    "“Do the best you can. No one can do more than that.”",
    "“Do what you can, with what you have, where you are.”",
    "‘It’s never too late to be what you might’ve been.”",
    "“If you can dream it, you can do it.”",
    "“Trust yourself that you can do it and get it.”",
    "“Don’t let what you can’t do interfere with what you can do.”",
    "“You can do anything you set your mind to.”",
    "“All we can do is the best we can do.”",
    "“You never know what you can do until you try.”",
    "“Twenty years from now you’ll be more disappointed by the things you did not do than the ones you did.”",
    "“I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.”",
    "It’s okay to outgrow people who don’t grow. Grow tall anyways.",
    "When you feel like giving up just remember that there are a lot of people you still have to prove wrong.",
    "“The world is full of nice people. If you can’t find one, be one.”",
    "“Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.”",
    "“A walk to a nearby park may give you more energy and inspiration in life than spending two hours in front of a screen.”",
    "“If you can’t do anything about it then let it go. Don’t be a prisoner to things you can’t change.”",
    "“You can’t go back and change the beginning, but you can start where you are and change the ending.”",
    "“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.”",
    "“I can and I will. Watch me.”",
    "“Try not to become a man of success, but rather become a man of value.”",
    "“A winner is a dreamer who never gives up.”",
    "“If you don’t have a competitive advantage, don’t compete.”",
    "“The only thing standing in the way between you and your goal is the BS story you keep telling yourself as to why you can’t achieve it.”",
    "“What is life without a little risk?”",
    "“Only do what your heart tells you.”",
    "“If it’s a good idea, go ahead and do it. It’s much easier to apologize than it is to get permission.”",
    "“I attribute my success to this: I never gave or took an excuse.”",
    "“The question isn’t who is going to let me; it’s who is going to stop me.”",
    "“A surplus of effort could overcome a deficit of confidence.”",
    "“And, when you want something, all the universe conspires in helping you to achieve it.”",
    "“Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people won’t feel insecure around you. We are all meant to shine, as children do.”",
    "“Don’t think or judge, just listen.”",
    "“I can be changed by what happens to me. But I refuse to be reduced by it.”",
    "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
    "“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go…”",
    "“It’s the possibility of having a dream come true that makes life interesting.”",
    "“There is some good in this world, and it’s worth fighting for.”",
    "“Learn to light a candle in the darkest moments of someone’s life. Be the light that helps others see; it is what gives life its deepest significance.”",
    "“Don't judge each day by the harvest you reap but by the seeds that you plant.”"
]


function changePhrase(){
    document.querySelector('.phrase').innerHTML = randomArray[Math.floor(Math.random() * 11)];
};

function changeBackground(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

fetch('https://api.github.com/repos/fcoterroba/Advice_Me/contributors?per_page=1&anon=true', {
    headers: {'Accept': 'application/vnd.github.v3+json'},
})
.then(data => {
    console.log(Array.from(data.headers))
    const found = data.headers.get('Link').match('page=(?<contributors>[0-9]+)>; rel="last"$');
    const contributors = found.groups.contributors;
    var text = `
    <a href="https://github.com/fcoterroba/">@fcoterroba</a>
    and
    <a href="https://github.com/fcoterroba/Advice_Me/graphs/contributors">${contributors}</a>
    persons supports you ❤️`;
    var footer = document.querySelector('.footer');
    footer.innerHTML = text;
})

fetch('https://libretranslate.com/languages', {})
.then(response => response.json())
.then(data => {
    console.log(data);
    languages_html = data.map(lang => {return `<option value='${lang.code}'>${lang.name}</option>`});
    document.getElementById("languages-list").innerHTML = languages_html;
    to_translate = document.querySelector('.phrase').innerHTML;
    const res = fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: to_translate,
            source: "en",
            target: document.getElementById("languages-list").value
	        }),
	    headers: { "Content-Type": "application/json" }
    }).then(response => response.json()).then(data => document.querySelector('.phrase').innerHTML = data.translatedText);  
})
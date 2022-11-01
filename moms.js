let quotes = [
    `Someone once said to me, I don't know how you do it. My reply... I wasn't given a choice`,
    `You learn and grow with each choice you make`,
    `The strength of a mother is second to none`,
    `Nothing will stop her from finding the strength that she needs`,
    `I want them to remember me as the woman who always got back up`,
    `when you are feeling lost... remember who you are doing it for`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
  
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  document.querySelector('#main-title').textContent = 'Single Moms Rock'
  
    // Part 2
  document.querySelector('body').style.backgroundColor = 'purple'
  
    // Part 3
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
  
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])
  
    // Part 4
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '3rem'
  })
  
    // Part 5
  document.querySelectorAll('#motherhood the blessing > li').forEach((item) => {
    if(item.textContent.trim() === 'Love'){
      document.querySelector('#past-races').removeChild(item)
    }
  })
  
    // Part 6
  const li = document.createElement('li')
  li.textContent = 'My Greatest Accomplishment'
  document.querySelector('#past-races').appendChild(li)
  
    // Part 7
  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post')
  const heading = document.createElement('h2')
  heading.textContent = 'My Greatest Accomplishment'
  const pEl = document.createElement('p')
  pEl.textContent = ''
  
  
  
    // Part 8
  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  
    // Part 9
  
  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      evt.currentTarget.classList.toggle('purple')
    })
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('white')
    })
  })
  
  
  
  });


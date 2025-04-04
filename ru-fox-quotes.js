const quotes = [
"Ты навсегда в ответе за всех, кого приручил.",
"По-настоящему можно видеть только сердцем.",
"Самое главное - то, чего не увидишь глазами.",
"Все взрослые сначала были детьми, только мало кто из них об этом помнит.",
"То время, что ты потратил на свою Розу, делает твою розу такой важной для тебя.",
"Всегда есть риск заплакать, если дал себя приручить."
  ];
  
  function showRandomQuote() {
    const quoteBox = document.getElementById("foxQuote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
  }

  // Create a shooting star every few seconds
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
  
    // Random start position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.5;
  
    // Randomize direction: left-to-right or right-to-left
    const direction = Math.random() < 0.5 ? 1 : -1; // 1 = right, -1 = left
    const distance = 300 + Math.random() * 300;
    const angle = direction * (20 + Math.random() * 40); // 20-60 or -20 to -60
  
    star.style.top = `${startY}px`;
    star.style.left = `${startX}px`;
    star.style.setProperty('--shoot-angle', `${angle}deg`);
    star.style.setProperty('--shoot-x', `${direction * distance}px`);
    star.style.setProperty('--shoot-y', `${distance}px`);
  
    document.body.appendChild(star);
  
    star.addEventListener('animationend', () => {
      star.remove();
    });
  }
  
  setInterval(createShootingStar, 3000);
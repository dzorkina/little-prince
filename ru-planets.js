const planetQuotes = {
        business: {
          chapter: "Глава 13",
          quote: "Я считаю звёзды — и они принадлежат мне.",
        },
        geo: {
          chapter: "Глава 15",
          quote: "Я записываю знания, но не проверяю их сам.",
        },
        lamp: {
          chapter: "Глава 14",
          quote: "Я верен своему долгу: зажигать и гасить фонарь.",
        },
        king: {
          chapter: "Глава 10",
          quote: "Я всем управляю, ведь я Король!",
        },
        vain: {
          chapter: "Глава 11",
          quote: "Хвали меня! Я самый достойный восхищения!",
        },
        drunk: {
          chapter: "Глава 12",
          quote: "Я пью, чтобы забыть, зачем я пью.",
        }
      };
      
  
  function showPlanetBubble(planetId) {
    const planetElement = document.querySelector(`.planet-${planetId}`);
    const bubble = document.getElementById(`bubble-${planetId}`);
  
    const isActive = planetElement.classList.contains('active');
  
    if (isActive) {
      planetElement.classList.remove('active');
      bubble.classList.remove('active');
      planetElement.style.setProperty('--planet-scale', '1');
      return;
    }
  
    document.querySelectorAll('.planet-bubble').forEach(bubble => {
      bubble.classList.remove('active');
    });
    document.querySelectorAll('.planet').forEach(planet => {
      planet.classList.remove('active');
      planet.style.setProperty('--planet-scale', '1');
    });
  
    const { chapter, quote } = planetQuotes[planetId];
    bubble.innerText = `"${quote}"
  ${chapter}`;
    bubble.classList.add('active');
    planetElement.classList.add('active');
    planetElement.style.setProperty('--planet-scale', '1.4');
  }
  
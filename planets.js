const planetQuotes = {
    business: {
      chapter: "Chapter 13",
      quote: "I count the stars because I own them.",
    },
    geo: {
      chapter: "Chapter 15",
      quote: "I record facts, but I do not explore.",
    },
    lamp: {
      chapter: "Chapter 14",
      quote: "My orders never change, so I light the lamp.",
    },
    king: {
      chapter: "Chapter 10",
      quote: "I am the King. I rule over everything.",
    },
    vain: {
      chapter: "Chapter 11",
      quote: "Clap for me, I am the most handsome!",
    },
    drunk: {
      chapter: "Chapter 12",
      quote: "I drink to forget that I am ashamed of drinking.",
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
  
  
  
  
  
  
function shadeColor(color, percent) {

  var R = parseInt(color.substring(1,3),16);
  var G = parseInt(color.substring(3,5),16);
  var B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R<255)?R:255;  
  G = (G<255)?G:255;  
  B = (B<255)?B:255;  

  R = Math.round(R)
  G = Math.round(G)
  B = Math.round(B)

  var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}

window.onload = function() {
  var backgrounds = [
    {image: 'background_1.png', particleColor: '#140E24', backgroundColor: 'rgba(20, 14, 36, 0.5)'},
    {image: 'background_2.png', particleColor: '#1E112A', backgroundColor: 'rgba(30, 17, 42, 0.5)'},
    {image: 'background_3.png', particleColor: '#0C0915', backgroundColor: 'rgba(12, 9, 21, 0.5)'},
    {image: 'background_4.png', particleColor: '#00031B', backgroundColor: 'rgba(0, 3, 27, 0.5)'},
    {image: 'background_5.png', particleColor: '#04112E', backgroundColor: 'rgba(4, 17, 46, 0.5)'},
    {image: 'background_6.png', particleColor: '#04112E', backgroundColor: 'rgba(4, 17, 46, 0.5)'},
    {image: 'background_7.png', particleColor: '#0A2A02', backgroundColor: 'rgba(10, 42, 2, 0.5)'},
    {image: 'background_8.png', particleColor: '#05432C', backgroundColor: 'rgba(5, 67, 44, 0.5)'},
    {image: 'background_9.png', particleColor: '#05432C', backgroundColor: 'rgba(5, 67, 44, 0.5)'},
    {image: 'background_10.png', particleColor: '#210F24', backgroundColor: 'rgba(33, 15, 36, 0.5)'},
    {image: 'background_11.png', particleColor: '#210F24', backgroundColor: 'rgba(33, 15, 36, 0.5)'},
    {image: 'background_12.png', particleColor: '#210F24', backgroundColor: 'rgba(33, 15, 36, 0.5)'},
    {image: 'background_13.png', particleColor: '#210F24', backgroundColor: 'rgba(33, 15, 36, 0.5)'},
    {image: 'background_14.png', particleColor: '#210F24', backgroundColor: 'rgba(33, 15, 36, 0.5)'},
    {image: 'background_15.png', particleColor: '#2C0E5D', backgroundColor: 'rgba(44, 14, 93, 0.5)'},
    {image: 'background_16.png', particleColor: '#2C0E5D', backgroundColor: 'rgba(44, 14, 93, 0.5)'}
  ]; // replace with your image filenames and corresponding colors

  var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  var imageUrl = 'images/seamless/' + randomBackground.image;

  randomBackground.particleColor = shadeColor(randomBackground.particleColor, 1000)

  document.querySelector('#particles-js').style.backgroundImage = 'url(' + imageUrl + ')';

  var style = document.createElement('style');
  style.innerHTML = `
    #particles-js::after {
      background-color: ${randomBackground.backgroundColor};
    }
  `;
  document.head.appendChild(style);

  particlesJS('particles-js', {
    particles: {
      number: { value: 1000, density: { enable: true, value_area: 3000 } },
      color: { value: randomBackground.particleColor },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 5, size_min: 0, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 3,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
}
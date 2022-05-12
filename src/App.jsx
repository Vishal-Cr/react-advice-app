import { Fragment } from 'react';
import Particles from "react-tsparticles";
import {loadFull}from 'tsparticles';
import Snow from '../src/component/snow';
import snowConfig from './assets/snow.json';
import './App.css'
import Card from './component/Card';
function App() {
  

  let snowJson=JSON.stringify(snowConfig);
  let snowOptions=JSON.parse(snowJson);
  const particlesInit = async (main) => {
    

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    
  };
  return (
    <Fragment>
      <div  className="App">
      <Particles
    
    id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
     options={{
    
      "particles": {
        "number": {
          "value": 400,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "hsl(150, 100%, 66%)"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 500,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 4,
            "duration": 0.3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "background": {
        "color": "hsl(218, 23%, 16%)",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      }
    }}
     
      /*options={{
        background: {
          color: {
            value: " hsl(193, 38%, 86%)",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "hsl(150, 100%, 66%)",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        // detectRetina: true,
      }}*/ 

    /> 
      <Card/>
     
      </div>
    </Fragment>
    
  )
}

export default App

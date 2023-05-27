// import { ChatEngine } from 'react-chat-engine';
import Particles from 'react-particles';
import Poop from './Poop';
import React from 'react';
import './App.css';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";



const App = () => {

    const particlesOptions = {
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: '#f4b2ba'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#f4b2ba'
            },
            polygon: {
              nb_sides: 8
            },
            image: {
              src: '',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 2,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: false,
            anim: {
              enable: false,
              speed: 5,
              size_min: 0,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 110,
            color: '#f4b2ba',
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 3000,
              rotateY: 3000
            }
          },
          array: []
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab:{
              distance: 100,
              line_linked:{
                opacity: 1
              }
            },
            bubble:{
              distance: 200,
              size: 80,
              duration: 0.4
            },
            repulse:{
              distance: 200,
              duration: 0.4
            },
            push:{
              particles_nb: 4
            },
            remove:{
              particles_nb: 2
            }
          },
          mouse:{}
        },
        retina_detect: false,
        fn: {
          interact: {},
          modes: {},
          vendors:{}
        },
        tmp: {}
      };

    //   return (
    //     <Particles
    //     params = {particlesOptions}
    //     />
    //   )

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    return (
      <React.Fragment>
      <Poop />
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#c1bad7",
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
                        value: "#000000",
                        opacity: 0.5,
                    },
                    links: {
                        color: "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
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
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
            
        />
        </React.Fragment>
    );
}



export default App;
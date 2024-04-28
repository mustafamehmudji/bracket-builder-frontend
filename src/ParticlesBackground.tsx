import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackgound: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {" "}
      {init && (
        <Particles
          id="tsparticles"
          // particlesLoaded={(container = "") => {
          //   console.log(container);
          //   return;
          // }}
          options={{
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                // resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.5,
                  },
                },
                bubble: {
                  distance: 800,
                  size: 3,
                  duration: 0.3,
                  opacity: 1,
                  speed: 3,
                },
                remove: {
                  quantity: 2,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              move: {
                direction: "bottom",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: 2,
                straight: false,
                // bounce: false,
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
              },
              number: {
                density: {
                  enable: true,
                  height: 1200,
                  width: 1200,
                },
                value: 60,
              },
              opacity: {
                value: 0.1,
                // random: true,
                animation: {
                  enable: false,
                  speed: 1,
                  // opacity_min: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
                // stroke: {
                //   width: 0,
                //   color: "#000000",
                // },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              stroke: {
                width: 0,
                color: "#000000",
              },
              size: {
                value: 8,
                // random: true,
                animation: {
                  enable: false,
                  speed: 40,
                  // size_min: 0.1,
                  sync: false,
                },
              },
              // line_linked: {
              //   enable: false,
              //   distance: 500,
              //   color: "#ffffff",
              //   opacity: 0.4,
              //   width: 2,
              // },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticlesBackgound;

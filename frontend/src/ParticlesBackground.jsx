import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },

        particles: {
          number: {
            value: window.innerWidth < 768 ? 20 : 40,
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: "#22d3ee",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.35,
          },

          size: {
            value: { min: 0.8, max: 2},
          },

          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

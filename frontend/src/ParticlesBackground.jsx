import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true },

        particles: {
          number: {
            value: window.innerWidth < 768 ? 30 : 60, // 👈 HERE
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
            value: 0.5,
          },

          size: {
            value: { min: 2, max: 5 },
          },

          move: {
            enable: true,
            speed: 0.8, // 👈 HERE
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

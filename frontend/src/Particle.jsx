
// import { useCallback } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const Particle = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: false,
//         background: { color: "transparent" },
//         particles: {
//           number: { value: 25 },        // few dots
//           color: { value: "#22d3ee" },  // cyan color
//           opacity: { value: 0.7 },
//           size: { value: 3 },
//           move: {
//             enable: true,
//             direction: "top",           // bottom → top
//             speed: 1.2,
//             outModes: { default: "out" }
//           }
//         },
//         detectRetina: true
//       }}
//     />
//   );
// };

// export default Particle;
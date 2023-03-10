import { motion } from "framer-motion";
export default function Logo() {
  return (
    <svg
      id="eu9OPUQqhM11"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      width="300px"
      height="300px"
    >
      <motion.path
        d="M80,140v-50q0-10,10-10t120,0q10,0,10,10t0,70h-140v-20Z"
        fill="#3f5787"
        animate={{ x: [300, 0, 0, -300], opacity: [0, 1, 1, 0] }}
        transition={{
          type: "spring",
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.3, 0.7, 1],
        }}
      />
      <motion.path
        d="M80,210q-10,0-10-10l10-30h140l10,30q0,10-10,10t-140,0Z"
        fill="#3f5787"
        animate={{ x: [-300, 0, 0, 300], opacity: [0, 1, 1, 0] }}
        transition={{
          type: "spring",
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.3, 0.7, 1],
        }}
      />
      <motion.path
        className="svg--simbol"
        d="M150,100l-20,20l20,20"
        transform="translate(7 0)"
        fill="none"
        stroke="#ff863d"
        stroke-width="20"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          type: "spring",
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.3, 0.7, 1],
        }}
      />
    </svg>
  );
}

import { motion } from 'framer-motion';

function Icons({ iconname, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 w-32 border border-purple-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 opacity-0 group-hover:opacity-40 transition duration-300 blur-xl"></div>

      {/* Icon */}
      <div className="h-24 w-24 flex items-center justify-center relative z-10">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconname}/${iconname}-original.svg`}
          alt={iconname}
          className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = `https://cdn.simpleicons.org/${iconname}`;
          }}
        />
      </div>

      {/* Label */}
      <p className="mt-4 text-sm font-semibold text-purple-700 capitalize relative z-10 tracking-wide">
        {name}
      </p>
    </motion.div>
  );
}

export default Icons;

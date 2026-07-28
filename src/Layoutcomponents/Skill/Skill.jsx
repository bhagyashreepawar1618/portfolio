import React from 'react';
import { motion } from 'framer-motion';
import Icons from './Icons.jsx';

function Skill() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-purple-800 mb-12"
        >
          Skills & Expertise
        </motion.h1>

        {/* DSA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#63559f]">
            Problem Solving & DSA 🧠
          </h2>

          <p className="text-base md:text-lg leading-7 mt-4 text-gray-700">
            I actively practice Data Structures and Algorithms to strengthen
            problem-solving skills, with a solid foundation in arrays, strings,
            recursion, and core linked list concepts, along with time and space
            complexity analysis.
          </p>
        </motion.div>

        {/* SKILL SECTIONS */}
        <div className="space-y-14">
          {/* Languages */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Languages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="javascript" name="Java Script" />
              <Icons iconname="python" name="python" />
              <Icons iconname="cplusplus" name="c++" />
              <Icons iconname="typescript" name="Type Script" />
              <Icons iconname="c" name="C" />
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Frontend Development
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="html5" name="Html5" />
              <Icons iconname="css" name="Css" />
              <Icons iconname="react" name="React" />
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Frameworks & Libraries
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="bootstrap" name="Bootstrap" />
              <Icons iconname="tailwindcss" name="Tailwind" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Backend Development
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="nodedotjs" name="Node js" />
              <Icons iconname="express" name="Express" />
            </div>
          </div>

          {/* Databases */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Databases
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="mongodb" name="MongoDB" />
              <Icons iconname="mysql" name="MySQL" />
              <Icons iconname="postgresql" name="Postgres SQL" />
            </div>
          </div>

          {/* DevOps & Deployment */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              DevOps & Deployment
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="docker" name="Docker" />
              <Icons iconname="vercel" name="Vercel" />
              <Icons iconname="render" name="render" />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Tools & Design
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="git" name="git" />
              <Icons iconname="github" name="GitHub" />
              <Icons iconname="postman" name="Postman" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;

"use client";
import React from "react";
import { motion } from 'framer-motion';



const Hero = () => {
return(
    <motion.section 
      className="text-center py-20"
      // Definimos la animación de entrada
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisible y 20px abajo
      animate={{ opacity: 1, y: 0 }}   // Estado final: visible y en su posición original
      transition={{ duration: 0.5 }}   // Duración de la animación
    >
      {/* El resto del código es el mismo */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Hola, soy <span className="text-cyan-400">Juan Mario Pérez Guzmán</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Desarrollador Full-Stack especializado en la creación de aplicaciones web rápidas y modernas con React, Next.js y Node.js.
      </p>
      {/* ... */}
    </motion.section>
);
};

export default Hero;
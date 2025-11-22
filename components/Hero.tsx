'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { fadeInUp, fadeInLeft, textReveal, staggerContainer } from '@/lib/animations';
import BlurText from './BlurText';
import LightRays from './LightRays';

export function Hero() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* LightRays effect */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#22c55e"
        raysSpeed={1.2}
        lightSpread={0.6}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.08}
        distortion={0.03}
        fadeDistance={1.2}
        saturation={0.9}
      />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-4xl"
        >
          <motion.p
            variants={textReveal}
            custom={0}
            className="text-sm uppercase tracking-widest text-primary font-medium"
          >
            VP of Engineering · Backend Architect
          </motion.p>
          
          <BlurText
            text="Building scalable microservices and distributed systems"
            delay={100}
            animateBy="words"
            direction="top"
            className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          />
          
          <BlurText
            text="Backend Architect and Lead Developer specializing in Python, AWS, and Microservices. Experience includes engineering scalable distributed systems, real-time applications, and cloud infrastructure with a focus on scalability, security, and high-performance architecture."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="mt-6 text-lg text-muted max-w-2xl leading-relaxed"
          />
          
          <motion.div
            variants={fadeInLeft}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className="group relative rounded-lg bg-primary px-6 py-3 text-sm font-medium text-black overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-primary-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="rounded-lg border-2 border-primary/50 px-6 py-3 text-sm font-medium hover:bg-primary/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Delivered' },
              { number: '500+', label: 'Active Users' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={textReveal}
                className="text-center"
                whileHover={{ y: -4 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';
import { experiences } from '@/lib/data';
import { fadeInUp, fadeInLeft, staggerContainer, hoverLift } from '@/lib/animations';

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <Container>
        <SectionHeader title="Experience" subtitle="Roles and responsibilities in building scalable systems." />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          <div className="grid gap-6 md:pl-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company + exp.period}
                variants={fadeInLeft}
                whileHover={hoverLift}
                className="card p-6 relative group"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-[35px] top-8 w-3 h-3 rounded-full bg-primary border-4 border-background hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <motion.span
                    className="text-xs text-muted px-3 py-1 rounded-full border border-border"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(34, 197, 94, 0.5)' }}
                  >
                    {exp.period}
                  </motion.span>
                </div>

                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {exp.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      <span className="leading-relaxed">{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

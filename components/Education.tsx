'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';
import { fadeInUp, fadeInLeft, staggerContainer, hoverLift } from '@/lib/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

export function Education() {
  const education = {
    degree: 'Bachelor of Science in Engineering',
    university: 'Daffodil International University',
    period: 'Jan 2024 — Ongoing',
    major: 'Computer Science and Engineering (2ⁿᵈ Year–4ᵗʰ Semester)',
    cgpa: '3.90',
    achievements: [
      '3rd Position, Unlock The Algorithm - Competitive programming contest',
      '9th Position, Take-off Programming Contest - Daffodil International University',
    ],
  };

  return (
    <section id="education" className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-card/20">
      <Container>
        <SectionHeader
          title="Education"
          subtitle="Academic background and competitive programming achievements."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeInLeft}
            whileHover={hoverLift}
            className="card p-8 relative group"
          >
            {/* Decorative element */}
            <motion.div
              className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b from-primary to-emerald-400 rounded-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />

            <div className="pl-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {education.degree}
                  </h3>
                  <p className="text-primary font-medium mt-1">{education.university}</p>
                  <p className="text-sm text-muted mt-1">{education.major}</p>
                </div>
                <div className="text-right">
                  <motion.span
                    className="text-xs text-muted px-3 py-1 rounded-full border border-border block mb-2"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.5)' }}
                  >
                    {education.period}
                  </motion.span>
                  <motion.div
                    className="text-2xl font-bold text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    CGPA: {education.cgpa}
                  </motion.div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Competition & Awards
                </h4>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {education.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">
                        <FontAwesomeIcon icon={faTrophy} />
                      </span>
                      <span className="leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

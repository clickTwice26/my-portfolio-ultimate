'use client';

import { motion, useInView } from 'framer-motion';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';
import { skills } from '@/lib/data';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';
import { useRef } from 'react';

const levelToPercentage = {
  beginner: 40,
  intermediate: 60,
  advanced: 80,
  expert: 95,
};

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    const group = skill.group || 'General';
    if (!acc[group]) acc[group] = [];
    acc[group].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Proficiency across backend development, databases, cloud platforms, and DevOps."
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {Object.entries(groupedSkills).map(([group, groupSkills]) => (
            <motion.div key={group} variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6 text-primary">{group}</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {groupSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const percentage = skill.level ? levelToPercentage[skill.level] : 70;

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      whileHover={{ scale: 1.02, y: -2 }}
      className="card p-5 group cursor-default"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium text-sm group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <motion.span
          className="text-xs text-muted font-medium"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {skill.level || 'proficient'}
        </motion.span>
      </div>

      {/* Animated progress bar */}
      <div className="relative h-2 bg-border/50 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-emerald-400 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 bg-primary/30 rounded-full blur-sm"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>

      {/* Percentage tooltip on hover */}
      <motion.div
        className="mt-2 text-xs text-right text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ y: -5 }}
        whileHover={{ y: 0 }}
      >
        {percentage}%
      </motion.div>
    </motion.div>
  );
}

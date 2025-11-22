'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';
import { projects } from '@/lib/data';
import { fadeInUp } from '@/lib/animations';
import CardSwap, { Card } from './CardSwap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-card/20 to-transparent">
      <Container>
        <SectionHeader
          title="Projects"
          subtitle="Selected backend-focused work showcasing architecture and implementation."
        />
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative flex items-center justify-center"
          style={{ minHeight: '700px' }}
        >
          <CardSwap
            width={800}
            height={600}
            cardDistance={80}
            verticalDistance={70}
            delay={4000}
            pauseOnHover={true}
            easing="elastic"
          >
            {projects.map((p) => (
              <Card key={p.name}>
                <div className="h-full flex flex-col backdrop-blur-sm overflow-hidden">
                  {/* Image placeholder - Landscape */}
                  <div className="w-full h-2/5 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <div className="text-center p-6">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-primary text-6xl mb-4 opacity-30"
                      />
                      <p className="text-xs text-muted">Project Image (Landscape)</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {p.name}
                      </h3>
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-primary text-xl"
                      />
                    </div>
                    
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-grow">
                      {p.summary}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs font-semibold text-foreground mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {p.link && (
                        <a
                          className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Learn more
                          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </motion.div>
      </Container>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShieldHalved, faChartLine, faRocket } from '@fortawesome/free-solid-svg-icons';

export function About() {
  const highlights = [
    { icon: faBolt, title: 'Performance', desc: 'Optimized queries, caching strategies, and efficient algorithms' },
    { icon: faShieldHalved, title: 'Security', desc: 'Auth, encryption, input validation, and OWASP best practices' },
    { icon: faChartLine, title: 'Observability', desc: 'Logging, metrics, tracing, and alerting with modern APM tools' },
    { icon: faRocket, title: 'Scalability', desc: 'Horizontal scaling, load balancing, and distributed systems' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-card/20">
      <Container>
        <SectionHeader
          title="About Me"
          subtitle="I enjoy building reliable backend systems that are easy to operate and evolve."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 text-muted leading-relaxed"
          >
            <p>
              My expertise spans <strong className="text-foreground">Python, FastAPI, Django, Flask,</strong> and{' '}
              <strong className="text-foreground">AWS microservices architectures</strong>. I value clear contracts,
              thoughtful data modeling, robust testing, and strong observability.
            </p>
            <p>
              As VP of Engineering at LocalBy, I've architected and delivered AWS microservices ecosystems with 
              event-driven architectures. At DSAT School, I built complete learning platforms including payment 
              systems, AI-powered chatbots, and scalable backend architectures serving thousands of students.
            </p>
            <p>
              I'm passionate about solving complex distributed systems challenges and building tools that empower 
              users. My work spans from real-time competitive platforms to AI-powered educational systems, always 
              focusing on scalability, performance, and user experience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="card p-5 cursor-default"
              >
                <div className="text-primary text-3xl mb-3">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

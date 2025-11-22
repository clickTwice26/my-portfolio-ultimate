'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';
import { fadeInUp, scaleIn, staggerContainer, hoverGlow } from '@/lib/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export function Contact() {
  const contactMethods = [
    { icon: faEnvelope, label: 'Email', value: 'shagato@gmail.com', href: 'mailto:shagato@gmail.com' },
    { icon: faLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/shagato', href: 'https://www.shagato.me' },
    { icon: faGithub, label: 'GitHub', value: 'github.com/shagato', href: 'https://github.com' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="Let's Build Together"
          subtitle="Open to discussing backend engineering opportunities, API design, performance tuning, and cloud architecture."
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={scaleIn}
            whileHover={hoverGlow}
            className="card p-8 sm:p-10 text-center relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
                  'radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
                  'radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
                  'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div variants={fadeInUp} className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Ready to start your next project?</h3>
              <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
                I'm available for freelance work, full-time positions, and consulting projects. Let's discuss how
                I can help build robust, scalable backend solutions for your business.
              </p>

              <motion.a
                href="mailto:shagato@gmail.com"
                className="inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-base font-medium text-black group overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get In Touch</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </motion.span>
              </motion.a>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="mt-10 pt-10 border-t border-border/50 grid sm:grid-cols-3 gap-6"
            >
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative z-10"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-3xl mb-2 text-primary">
                    <FontAwesomeIcon icon={method.icon} />
                  </div>
                  <div className="text-xs text-muted mb-1">{method.label}</div>
                  <div className="text-sm text-foreground group-hover:text-primary transition-colors break-all">
                    {method.value}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

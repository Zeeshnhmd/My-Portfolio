"use client";

import { Award, PenTool, Search, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processIntro, processSteps } from "@/content/portfolio";
import { DURATION, EASE, VIEWPORT_ONCE } from "@/lib/motion";

const icons: LucideIcon[] = [Search, PenTool, ShieldCheck, Award];

export function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-b border-border py-section-sm md:py-section-lg">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: prefersReducedMotion ? 0 : DURATION.reveal, ease: EASE.out }}
        >
          <SectionHeading
            eyebrow={processIntro.eyebrow}
            heading={processIntro.heading}
            intro={processIntro.intro}
          />
        </motion.div>
        <motion.div
          className="process-grid relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: prefersReducedMotion ? 0 : 0.16,
                staggerChildren: prefersReducedMotion ? 0 : 0.07,
              },
            },
          }}
        >
          <motion.span
            aria-hidden="true"
            className="process-connector absolute hidden h-px origin-left bg-border lg:block"
            variants={{
              hidden: { scaleX: prefersReducedMotion ? 1 : 0 },
              visible: {
                scaleX: 1,
                transition: {
                  duration: prefersReducedMotion ? 0 : 0.45,
                  ease: EASE.out,
                },
              },
            }}
          />
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={step.title}
                className="process-column"
                variants={{
                  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: prefersReducedMotion ? 0 : DURATION.reveal,
                      ease: EASE.out,
                    },
                  },
                }}
              >
                <article
                  tabIndex={0}
                  className="process-step group relative grid h-full grid-cols-[2.5rem_1fr] gap-x-5 pb-9 md:flex md:min-h-64 md:flex-col md:items-center md:px-6 md:pb-6 md:text-center lg:min-h-72"
                >
                  <span className="process-node relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-strong text-primary transition-[background-color,color,border-color] duration-200">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                    <span className="sr-only">Step {index + 1}</span>
                  </span>
                  <div className="process-content flex min-w-0 flex-col md:items-center">
                    <span className="process-number font-serif text-2xl leading-10 text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="process-title mt-4 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="process-description mt-3 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="process-underline absolute bottom-4 left-[3.75rem] right-0 h-0.5 origin-left scale-x-0 bg-primary-solid transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 md:inset-x-6 md:bottom-0"
                  />
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

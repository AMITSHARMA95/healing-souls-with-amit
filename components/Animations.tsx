'use client'

import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

// Fade in animation
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}

// Slide up animation
export const SlideUp = ({
  children,
  delay = 0,
  duration = 0.8,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for children
export const StaggerContainer = ({
  children,
  delayOffset = 0.1,
}: {
  children: ReactNode
  delayOffset?: number
}) => {
  const validChildren = React.Children.toArray(children)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delayOffset,
          },
        },
      }}
    >
      {validChildren.map((child, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ ease: 'easeOut', duration: 0.6 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Hover scale animation
export const HoverScale = ({
  children,
  scale = 1.02,
}: {
  children: ReactNode
  scale?: number
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

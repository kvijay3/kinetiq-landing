import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TextPressure from './TextPressure.jsx';
import GradualBlur from './GradualBlur.jsx';

const SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwJEiKDXVrs-t1hoqNF9ROd3JwyXGqEUd7xyREJJqtpVZ-JIJtXjzD_BmJ5syTsQeJH/exec';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      await fetch(SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ email: email.trim() }),
      });
      setSubmitted(true);
      setError(false);
    } catch (err) {
      setSubmitted(true);
      setError(false);
    }
  };

  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center gap-20 px-6 text-center">
      {/* Eyebrow + Headline grouped together */}
      <div className="flex w-full max-w-5xl flex-col items-center">
        {/* Eyebrow — fade in. Only "kinetiq" in SF Compact Rounded */}
        <motion.div
          className="mb-10 text-2xl font-light tracking-normal text-neutral-300 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 300, letterSpacing: '0.02em' }}>
            Introducing
          </span>{' '}
          <span style={{ fontFamily: "'SF Compact Rounded', sans-serif", fontWeight: 100, fontSize: '1.15em', letterSpacing: '0.1em' }}>
            kinetiq
          </span>
        </motion.div>

        {/* Headline with TextPressure — metallic variable font */}
        <div className="relative h-[140px] w-full max-w-5xl sm:h-[180px] md:h-[220px] lg:h-[260px]">
          <TextPressure
            text="Mapping every muscle fiber."
            fontFamily="Roboto Flex"
            fontUrl="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#e8e8e8"
            minFontSize={24}
            className="metallic-text"
          />
        </div>
      </div>

      {/* Waitlist — fades in 3s after page load */}
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full flex-1 rounded-full border border-blue-900/40 bg-blue-950/20 px-5 py-3.5 text-sm text-neutral-200 placeholder-neutral-600 outline-none transition-all duration-300 focus:border-blue-700/60 focus:bg-blue-900/20 sm:text-base"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-neutral-100 px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white active:scale-[0.98] sm:w-auto"
              >
                Join the waitlist
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-full border border-blue-900/40 bg-blue-950/20 px-6 py-4"
            >
              <p className="text-sm font-medium text-neutral-200">
                You're on the list. We'll be in touch.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradual blur at the bottom of the waitlist */}
        <div className="relative mt-2 overflow-hidden rounded-full">
          <GradualBlur
            target="parent"
            position="bottom"
            height="2rem"
            strength={1}
            divCount={4}
            curve="bezier"
            exponential={true}
            opacity={0.5}
          />
        </div>
      </motion.div>
    </section>
  );
}

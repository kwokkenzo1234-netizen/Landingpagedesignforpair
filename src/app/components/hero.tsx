import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EAEAEA0A_1px,transparent_1px),linear-gradient(to_bottom,#EAEAEA0A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4F8CFF] rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-medium">
            <span className="text-foreground">Berhenti menyalin kode.</span>
            <br />
            <span className="bg-gradient-to-r from-[#4F8CFF] to-[#4CAF91] bg-clip-text text-transparent">
              Mulai memahaminya.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Pair adalah teman coding yang tenang dan bijaksana. Belajar berpikir seperti
            senior engineer—bukan hanya copas dari AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center gap-2">
              Gabung Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-card text-card-foreground rounded-lg font-medium hover:bg-card/80 transition-all border border-border">
              Lihat Cara Kerjanya
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
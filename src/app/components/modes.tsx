import { motion } from "motion/react";
import { Lightbulb, Target } from "lucide-react";

export function Modes() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Dua mode. Satu tujuan:{" "}
            <span className="bg-gradient-to-r from-[#4F8CFF] to-[#4CAF91] bg-clip-text text-transparent">
              Bikin kamu lebih baik.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pair menyesuaikan dengan tingkat pengalamanmu, membimbing pemula dan
            menantang yang sudah jago.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Guided Mode */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Guided Mode</h3>
            <p className="text-muted-foreground mb-6">
              Untuk pemula yang ingin belajar cepat tanpa stuck di zona nyaman.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <p className="text-sm text-foreground/90">
                  Lebih banyak pertanyaan untuk bantu kamu mikir lebih dalam
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <p className="text-sm text-foreground/90">
                  Penjelasan kaya konteks tentang pattern yang umum
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <p className="text-sm text-foreground/90">
                  Analogi dan reasoning, bukan cuma snippet kode
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Companion Mode */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group p-8 bg-card rounded-lg border border-border hover:border-[#4CAF91]/50 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-[#4CAF91]/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#4CAF91]" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Companion Mode</h3>
            <p className="text-muted-foreground mb-6">
              Untuk dev berpengalaman yang butuh partner tajam dan minimal.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF91] mt-2" />
                <p className="text-sm text-foreground/90">
                  Interupsi minimal, dampak maksimal
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF91] mt-2" />
                <p className="text-sm text-foreground/90">
                  Fokus ke intent, trade-off, dan edge case
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF91] mt-2" />
                <p className="text-sm text-foreground/90">
                  Diem tapi tajam—kayak senior engineer di sebelah kamu
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { useState } from "react";

export function CodePreview() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const codeLines = [
    { code: "const handleSubmit = async (data) => {", indent: 0 },
    { code: "// Gimana kalau data-nya invalid?", indent: 1, isComment: true },
    { code: "const result = await api.create(data);", indent: 1 },
    { code: "return result;", indent: 1 },
    { code: "};", indent: 0 },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Pertanyaan yang bikin kamu{" "}
            <span className="bg-gradient-to-r from-[#4F8CFF] to-[#4CAF91] bg-clip-text text-transparent">
              mikir lebih dalam
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pair gak cuma ngasih tau apa yang harus dikoding. Tapi nanya
            pertanyaan yang bikin mindset kamu lebih tajam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            {/* Editor header */}
            <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-muted-foreground ml-4 font-mono">
                handler.js
              </span>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredLine(index)}
                  onHoverEnd={() => setHoveredLine(null)}
                  className={`py-1 px-3 rounded transition-all ${
                    hoveredLine === index ? "bg-primary/10" : ""
                  }`}
                  style={{ paddingLeft: `${line.indent * 24 + 12}px` }}
                >
                  <span className="text-muted-foreground mr-4 select-none">
                    {index + 1}
                  </span>
                  <span
                    className={
                      line.isComment
                        ? "text-[#4CAF91] italic"
                        : "text-foreground"
                    }
                  >
                    {line.code}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20"
          >
            <p className="text-sm text-muted-foreground mb-2">Pair nanya:</p>
            <p className="text-foreground">
              "Gimana kalau data-nya invalid? Validasi sebelum atau di dalam handler?"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
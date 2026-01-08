import { motion } from "motion/react";
import { Brain, MessageCircle, Shield } from "lucide-react";

export function Philosophy() {
  const principles = [
    {
      icon: Brain,
      title: "Tenang",
      description: "Gak reaktif. Gak bikin overwhelmed. Cuma bimbingan yang kalem dan stabil.",
    },
    {
      icon: MessageCircle,
      title: "Bijaksana",
      description: "Nanya hal yang tepat, bukan nanya banyak hal. Kualitas lebih penting dari kuantitas.",
    },
    {
      icon: Shield,
      title: "Tegas",
      description: "Gak nurut-nurutin kebiasaan males. Bertumbuh itu artinya keluar dari zona nyaman.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Kayak senior engineer.
            <br />
            Bukan asisten yang cerewet.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pair menerapkan tiga prinsip inti yang bikin beda dari
            AI coding tools pada umumnya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <principle.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">{principle.title}</h3>
              <p className="text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
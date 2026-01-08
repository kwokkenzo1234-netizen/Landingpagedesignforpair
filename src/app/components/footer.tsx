import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-medium">Pair</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Teman coding yang tenang dan bijaksana. Belajar berpikir seperti
              senior engineer.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-medium mb-4">Produk</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#modes"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mode
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Harga
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Pair. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privasi
            </a>
            <a
              href="#terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
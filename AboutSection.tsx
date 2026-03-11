import { Cpu, Zap, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left col - 3/5 */}
          <div className="lg:col-span-3">
            <span className="section-label">About Us</span>
            <h2 className="section-title mb-6">
              Advancing Circuits &<br className="hidden md:block" /> Systems in Kerala
            </h2>
            <div className="accent-bar" />
            <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">
              The IEEE Circuits and Systems Society Kerala Section is dedicated
              to advancing the theory, design, and implementation of circuits
              and systems. We bring together students, researchers, and
              professionals to foster innovation in VLSI, signal processing,
              embedded systems, and more.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Our Kerala Chapter serves as a vibrant hub connecting academic
              institutions and industry partners across the state, organizing
              workshops, conferences, and knowledge-sharing events that push the
              boundaries of engineering education and practice.
            </p>
          </div>

          {/* Right col - 2/5 Vision/Mission */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: BookOpen,
                title: "Our Vision",
                text: "To be the premier platform for circuits and systems innovation in Kerala, inspiring engineers to shape the future of technology.",
              },
              {
                icon: Cpu,
                title: "Our Mission",
                text: "Foster collaboration between academia and industry, provide hands-on learning, and promote cutting-edge research in CAS.",
              },
              {
                icon: Zap,
                title: "Our Values",
                text: "Excellence in education, inclusivity in membership, integrity in research, and relentless innovation.",
              },
            ].map((item) => (
              <div key={item.title} className="card-professional">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 bg-primary/10 flex items-center justify-center">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-foreground mb-1.5 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

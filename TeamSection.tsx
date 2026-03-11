import { Linkedin, User } from "lucide-react";

const members = [
  { name: "Dr. Anand Kumar", role: "Chapter Chair" },
  { name: "Prof. Meera Nair", role: "Vice Chair" },
  { name: "Arjun Menon", role: "Secretary" },
  { name: "Devika Pillai", role: "Treasurer" },
  { name: "Rahul Krishnan", role: "Membership Chair" },
  { name: "Sneha Thomas", role: "Student Activities" },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Executive Committee</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-10">
          {members.map((m) => (
            <div key={m.name} className="group text-center">
              {/* Photo */}
              <div className="w-32 h-32 md:w-36 md:h-36 mx-auto mb-5 bg-muted overflow-hidden relative">
                <User
                  size={52}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/30"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              </div>
              <h3
                className="font-semibold text-foreground text-sm md:text-base mb-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {m.name}
              </h3>
              <p className="text-xs text-primary font-medium mb-3 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {m.role}
              </p>
              <a
                href="#"
                className="inline-flex text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${m.name} LinkedIn`}
              >
                <Linkedin size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

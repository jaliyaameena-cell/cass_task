import { MapPin, Calendar, ArrowRight } from "lucide-react";

interface EventData {
  title: string;
  date: string;
  location: string;
  description: string;
  upcoming: boolean;
}

const events: EventData[] = [
  {
    title: "International Symposium on VLSI Design",
    date: "April 12, 2026",
    location: "CET Trivandrum",
    description:
      "A two-day symposium featuring keynotes from leading VLSI researchers and hands-on design sessions.",
    upcoming: true,
  },
  {
    title: "Workshop on Signal Processing with AI",
    date: "May 8, 2026",
    location: "NIT Calicut",
    description:
      "Explore the intersection of classical signal processing techniques and modern AI-driven approaches.",
    upcoming: true,
  },
  {
    title: "CASS Annual Conference 2025",
    date: "November 22, 2025",
    location: "IIT Palakkad",
    description:
      "The flagship annual conference with paper presentations, panel discussions, and networking sessions.",
    upcoming: false,
  },
  {
    title: "Embedded Systems Bootcamp",
    date: "September 5, 2025",
    location: "CUSAT Kochi",
    description:
      "A week-long bootcamp covering ARM architecture, RTOS programming, and IoT system design.",
    upcoming: false,
  },
];

const EventCard = ({ event, index }: { event: EventData; index: number }) => (
  <div className={`flex flex-col md:flex-row gap-6 ${index > 0 ? "pt-8 border-t border-border" : ""}`}>
    {/* Date block */}
    <div className="shrink-0 md:w-28">
      <span className="text-xs text-muted-foreground font-medium block" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {event.date}
      </span>
      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-1">
        <MapPin size={11} /> {event.location}
      </span>
    </div>

    {/* Content */}
    <div className="flex-1">
      <h3
        className="font-semibold text-foreground text-base mb-2 hover:text-primary transition-colors cursor-pointer"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {event.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {event.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Learn More <ArrowRight size={14} />
      </a>
    </div>
  </div>
);

const EventsSection = () => {
  const upcoming = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);

  return (
    <section id="events" className="section-padding" style={{ backgroundColor: "hsl(210, 20%, 96%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">What's Happening</span>
          <h2 className="section-title">Events & Programs</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Upcoming */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={18} className="text-primary" />
              <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Upcoming
              </h3>
              <span className="ml-auto text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-1">
                {upcoming.length} Events
              </span>
            </div>
            <div className="space-y-0">
              {upcoming.map((e, i) => (
                <EventCard key={e.title} event={e} index={i} />
              ))}
            </div>
          </div>

          {/* Past */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={18} className="text-muted-foreground" />
              <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Past Events
              </h3>
            </div>
            <div className="space-y-0">
              {past.map((e, i) => (
                <EventCard key={e.title} event={e} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

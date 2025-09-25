import { motion } from 'motion/react';
import { Building2, Calendar, Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  years: string;
}

export function CareerTimeline() {
  const experiences: ExperienceItem[] = [
    {
      company: "Corto AI",
      role: "Senior Software Engineer",
      duration: "2023 - 2025",
      years: "2+ years"
    },
    {
      company: "Mode Analytics",
      role: "Software Engineer IV",
      duration: "2022 - 2022",
      years: "8 months"
    },
    {
      company: "Western Union",
      role: "Senior Software Engineer",
      duration: "2020 - 2022",
      years: "2+ years"
    },
    {
      company: "Google",
      role: "Software Engineer",
      duration: "2019 - 2020",
      years: "1 year"
    },
    {
      company: "Accenture",
      role: "Associate Software Engineer",
      duration: "2018 - 2019",
      years: "1 year"
    }
  ];

  return (
    <div className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="text-lg">Career Journey</span>
        </div>
        <p className="text-muted-foreground">7 years • 4 companies</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"
        />

        {/* Experience items */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 + 0.5,
                ease: "easeOut"
              }}
              className="relative flex items-start gap-4 group"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.2 + 0.7,
                  type: "spring",
                  stiffness: 200
                }}
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
              >
                <Building2 className="w-5 h-5 text-primary" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0 pb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-foreground">{exp.role}</h3>
                    <span className="text-xs text-muted-foreground bg-accent/50 px-2 py-1 rounded">
                      {exp.years}
                    </span>
                  </div>
                  <p className="text-primary mb-1">{exp.company}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.duration}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8 grid grid-cols-2 gap-4 text-center"
      >
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-2xl font-medium text-primary">7+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-2xl font-medium text-primary">50+</div>
          <div className="text-sm text-muted-foreground">Projects Delivered</div>
        </div>
      </motion.div>
    </div>
  );
}
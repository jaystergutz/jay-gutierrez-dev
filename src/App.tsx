import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Code, Palette, Zap, Globe, Smartphone, Database, Codesandbox, TestTubes, FolderTree, CodeXml, Braces, Blocks, BookOpenText } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { FloatingShapes } from './components/FloatingShapes';
import { TypewriterText } from './components/TypewriterText';
import { SkillIcon } from './components/SkillIcon';
import { CareerTimeline } from './components/CareerTimeline';
import ContactForm from './components/ContactForm';

export default function App() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);

  const skills = [
    { icon: Code, name: 'React' },
    { icon: Braces, name: 'Angular' },
    { icon: Palette, name: 'SCSS/Tailwind' },
    { icon: Zap, name: 'Typescript' },
    { icon: CodeXml, name: 'HTML5' },
    { icon: FolderTree, name: 'Redux/NgRx' },
    {}, // Grid filler
    { icon: Database, name: 'REST/GraphQL' },
    { icon: Blocks, name: 'Vite/Webpack' },
    { icon: TestTubes, name: 'Jasmine/RTL/Jest' },
    { icon: BookOpenText, name: 'Storybook' },
    {} // Grid filler
  ];

  const typewriterTexts = [
    "Frontend Developer",
    "Angular/React Specialist",
    "UI/UX Enthusiast",
    "JavaScript Expert"
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingShapes />
      
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-6xl md:text-8xl tracking-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Jay Gutierrez
            </motion.h1>
            
            <div className="text-2xl md:text-4xl text-muted-foreground min-h-[1.5em]">
              <TypewriterText texts={typewriterTexts} />
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about creating beautiful, interactive web experiences that users love. 
              Specializes in modern Angular, and React applications with a focus on performance and accessibility.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="relative overflow-hidden group">
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  View My Work
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border border-border hover:bg-accent/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              My Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              skill.icon  ? <SkillIcon
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                index={index}
              /> : <span></span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a passionate Frontend Software Engineer with 7+ years of experience building 
                  modern web applications. I love creating intuitive user interfaces that 
                  not only look great but provide exceptional user experiences.
                </p>
                <p>
                  My journey started with curiosity about how websites work, and it has 
                  evolved into a deep passion for crafting pixel-perfect, performant 
                  applications using the latest technologies. I've had the privilege of 
                  working with amazing teams at different companies, each teaching me 
                  valuable lessons about scalable frontend architecture.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'TypeScript', 'Angular', 'Tailwind CSS', 'Motion', 'Node.js', 'Redux', 'NgRx', 'Rxjs'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <CareerTimeline />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to bring your next project to life? I'd love to hear about your ideas 
              and discuss how we can create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactForm>
                <Button size="lg" className="relative overflow-hidden group">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.span>
              </Button>
              </ContactForm>
              
              <Button variant="outline" size="lg">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  Download Resume
                </motion.span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
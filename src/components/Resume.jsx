import { 
  Activity,
  Award,
  BadgeCheck,
  Briefcase, 
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code,
  Cog,
  Database,
  FileCode,
  GraduationCap, 
  GitBranch,
  LineChart,
  Mail, 
  MapPin, 
  Phone, 
  Brain,
  Bot,
  Settings, 
  Star,
  Terminal,
  Users,
  Linkedin
} from 'lucide-react';
import { useState } from 'react';

const AchievementCard = ({ icon: Icon, title, metrics }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
          <Icon className="text-blue-600" size={24} />
          <h3 className="font-bold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-2">
          {metrics.map((metric, index) => (
              <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{metric}</span>
              </li>
          ))}
      </ul>
  </div>
);

const TechStack = ({ title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="font-bold text-gray-800 mb-4">
            {typeof title === 'string' ? title : title}
        </h3>
        <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
                <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const ExperienceCard = ({ role }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-6">
      <div className="flex justify-between items-baseline mb-4">
          <div>
              <h3 className="text-xl font-bold text-gray-800">{role.title}</h3>
              <p className="text-gray-600">{role.company}</p>
          </div>
          <div className="text-right">
              <span className="text-blue-600 font-semibold">{role.period}</span>
              <p className="text-gray-600 text-sm">{role.location}</p>
          </div>
      </div>
      {role.highlights.map((highlight, index) => (
          <div key={index} className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">{highlight.category}</h4>
              <ul className="space-y-2">
                  {highlight.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                          <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                      </li>
                  ))}
              </ul>
          </div>
      ))}
  </div>
);

export default function ModernResume() {
  const keyAchievements = [
      {
          icon: Bot,
          title: "Generative AI (GenAI) Architecture Impact",
          metrics: [
              "Architected and developed enterprise-wide GenAI SDLC Assist solution on AWS",
              "Generated revenue exceeding $100M+ through strategic GenAI solution development",
              "Delivered $800K savings and 18,000+ efficiency hours via GenAI SDLC",
              "Reduced project timelines by up to 3 months using GenAI SDLC",
              
          ]
      },
      {
          icon: Users,
          title: "Leadership & Management",
          metrics: [
              "Lead 50+ member multi-shore development team",
              "Developed and delivered enterprise GenAI training program reaching 5000+ professionals across 30+ accounts",
              "Managed $5M+ annual technology budget",
              "Built high-performing engineering teams",
              "Implemented balanced team structure",
              
          ]
      },
      {
          icon: Activity,
          title: "Technical Innovation",
          metrics: [
              "Developed Multi-LLM integration architecture",
              "Led and implemented End-to-end system modernization",
              "Led and implemented various Cloud-native solutions design",
              "Led Advanced GenAI implementations with industry-leading frameworks for various business use cases",
              
          ]
      }
  ];

  const experience = [
      {
          title: "Technology Architecture Manager",
          company: "Accenture",
          period: "Dec 2022 - Present",
          location: "Calgary, Alberta, Canada",
          highlights: [
              {
                  category: "Technical Architecture & Innovation",
                  points: [
                      "Architected and implemented enterprise-wide Generative AI (GenAI) Software Development Life Cycle (SDLC) Assist platform on AWS, integrating Claude, OpenAI, and Llama models",
                      "Implemented sophisticated Retrieval Augmented Generation (RAG) patterns with vector databases such as Weaviate for enhanced knowledge retrieval with graph concepts",
                      "Designed and implmented serverless architecture ensuring scalability and cost optimization",
                      "Established architectural patterns for AI integration across enterprise systems",
                      "Created and delivered comprehensive GenAI training program reaching 5000+ professionals across 30+ accounts"
                  ]
              },
              {
                  category: "Team Leadership & Management",
                  points: [
                      "Built and led high-performing engineering teams through strategic hiring and development",
                      "Drove technical hiring initiatives including screening, interviewing, and team composition for backend developers, managers, and tech leads",
                      "Managed performance evaluations such as promotions and firing decisions",
                      "Established agile development practices and DevOps culture",
                      "Led and managed 50+ member multi-shore delivery team across US, India, and Canada, overseeing technical operations and project delivery",
                      
                  ]
              },
              {
                  category: "Business Impact & Innovation",
                  points: [
                      "Engineered an enterprise GenAI SDLC platform delivering $800K cost optimization and 18,000+ operational hours savings within 10 months for a major enterprise client",
                      "Integrated GenAI-driven development workflows in the platform, accelerating project delivery cycles by 1.5-3 months across multiple teams",
                      "Developed an GenAI-powered support agent within the platform, enabling 40% faster issue resolution for operational teams",
                      "Implemented automated code quality analysis and GenAI-assisted refactoring through the platform, reducing technical debt by 40%",
                      "Spearheaded enterprise GenAI solutions driving $100M+ revenue across 30+ key accounts"
                  ]
              }
          ]
      },
      {
          title: "Application Development Associate Manager",
          company: "Accenture",
          period: "Dec 2019 - Nov 2022",
          location: "Montreal, Quebec, Canada",
          highlights: [
              {
                  category: "Innovation & Technical Leadership",
                  points: [
                      "Led Medidata convergence project, implementing complex system integrations(3M+ project value)",
                      "Architected Clinical Data Warehouse with advanced analytics capabilities",
                      "Led Oracle Thesaurus Management System project(1M+ project value) used for medical coding and implementing complex system integrations",
                      "Led architecture modernization initiatives resulting in 30% improvement in system performance",
                      "Established dedicated team for clinical data management systems(CDMS), standardizing best practices across teams",
                      "Established DevOps practices, On-Prem to AWS migrations and implementation of CI/CD pipelines"
                  ]
              },
              {
                  category: "Operations Management",
                  points: [
                      "Managed multi-shore operations for 25+ member business unit",
                      "Orchestrated resource allocation across 6 parallel projects while maintaining 95% utilization rate",
                      "Implemented resource capacity planning and budget optimization for entire CDMS team ",
                      "Developed strategic roadmaps for technology modernization"
                  ]
              }
          ]
      },
      {
          title: "Application Development Specialist",
          company: "Accenture",
          period: "Dec 2016 - Nov 2019",
          location: "New Jersey, USA",
          highlights: [
              {
                  category: "Technical Innovation ",
                  points: [
                      "Architected and implemented cloud-native microservices architecture reducing deployment time by 60%",
                      "Developed automated testing framework reducing regression testing time by 70%"
                  ]
              },
              {
                  category: "Technical Delivery",
                  points: [
                      "Pioneered AWS cloud migrations reducing operational costs by 25%",
                      "Led cross-functional teams across 3 global locations ensuring 24x7 delivery support",
                      "Led the delivery of 50+ small to medium sized high-impact projects in pharmaceutical R&D",
                  ]
              }
          ]
      },
      {
          title: "Software Engineering Senior Analyst",
          company: "Accenture",
          period: "Sep 2013 - Nov 2016",
          location: "New Jersey, USA",
          highlights: [
              {
                  category: "Technical Implementation",
                  points: [
                      "Led integration with electronic Trial Master File (eTMF) Veeva Vault improving efficiency",
                      "Managed infrastructure upgrades to WebLogic 12c and Oracle 12c",
                      "Reduced job errors by 30% through process improvements",
                      "Developed reusable components library reducing development time by 35%",
                      "Led system integration efforts with 5+ third-party vendors",
                      "Implemented continuous integration and technical enhancements reducing build and integration failures by 70%",
                      "Led performance optimization initiatives improving response time by 50%"

                  ]
              },
              {
                  category: "Leadership",
                  points: [
                      "Mentored 10+ junior developers in cloud technologies and best practices",
                      "Led technical documentation initiatives improving knowledge transfer efficiency"
                  ]
              },
              
          ]
      },
      {
          title: "Software Engineer",
          company: "Accenture",
          period: "Sep 2011 - Aug 2013",
          location: "Bangalore, India",
          highlights: [
              {
                  category: "Development & Implementation",
                  points: [
                      "Developed and optimized Java applications for pharmaceutical clients",
                      "Led migration project updating 80+ Java portlets",
                      "Implemented Oracle Advanced Queues optimization",
                      "Reduced system maintenance overhead by 40%"
                  ]
              }
          ]
      },
      {
          title: "Associate Software Engineer",
          company: "Accenture",
          period: "Jul 2010 - Aug 2011",
          location: "Bangalore, India",
          highlights: [
              {
                  category: "Development & Support",
                  points: [
                      "Handled 1000+ user issues demonstrating strong problem-solving capabilities",
                      "Managed complex system modifications and change management tickets",
                      "Built foundation in application architecture and technical implementations",
                      "Developed comprehensive understanding of pharmaceutical industry systems"
                  ]
              }
          ]
      }
  ];
  return (
      <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
              {/* Header */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-8 mb-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Raghav Grover</h1>
                        <h2 className="text-lg sm:text-xl text-blue-600 font-semibold">Senior Technology Architecture Leader</h2>
                        <p className="text-gray-600 max-w-2xl">
                            Visionary technology leader with over 14 years of experience in architecting and implementing innovative solutions in life sciences and pharmaceutical industries. 
                            Specialized in Generative AI (GenAI), cloud architecture, and digital transformation, with a proven track record of building high-performing teams 
                            and delivering enterprise-scale solutions that drive significant business value.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-2">
                            <Mail size={18} className="text-blue-600" />
                            <a 
                            href="mailto:raghavgrover13@icloud.com"
                            className="text-sm sm:text-base hover:text-blue-600 hover:underline"
                                            >
                            raghavgrover13@icloud.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={18} className="text-blue-600" />
                            <a 
                                href="tel:+17329975241"
                                className="text-sm sm:text-base hover:text-blue-600 hover:underline"
                            >
                                +1-732-997-5241
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-blue-600" />
                            <span className="text-sm sm:text-base">Calgary, Alberta, Canada</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin size={18} className="text-blue-600" />
                            <a 
                                href="https://linkedin.com/in/raghav-grover-82906538" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base text-blue-600 hover:text-blue-800 hover:underline"
                            >
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>

              {/* Key Achievements */}
              <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {keyAchievements.map((achievement, index) => (
                          <AchievementCard key={index} {...achievement} />
                      ))}
                  </div>
              </div>

              {/* Technical Expertise */}
              <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TechStack
                          title={
                            <div className="flex items-center gap-2">
                                <Bot className="text-blue-600" size={20} />
                                <span>Generative AI(GenAI)</span>
                            </div>
                        }
                          items={[
                              "Large Language Models (LLMs: Claude, GPT Models etc.)",
                              "Advanced Prompt Engineering",
                              "Retrieval Augmented Generation (RAG), CRAG Patterns",
                              "Vector and Graph Databases"
                          ]}
                      />
                      <TechStack
                          title={
                            <div className="flex items-center gap-2">
                                <Cloud className="text-blue-600" size={20} />
                                <span>Cloud & Architecture</span>
                            </div>
                        }
                          items={[
                              "AWS(Lambda, ECS, S3, EC2)",
                              "Google Cloud Platform",
                              "Serverless Architecture",
                              "Microservices & API Design",
                              "Technical Architecture"
                          ]}
                      />
                      <TechStack
                          title={
                            <div className="flex items-center gap-2">
                                <Code className="text-blue-600" size={20} />
                                <span>Development</span>
                            </div>
                        }
                          items={[
                              "Languages: Python, Java, PL/SQL",
                              "Frameworks: FastAPI, Flask, Spring Boot",
                              "Devops: Docker, CI/CD, Github Actions",
                              "IDEs: VS Code, Eclipse IDE, LM Studio",
                              "Collaboration: Microsoft Office Suite, Confluence",
                          ]}
                      />
                  </div>
              </div>

              {/* Professional Experience */}
              <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Experience</h2>
                  {experience.map((role, index) => (
                      <ExperienceCard key={index} role={role} />
                  ))}
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-6">
                      <h3 className="font-bold text-gray-800 mb-4">Education</h3>
                      <div className="space-y-2">
                          <p className="text-gray-700">Bachelor of Technology (2006 - 2010)</p>
                          <p className="text-gray-600">Electronics and Communications Engineering</p>
                          <p className="text-gray-600">Jaypee University of Information Technology</p>
                      </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-6">
                      <h3 className="font-bold text-gray-800 mb-4">Professional Certifications</h3>
                      <div className="space-y-2">
                          <p className="text-gray-700">Accenture Certified Technology Architect Associate</p>
                          <p className="text-gray-700">Oracle Cloud Infrastructure Foundations 2021</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

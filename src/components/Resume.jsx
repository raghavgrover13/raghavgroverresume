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
    Linkedin,
    TrendingUp,
    Zap,
    Shield,
    Target,
    Sparkles
  } from 'lucide-react';
  import { useState, useEffect } from 'react';
  
  const MetricCard = ({ number, label, icon: Icon }) => (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{number}</p>
          <p className="text-gray-600 mt-1">{label}</p>
        </div>
        <Icon className="text-blue-500 opacity-20" size={48} />
      </div>
    </div>
  );
  
  const AchievementCard = ({ icon: Icon, title, metrics }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg group-hover:scale-110 transition-transform">
          <Icon className="text-blue-600" size={24} />
        </div>
        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
      </div>
      <ul className="space-y-3">
        {metrics.map((metric, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-green-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700 leading-relaxed">{metric}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const TechStack = ({ title, items, icon: Icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 group">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Icon className="text-blue-600" size={20} />
        <span>{title}</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
  
  const ExperienceCard = ({ role, isLatest }) => (
    <div className={`bg-white p-6 rounded-xl shadow-sm border ${isLatest ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-100'} hover:shadow-xl transition-all duration-300 mb-6 relative overflow-hidden group`}>
      {isLatest && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold flex items-center gap-1">
          <Sparkles size={14} />
          Current Role
        </div>
      )}
      <div className="flex justify-between items-baseline mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{role.title}</h3>
          <p className="text-gray-600 flex items-center gap-2 mt-1">
            <Building2 size={16} />
            {role.company}
          </p>
        </div>
        <div className="text-right">
          <span className="text-blue-600 font-semibold">{role.period}</span>
          <p className="text-gray-600 text-sm flex items-center gap-1 justify-end">
            <MapPin size={14} />
            {role.location}
          </p>
        </div>
      </div>
      {role.highlights.map((highlight, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            {highlight.category}
          </h4>
          <ul className="space-y-2 ml-3">
            {highlight.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start gap-2 group/item">
                <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                <span className="text-gray-700 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  
  export default function EnhancedResume() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const keyMetrics = [
      { number: "15+", label: "Years Experience", icon: TrendingUp },
      { number: "$100M+", label: "Revenue Generated", icon: Target },
      { number: "42K+", label: "Hours Saved", icon: Zap },
      { number: "$10M+", label: "Portfolio Managed", icon: Award }
    ];
  
    const keyAchievements = [
      {
        icon: Bot,
        title: "Generative AI (GenAI) Architecture Impact",
        metrics: [
          "Directed architecture and development of enterprise-wide GenAI SDLC Assist solution on AWS",
          "Generated revenue exceeding $100M+ through strategic GenAI solution development",
          "Delivered $2M+ savings and 42,000+ efficiency hours and reduced project timelines in general by a minimum of ~3 months through GenAI SDLC Assist platform",
          "Oversaw implementation of production-grade Agentic AI system for enterprise helpdesk operations",
          "Oversaw implementation of production-grade Agentic AI system for getting quick insights from complex clinical study data, reducing time-to-insights from weeks to minutes"
        ]
      },
      {
        icon: Users,
        title: "Leadership & Management Excellence",
        metrics: [
          "Lead 50+ member multi-shore development team across 3 continents",
          "Directed development and delivery of enterprise GenAI training program reaching 5000+ professionals across 30+ accounts",
          "Managed $5M+ annual technology budget with consistent ROI delivery",
          "Built and scaled engineering teams to optimal size while maintaining high performance",
          "Established balanced team structure improving delivery efficiency by 40%",
          "Oversee project pricing and CCI to ensure consistent profitability"
        ]
      },
      {
        icon: Zap,
        title: "Technical Innovation & Transformation",
        metrics: [
          "Led comprehensive AI transformation strategy and technical solution presentation in client orals, securing $7M+ enterprise deal through innovative GenAI architecture proposal",
          "Oversaw development of Multi-LLM integration architecture serving 1000+ concurrent users",
          "Led end-to-end system modernization reducing operational costs by 35%",
          "Directed implementation of cloud-native solutions achieving 99.9% uptime",
          "Led pioneering of advanced GenAI implementations across 10+ business verticals",
          "Successfully engaged with MDs and SMDs to drive strategic technology adoption across pharmaceutical enterprise accounts"
        ]
      }
    ];
  
    const experience = [
      {
        title: "Software Engineering Advisory Sr. Manager",
        company: "Accenture",
        period: "Jun 2025 - Present",
        location: "New York City, New York, USA",
        highlights: [
          {
            category: "Strategic Leadership & P&L Oversight",
            points: [
              "Direct enterprise-wide AI transformation strategy and architecture decisions across multiple Fortune 100 pharmaceutical client portfolios, with final decision-making authority over architectural standards and implementation approaches",
              "Manage P&L responsibility for enterprise architecture division with annual budget oversight of $6-7M USD, including revenue optimization, cost control, and profitability management across strategic client engagements",
              "Exercise hiring and performance management authority for senior-level positions, conducting recruitment for principal architects, senior managers, and technical leads across global delivery centers",
              "Direct and manage teams of 20+ resources globally including onshore managers, leads and architects, providing direct supervision and strategic direction for senior-level personnel",
              "Report directly to Managing Directors (MDs) and Senior Managing Directors (SMDs) on divisional performance, strategic technology direction, and enterprise transformation outcomes",
              "Conduct performance reviews and compensation decisions for senior staff including managers and team leads based on strategic contribution and client impact"
            ]
          },
          {
            category: "Organizational Governance & Strategic Operations",
            points: [
              "Establish organizational policies and governance frameworks for AI Centers of Excellence and enterprise architecture practices, setting standards across multiple business units",
              "Lead architecture review board with final approval authority over enterprise-level technology solutions, ensuring alignment with organizational strategy and client objectives",
              "Direct strategic resource planning, skills transformation initiatives, and workforce optimization for enterprise architecture division across multiple geographies",
              "Exercise budget approval authority for technology investments, vendor selections, and strategic partnerships across enterprise client portfolios",
              "Oversee project pricing strategies and contract negotiations for multi-million dollar transformation engagements, with authority to approve pricing models and profitability targets",
              "Manage risk assessment, compliance oversight and client data protection controls for enterprise technology solutions and staff personnel, ensuring adherence to regulatory requirements, security standards, and proper data handling protocols across all human and technical touchpoints"
            ]
          },
          {
            category: "Technical Architecture & Business Impact",
            points: [
              "Direct comprehensive AI transformation strategy and presentation in high-stakes client orals, securing $7M+ enterprise engagement through innovative architectural solutions and executive stakeholder alignment",
              "Oversee architecture and deployment of enterprise-grade Agentic AI systems transforming helpdesk operations, achieving 70% reduction in resolution time and delivering 90% user satisfaction across Fortune 100 accounts",
              "Direct design and implementation of real-time analytics platforms leveraging Agentic AI for clinical study data analysis, reducing time-to-insights from weeks to hours while maintaining regulatory compliance",
              "Oversee delivery of enterprise-wide GenAI solutions generating $2M+ in cost savings and 42,000+ efficiency hours, with direct oversight of implementation and profitability metrics",
              "Direct pioneering of production-grade multi-agent AI architectures using AWS Bedrock Agents, AutoGen, and Agno frameworks for autonomous business process optimization with responsible AI guardrails and observability",
              "Lead enterprise adoption of Cloud Native Architecture patterns across multiple accounts, establishing architectural standards and governance for microservices and serverless approaches"
            ]
          }
        ]
      },
      {
        title: "Technology Architecture Manager",
        company: "Accenture",
        period: "Dec 2022 - May 2025",
        location: "Calgary, Alberta, Canada",
        highlights: [
          {
            category: "Strategic Leadership & P&L Oversight",
            points: [
              "Managed P&L responsibility for technology architecture functional department with annual budget oversight of $3M USD, including resource allocation, cost control, and revenue optimization across multiple client portfolios",
              "Directed operations and managed global teams of 15+ professionals across multiple locations, supervising onshore managers and coordinating cross-functional delivery teams spanning US, India, and Canada",
              "Exercised final decision-making authority for hiring and staffing processes, conducting candidate screening, technical and behavioral interviewing, and selection decisions for backend developers, managers, and technical leads",
              "Conducted annual and quarterly performance cycle reviews for team members, including goal setting, performance evaluation, promotion recommendations, and compensation decisions based on performance metrics",
              "Reported directly to senior executive leadership on strategic technology initiatives, departmental performance, and organizational technology direction",
              "Managed client relationships by coordinating directly with client product owners to understand business requirements, establish project scope, and review project deliverables"
            ]
          },
          {
            category: "Organizational Governance & Strategic Operations",
            points: [
              "Established near-term goals and strategic direction in alignment with senior management objectives, ensuring team adherence to organizational priorities and performance standards",
              "Directed strategic workforce planning including headcount management, skills gap analysis, and talent acquisition strategies for large-scale enterprise programs",
              "Managed project lifecycle from inception to delivery, ensuring teams followed established Agile and Waterfall methodologies and delivered on client commitments within budget and timeline constraints",
              "Oversaw proposal development and provided leadership during architecture quality assurance reviews for ongoing engagements, ensuring delivery excellence and client satisfaction",
              "Coordinated remote delivery teams across different geographical locations, ensuring effective workforce management and resource allocation for 50+ member multi-shore operations",
              "Managed risk assessment, compliance oversight and client data protection controls for technology solutions and team personnel, ensuring adherence to regulatory requirements and security standards",
              "Established agile development practices and DevOps culture across distributed teams, standardizing best practices and ensuring consistent delivery quality"
            ]
          },
          {
            category: "Technical Architecture & Business Impact",
            points: [
              "Directed delivery of $2M+ in cost savings and 42,000+ efficiency hours through enterprise-wide GenAI SDLC Assist platform implementation on AWS, integrating Claude, OpenAI, and Llama models",
              "Oversaw development of Agentic AI systems for automated helpdesk operations, transforming service delivery efficiency by 70% and enabling 40% faster issue resolution",
              "Managed implementation of real-time analytics platform for clinical study data using Agentic AI, reducing analysis time from weeks to hours while maintaining regulatory compliance",
              "Directed integration of GenAI-driven development workflows accelerating project delivery cycles by 1.5-3 months across enterprise client engagements",
              "Directed establishment of architectural patterns and governance for AI integration across enterprise systems, including sophisticated RAG patterns with vector databases such as Weaviate",
              "Oversaw development and delivery of comprehensive GenAI training program reaching 5000+ professionals across 30+ accounts, driving $100M+ revenue through strategic solution enablement",
              "Directed implementation of automated code quality analysis and serverless architecture ensuring scalability, cost optimization, and reducing technical debt by 40%"
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
              "Led Medidata convergence project, implementing complex system integrations ($3M+ project value)",
              "Architected Clinical Data Warehouse with advanced analytics capabilities",
              "Led Oracle Thesaurus Management System project ($1M+ project value) for medical coding",
              "Achieved 30% improvement in system performance through architecture modernization",
              "Established dedicated CDMS team, standardizing best practices across organization",
              "Pioneered DevOps practices and AWS migrations with full CI/CD implementation"
            ]
          },
          {
            category: "Operations Management",
            points: [
              "Managed multi-shore operations for 25+ member business unit",
              "Orchestrated resource allocation across 6 parallel projects maintaining 95% utilization",
              "Implemented resource capacity planning and budget optimization strategies",
              "Developed strategic roadmaps aligning technology with business objectives"
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
            category: "Technical Innovation",
            points: [
              "Architected cloud-native microservices reducing deployment time by 60%",
              "Developed automated testing framework reducing regression testing by 70%"
            ]
          },
          {
            category: "Technical Delivery",
            points: [
              "Pioneered AWS cloud migrations reducing operational costs by 25%",
              "Led cross-functional teams across 3 global locations ensuring 24x7 support",
              "Delivered 50+ high-impact projects in pharmaceutical R&D domain"
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
              "Led integration with eTMF Veeva Vault improving operational efficiency",
              "Managed infrastructure upgrades to WebLogic 12c and Oracle 12c",
              "Reduced job errors by 30% through process optimization",
              "Developed reusable components reducing development time by 35%",
              "Implemented CI/CD reducing build failures by 70%",
              "Improved system response time by 50% through performance optimization"
            ]
          },
          {
            category: "Leadership",
            points: [
              "Mentored 10+ junior developers in cloud technologies",
              "Led technical documentation initiatives improving knowledge transfer"
            ]
          }
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
              "Resolved 1000+ user issues demonstrating strong problem-solving capabilities",
              "Managed complex system modifications and change management",
              "Built foundation in enterprise application architecture",
              "Developed expertise in pharmaceutical industry systems"
            ]
          }
        ]
      }
    ];
  
    const technicalSkills = [
      { category: "Generative AI & ML", value: 95 },
      { category: "Cloud Architecture", value: 90 },
      { category: "Enterprise Architecture", value: 85 },
      { category: "Team Leadership", value: 95 },
      { category: "Strategic Planning", value: 90 }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Enhanced Header with Gradient Background */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 opacity-90" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
          
          <div className={`relative max-w-7xl mx-auto px-4 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/50">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
                      Raghav Grover
                    </h1>
                    <BadgeCheck className="text-blue-600" size={32} />
                  </div>
                  <h2 className="text-xl lg:text-2xl text-gray-700 font-semibold flex items-center gap-2">
                    <Shield className="text-blue-600" size={24} />
                    Software Engineering Advisory Sr. Manager | AI Strategy Leader
                  </h2>
                  <p className="text-gray-600 max-w-3xl leading-relaxed">
                    Senior technology executive with 15+ years driving enterprise transformation and innovation in life sciences.
                    As Software Engineering Advisory Sr. Manager at Accenture, I direct strategic AI initiatives across Fortune 100
                    pharmaceutical accounts with P&L oversight for multi-million dollar portfolios, managing global teams of 20+ professionals including managers, architects, and technical leads. Expert in architecting enterprise-scale
                    Generative AI and Agentic AI solutions that deliver measurable business impact, including $100M+ in generated revenue,
                    $2M+ in cost savings, and 42,000+ efficiency hours. Proven track record in strategic decision-making, organizational governance, and driving enterprise-wide technology transformation.
                  </p>
                </div>
                
                <div className="flex flex-col space-y-3 bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                  <div className="flex items-center gap-3 group">
                    <Mail size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    <a href="mailto:raghavgrover13@icloud.com" className="hover:text-blue-600 transition-colors">
                      raghavgrover13@icloud.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Phone size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    <a href="tel:+17329975241" className="hover:text-blue-600 transition-colors">
                      +1-732-997-5241
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <MapPin size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>New York City, New York, USA</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Linkedin size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    <a 
                      href="https://linkedin.com/in/raghav-grover-82906538" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Highlight Achievement Banner */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
                  <Sparkles size={28} />
                  Signature Achievement
                </h3>
                <p className="text-3xl font-bold mb-2">$2M+ Cost Savings | 42,000+ Hours Saved</p>
                <p className="text-lg opacity-90">
                  Directed development of enterprise GenAI platform delivering transformational efficiency gains in SDLC
                </p>
              </div>
            </div>
          </div>
  
          {/* Key Metrics Section */}
          <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <TrendingUp className="text-blue-600" />
              Career Impact Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>
  
          {/* Key Achievements */}
          <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Award className="text-blue-600" />
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {keyAchievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
          </div>
  
          {/* Core Competencies */}
          <div className={`mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Target className="text-blue-600" />
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="text-blue-600" size={20} />
                  Executive Leadership
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">P&L Management ($6-7M USD)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Project Pricing & Profitability Oversight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Performance Reviews & Compensation Authority</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Senior Executive Collaboration (MD/SMD)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Global Team Management (20+ professionals)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Hiring & Termination Authority</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Brain className="text-blue-600" size={20} />
                  Strategic Oversight
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Enterprise AI Architecture & Strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">AI Centers of Practice Establishment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Architecture Review Board Leadership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Strategic Partnership Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Digital Transformation Governance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-blue-500" />
                    <span className="text-gray-700">Risk Assessment & Compliance Oversight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Strategic Technology Expertise */}
          <div className={`mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Code className="text-blue-600" />
              Strategic Technology Expertise
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TechStack
                icon={Bot}
                title="AI Strategy & Innovation"
                items={[
                  "Large Language Models (Claude, GPT-4, Llama)",
                  "Open-Source Agentic AI Frameworks (AWS Agent Squad, AWS Bedrock, AutoGen, Letta , Agno, n8n etc.)",
                  "Advanced Prompt Engineering",
                  "RAG & CRAG Patterns",
                  "Vector Databases (Weaviate, Pinecone)",
                  "Multi-Agent Systems & Orchestration"
                ]}
              />
              <TechStack
                icon={Cloud}
                title="Cloud Architecture Strategy"
                items={[
                  "Cloud Native Architecture",
                  "Architecture Strategy & Design",
                  "AWS (Lambda, ECS, S3, EC2, SageMaker)",
                  "Google Cloud Platform & Azure",
                  "Serverless & Event-Driven Architecture",
                  "Microservices & API Gateway Patterns"
                ]}
              />
              <TechStack
                icon={Code}
                title="Technology Stack & Methodologies"
                items={[
                  "Python, Java, TypeScript",
                  "FastAPI, Flask, Spring Boot",
                  "Docker, Kubernetes",
                  "CI/CD, GitHub Actions",
                  "Terraform, CloudFormation",
                  "Agile & DevOps"
                ]}
              />
              <TechStack
                icon={Shield}
                title="Leadership & Strategy"
                items={[
                  "Portfolio Management",
                  "Project Pricing & CCI",
                  "Profitability Analysis",
                  "Senior Executive Advisory",
                  "Strategic Partnerships",
                  "Digital Transformation"
                ]}
              />
            </div>
          </div>
  
          {/* Professional Experience */}
          <div className={`mb-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-600" />
              Professional Experience
            </h2>
            {experience.map((role, index) => (
              <ExperienceCard key={index} role={role} isLatest={index === 0} />
            ))}
          </div>
  
          {/* Education & Certifications */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                <GraduationCap className="text-blue-600" size={24} />
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-700">Bachelor of Technology</p>
                <p className="text-gray-600">Electronics and Communications Engineering</p>
                <p className="text-gray-600">Jaypee University of Information Technology</p>
                <p className="text-gray-500">2006 - 2010</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                Professional Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-green-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-700">Accenture Certified Technology Architect Associate</p>
                    <p className="text-sm text-gray-500">Advanced Architecture Certification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-green-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-700">Accenture Certified Senior RDE (Reinvention Deployed Engineer)</p>
                    <p className="text-sm text-gray-500">Enterprise Transformation & Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

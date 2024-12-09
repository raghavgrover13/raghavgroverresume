import { Helmet } from 'react-helmet';
import Resume from './components/Resume';

export default function App() {
  const DOMAIN = "https://raghav-grover-resume.com";

  return (
    <>
      <Helmet>
        <title>Raghav Grover - Senior Technology Architecture Leader</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        
        {/* Primary Meta Tags */}
        <meta name="description" content="Technology leader with 14+ years experience in life sciences and pharmaceutical industries. Specialized in Generative AI (GenAI), cloud architecture, and digital transformation." />
        <meta name="keywords" content="Raghav Grover, Technology Architecture, GenAI, Cloud Architecture, Digital Transformation, AWS, Enterprise Solutions, Technology Leadership" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raghav-grover-resume.com" />
        <meta property="og:title" content="Raghav Grover - Senior Technology Architecture Leader" />
        <meta property="og:description" content="Visionary technology leader specializing in GenAI, cloud architecture, and digital transformation. 14+ years experience in architecting enterprise solutions." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://raghav-grover-resume.com" />
        <meta property="twitter:title" content="Raghav Grover - Senior Technology Architecture Leader" />
        <meta property="twitter:description" content="Visionary technology leader specializing in GenAI, cloud architecture, and digital transformation. Expert in enterprise solutions." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://raghav-grover-resume.com" />
      </Helmet>
      <div className="bg-gray-100 min-h-screen">
        <Resume />
      </div>
    </>
  );
}
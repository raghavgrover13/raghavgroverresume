import { Helmet } from 'react-helmet';
import Resume from './components/Resume';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Raghav Grover - Senior Technology Architecture Leader</title>
        <meta name="description" content="Senior Technology Architecture Leader specializing in GenAI, Cloud Architecture, and Digital Transformation" />
        <meta property="og:title" content="Raghav Grover - Senior Technology Architecture Leader" />
        <meta property="og:description" content="Senior Technology Architecture Leader with expertise in Generative AI, Cloud Architecture, and Digital Transformation" />
      </Helmet>
      <div className="bg-gray-100 min-h-screen">
        <Resume />
      </div>
    </>
  );
}
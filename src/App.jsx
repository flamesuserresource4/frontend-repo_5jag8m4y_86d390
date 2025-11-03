import React from 'react';
import Hero3D from './components/Hero3D';
import StoryScroller from './components/StoryScroller';
import ProjectsTunnel from './components/ProjectsTunnel';
import SkillsAndContact from './components/SkillsAndContact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-indigo-600 selection:text-white">
      <Hero3D />
      <StoryScroller />
      <ProjectsTunnel />
      <SkillsAndContact />
    </div>
  );
}

export default App;

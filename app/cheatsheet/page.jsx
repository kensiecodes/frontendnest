const CheatSheet = () => {
  return (
    <main className="md:grid md:grid-cols-2 p-5 md:p-10 rounded text-slate-700 w-5/6 bg-indigo-50/50">
      <TopicSection>
        <h2>.breakpoints</h2>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-mobile-screen"></i>
          <span className="text-indigo-400">sm:</span>
          <span className="text-slate-500">640px</span>
        </div>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-tablet-screen-button"></i>
          <span className="text-indigo-400">md:</span>
          <span className="text-slate-500">768px</span>
        </div>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-laptop"></i>
          <span className="text-indigo-400"> lg:</span>
          <span className="text-slate-500">1024px</span>
        </div>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-desktop"></i>
          <span className="text-indigo-400">xl:</span>
          <span className="text-slate-500"> 1280px</span>
        </div>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-display"></i>
          <span className="text-indigo-400">2xl:</span>
          <span className="text-slate-500">1536px</span>
        </div>
      </TopicSection>{" "}
    </main>
  );
};

const TopicSection = ({ children }) => {
  return (
    <div className="bg-indigo-50/50 rounded border border-indigo-50 w-full">
      {children}
    </div>
  );
};

const Rule = () => {
  return (
    <div>
      <p>rule</p>
    </div>
  );
};

export default CheatSheet;

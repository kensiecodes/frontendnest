const CheatSheet = () => {
  return (
    <main className="md:grid md:grid-cols-2 p-10 rounded text-slate-700 w-5/6 bg-indigo-50/50">
      <TopicSection>
        <h2>.breakpoints</h2>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-mobile-screen"></i>
          <span>sm:</span>
          <span>640px</span>
        </div>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-tablet-screen-button"></i>
          <span>md:</span>
          <span>768px</span>
        </div>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-laptop"></i>
          <span>lg:</span>
          <span>1024px</span>
        </div>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-desktop"></i>
          <span>xl:</span>
          <span> 1280px</span>
        </div>
        <div className="flex justify-between px-5 w-1/2">
          <i class="fa-solid fa-display"></i>
          <span>2xl:</span>
          <span>1536px</span>
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

const CheatSheet = () => {
  const Title = ({ title }) => {
    return <h2 className="py-2 px-4 text-xl">{title}</h2>;
  };
  return (
    <main className="md:grid md:grid-cols-2 gap-2 p-5 md:p-10 rounded text-slate-700 w-5/6 bg-indigo-50/50">
      <TopicSection>
        <Title title=".breakpoints" />
        <div className="flex justify-between px-5 w-3/4">
          <i class="fa-solid fa-mobile-screen"></i>
          <span className="text-indigo-400">sm:</span>
          <span className="text-slate-500">640px</span>
        </div>
        <div className="flex justify-between px-5 w-3/4">
          <i class="fa-solid fa-tablet-screen-button"></i>
          <span className="text-indigo-400">md:</span>
          <span className="text-slate-500">768px</span>
        </div>
        <div className="flex justify-between px-5 w-3/4">
          <i class="fa-solid fa-laptop"></i>
          <span className="text-indigo-400"> lg:</span>
          <span className="text-slate-500">1024px</span>
        </div>
        <div className="flex justify-between px-5 w-3/4">
          <i class="fa-solid fa-desktop"></i>
          <span className="text-indigo-400">xl:</span>
          <span className="text-slate-500"> 1280px</span>
        </div>
        <div className="flex justify-between px-5 w-3/4">
          <i class="fa-solid fa-display"></i>
          <span className="text-indigo-400">2xl:</span>
          <span className="text-slate-500">1536px</span>
        </div>
      </TopicSection>{" "}
      <TopicSection>
        <Title title=".border" />
        <div className="p-5 w-90 flex justify-around ">
          <div>
            <div className="h-16 flex justify-center items-center border-t-4 border-l-4 border-indigo-400">
              <p className=" pl-1 mb-1 ">regular</p>
            </div>
            <div className="h-16 flex justify-center items-center rounded-sm border-t-4 border-l-4 border-indigo-400">
              <p className=" pl-1  mb-1 ">rounded-sm</p>
            </div>
            <div className="h-16 flex justify-center items-center rounded border-t-4 border-l-4 border-indigo-400">
              <p className=" pl-1 mb-1 ">rounded</p>
            </div>
            <div className="h-16 flex justify-center items-center rounded-md border-t-4 border-l-4 border-indigo-400">
              <p className=" pl-1 mb-1 ">rounded-md</p>
            </div>
            <div className="h-16 flex justify-center items-center rounded-lg border-t-4 border-l-4 border-indigo-400">
              <p className=" pl-1 mb-1 ">rounded-lg</p>
            </div>
          </div>
          <div>
            <div className="h-16 flex justify-center items-center border-l-4 rounded-xl  border-indigo-400 border-t-4">
              <p className=" pl-1  mb-1 ">rounded-xl</p>
            </div>
            <div className="h-16 flex justify-center items-center rounded-2xl border-t-4 border-l-4 border-indigo-400">
              <p className=" px-1  mb-1 ">rounded-2xl</p>
            </div>
            <div className="h-16 flex justify-center items-center rounded-3xl border-t-4 border-l-4 border-indigo-400">
              <p className=" px-1  mb-1 ">rounded-3xl</p>
            </div>
            <div className="h-16 flex justify-center items-center border-t-4 border-l-4 border-indigo-400 rounded-full">
              <p className=" px-1 mb-1 ">rounded-full</p>
            </div>
          </div>
        </div>
      </TopicSection>
    </main>
  );
};

const TopicSection = ({ children }) => {
  return (
    <div className=" bg-indigo-50/50 rounded border border-indigo-50 w-full">
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

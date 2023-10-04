import { About, Header, Home, Projects, ServiceCount, Skills } from "./";

const App = () => {
  return (
    <div className="w-full xl:w-[1200px] p-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particles container */}
      {/* header */}
      <Header />
      {/* home container  */}
      <Home/>
      {/* Services count cards */}
      <ServiceCount/>
      {/* about container  */}
      <About/>
      {/* skills container */}
      <Skills/>
      {/* projexts container */}
      <Projects/>
      {/* contact container */}
      {/* footer container */}
    </div>
  );
};

export default App;

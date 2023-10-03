import { Header, Home, ServiceCount } from "./";

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
      {/* skills container */}
      {/* projexts container */}
      {/* contact container */}
      {/* footer container */}
    </div>
  );
};

export default App;

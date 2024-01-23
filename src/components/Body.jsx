import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const Body = () => {
  return (
    <main className='mx-auto p-5'>
      <About />
      <hr />
      <Experience />
      <hr />
      <Projects />
    </main>
  );
};
export default Body;

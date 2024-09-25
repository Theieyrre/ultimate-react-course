import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro data="Best developer" />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="images.jpg" alt="bird-pic" className="avatar" />;
}

function Intro(props) {
  return (
    <div>
      <h2>Mustafa Ünal</h2>
      <p>{props.data}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill data="PHP" color="purple" />
      <Skill data="Spring" color="green" />
      <Skill data="Javascript" color="yellow" />
      <Skill data="React" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.data}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

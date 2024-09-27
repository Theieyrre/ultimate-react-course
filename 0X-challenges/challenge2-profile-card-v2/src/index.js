import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

const levels_emoji = ["👶", "👍", "💪"];
const levels_text = ["beginner", "intermediate", "advanced"];

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
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          emoji={levels_emoji[levels_text.indexOf(skill.level)]}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>
        {props.skill} {props.emoji}
      </span>
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

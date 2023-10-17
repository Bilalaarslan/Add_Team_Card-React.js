import './Teams.css';

import Barcelona from "./images/klemens-kopfle-sC6-09uEto8-unsplash.jpg";
import Arsenal from "./images/nelson-ndongala-aJGyrMNJUkM-unsplash.jpg";
import Manchester from "./images/nat-callaghan-IEmaR3ecfuY-unsplash.jpg";
import Madrid from "./images/simon-reza-GIzYHNnG5qg-unsplash.jpg";

const teamMap={
    Barcelona,
    Arsenal,
    Madrid,
    Manchester,
};

function Team({teamName}) {
    console.log(teamMap[teamName]);
  return (
    <div className="teamDiv">
      <img className="team" src={teamMap[teamName]} alt="team" />
    </div>
  );
}

export default Team;

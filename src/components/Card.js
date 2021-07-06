import * as React from "react";

const Card = (props) => {

  return (
    <div className="row">
      <div className="col-xl-12 d-flex align-items-stretch">
        <div class="card">
              <div class="card-body">
              <h5 class="card-title">{props.cardTitle}</h5>
              <p class="card-text">{props.cardText}</p>
              <a href={props.cardGitHubLink} class="card-link" rel='noopener noreferrer' target='_blank'><i class="bi bi-code-square"></i>Source Code</a>
              <a href={props.cardWebsiteLink} class="card-link" rel='noopener noreferrer' target='_blank'><i class="bi bi-laptop"></i>Live Demo</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Card
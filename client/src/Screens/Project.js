import React from "react";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project-list">
        <h2>Projects</h2>
        <form>
          <a>
            {" "}
            <li>
              <h4>Bamazon</h4>

              <h5>
                An E-Commers website that allows users to create accounts,
                purchase products, view their purchases and view if their
                purchases have shipped.
              </h5>
            </li>
          </a>
          <a>
            <li>
              <h4>LightW8</h4>

              <h5>
                A workout tracker that allows user to create accounts, add their
                daily workouts, update and delete their workouts.
              </h5>
            </li>
          </a>
          <a>
            <li>
              <h4>Pizza Slice</h4>

              <h5>An online pizza ordering site. </h5>
            </li>
          </a>
          <a>
            <li>
              <h4>Node Store</h4>

              <h5>
                Back-end based application allowing users to create, view,
                update, delete and edit inventory.
              </h5>
            </li>
          </a>
        </form>
      </div>
    </div>
  );
}

import React from "react";

const ProductManagement: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Product Management</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/* Balsamiq */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Balsamiq</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          {/* Figma */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          {/* JIRA */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">JIRA</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          {/* Confluence */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Confluence</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* Greenhouse */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Greenhouse</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* Additional Tools for Product Managers
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Asana</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Trello</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Roadmunk</h3>
              <span className="skills__level">Beginner</span>
            </div> </div> */}

        </div>
      </div>
    </div>
  );
};

export default ProductManagement;

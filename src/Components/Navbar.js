import React from 'react'
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar nav navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand ms-2" to="/">SJR</Link>
          <button className="navbar-toggler bi bi-list" id="button-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <i class="bi bi-house-door"></i>
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <i class="bi bi-tools"></i>
                <Link className="nav-link" to='/skills'>Skills</Link>
              </li>
              <li className='nav-item'>
                <i class="bi bi-card-checklist"></i>
                <Link className='nav-link' to='/projects'>Projects</Link>
              </li>
              <li className='nav-item'>
                <i class="bi bi-diagram-2"></i>
                <Link className='nav-link' to='/experience'>Experience</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
  )
}

export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="styling" class="nav-link">Styling</Link>
        </li>
        <li class="nav-item">
          <Link to="lifecyclemethod" class="nav-link">lifeCycleMethods</Link>
        </li>
        <li class="nav-item">
          <Link to="pagination" class="nav-link">Pagination</Link>
        </li>
        <li class="nav-item">
          <Link to="useStatehook" class="nav-link">usestateCounter</Link>
        </li>
        <li class="nav-item">
          <Link to="UseEffectPagination" class="nav-link">UseEffectPagination</Link>
        </li>
        <li class="nav-item">
          <Link to="contactus" class="nav-link" >ContactUs</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
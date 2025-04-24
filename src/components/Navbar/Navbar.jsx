import React from 'react'
import { assests } from '../../assets/assests'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                {/* <Link> */}
                <a className="navbar-brand" href="#!"><img  src={assests.logo_bg} alt="" height={36} width={48}></img></a>
                {/* </Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <Link className="nav-item nav-link" to='/add'><i className="bi bi-plus-circle"></i> Add Food</Link> 
                        <Link className="nav-item nav-link" to='/list'><i className="bi bi-list-task"></i> List Food</Link> 
                    </ul>
                    <form className="d-flex">
                        <Link to="/orders">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Orders
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

import App from "./App";
import PropTypes from 'prop-types'

        function login(props) {
            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <href className="navbar-brand" to="/">{props.title}</href>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <href className="nav-link active" aria-current="page" to="/">REACT</href>
                      </li>
                      <li className="nav-item">
                        <href className="nav-link" to="/about">PRODUCTS</href>
                      </li>  
                    </ul>
                    { props.searchBar? <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>: ""}
                  </div>
                </div>
              </nav>
            )
        }
        login.props = {
          title: "Your Title Here",
          searchBar: true
        }
        
        login.props = {
          title: PropTypes.string,
          searchBar: PropTypes.bool.isRequired
        }
   
 
export default login;
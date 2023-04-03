import "./Footer.css"


export const Footer = ()=>{


    return(
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 footer-item">
              <h4 className="lang-en">Services</h4>
             
              
              <ul className="menu-list ps-4 lang-en">
                <li><a href="#">Part Time Job</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Full Time Job</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Remotly Job</a></li>
              </ul>
             
            </div>
            <div className="col-md-4 col-sm-12 footer-item">
             
              <h4 className="lang-en">Departments</h4>
              <ul className="menu-list ps-4 lang-en">
                <li><a href="#about">Marketing</a></li>
                <li><a href="#service">Finance</a></li>
                <li><a href="#pricing">Sales</a></li>
                <li><a href="faq.html">Design</a></li>
                <li><a href="faq.html">Developers</a></li>
                
              </ul>
              
            </div>
            <div className="col-md-4 col-sm-12 footer-item">
              <h4 className="lang-en">Get in touch</h4>
              
              <ul className="menu-list ps-4">
                <li className="get-in-touch">
                  <i className="fa fa-envelope"></i>
                  <a href="#">@Employment.com</a>
                </li>
                <li className="get-in-touch">
                  10th-Abbas Elakkad Street , cairo-Egypt.
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </footer>
    )
};
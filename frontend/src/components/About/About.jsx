function About() {
    return (
      <>
        <div style={{marginTop:'3rem',width:'50%',height:'10px', marginLeft:'-3rem'}} className="about-scroll"></div>
  
        <div className=" about">
          <div className="row">
            <div className="col-md-6 text-center">
              <img alt="about" src="./img/img1.png" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="main-title about-h2">About Us</h2>
              <p className="main-p">
                Mission Health is not just an organization, it is a mission to bring health tracking on the fingertips of millions of people. We believe that Health is not a privilege but a basic human right.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default About;
import Card from "./Card";
function Features() {
    return (
        <div className=" services">
            <h2 style={{paddingLeft:'4rem'}} className="main-title text-center">Features</h2>
            
            <div className="card-cover">
            <center>
                <div className="col-md-12">
                    <div className="row">
                        <div style={{marginLeft:'4rem'}} className="col-md-3 mb-2">
                            <Card title="Web Development" img="card1.png" text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
                        </div>
                        <div className="col-md-3 mb-2">
                        <Card title="E-Commerce Services" img="card2.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
                        </div>
                        <div className="col-md-3 mb-2">
                        <Card title="Cyber Security" img="card3.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
                        </div>
                    </div>
                </div>
                
            </center>
            </div>
        </div>
      );
}
export default Features;
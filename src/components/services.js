const Services = () => {
    return (<div className="centarr">
        <h1>What Services you <br />
            will Get from me!</h1>

        <div className="row">
            <div className="col-4 text-center">
                <div className="card">
                    <div className="card-body">
                        <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/hero/h1_hero.jpg.webp" width={100} height={100} alt="" />
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Services;
const Projects = () => {

    const images = [
        { width: 300 , height: 300 , src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/%D0%97%D0%B5%D1%82_%D0%B8_%D0%BD%D0%B5%D0%B2%D0%B5%D1%81%D1%82%D0%B0_%D0%BE%D0%B4_%D0%9F%D1%80%D0%B8%D0%BB%D0%B5%D0%BF%D1%81%D0%BA%D0%BE_%281916%29.png", title: "слика 1", description: "Брачен пар во носии од Прилепско Поле (1916)" },
        { width: 300 , height: 300 , src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/%D0%9F%D1%80%D0%B5%D0%B4%D0%B5%D0%BD_%D0%BF%D0%BE%D0%B3%D0%BB%D0%B5%D0%B4_%D0%BD%D0%B0_%D0%BC%D0%B0%D0%B6_%D0%B2%D0%BE_%D0%BD%D0%BE%D1%81%D0%B8%D1%98%D0%B0_%D0%BE%D0%B4_%D0%A1%D1%82%D1%80%D1%83%D1%88%D0%BA%D0%B8_%D0%94%D1%80%D0%B8%D0%BC%D0%BA%D0%BE%D0%BB.png/1024px-%D0%9F%D1%80%D0%B5%D0%B4%D0%B5%D0%BD_%D0%BF%D0%BE%D0%B3%D0%BB%D0%B5%D0%B4_%D0%BD%D0%B0_%D0%BC%D0%B0%D0%B6_%D0%B2%D0%BE_%D0%BD%D0%BE%D1%81%D0%B8%D1%98%D0%B0_%D0%BE%D0%B4_%D0%A1%D1%82%D1%80%D1%83%D1%88%D0%BA%D0%B8_%D0%94%D1%80%D0%B8%D0%BC%D0%BA%D0%BE%D0%BB.png", title: "слика 2", description: "Маж во носија од Струшки Дримкол (1983)" },
        { width: 300 , height: 300 , src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%D0%9C%D0%B0%D0%B6%D0%B8_%D0%BD%D0%B0_%D0%BA%D0%BE%D1%9A_%D0%B2%D0%BE_%D0%BD%D0%BE%D1%81%D0%B8%D1%98%D0%B0_%D0%BE%D0%B4_%D0%93%D0%BE%D1%80%D0%BD%D0%B0_%D1%80%D0%B5%D0%BA%D0%B0.png/1280px-%D0%9C%D0%B0%D0%B6%D0%B8_%D0%BD%D0%B0_%D0%BA%D0%BE%D1%9A_%D0%B2%D0%BE_%D0%BD%D0%BE%D1%81%D0%B8%D1%98%D0%B0_%D0%BE%D0%B4_%D0%93%D0%BE%D1%80%D0%BD%D0%B0_%D1%80%D0%B5%D0%BA%D0%B0.png", title: "слика 3" , description: "Мажи на коњ во носии од пределот Горна река"},
        { width: 300 , height: 600 , src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/%D0%A1%D0%BF%D0%B0%D1%81%D0%B5_%D0%A0%D0%B8%D1%81%D1%82%D0%B5%D0%B2%D1%81%D0%BA%D0%B8_%28%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%29_%D1%81%D0%BE_%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D1%82%D0%B5_%D1%80%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%B2%D0%BE_%D1%81._%D0%A6%D1%80%D0%BD%D0%BE%D0%B1%D1%83%D0%BA%D0%B8%2C_%D0%91%D0%B8%D1%82%D0%BE%D0%BB%D1%81%D0%BA%D0%BE_%D0%BF%D0%BE%D0%BB%D0%B5.jpg", title: "слика 4", description: "Семејство во носии од с. Црнобуки, Бит. Поле (1933)" },
        { width: 300 , height: 600 , src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%D0%91%D1%80%D0%B0%D1%87%D0%B5%D0%BD_%D0%BF%D0%B0%D1%80_%D0%B2%D0%BE_%D0%BD%D0%BE%D1%81%D0%B8%D0%B8_%D0%BE%D0%B4_%D1%81._%D0%A6%D1%80%D0%BD%D0%B8%D1%87%D0%B0%D0%BD%D0%B8%2C_%D0%91%D0%B8%D1%82%D0%BE%D0%BB%D1%81%D0%BA%D0%BE_%D0%BF%D0%BE%D0%BB%D0%B5_%281940%29.jpg/800px-%D0%91%D1%80%D0%B0%D1%87%D0%B5%D0%BD_%D0%BF%D0%B0%D1%80_%D0%B2%D0%BE_%D0%BD%D0%BE%D1%81%D0%B8%D0%B8_%D0%BE%D0%B4_%D1%81._%D0%A6%D1%80%D0%BD%D0%B8%D1%87%D0%B0%D0%BD%D0%B8%2C_%D0%91%D0%B8%D1%82%D0%BE%D0%BB%D1%81%D0%BA%D0%BE_%D0%BF%D0%BE%D0%BB%D0%B5_%281940%29.jpg", title: "слика 5", description: "Брачен пар во носии од с. Црничани, Бит. Поле (1940)" },
        { width: 300 , height: 600 , src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/%D0%A2%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B0_%D0%BC%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B0_%D0%BD%D0%BE%D1%81%D0%B8%D1%98%D0%B0_%D0%BE%D0%B4_%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B2%D0%B8_%D0%90%D0%BD%D0%BE%D0%B2%D0%B8%2C_%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D0%B8%D1%98%D0%B0.jpg/800px-%D0%A2%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B0_%D0%BC%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B0_%D0%BD%D0%BE%D1%81%D0%B8%D1%98%D0%B0_%D0%BE%D0%B4_%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B2%D0%B8_%D0%90%D0%BD%D0%BE%D0%B2%D0%B8%2C_%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D0%B8%D1%98%D0%B0.jpg", title: "слика 6", description: "Жена во носија од с. Маврови Анови, Мавр. Поле (1930-37)" }
    ];
    return (
        <div className="container-fliud">
            <h2 className="px-5 pnew">What kinds of projects <br /> you will Get from me!</h2>
            <div className="row p-5 pnew" >
                 <div className="row">{images.map((img, index) => (

                <div key={index} className="card col-4 text-center border-0 p-3" >
                    <img src={img.src} className="card-img-top" alt={img.title} width={img.width} height={img.height} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{img.title}</h5>
                        <p className="card-text">{img.description}</p>
                        <a href="#" className="btn btn-danger">More info about {index}</a>
                    </div>
                </div>

            ))

            }</div>
            </div>
            <div className="row bgnew p-5">
                <div className="col-6 p-5 text-center">
                                <h2 className="text-danger fs-1">What kinds of projects <br /> you will Get from me!</h2>

                </div>
                <div className="col-6 p-5 text-center">
                                <a href="#" className="btn btn-danger m-3 px-5 py-2">More info about</a>

                </div>
            </div>
        </div>
    );
}

export default Projects
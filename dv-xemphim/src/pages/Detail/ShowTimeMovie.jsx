import React from 'react'

export default function ShowTimeMovie(props) {

    // const render
    return (
        <div className="row showsTime">
                    <div className="col-5 showTheater">
                        <div className="theater_item">
                            <img src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                            <span>BHD Star Cineplex</span>
                        </div>
                        <div className="theater_item">
                            <img src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                            <span>BHD Star Cineplex</span>
                        </div>
                        <div className="theater_item">
                            <img src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                            <span>BHD Star Cineplex</span>
                        </div>
                        <div className="theater_item">
                            <img src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                            <span>BHD Star Cineplex</span>
                        </div>
                    </div>
                    <div className="col-7 showTime">
                        <div className="row day">
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                            <div className="col-2 day_show">01-01</div>
                        </div>
                        <div className="hour">
                            <div className="hour__theater">
                                <img src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt=""/>
                                <span>BHD Star Cineplex</span>
                            </div>
                            <p>Giờ chiếu :</p>
                            <div className="gio">
                                <button className="btn btn-warning mr-2">10:10</button>
                                <button className="btn btn-warning mr-2">10:10</button>
                                <button className="btn btn-warning mr-2">10:10</button>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

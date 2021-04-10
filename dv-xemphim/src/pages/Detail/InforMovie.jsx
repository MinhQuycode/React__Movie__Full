import React from 'react'
import ReactPlayer from 'react-player'

export default function InforMovie(props) {
  console.log(props.infor)
    return (
      <div className="row detail__trailer">
        <div className="col-5 trailer">
          <img src={props.infor?.hinhAnh} />
          <div className="booking">
            <a href="#lich">
              <button className="btn btn-warning">
                <i className="fas fa-money-check"></i>BOOKING
              </button>
            </a>
              <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target=".bd-example-modal-lg">
                <i className="fas fa-play"></i>
                TRAILER
              </button>
              <div
                className="modal fade bd-example-modal-lg"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <ReactPlayer width="100%" height="460px" controls url={props.infor.trailer}/>
                </div>
                </div>
              </div>
          </div>
        </div>
        <div className="col-7 detail__text">
          <h3>{props.infor?.tenPhim}</h3>
          <p>
            <span>Mô tả :</span> {props.infor?.moTa}{" "}
          </p>
          <p>
            <span>Đạo diễn :</span> Minh Quý
          </p>
          <p>
            <span>Thể loại :</span> Don't Know
          </p>
          <p>
            <span>Ngày khởi chiếu :</span> {props.infor?.ngayKhoiChieu}
          </p>
          <p>
            <span>Thời lượng :</span> 120p
          </p>
          <p>
            <span>Ngôn ngữ :</span> Phụ đề tiềng việt
          </p>
          <p>
            <span>Đánh giá :</span> {props.infor?.danhGia} <i style={{ color: "orangered",height:'17px' }} className="fas fa-star"></i>
          </p>
        </div>
      </div>
    );
}

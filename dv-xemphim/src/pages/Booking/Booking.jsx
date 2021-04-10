import React, { useEffect } from "react";
import screen from "../../assets/images/screen.png";
import ChairRoom from "./ChairRoom";
import InforBookChair from "./InforBookChair";
import { getChairListAPI } from "../../redux/actions/booking.action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./../../Layouts/Loading/Loading";
import {Redirect} from "react-router-dom";
import { useParams } from "react-router-dom";
import ScrollToTop from "../../Layouts/ScrollToTop/ScrollToTop";

export default function Booking(props) {
  let inforBK = useSelector((state) => state.chair.inforBooking);
  let chairList = useSelector((state) => state.chair.chairList);
  const { id } = useParams();
  const userSignIn = JSON.parse(localStorage.getItem('userLogin'));
// console.log(userSignIn);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChairListAPI(id));
  }, []);

  //Chia mảng ghế
  const chunkArray = (myArray, chunk_size) => {
    var results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  };
  if (chairList && chairList.length > 0) {
    let listChair = [...chairList];
    var result = chunkArray(listChair,16);
  }
  // console.log(result);

  const renderChairList = () => {
    return result?.map((item, index) => {
      return <ChairRoom chair={item} key={index} />;
    });
  };

  if(chairList === null ) return (<Loading/>)
  return userSignIn ? (
    <section id="booking" className="container-fluid">
      <ScrollToTop/>
      <div className="row">
        <div className="col-9">
          <div className="row infor__movie">
            <div className="col-6 info__movie">
              <img className="imgMovie" src={inforBK?.hinhAnh} />
              <div className="infor">
                <p>{inforBK?.tenPhim}</p>
                <p>{inforBK?.diaChi}</p>
              </div>
            </div>
            <div className="col-6 time__booking text-right">
              <p>Thời gian giữ ghế</p>
              <span>1:30</span>
            </div>
          </div>
          <div className="row screen">
            <img src={screen} />
          </div>
          <div className="row chair">
            <div className="text_note">
              <div className="text">A</div>
              <div className="text">B</div>
              <div className="text">C</div>
              <div className="text">D</div>
              <div className="text">E</div>
              <div className="text">F</div>
              <div className="text">G</div>
              <div className="text">H</div>
              <div className="text">J</div>
              <div className="text">K</div>
            </div>
            {renderChairList()}
          </div>
          <div className="row note">
            <div className="noteseat">
              <span className="note__item">
                <div className="seat-normal" />
                <span className="seat-info">Ghế thường</span>
              </span>
              <span className="note__item">
                <div className="seat-vip" />
                <span className="seat-info">Ghế VIP</span>
              </span>
              <span className="note__item">
                <div className="seat-current" />
                <span className="seat-info">Ghế đang chọn</span>
              </span>
              <span className="note__item">
                <div className="seat-taken" />
                <span className="seat-info">Ghế đã có người chọn</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <InforBookChair info={inforBK} />
        </div>
      </div>
    </section>
  ): (
    <Redirect to="/" />
  )
}

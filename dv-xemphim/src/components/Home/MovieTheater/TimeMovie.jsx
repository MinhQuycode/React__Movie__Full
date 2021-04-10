import React,{useEffect,useState} from 'react';
import { getShowTimeAPI } from '../../../redux/actions/showtimes.action';
import {useSelector,useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
// import Login from "./../../../pages/Login/Login";
// import Register from "./../../../pages/Register/Register";

function TimeMovie() {
    const [isOpenSignIn, setIsOpenSignIn] = useState(false);
    const [isOpenSignUp, setIsOpenSignUp] = useState(false);
    const history = useHistory();
    const idTheaterChoose = useSelector((state) => state.showTimes.idTheaterChoose);
    // console.log(idTheaterChoose)
    const codeTheater = useSelector(state => state.showTimes.theaterGroupChoosed);

    const dispatch = useDispatch();
    
    const userSignIn = useSelector((state) => state.user.userSignin);
    // console.log(userSignIn);

    const handleChoiceShowsTime = (id) => {
      if (userSignIn?.accessToken.length > 0) {
        history.push({ pathname: `/booking/${id}`})
      } else {
        history.push({pathname: '/login'});
      } 
    };

    useEffect(() => {
        dispatch(getShowTimeAPI(codeTheater.maHeThongRap));
    }, [dispatch,codeTheater.maHeThongRap]);
    //Lấy thời gian lịch chiếu
    const stateShowtime = useSelector(state => state.showTimes.showTimes);
    console.log(stateShowtime);


    return stateShowtime?.length > 0 ? (
      <div className="col-6 lich__chieu">
        <div className="row">
          <h3 className="title__chon">Chọn lịch chiếu</h3>
        </div>
        <div className="lich">
          {stateShowtime[0].lstCumRap
            .filter((tile) => tile.maCumRap === idTheaterChoose)
            .map((tile) =>
              tile.danhSachPhim.map((movie, index) => (
                <div key={index} className="row chieu">
                  <div className="col-4">
                    <img src={movie.hinhAnh} />
                    <div
                      className="mt-2 text-center"
                      style={{ fontWeight: "bold", fontSize: 20 }}
                    >
                      2D Digital
                    </div>
                  </div>
                  <div className="col-8 info_lich">
                    <span className="name__movie">{movie.tenPhim}</span>
                    <p style={{ fontWeight: "bold" }}>Lịch chiếu :</p>
                    {movie.lstLichChieuTheoPhim.map((lichChieu, index) => (
                      <button
                        key={index}
                        className="btn btn-info m-2"
                        onClick={() => {
                          handleChoiceShowsTime(lichChieu.maLichChieu);
                        }}
                      >
                        {lichChieu.ngayChieuGioChieu}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    ) : (
      <div></div>
    );
}
export default React.memo(TimeMovie);
import React ,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { postTheaterGroup } from '../../redux/actions/showtimes.action';
import { useHistory } from 'react-router-dom';

export default function ShowTimeMovie(props) {
    const history = useHistory();
    const [isSelected,setIsSelected] = useState(0);
    const dispatch = useDispatch();

    const theater = useSelector(state => state.inforMovie.inforMovie);
    const showTimes = useSelector(state => state.showTimes.theaterGroupChoosed);
    // console.log(showTimes)
    // console.log(theater)
    const userSignIn = useSelector((state) => state.user.userSignin);
    const handleChoiceShowsTime = (id) => {
        if (userSignIn?.accessToken.length > 0) {
          history.push({ pathname: `/booking/${id}`})
        } else {
          history.push({pathname: '/login'});
        } 
      };

    // Show rap
    const chooseTheaterGroup = (maHeThongRap,logo,index)=>{
        setIsSelected(index);
        dispatch(postTheaterGroup(maHeThongRap,logo,index));
    }
    let nonClassActive = 'non_active_theater';
    let Active = 'active_theater';
    const renderTheater = () =>{
        return (
            theater?.heThongRapChieu?.map((theater,index)=>{
                return (
                  <div  key={index} className={`theater_item ${isSelected===index ? Active : nonClassActive}`}
                  onClick={()=>(
                    isSelected === index ? '':chooseTheaterGroup(theater.maHeThongRap,theater.logo,index)
                  )} 
                  >
                    <img src={theater.logo} />
                    <span>{theater.tenHeThongRap}</span>
                  </div>
                );
            })
        )
    }
    let display = 'display';
    let nonDispkay = 'nonDispkay'
    console.log(showTimes.idChoose);
    // const render
    return (
      <div className="row showsTime">
        <div className="col-5 showTheater">{renderTheater()}</div>
        <div className="col-7 showTime">
          {/* <div className="row day">
            <div className="col-2 day_show">01-01</div>
          </div> */}
          {
          theater?.heThongRapChieu?.map((item,index)=>{
            console.log(item)
            item.cumRapChieu?.map((cumRap, index) => {
              console.log(cumRap)
                return (
                  <div className="hour">
                    <div className="hour__theater">
                      <img src={showTimes.logo} />
                      <span>{cumRap?.tenCumRap}</span>
                    </div>
                    <button className="btn btn-info mb-2 mt-2" onClick={()=>{
                        display = 'nonDisplay';
                    }}>Giờ chiếu</button>
                    <div className="gio">
                      {cumRap.lichChieuPhim?.map((item, index) => {
                        return (
                          <button
                            className={`btn ${display} btn-warning mr-2 mb-2`}
                            key={index}
                            onClick={() => {
                              handleChoiceShowsTime(item.maLichChieu);
                            }}
                          >
                            {item.ngayChieuGioChieu?.substring(11, 16) + "~"}
                            <b>{item.ngayChieuGioChieu?.substring(5, 10)}</b>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            )
          })
          }
        </div>
      </div>
    ); 
}

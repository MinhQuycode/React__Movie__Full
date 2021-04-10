  import React from 'react';
  import zion from './../../assets/images/coop20.jpg'
  import galaxy from './../../assets/images/galaxy.png'
  import cgv from './../../assets/images/cgv.png'
  import bhd from './../../assets/images/bhd.png'
  import logo from './../../assets/images/logo.png'

  export default function Footer() {
  return (
  <section className="footer__under">
    <div className="footer__contents">
      <div className="row footer__item__4">
        <div className="col-md-12 col-lg-6 text-left p-0">
          <p>Đồ án cuối khóa reactjs ở trung tâm đào tạo lập trình Cybersoft. Nơi đào tạo uy tín và chất lượng nhất mà tôi từng học</p>
        </div>
        <div className="col-md-12 col-lg-6 text-right p-0">
          <ul>
            <li>
              <a className="border__none">Zalo cá nhân</a>
            </li>
            <li>
              <a href="https://www.facebook.com/phamminhquy0403">Facebook cá nhân</a>
            </li>
            <li>
              <a href="https://github.com/MinhQuycode">Github cá nhân</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/quy-pham-8393aa201/">Linked cá nhân</a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="border__none">Đồ án cuối khóa</a>
            </li>
            <li>
              <a>My Personal Information </a>
            </li>
            <li>
              <a>Phạm Minh Quý</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row footer__item__5">
        <a className="img__none">
          <img className="img-fluid" src={zion} />
        </a>
        <a className="img__none">
          <img className="img-fluid" src={galaxy} />
        </a>
        <a>
          <img className="img-fluid" src={logo} />
        </a>
        <a className="img__none">
          <img className="img-fluid" src={cgv} />
        </a>
        <a className="img__none">
          <img className="img-fluid" src={bhd} />
        </a>
      </div>
      <div className="row footer__item__6 pb-3">
        <div className="col-md-12 col-lg-6">
          <p>Cảm ơn các bạn đã sủ dụng website, rất mong các bạn quay lại lần sau !</p>
        </div>
      </div>
    </div>
  </section>
  )}

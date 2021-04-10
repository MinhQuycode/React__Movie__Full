import React from 'react';
import PropTypes from "prop-types";

export default function Search(props) {
    const { name, label, message } = props;
    return (
        <section id="home__search">
            <div className="seach__select">
                <div className="list__select">
                    <select name={name} className="select__item">
                        <option hidden value="">Phim</option>
                        <option value="">{label}</option>
                        <option value="">3232</option>
                        <option value={message} disabled>{message}</option>
                    </select>
                    <div className="bulkhead"></div>
                </div>
                <div className="list__select">
                <select name="" className="select__item">
                        <option hidden value="">Rạp</option>
                        <option value="">3232</option>
                        <option value="">3232</option>
                        <option value="">2323</option>
                    </select>
                    <div className="bulkhead"></div>
                </div>
                <div className="list__select">
                <select name="" className="select__item">
                        <option hidden value="">Ngày chiếu</option>
                        <option value="">3232</option>
                        <option value="">3223</option>
                        <option value="">3232</option>
                    </select>
                <div className="bulkhead"></div>
                </div>
                <div className="list__select">
                <select name="" className="select__item">
                        <option hidden value="">Giờ chiếu</option>
                        <option value="">3232</option>
                        <option value="">3223</option>
                        <option value="">3232</option>
                    </select>
                <div className="bulkhead"></div>
                </div>
                <div className="">
                    <button className="btn__search">MUA VÉ NGAY</button>
                </div>
            </div>
        </section>
    )
}
Search.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };
import React, { useEffect } from 'react'
import { getInforAccountAPI } from '../../redux/actions/inforAccount.action';
import {useSelector} from "react-redux";
import Loading from "./../../Layouts/Loading/Loading";

export default function Account() {
    const accountUser = useSelector(state => state.account);
    useEffect(() => {
        const account = {
			taiKhoan: JSON.parse(localStorage.getItem('userLogin')).taiKhoan,
		};
        getInforAccountAPI(account)
    }, [])
    if(accountUser.loading) return (<Loading/>);
    return (
        <section id="account">
            Thông tin tài khoản
        </section>
    )
}

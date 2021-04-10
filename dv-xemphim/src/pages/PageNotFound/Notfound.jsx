import React from 'react'

export default function Notfound(props) {
    return (
        <div>
            Không tồn tại trang {props.match.url} !
        </div>
    )
}

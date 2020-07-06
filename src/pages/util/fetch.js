import {message} from 'antd';

export default function fetchPost(url, params) {
    return new Promise((resolve, reject) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(params),
            credentials: 'include',
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(res => res.json())
            .then((data) => {
                if (data.status === 'success'||data.status === null) {//这里取决于后端给你返回的status，有时候后端返回的不只是success，还有可能是null（宝银学长牛逼）
                    resolve(data.data)
                }
                else {
                   // reject(data.data )
                    message.info("网络异常！")
                }
            })
    )
}

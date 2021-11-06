import ajax from "./ajax";

export function loginApi() {
    return ajax({

    })
}
// 13611660022 测试用手机号(模拟的)
export function getCodeApi(phone) {
    return ajax({
        url: '/user/validate/code',
        method: 'POST',
        data: {phone}
    })
}
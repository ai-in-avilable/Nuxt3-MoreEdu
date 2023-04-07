export function userloginApi(body) {
    console.log(body)
    return useHttpPost("login", "/login", {
        body
    })
}
export function useGetinfoApi() {
    return useHttpGet("getinfo", "/getinfo", {
        $: true
    })
}
// 退出登录
export function useLogoutApi() {
    return useHttpPost('logout', "/logout")
}
// 注册
export function useRegApi(body) {
    console.log('请求前', body)
    return useHttpPost("reg", "/reg", {
        body
    })
}
// 绑定手机号
export function useBindPhoneApi(body) {
    return useHttpPost("bindphone", "/bind_mobile", {
        body
    })
}
// 获取手机验证码
export function useGetCaptchaApi(phone) {
    return useHttpPost("GetCaptcha", "/get_captcha", {
        body: {
            phone
        }
    })
}
// 忘记密码
export function useForgetApi(body) {
    return useHttpPost("forget", "/forget", {
        body
    })
}

// 获取学习记录
export function useUserHistoryApi(query) {
    return useHttpGet("userHistory", () => {
        let q = useQueryToString(query())
        return `/user_history/list${q}`
    }, {
        lazy: true
    })
}

// 获取购买记录
export function useOrderListApi(page) {
    return useHttpGet("OrderList", `/order/list?page=${page}`, {
        lazy: true
    })
}

// 我的考试记录
export function useUserTestApi(page) {
    return useHttpGet("UserTest", `/user_test/list?page=${page}`, {
        lazy: true
    })
}

// 我的帖子列表
export function useMypostListApi(page) {
    return useHttpGet("MypostList", `/mypost?page=${page}`, {
        lazy: true
    })
}

// 获取优惠券记录
export function useUserCouponApi(page) {
    return useHttpGet("UserCoupon", `/user_coupon?page=${page}`, {
        lazy: true
    })
}


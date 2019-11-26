const user = {
    // baseurl: 'http://localhost:8000',
    //登录
    login: function (name, pwd, callback) {

        $.post(APIURL.login, { user_name: name, password: pwd }, function (res) {
            callback(res)

        })

    },
    //退出
    logout: function (callback) {
        $.post(APIURL.logout, function (res) {
            callback(res)

        })
    },
    //获取用户信息
    getInfo: function (callback) {
        $.get(APIURL.getInfo, function (res) {
            callback(res)

        })
    },
    //文章相关
    //文章数量统计
    getcontentcount: function (callback) {
        $.get(APIURL.getcontentcount, function (res) {
            // console.log(res);
            callback(res);


        })
    },
    //文章评论统计
    getremarkcount: function (callback) {
        $.get(APIURL.getremarkcount, function (res) {
            callback(res)
        })
    },
    //月新增文章数
    getmonthcontentcount: function (callback) {
        $.get(APIURL.getmonthcontentcount, function (res) {
            // console.log(res);
            callback(res)
        })
    },
    //各类型文章数量统计
    getcontent_category_count: function (callback) {
        $.get('http://localhost:8000/admin/article_category_count', function (res) {
            // console.log(res);
            callback(res)

        })
    }




}
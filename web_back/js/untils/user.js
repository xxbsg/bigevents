var user = {
    baseurl: 'http://localhost:8000',
    //登录
    login: function (name, pwd, callback) {

        $.post(this.baseurl + '/admin/login', { user_name: name, password: pwd }, function (res) {
            callback(res)

        })

    },
    //退出
    logout: function (callback) {
        $.post(this.baseurl + '/admin/logout', function (res) {
            callback(res)

        })
    },
    //获取用户信息
    getInfo: function (callback) {
        $.get(this.baseurl + '/admin/getuser', function (res) {
            callback(res)

        })
    },
    //文章相关
    //文章数量统计
    getcontentcount: function (callback) {
        $.get(this.baseurl + '/admin/article_count', function (res) {
            // console.log(res);
            callback(res);


        })
    },
    //文章评论统计
    getremarkcount: function (callback) {
        $.get(this.baseurl + '/admin/comment_count', function (res) {
           callback(res)
        })
    },
    //月新增文章数
    getmonthcontentcount:function(callback){
        $.get('http://localhost:8000/admin/month_article_count', function (res) {
            // console.log(res);
            callback(res)
        })
    }




}
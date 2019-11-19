var user = {
    baseurl:'http://localhost:8000',
    login: function (name, pwd, callback) {

        $.post(this.baseurl+'/admin/login', { user_name: name, password: pwd }, function (res) {
            callback(res)

        })

    },
    logout: function (callback) {
        $.post(this.baseurl+'/admin/logout', function (res) {
            callback(res)

        })
    },
    getInfo: function (callback) {
        $.get(this.baseurl+'/admin/getuser', function (res) {
            callback(res)

        })
    },
    getcontentcount:function(callback){
        $.get(this.baseurl+'/admin/article_count',function(res){
            // console.log(res);
            callback(res);

            
        })
    }



}
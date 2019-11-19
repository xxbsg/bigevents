var user = {

    login: function (name, pwd, callback) {

        $.post('http://localhost:8000/admin/login', { user_name: name, password: pwd }, function (res) {
            callback(res)

        })

    },
    logout: function (callback) {
        $.post('http://localhost:8000/admin/logout', function (res) {
            callback(res)

        })
    },
    getInfo: function (callback) {
        $.get('http://localhost:8000/admin/getuser', function (res) {
            callback(res)

        })
    }


}
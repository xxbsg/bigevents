var user={
    
    login:function(name,pwd,callback){

        $.post('http://localhost:8000/admin/login', { user_name: name, password: pwd }, function (res) {
           callback(res)

        })

    }

}
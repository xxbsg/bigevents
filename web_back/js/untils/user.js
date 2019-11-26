const user = {
    // baseurl: 'http://localhost:8000',
    //登录
    // f()
    login: (name, pwd, callback)=>$.post(APIURL.login, { user_name: name, password: pwd },  res=> callback(res)),
    //退出
    logout: (callback)=> $.post(APIURL.logout,(res) =>{callback(res)}),
    //获取用户信息
    getInfo:  (callback) =>{$.get(APIURL.getInfo,  (res)=> {callback(res)})},
    //文章相关
    //文章数量统计
    getcontentcount:  (callback) =>{$.get(APIURL.getcontentcount, (res) =>{callback(res);})},
    //文章评论统计
    getremarkcount:  (callback) =>{$.get(APIURL.getremarkcount,  (res)=> {callback(res)})},
    //月新增文章数
    getmonthcontentcount:  (callback) =>{$.get(APIURL.getmonthcontentcount,  (res)=> {callback(res)})},
    //各类型文章数量统计
    getcontent_category_count:  (callback) =>{$.get('http://localhost:8000/admin/article_category_count',  (res) =>{callback(res)})}}
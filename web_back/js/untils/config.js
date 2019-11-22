var baseurl='http://localhost:8000'
var APIURL={
    login:baseurl + '/admin/login',
    logout:baseurl + '/admin/logout',
    getInfo:baseurl + '/admin/getuser',

    getcontentcount:baseurl + '/admin/article_count',
    getremarkcount:baseurl + '/admin/comment_count',
    getmonthcontentcount:baseurl + '/admin/month_article_count',

    //分类
    getcategory:baseurl +'/admin/category_search',//获取分类
    addcategory:baseurl +'/admin/category_add',//新增分类
    delcategory:baseurl +'/admin/category_delete',//删除分类
    editcategory:baseurl +'/admin/category_edit',//修改分类
    


}
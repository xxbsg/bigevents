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

    //文章
    article_publish:baseurl+'/admin/article_publish',//文章发布
    article_get:baseurl+'/admin/search',//文章获取
    article_del:baseurl+'/admin/article_delete',//文章删除
    article_edit:baseurl+'/admin/article_edit',//文章编辑

    


}
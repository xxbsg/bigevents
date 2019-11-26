const article = {
    article_get_focus:  ( callback)=> {
        $.ajax(
            {
                url: APIURL.article_get,
                type: 'get',
                data: {state:'已发布',perpage:5},
                success:  (res)=> {
                    callback(res)
                }
            }

        )
    },
    article_get_one:  ( id,callback) =>{
        $.ajax(
            {
                url: APIURL.article_get,
                type: 'get',
                data: {id:id},
                success:  (res) =>{
                    callback(res)
                }
            }

        )
    },

}
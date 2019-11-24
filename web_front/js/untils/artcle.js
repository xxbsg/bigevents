var article = {
    article_get_focus: function ( callback) {
        $.ajax(
            {
                url: APIURL.article_get,
                type: 'get',
                data: {state:'已发布',perpage:5},
                success: function (res) {
                    callback(res)
                }
            }

        )
    },
    article_get_one: function ( id,callback) {
        $.ajax(
            {
                url: APIURL.article_get,
                type: 'get',
                data: {id:id},
                success: function (res) {
                    callback(res)
                }
            }

        )
    },

}
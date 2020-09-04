const Service = require('egg').Service

class ArticleService extends Service {
    async create(params) {
        const { app } = this
        try {
            const res = app.mysql.insert('article', params)
            return res
        } catch(err) {
            console.log(err)
            return null
        }
    }

    async lists() {
        const { app } = this
        try {
            const res = app.mysql.select('article')
            return res
        } catch(err) {
            console.log(err)
            return null
        }
    }

    async detail(id) {
        const { app } = this
        if (!id) {
            console.log(err)
            return null
        }
        try {
            const res = await app.mysql.get('article', {id})
            return res
        }  catch(err) {
            console.log(err)
            return null
        }
    }
}

module.exports = ArticleService
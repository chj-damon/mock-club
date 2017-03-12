const topicSql = {
    insert: 'insert into topic(id, title, content, author_id, top, good, lock, tab, reply_count, visit_count, collect_count, create_at) values(?,?,?,?,0,0,0,?,0,0,0,now())',

    update: 'update topic set title=?, content=? where id=?',

    updateLastReply: 'update topic set last_reply=?, last_reply_at=now() where id=?',

    increaseReply: 'update topic set reply_count=reply_count+1 where id=?',

    increaseVisit: 'update topic set visit_count=visit_count+1 where id=?',

    increaseCollect: 'update topic set collect_count=collect_count+1 where id=?',

    setTop: 'update topic set top=1 where id=?',
    
    cancelTop: 'update topic set top=0 where id=?',

    setGood: 'update topic set good=1 where id=?',

    cancelGood: 'update topic set good=0 where id=?',

    setLock: 'update topic set lock=1 where id=?',

    cancelLock: 'update topic set lock=0 where id=?',

    delete: 'update topic set delete=1 where id=?',

    cancelDelete: 'update topic set delete=0 where id=?',

    queryById: 'select * from topic where id=?',

    queryTop: 'select * from topic where top=1',

    queryGood: 'select * from topic where good=1',

    queryLock: 'select * from topic where lock=1',

    queryDelete: 'select * from topic where delete=1',

    queryAll: 'select a.id as topic_id, a.top, a.title, a.reply_count, a.visit_count, c.id as reply_id, c.name as reply_name, c.avatar as reply_avatar, a.last_reply_at, a.tab, b.id as author_id, b.name as author_name, b.avatar as author_avatar from topic a, user b, user c where a.author_id = b.id and c.id = a.last_reply ',

    topicCount: 'select count(id) as topicsTotal from topic ',

    queryByPagination: ' order by top desc limit ?, ?'
}

module.exports = topicSql
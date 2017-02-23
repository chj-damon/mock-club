const usertopicSql = {
    insert: 'insert into user_topic(id, author_id, topic_id) values(?,?,?)',
    queryByUserId: 'select * from user_topic where author_id=?'
}
module.exports = usertopicSql
const userSql = {
    insert: 
        'insert into user(id, name, loginname, password, email, url, profile_image_url, location, signature, profile, weibo, avatar, is_block, score, topic_count, reply_count, follower_count, following_count, collect_tag_count, collect_topic_count, is_star, level, is_active, create_at) values(?,?,?,?,?,?,?,?,?,?,?,?,0,0,0,0,0,0,0,0,0,1,0,now())',
    
    modify: 
        'update user set name=?, loginname=?, password=?, email=?, url=?, profile_image_url=?, location=?, signature=?, profile=?, weibo=?, avatar=? where id = ?',
    
    increaseScore: 'update user set score=score+1 where id=?',
    
    increaseFollower: 'update user set follower_count=follower_count+1 where id=?',
    
    decreaseFollower: 'update user set follower_count=IF(follower_count<1, 0, follower_count-1) where id=?',
    
    increaseTopic: 'update user set topic_count=topic_count+1 where id=?',
    
    decreaseTopic: 'update user set topic_count=IF(topic_count<1, 0, topic_count-1) where id=?',
    
    increaseReply: 'update user set reply_count=reply_count+1 where id=?',
    
    decreaseReply: 'update user set reply_count=IF(reply_count<1, 0, reply_count-1) where id=?',
    
    increaseFollowing: 'update user set following_count=following_count+1 where id=?',
    
    decreaseFollowing: 'update user set following_count=IF(following_count<1, 0, following_count-1) where id=?',
    
    increaseCollectTag: 'update user set collect_tag_count=collect_tag_count+1 where id=?',
    
    decreaseCollectTag: 'update user set collect_tag_count=IF(collect_tag_count<1, 0, collect_tag_count-1) where id=?',
    
    increaseCollectTopic: 'update user set collect_topic_count=collect_topic_count+1 where id=?',
    
    decreaseCollectTopic: 'update user set collect_topic_count=IF(collect_topic_count<1, 0, collect_topic_count-1) where id=?',
    
    setBlock: 'update user set is_block=1 where id=?',

    setStar: 'update user set is_star=1 where id=?',
    
    setActive: 'update user set is_active=1 where id=?',
    
    levelUp: 'update user set level=level+1 where id=?',
    
    loginAt: 'update user set login_at=now() where id=?',
    
    queryById: 'select * from user where id = ?',
    
    queryAll: 'select * from user order by create_at desc',

    userCount: 'select count(id) from user',

    queryByPagination: 'select * from user order by create_at desc limit ?,?'
}

module.exports = userSql
import path from 'path'

module.exports = {
    debug: process.env.NODE_ENV === 'production' ? false : true,
    name: 'NodeClub',
    description: 'CNode: Node.js专业中文社区',
    keywords: 'nodejs, node, express, connect, socket.io',
    site_logo: '/public/images/cnodejs_light.svg',
    site_icon: '/public/images/cnode_icon_32.png',
    host: 'localhost',
    port: 3000,
    db: {
        mysql: process.env.NODE_ENV === 'production' ? 'localhost:3306/node-club' : 'localhost:3306/node-club'
    },
    session_secret: '',
    auth_cookie_name: 'node_club',
    list_topic_count: 20,

    //weibo app key
    weibo_key: '',
    weibo_id: '',
    // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
    admins: {
        user_login_name: true
    },

    // 是否允许直接注册（否则只能走 github 的方式）
    allow_sign_up: true,

    // 7牛的access信息，用于文件上传
    qiniu_access: {
        accessKey: 'your access key',
        secretKey: 'your secret key',
        bucket: 'your bucket name',
        origin: 'http://your qiniu domain',
        // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
        // 如果在国内，此项请留空
        uploadURL: 'http://xxxxxxxx',
    },

    // 文件上传配置
    // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/public/upload/'
    },

    //文件大小限制
    file_limit: '1MB',
    // 每个用户一天可以发的主题数
    create_post_per_day: 1000, 
    // 每个用户一天可以发的评论数
    create_reply_per_day: 1000, 
    // 每隔ip每天可以注册的用户数
    create_user_per_ip: 1000,
    // 每个 ip 每天能访问的次数
    visit_per_day: 1000
}
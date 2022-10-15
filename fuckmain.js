/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable new-cap */
/* eslint-disable no-extra-semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable no-inner-declarations */

;(async function () {
  'use strict'
  // ------------------------------------------------------
  // 配置区
  //

  // 黑名单数组
  const _config_blackListArr = [
    '微财数科',
    '拉勾集团',
    '利德世普',
    '66电子商务',
    '6979',
    '舒适空间',
    'Busgrill',
    'Gwrld(平潭)互联网科技',
    'Lachesis',
    'Lgan',
    'SIA',
    'i2',
    'kye',
    'lik',
    'tcl实业',
    '犇犇汽配信息技术',
    '阿尔法智慧电子',
    '阿尔法智汇科技',
    '阿卡索',
    '阿康健康科技',
    '阿可倍科技',
    '阿铺房产新零售科技',
    '阿铺科技',
    '阿铺新零售房产',
    '埃摩森',
    '艾宝',
    '艾可机器人',
    '艾蓝科技',
    '艾美集团',
    '艾美网络科技',
    '艾米克',
    '艾默德',
    '艾姆诗',
    '艾途教育科技集团',
    '爱递医药科技',
    '爱华国际教育',
    '爱康生物',
    '爱乐信息服务',
    '爱盟科技',
    '爱趣屋',
    '爱斯通信科技',
    '爱玩网络',
    '爱用科技',
    '爱租机科技',
    '安爸飞视达',
    '安答科技',
    '安科创新',
    '安妙',
    '安妮花',
    '安时达信息',
    '安晟博约管理咨询',
    '昂司蛋糕',
    '奥贝克网络科技',
    '奥士康',
    '澳鹏网络科技',
    '澳时铭',
    '巴士扒房',
    '百辰源',
    '百代商业',
    '百佳创展',
    '百钧成',
    '百丽国际',
    '百诺智慧健康技术',
    '百奢网络科技',
    '百事可乐',
    '佰钧成技术',
    '邦德科技',
    '包竟成传媒',
    '保信亚太生物科技',
    '保易信息科技',
    '宝安新蓝天咨询',
    '宝坤贸易',
    '宝龙达信息技术股份',
    '宝能汽车',
    '宝润兴业',
    '宝视佳',
    '宝树教育培训中心',
    '宝杨科技',
    '报业视听中心',
    '北京宝润',
    '北京鲤鹏山水教育咨询',
    '北京中外建建筑设计',
    '北京睿呈时代',
    '北美经典科技股份',
    '贝吉奥电子商务',
    '贝锐科技股份',
    '贝斯曼',
    '贝悉国际工程设计',
    '倍思科技',
    '本体软件',
    '比量科技',
    '比邻软件',
    '比特视讯',
    '比亚迪',
    '碧软',
    '必维国际检验集团',
    '冰浩贸易的文员岗位',
    '博安云',
    '博诚盈和',
    '博大建设集团',
    '博宏整合',
    '博米特科技',
    '博纳德集团',
    '博商管理科技研究院',
    '博视',
    '博图数字传媒',
    '博营电子竞技',
    '博源医疗器械',
    '博远科技创新发展',
    '博智林机器人',
    '博鳌纵横网络科技',
    '采纳品牌营销',
    '灿太科技',
    '草莓田文化发展',
    '昌建顺',
    '长帆供应链',
    '长沙规划设计院',
    '畅航',
    '城市屋超科技',
    '成谷科技',
    '程云科技',
    '赤子网络',
    '宠干线',
    '初妆科技',
    '触动力',
    '触阁科技',
    '传趣网络',
    '传世嘉业文化传媒',
    '传世品牌管理',
    '创成微电子',
    '创火文化科技',
    '创凯鑫科技',
    '创视科技',
    '创想三维',
    '创新建怡科技服务',
    '创新品牌策划',
    '创易家科技',
    '创致网络科技',
    '创智链科技',
    '春蕾维多利亚教育咨询',
    '春天阳光',
    '春田柒传媒',
    '纯途之旅',
    '慈树健康科技',
    '瓷谷科技',
    '达内',
    '大昌行',
    '大辰传媒',
    '大都港商务',
    '大华银行',
    '大牛档案',
    '大事件科技',
    '大事件网络科技',
    '大象艺术空间',
    '大易电气实业',
    '大争智能',
    '大族激光',
    '丹霄信息科技',
    '道朗教育信息咨询',
    '道歉道',
    '道通科技',
    '道源信息科技',
    '德保膳食',
    '德宝',
    '德恒顺',
    '德凯特电子',
    '德科',
    '德兰明海',
    '德乐方科技',
    '德玛特网络科技',
    '德生科技股份',
    '德至高',
    '得逸信息科技',
    '迪锋钟表',
    '迪巨智能科技',
    '迪克',
    '第一卫',
    '帝森易罗德电气',
    '点筹网',
    '点为科技',
    '电小二科技',
    '电信工程',
    '叮叮烹饪餐饮服务',
    '鼎昇德广告制品制作',
    '鼎顶文化',
    '东方风火轮科技',
    '东峰佳品科技发展',
    '东陆高新实业',
    '东美测量仪器',
    '东融信息科技',
    '东莞市瑞峰优慧垛实业投资',
    '豆沙包深圳科技',
    '哆唻咪心理咨询',
    '多彩',
    '多喜娃母婴服务',
    '多益网络股份',
    '多与乐科技',
    '舵手网络科技',
    '法本信息',
    '凡岛网络科技',
    '泛微网络',
    '方程文化传媒',
    '方糖信息技术',
    '房车宝集团',
    '飞奥达科技',
    '分期乐',
    '分之道',
    '粉蓝衣橱时尚股份',
    '锋铭贸易',
    '锋启汇信科技',
    '风道科技',
    '风火轮科技',
    '风神广告',
    '疯猴科技',
    '烽火星空通信发展',
    '福华医疗美容医院',
    '福瑞特商贸',
    '福永云创',
    '弗睿贸易',
    '弗睿网络科技',
    '赋能科技',
    '复星开心购',
    '富基电通香港股份',
    '富元网络科技',
    '富元证券',
    '改变者贸易',
    '干誉科技',
    '高灯技术',
    '高科新农技术',
    '高速行电子商务',
    '歌德老酒行',
    '歌力思',
    '歌文',
    '工易付',
    '公狼',
    '公瑾科技',
    '共享云科技',
    '古讴卡',
    '冠信信息咨询',
    '光风霁月文化科技',
    '光辉电器实业',
    '广策',
    '广点传媒',
    '广和教育',
    '广济缘实业',
    '广联赛讯',
    '广联数科',
    '广易达数据管理',
    '广鑫盛包装制品',
    '贵禾展示制品',
    '贵族街舞',
    '国豪科技',
    '国泰',
    '国育教育集团',
    '海伯森技术',
    '海岛游科技',
    '海度科技',
    '海那边',
    '海王星辰',
    '海信',
    '憨熊高尔夫',
    '翰智集团',
    '汉全科技',
    '汉斯顿净水设备',
    '杭州象涛',
    '豪恩安全科技',
    '豪末',
    '豪斯莱科技',
    '好家庭',
    '好麦啤酒销售',
    '好易科技',
    '好用信息技术',
    '核子基金',
    '和天下企业顾问',
    '合肥飞尔智能科技',
    '合泰文化发展',
    '河北衍画网络科技',
    '河汉计算机',
    '赫奕信息科技',
    '恒大集团',
    '恒大智能科技',
    '恒驱电机',
    '恒盛时代',
    '恒泰德电子商务',
    '恒天吉科技技术发展',
    '恒沃源商务',
    '恒誉光明运输集团',
    '恒裕商业管理',
    '恒鑫运',
    '鸿联九五',
    '鸿勤盛世电子科技',
    '鸿亿防伪',
    '鸿正软件技术',
    '洪京科技',
    '宏庆信息技术',
    '宏泰阳科技',
    '宏禧互动科技',
    '弘桉数据技术',
    '红海云计算股份',
    '红阳光能源技术',
    '红橘',
    '湖南光合作用',
    '虎硕教育科技',
    '互联艾特网络科技',
    '互联网港湾网络技术',
    '花儿绽放网络科技',
    '花狸文化传媒',
    '花漾美天医疗美容诊所',
    '华安众创',
    '华邦控股',
    '华邦美好家园养老集团',
    '华创企服会计事务',
    '华电智能股份',
    '华付信息',
    '华翰物流',
    '华立汉唐',
    '华南三弦',
    '华南三弦科技',
    '华磐网络科技',
    '华秋电子',
    '华软互联科技',
    '华瑞研能科技',
    '华山威海电子',
    '华生大家居集团',
    '华氏实业',
    '华硕电脑',
    '华思旭科技',
    '华苏',
    '华特星博科技',
    '华通玖安',
    '华项科技',
    '华义贸易',
    '华茵健康',
    '华越无人机技术',
    '华云中盛科技股份',
    '华展国际',
    '华瀚',
    '欢乐峰',
    '环球跳动深圳传媒',
    '环游',
    '徽忆',
    '慧订',
    '惠泉天下',
    '会一联合网络科技',
    '汇和聚力',
    '汇桔网',
    '绘佰',
    '绘海',
    '绘麦',
    '绘纳',
    '火火兔电商部',
    '火腾科技',
    '霍迈',
    '货拉拉',
    '机乐堂',
    '极飞科技股份',
    '极联股份',
    '极氪',
    '集群车宝汽车连锁服务',
    '及时沟通广告',
    '几何显示科技',
    '几素',
    '嘉丰品牌管理',
    '嘉华众力科技',
    '嘉兰曼科技',
    '嘉立创科技',
    '嘉晟集团',
    '佳鸿集团控股',
    '佳鸿名车投资',
    '尖果互动',
    '简一爱科技服装',
    '减字科技',
    '健创电子',
    '健康信息产业',
    '健新科技',
    '建侨设计院',
    '建筑港',
    '建筑设计研究总院',
    '江南阳光',
    '江西巨网科技',
    '江西神起信息技术',
    '皆智网络科技',
    '杰奥教育',
    '杰比电器',
    '杰美晟模具',
    '杰思谷科技',
    '洁德创新技术',
    '洁修哥科技服务',
    '金海智控科技',
    '金杰运通',
    '金隆兴维',
    '金录咨询',
    '金马',
    '金山移动',
    '金文网络科技',
    '金钥匙控股集团',
    '金照明科技股份',
    '锦读科技',
    '锦泰宏企业服务',
    '锦瀚',
    '进汇科技',
    '鲸特科技',
    '鲸座科技',
    '惊喜网购',
    '惊喜网购科技',
    '精点数据科技股份',
    '精准健康',
    '景福元记珠宝',
    '竞泽网络科技',
    '久富',
    '九华星科技',
    '九明药品',
    '九派创新',
    '九像',
    '九象数字科技',
    '九寻木',
    '聚慧网络科技',
    '聚焦网络技术',
    '聚迈',
    '聚优乐科技',
    '聚鑫科技文化',
    '巨海教育培训',
    '巨尚传媒',
    '巨世科技股份',
    '骏丰频谱',
    '卡恩珠宝',
    '卡联科技股份',
    '开畅财税',
    '开泰传媒',
    '开域国际控股',
    '凯度',
    '凯联网络科技',
    '凯铭电气照明',
    '凯琦供应链',
    '看房网科技',
    '康程软件',
    '康夫电商',
    '康康体检网',
    '康美药业广东发展',
    '康铭盛实业股份',
    '康纳未来',
    '康云',
    '科迈',
    '科思集团',
    '科卫',
    '科西',
    '科源泰实业',
    '刻锐智能',
    '客一客',
    '酷开网络科技',
    '酷看文化',
    '跨越速运',
    '宽夫熟红茶',
    '蓝鸽集团',
    '蓝禾',
    '蓝库云',
    '蓝色冰川教育在线',
    '蓝兔科技',
    '蓝月亮',
    '蓝韵',
    '蓝之海供应链技术',
    '朗程师地域景观规划设计',
    '朗恒信息技术',
    '浪淘通信科技',
    '乐播心田',
    '乐的文化',
    '乐京传媒',
    '乐客咨询',
    '乐能电子科技',
    '乐普医疗',
    '乐其网络科技',
    '乐图技术',
    '乐信集团',
    '乐言',
    '乐摇摇',
    '乐有家',
    '乐鱼供应链管理',
    '雷德蒙电器',
    '雷锋网',
    '雷诺表',
    '雷诺麦凯莱',
    '里刻文化',
    '丽佳居装饰',
    '丽晶软件',
    '丽天家居',
    '历美科技',
    '利孚',
    '立川信息科技',
    '立泰教育',
    '立中祥科技',
    '力动康体',
    '联动未来',
    '联合运通',
    '联旗电子',
    '联塑科技',
    '联新',
    '联众互动科技',
    '莲藕健康科技',
    '脸谱',
    '量子水生态科技',
    '林氏木业深圳',
    '林黛玉控股集团',
    '零创网络科技',
    '零阶场域',
    '零壹创新',
    '灵美文化传媒',
    '灵狮科技',
    '六感科技',
    '六桂福珠宝',
    '六桂盛世',
    '六合同春',
    '龙光',
    '龙嘉珠宝',
    '楼柿科技',
    '陆核科技',
    '绿点包装',
    '绿苹果科技',
    '绿瘦',
    '罗兰美特科技',
    '罗马仕科技',
    '洛克国际软装',
    '洛克韦陀科技',
    '妈妈网盛成科技',
    '麻帮',
    '玛丝菲尔',
    '玛俪琳',
    '马力人力',
    '马荣教育卡通城幼儿园',
    '麦娇奴服装',
    '麦凯莱',
    '麦哲伦传媒',
    '迈丘景观设计',
    '迈瑞医疗',
    '迈远',
    '梅利号',
    '媒体港',
    '美国W&P',
    '美莱口腔门诊',
    '美丽莱国际化妆品',
    '美律电子',
    '美茂科技',
    '美仕澳',
    '美味不用等',
    '美粤文化科技',
    '萌萌哒',
    '萌悦爱达',
    '盟重互娱科技',
    '梦家园美容',
    '梦金园珠宝',
    '米多网络科技',
    '米兰登服饰',
    '米乐鱼',
    '蜜蜂在线',
    '幂加和私募基金',
    '秒音科技',
    '明喆集团',
    '明德教育培训',
    '明辉智能',
    '明略科技',
    '明仕达光电',
    '明信测试设备',
    '名创优品',
    '名锐讯动信息科技',
    '蘑菇网咖',
    '摩杜云信息科技',
    '摩士龙实业',
    '摩天之星',
    '魔方国际环境艺术设计',
    '莫昆信息科技',
    '默尼信息',
    '慕可生物科技',
    '木与木',
    '木子文化艺术',
    '耐拓能源科技',
    '南昌宝创达信息技术',
    '南方风火轮科技',
    '南粤云视科技',
    '南嫣花里',
    '尼罗河移动互联科技',
    '柠米贸易',
    '宁安消防',
    '诺腾优策管理咨询',
    '欧陆通',
    '欧亚汇餐饮企业',
    '欧阳氏/橙荟传媒',
    '派宝机器人',
    '派菲爱宠',
    '攀特体育用品',
    '澎智教育',
    '鹏博士',
    '鹏城城乡建设集团',
    '鹏城新农业开发',
    '鹏城印象文化传媒',
    '鹏城智农发展',
    '鹏利集团',
    '鹏优科技',
    '鹏远企业服务',
    '霹雷深圳拓扑电商咨询',
    '品尖建设',
    '品拉索设计',
    '平凡信仰',
    '普洱梧桐庄园',
    '普鲁特斯科技',
    '普盛网络',
    '七彩童年',
    '七朵文化',
    '奇酷',
    '齐天智能方案设计',
    '企顺顺',
    '启天印刷',
    '千峰技术',
    '千仕信息科技',
    '千誉科技',
    '千纸鹤',
    '千兹电子',
    '乾派文化',
    '钱大妈农产品',
    '前海必胜道网络科技',
    '前海鸿远辰',
    '前海建筑节能科技',
    '前海金钥匙基金管理',
    '前海麦格美',
    '前海数据服务',
    '前海拓扑',
    '前海梧',
    '前海亚讯电子商务',
    '前海一方',
    '前海一方恒融',
    '前海一方科技集团',
    '前海一方商业保理',
    '青创时代创意',
    '青云端信息科技',
    '轻软',
    '轻松到家',
    '轻喜到家',
    '趣互联科技',
    '趣买票科技',
    '全程云科技',
    '全朗教育信息科技',
    '全棉时代',
    '全民严选',
    '全球购骑士特权',
    '全球汇网络技术',
    '人民日报',
    '荣邦科技',
    '荣耀电力',
    '融合通信股份',
    '融优科技',
    '软融教育科技',
    '软通动力',
    '瑞登数字科技',
    '瑞东文化',
    '瑞声科技',
    '瑞思创意文化',
    '瑞淘吉',
    '瑞沃德生命科技',
    '瑞修得信息科技',
    '锐途电子商务',
    '润丰数码技术',
    '洒脱教育',
    '赛盒科技',
    '赛诺金',
    '赛维时代科技股份',
    '赛意信息科技股份',
    '三合科技',
    '三绿',
    '三毛信息科技',
    '三盟科技股份',
    '三维家科技',
    '叁陆伍科技服务',
    '森塞尔美术教育',
    '沙美贸易',
    '汕尾秉政软件',
    '上海汉得',
    '尚层设计',
    '尚品宅配',
    '尚游',
    '少女派',
    '少女派科技',
    '邵晨电子商务',
    '身边云',
    '深海创新',
    '深华物业',
    '深脑科技',
    '深业实业',
    '深优荣鼎科技',
    '深证博澳财务股份',
    '神盾信息科技',
    '神牛摄影',
    '神投互动科技',
    '神州联保',
    '沈阳思诺科技',
    '生命码科技',
    '升码科技',
    '盛禾达酒业',
    '圣马歌',
    '十方教育',
    '石家庄翰纬医疗设备',
    '石头兄弟感官设计',
    '时创意电子',
    '时光秀科技',
    '时计宝商贸',
    '时刻文化',
    '实信达',
    '世纪恒程知识产权',
    '世纪美尚（广州）',
    '仕锦源科技',
    '视戈传媒',
    '视可佳网络科技',
    '舒适空间',
    '树客电子商务',
    '树泽',
    '数虎图像股份',
    '数块科技',
    '数位大数据',
    '数钛芯',
    '双龙口腔',
    '双木数字科技',
    '顺电',
    '顺为信息科技',
    '斯贝达电子',
    '思谷国际',
    '思科兴',
    '思力智慧',
    '思芮科技',
    '丝宜灯饰',
    '肆块伍半杯咖啡文化管理',
    '四方互动',
    '四季正扬网络科技',
    '四驾马车',
    '四块科技',
    '四正电商',
    '松堡王国',
    '松华科技',
    '松鼠网络科技',
    '搜发网络科技',
    '苏交科',
    '素而美',
    '素萃化妆品',
    '肃羽',
    '索乐文化',
    '索未来科技',
    '塔下文化传播',
    '碳宝贝',
    '探迹',
    '炭舍餐饮管理',
    '桃行科技股份',
    '桃园伟业',
    '陶悦',
    '特艺达装饰设计工程',
    '腾辉',
    '腾晶科技',
    '腾为视讯科技',
    '天博检测',
    '天成食品',
    '天川电气',
    '天大实业',
    '天地互联科技（广州）',
    '天方达健信科技股份',
    '天峰酷盯科技股份',
    '天赋时',
    '天高软件科技',
    '天诺智能',
    '天时网',
    '天溯计量',
    '天王表',
    '天艺文化',
    '天悦创意文化传播',
    '天翊瑞霖智能科技',
    '通联',
    '通旭',
    '同创创精密电子',
    '同天下科技',
    '童程童美',
    '童亿科技',
    '头豹科技',
    '头等舱互联科技',
    '图拉斯',
    '图腾',
    '图友',
    '途径信息',
    '涂百年新型材料',
    '涂画美术',
    '土巴兔',
    '拓柏景观设计',
    '拓略计算机',
    '瓦赛科技',
    '外卖名堂',
    '湾畔电子商务',
    '万旗服饰',
    '万事胜意',
    '万拓科创',
    '万兴科技',
    '王力智能科技',
    '网能',
    '网众共创',
    '旺龙智能科技',
    '望信科技',
    '威加实业',
    '威马设计',
    '威派文化',
    '威学一百',
    '微波互动',
    '微创业电子商务',
    '微访谈传媒',
    '微革',
    '微科通讯设备',
    '微龙科技',
    '微脉科技',
    '微盟',
    '微拓天下电子商务',
    '微盐科技传媒',
    '微娱时代',
    '唯镜电子商务',
    '唯智信息技术',
    '为华网络',
    '维超智能科技',
    '伟沦建材',
    '纬亚云网络科技',
    '蔚壹科技',
    '尉翔文化传媒',
    '卫安智能',
    '文川实业',
    '文乐活贸易',
    '稳健医疗',
    '问止中医健康科技',
    '沃菲数字营销',
    '无限进制科技',
    '梧桐庄园',
    '五行创新文化传播',
    '物美南方科技',
    '西格玛',
    '西美国际化妆品',
    '希川皮肤医疗',
    '希斯教育',
    '希希迪迪',
    '希音',
    '犀鸥设计',
    '细刻',
    '厦门歆薇服饰',
    '先健科技',
    '显扬科技',
    '相信未来网络科技',
    '香港汇创国际建筑',
    '香港捷胜电子',
    '想想广告',
    '响邻',
    '向蜜鸟科技',
    '小橙子',
    '小怪兽雾化科技',
    '小迈网络科技',
    '小衫重叠',
    '小糖人科技',
    '小希网络科技',
    '小象',
    '小心诗首饰',
    '小义信息技术',
    '笑响',
    '芯康首创电子科技',
    '芯阳创展',
    '欣海文化艺术培训',
    '欣盛商科技',
    '欣芝妍化妆品',
    '新邦智联科技',
    '新创天下网络科技',
    '新航道国际教育集团',
    '新恒利达投资',
    '新居网',
    '新快报社',
    '新蓝天投资',
    '新又好集团',
    '新致方舟',
    '新中新集团',
    '新洲合众电子',
    '心云飞羽',
    '信诚',
    '信丰',
    '信航道',
    '星辰游戏科技',
    '星动文化艺术发展',
    '星米科技',
    '星商电子商务',
    '星一代科技',
    '星赞信息科技',
    '兴迈',
    '兴梦电子商务',
    '兴图科技',
    '行动元',
    '熊瞅瞅科技',
    '旭航科技集团',
    '雪松控股集团',
    '寻找母星网络技术',
    '迅通技术',
    '压寨网络',
    '雅昌文化集团',
    '雅文',
    '雅鑫建筑',
    '亚美信息科技',
    '亚声威格',
    '亚桐科技',
    '亚翔精密塑胶五金制品',
    '研胜科技',
    '言语萌宠',
    '燕加隆家居建材股份',
    '扬盛计算机',
    '洋沃电子',
    '阳光医疗美容',
    '耀华实验学校',
    '耀蓝科技',
    '野望传媒',
    '一境',
    '一块买吧电子商务',
    '一起户外装备',
    '一星辰科技',
    '一直玩科技',
    '壹邦健康产业集团',
    '壹鸽科技',
    '壹健康',
    '壹秀科技',
    '医佳康大药房',
    '医咖来了健康科技',
    '医启科技',
    '医通软件',
    '医信互联网',
    '医信科技',
    '铱铠医疗',
    '伊安贸易',
    '宜采科技',
    '以星',
    '艺皇文化活动',
    '艺暄设计',
    '易佰网络科技',
    '易宝',
    '易仓',
    '易车合创科技',
    '易飞杨科技',
    '易工品',
    '易联联盟',
    '易瑞生物技术',
    '易世通达',
    '亿道',
    '亿科数字科技',
    '亿上光科技',
    '亿腾',
    '亿卓实业',
    '逸仙科技股份',
    '亦云网络',
    '益诚',
    '益力盛',
    '益田',
    '益通物流项目开发',
    '异业科技',
    '银河表计股份',
    '银河七星广告',
    '银河世纪',
    '银盛集团',
    '英驰供应链',
    '英皇教育',
    '英派尔',
    '鹰硕集团',
    '赢之杰科技',
    '影儿',
    '映博智能科技',
    '映美卡莫',
    '映月网络科技',
    '涌智信息',
    '永道科技',
    '永一智控',
    '优必选',
    '优管',
    '优科创意信息技术',
    '优联网讯科技',
    '优胜仕贸易',
    '优旺特科技',
    '优学派',
    '优宜得信息科技',
    '优制云',
    '悠时科技',
    '尤迈医疗用品',
    '酉一影视文化',
    '有品',
    '有幸科技',
    '友财信息科技',
    '友人信息咨询',
    '友信信息科技',
    '余时宝',
    '与君创业投资管理',
    '禹乐',
    '禹穗信息科技',
    '宇光信息',
    '宇航机电',
    '宇阳共赢科技',
    '渊博森实业',
    '元景工艺品',
    '源利凯',
    '源兴发',
    '源溢智能供应链管理',
    '源中瑞企业科技发展',
    '缘创信息科技',
    '远界管理咨询',
    '远蓝信息科技',
    '越品餐饮',
    '跃动文化传播',
    '粤广装饰设计工程',
    '粤豪珠宝',
    '粤文娱教中心',
    '月步创新科技',
    '悦汇数据服务',
    '悦笑科技',
    '悦孚斯',
    '云创孵化器',
    '云创投资',
    '云集市',
    '云计算科技',
    '云鲸智能',
    '云链科技',
    '云天下科技',
    '云图数字科技',
    '云星电子商务',
    '云药科技',
    '云一数科',
    '云智易联科技',
    '云曦智能技术发展',
    '在意产品',
    '泽恩科技',
    '泽浩棒棒猪科技股份',
    '渣渣宝',
    '绽放工场',
    '掌世界深圳掌视互娱',
    '掌娱炫动',
    '招商华软信息',
    '招银云创',
    '甄知美康集团',
    '臻酷传媒',
    '振康医药',
    '正邦电力通讯工程',
    '正泰商业数据',
    '正中五冠口腔',
    '正鑫源实业',
    '芝麻哥教育',
    '支点科技股份',
    '知微',
    '植乐家芳香科技',
    '指通互娱',
    '指芯物联',
    '至真科技',
    '至尊宝金融',
    '至尊航空科技开发',
    '致欧科技',
    '智必选',
    '智度',
    '智汇创想',
    '智汇奇策科技',
    '智联招聘',
    '智迈汇科技',
    '智美兴科技',
    '智算科技',
    '智展未来',
    '智楠科技',
    '中安天鹏',
    '中城国兴',
    '中创传媒',
    '中电数码',
    '中航物业',
    '中嘉科技',
    '中建建筑',
    '中建科建筑技术',
    '中建普联科技',
    '中建三局绿色产业发展投资',
    '中金供应链',
    '中凯领航实业',
    '中科鼎创',
    '中科汇宸',
    '中链控股',
    '中履鞋业',
    '中南',
    '中鹏教育',
    '中青智造',
    '中软国际',
    '中软信息科技',
    '中设智控科技股份',
    '中深影视',
    '中数旅科技',
    '中信银行',
    '中研普华集团',
    '中原策划岗',
    '中正世纪',
    '中智软件开发',
    '中智卫安',
    '种子创意设计',
    '重运宝',
    '众合影视',
    '众时信息科技',
    '众兴达',
    '珠江投资',
    '筑网',
    '转转',
    '准爸妈科孕健康管理',
    '卓航国际教育',
    '卓信特',
    '啄鸟云医',
    '姿维雅',
    '紫鲸互联网科技',
    '子午文化传媒',
    '自然进步技术中心',
    '自在广告',
    '综合信兴物流',
    '纵荣设计空间',
    '尊联科技',
    '劢微机器人科技',
    '芙乐思贸易',
    '荟萃楼珠宝',
    '茗品苑贸易',
    '萱嘉投资',
    '咣叽科技',
    '嘀嗒嘀物流科技',
    '怡禄电讯科技',
    '怡亚通',
    '宸兴业科技',
    '寰讯信息科技',
    '妍丽化妆品',
    '缤纷礼科技',
    '缤客科技',
    '珥尚',
    '瓴仕数字科技',
    '昕野科技',
    '歆品汇服饰',
    '飒芙商业',
    '熠安科技',
    '祺量科技',
    '砥行科技',
    '鑫创',
    '鑫万福珠宝',
    '鑫泽源创新技术',
    '鲲鹏'
  ]
  // 白名单数组
  const _config_whiteListArr = ['深圳中科西力']

  // ------------------------------------------------------

  /**
   * 勿动
   */
  const _config_jobListDomSelectorArr = [
    {
      el: '.job-card-wrapper .job-card-right .company-name',
      siteType: 1
    },
    {
      el: ".job-list-new .item .name span[class='company']",
      siteType: 1
    },
    {
      el: '.positionlist .iteminfo__line1__compname__name',
      siteType: 2
    },
    {
      el: '.job-card-pc-container .company-name',
      siteType: 3
    },
    {
      el: '.seo-home-comp-card .home-comp-info .home-comp-info-content .comp-info-title',
      siteType: 3
    },
    {
      el: '.seo-jobcard2-common .jobcard2-company-box .jobcard2-company-info .jobcard2-company-title',
      siteType: 3
    },
    {
      el: '.s_position_list .list_item_top .company .company_name a',
      siteType: 4
    },
    {
      el: '.list__YibNq .item__10RTO .item-top__1Z3Zo .company__2EsC8 .company-name__2-SjF',
      siteType: 4
    }
  ]
  const _config_detailListDomSelectorArr = [
    {
      el: '.sider-company .company-info',
      siteType: 1
    },
    {
      el: '.company-banner .name',
      siteType: 1
    },
    {
      el: '.mian-company .base-info__title h1',
      siteType: 2
    },
    {
      el: '.publisher .company__title',
      siteType: 2
    },
    {
      el: '.company-header-content-name .name-right .title-box .title',
      siteType: 3
    },
    {
      el: '.company-info-container .company-card .content .name',
      siteType: 3
    },
    {
      el: '.job_company .job_company_content em[class="fl-cn"]',
      siteType: 4
    },
    {
      el: '.company_main .company_main_title a',
      siteType: 4
    }
  ]

  const _config_jobListPageUrlArr = [
    {
      url: 'www.zhipin.com/web/geek/job',
      siteType: 1
    },
    {
      url: 'sou.zhaopin.com/',
      siteType: 2
    },
    {
      url: 'www.liepin.com/zhaopin/',
      siteType: 3
    },
    {
      url: 'www.lagou.com/jobs/',
      siteType: 4
    },
    {
      url: 'www.lagou.com/zhaopin/',
      siteType: 4
    },
    {
      url: 'www.lagou.com/wn/jobs',
      siteType: 4
    }
  ]

  const _config_jobDetailPageUrlArr = [
    {
      url: 'www.zhipin.com/job_detail/',
      siteType: 1
    },
    {
      url: 'jobs.zhaopin.com/',
      siteType: 2
    },
    {
      url: 'www.liepin.com/job/',
      siteType: 3
    },
    {
      url: 'www.liepin.com/lptjob/',
      siteType: 3
    },
    {
      url: 'www.lagou.com/wn/jobs/',
      siteType: 4
    }
  ]

  const _config_companyDetailPageUrlArr = [
    {
      url: 'www.zhipin.com/gongsi/',
      siteType: 1
    },
    {
      url: 'www.zhipin.com/gongsir/',
      siteType: 1
    },
    {
      url: 'www.zhaopin.com/companydetail/',
      siteType: 2
    },
    {
      url: 'www.liepin.com/company/',
      siteType: 3
    },
    {
      url: 'www.lagou.com/gongsi/',
      siteType: 4
    }
  ]
  var isTimesExhausted_bs = false
  var errMsg_bs = ''
  var isTimesExhausted_lp = false
  var errMsg_lp = ''
  var hijacking_enabled = true

  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.38',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.44',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.47',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.52',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36 Edg/94.0.992.31',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36 Edg/94.0.992.37',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 Edg/94.0.992.47',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 Edg/94.0.992.50',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.30',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.40',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.44',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.53',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36 Edg/96.0.1054.29',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.34',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.41',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.43',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.55',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 Edg/97.0.1072.69',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 Edg/97.0.1072.76',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.43',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 Edg/98.0.1108.55',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 Edg/98.0.1108.56',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 Edg/98.0.1108.62',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.30',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.39',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.46',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.52',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.55',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36 Edg/100.0.1185.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36 Edg/100.0.1185.39',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.50',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 Edg/101.0.1210.32',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36 Edg/101.0.1210.39',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.47',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36 Edg/102.0.1245.30',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36 Edg/102.0.1245.33',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36 Edg/102.0.1245.39',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.124 Safari/537.36 Edg/102.0.1245.41',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.124 Safari/537.36 Edg/102.0.1245.44',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.66 Safari/537.36 Edg/103.0.1264.44',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.49',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.71',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.47',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.63',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.27',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.42',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.50',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.34',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.37',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.42',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.66 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.54 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.102 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.127 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5249.91 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5249.103 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.41 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.17 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.32 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.40 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.49 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.18 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.27 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.35 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 OPR/26.0.1656.60',
    'Opera/8.0 (Windows NT 5.1; U; en)',
    'Mozilla/5.0 (Windows NT 5.1; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.50',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.50',
    'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11',
    'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11',
    'Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0',
    'Mozilla/5.0 (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv,2.0.1) Gecko/20100101 Firefox/4.0.1',
    'Mozilla/5.0 (Windows NT 6.1; rv,2.0.1) Gecko/20100101 Firefox/4.0.1',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
    'MAC：Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36',
    'Windows：Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50',
    'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
    'Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.133 Safari/534.16',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; 360SE)',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/2.0 Safari/536.11',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E; LBBROWSER)',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)',
    'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.84 Safari/535.11 SE 2.X MetaSr 1.0',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SV1; QQDownload 732; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SE 2.X MetaSr 1.0; SE 2.X MetaSr 1.0; .NET CLR 2.0.50727; SE 2.X MetaSr 1.0)',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.4000 Chrome/30.0.1599.101 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 UBrowser/6.2.4094.1 Safari/537.36',
    'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
    'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; zh-cn) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
    'Mozilla/5.0 (Linux; U; Android 2.2.1; zh-cn; HTC_Wildfire_A3333 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
    'Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
    'MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
    'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
    'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1+',
    'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
    'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; The World)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; TencentTraveler 4.0)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser)',
    'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Titan)',
    'UCWEB7.0.2.37/28/999',
    'NOKIA5700/ UCWEB7.0.2.37/28/999',
    'Openwave/ UCWEB7.0.2.37/28/999'
  ]

  /**
   * 通知
   */
  const myToast = {
    /**
     * @description toast通知
     * @param {string} type "success", "error", "warning", "info" or "question"
     * @param {string} title 标题
     * @param {number} timer 显示时间
     * @param {string} html html类型内容，选填
     * @param {string} position 显示位置
     */
    normal: function (type, title, timer, position = 'center', html = null) {
      const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        showCloseButton: true
      })
      Toast.fire({
        type,
        title,
        html,
        timer
      })
    },
    /**
     * @description 不控制的常规弹窗
     * @param {string} type "success","error","warning","info" or "question"
     * @param {string} title 标题
     * @param {number} timer 显示时间
     * @param {boolean} isHtml text or html
     * @param {string} content 内容
     */
    multipleNotControl: function (
      type = null,
      title,
      timer,
      isHtml,
      content,
      confirmCallBack
    ) {
      var text, html
      if (isHtml) {
        text = null
        html = content
      } else {
        text = content
        html = null
      }
      Swal.fire({
        type,
        title,
        text,
        timer,
        html,
        confirmButtonText: '我知道了'
      }).then((result) => {
        confirmCallBack(result)
      })
    },
    multipleControl: function (
      type = null,
      title,
      timer,
      isHtml,
      content,
      confirmCallBack
    ) {
      var text, html
      if (isHtml) {
        text = null
        html = content
      } else {
        text = content
        html = null
      }
      Swal.fire({
        type,
        title,
        text,
        timer,
        html,
        confirmButtonText: '我知道了',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      }).then((result) => {
        confirmCallBack(result)
      })
    }
  }

  /**
   * 工具库
   */
  const myUtils = {
    /**
     *
     * @param {object} parent 被监听的元素的父节点，也可以是document
     * @param {Node} selector 被监听的dom元素
     * @param {Number} timeout 超时跳出时间，默认为0，则等到出现为止，大于0才超时跳出
     * @returns
     */
    getElement: function (parent, selector, timeout = 0) {
      return new Promise((resolve) => {
        let result = parent.querySelector(selector)
        if (result) return resolve(result)
        let timer
        const mutationObserver =
          window.MutationObserver ||
          window.WebkitMutationObserver ||
          window.MozMutationObserver
        if (mutationObserver) {
          const observer = new mutationObserver((mutations) => {
            for (const mutation of mutations) {
              for (const addedNode of mutation.addedNodes) {
                if (addedNode instanceof Element) {
                  result = addedNode.matches(selector)
                    ? addedNode
                    : addedNode.querySelector(selector)
                  if (result) {
                    observer.disconnect()
                    timer && clearTimeout(timer)
                    return resolve(result)
                  }
                }
              }
            }
          })
          observer.observe(parent, {
            childList: true,
            subtree: true
          })
          if (timeout > 0) {
            timer = setTimeout(() => {
              observer.disconnect()
              return resolve(null)
            }, timeout)
          }
        } else {
          const listener = (e) => {
            if (e.target instanceof Element) {
              result = e.target.matches(selector)
                ? e.target
                : e.target.querySelector(selector)
              if (result) {
                parent.removeEventListener('DOMNodeInserted', listener, true)
                timer && clearTimeout(timer)
                return resolve(result)
              }
            }
          }
          parent.addEventListener('DOMNodeInserted', listener, true)
          if (timeout > 0) {
            timer = setTimeout(() => {
              parent.removeEventListener('DOMNodeInserted', listener, true)
              return resolve(null)
            }, timeout)
          }
        }
      })
    },
    uniqueArr: (arr) => Array.from(new Set(arr)),
    sleep: function (duration) {
      return new Promise((resolve) => {
        setTimeout(resolve, duration)
      })
    },
    /**
     *
     * @param {Array} toArr 要分割的数组
     * @param {Number} eqLen 等长值
     * @returns newArr
     */
    sliceArrLikeBeEQLengthGroup: (toArr, eqLen) => {
      let index = 0
      const newArr = []
      while (index < toArr.length) {
        newArr.push(toArr.slice(index, (index += eqLen)))
      }
      return newArr
    },
    /**
     * async/await 的错误处理方法 1. try...catch 2. async/await 本质就是 promise 的语法糖
     * @param {promise} promise 要执行的promise
     * @returns {array} [err,rs] err:错误码，data:结果
     */
    awaitWrap: function (promise) {
      return promise.then((data) => [null, data]).catch((err) => [err, null])
    },
    debounce: function (fn, delay) {
      let timeout = null
      return function () {
        const args = arguments
        if (timeout) window.clearTimeout(timeout)
        timeout = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    },
    // 通过判断图片是否加载成功来判断网络通断
    onLine: function () {
      // 基于promise，可以用async和await
      var img = new Image()
      img.src = 'https://www.baidu.com/favicon.ico?_t=' + Date.now()
      return new Promise((resolve, reject) => {
        img.onload = function () {
          resolve(true)
        }
        img.onerror = function () {
          resolve(false)
        }
      })
    },
    /**
     * 从数组中查找出模糊或完全符合的内容
     * @param sth 要查找的内容
     * @param arr 被查找的数组
     * @param name 被查找的属性名
     * @returns Array
     */
    findSthFromObjArr: (sth, arr, name) => {
      return (
        arr.filter((item) => {
          return sth.indexOf(item[name]) !== -1 || sth === item[name]
        }) || []
      )
    },
    /**
     * @description: 正则表达式根据cookie的key匹配cookie的value
     * @param {string} key
     * @return {*}
     */
    getCookie: function (key) {
      const str = `(^| )${key}=([^;]*)(;|$)`
      const reg = new RegExp(str)
      const arr = document.cookie.match(reg)
      if (!arr) {
        return null
      }
      return arr[2] // 第2个分组匹配对应cookie的value
    },
    randomSleep: async function (number, number1) {
      var a = Math.round(Math.random() * (number1 - number) + number) * 1000
      console.log(`即将等待${+(a / 1000)}秒(${number}~${number1}秒)`)
      await this.sleep(a)
    }
  }

  /**
   * 悬浮窗样式
   */
  GM_addStyle(
    `#TManays{z-index:999999; position:absolute; left:0px; top:0px; width:100px; height:auto; border:0; margin:0;}#parseUl{position:fixed;top:80px; left:0px;}#parseUl li{list-style:none;}.TM1{opacity:0.3; position:relative;padding: 0 7px 0 0; min-width: 19px; cursor:pointer;}.TM1:hover{opacity:1;}.TM1 span{display:block; border-radius:0 5px 5px 0; background-color:#ffff00; border:0; font:bold 15px "微软雅黑" !important; color:#ff0000; margin:0; padding:15px 2px;}.TM3{position:absolute; top:0; left:19px; display:none; border-radius:5px; margin:0; padding:0;}.TM3 li{float:none; width:80px; margin:0; font-size:14px; padding:3px 10px 2px 15px; cursor:pointer; color:#3a3a3a !important; background:rgba(255,255,0,0.8)}.TM3 li:hover{color:white !important; background:rgba(0,0,0,0.8);}.TM3 li:last-child{border-radius: 0 0 5px 5px;}.TM3 li:first-child{border-radius: 5px 5px 0 0;}.TM1:hover .TM3{display:block}`
  )

  /**
   * 以下值，不要修改！
   */
  GM_setValue('_jobListJson_boss', null)
  GM_setValue('_zp_token', null)
  GM_setValue('_zl_currentJobNumbers', null)
  // GM_setValue('_zl_joblist', null)
  GM_setValue('_zl_params_details', null)
  GM_setValue('_zl_params_cityIds', null)
  GM_setValue('_lp_params_resId', null)
  GM_setValue('_lp_params_jobCardList', null)
  GM_setValue('_lg_params', null)
  GM_setValue('_lg_resumeId', null)
  GM_setValue('_lg_positionIds', null)

  /**
   * 适配不同浏览器的匹配选择器
   */
  Element.prototype.matches = Element.prototype.matches || ``
  Element.prototype.matchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.mozMatchesSelector

  var curl = location.href
  // if (curl.indexOf('lagou.com') !== -1) {
  //   const originFetch = fetch
  //   if (GM_getValue('_lg_resumeId') === null) {
  //     unsafeWindow.fetch = (...arg) => {
  //       console.info('fetch arg', ...arg)
  //       if (
  //         arg[0].indexOf('https://gate.lagou.com/v1/entry/resume/info') !==
  //           -1 &&
  //         arg[0].indexOf('css') === -1
  //       ) {
  //         setTimeout(async () => {
  //           try {
  //             const response = await originFetch(...arg)
  //             const result_1 = await response.json()
  //             GM_sendMessage('_lg_resumeId', result_1)
  //             result_1 && result_1.content
  //               ? autoSendResume_lg_main(result_1.content.resumeId)
  //               : console.error('获取简历id失败！')
  //             console.log(result_1)
  //           } catch (error) {
  //             return console.error('error', error)
  //           }
  //         }, 1500)
  //       }
  //     }
  //   }
  // }

  if (GM_listValues().indexOf('allSettings') === -1) {
    GM_setValue('allSettings', {})
  }

  var curSettings = GM_getValue('allSettings')
  // 设置自动识别初始值
  if (curSettings['autoBlocking_enabled'] === undefined) {
    curSettings['autoBlocking_enabled'] = true
    GM_setValue('allSettings', curSettings)
  }

  // 设置开启提示初始值
  if (curSettings['showHint_enabled'] === undefined) {
    curSettings['showHint_enabled'] = true
    GM_setValue('allSettings', curSettings)
  }

  // 设置隐藏或提醒黑名单公司
  if (curSettings['isShowBlockingCompany'] === undefined) {
    curSettings['isShowBlockingCompany'] = true
    GM_setValue('allSettings', curSettings)
  }

  // 是否开启自动发送简历功能
  if (curSettings['autoSendResume_enabled'] === undefined) {
    curSettings['autoSendResume_enabled'] = false
    GM_setValue('allSettings', curSettings)
  }

  var autoBlocking_enabled_menuId
  var showHint_enabled_menuId
  var isShowBlockingCompany_menuId
  var autoSendResume_enabled_menuId
  // 刷新新菜单
  function registerMenu() {
    // 是否开启自动屏蔽黑名单功能
    GM_unregisterMenuCommand(autoBlocking_enabled_menuId)
    if (curSettings['autoBlocking_enabled']) {
      autoBlocking_enabled_menuId = GM_registerMenuCommand(
        '自动屏蔽当前页面公司 [状态: √ ]',
        function () {
          curSettings['autoBlocking_enabled'] = false
          GM_setValue('allSettings', curSettings)
          registerMenu()
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal(
              'success',
              '已关闭自动屏蔽当前页面公司功能，遇到新网站请自行手动添加规则！',
              3000
            )
        }
      )
    } else {
      autoBlocking_enabled_menuId = GM_registerMenuCommand(
        '自动屏蔽当前页面公司 [状态: X ]',
        function () {
          curSettings['autoBlocking_enabled'] = true
          GM_setValue('allSettings', curSettings)
          registerMenu()
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal(
              'success',
              '已开启自动屏蔽当前页面公司功能，请刷新网页！',
              3000
            )
        }
      )
    }

    // 各类提示
    GM_unregisterMenuCommand(showHint_enabled_menuId)
    if (curSettings['showHint_enabled']) {
      showHint_enabled_menuId = GM_registerMenuCommand(
        '提示信息 [状态: √ ]',
        function () {
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal(
              'success',
              '提示功能已关闭，再次开启前将无任何提示！',
              3000
            )
          curSettings['showHint_enabled'] = false
          GM_setValue('allSettings', curSettings)
          registerMenu()
        }
      )
    } else {
      showHint_enabled_menuId = GM_registerMenuCommand(
        '提示信息 [状态: X ]',
        function () {
          curSettings['showHint_enabled'] = true
          GM_setValue('allSettings', curSettings)
          registerMenu()
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal('success', '提示功能已开启！', 3000)
        }
      )
    }
    // 提示音
    GM_unregisterMenuCommand(isShowBlockingCompany_menuId)
    if (curSettings['isShowBlockingCompany']) {
      isShowBlockingCompany_menuId = GM_registerMenuCommand(
        '显示 [状态: √ ]',
        function () {
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal('success', '隐藏！', 3000)
          curSettings['isShowBlockingCompany'] = false
          GM_setValue('allSettings', curSettings)
          registerMenu()
        }
      )
    } else {
      isShowBlockingCompany_menuId = GM_registerMenuCommand(
        '隐藏 [状态: X ]',
        function () {
          curSettings['isShowBlockingCompany'] = true
          GM_setValue('allSettings', curSettings)
          registerMenu()
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal('success', '显示！', 3000)
        }
      )
    }
    // 自动投简历
    GM_unregisterMenuCommand(autoSendResume_enabled_menuId)
    if (curSettings['autoSendResume_enabled']) {
      autoSendResume_enabled_menuId = GM_registerMenuCommand(
        '自动投简历 [状态: √ ]',
        function () {
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal('success', '自动投简历功能已关闭！', 3000)
          curSettings['autoSendResume_enabled'] = false
          GM_setValue('allSettings', curSettings)
          registerMenu()
        }
      )
    } else {
      autoSendResume_enabled_menuId = GM_registerMenuCommand(
        '自动投简历 [状态: X ]',
        function () {
          curSettings['autoSendResume_enabled'] = true
          GM_setValue('allSettings', curSettings)
          registerMenu()
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal('success', '自动投简历功能已开启！', 3000)
        }
      )
    }
  }

  registerMenu()

  // var lg_isOpenGetCollectGif = true
  var curPageUrlArr_jobList = myUtils.findSthFromObjArr(
    curl,
    _config_jobListPageUrlArr,
    'url'
  )
  var curPageUrlArr_jobDetail = myUtils.findSthFromObjArr(
    curl,
    _config_jobDetailPageUrlArr,
    'url'
  )
  var curPageUrlArr_companyDetail = myUtils.findSthFromObjArr(
    curl,
    _config_companyDetailPageUrlArr,
    'url'
  )
  function addXMLRequestCallback(callback) {
    var oldSend, i, setRequestHeader

    if (XMLHttpRequest.callbacks) {
      XMLHttpRequest.callbacks.push(callback)
    } else {
      XMLHttpRequest.callbacks = [callback]

      oldSend = XMLHttpRequest.prototype.send

      XMLHttpRequest.prototype.send = function () {
        for (i = 0; i < XMLHttpRequest.callbacks.length; i++) {
          XMLHttpRequest.callbacks[i](this)
        }

        oldSend.apply(this, arguments)
      }
      setRequestHeader = XMLHttpRequest.prototype.setRequestHeader
      XMLHttpRequest.prototype.requestHeader = {}
      XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
        XMLHttpRequest.prototype.requestHeader[name] = value
        setRequestHeader.call(this, name, value)
      }
    }
  }

  if (GM_getValue('allSettings')['autoSendResume_enabled']) {
    console.log('success', '你已开启自动投简历！', 3000, 'center')
    if (
      hijacking_enabled &&
      (curPageUrlArr_jobList.length ||
        curPageUrlArr_jobDetail.length ||
        curPageUrlArr_companyDetail.length)
    ) {
      addXMLRequestCallback(function (xhr) {
        xhr.addEventListener('load', function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var fRes
            var resUrl = new URL(xhr.responseURL)
            if (resUrl.origin.indexOf('apic.liepin.com') !== -1) {
              if (
                resUrl.pathname ===
                '/api/com.liepin.usercx.pc.user.base-property'
              ) {
                if (isTimesExhausted_lp) {
                  console.log(errMsg_lp)
                  return false
                }
                fRes = JSON.parse(xhr.responseText)
                GM_sendMessage('_lp_params_resId', fRes.data.resId)
              } else if (
                resUrl.pathname ===
                '/api/com.liepin.searchfront4c.pc-search-job'
              ) {
                if (isTimesExhausted_lp) {
                  console.log(errMsg_lp)
                  return false
                }
                fRes = JSON.parse(xhr.responseText)
                GM_sendMessage(
                  '_lp_params_jobCardList',
                  fRes.data.data.jobCardList
                )
              }
            } else if (resUrl.origin.indexOf('zhipin.com') !== -1) {
              if (isTimesExhausted_bs) {
                console.log(errMsg_bs)
                fRes = JSON.parse(xhr.responseText)
                return false
              }
              if (resUrl.pathname === '/wapi/zpgeek/search/joblist.json') {
                fRes = JSON.parse(xhr.responseText)
                GM_sendMessage('_jobListJson_boss', fRes.zpData.jobList)
              } else if (resUrl.pathname === '/wapi/zppassport/get/zpToken') {
                fRes = JSON.parse(xhr.responseText)
                GM_sendMessage('_zp_token', fRes.zpData.token)
              }
            } else if (resUrl.origin.indexOf('fe-api.zhaopin.com') !== -1) {
              if (
                resUrl.pathname === '/c/i/user/detail'
                // || resUrl.pathname === '/c/i/city-page/user-city'
              ) {
                fRes = JSON.parse(xhr.responseText)
                GM_sendMessage('_zl_params_details', {
                  _resumeNumber: fRes.data.Resume.ResumeNumber,
                  _at: resUrl.searchParams.get('at'),
                  _rt: resUrl.searchParams.get('rt'),
                  _x_zp_client_id: resUrl.searchParams.get('x-zp-client-id'),
                  _x_zp_page_request_id: resUrl.searchParams.get(
                    'x-zp-page-request-id'
                  )
                })
              } else if (
                resUrl.pathname === '/c/i/jobs/keyword-company-search' &&
                resUrl.searchParams.get('filter_c_workCity') !== null
              ) {
                fRes = JSON.parse(xhr.responseText)
                GM_sendMessage(
                  '_zl_params_cityIds',
                  resUrl.searchParams.get('filter_c_workCity')
                )
              }
              // else if (
              //   resUrl.pathname === '/c/i/search/positions' &&
              //   resUrl.searchParams.get('c1K5tw0w6_') !== null &&
              //   resUrl.searchParams.get('MmEwMD') !== null
              // ) {
              //   // 用不上!
              //   // fRes = JSON.parse(xhr.responseText)
              //   // if (fRes.data && fRes.code === 200) {
              //   //   GM_sendMessage('_zl_joblist', fRes.data.list)
              //   // }
              // }
            }
            // else if (resUrl.origin.indexOf('lagou.com') !== -1) {
            //   var aesKey, curData
            //   // console.log(resUrl.href)
            //   if (
            //     resUrl.href.indexOf('lagou.com/jobs/companyAjax.json') !== -1
            //   ) {
            //     try {
            //       console.log(xhr.requestHeader)
            //       fRes = JSON.parse(xhr.responseText)
            //       aesKey = sessionStorage.getItem('aesKey')
            //       curData = fRes.data ? fRes.data : ''
            //       var _curData = getResponseData(curData, aesKey)
            //       var showId = _curData.content.showId
            //       console.log('showId：', showId)
            //       var lagouParams = {
            //         'X-K-HEADER': xhr.requestHeader['X-K-HEADER'],
            //         'X-SS-REQ-HEADER': xhr.requestHeader['X-SS-REQ-HEADER'],
            //         aesKey,
            //         showId,
            //         'x-anit-forge-code': xhr.requestHeader['x-anit-forge-code'],
            //         'x-anit-forge-token':
            //           xhr.requestHeader['x-anit-forge-token']
            //       }
            //       GM_sendMessage('_lg_params', lagouParams)
            //     } catch (error) {
            //       console.log('error: ', error)
            //     }
            //   } else if (
            //     resUrl.href.indexOf('https://sa.lagou.com/collect.gif') !== -1
            //   ) {
            //     if (!lg_isOpenGetCollectGif) return
            //     else {
            //       aesKey = sessionStorage.getItem('aesKey')
            //       var lgCollectGif = {
            //         data: getResponseData(
            //           JSON.parse(xhr.config.body).data,
            //           aesKey
            //         ),
            //         header: xhr.requestHeader
            //       }
            //       console.log('collect.gif', lgCollectGif)
            //       GM_sendMessage('_lg_collection_gif', lgCollectGif)
            //       lg_isOpenGetCollectGif = false
            //     }
            //   } else if (
            //     resUrl.href.indexOf('positions/mark_info?positionIds') !== -1
            //   ) {
            //     GM_sendMessage(
            //       '_lg_positionIds',
            //       resUrl.searchParams.get('positionIds').split(',')
            //     )
            //   }
            // }
          }
        })
      })
    }
  }
  console.log({ msg: '注入完成', time: new Date().valueOf(), data: new Date() })

  /**
   * 监听翻页-history模式
   */
  const _historyWrap = function (type) {
    const orig = history[type]
    const e = new Event(type)
    return function () {
      const rv = orig.apply(this, arguments)
      e.arguments = arguments
      window.dispatchEvent(e)
      return rv
    }
  }
  history.pushState = _historyWrap('pushState')
  history.replaceState = _historyWrap('replaceState')

  window.addEventListener('pushState', function (e) {
    console.log('pushState! ')
    var firstRunFlag = document.getElementById('uselessDiv')
    if (firstRunFlag === null) {
      console.info('检测到翻页!')
      if (GM_getValue('allSettings')['autoBlocking_enabled']) {
        var curPageUrlArr_jobList = myUtils.findSthFromObjArr(
          location.href,
          _config_jobListPageUrlArr,
          'url'
        )
        var curPageUrlArr_jobDetail = myUtils.findSthFromObjArr(
          location.href,
          _config_jobDetailPageUrlArr,
          'url'
        )
        var curPageUrlArr_companyDetail = myUtils.findSthFromObjArr(
          location.href,
          _config_companyDetailPageUrlArr,
          'url'
        )
        var pageType = null
        if (
          curPageUrlArr_jobDetail.length &&
          !curPageUrlArr_jobList.length &&
          !curPageUrlArr_companyDetail.length
        ) {
          return console.info('检测到当前可能为岗位详情页')
        } else if (
          curPageUrlArr_companyDetail.length &&
          !curPageUrlArr_jobDetail.length &&
          !curPageUrlArr_jobList.length
        ) {
          return console.info('检测到当前可能为公司详情页')
        } else if (
          curPageUrlArr_jobList.length &&
          !curPageUrlArr_jobDetail.length &&
          !curPageUrlArr_companyDetail.length
        ) {
          console.info('检测到当前页面可能为岗位列表页')
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal(
              'success',
              '检测到当前页面可能为岗位列表页',
              1500,
              'top-end'
            )
          pageType = 2
          const uselessDiv = document.createElement('div')
          uselessDiv.id = 'uselessDiv'
          uselessDiv.style.display = 'none'
          document.body.append(uselessDiv)
          setTimeout(() => {
            autoBlock_mainFn(
              false,
              myUtils.uniqueArr(_config_blackListArr),
              myUtils.uniqueArr(_config_whiteListArr),
              pageType,
              _config_jobListDomSelectorArr,
              curPageUrlArr_jobList[0].siteType,
              true,
              1500
            )
            setTimeout(() => {
              var sss = document.getElementById('uselessDiv')
              if (sss !== null) {
                document.body.removeChild(uselessDiv)
              }
            }, 5)
          }, 3000)
        } else {
          setTimeout(() => {
            var curPageUrlArr_jobList1 = myUtils.findSthFromObjArr(
              location.href,
              _config_jobListPageUrlArr,
              'url'
            )
            var curPageUrlArr_jobDetail1 = myUtils.findSthFromObjArr(
              location.href,
              _config_jobDetailPageUrlArr,
              'url'
            )
            var curPageUrlArr_companyDetail1 = myUtils.findSthFromObjArr(
              location.href,
              _config_companyDetailPageUrlArr,
              'url'
            )
            if (
              curPageUrlArr_jobList1.length &&
              curPageUrlArr_jobDetail1.length &&
              curPageUrlArr_companyDetail1.length
            ) {
              console.info('奇了个怪！快来给我反馈一下！')
              GM_getValue('allSettings')['showHint_enabled'] &&
                myToast.multipleNotControl(
                  'error',
                  '出错了！',
                  1500,
                  false,
                  '奇了个怪！快来给我反馈一下！',
                  () => {}
                )
            } else {
              console.log(
                '当前页面暂不支持！',
                location.origin + location.pathname
              )
            }
          }, 1500)
        }
      }
    } else {
      // console.log('firstRunFlag: ', firstRunFlag)
      firstRunFlag.remove()
    }
  })

  var tryAttemptTimes = 0
  /**
   * 判断当前网络是否通畅
   * @returns Boolean
   */
  async function judgeNetState() {
    const net_state = await myUtils.onLine()
    if (!net_state) {
      console.log('网络中断，请检查当前网络！已为你结束当前操作！')
      GM_getValue('allSettings')['showHint_enabled'] &&
        myToast.normal(
          'warning',
          '网络中断，请检查当前网络！已为你结束当前操作！',
          3000,
          'center'
        )
      if (tryAttemptTimes < 2) {
        setTimeout(async () => {
          await judgeNetState()
        }, 1500)
        tryAttemptTimes++
      } else {
        return false
      }
    }
    return true
  }

  /**
   * 监听值的改变的回调函数
   * @param {String} label 名字
   * @param {Function} callback 回调函数
   */
  function GM_onMessage(label, callback) {
    GM_addValueChangeListener(label, async function () {
      await callback.apply(undefined, arguments[2])
    })
  }
  /**
   * 设置值
   * @param {String} label 名字
   */
  function GM_sendMessage(label) {
    GM_setValue(label, Array.from(arguments).slice(1))
  }

  // var lgCollectGifData = {}
  // var lgCollectGifHeader = {}
  if (hijacking_enabled && curPageUrlArr_jobList.length) {
    if (curPageUrlArr_jobList[0].siteType === 1) {
      /**
       * 监听boss的岗位列表，用于发送简历
       */
      GM_onMessage('_jobListJson_boss', async function (src) {
        if (!GM_getValue('allSettings')['autoSendResume_enabled']) {
          return console.log('未开启自动投简历功能')
        }
        if (isTimesExhausted_bs) {
          console.log(errMsg_bs)
          return false
        }
        var boss = new Boss()
        console.log('[onMessage]', '_jobListJson_boss', '=>', src)
        var webSelector = _config_jobListDomSelectorArr.filter((item) => {
          if (item.siteType === 1) {
            return true
          }
        })
        for (let i = 0; i < webSelector.length; i++) {
          var target = webSelector[i].el
          var a = await myUtils.getElement(document, target, 1500)
          if (a !== null) {
            var firstRes = document.querySelectorAll(target)
            if (!firstRes || firstRes === null) {
              var _targetarr = target.split(' ')
              console.log('resume-getElementsByClassName')
              firstRes = document.getElementsByClassName(
                _targetarr[_targetarr.length - 1].replace('.', '')
              )
            }
            const [hitsCompanyArr] = await autoBlock_getCompanyNameArrFromPage(
              myUtils.uniqueArr(_config_blackListArr),
              myUtils.uniqueArr(_config_whiteListArr),
              document.querySelectorAll(webSelector[i].el),
              2,
              1
            )
            var newJobListJson_Boss = boss.removeBlackList(src, hitsCompanyArr)
            console.log('gm-newJobListJson_Boss: ', newJobListJson_Boss)
            debugger
            if (GM_getValue('_zp_token') !== null) {
              console.log('开始发起沟通-!NULLS')
              boss.zp_token = GM_getValue('_zp_token')[0]
              boss._jobListJson_boss = newJobListJson_Boss
              await boss.main()
            } else {
              console.log('没有获取到zp_token哦，尝试获取！')
              var zp_token = await boss.get_zp_token()
              zp_token && (await boss.main(zp_token, newJobListJson_Boss))
              !zp_token && console.error('你还未登录！')
            }
          }
        }
      })

      GM_onMessage('_zp_token', async (src) => {
        console.log('[onMessage]', '_zp_token', '=>', src)
      })
    } else if (curPageUrlArr_jobList[0].siteType === 2) {
      /**
       * 监听zl的城市id，用于发送简历
       */
      GM_onMessage('_zl_params_cityIds', async (src) => {
        if (!GM_getValue('allSettings')['autoSendResume_enabled']) {
          return console.log('未开启自动投简历功能')
        }
        console.log('[onMessage]', '_zl_params_cityIds', '=>', src)
        var zl = new ZhiLian(src)
        await zl.main(src)
      })

      GM_onMessage('_zl_params_details', async (src) => {
        console.log('[onMessage]', '_zl_params_details', '=>', src)
      })

      GM_onMessage('_zl_currentJobNumbers', async (src) => {
        console.log('[onMessage]', '_zl_currentJobNumbers', '=>', src)
      })

      // GM_onMessage('_zl_joblist', async (src) => {
      //   console.log('[onMessage]', '_zl_joblist', '=>', src)
      // })
    } else if (curPageUrlArr_jobList[0].siteType === 3) {
      /**
       * 监听lp的岗位列表，用于发送简历
       */
      GM_onMessage('_lp_params_jobCardList', async function (src) {
        if (!GM_getValue('allSettings')['autoSendResume_enabled']) {
          return console.log('未开启自动投简历功能')
        }
        if (isTimesExhausted_lp) {
          console.log(errMsg_lp)
          return false
        }
        var _resId
        var lp = new LiePin(src, _resId)
        var firstRunFlag = document.getElementById('uselessDiv1')
        if (firstRunFlag == null) {
          console.log('[onMessage]', '_lp_params_jobCardList', '=>', src)
          if (
            GM_getValue('_lp_params_resId') === null ||
            GM_getValue('_lp_params_resId') !==
              '您的帐号信息已过期，请退出帐号重新登录'
          ) {
            _resId = await lp.get_resId()
            if (_resId !== '您的帐号信息已过期，请退出帐号重新登录') {
              GM_setValue('_lp_params_resId', _resId)
            }
          } else {
            _resId = GM_getValue('_lp_params_resId')
          }

          const uselessDiv1 = document.createElement('div')
          uselessDiv1.id = 'uselessDiv1'
          uselessDiv1.style.display = 'none'
          document.body.append(uselessDiv1)
          setTimeout(async () => {
            lp.resId = _resId
            GM_getValue('_lp_params_jobCardList') !== null && (await lp.main())
            setTimeout(() => {
              var temperUseless = document.getElementById('uselessDiv1')
              if (temperUseless !== null) {
                uselessDiv1.parentNode.removeChild(uselessDiv1)
              }
            }, 5)
          }, 3000)
        } else {
          firstRunFlag.remove()
        }
      })

      GM_onMessage('_lp_params_resId', async (src) => {
        console.log('[onMessage]', '_lp_params_resId', '=>', src)
      })
    } else if (curPageUrlArr_jobList[0].siteType === 4) {
      GM_onMessage('_lg_params', async (src) => {
        console.log('[onMessage]', '_lg_params', '=>', src)
        if (src !== undefined && src) {
          console.log('----------------------')
          console.log(src)
          console.log(src['X-K-HEADER'])
          console.log(src['X-SS-REQ-HEADER'])
          console.log(src['aesKey'])
          console.log(src['user_trace_token'])
          console.log('-----------------------')
        }
      })

      // GM_onMessage('_lg_resumeId', async (src) => {
      //   console.log('[onMessage]', '_lg_resumeId', '=>', src)
      // })
      // GM_onMessage('_lg_positionIds', async (src) => {
      //   console.log('[onMessage]', '_lg_positionIds', '=>', src)
      // })
      // GM_onMessage('_lg_collection_gif', async (src) => {
      //   if (lg_isOpenGetCollectGif) {
      //     console.log('[onMessage]', '_lg_collection_gif', '=>', src)
      //     lgCollectGifHeader = src.header
      //     lgCollectGifData = JSON.parse(src.data.data)
      //     console.log('lgCollectGifData: ', lgCollectGifData)
      //     lg_isOpenGetCollectGif = false
      //   }
      // })
    }
  }

  // function autoSendResume_lg_getCodeAndTokenFromJobDetailPage(jobId) {
  //   return new Promise((resolve, reject) => {
  //     // axios({
  //     //   method: 'GET',
  //     //   url: `https://www.lagou.com/wn/jobs/${jobId}.html`,
  //     //   headers: {
  //     //     'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
  //     // 'User-Agent':
  //     //       userAgents[parseInt(Math.random() * userAgents.length)],
  //     //     'Cache-Control': 'no-cache',
  //     //     Pragma: 'no-cache',
  //     //     responseType: 'json'
  //     //   },
  //     //   withCredentials: true
  //     // })
  //     //   .then(function (response) {
  //     //     console.log('----------------------')
  //     //     console.log(response.status, response.statusText, response.headers)
  //     //     console.log('_____________________')
  //     //     var data = response.data
  //     //     console.log(data)
  //     //     var _data = extractJSONfromHTML(data)
  //     //     var res, submitToken, submitCode
  //     //     try {
  //     //       res = JSON.parse(_data)
  //     //       if (res === null) return reject('被反爬了！', data)
  //     //       if (res.props.pageProps.jobDetailInfo.isPageError) {
  //     //         return reject('亲，你来晚了，该信息已经被删除鸟~')
  //     //       }
  //     //       submitCode = res.props.tokenData.submitCode
  //     //       submitToken = res.props.tokenData.submitToken
  //     //       console.log('[submitCode, submitToken]: ', [
  //     //         submitCode,
  //     //         submitToken
  //     //       ])
  //     //       submitCode !== '' && submitToken !== ''
  //     //         ? resolve([submitCode, submitToken])
  //     //         : reject('没获取到')
  //     //     } catch (error) {
  //     //       console.log('error: ', error)
  //     //       reject('e-error: ', error)
  //     //     }
  //     //     console.log('----------------------')
  //     //   })
  //     //   .catch(function (error) {
  //     //     reject('a-error: ', error)
  //     //   })
  //     GM_xmlhttpRequest({
  //       method: 'POST',
  //       url: `https://www.lagou.com/wn/jobs/${jobId}.html`,
  //       headers: {
  //         'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
  //         'Cache-Control': 'no-cache',
  //         'User-Agent': userAgents[parseInt(Math.random() * userAgents.length)],
  //         Referer: location.href,
  //         responseType: 'json'
  //       },
  //       Cookie: document.cookie,
  //       onload: async function (result) {
  //         if (result.status === 200) {
  //           console.log('_____________________')
  //           var data = result.responseText
  //           console.log('result.data: ', data)
  //           var _data = autoSendResume_lg_extractJSONfromHTML(data)
  //           var res, submitToken, submitCode
  //           try {
  //             res = JSON.parse(_data)
  //             console.log('get-res: ', res)
  //             if (res === null) {
  //               reject('被反爬了！', data)
  //             } else if (
  //               res !== '{}' &&
  //               res.props.pageProps.jobDetailInfo.isPageError
  //             ) {
  //               return reject('亲，你来晚了，该信息已经被删除鸟~')
  //             } else {
  //               submitCode = res.props.tokenData.submitCode
  //               submitToken = res.props.tokenData.submitToken
  //               console.log('{submitCode, submitToken}: ', {
  //                 submitCode,
  //                 submitToken
  //               })
  //               submitCode !== '' && submitToken !== ''
  //                 ? resolve({ submitCode, submitToken })
  //                 : reject('没获取到')
  //             }
  //           } catch (error) {
  //             console.log('error: ', error)
  //             reject('e-error: ', error)
  //           }
  //         } else {
  //           console.log('失败')
  //           reject(res)
  //         }
  //       },
  //       onerror: function (error) {
  //         reject('a-error: ', error)
  //       }
  //     })
  //   })
  // }

  // function autoSendResume_lg_postCollectGif_lg(header, requestData) {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       GM_xmlhttpRequest({
  //         method: 'POST',
  //         url: `https://sa.lagou.com/collect.gif`,
  //         headers: header,
  //         data: { data: requestData },
  //         Cookie: document.cookie,
  //         onload: function (result) {
  //           if (result.status === 200) {
  //             resolve('完成！', result)
  //           } else {
  //             resolve('预检！', result)
  //           }
  //         },
  //         onerror: function (error) {
  //           console.log('postCollectGif_lg-onerror: ', error)
  //           reject('postCollectGif_lg-onerror: ', error)
  //         }
  //       })
  //     } catch (e) {
  //       console.log('postCollectGif_lg-try-error: ', e)
  //       reject('postCollectGif_lg-try-error: ', e)
  //     }
  //   })
  // }

  // function autoSendResume_lg_extractJSONfromHTML(to) {
  //   var arr
  //   var reg = new RegExp(
  //     '<script id="__NEXT_DATA__" type="application/json">(.*?)</script>'
  //   )
  //   if ((arr = to.match(reg))) {
  //     console.log(arr)
  //     return arr[1]
  //   } else {
  //     return null
  //   }
  // }

  /**
   * 第一次运行
   * @param {Array} blackListArr 黑名单列表
   * @param {Array} whiteListArr 白名单列表
   */
  async function firstRun(blackListArr, whiteListArr) {
    if (GM_getValue('allSettings')['autoBlocking_enabled']) {
      var pageType = null
      var lggouadditon
      if (curPageUrlArr_jobList.length && curPageUrlArr_jobDetail.length) {
        lggouadditon = curPageUrlArr_jobList.length
      } else {
        lggouadditon = !curPageUrlArr_jobList.length
      }
      if (
        curPageUrlArr_jobDetail.length &&
        lggouadditon &&
        !curPageUrlArr_companyDetail.length
      ) {
        console.info('检测到当前可能为岗位详情页')
        GM_getValue('allSettings')['showHint_enabled'] &&
          myToast.normal(
            'success',
            '检测到当前可能为岗位详情页',
            1500,
            'top-end'
          )
        pageType = 1
        autoBlock_mainFn(
          true,
          blackListArr,
          whiteListArr,
          pageType,
          _config_detailListDomSelectorArr,
          curPageUrlArr_jobDetail[0].siteType,
          true,
          2000
        )
      } else if (
        curPageUrlArr_companyDetail.length &&
        !curPageUrlArr_jobDetail.length &&
        !curPageUrlArr_jobList.length
      ) {
        console.info('检测到当前可能为公司详情页')
        GM_getValue('allSettings')['showHint_enabled'] &&
          myToast.normal(
            'success',
            '检测到当前可能为公司详情页',
            1500,
            'top-end'
          )
        pageType = 1
        autoBlock_mainFn(
          true,
          blackListArr,
          whiteListArr,
          pageType,
          _config_detailListDomSelectorArr,
          curPageUrlArr_companyDetail[0].siteType,
          true,
          2000
        )
      } else if (
        curPageUrlArr_jobList.length &&
        !curPageUrlArr_jobDetail.length &&
        !curPageUrlArr_companyDetail.length
      ) {
        console.info('检测到当前页面可能为岗位列表页')
        GM_getValue('allSettings')['showHint_enabled'] &&
          myToast.normal(
            'success',
            '检测到当前页面可能为岗位列表页',
            1500,
            'top-end'
          )
        pageType = 2
        setTimeout(
          () => {
            autoBlock_mainFn(
              true,
              blackListArr,
              whiteListArr,
              pageType,
              _config_jobListDomSelectorArr,
              curPageUrlArr_jobList[0].siteType,
              true,
              2000
            )
          },
          curPageUrlArr_jobList[0].siteType !== 4 ? 1500 : 4500
        )
      } else {
        setTimeout(() => {
          var curPageUrlArr_jobList1 = myUtils.findSthFromObjArr(
            location.href,
            _config_jobListPageUrlArr,
            'url'
          )
          var curPageUrlArr_jobDetail1 = myUtils.findSthFromObjArr(
            location.href,
            _config_jobDetailPageUrlArr,
            'url'
          )
          var curPageUrlArr_companyDetail1 = myUtils.findSthFromObjArr(
            location.href,
            _config_companyDetailPageUrlArr,
            'url'
          )
          if (
            curPageUrlArr_jobList1.length &&
            curPageUrlArr_jobDetail1.length &&
            curPageUrlArr_companyDetail1.length
          ) {
            console.info('奇了个怪！快来给我反馈一下！')
            GM_getValue('allSettings')['showHint_enabled'] &&
              myToast.multipleNotControl(
                'error',
                '出错了！',
                1500,
                false,
                '奇了个怪！快来给我反馈一下！',
                () => {}
              )
          } else {
            console.log(
              '当前页面暂不支持！',
              location.origin + location.pathname
            )
          }
        }, 1500)
      }
    }
  }

  /**
   *
   * @param {Array} blackListArr 黑名单列表
   * @param {Array} whiteListArr 白名单列表
   * @param {Node} webSelector 网页dom选择器 querySelectAll
   * @param {Number} pageType 页面类型 type:1 公司信息页、招聘详情页 type:2 招聘列表
   * @param {Number} siteType 站点类型 1.boss 2.智联 3.猎聘 4.拉勾
   * @returns {Array} [hitsCompanyArr,allCompanyArr,siteType,notHitsCompanyArr]数组 命中的黑名单公司数组、从页面中读取到的公司名字数组，站点类型，未命中的数组
   */
  function autoBlock_getCompanyNameArrFromPage(
    blackListArr,
    whiteListArr,
    webSelector,
    pageType,
    siteType
  ) {
    return new Promise((resolve, reject) => {
      try {
        var allCompanyArr
        if (
          typeof blackListArr === 'object' &&
          typeof whiteListArr === 'object' &&
          typeof webSelector === 'object' &&
          typeof pageType === 'number' &&
          typeof siteType === 'number' &&
          webSelector.length > 0
        ) {
          allCompanyArr = [].slice.call(webSelector, 0)

          const allCompanyNameArr = allCompanyArr
            ? allCompanyArr.map(function (el, index) {
                var txt = el.innerText
                if (
                  siteType === 2 &&
                  webSelector[0].parentNode.className === 'base-info__title'
                ) {
                  txt = txt.split('\n')[0]
                }
                return [txt, index, webSelector[index]]
              })
            : []
          // console.log('allCompanyNameArr: ', allCompanyNameArr)

          var hitsCompanyArr = []
          var pattern = null

          const newBlackListArr = blackListArr.filter((blackCompany) => {
            return !whiteListArr.find((whiteCompany) => {
              return (
                whiteCompany.indexOf(blackCompany) !== -1 ||
                whiteCompany.match(new RegExp(blackCompany, 'ig')) ||
                whiteCompany === blackCompany
              )
            })
          })

          for (var index = 0; index < allCompanyNameArr.length; index++) {
            for (var i = 0; i < newBlackListArr.length; i++) {
              if (allCompanyNameArr[index][0] === newBlackListArr[i]) {
                pattern = 1
              } else if (
                allCompanyNameArr[index][0].indexOf(newBlackListArr[i]) !==
                  -1 ||
                allCompanyNameArr[index][0].match(
                  new RegExp(newBlackListArr[i], 'ig')
                )
              ) {
                pattern = 2
              } else {
                pattern = null
              }

              pattern &&
                hitsCompanyArr.unshift({
                  bName: newBlackListArr[i],
                  oName: pattern === 2 ? allCompanyNameArr[index][0] : null,
                  documentIndex: allCompanyNameArr[index][1],
                  elementNode: allCompanyNameArr[index][2],
                  pattern
                })
            }
          }

          const notHitsCompanyArr = allCompanyNameArr.filter((item) => {
            return !hitsCompanyArr.find((blackCompany) => {
              return (
                blackCompany.elementNode === item[2] &&
                blackCompany.documentIndex === item[1]
              )
            })
          })

          // console.log(
          //   '[hitsCompanyArr, allCompanyArr, siteType,notHitsCompanyArr]: ',
          //   [hitsCompanyArr, allCompanyArr, siteType, notHitsCompanyArr]
          // )
          resolve([hitsCompanyArr, allCompanyArr, siteType, notHitsCompanyArr])
        } else {
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal('warning', '暂不支持当前页面！', 3000)
        }
      } catch (e) {
        if (e.message.indexOf('The provided selector is empty.') !== -1) {
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal('warning', '暂不支持当前页面！', 3000)
        }
        reject(e.message)
      }
    })
  }

  /**
   * 处理返回的结果
   * @param {Array} hitsCompanyArr 结果数组
   * @param {Array} allCompanyArr 从页面中读取到的公司名字数组
   * @param {Number} pageType 页面类型 type:1 公司信息页、招聘详情页 type:2 招聘列表
   * @param {Number} siteType 站点类型 1.boss 2.智联 3.猎聘 4.拉勾
   */
  async function autoBlock_handleHitsCompanyArr(
    hitsCompanyArr,
    allCompanyArr,
    pageType,
    siteType
  ) {
    if (typeof hitsCompanyArr !== 'object' || typeof pageType !== 'number') {
      return false
    }
    if (hitsCompanyArr && hitsCompanyArr.length !== 0) {
      if (pageType === 1) {
        Swal.fire({
          title: '发现黑名单公司!!',
          type: 'error',
          html: `<span>公司名：<span style="color:red">${
            hitsCompanyArr[0].bName
          }</span></span><br/>${
            hitsCompanyArr[0].oName
              ? `<span>黑名单中匹配到的公司名：<span style="color:green">${hitsCompanyArr[0].oName}</span></span>`
              : ''
          }<br/><span style="color:#6c757d;text-align: center">------------------------------------------<br/><span style="color:#6c757d">因为该公司在你填写的黑名单公司列表哦！<br/>如果有误判可以移除该公司！</span>`,
          cancelButtonText: '收到',
          confirmButtonText: '移除该公司',
          showCancelButton: true,
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        }).then((result) => {})
      } else if (pageType === 2) {
        var tempString = ''
        for (const [index, item] of hitsCompanyArr.entries()) {
          tempString += `第${+(index + 1)}家：${
            item.oName ? `${item.oName} => ` : ''
          }${item.bName}\n`
          await autoBlock_switchBlackMode(
            GM_getValue('allSettings')['isShowBlockingCompany'],
            allCompanyArr[item.documentIndex],
            item.pattern,
            siteType
          )
        }
        GM_getValue('allSettings')['showHint_enabled'] &&
          myToast.normal(
            'info',
            `匹配到 ${
              hitsCompanyArr.length
            } 条黑名单公司！分别是：\n${tempString.substring(
              0,
              tempString.length - 1
            )}`,
            50000
          )
        console.info(
          'info',
          `\n匹配到 ${
            hitsCompanyArr.length
          } 条黑名单公司！分别是：\n${tempString.substring(
            0,
            tempString.length - 1
          )}`
        )
      }
    } else {
      GM_getValue('allSettings')['showHint_enabled'] &&
        myToast.normal('success', '\n恭喜你！当前页面没有黑名单公司！', 3000)
    }
    return true
  }
  /**
   *
   * @param {true} isShow 是否显示
   * @param {Node} target 要操作的dom节点
   * @param {Number} pattern 匹配模式 1.完全匹配 2.模糊匹配
   * @param {Number} siteType 站点类型 1.boss 2.智联 3.猎聘 4.拉勾
   */
  async function autoBlock_switchBlackMode(isShow, target, pattern, siteType) {
    if (!isShow) {
      if (siteType === 3) {
        target.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
      } else {
        target.parentNode.parentNode.parentNode.parentNode.remove()
      }
    } else {
      var bgColor = pattern === 1 ? 'red' : pattern === 2 ? 'orange' : ''

      switch (siteType) {
        case 1:
          if (location.href.indexOf('m.zhipin.com') !== -1) {
            target.parentNode.parentNode.parentNode.style.backgroundColor =
              bgColor
          }
          target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
            target.parentNode.parentNode.parentNode.nextElementSibling.style.background =
              bgColor
          break
        case 2:
          target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
            target.parentNode.parentNode.parentNode.nextElementSibling.style.background =
              bgColor
          break
        case 3:
          if (location.href.indexOf('liepin.com/city') !== -1) {
            target.parentNode.parentNode.parentNode.parentNode.style.border = `10px solid ${bgColor}`
          } else {
            target.parentNode.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
              bgColor
          }
          break
        case 4:
          if (location.href.indexOf('wn/jobs')) {
            target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
              target.parentNode.parentNode.nextElementSibling.style.backgroundColor =
                bgColor
          } else {
            target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
              target.parentNode.parentNode.parentNode.nextElementSibling.style.background =
                bgColor
          }
          break
        default:
          console.error('操作样式出问题啦！')
          break
      }
    }
    return 'end'
  }

  /**
   * 屏蔽功能的主函数
   * @param {Boolean} isfirstRun 是否是第一次运行
   * @param {Array} blackListArr 黑名单列表
   * @param {Array} whiteListArr 白名单列表
   * @param {Number} pageType 页面类型 type:1 公司信息页、招聘详情页 type:2 招聘列表
   * @param {Node} listDomSelectorArr 用于判断网站的dom元素类名
   * @param {Number} delay 延迟获取的毫秒数
   */
  async function autoBlock_mainFn(
    isfirstRun,
    blackListArr,
    whiteListArr,
    pageType,
    listDomSelectorArr,
    curSiteType,
    isHandleHits,
    delay = 1000
  ) {
    var curNetState = await judgeNetState()
    if (!curNetState) return false
    var res = []
    for (let i = 0; i < listDomSelectorArr.length; i++) {
      if (curSiteType === listDomSelectorArr[i].siteType) {
        const webSelector = listDomSelectorArr[i].el
        const b = await myUtils.getElement(document, webSelector, delay)
        console.log('第一条招聘信息的dom元素节点: ', b)
        if (b !== null) {
          const [hitsCompanyArr, allCompanyArr] =
            await autoBlock_getCompanyNameArrFromPage(
              myUtils.uniqueArr(blackListArr),
              myUtils.uniqueArr(whiteListArr),
              document.querySelectorAll(webSelector),
              pageType,
              curSiteType
            )
          isHandleHits &&
            (await autoBlock_handleHitsCompanyArr(
              hitsCompanyArr,
              allCompanyArr,
              pageType,
              curSiteType
            ))
          break
        } else {
          res.push(b)
        }
      }
      if (i === listDomSelectorArr.length - 1 && res[res.length - 1]) {
        console.log(res)
      }
    }
    if (
      isfirstRun &&
      res.length === listDomSelectorArr.length &&
      res[res.length - 1] === null
    ) {
      GM_getValue('allSettings')['showHint_enabled'] &&
        myToast.normal('warning', '暂不支持当前页面！', 3000, 'top-end')
    }
  }

  class Boss {
    constructor(token, jobJson) {
      this.zp_token = token
      this._jobListJson_boss = jobJson
    }
    /**
     * 发送简历-boss-主函数
     * @param {String} token boss身份验证zp_token
     * @param {Array} jobListJson 岗位列表数组
     * @returns
     */
    async main(token = this.zp_token, jobListJson = this._jobListJson_boss) {
      debugger
      try {
        if (isTimesExhausted_bs) {
          console.log(errMsg_bs)
          GM_getValue('allSettings')['showHint_enabled'] &&
            myToast.normal('error', errMsg_bs, 5000, 'center')
          return false
        }
        var newArr = jobListJson.map((item, index) => {
          return Object.assign(
            {},
            {
              jobId: item.encryptJobId,
              securityId: item.securityId,
              lid: item.lid,
              brandName: item.brandName, // 公司名
              brandIndustry: item.brandIndustry, // 公司所属行业
              brandScaleName: item.brandScaleName, // 公司规模
              brandStageName: item.brandStageName // 公司阶段
            }
          )
        })
        var curNetState = await judgeNetState()
        if (!curNetState) return false
        console.log(`总共要和${newArr.length}家公司发起沟通`)
        var err, rs, templateText
        var errorTimes = 0
        var successTimes = 0
        for (let i = 0; i < newArr.length; i++) {
          var {
            securityId,
            jobId,
            lid,
            brandName,
            brandIndustry,
            brandScaleName,
            brandStageName
          } = newArr[i]
          if (brandIndustry && brandScaleName && brandStageName) {
            templateText = `(${brandIndustry}/${brandScaleName}/${brandStageName})`
          } else if (!brandScaleName && brandStageName) {
            templateText = `(${brandIndustry}/${brandStageName})`
          } else if (brandScaleName && !brandStageName) {
            templateText = `(${brandIndustry}/${brandScaleName})`
          } else {
            templateText = ''
          }
          ;[err, rs] = await myUtils.awaitWrap(
            this.try2Contact(securityId, jobId, lid, token)
          )
          if (rs) {
            console.log(
              '[success]：',
              `第${+(i + 1)}家\n${brandName}${templateText}\n问候语：${rs}`
            )
            successTimes++
          }
          if (err) {
            console.log(
              '[error]：',
              `第${+(i + 1)}家\n${brandName}${templateText}\n${err[0]} --- ${
                err[1]
              }`
            )
            errorTimes++

            if (err[1] === '今日沟通人数已达上限，请明天再试') {
              errMsg_bs = '今日沟通人数已达上限，请明天再试'
              console.log('已达上限啦，为你退出本次脚本！等明天再来吧')
              isTimesExhausted_bs = true
              break
            }
          }
          await myUtils.randomSleep(3, 6)
        }
        console.log(
          `与当前页面的全部公司结束沟通！\n成功：${successTimes}家；失败：${errorTimes}家`
        )
      } catch (error) {
        console.error(error.message)
      }
    }

    removeBlackList(arr, drr) {
      return arr.filter((item) => {
        var target = item['brandName']
        return !drr.find((element) => {
          var name = element['oName'] || element['bName']
          return (
            name.indexOf(target) !== -1 ||
            name.match(new RegExp(target, 'ig')) ||
            name === target
          )
        })
      })
    }

    /**
     * 获取boss的zp_token
     * @returns zp_token
     */
    get_zp_token() {
      return new Promise((resolve, reject) => {
        try {
          axios
            .get('https://www.zhipin.com/wapi/zppassport/get/zpToken')
            .then((result) => {
              var res = result.data
              if (res.zpData) {
                resolve(res.zpData.token)
              } else {
                reject('error?:', res)
              }
            })
        } catch (error) {
          console.log('error: ', error.message)
        }
      })
    }

    /**
     * 发起沟通-boss，因为boss不能直接发简历
     * @param {String} securityId boss身份验证securityId
     * @param {String} jobId jobid
     * @param {String} lid boss身份验证lid
     * @param {String} zp_token boss身份验证zp_token
     * @returns
     */
    try2Contact(securityId, jobId, lid, zp_token = this.zp_token) {
      return new Promise((resolve, reject) => {
        if (securityId) return resolve(jobId)
        try {
          var config = {
            method: 'post',
            url: `https://www.zhipin.com/wapi/zpgeek/friend/add.json?securityId=${securityId}&jobId=${jobId}&lid=${lid}`,
            headers: {
              zp_token: zp_token,
              'User-Agent':
                userAgents[parseInt(Math.random() * userAgents.length)]
            }
          }
          axios(config)
            .then(function (result) {
              try {
                var res = result.data
                if (res && res.zpData && res.zpData !== {}) {
                  if (res.zpData.greeting) {
                    resolve(res.zpData.greeting)
                  } else if (res.zpData.showGreeting) {
                    resolve('已发起沟通过！')
                  } else if (res.zpData.bizData) {
                    reject([
                      res.zpData.bizData.chatRemindDialog.title,
                      res.zpData.bizData.chatRemindDialog.content
                    ])
                  }
                } else {
                  reject('api失效了')
                }
              } catch (error) {
                console.log('error: ', error)
              }
            })
            .catch(function (error) {
              console.log(error)
              reject('error: ', error)
            })
        } catch (error) {
          console.log('error: ', error)
        }
      })
    }
  }

  class ZhiLian {
    constructor(cityId) {
      this.cityId = cityId
    }
    /**
     * 发送简历-zl-提取页面中所有岗位的jobNumbers
     * @param {String} str 岗位招聘信息的链接
     * @returns jobNumbers
     */
    extract_jobNumbers(str) {
      var nurl = new URL(str)
      var reg = /\/([^&#]+)\.htm/
      var query = nurl.pathname.match(reg)
      return query[1] || null
    }
    /**
     * 发送简历-zl-主函数
     * @param {Number} cityId 岗位所在城市的代码，其实也是所在地区的代码
     */
    async main(cityId = this.cityId) {
      var _self = this
      try {
        const allHrefNodeArr = document.querySelectorAll(
          'a.joblist-box__iteminfo'
        )
        var allHrefArr = [].slice.call(allHrefNodeArr, 0)
        const jobNumbersArr = allHrefArr
          ? allHrefArr.map(function (el, index) {
              var txt = _self.extract_jobNumbers(el.href)
              return { jobNumber: txt, index: index }
            })
          : []
        var webSelector = _config_jobListDomSelectorArr.filter((item) => {
          if (item.siteType === 2) {
            return true
          }
        })
        for (let i = 0; i < webSelector.length; i++) {
          var target = webSelector[i].el
          var a = await myUtils.getElement(document, target, 1500)
          if (a !== null) {
            var firstRes = document.querySelectorAll(target)
            if (!firstRes || firstRes === null) {
              var _targetarr = target.split(' ')
              console.log('resume-getElementsByClassName')
              firstRes = document.getElementsByClassName(
                _targetarr[_targetarr.length - 1].replace('.', '')
              )
            }
            const rr = await autoBlock_getCompanyNameArrFromPage(
              myUtils.uniqueArr(_config_blackListArr),
              myUtils.uniqueArr(_config_whiteListArr),
              firstRes,
              2,
              3
            )
            var _jobNumbersArr = jobNumbersArr.filter((item) => {
              return !rr[0].find((comp) => {
                var target = this.extract_jobNumbers(
                  comp['elementNode'].parentNode.parentNode.parentNode.href
                )
                return (
                  target === item.jobNumber &&
                  comp['documentIndex'] === item.index
                )
              })
            })
            console.log('_jobNumbersArr: ', _jobNumbersArr)
            var jobNumbers = _jobNumbersArr
              ? _jobNumbersArr.map(function (el) {
                  return el.jobNumber
                })
              : []
          }
          var cityIds = Array(jobNumbers.length).fill(cityId)
          var curNetState = await judgeNetState()
          if (!curNetState) return false
          await myUtils.randomSleep(3, 6)
          var obj = {}
          try {
            obj = GM_getValue('_zl_params_details')[0]
            if (JSON.stringify(obj) === '{}' || obj === null) {
              return console.error('你还未登录！')
            }
            const [err, rs] = await myUtils.awaitWrap(
              this.send(
                jobNumbers,
                cityIds,
                obj['_resumeNumber'],
                obj['_at'],
                obj['_rt']
              )
            )
            console.log('rs: ', rs)
            console.log('err: ', err)
            if (rs) {
              console.log(
                `已向当前页面的全部公司发送完简历！\n共尝试投了${jobNumbers.length}家！`
              )
            }
          } catch (error) {
            console.log('error: ', error, '你还未登录！')
          }
        }
      } catch (error) {
        console.log('error: ', error)
      }
    }

    /**
     * 发送简历-zl
     * @param {Array} jobNumbers 所有岗位的jobNumbers数组
     * @param {Array} cityIds 岗位所在城市的数组
     * @param {String} resumeNumber 简历id
     * @param {String} at zl的身份验证at
     * @param {String} rt zl的身份验证rt
     * @returns
     */
    send(jobNumbers, cityIds = this.cityId, resumeNumber, at, rt) {
      return new Promise((resolve, reject) => {
        if (jobNumbers) return resolve([jobNumbers, cityIds])
        try {
          if (resumeNumber === null || !resumeNumber) {
            return reject('你还未登录zl！')
          }
          console.log('1.5秒后将开始自动投！')
          setTimeout(() => {
            var config = {
              url: `https://fe-api.zhaopin.com/c/pc/alan/jobs/application`,
              method: 'POST',
              headers: {
                'User-Agent':
                  userAgents[parseInt(Math.random() * userAgents.length)]
              },
              data: JSON.stringify({
                jobNumbers,
                cityIds,
                resumeNumber: String(resumeNumber),
                at: String(at),
                rt: String(rt),
                language: 3,
                batched: true,
                inviteCode: '',
                ignoreIntention: 1,
                ignoreBlackType: '',
                deliveryChannelType: 1,
                pageCode: 0,
                jobSource: 'RECOMMENDATION'
              })
            }
            axios(config)
              .then((result) => {
                try {
                  var res = result.data
                  !res.error ? resolve(res.message) : reject(res.message)
                } catch (e) {
                  console.error('[autoSendResume_zl_send]', e.message)
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          }, 1500)
        } catch (error) {
          console.log('error: ', error)
        }
      })
    }
  }

  class LiePin {
    constructor(originJobList, resId) {
      this.originJobList = originJobList
      this.resId = resId
    }
    /**
     * 发送简历-lp-提取工作列表（关于公司信息）
     * @param {Array} originJobList 工作列表 jobKind、jobId、jobIndex
     * @param {Boolean} isSaveCompanyInfo  是否要保存公司信息
     * @returns
     */
    extract_JobList(originJobList, isSaveCompanyInfo = false) {
      return originJobList
        ? originJobList.map(function (el, index) {
            var job = el.job
            var comp = el.comp
            var obj = {
              jobIndex: String(+(index % 10)),
              jobId: String(job.jobId),
              jobKind: job.jobKind !== 2 ? String(2) : String(job.jobKind),
              info: `第${+(index + 1)}家公司\n${job.title}【${job.dq}】${
                job.salary
              }\n${comp.compName} | ${comp.compIndustry} ${
                comp.compStage ? comp.compStage : ''
              } ${comp.compScale}`
            }
            if (!isSaveCompanyInfo) {
              delete obj.info
            }
            return obj
          })
        : []
    }

    /**
     * 发送简历-lp-主函数
     * @param {Array} originJobList 工作列表 jobKind、jobId、jobIndex
     * @param {String} resId 简历id
     * @returns
     */
    async main(originJobList = this.originJobList, resId = this.resId) {
      if (isTimesExhausted_lp) {
        console.log(errMsg_lp)
        GM_getValue('allSettings')['showHint_enabled'] &&
          myToast.normal('error', errMsg_lp, 5000, 'center')
        return false
      }
      if (!resId || resId === undefined || resId === null) {
        resId = await this.get_resId()
      }
      var webSelector = _config_jobListDomSelectorArr.filter((item) => {
        if (item.siteType === 3) {
          return true
        }
      })
      for (let i = 0; i < webSelector.length; i++) {
        var target = webSelector[i].el
        var a = await myUtils.getElement(document, target, 1500)
        if (a !== null) {
          var firstRes = document.querySelectorAll(target)
          if (!firstRes || firstRes === null) {
            var _targetarr = target.split(' ')
            console.log('resume-getElementsByClassName')
            firstRes = document.getElementsByClassName(
              _targetarr[_targetarr.length - 1].replace('.', '')
            )
          }
          const rr = await autoBlock_getCompanyNameArrFromPage(
            myUtils.uniqueArr(_config_blackListArr),
            myUtils.uniqueArr(_config_whiteListArr),
            firstRes,
            2,
            3
          )
          var _originJobList = originJobList.filter((item) => {
            return !rr[0].find((comp) => {
              return (
                comp['oName'] === item.comp.compName ||
                comp['bName'].indexOf(item.comp.compName) !== -1 ||
                comp['bName'].match(new RegExp(item.comp.compName, 'ig')) ||
                comp['bName'] === item.comp.compName
              )
            })
          })
          var newJobList = myUtils.sliceArrLikeBeEQLengthGroup(
            this.extract_JobList(_originJobList, false),
            10
          )

          var _newJobList = myUtils.sliceArrLikeBeEQLengthGroup(
            this.extract_JobList(_originJobList, true),
            10
          )

          var curNetState = await judgeNetState()
          if (!curNetState) return false
          var err, rs
          var errorTimes = 0
          var successTimes = 0

          for (let i = 0; i < newJobList.length; i++) {
            ;[err, rs] = await myUtils.awaitWrap(
              this.send(resId, newJobList[i])
            )
            if (rs) {
              successTimes++
              console.log(rs)
              var templateText = ''
              for (var j = 0; j < _newJobList[i].length; j++) {
                templateText += `\n` + _newJobList[i][j].info
              }
              console.log('templateText: ', templateText)
            }
            if (err) {
              errorTimes++
              if (err.code === '20010') {
                errMsg_lp = err.msg
                console.info(errMsg_lp)
                isTimesExhausted_lp = true
                break
              } else if (err.code === '-1401') {
                GM_getValue('allSettings')['showHint_enabled'] &&
                  myToast.normal('warning', err.msg, 3000, 'center')
                console.log(err.msg)
                break
              }
            }
            await myUtils.randomSleep(3, 6)
          }
          console.log(
            `已向当前页面的全部公司发送完简历！\n成功：${successTimes}家；失败：${errorTimes}家`
          )
        }
      }
    }

    /**
     *  发送简历-lp
     * @param {String} resId 简历id
     * @param {Array} jobInfo 工作的jobKind、jobId、jobIndex
     * @returns code || msg
     */
    send(resId = this.resId, jobInfo) {
      return new Promise((resolve, reject) => {
        if (jobInfo) return resolve('not send:', jobInfo)
        var myHeaders = new Headers()
        myHeaders.append('Accept', 'application/json, text/plain, */*')
        myHeaders.append('Accept-Language', 'zh-CN,zh;q=0.9')
        myHeaders.append('Connection', 'keep-alive')
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
        myHeaders.append('Origin', 'https://c.liepin.com')
        myHeaders.append('Referer', 'https://c.liepin.com/')
        myHeaders.append('Sec-Fetch-Dest', 'empty')
        myHeaders.append('Sec-Fetch-Mode', 'cors')
        myHeaders.append('Sec-Fetch-Site', 'same-site')
        myHeaders.append(
          'User-Agent',
          userAgents[parseInt(Math.random() * userAgents.length)]
        )
        myHeaders.append('X-Client-Type', 'web')
        myHeaders.append('X-Fscp-Fe-Version', '6f6ae4a')
        myHeaders.append('X-Fscp-Std-Info', '{"client_id": "40106"}')
        myHeaders.append(
          'X-Fscp-Trace-Id',
          '9751cb68-507c-4580-ad2c-b3a6c295aca3'
        )
        myHeaders.append('X-Fscp-Version', '1.1')
        myHeaders.append('X-Requested-With', 'XMLHttpRequest')
        var urlencoded = new URLSearchParams()
        urlencoded.append('resId', resId)
        urlencoded.append('jobInfo', JSON.stringify(jobInfo))

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow',
          credentials: 'include'
        }

        fetch(
          'https://apic.liepin.com/api/com.liepin.capply.platform.apply.batch-apply',
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (
              result.flag === 0 &&
              (result.code === '20010' || result.code === '-1401')
            ) {
              reject({
                code: result.code,
                msg: result.msg
              })
            } else resolve(result)
          })
          .catch((error) => reject('error', error))
      })
    }

    /**
     * 获取lp的resId
     * @returns resId || message
     */
    get_resId() {
      return new Promise((resolve, reject) => {
        var myHeaders = new Headers()
        myHeaders.append('Accept', 'application/json, text/plain, */*')
        myHeaders.append(
          'Accept-Language',
          'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6'
        )
        myHeaders.append('Connection', 'keep-alive')
        myHeaders.append('Content-Length', '0')
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
        myHeaders.append('DNT', '1')
        myHeaders.append('Origin', 'https://www.liepin.com')
        myHeaders.append('Referer', 'https://www.liepin.com/')
        myHeaders.append('Sec-Fetch-Dest', 'empty')
        myHeaders.append('Sec-Fetch-Mode', 'cors')
        myHeaders.append('Sec-Fetch-Site', 'same-site')
        myHeaders.append(
          'User-Agent',
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77'
        )
        myHeaders.append('X-Client-Type', 'web')
        myHeaders.append(
          'X-Fscp-Bi-Stat',
          '{"location": "https://www.liepin.com/zhaopin/?city=410&dq=410&pubTime=&currentPage=0&pageSize=40&key=%E5%89%8D%E7%AB%AF&workYearCode=0&compId=&compName=&compTag=&industry=&salary=&jobKind=&compScale=&compKind=&compStage=&eduLevel=&otherCity=&scene=input&suggestId="}'
        )
        myHeaders.append('X-Fscp-Fe-Version', '2e3a0e1')
        myHeaders.append('X-Fscp-Std-Info', '{"client_id": "40108"}')
        myHeaders.append(
          'X-Fscp-Trace-Id',
          'fb6d6c4e-8618-4ae1-a799-b81eae2e09c6'
        )
        myHeaders.append('X-Fscp-Version', '1.1')
        myHeaders.append('X-Requested-With', 'XMLHttpRequest')

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow',
          credentials: 'include'
        }

        fetch(
          'https://apic.liepin.com/api/com.liepin.usercx.pc.user.base-property',
          requestOptions
        )
          .then((response) => response.json())
          .then((result) =>
            resolve(result.data ? result.data.resId : result.msg)
          )
          .catch((error) => reject('error', error))
      })
    }
  }

  // var errorTimes_lg = 0
  // var isSwitch = false
  // async function autoSendResume_lg_main(resumeId) {
  //   if (!GM_getValue('allSettings')['autoSendResume_enabled']) {
  //     return console.log('未开启自动投简历功能')
  //   }
  //   try {
  //     var curl = location.href
  //     if (
  //       curl.indexOf('zhaopin') !== -1 ||
  //       curl.indexOf('wn/jobs') !== -1 ||
  //       curl.indexOf('jobs/list') !== -1
  //     ) {
  //       await myUtils.randomSleep(5, 5)
  //       var _lg_params_arr = GM_getValue('_lg_params')
  //       if (!_lg_params_arr && _lg_params_arr === null) {
  //         return console.log('未获取到_lg_params，已退出！')
  //       }
  //       var _lg_params = _lg_params_arr[0]
  //       console.log('_lg_params: ', _lg_params)
  //       var aesKey, _aesKey, _rsaEncryptData

  //       if (curl.indexOf('/wn/jobs') !== -1) {
  //         var positionIdsArr1 = GM_getValue('_lg_positionIds')[0]
  //         console.log('positionIdsArr1: ', positionIdsArr1)
  //         debugger
  //         var positionArr = positionIdsArr1.map((el) => {
  //           return {
  //             positionId: el,
  //             refer: `https://www.lagou.com/wn/jobs/${el}.html`
  //           }
  //         })
  //         aesKey = _lg_params['aesKey']
  //         for (let i = 0; i < positionIdsArr1.length; i++) {
  //           console.log(`第${+(i + 1)}家开始`)
  //           var b = await mainRun(
  //             false,
  //             i >= 0 ? aesKey : _aesKey,
  //             positionArr[i]['positionId'],
  //             resumeId,
  //             positionArr[i]['refer']
  //           )
  //           if (typeof b === 'object' && b.length == 1 && !b[0]) {
  //             break
  //           } else {
  //             await myUtils.randomSleep(3, 6)
  //           }
  //         }
  //         console.log('???')
  //       } else {
  //         var dom = document.querySelectorAll('.position .p_top .position_link')
  //         var positionIdsArr = dom.length ? [].slice.call(dom, 0) : []
  //         const positionArr = positionIdsArr
  //           ? positionIdsArr.map((el) => {
  //               var url = new URL(el.href)
  //               return {
  //                 positionId: url.pathname.replace('.html', '').split('/')[3],
  //                 refer: el.href,
  //                 showId: url.searchParams.get('show')
  //               }
  //             })
  //           : {}
  //         console.log('positionIds: ', positionArr)
  //         aesKey = _lg_params['aesKey']
  //         for (let i = 0; i < positionArr.length; i++) {
  //           console.log(`第${+(i + 1)}家开始`)
  //           var a = await mainRun(
  //             true,
  //             i >= 0 ? aesKey : _aesKey,
  //             positionArr[i]['positionId'],
  //             resumeId,
  //             positionArr[i]['refer'],
  //             positionArr[i]['showId']
  //           )
  //           if (typeof a === 'object' && a.length === 1 && !a[0]) {
  //             break
  //           } else {
  //             await myUtils.randomSleep(3, 6)
  //           }
  //         }
  //         console.log('???')
  //       }
  //     }
  //     async function mainRun(
  //       isShowId = false,
  //       aesKey,
  //       pid,
  //       rid,
  //       refer,
  //       showId = null
  //     ) {
  //       var originalData = !isShowId
  //         ? {
  //             positionId: String(pid),
  //             type: '1',
  //             force: false,
  //             resumeId: String(rid)
  //           }
  //         : {
  //             positionId: String(pid),
  //             type: '1',
  //             force: false,
  //             resumeId: String(rid),
  //             showId: showId
  //           }
  //       console.log('originalData: ', originalData)
  //       var xsHeader = getXSHeader(aesKey, originalData)
  //       var traceparent = getTraceparent()
  //       var lgHeadersObj = {
  //         'X-S-HEADER': xsHeader,
  //         traceparent: traceparent,
  //         'X-K-HEADER': _lg_params['X-K-HEADER'],
  //         'X-SS-REQ-HEADER': _lg_params['X-SS-REQ-HEADER'],
  //         'x-anit-forge-code': _lg_params['x-anit-forge-code'],
  //         'x-anit-forge-token': _lg_params['x-anit-forge-token']
  //       }
  //       console.log('lgHeadersObj: ', lgHeadersObj)
  //       console.log(refer)
  //       try {
  //         var err, rs, err1, rs1, err2, rs2
  //         var requestData = getRequestData(aesKey, originalData)
  //         if (
  //           JSON.stringify(lgCollectGifData) !== '{}' &&
  //           JSON.stringify(lgCollectGifHeader) !== '{}'
  //         ) {
  //           lgCollectGifData.time = new Date().getTime()
  //           var originalData1 = {
  //             plat: 'PC',
  //             data: JSON.stringify(lgCollectGifData)
  //           }
  //           var requestData1 = getRequestData(aesKey, originalData1)
  //           ;[err2, rs2] = await myUtils.awaitWrap(
  //             autoSendResume_lg_postCollectGif_lg(
  //               lgCollectGifHeader,
  //               requestData1
  //             )
  //           )
  //           await myUtils.randomSleep(3, 6)
  //           if (err2) {
  //             console.log(err2)
  //           } else if (rs2) {
  //             console.log(rs2)
  //           }
  //           if (!isSwitch) {
  //             ;[err, rs] = await myUtils.awaitWrap(
  //               autoSendResume_lg_getCodeAndTokenFromJobDetailPage(String(pid))
  //             )
  //             console.log('rs: ', rs)
  //           } else {
  //             err = null
  //             rs = {
  //               submitCode: _lg_params['x-anit-forge-code'],
  //               submitToken: _lg_params['x-anit-forge-token']
  //             }
  //             isSwitch = false
  //           }
  //           await myUtils.randomSleep(3, 6)
  //           if (rs && typeof rs === 'object') {
  //             var submitCode = rs['submitCode']
  //             var submitToken = rs['submitToken']
  //             console.log('rs: ', rs)
  //             console.log('rs-submitCode: ', submitCode)
  //             console.log('rs-submitToken: ', submitToken)
  //             ;[err1, rs1] = await myUtils.awaitWrap(
  //               autoSendResume_lg_send(
  //                 _lg_params['X-K-HEADER'],
  //                 traceparent,
  //                 _lg_params['X-SS-REQ-HEADER'],
  //                 xsHeader,
  //                 requestData,
  //                 refer,
  //                 submitCode,
  //                 submitToken
  //               )
  //             )
  //             if (err1) {
  //               return console.error('send:', err1)
  //             }
  //             if (rs1) {
  //               var resdata = getResponseData(rs1, aesKey)
  //               return console.log(resdata.msg ? resdata.msg : resdata)
  //             }
  //           }
  //           if (err) {
  //             if (errorTimes_lg <= 10) {
  //               errorTimes_lg++
  //               isSwitch = true
  //               console.error('getCodeAndTokenFromJobDetailPage:', err)
  //               return await myUtils.randomSleep(3, 6)
  //             } else {
  //               console.error('被反爬虫了！请过会再来！')
  //               return [false]
  //             }
  //           }
  //         }
  //       } catch (error) {
  //         console.log('error: ', error)
  //       }
  //     }
  //   } catch (error) {
  //     console.log('error: ', error)
  //   }
  // }

  // async function autoSendResume_lg_send(
  //   a,
  //   b,
  //   c,
  //   d,
  //   requestData,
  //   e,
  //   f = null,
  //   g = null
  // ) {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       var config = {
  //         method: 'post',
  //         url: 'https://www.lagou.com/mycenterDelay/deliverResumeBeforce.json',
  //         headers: {
  //           'x-anit-forge-code': f,
  //           'X-K-HEADER': a,
  //           traceparent: b,
  //           'sec-ch-ua-mobile': '?0',
  //           // 'User-Agent':
  //           //   userAgents[parseInt(Math.random() * userAgents.length)],
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //           accept: 'application/json, text/plain, */*',
  //           'X-SS-REQ-HEADER': c,
  //           Referer: e,
  //           'x-anit-forge-token': g,
  //           'X-S-HEADER': d
  //         },
  //         data: Qs.stringify({ data: requestData })
  //       }
  //       axios(config)
  //         .then((result) => resolve(result.data.data))
  //         .catch((error) => reject('error', error))

  //       // GM_xmlhttpRequest({
  //       //   url: 'https://www.lagou.com/mycenterDelay/deliverResumeBeforce.json',
  //       //   method: 'POST',
  //       //   headers: {
  //       //     'x-anit-forge-code': f || null,
  //       //     'X-K-HEADER': a,
  //       //     traceparent: b,
  //       //     // 'User-Agent':
  //       //     //   userAgents[parseInt(Math.random() * userAgents.length)],
  //       //     'Content-Type': 'application/x-www-form-urlencoded',
  //       //     'X-SS-REQ-HEADER': c,
  //       //     Referer: e,
  //       //     'x-anit-forge-token': g || null,
  //       //     'X-S-HEADER': d
  //       //   },
  //       //   Cookie: document.cookie,
  //       //   // data: { data: JSON.stringify(requestData) },
  //       //   data: { data: requestData },
  //       //   onload: function (result) {
  //       //     if (result.status === 200) {
  //       //       console.log('result.data: ', JSON.parse(result.responseText).data)
  //       //       resolve(JSON.parse(result.responseText).data)
  //       //     } else {
  //       //       console.log('失败')
  //       //       reject(res)
  //       //     }
  //       //   },
  //       //   onerror: function (err) {
  //       //     console.log('error')
  //       //     reject(err)
  //       //   }
  //       // })

  //       // var rqdata = JSON.stringify(requestData)
  //       // var aa = rqdata.substring(1)
  //       // // rqdata = aa.slice(0, aa.length - 1)
  //       // var myHeaders = new Headers()
  //       // myHeaders.append('X-K-HEADER', a)
  //       // myHeaders.append('traceparent', b)
  //       // myHeaders.append('content-type', 'application/x-www-form-urlencoded')
  //       // myHeaders.append('accept', 'application/json, text/plain, */*')
  //       // myHeaders.append(
  //       //   'User-Agent',
  //       //   userAgents[parseInt(Math.random() * userAgents.length)]
  //       // )
  //       // myHeaders.append('X-SS-REQ-HEADER', c)
  //       // myHeaders.append('X-S-HEADER', d)
  //       // myHeaders.append('Referer', e)
  //       // myHeaders.append('x-anit-forge-code', f)
  //       // myHeaders.append('x-anit-forge-token', g)
  //       // myHeaders.append('x-requested-with', 'XMLHttpRequest')
  //       // // myHeaders.append('X-L-REQ-HEADER', '{deviceType: 1}')

  //       // var urlencoded = new URLSearchParams()
  //       // urlencoded.append('data', rqdata)

  //       // var requestOptions = {
  //       //   method: 'POST',
  //       //   headers: myHeaders,
  //       //   body: urlencoded,
  //       //   redirect: 'follow',
  //       //   credentials: 'include'
  //       // }

  //       // fetch(
  //       //   'https://www.lagou.com/mycenterDelay/deliverResumeBeforce.json',
  //       //   requestOptions
  //       // )
  //       //   .then((response) => response.json())
  //       //   .then((result) => resolve(result.data))
  //       //   .catch((error) => reject('error', error))
  //     } catch (error) {
  //       console.log('error: ', error)
  //     }
  //   })
  // }

  await firstRun(_config_blackListArr, _config_whiteListArr)

  // #endregion

  // prettier-ignore
  // function getAesKeyAndRsaEncryptData () { var t = (function (t) { for (var r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', n = '', e = 0; e < 32; e++) { var o = Math.floor(Math.random() * r.length); n += r.substring(o, o + 1) } return n }()); var r = new JSEncrypt(); return r.setPublicKey('-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnbJqzIXk6qGotX5nD521Vk/24APi2qx6C+2allfix8iAfUGqx0MK3GufsQcAt/o7NO8W+qw4HPE+RBR6m7+3JVlKAF5LwYkiUJN1dh4sTj03XQ0jsnd3BYVqL/gi8iC4YXJ3aU5VUsB6skROancZJAeq95p7ehXXAJfCbLwcK+yFFeRKLvhrjZOMDvh1TsMB4exfg+h2kNUI94zu8MK3UA7v1ANjfgopaE+cpvoulg446oKOkmigmc35lv8hh34upbMmehUqB51kqk9J7p8VMI3jTDBcMC21xq5XF7oM8gmqjNsYxrT9EVK7cezYPq7trqLX1fyWgtBtJZG7WMftKwIDAQAB-----END PUBLIC KEY-----'), { aesKey: t, rsaEncryptData: r.encrypt(t) } }
  // prettier-ignore
  // function getXSHeader (t, r, n) { return jt(t, r, n) }
  // prettier-ignore
  // function getRequestData (t, r) { return Rt(JSON.stringify(r), t) }
  // prettier-ignore
  // function getResponseData (t, r) { return It(t, r) }
  // prettier-ignore
  // function getTraceparent () { return '00-' + E() + '-' + E(16) + '-01' }
  // prettier-ignore
  // function getXHttpToken (t) { var r; var n; var e = { cookie: t }; var o = ['documentElement', 'body', 'scrollLeft', 'clientLeft', 'clientY', 'scrollTop', 'clientTop', 'pageX', 'pageY', 'floor', 'random', 'trackImage_', 'onload', 'onerror', 'src', 'XMLHttpRequest', 'Microsoft', 'open', 'GET', '/wafcheck.json', 'send', 'getResponseHeader', 'replace', 'parse', 'substring', 'utrack', 'location', 'protocol', 'hostname', 'getTime', 'push', 'https://', 'host', '/utrack/track.gif', 'user_trace_token', 'X_HTTP_TOKEN', 'length', 'fromCharCode', 'concat', 'charAt', 'HTTP_JS_KEY', '(^| )', '=([^;]*)(;|$)', 'cookie', 'match', '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;', 'event', 'tagName', 'BUTTON', 'INPUT', 'hidden-form-send', 'className', 'indexOf', 'target', 'srcElement', 'parentNode', 'log', 'clientX', 'ownerDocument']; r = o, n = 331, (function (t) { for (; --t;)r.push(r.shift()) }(++n)); var c = function (t, r) { return o[t -= 0] }; function a (t, r) { var n = (65535 & t) + (65535 & r); return (t >> 16) + (r >> 16) + (n >> 16) << 16 | 65535 & n } function i (t, r, n, e, o, c) { return a((i = a(a(r, t), a(e, c))) << (u = o) | i >>> 32 - u, n); var i, u } function u (t, r, n, e, o, c, a) { return i(r & n | ~r & e, t, r, o, c, a) } function f (t, r, n, e, o, c, a) { return i(r & e | n & ~e, t, r, o, c, a) } function s (t, r, n, e, o, c, a) { return i(r ^ n ^ e, t, r, o, c, a) } function p (t, r, n, e, o, c, a) { return i(n ^ (r | ~e), t, r, o, c, a) } function g (t, r) { var n, e, o, i, g; t[r >> 5] |= 128 << r % 32, t[14 + (r + 64 >>> 9 << 4)] = r; var d = 1732584193; var l = -271733879; var v = -1732584194; var y = 271733878; for (n = 0; n < t[c('0x0')]; n += 16)e = d, o = l, i = v, g = y, l = p(l = p(l = p(l = p(l = s(l = s(l = s(l = s(l = f(l = f(l = f(l = f(l = u(l = u(l = u(l = u(l, v = u(v, y = u(y, d = u(d, l, v, y, t[n], 7, -680876936), l, v, t[n + 1], 12, -389564586), d, l, t[n + 2], 17, 606105819), y, d, t[n + 3], 22, -1044525330), v = u(v, y = u(y, d = u(d, l, v, y, t[n + 4], 7, -176418897), l, v, t[n + 5], 12, 1200080426), d, l, t[n + 6], 17, -1473231341), y, d, t[n + 7], 22, -45705983), v = u(v, y = u(y, d = u(d, l, v, y, t[n + 8], 7, 1770035416), l, v, t[n + 9], 12, -1958414417), d, l, t[n + 10], 17, -42063), y, d, t[n + 11], 22, -1990404162), v = u(v, y = u(y, d = u(d, l, v, y, t[n + 12], 7, 1804603682), l, v, t[n + 13], 12, -40341101), d, l, t[n + 14], 17, -1502002290), y, d, t[n + 15], 22, 1236535329), v = f(v, y = f(y, d = f(d, l, v, y, t[n + 1], 5, -165796510), l, v, t[n + 6], 9, -1069501632), d, l, t[n + 11], 14, 643717713), y, d, t[n], 20, -373897302), v = f(v, y = f(y, d = f(d, l, v, y, t[n + 5], 5, -701558691), l, v, t[n + 10], 9, 38016083), d, l, t[n + 15], 14, -660478335), y, d, t[n + 4], 20, -405537848), v = f(v, y = f(y, d = f(d, l, v, y, t[n + 9], 5, 568446438), l, v, t[n + 14], 9, -1019803690), d, l, t[n + 3], 14, -187363961), y, d, t[n + 8], 20, 1163531501), v = f(v, y = f(y, d = f(d, l, v, y, t[n + 13], 5, -1444681467), l, v, t[n + 2], 9, -51403784), d, l, t[n + 7], 14, 1735328473), y, d, t[n + 12], 20, -1926607734), v = s(v, y = s(y, d = s(d, l, v, y, t[n + 5], 4, -378558), l, v, t[n + 8], 11, -2022574463), d, l, t[n + 11], 16, 1839030562), y, d, t[n + 14], 23, -35309556), v = s(v, y = s(y, d = s(d, l, v, y, t[n + 1], 4, -1530992060), l, v, t[n + 4], 11, 1272893353), d, l, t[n + 7], 16, -155497632), y, d, t[n + 10], 23, -1094730640), v = s(v, y = s(y, d = s(d, l, v, y, t[n + 13], 4, 681279174), l, v, t[n], 11, -358537222), d, l, t[n + 3], 16, -722521979), y, d, t[n + 6], 23, 76029189), v = s(v, y = s(y, d = s(d, l, v, y, t[n + 9], 4, -640364487), l, v, t[n + 12], 11, -421815835), d, l, t[n + 15], 16, 530742520), y, d, t[n + 2], 23, -995338651), v = p(v, y = p(y, d = p(d, l, v, y, t[n], 6, -198630844), l, v, t[n + 7], 10, 1126891415), d, l, t[n + 14], 15, -1416354905), y, d, t[n + 5], 21, -57434055), v = p(v, y = p(y, d = p(d, l, v, y, t[n + 12], 6, 1700485571), l, v, t[n + 3], 10, -1894986606), d, l, t[n + 10], 15, -1051523), y, d, t[n + 1], 21, -2054922799), v = p(v, y = p(y, d = p(d, l, v, y, t[n + 8], 6, 1873313359), l, v, t[n + 15], 10, -30611744), d, l, t[n + 6], 15, -1560198380), y, d, t[n + 13], 21, 1309151649), v = p(v, y = p(y, d = p(d, l, v, y, t[n + 4], 6, -145523070), l, v, t[n + 11], 10, -1120210379), d, l, t[n + 2], 15, 718787259), y, d, t[n + 9], 21, -343485551), d = a(d, e), l = a(l, o), v = a(v, i), y = a(y, g); return [d, l, v, y] } function d (t) { var r; var n = ''; var e = 32 * t[c('0x0')]; for (r = 0; r < e; r += 8)n += String[c('0x1')](t[r >> 5] >>> r % 32 & 255); return n } function l (t) { var r; var n = []; for (n[(t[c('0x0')] >> 2) - 1] = void 0, r = 0; r < n.length; r += 1)n[r] = 0; var e = 8 * t[c('0x0')]; for (r = 0; r < e; r += 8)n[r >> 5] |= (255 & t.charCodeAt(r / 8)) << r % 32; return n } function v (t) { var r; var n; var e = ''; for (n = 0; n < t[c('0x0')]; n += 1)r = t.charCodeAt(n), e += '0123456789abcdef'[c('0x3')](r >>> 4 & 15) + '0123456789abcdef'[c('0x3')](15 & r); return e } function y (t) { return unescape(encodeURIComponent(t)) } function C (t) { return d(g(l(r = y(t)), 8 * r[c('0x0')])); var r } function h (t, r) { return (function (t, r) { var n; var e; var o = l(t); var a = []; var i = []; for (a[15] = i[15] = void 0, o[c('0x0')] > 16 && (o = g(o, 8 * t[c('0x0')])), n = 0; n < 16; n += 1)a[n] = 909522486 ^ o[n], i[n] = 1549556828 ^ o[n]; return e = g(a[c('0x2')](l(r)), 512 + 8 * r[c('0x0')]), d(g(i[c('0x2')](e), 640)) }(y(t), y(r))) } var x; var J; var S; var A; var m; var E; var U; var k; var T; var N; var q = c('0x4'); var B = (x = c('0x39'), S = new RegExp(c('0x5') + x + c('0x6')), (J = e[c('0x7')][c('0x8')](S)) ? unescape(J[2]) : ''); var K = (A = q + B, m ? E ? h(m, A) : v(h(m, A)) : E ? C(A) : v(C(A))); var I = (U = new Date(), Date.parse(U) / 1e3); return (function (t) { for (var r = '', n = t[c('0x0')] - 1; n >= 0; n--)r += t[c('0x3')](n); return r }((T = I, N = 16, (k = K).substring(0, N) + T + k.substring(N, 32)))) }
  // prettier-ignore
  // function jt (t, r, n) { var e = { deviceType: 1 }; var o = (o = o = ''.concat(JSON.stringify(e)).concat(n).concat(JSON.stringify(r)), (o = CryptoJS.SHA256(o).toString()) === null || void 0 === o ? void 0 : o.toUpperCase()); return Rt(JSON.stringify({ originHeader: JSON.stringify(e), code: o }), t) }
  // prettier-ignore
  // function Rt (t, r) { var n = CryptoJS.enc.Utf8.parse('c558Gq0YQK2QUlMc'); var e = CryptoJS.enc.Utf8.parse(r); t = CryptoJS.enc.Utf8.parse(t); return (t = CryptoJS.AES.encrypt(t, e, { iv: n, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })).toString() }
  // prettier-ignore
  // function It (t, r) { var n = CryptoJS.enc.Utf8.parse('c558Gq0YQK2QUlMc'); console.log('Ot: ', n); var e = CryptoJS.enc.Utf8.parse(r); console.log('Dt: ', e), t = CryptoJS.AES.decrypt(t, e, { iv: n, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8); try { t = JSON.parse(t) } catch (t) { console.log('t: ', t) } return t }
  // prettier-ignore
  // function E (t) { for (var r = [], n = 0; n < 256; ++n)r[n] = (n + 256).toString(16).substr(1); var e = new Uint8Array(16); return (function (t) { for (var n = [], e = 0; e < t.length; e++)n.push(r[t[e]]); return n.join('') }(crypto.getRandomValues(e))).substr(0, t) }
})()

const data = [
    {
      id: '1',
      type: '',
      date: '2020.3.27',
      address: '保安站建管处',
      title: '保安站工程第三方检测调度会',
      emcee: '王永本',
      record: ''
    },
    {
      id: '2',
      type: '',
      date: '2021.5.28',
      address: '保安站现场会议室',
      title: '保安站防汛工作约谈会议',
      emcee: '谭德友',
      record: ''
    },
    {
      id: '3',
      type: '约谈会议',
      date: '2021.10.28',
      address: '下沟站项目部会议室',
      title: '对河南省华帝建设工程有限公司工期严重滞后问题约谈会会议纪要',
      emcee: '谭德友',
      record: '阮福民'
    },
    {
      id: '4',
      type: '工程调度',
      date: '2021.11.1',
      address: '下沟站项目部会议室',
      title: '推动下沟站工程建设进度',
      emcee: '谭德友',
      record: ''
    },
    {
      id: '5',
      type: '工程调度',
      date: '2021.11.2',
      address: '保安站现场会议室',
      title: '保安站工程建设进行调度安排',
      emcee: '谭德友',
      record: ''
    },
    {
      id: '6',
      type: '工程调度',
      date: '2021.11.5',
      address: '保安站现场会议室',
      title: '保安、下沟两站土方平衡专题会议纪要',
      emcee: '王永本',
      record: ''
    },
    {
      id: '7',
      type: '内部例会',
      date: '2021.11.5',
      address: '水楼村会议室',
      title: '保安站建管处内部例会',
      emcee: '王永本',
      record: ''
    },
    {
      id: '8',
      type: '工程调度',
      date: '2021.11.14',
      address: '水楼村会议室',
      title: '保安站供电线路工程第二次监理例会',
      emcee: '',
      record: ''
    },
    {
      id: '9',
      type: '工程调度',
      date: '2021.11.19',
      address: '下沟站项目部会议室',
      title: '保安站、下沟站工程建设调度会议',
      emcee: '谭德友',
      record: ''
    },
    {
      id: '10',
      type: '工程调度',
      date: '2021.12.4',
      address: '水楼村会议室',
      title: '保安站供电线路工程推进会议',
      emcee: '王永本',
      record: ''
    },
    {
      id: '11',
      type: '工程调度',
      date: '2021.12.23',
      address: '保安站现场会议室',
      title: '电气安装进行技术交底，讨论电气增项内容',
      emcee: '王永本',
      record: ''
    },
    {
      id: '12',
      type: '工程调度',
      date: '2022.1.12',
      address: '保安站现场会议室',
      title: '保安站建设百日攻坚会议',
      emcee: '谭德友',
      record: ''
    },
    {
      id: '13',
      type: '内部例会',
      date: '2022.1.13',
      address: '水楼村二楼会议室',
      title: '保安站建管处内部例会',
      emcee: '王永本',
      record: '阮福民'
    },
    {
      id: '14',
      type: '工程调度',
      date: '2022.1.18',
      address: '下沟站项目部会议室',
      title: '下沟站建设百日攻坚会议',
      emcee: '谭德友',
      record: ''
    },
    {
      id: '15',
      type: '内部例会',
      date: '2022.1.27',
      address: '下沟站建管处',
      title: '两站建管处年前例会',
      emcee: '王永本',
      record: '阮福民'
    },
    {
      id: '16',
      type: '内部例会',
      date: '2022.2.15',
      address: '下沟站建管处',
      title: '保安、下沟两站建管处例会',
      emcee: '王永本',
      record: '阮福民'
    },
    {
      id: '17',
      type: '工程调度',
      date: '2022.2.22',
      address: '下沟站项目部会议室',
      title: '保安站和下沟站工程推进调度会议',
      emcee: '谭德友',
      record: '阮福民'
    },
    {
      id: '18',
      type: '工程调度',
      date: '2022.3.13',
      address: '下沟站项目部会议室',
      title: '保安站2022年防洪度汛方案评审',
      emcee: '',
      record: ''
    },
    {
      id: '19',
      type: '工程调度',
      date: '2022.3.13',
      address: '下沟站项目部会议室',
      title: '下沟站2022年防洪度汛方案评审',
      emcee: '',
      record: ''
    },
    {
      id: '20',
      type: '工程调度',
      date: '2022.3.13',
      address: '下沟站项目部会议室',
      title: '鸠江区水利工程疫情防控紧急调度会',
      emcee: '谭德友',
      record: ''
    },
    {
      id: '21',
      type: '内部例会',
      date: '2022.3.14',
      address: '保安站建管处',
      title: '疫情防控专题调度会议',
      emcee: '王永本',
      record: ''
    },
    {
      id: '22',
      type: '内部例会',
      date: '2022.3.14',
      address: '下沟站建管处',
      title: '疫情防控专题调度会议',
      emcee: '王永本',
      record: ''
    },
    {
      id: '23',
      type: '内部例会',
      date: '2022.3.16',
      address: '下沟站建管处',
      title: '保安站建管处例会',
      emcee: '王永本',
      record: ''
    },
    {
      id: '24',
      type: '工程调度',
      date: '2022.3.19',
      address: '下沟站项目部会议室',
      title: '保安站、下沟站工程建设调度会议',
      emcee: '谭德友',
      record: '阮福民'
    },
    {
      id: '25',
      type: '技术指导',
      date: '2022.3.24',
      address: '下沟站项目部会议室',
      title: '市水务局指导的下沟加压井封堵措施相关会议',
      emcee: '王永本',
      record: '阮福民'
    },
    {
      id: '26',
      type: '工程调度',
      date: '2022.3.26',
      address: '下沟站项目部会议室',
      title: '保安站、下沟站工程建设调度会议',
      emcee: '谭德友',
      record: '陈锡伍'
    },
    {
      id: '27',
      type: '技术指导',
      date: '2022.3.28',
      address: '下沟站项目部会议室',
      title: '市水务局指导的下沟加压井封堵措施相关会议',
      emcee: '谭德友',
      record: '阮福民'
    },
    {
      id: '28',
      type: '工程例会',
      date: '2022.3.28',
      address: '下沟站项目部会议室',
      title: '鸠江区水利工程基本建设管理处会议',
      emcee: '谭德友',
      record: '邓佳东'
    },
    {
      id: '29',
      type: '工程建设',
      date: '2022.3.28',
      address: '下沟站项目部会议室',
      title: '下沟站工程建设会议',
      emcee: '谭德友',
      record: '阮福民'
    },
    {
      id: '30',
      type: '工程例会',
      date: '2022.3.29',
      address: '下沟站项目部会议室',
      title: '保安站建管处例会',
      emcee: '王永本',
      record: '阮福民'
    },
    {
      id: '31',
      type: '工程建设',
      date: '2022.3.29',
      address: '下沟站项目部会议室',
      title: '下沟站工程建设会议',
      emcee: '谭德友',
      record: '阮福民'
    },
    {
      id: '32',
      type: '工程例会',
      date: '2022.4.1',
      address: '区水务局五楼会议室',
      title: '下沟站供电线路工程中标约谈会',
      emcee: '王永本',
      record: '阮福民'
    },
    {
      id: '33',
      type: '工程例会',
      date: '2022.4.1',
      address: '区水务局五楼会议室',
      title: '下沟站供电线路工程技术交底会',
      emcee: '王永本',
      record: '阮福民'
    },
    {
      id: '34',
      type: '工程调度',
      date: '2022.4.1',
      address: '保安站现场会议室',
      title: '保安站工程调度会',
      emcee: '王永本',
      record: '阮福民'
    },
    {
      id: '35',
      type: '工程调度',
      date: '2022.4.8',
      address: '保安站现场会议室',
      title: '保安站、下沟站工程建设调度会议',
      emcee: '徐光耀',
      record: '阮福民'
    },
    {
      id: '36',
      type: '工程调度',
      date: '2022.4.8',
      address: '保安站现场会议室',
      title: '保安站工程调度会',
      emcee: '阮福民',
      record: '阮福民'
    }
  ]

export default data;
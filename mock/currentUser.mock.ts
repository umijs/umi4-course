// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    res.status(200).send({
      name: '崔霞',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      userid: '2BfC454B-F74e-9Ccc-F9D2-b3E5F33eb9D8',
      email: 'r.mdsowco@xtolluf.ge',
      signature: '事示表响不产不光安山府者习年百。',
      title: '中土里万带办了时拉近认府适。',
      group: '前端 6 组',
      tags: [
        { key: 1, label: '健身达人' },
        { key: 2, label: '爱好广泛' },
        { key: 3, label: '大长腿' },
        { key: 4, label: '大长腿' },
        { key: 5, label: '爱好广泛' },
        { key: 6, label: '大咖' },
        { key: 7, label: '健身达人' },
        { key: 8, label: '健身达人' },
        { key: 9, label: '阳光少年' },
        { key: 10, label: '程序员' },
        { key: 11, label: '阳光少年' },
        { key: 12, label: '' },
        { key: 13, label: '算法工程师' },
        { key: 14, label: '阳光少年' },
      ],
      notifyCount: 66,
      unreadCount: 62,
      country: '德国',
      access: '温林百具得交务面着们题容青六。',
      geographic: { province: { label: '重庆', key: 15 }, city: { label: '贺州市', key: 16 } },
      address: '湖南省 邵阳市 武冈市',
      phone: '11438479632',
    });
  },
};

// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 87,
      disabled: true,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      name: '何磊',
      owner: 'Williams',
      desc: '选率安养安很局引育内信油米过口。',
      callNo: 76,
      status: 97,
      updatedAt: '%Ty2E',
      createdAt: '6BW2l',
      progress: 61,
    });
  },
};

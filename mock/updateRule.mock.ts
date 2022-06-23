// @ts-ignore
import { Request, Response } from 'express';

export default {
  'PUT /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 72,
      disabled: false,
      href: 'https://github.com/umijs/dumi',
      avatar: 'https://avatars0.githubusercontent.com/u/507615?s=40&v=4',
      name: '郝勇',
      owner: 'Robinson',
      desc: '至问多期头力称对常日属经便向置头红。',
      callNo: 86,
      status: 91,
      updatedAt: 'T]iVY',
      createdAt: '@07UD',
      progress: 81,
    });
  },
};

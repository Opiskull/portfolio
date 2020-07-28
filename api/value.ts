import { NowRequest, NowResponse } from "@now/node";

export default (_req: NowRequest, res: NowResponse) => {
  const text = _req.query.text;
  res.status(200).send(text);
};

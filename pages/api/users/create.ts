import { validateUser } from './../../../src/validations/creation';
import { userToDocument } from './../../../src/model/user';
import type { NextApiRequest, NextApiResponse } from "next";
import { create } from "../../../src/repository/user-repository";
import { UserRequestDTO } from "../../../src/model/user";
import { InvalidPayloadException } from '../../../src/exceptions/invalid-payload-exception';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const user: UserRequestDTO = req.body
    try{
      await validateUser(user)
      const persistedUser = await create(userToDocument(user));
      res.status(201).send(persistedUser);
    } catch (error) {
      if (error instanceof InvalidPayloadException) {
        res.status(401).send(error.message);
      }
      res.status(500).send("Internal server error");
    }
}
    
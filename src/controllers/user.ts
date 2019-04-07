import { Request, Response } from 'express';
import { Controller, Get, Put, Post } from '@overnightjs/core';
import API from "./API";
import * as Knex from 'knex';
import db from '../knex/knex';

@Controller('api/')
export class UserController extends API {

  private model: Knex;
  constructor() {
    super();
    this.model = db;
  }

  @Get('users/:id')
  public async getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.model('users').where('id', id);
      return res.status(200).json({ data });

    }
    catch (err) {
      return res.status(500).send({ error: err.message });
    }

  }


  @Post('users/:id')
  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.model('users').where('id', id).update(req.body).returning('*')
      return res.status(200).send({ data })
    }
    catch (err) {
      return res.status(500).send({ error: err.message });
    }
  }

}

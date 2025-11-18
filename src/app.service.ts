import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LogSchema } from './shared/schemas/log.schema';
import { Model } from 'mongoose';
import { LogDto } from './shared/dtos/log.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(LogSchema.name) private logModel: Model<LogSchema>,
  ) {}
  async log(body: LogDto) {
    const newLog = new this.logModel(body);
    await newLog.save();
    return newLog;
  }
}

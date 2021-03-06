import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'
import { Admin } from '@libs/db/models/admin.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: Admin,
  routes: {
    findOne: {
      decorators: [
        ApiOperation({ summary: '管理员详情' })
      ]
    },
    update: {
      decorators: [
        ApiOperation({ summary: '编辑管理员' })
      ]
    },
    find: false,
    create: false,
    delete: false,
  }
})

@Controller('admins')
@ApiTags('管理员')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class AdminsController {
  constructor(
    @InjectModel(Admin) private readonly model: ReturnModelType<typeof Admin>,
  ) { }
}

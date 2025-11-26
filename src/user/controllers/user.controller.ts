import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  // Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserQueryDto } from '../dtos/user-query.dto';
import { UserDto } from '../dtos/user.dto';
import { EnglishPipe } from 'src/shared/pipes/english.pipe';
import { MobilePipe } from 'src/shared/pipes/mobile.pipe';
import { PasswordPipe } from 'src/shared/pipes/password.pipe';
import { PasswordInterceptor } from 'src/shared/interceptors/password.interceptor';
import { UpdateUserDto } from '../dtos/update-user.dto';
// import { ApiTags } from '@nestjs/swagger';

// @ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() queryParams: UserQueryDto) {
    return this.userService.findAll(queryParams);
  }
  @Post()
  @UseInterceptors(PasswordInterceptor)
  create(@Body(EnglishPipe, MobilePipe, PasswordPipe) body: UserDto) {
    return this.userService.create(body);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Patch(':id')
  @UseInterceptors(PasswordInterceptor)
  update(
    @Param('id') id: string,
    @Body(EnglishPipe, MobilePipe, PasswordPipe) body: UpdateUserDto,
  ) {
    return this.userService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}

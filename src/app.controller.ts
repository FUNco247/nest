import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/crate-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/app.user';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // router.get in expressJS and @post also availabe & decorator shoild stacked with function, never enter space!
  getAllUser(): User[] {
    return this.appService.getAll();
  }

  @Post('/join')
  createUser(@Body() newUser: CreateUserDto): void {
    return this, this.appService.create(newUser);
  }

  @Get('/:id')
  getOneUser(@Param('id') userId: number): User {
    return this.appService.getOne(userId);
  }

  @Patch('/patch/:id')
  patchUser(
    @Param('id') userId: number,
    @Body() updatedUser: UpdateUserDto,
  ): void {
    return this.appService.update(userId, updatedUser);
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') userId: number): boolean {
    return this.appService.deleteOne(userId);
  }
}

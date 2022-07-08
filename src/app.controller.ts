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
import { User } from './entities/app.user';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // router.get in expressJS and @post also availabe & decorator shoild stacked with function, never enter space!
  getAllUser(): User[] {
    return this.appService.getAll();
  }

  @Post('/join')
  createUser(@Body() newUser): void {
    return this, this.appService.create(newUser);
  }

  @Get('/:id')
  getOneUser(@Param('id') userId: string): User {
    return this.appService.getOne(+userId);
  }

  @Patch('/patch/:id')
  patchUser(@Param('id') userId: string, @Body() updatedUser): void {
    return this.appService.update(+userId, updatedUser);
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') userId: string): boolean {
    return this.appService.deleteOne(+userId);
  }
}

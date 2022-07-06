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

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // router.get in expressJS and @post also availabe & decorator shoild stacked with function, never enter space!
  getAllUser(): string {
    return 'all user';
  }

  @Get('/find')
  findUserId(@Query('name') queryKey): string {
    return `finding user using ${queryKey} `;
  }

  @Get('/:id')
  getOneUser(@Param('id') userId: string): string {
    return `find user ${userId}`;
  }

  @Post('/register')
  createUser(@Body() newUser): string {
    return `user ${newUser.name} created`;
  }

  @Patch('/patch/:id')
  patchUser(@Param('id') userId: string, @Body() updatedUser): string {
    return `user ${userId}'s name is changed to ${updatedUser.name}`;
  }

  @Put('/put/:id')
  putUser(@Param('id') userId: string): string {
    return `user ${userId} is totally updated`;
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') userId: string): string {
    return `user ${userId} is removed`;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/crate-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/app.user';

@Injectable()
export class AppService {
  private users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  getOne(id: number): User {
    const targetUser = this.users.find((user) => user.id === id);
    if (!targetUser) {
      throw new NotFoundException(`User number ${id} not found`);
    }
    return targetUser;
  }

  deleteOne(id: number): boolean {
    this.users = this.users.filter((user) => user.id !== id);
    return true;
  }

  create(newUserData: CreateUserDto): void {
    this.users.push({
      id: this.users.length + 1,
      ...newUserData,
    });
  }

  update(id: number, newData: UpdateUserDto): void {
    const targetUser = this.getOne(id);
    this.deleteOne(id);
    this.users.push({
      ...targetUser,
      ...newData,
    });
  }
}

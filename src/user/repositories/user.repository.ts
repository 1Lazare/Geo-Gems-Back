import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const findWithSamePhone = await this.userRepository.findOne({
      where: { phoneNumber: createUserDto.phoneNumber },
    });
    if (findWithSamePhone) {
      throw new HttpException(
        'ასეთი ნომრით რეგისტრირებულია უკვე მომხმარებელი',
        HttpStatus.FOUND,
      );
    }
    const createdUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(createdUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async findOneByGmailOrPhone(userName: string) {
    return await this.userRepository.findOne({
      where: [{ gmail: userName }, { phoneNumber: `+995${userName}` }],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.softDelete(id);
  }
}

import { IsEmail, IsEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a text' })
  @IsEmpty({ message: 'Name is required' })
  name: string;
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;
  @IsString()
  @IsEmpty({ message: 'Password is required' })
  password: string;
}

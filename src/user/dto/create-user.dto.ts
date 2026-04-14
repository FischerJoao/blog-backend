import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'name must be a text' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;
  @IsString()
  @IsNotEmpty({ message: 'password is required' })
  password: string;
}

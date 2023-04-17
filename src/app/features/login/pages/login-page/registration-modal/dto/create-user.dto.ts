import { Gender } from 'src/app/core/enums/gender.enum';

export class CreateUserDto {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  birthDay!: number;
  birthMonth!: number;
  birthYear!: number;
  gender!: Gender;
}

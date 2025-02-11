import { IsEmail, IsNotEmpty, MinLength } from '@nestjs/class-validator';

export class UserCreateDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail({ message: 'O email informado é inválido ' })
  email: string;

  @MinLength(8, {
    message:
      'A senha no minimo 8 caracteres sendo 1 maiusculo e um caractere especial',
  })
  senha: string;
}
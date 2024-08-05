import { UserModel } from "@/5_entities/user";
import { api } from "@/1_app/api";

export type AuthUserDto = Omit<UserModel.UserDto, 'id'>

export type AuthResponseDto = AuthUserDto & { token: string }
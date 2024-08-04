import { UserDto } from "@/5_entities/user/model";

export type RegisterDto = Omit<UserDto, "id"> & { confirmPassword: string };
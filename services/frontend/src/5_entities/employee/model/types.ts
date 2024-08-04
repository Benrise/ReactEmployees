import { BaseDto } from "@/6_shared/api/types";
import { UserModel } from "@/5_entities/user";

export class EmployeeDto extends BaseDto {
    firstName?: string;
    lastName?: string;
    age?: string;
    address?: string;
    user?: UserModel.UserDto;
    userId?: string;
}
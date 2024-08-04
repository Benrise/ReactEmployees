import { EmployeeModel } from "@/5_entities/employee";
import { BaseDto } from "@/6_shared/api/types";

export class UserDto extends BaseDto {
    email?: string;
    password?: string;
    name?: string;
    createdEmployee?: EmployeeModel.EmployeeDto;
}
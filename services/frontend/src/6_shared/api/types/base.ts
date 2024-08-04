export type CrudErrorResponse = {
    status: number;
    data: {
        message: string;
    }
}

export class BaseDto {
    id?: number;
}
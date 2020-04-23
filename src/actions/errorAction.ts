import { Action } from 'redux';

export interface ErrorResponse {
    code: string;
    errors?: any;
    message?: string;
}

export interface ErrorData {
    data: ErrorResponse;
    status: number;
}

export interface ErrorAction<T> extends Action<T> {
    error: ErrorData;
}

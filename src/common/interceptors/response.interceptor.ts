import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ResponseData } from '../dtos/responseData.dto';

@Injectable()
class ResponseInterceptor<T> implements NestInterceptor<T, ResponseData<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseData<T>> {
        return next.handle().pipe(
            map((data) => {
                if (data instanceof ResponseData) return data;
                return ResponseData.success<T>(data);
            }),
            catchError((err) => {
                throw err;
            }),
        );
    }
}

export { ResponseInterceptor };

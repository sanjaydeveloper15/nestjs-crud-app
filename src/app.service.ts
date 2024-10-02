import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handlerFn(): string {
    return 'NestJS IMDB Application!';
  }
}

import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { randomUUID } from 'crypto';

@Injectable()
export class AppService {
  private id = randomUUID();

  getHello(): string {
    return 'Hello World!';
  }

  @OnEvent('test.event')
  handleEvent(payload: string) {
    console.log('Event Received', [payload, this.id]);
  }
}

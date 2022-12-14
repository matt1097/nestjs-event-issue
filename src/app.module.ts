import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'AnAliasedService',
      useExisting: AppService,
    },
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PoliciesModule } from './policies/policies.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvConfiguration } from './config/app.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      isGlobal: true
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('dbhost'),
        port: Number(configService.get<string>('dbport')),
        database: configService.get<string>('database'),
        username: configService.get<string>('usernamedb'),
        password: configService.get<string>('passwordb'),
        autoLoadEntities: true,
        // synchronize: true,
      }),
    }),

    PoliciesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
  
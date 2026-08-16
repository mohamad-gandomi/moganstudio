import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { ClientAwareThrottlerGuard } from "./auth/client-aware-throttler.guard";
import { LeadsModule } from "./leads/leads.module";
import { PrismaModule } from "./prisma/prisma.module";
import { validateEnvironment } from "./config/environment";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnvironment }),
    ThrottlerModule.forRoot([{ name: "default", ttl: 60_000, limit: 30 }]),
    PrismaModule,
    LeadsModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ClientAwareThrottlerGuard }],
})
export class AppModule {}

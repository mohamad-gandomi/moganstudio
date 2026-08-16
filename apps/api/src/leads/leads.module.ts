import { Module } from "@nestjs/common";
import { InternalApiKeyGuard } from "../auth/internal-api-key.guard";
import { LeadsController } from "./leads.controller";
import { LeadsService } from "./leads.service";

@Module({
  controllers: [LeadsController],
  providers: [LeadsService, InternalApiKeyGuard],
})
export class LeadsModule {}

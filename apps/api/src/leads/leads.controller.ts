import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import { InternalApiKeyGuard } from "../auth/internal-api-key.guard";
import { CreateLeadDto } from "./dto/create-lead.dto";
import { LeadsService } from "./leads.service";

@Controller("leads")
export class LeadsController {
  constructor(private readonly leads: LeadsService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(InternalApiKeyGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  async create(@Body() input: CreateLeadDto) {
    if (input.officePhone) return { accepted: true };

    const lead = await this.leads.create(input);
    return { accepted: true, id: lead.id };
  }

  @Get()
  @UseGuards(InternalApiKeyGuard)
  @Throttle({ default: { limit: 60, ttl: 60_000 } })
  findAll() {
    return this.leads.findAll();
  }
}

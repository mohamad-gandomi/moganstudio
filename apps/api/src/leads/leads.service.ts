import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateLeadDto } from "./dto/create-lead.dto";

@Injectable()
export class LeadsService {
  constructor(private readonly prisma: PrismaService) {}

  create(input: CreateLeadDto) {
    return this.prisma.lead.create({
      data: {
        name: input.name,
        email: input.email,
        companyWebsite: input.companyWebsite,
        existingWebsiteUrl: input.existingWebsiteUrl,
        message: input.message,
        budget: input.budget,
        timeline: input.timeline,
      },
    });
  }

  findAll() {
    return this.prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 250,
    });
  }
}

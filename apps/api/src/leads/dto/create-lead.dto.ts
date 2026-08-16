import { Transform } from "class-transformer";
import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  MaxLength,
} from "class-validator";

const trim = ({ value }: { value: unknown }) =>
  typeof value === "string" ? value.trim() : value;

export const budgets = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,000",
  "$2,000–$4,000",
  "$4,000+",
  "Not sure yet",
] as const;

export const timelines = ["ASAP", "1–2 weeks", "2–4 weeks", "1–2 months", "Flexible"] as const;

export class CreateLeadDto {
  @Transform(trim)
  @IsString()
  @Length(2, 100)
  name!: string;

  @Transform(({ value }: { value: unknown }) =>
    typeof value === "string" ? value.trim().toLowerCase() : value,
  )
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @Transform(trim)
  @IsString()
  @Length(2, 300)
  companyWebsite!: string;

  @Transform(trim)
  @IsOptional()
  @IsUrl({ require_protocol: true })
  @MaxLength(500)
  existingWebsiteUrl?: string;

  @Transform(trim)
  @IsString()
  @Length(20, 5000)
  message!: string;

  @IsOptional()
  @IsIn(budgets)
  budget?: (typeof budgets)[number];

  @IsOptional()
  @IsIn(timelines)
  timeline?: (typeof timelines)[number];

  @IsOptional()
  @IsString()
  @MaxLength(0)
  officePhone?: string;
}

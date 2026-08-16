type Environment = Record<string, string | undefined>;

export function validateEnvironment(config: Environment): Environment {
  const required = ["DATABASE_URL", "INTERNAL_API_KEY"] as const;
  const missing = required.filter((key) => !config[key]?.trim());

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }

  if ((config.INTERNAL_API_KEY?.length ?? 0) < 32) {
    throw new Error("INTERNAL_API_KEY must contain at least 32 characters.");
  }

  return config;
}

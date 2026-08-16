import { Injectable } from "@nestjs/common";
import { ThrottlerGuard } from "@nestjs/throttler";
import type { Request } from "express";

@Injectable()
export class ClientAwareThrottlerGuard extends ThrottlerGuard {
  protected getTracker(request: Request): Promise<string> {
    const forwardedClient = request.header("x-client-id");
    return Promise.resolve(
      forwardedClient && /^[a-f0-9]{64}$/.test(forwardedClient)
        ? forwardedClient
        : (request.ip ?? request.socket.remoteAddress ?? "unknown"),
    );
  }
}

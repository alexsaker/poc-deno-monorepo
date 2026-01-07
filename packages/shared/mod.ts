import * as log from "@std/log";

export function greet(name: string): string {
  const message = `Bonjour, ${name} 👋`;
  log.info(`Greet called with: ${name}`);
  return message;
}

export function sum(a: number, b: number): number {
  return a + b;
}

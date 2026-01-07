import * as log from "@std/log";

export function greet(name: string): string {
  const message = `Hello, ${name} 👋`;
  log.info(`Greet function called with: ${name}`);
  return message;
}

export function sum(a: number, b: number): number {
  return a + b;
}

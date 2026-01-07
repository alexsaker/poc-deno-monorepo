/**
 * @fileoverview Interactive CLI application for greeting users and performing addition.
 * This module demonstrates the use of Cliffy prompts for interactive user input.
 * @module packages/cli/main
 */

import { greet, sum } from "@shared/mod.ts";

import { Confirm, Input, Number, prompt, Select } from "@cliffy/prompt";

import { load } from "@std/dotenv";

const env = await load({
  // optional: choose a specific path (defaults to ".env")
  envPath: ".env",
  // optional: also export to the process environment (so Deno.env can read it)
  export: true,
});

console.log(env.GREETING);
console.log(Deno.env.get("GREETING"));
/**
 * Main entry point for the CLI application.
 * Prompts the user for their name, favorite language, and two numbers to add.
 * Then greets the user and displays the sum of the two numbers.
 */
if (import.meta.main) {
  /**
   * Collects user input through interactive prompts.
   * @type {Object} answers - The collected user responses
   * @property {string} name - The user's name
   * @property {string} lang - The user's favorite language (Deno, Node, or Bun)
   * @property {number} firstNumber - The first number to add
   * @property {number} secondNumber - The second number to add
   * @property {boolean} confirm - Confirmation to continue
   */
  const answers = await prompt([
    {
      name: "name",
      message: "What's your name?",
      type: Input,
    },
    {
      name: "lang",
      message: "Favorite language?",
      type: Select,
      options: ["Deno", "Node", "Bun"],
    },
    {
      name: "firstNumber",
      message: "Please enter the first number to add:",
      type: Number,
      default: 0,
    },
    {
      name: "secondNumber",
      message: "Please enter the second number to add:",
      type: Number,
      default: 0,
    },
    {
      name: "confirm",
      message: "Continue?",
      type: Confirm,
      default: true,
    },
  ]);
  console.log(answers);

  /** @type {string} The user's name or default value "Monde" */
  const name = answers.name ?? "Monde";
  console.log(greet(name));

  /** @type {number} The first number from user input or default 0 */
  const a = answers.firstNumber ?? 0;
  /** @type {number} The second number from user input or default 0 */
  const b = answers.secondNumber ?? 0;
  console.log(`${a} + ${b} = ${sum(a, b)}`);
}

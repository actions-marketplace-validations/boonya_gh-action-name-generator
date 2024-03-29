import * as core from '@actions/core';
import { uniqueNamesGenerator, adjectives, colors, animals, names } from 'unique-names-generator';
import {z} from 'zod';

const ConfigShape = z.object({
  separator: z.string().optional(),
  length: z.string().optional().transform((v) => Number(v) || undefined),
  style: z.enum(['lowerCase', 'upperCase', 'capital']).optional(),
  seed: z.union([z.string(), z.number()]).optional(),
});

try {
  const config = ConfigShape.parse({
    separator: core.getInput('separator', {trimWhitespace: false}),
    length: core.getInput('length'),
    style: core.getInput('style'),
    seed: core.getInput('seed'),
  });

  console.log(`Options: ${JSON.stringify(config)}`);

  const output = uniqueNamesGenerator({dictionaries: [adjectives, colors, animals, names], ...config});

  console.log(`Generated name: ${output}`);

  core.setOutput('name', output);
} catch (error) {
  const message = (error instanceof Error)
    ? error.message
    : 'Something went wrong.';
  core.setFailed(message);
}

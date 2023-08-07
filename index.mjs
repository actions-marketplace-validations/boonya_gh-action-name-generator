import core from '@actions/core';
import { uniqueNamesGenerator, adjectives, colors, animals, names } from 'unique-names-generator';

try {
    const config = {
        separator: core.getInput('separator'),
        length: core.getInput('length'),
        style: core.getInput('style'),
        seed: core.getInput('seed'),
    }
    console.log(`Options: ${JSON.stringify(config)}`)
    const output = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals, names],
      ...config
    })
    console.log(`Generated name: ${output}`)
    core.setOutput('generated_name', output)
    core.exportVariable('generated_name', output)
} catch (error) {
    core.setFailed(error.message)
}

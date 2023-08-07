# Unique Name Generator Github Action

This action creates a random name and outputs it to Github Actions environment variables. [unique-names-generator](https://github.com/andreasonny83/unique-names-generator) is used to generate the random names.

## Inputs

### `separator`

A string separator to be used for separate the words generated.
The default separator is set to `_`.

Required: `false`
Type: `string`
Default: `_`

### `length`

The default value is set to 3 and it will return a name composed of 3 words.
This values must be equal or minor to the number of dictionaries defined (`3` by default).
Setting the length to a value of 4 will throw an error when only 3 dictionaries are provided.

Required: `false`
Type: `number`
Default: `3`

### `style`

The default value is set to lowerCase and it will return a lower case name.
By setting the value to upperCase, the words, will be returned with all the letters in upper case format.
The capital option will capitalize each word of the unique name generated.

Required: `false`
Type: `lowerCase` | `upperCase` | `capital`
Default: `lowerCase`

### `seed`

A seed is used when wanting to deterministically generate a name.
As long as the provided seed is the same the generated name will also always be the same.

Required: `false`
Type: `number` | `string`
Default: ``

## Outputs

### `name`

The generated random name output.

## Example usage

```yaml
- uses: boonya/gh-action-name-generator@v1
```

```yaml
- uses: boonya/gh-action-name-generator@v1
  id: generator
- run: echo "Generated name is ${{ steps.generator.outputs.name }}."
```

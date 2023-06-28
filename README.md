# astro-code-blocks

Beautiful code blocks for your Astro site
This is a custom version of the integration from Astro Docs

## Quick Install

The astro add command-line tool automates the installation for you. Run one of the following commands in a new terminal window. (If you aren’t sure which package manager you’re using, run the first command.) Then, follow the prompts, and type “y” in the terminal (meaning “yes”) for each one.

```sh
# Using NPM
npx astro add @thewebforge/astro-code-blocks
# Using Yarn
yarn astro add @thewebforge/astro-code-blocks
# Using PNPM
pnpm astro add @thewebforge/astro-code-blocks
```

If you run into any issues, feel free to report them to us on GitHub and try the manual installation steps below.

## Manual Install

First, install the @thewebforge/astro-code-blocks package using your package manager. If you’re using npm or aren’t sure, run this in the terminal:

```sh
npm install @thewebforge/astro-code-blocks
```

If you’re using Yarn or PNPM, run this instead:

```sh
# Using Yarn
yarn add @thewebforge/astro-code-blocks
# Using PNPM
pnpm add @thewebforge/astro-code-blocks
```

Next, open your project’s astro.config.mjs file and add the following to the plugins array:

**astro.config.mjs**

```js
import codeblocks from "@thewebforge/astro-code-blocks";

export default defineConfig({
  integrations: [
    codeblocks(),
  ],
});
```
> **Warning**
> If you alreday installed Astro MDX integration. Or another integration that uses MDX, you need to make sure that the codeblocks integration comes before MDX in the integrations array. Otherwise, it will not work.

### Config

You can configure the code blocks integration by passing an object to the codeblocks function.

**astro.config.mjs**
```js
integrations: [
    codeblocks({
        // Copy Button Options
        copyButtonTitle: 'Copy',
        copyButtonTooltip: 'Copied to clipboard',
    }),
  ],
```

 ## Usage

 With the integration installed, the <CodeBlock> component will automatically be imported and applied ot the code blocks you create in your `.mdx` files.

 ### Add a title to your code block

You can add a title to your code block by adding a `title` prop to the code block

```mdx
    ```js title="myscript.js"
        console.log('Hello World')
    ```
```
> **Note**
> The title prop is optional. If you don't add it, the code block will not have a title.

### Highlight lines

You can highlight lines in your code block by adding a prop to the code blocks as a list of 
comma separated numbers in curly brackets. For example:
- `{1}` will highlight line 1
- `{1,3}` will highlight lines 1 and 3
- `{2-5, 7}` will highlight lines 1 to 5(not included) and 7

```mdx
    ```js {1,3,5}
        console.log('Hello World')
        console.log('Hello World')
        console.log('Hello World')
        console.log('Hello World')
        console.log('Hello World')
    ```
```

### Highlight strings

You can highlight strings in your code block by adding a prop to the code blocks as a regular expression. The following example will highlight all occurences of "astro":

- `/astro/` will highlight all occurences of "astro"
- `/\w*$/` will highlight the last word of each line

```mdx
  ```sh /astro/
  # Using NPM
  npx astro add @thewebforge/astro-code-blocks
  # Using Yarn
  yarn astro add @thewebforge/astro-code-blocks
  # Using PNPM
  pnpm astro add @thewebforge/astro-code-blocks
  ```
```

### Insertions and Deletions

You can highlight insertions and deletions in your code block by adding `ins` and/or `del` props to the code blocks as a list of lines in curly brackets. For example:

```mdx
  ```sh ins={3,4} del={5,6}
  # Using NPM
  npx astro add @thewebforge/astro-code-blocks
  # Using Yarn
  yarn astro add @thewebforge/astro-code-blocks
  # Using PNPM
  pnpm astro add @thewebforge/astro-code-blocks
  ```
```


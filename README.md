# eslint-config

A custom ESLint configuration for maintaining consistent code style and catching potential errors.

> [!CAUTION]
> This package is still under active development, "API" changes occur frequently. Also note that "eslint-config-prettier" is already included!

## Installation

```bash
pnpm i -D @dkupinic/eslint-config
```

## Usage

### General

```javascript
import config from "@dkupinic/eslint-config";

export default [...config];
```

### Nuxt

```javascript
import withNuxt from "./.nuxt/eslint.config.mjs";
import config from "@dkupinic/eslint-config";

export default withNuxt(...config);
```

## License

MIT

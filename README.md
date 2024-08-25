# eslint-config

A custom ESLint configuration for maintaining consistent code style and catching potential errors.

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

# Films Project (TMDB)

A React application for browsing movies from The Movie Database (TMDB): categories, search, filters, and favorites.

**Features**

- Browse categories: popular, top rated, upcoming, now playing
- Search movies by query
- Filter by genres, rating range, and sort order
- Movie details page
- Favorites list persisted in localStorage
- Light/dark theme toggle

**Tech Stack**

- React 19 + TypeScript
- Vite
- Redux Toolkit + RTK Query
- React Router
- Zod
- Prettier, ESLint, Stylelint

**Getting Started**

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Create `.env.local` in the project root:
   ```bash
   VITE_API_KEY=your_tmdb_api_key
   VITE_TOKEN=your_tmdb_bearer_token
   ```
3. Start the dev server:
   ```bash
   pnpm dev
   ```

**Scripts**

- `pnpm dev` — start dev server
- `pnpm build` — typecheck + production build
- `pnpm preview` — preview production build
- `pnpm lint` / `pnpm lint:fix` — run/fix ESLint
- `pnpm format` / `pnpm format:fix` — run/fix Prettier
- `pnpm stylelint` / `pnpm stylelint:fix` — run/fix Stylelint

**Notes**

- Favorites and theme are stored in localStorage.

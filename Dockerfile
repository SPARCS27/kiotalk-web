FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY ./pnpm-workspace.yaml ./pnpm-lock.yaml ./package.json ./
COPY ./apps/web/package.json ./apps/web/package.json
COPY ./packages/eslint-config/package.json ./packages/eslint-config/package.json
COPY ./packages/icons/package.json ./packages/icons/package.json
COPY ./packages/styles/package.json ./packages/styles/package.json
COPY ./packages/typescript-config/package.json ./packages/typescript-config/package.json

RUN pnpm install

COPY ./ ./

RUN pnpm --filter @myorg/web run build

EXPOSE 4173

CMD ["pnpm", "run", "preview"]

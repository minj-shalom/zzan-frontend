FROM node:20 AS base
WORKDIR /zzan

ARG NEXT_PUBLIC_API_ENDPOINT
ARG NEXT_PUBLIC_GITHUB_URL
ARG NEXT_PUBLIC_CONTACT_EMAIL

ENV NEXT_PUBLIC_API_ENDPOINT=${NEXT_PUBLIC_API_ENDPOINT}
ENV NEXT_PUBLIC_GITHUB_URL=${NEXT_PUBLIC_GITHUB_URL}
ENV NEXT_PUBLIC_CONTACT_EMAIL=${NEXT_PUBLIC_CONTACT_EMAIL}

COPY package.json package-lock.json ./
RUN yarn install && yarn cache clean

COPY . .

FROM base AS builder
RUN yarn build

EXPOSE 3000

FROM node:20

WORKDIR /zzan

COPY --from=builder /zzan/.next ./.next
COPY --from=builder /zzan/node_modules ./node_modules
COPY --from=builder /zzan/public ./public

FROM builder AS development
CMD ["yarn", "start:dev"]

FROM builder AS production
CMD ["yarn", "start"]
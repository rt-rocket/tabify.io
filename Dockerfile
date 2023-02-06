FROM denoland/deno:latest

EXPOSE 5432

WORKDIR /tabify.io

USER deno

COPY . ./

RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]
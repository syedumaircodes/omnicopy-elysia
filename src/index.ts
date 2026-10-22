import { Elysia } from "elysia";

const campaigns = [
  {
    campaignId: 1,
    name: "Summer sale",
    dueDate: new Date(),
    createdAt: new Date(),
  },
  {
    campaignId: 2,
    name: "Winter sale",
    dueDate: new Date(),
    createdAt: new Date(),
  },
];

const app = new Elysia({ prefix: "/api/v1" })
  .get("/campaigns", () => {
    return { data: campaigns };
  })
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

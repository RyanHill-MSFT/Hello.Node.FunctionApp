import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { helloController } from "./controller/HomeController";

app.http("helloWorld", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: helloController.hello.bind(helloController),
});

// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8e30098b42713e010ae909ef50d171a7@o925438.ingest.us.sentry.io/4508301413253120",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

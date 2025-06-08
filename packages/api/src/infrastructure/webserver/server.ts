import express from "express";
import cors from "cors";
import { buildBeans } from "../config/service-locator";
import sdkConfigRouter from "../../interfaces/routes/SdkConfig";
import { adminRouter } from "../../interfaces/routes/Admin";
import organizationRouter from "../../interfaces/routes/Organisation";
import apiKeyRouter from "../../interfaces/routes/ApiKey";
import consentEventRouter from "../../interfaces/routes/ConsentEvent";
import userSessionRouter from "../../interfaces/routes/UserSession";
import { connectMongo } from "../db/mongoose/mongoose";

// Add other route imports as needed


// --- Create and configure Express server ---
export async function init() {
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Attach your service locator (dependency injection pattern)
  app.locals = buildBeans();  

  // --- Register all routes ---
  app.use("/sdk-configs", sdkConfigRouter);
  app.use("/admin-users", adminRouter);
  app.use("/organizations", organizationRouter);
  app.use("/api-keys", apiKeyRouter);
  app.use("/consent-events", consentEventRouter);
  app.use("/user-sessions", userSessionRouter);
  // ...add more routes as your app grows

  return app;
}

// --- Only start server if run directly (not when imported for tests) ---
if (require.main === module) {
  (async () => {
    const app = await init();
    const PORT = process.env.PORT || 5000;
    await connectMongo(process.env.MONGO_URL!)
    app.listen(PORT, () => {
      console.log(`ConsentLayer backend running on port ${PORT}`);
    });
  })();
}

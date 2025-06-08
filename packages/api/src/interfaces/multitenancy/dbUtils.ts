// src/infrastructure/multitenancy/dbUtils.ts
import { PrismaClient } from "@prisma/client";
import { Client } from "pg";
import { execSync } from "child_process";
import { v4 as uuidv4 } from "uuid";

/**
 * Creates a new Postgres database for an organization.
 * @param dbName The new org DB name (e.g. org_abcd123)
 * @param dbHost Host of your Postgres server
 * @param dbUser Superuser or privileged user (e.g. "postgres")
 * @param dbPassword Password
 * @param dbPort Port (default 5432)
 */
export async function createDatabaseForOrg(
  dbName: string,
  dbHost = "localhost",
  dbUser = "postgres",
  dbPassword = "your_pg_password",
  dbPort = 5432
): Promise<void> {
  const client = new Client({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    port: dbPort,
    database: "postgres", // Connect to default DB
  });

  await client.connect();
  // Safe: don't interpolate dbName directly in real world (sanitize or use $1 param if possible)
  await client.query(`CREATE DATABASE "${dbName}"`);
  await client.end();
}

/**
 * Run Prisma migrations for the new org DB.
 * You need to have the proper schema.prisma and migration files.
 */
export async function runMigrationsOnOrgDb(
  dbName: string,
  dbHost = "localhost",
  dbUser = "postgres",
  dbPassword = "your_pg_password",
  dbPort = 5432
): Promise<void> {
  // Build the connection string for the new DB
  const dbUrl = `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

  // Call Prisma CLI to run migrations on the new DB
  execSync(
    `npx prisma migrate deploy --schema=prisma/schema.prisma --datasource-provider postgresql`,
    {
      env: { ...process.env, DATABASE_URL: dbUrl },
      stdio: "inherit", // So you see logs
    }
  );
}

// The org parameter should have dbHost, dbUser, dbPassword, dbName, dbPort
export function getPrismaForOrg(
  dbHost:string,
  dbUser:string,
  dbPassword:string,
  dbName:string,
  dbPort:number
) {
  // Build the connection URL for Prisma
  const url = `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort ?? 5432}/${dbName}`;

  // Create a new Prisma client for this org's DB
  return new PrismaClient({
    datasources: {
      db: {
        url,
      }
    }
  });
}

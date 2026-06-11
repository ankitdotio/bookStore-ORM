import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

import type {
  InferInsertModel,
  InferSelectModel
} from "drizzle-orm";


export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export type InsertUser =
  InferInsertModel<typeof usersTable>;

export type SelectUser =
  InferSelectModel<typeof usersTable>;
  
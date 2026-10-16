import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const customers = sqliteTable('customers',{id:text('id').primaryKey(),owner:text('owner').notNull(),name:text('name').notNull(),email:text('email').notNull(),plan:text('plan').notNull(),status:text('status').notNull(),created:integer('created').notNull()});
export const settings = sqliteTable('settings',{owner:text('owner').primaryKey(),workspace:text('workspace').notNull(),plan:text('plan').notNull(),cycle:text('cycle').notNull()});

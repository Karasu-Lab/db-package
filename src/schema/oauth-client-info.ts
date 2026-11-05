import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { oauthClients } from "./oauth-clients";
import { users } from "./users";

/**
 * Presentation info for an OAuth client, keyed by the client's id: the
 * name, icon and description the developer settings show for the
 * client, plus the user who authored it. The authorization server's
 * own `oauth_client` record stays the source of truth for the client
 * itself; this table only holds what the settings display references.
 */
export const oauthClientInfo = pgTable("oauth_client_info", {
    clientId: text("client_id")
        .primaryKey()
        .references(() => oauthClients.clientId, { onDelete: "cascade" }),
    name: text("name").notNull(),
    authorId: varchar("author_id", { length: 128 }).references(() => users.id, {
        onDelete: "set null",
    }),
    iconUrl: text("icon_url"),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
});

export type OAuthClientInfo = typeof oauthClientInfo.$inferSelect;
export type NewOAuthClientInfo = typeof oauthClientInfo.$inferInsert;

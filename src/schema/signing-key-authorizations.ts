import { index, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const signingKeyAuthorizations = pgTable(
    "signing_key_authorization",
    {
        id: text("id").primaryKey(),
        userId: varchar("user_id", { length: 128 })
            .notNull()
            .unique()
            .references(() => users.id, { onDelete: "cascade" }),
        accessToken: text("access_token"),
        refreshToken: text("refresh_token"),
        accessTokenExpiresAt: timestamp("access_token_expires_at"),
        refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
        scope: text("scope"),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .defaultNow()
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (t) => [index("signing_key_authorization_userId_idx").on(t.userId)],
);

export type SigningKeyAuthorization =
    typeof signingKeyAuthorizations.$inferSelect;
export type NewSigningKeyAuthorization =
    typeof signingKeyAuthorizations.$inferInsert;

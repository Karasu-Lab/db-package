import { createId } from "@paralleldrive/cuid2";
import {
    bigint,
    boolean,
    index,
    pgTable,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { users } from "./users";

export const tenantSigningKeys = pgTable(
    "tenant_signing_key",
    {
        id: text("id")
            .primaryKey()
            .$defaultFn(() => createId()),
        organizationId: text("organization_id")
            .notNull()
            .references(() => organizations.id, { onDelete: "cascade" }),
        createdByUserId: varchar("created_by_user_id", {
            length: 128,
        }).references(() => users.id, { onDelete: "set null" }),
        name: text("name").notNull(),
        publicKey: text("public_key").notNull(),
        publicKeyFingerprint: text("public_key_fingerprint").notNull(),
        githubKeyId: bigint("github_key_id", { mode: "number" }),
        enabled: boolean("enabled").default(true).notNull(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .defaultNow()
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (t) => [
        index("tenant_signing_key_organizationId_idx").on(t.organizationId),
    ],
);

export type TenantSigningKey = typeof tenantSigningKeys.$inferSelect;
export type NewTenantSigningKey = typeof tenantSigningKeys.$inferInsert;

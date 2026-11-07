import { createId } from "@paralleldrive/cuid2";
import { bigint, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { organizations } from "./organizations";

export const tenantNpmConfigurations = pgTable("tenant_npm_configuration", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => createId()),
    organizationId: text("organization_id")
        .notNull()
        .unique()
        .references(() => organizations.id, { onDelete: "cascade" }),
    npmRepositoryId: bigint("npm_repository_id", { mode: "number" }).notNull(),
    npmRepositoryFullName: text("npm_repository_full_name").notNull(),
    workflowTemplateRepositoryId: bigint("workflow_template_repository_id", {
        mode: "number",
    }).notNull(),
    workflowTemplateRepositoryFullName: text(
        "workflow_template_repository_full_name",
    ).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
});

export type TenantNpmConfiguration =
    typeof tenantNpmConfigurations.$inferSelect;
export type NewTenantNpmConfiguration =
    typeof tenantNpmConfigurations.$inferInsert;

# Migration `20200422175603-init`

This migration has been generated at 4/22/2020, 5:56:03 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Game" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "date_completed" text  NOT NULL DEFAULT '',
    "id" text  NOT NULL ,
    "system" text  NOT NULL DEFAULT '',
    "title" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200422175603-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://postgres:docker@localhost:5432/pg-docker?schema=public"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Game {
+  id String @default(cuid()) @id
+  createdAt DateTime @default(now()) 
+  updatedAt DateTime @updatedAt
+  title  String 
+  system   String
+  date_completed  String
+}
```



import { Database } from "https://deno.land/x/sqlite3@0.10.0/mod.ts";

export default new Database("dashpi.db", { create: true });

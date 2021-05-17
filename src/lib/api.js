import { createClient } from "@supabase/supabase-js";
import {
	SUPABASE_API_KEY,
	SUPABASE_API_URL,
} from "./constants";

const supabase = createClient(
	`${SUPABASE_API_URL}`,
	`${SUPABASE_API_KEY}`,
);

export default supabase;

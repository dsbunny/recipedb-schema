import * as z from "zod";
export declare const SqliteDateSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
export declare const IsoDateSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;

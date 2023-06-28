import { z } from "zod";

const UserConfigSchema = z.object({
    copyButtonTitle: z
    .string()
    .describe(
      "Title of the copy button."
    ),
    copyButtonTooltip: z
    .string()
    .describe(
        "Tooltip of the copy button. Will appear once the content is copied to the clipboard."
    ),
});

export const CodeBlocksConfigSchema = UserConfigSchema.strict();

export type CodeBlocksConfig = z.infer<typeof CodeBlocksConfigSchema>;
export type CodeBlocksUserConfig = z.input<typeof CodeBlocksConfigSchema>;
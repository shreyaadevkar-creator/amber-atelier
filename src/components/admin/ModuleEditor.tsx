"use client";

import { useActionState } from "react";
import { updateModuleAction, type ModuleFormState } from "@/app/admin/courses/[slug]/modules/[moduleId]/actions";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ModuleEditor({
  moduleId,
  slug,
  title,
  subtitle,
  objectives,
  lessonHtml,
  activityTitle,
  activityHtml,
}: {
  moduleId: string;
  slug: string;
  title: string;
  subtitle: string;
  objectives: string[];
  lessonHtml: string;
  activityTitle: string | null;
  activityHtml: string | null;
}) {
  const [state, formAction, pending] = useActionState<ModuleFormState, FormData>(
    updateModuleAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="moduleId" value={moduleId} />
      <input type="hidden" name="slug" value={slug} />
      <Input label="Title" name="title" defaultValue={title} required />
      <Input label="Subtitle" name="subtitle" defaultValue={subtitle} required />
      <Textarea
        label="Objectives (one per line)"
        name="objectives"
        defaultValue={objectives.join("\n")}
        rows={4}
      />
      <Textarea
        label="Lesson content (HTML)"
        name="lessonHtml"
        defaultValue={lessonHtml}
        rows={10}
        hint="Raw HTML, rendered inside the .amber-course-content styling."
      />
      <Input label="Activity title (optional)" name="activityTitle" defaultValue={activityTitle ?? ""} />
      <Textarea
        label="Activity content (HTML, optional)"
        name="activityHtml"
        defaultValue={activityHtml ?? ""}
        rows={4}
      />
      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}
      {state?.success ? <p className="text-[14px] text-vetiver">Saved.</p> : null}
      <Button type="submit" disabled={pending} className="self-start">
        {pending ? "Saving…" : "Save Module"}
      </Button>
    </form>
  );
}

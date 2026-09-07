"use client";

import { useActionState } from "react";
import { updateCourseAction, type CourseFormState } from "@/app/admin/courses/[slug]/actions";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function CourseEditor({
  courseId,
  slug,
  title,
  subtitle,
  tagline,
  description,
  priceRupees,
  isPublished,
}: {
  courseId: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  priceRupees: number;
  isPublished: boolean;
}) {
  const [state, formAction, pending] = useActionState<CourseFormState, FormData>(
    updateCourseAction,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="courseId" value={courseId} />
      <input type="hidden" name="slug" value={slug} />
      <Input label="Title" name="title" defaultValue={title} required />
      <Input label="Subtitle" name="subtitle" defaultValue={subtitle} required />
      <Input label="Tagline" name="tagline" defaultValue={tagline} required />
      <Textarea label="Description" name="description" defaultValue={description} rows={4} required />
      <Input label="Price (INR)" name="priceRupees" type="number" min={0} defaultValue={priceRupees} required />
      <label className="flex items-center gap-2 text-[14px] text-ink">
        <input type="checkbox" name="isPublished" defaultChecked={isPublished} />
        Published on the public site
      </label>
      {state?.error ? <p className="text-[14px] text-redsoil">{state.error}</p> : null}
      {state?.success ? <p className="text-[14px] text-vetiver">Saved.</p> : null}
      <Button type="submit" disabled={pending} className="self-start">
        {pending ? "Saving…" : "Save Course"}
      </Button>
    </form>
  );
}

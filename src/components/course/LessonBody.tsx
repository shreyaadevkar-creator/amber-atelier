export function LessonBody({ html }: { html: string }) {
  return <div className="amber-course-content" dangerouslySetInnerHTML={{ __html: html }} />;
}

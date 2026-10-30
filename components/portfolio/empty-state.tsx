export function EmptyState({ message }: { message: string }) {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state-mark" aria-hidden="true">+</span>
      <p>{message}</p>
    </div>
  )
}

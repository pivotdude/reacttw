import { IComment } from '../model';

export function CommentList({ comments }: { comments: IComment[] }) {
  return (
    <div className="flex-grow overflow-y-auto mb-4">
      {comments.map((comment) => (
        <div key={comment.id} className="mb-2">
          <p className="font-semibold">{comment.user}</p>
          <p>{comment.text}</p>
          <p className="text-xs text-gray-500">
            {new Date(comment.date).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

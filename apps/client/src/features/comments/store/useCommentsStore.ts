import { create } from 'zustand';
import { IComment, PartialIComment } from '../models';

interface IPhotoDetails {
  comments: IComment[];
  setComments: (data: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: any) => void;
  isNewCommentsLoading: boolean;
  setIsNewCommentsLoading: (loading: boolean) => void;
  updateComment: (commentId: number, updateFn: (comment: IComment) => PartialIComment) => void;
}

export const useCommentsStore = create<IPhotoDetails>((set) => ({
  comments: [],
  setComments: (comments: IComment[]) => set({ comments }),
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  isNewCommentsLoading: false,
  setIsNewCommentsLoading: (loading: boolean) =>
    set({ isNewCommentsLoading: loading }),
  error: null,
  setError: (error: any) => set({ error }),

  updateComment: (commentId: number, updateFn: (comment: IComment) => PartialIComment) =>
    set((state) => {
      const updatedComments = state.comments.map((comment: IComment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            ...updateFn(comment)
          };
        }
        return comment;
      });
      return { comments: updatedComments };
    }),
}));

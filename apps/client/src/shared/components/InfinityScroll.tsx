import React, { useRef, useCallback } from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode;
  loadMore: () => void;
  hasMore: boolean;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  loadMore,
  hasMore,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore, loadMore],
  );

  const setRefs = (node: HTMLDivElement) => {
    lastElementRef(node);
  };

  return (
    <div>
      {children}
      {hasMore && <div ref={setRefs} />}
    </div>
  );
};

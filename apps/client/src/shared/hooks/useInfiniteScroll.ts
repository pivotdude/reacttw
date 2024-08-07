import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll(
  fetchData: (offset: number, limit: number, addPrevComments?: boolean) => void,
  portion: number,
) {
  const scrollEl = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    if (!scrollEl.current) return;
    scrollEl.current?.addEventListener('scroll', scrollHandle);

    return () => {
      scrollEl.current?.removeEventListener('scroll', scrollHandle);
    };
  }, [scrollEl.current]);

  useEffect(() => {
    if (offset !== 0) {
      fetchData(offset, portion);
    }
  }, [offset]);

  const scrollHandle = () => {
    if (!scrollEl.current) return;

    const { scrollHeight, scrollTop, clientHeight } = scrollEl.current;

    if (scrollTop + clientHeight >= scrollHeight) {
      setOffset((prev) => prev + portion);
    }
  };

  return { scrollEl, setOffset, offset };
}

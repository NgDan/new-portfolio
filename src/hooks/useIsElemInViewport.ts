import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

export default function useIsElemInViewport(
  id: string,
  tolerance: number = 0
): { isInViewport: boolean; distFromTop: number } {
  const [elem, setElem] = useState<Element | null>(null);
  useEffect(() => {
    // using querySelector instead of a ref to avoid drilling props
    // or building a global state management solution like redux
    // or context + useReducer since it's not really worth it
    // for a project this small
    const element = document.querySelector(`#${id}`);
    if (element != null) {
      setElem(element);
    }
  }, [id]);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const [distFromTop, setDistFromTop] = useState<number>(0);
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (
        elem?.getBoundingClientRect?.()?.y != null &&
        window.pageYOffset != null &&
        elem?.getBoundingClientRect?.().height != null
      ) {
        setDistFromTop(
          elem?.getBoundingClientRect?.()?.y + window.pageYOffset - tolerance
        );
        setIsInViewport(window.pageYOffset + tolerance > distFromTop);
      }
    }, 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [distFromTop, elem, tolerance]);
  return {
    isInViewport,
    distFromTop: distFromTop,
  };
}

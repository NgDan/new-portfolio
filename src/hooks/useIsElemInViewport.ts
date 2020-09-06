import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

export default function useIsElemInViewport(
  id: string,
  tolerance: number = 0
): boolean {
  const [elem, setElem] = useState<Element | null>(null);
  useEffect(() => {
    // console.log(window.pageYOffset);
    const element = document.querySelector(`#${id}`);
    if (element != null) {
      setElem(element);
    }
  }, [id]);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (
        elem?.getBoundingClientRect?.()?.y != null &&
        window.pageYOffset != null
      ) {
        setIsInViewport(
          window.pageYOffset + window.innerHeight + tolerance >
            elem?.getBoundingClientRect?.()?.y + window.pageYOffset
        );
      }
    }, 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elem, tolerance]);
  return isInViewport;
}

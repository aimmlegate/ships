import { useEffect } from 'react';

import { useNationsQuery } from '../../hooks/reactQuery/useNationsQuery';
import { NationSelector } from '../NationSelector';

export const Root = () => {
  const { data } = useNationsQuery();

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.onmousedown = () => {
        let pageX = 0;
        let pageY = 0;

        document.onmousemove = (e) => {
          if (pageX !== 0) {
            root.scrollLeft = root.scrollLeft + (pageX - e.pageX);
          }
          if (pageY !== 0) {
            root.scrollTop = root.scrollTop + (pageY - e.pageY);
          }
          pageX = e.pageX;
          pageY = e.pageY;
        };

        root.onmouseup = () => {
          document.onmousemove = null;
          root.onmouseup = null;
        };

        root.ondragstart = () => {
          return false;
        };
      };
    }
  }, []);

  if (!data) {
    return null;
  }

  return <NationSelector nations={data} />;
};

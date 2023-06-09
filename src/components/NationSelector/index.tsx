import { useState } from 'react';

import { Nation, NationName } from '../../utils/types';
import { AppLayout } from '../AppLayout';
import { LanguageSelect } from '../LanguageSelect';
import { NationTree } from '../NationTree';
import { NationsMenu } from './NationsMenu';

interface Props {
  nations: Nation[];
}

export const NationSelector: React.FC<Props> = ({ nations }) => {
  const [nation, setNation] = useState<NationName>(nations[0].name);

  const handleSwitch = (n: NationName) => {
    setNation(n);
    document.getElementById('root')?.scrollTo({ top: 0, left: 0 });
  };
  return (
    <AppLayout
      sidebar={
        <>
          <div className='p-3 pb-10'>
            <LanguageSelect />
          </div>
          <NationsMenu active={nation} nations={nations} handleSwitch={handleSwitch} />
        </>
      }
      content={<NationTree nation={nation} />}
    />
  );
};

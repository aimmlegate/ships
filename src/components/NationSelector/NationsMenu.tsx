import cx from 'classnames';

import { MEDIA_PATH } from '../../utils/constants';
import { Nation, NationName } from '../../utils/types';
import { LocalText } from '../LocalText';

interface Props {
  nations: Nation[];
  active: NationName;
  handleSwitch: (n: NationName) => void;
}

export const NationsMenu: React.FC<Props> = ({ nations, handleSwitch, active }) => {
  return (
    <div className="flex flex-col">
      {nations.map((nation) => (
        <button
          key={nation.id}
          disabled={active === nation.name}
          onClick={() => handleSwitch(nation.name)}
          className={cx(
            'flex items-center p-2 h-[40px] mb-1 nation-button-gradient hover:nation-button-gradient-hover',
            { 'nation-button-gradient-active': active === nation.name },
          )}
        >
          <img
            className="w-[35px] pr-2"
            alt={nation.name}
            src={`${MEDIA_PATH}${nation.icons.tiny}`}
          />
          <p
            className={cx('font-medium uppercase', {
              'text-black': active === nation.name,
              'text-white': active !== nation.name,
            })}
          >
            <LocalText>{nation.localization.mark}</LocalText>
          </p>
        </button>
      ))}
    </div>
  );
};

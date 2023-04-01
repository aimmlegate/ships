import cx from 'classnames';

import { MEDIA_PATH } from '../../utils/constants';
import { Nation, NationName } from '../../utils/types';
import { LocalText } from '../LocalText';

interface Props {
  nations: Nation[];
  active: NationName;
  handleSwitch: (n: NationName) => void;
}

function decimalToHex(decimal: number): string {
  return '#' + decimal.toString(16).toUpperCase().padStart(6, '0');
}

export const NationsMenu: React.FC<Props> = ({ nations, handleSwitch, active }) => {
  const activeNation = nations.find((n) => n.name === active);
  return (
    <div className="flex flex-col">
      {activeNation && (
        <div
          className="nation-ascent"
          style={{
            backgroundColor: decimalToHex(activeNation.color),
          }}
        />
      )}
      {nations.map((nation) => (
        <button
          key={nation.id}
          disabled={active === nation.name}
          onClick={() => handleSwitch(nation.name)}
          className={cx('flex items-center p-2 h-[40px] mb-1 nation-button-gradient', {
            'nation-button-gradient-active': active === nation.name,
            'nation-button-gradient': active !== nation.name,
          })}
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

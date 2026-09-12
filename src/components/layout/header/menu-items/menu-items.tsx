import { observer } from 'mobx-react-lite';
import { Localize } from '@deriv-com/translations';
import { MenuItem, Text } from '@deriv-com/ui';

const TraderIcon = () => (
    <svg width='16' height='16' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
        <rect x='6' y='16' width='10' height='16' fill='#EF4444' rx='1.5' />
        <line x1='11' y1='6' x2='11' y2='16' stroke='#EF4444' strokeWidth='2.5' />
        <line x1='11' y1='32' x2='11' y2='36' stroke='#EF4444' strokeWidth='2.5' />
        <rect x='22' y='22' width='10' height='12' fill='#22C55E' rx='1.5' />
        <line x1='27' y1='12' x2='27' y2='22' stroke='#22C55E' strokeWidth='2.5' />
        <line x1='27' y1='34' x2='27' y2='36' stroke='#22C55E' strokeWidth='2.5' />
        <polyline points='6,34 14,24 24,30 34,18' stroke='#FBBF24' strokeWidth='2' strokeLinecap='round' fill='none' />
    </svg>
);

/**
 * Links back to Alphastream's separate Trader app. The two apps are
 * independent Deriv products/codebases on separate domains — this is
 * cross-navigation between them, not an embedded view.
 */
export const MenuItems = observer(() => {
    const trader_url = process.env.TRADER_URL || '';
    if (!trader_url) return null;

    return (
        <MenuItem as='a' className='app-header__menu' href={trader_url} leftComponent={<TraderIcon />}>
            <Text>
                <Localize i18n_default_text='Alphastream Trader' />
            </Text>
        </MenuItem>
    );
});

export const TradershubLink = observer(() => {
    // No default Traders Hub link - add your custom navigation here if needed
    return null;
});

// Create a namespace for MenuItems to include TradershubLink
type MenuItemsType = typeof MenuItems & {
    TradershubLink: typeof TradershubLink;
};

// Assign TradershubLink to MenuItems
(MenuItems as MenuItemsType).TradershubLink = TradershubLink;

export default MenuItems as MenuItemsType;

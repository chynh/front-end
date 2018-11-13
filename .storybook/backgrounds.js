import addonBackgrounds from '@storybook/addon-backgrounds';
import { brandColorsObject } from 'common/styles/styleExports';
import { capitalizeFirstLetter } from 'common/utils/string-utils';

const backgroundsPaletteArray = Object.keys(brandColorsObject).map(name => ({
  name: capitalizeFirstLetter(name),
  value: brandColorsObject[name],
  default: name === 'mist',
}));

const brandingBackgrounds = addonBackgrounds(backgroundsPaletteArray);

export default brandingBackgrounds;

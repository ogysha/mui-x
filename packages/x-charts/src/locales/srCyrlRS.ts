import { imageMimeTypes } from './utils/imageMimeTypes';
import { ChartsLocaleText } from './utils/chartsLocaleTextApi';
import { getChartsLocalization } from './utils/getChartsLocalization';

export const srCyrlRSLocaleText: ChartsLocaleText = {
  /* Overlay */
  loading: 'Учитавање података…',
  noData: 'Нема података за приказивање',

  /* Toolbar */
  zoomIn: 'Увећај',
  zoomOut: 'Умањи',
  toolbarExport: 'Извоз',

  /* Toolbar Export Menu */
  toolbarExportPrint: 'Штампај',
  toolbarExportImage: (mimeType) => `Извези као ${imageMimeTypes[mimeType] ?? mimeType}`,
};

export const srCyrlRS = getChartsLocalization(srCyrlRSLocaleText);

import { imageMimeTypes } from './utils/imageMimeTypes';
import { ChartsLocaleText } from './utils/chartsLocaleTextApi';
import { getChartsLocalization } from './utils/getChartsLocalization';

export const srLatnRSLocaleText: ChartsLocaleText = {
  /* Overlay */
  loading: 'Učitavanje podataka…',
  noData: 'Nema podataka za prikazivanje',

  /* Toolbar */
  zoomIn: 'Uvećaj',
  zoomOut: 'Umanji',
  toolbarExport: 'Izvoz',

  /* Toolbar Export Menu */
  toolbarExportPrint: 'Štampaj',
  toolbarExportImage: (mimeType) => `Izvezi kao ${imageMimeTypes[mimeType] ?? mimeType}`,
};

export const srLatnRS = getChartsLocalization(srLatnRSLocaleText);

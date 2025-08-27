import { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, Localization } from '../utils/getGridLocalization';

export const srCyrlRSGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Нема редова',
  noResultsOverlayLabel: 'Нема резултата.',
  noColumnsOverlayLabel: 'Нема колона',
  noColumnsOverlayManageColumns: 'Управљај колонама',
  // emptyPivotOverlayLabel: 'Add fields to rows, columns, and values to create a pivot table',

  // Density selector toolbar button text
  toolbarDensity: 'Густоћа',
  toolbarDensityLabel: 'Густоћа',
  toolbarDensityCompact: 'Компактно',
  toolbarDensityStandard: 'Стандардно',
  toolbarDensityComfortable: 'Удобно',

  // Columns selector toolbar button text
  toolbarColumns: 'Колоне',
  toolbarColumnsLabel: 'Изаберите колоне',

  // Filters toolbar button text
  toolbarFilters: 'Филтери',
  toolbarFiltersLabel: 'Прикажи филтере',
  toolbarFiltersTooltipHide: 'Сакриј филтере',
  toolbarFiltersTooltipShow: 'Прикажи филтере',
  toolbarFiltersTooltipActive: (count) => {
    if (count === 1) {
      return `${count} активан филтер`;
    }
    if (count < 5) {
      return `${count} активна филтера`;
    }
    return `${count} активних филтера`;
  },

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Тражи…',
  toolbarQuickFilterLabel: 'тражи',
  toolbarQuickFilterDeleteIconLabel: 'Обриши',

  // Export selector toolbar button text
  toolbarExport: 'Извоз',
  toolbarExportLabel: 'Извоз',
  toolbarExportCSV: 'Преузми као CSV',
  toolbarExportPrint: 'Штампај',
  toolbarExportExcel: 'Преузми као Excel',

  // Toolbar pivot button
  // toolbarPivot: 'Pivot',

  // Toolbar AI Assistant button
  toolbarAssistant: 'AI Асистент',

  // Columns management text
  columnsManagementSearchTitle: 'Претражи',
  columnsManagementNoColumns: 'Нема колона',
  columnsManagementShowHideAllText: 'Прикажи/Сакриј све',
  columnsManagementReset: 'Ресетуј',
  columnsManagementDeleteIconLabel: 'Обриши',

  // Filter panel text
  filterPanelAddFilter: 'Додај филтер',
  filterPanelRemoveAll: 'Уклони све',
  filterPanelDeleteIconLabel: 'Обриши',
  filterPanelLogicOperator: 'Логички оператор',
  filterPanelOperator: 'Оператор',
  filterPanelOperatorAnd: 'И',
  filterPanelOperatorOr: 'Или',
  filterPanelColumns: 'Колона',
  filterPanelInputLabel: 'Вредност',
  filterPanelInputPlaceholder: 'Вредност филтера',

  // Filter operators text
  filterOperatorContains: 'садржи',
  filterOperatorDoesNotContain: 'не садржи',
  filterOperatorEquals: 'је једнак',
  filterOperatorDoesNotEqual: 'није једнак',
  filterOperatorStartsWith: 'почиње са',
  filterOperatorEndsWith: 'завршава са',
  filterOperatorIs: 'је',
  filterOperatorNot: 'није',
  filterOperatorAfter: 'је после',
  filterOperatorOnOrAfter: 'је на или после',
  filterOperatorBefore: 'је пре',
  filterOperatorOnOrBefore: 'је на или пре',
  filterOperatorIsEmpty: 'је празно',
  filterOperatorIsNotEmpty: 'није празно',
  filterOperatorIsAnyOf: 'је било који од',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Садржи',
  headerFilterOperatorDoesNotContain: 'Не садржи',
  headerFilterOperatorEquals: 'Једнако',
  headerFilterOperatorDoesNotEqual: 'Није једнако',
  headerFilterOperatorStartsWith: 'Почиње са',
  headerFilterOperatorEndsWith: 'Завршава са',
  headerFilterOperatorIs: 'Је',
  headerFilterOperatorNot: 'Није',
  headerFilterOperatorAfter: 'Је после',
  headerFilterOperatorOnOrAfter: 'Је укључено или после',
  headerFilterOperatorBefore: 'Је пре',
  headerFilterOperatorOnOrBefore: 'Је укључено или пре',
  headerFilterOperatorIsEmpty: 'Је празно',
  headerFilterOperatorIsNotEmpty: 'Није празно',
  headerFilterOperatorIsAnyOf: 'Је било који од',
  'headerFilterOperator=': 'Једнако',
  'headerFilterOperator!=': 'Није једнако',
  'headerFilterOperator>': 'Већи од',
  'headerFilterOperator>=': 'Веће или једнако',
  'headerFilterOperator<': 'Мање од',
  'headerFilterOperator<=': 'Мање од или једнако',
  headerFilterClear: 'Обриши филтер',

  // Filter values text
  filterValueAny: 'било који',
  filterValueTrue: 'тачно',
  filterValueFalse: 'нетачно',

  // Column menu text
  columnMenuLabel: 'Мени',
  columnMenuAriaLabel: (columnName: string) => `Мени колона ${columnName}`,
  columnMenuShowColumns: 'Прикажи колоне',
  columnMenuManageColumns: 'Управљање колонама',
  columnMenuFilter: 'Филтер',
  columnMenuHideColumn: 'Сакриј колону',
  columnMenuUnsort: 'Поништи сортирање',
  columnMenuSortAsc: 'Сортирај узлазно',
  columnMenuSortDesc: 'Сортирај силазно',
  // columnMenuManagePivot: 'Manage pivot',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) => {
    if (count === 1) {
      return `${count} активан филтер`;
    }
    if (count < 5) {
      return `${count} активна филтера`;
    }
    return `${count} активних филтера`;
  },
  columnHeaderFiltersLabel: 'Прикажи филтере',
  columnHeaderSortIconLabel: 'Сортирај',

  // Rows selected footer text
  footerRowSelected: (count) => {
    if (count === 1) {
      return `Изабран је ${count.toLocaleString()} ред`;
    }
    if (count < 5) {
      return `Изабрана су ${count.toLocaleString()} реда`;
    }
    return `Изабрано је ${count.toLocaleString()} редова`;
  },

  // Total row amount footer text
  footerTotalRows: 'Укупно редова:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} од ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Избор редова',
  checkboxSelectionSelectAllRows: 'Изаберите све редове',
  checkboxSelectionUnselectAllRows: 'Поништи избор свих редова',
  checkboxSelectionSelectRow: 'Изаберите ред',
  checkboxSelectionUnselectRow: 'Поништи избор реда',

  // Boolean cell text
  booleanCellTrueLabel: 'Да',
  booleanCellFalseLabel: 'Не',

  // Actions cell more text
  actionsCellMore: 'више',

  // Column pinning text
  pinToLeft: 'Закачи лево',
  pinToRight: 'Закачи десно',
  unpin: 'Откачи',

  // Tree Data
  treeDataGroupingHeaderName: 'Група',
  treeDataExpand: 'прикажи децу',
  treeDataCollapse: 'сакриј децу',

  // Grouping columns
  groupingColumnHeaderName: 'Група',
  groupColumn: (name) => `Группиши по ${name}`,
  unGroupColumn: (name) => `Прекини груписање по ${name}`,

  // Master/detail
  detailPanelToggle: 'Пребацивање панела са детаљима',
  expandDetailPanel: 'Прошири',
  collapseDetailPanel: 'Скупи',

  // Pagination
  paginationRowsPerPage: 'Редова по страници:',
  paginationDisplayedRows: ({ from, to, count, estimated }) => {
    if (!estimated) {
      return `${from}–${to} од ${count !== -1 ? count : `више него ${to}`}`;
    }
    const estimatedLabel = estimated && estimated > to ? `око ${estimated}` : `више него ${to}`;
    return `${from}–${to} од ${count !== -1 ? count : estimatedLabel}`;
  },
  paginationItemAriaLabel: (type) => {
    if (type === 'first') {
      return 'Иди на прву страницу';
    }
    if (type === 'last') {
      return 'Иди на последњу страницу';
    }
    if (type === 'next') {
      return 'Иди на следећу страницу';
    }
    // if (type === 'previous') {
    return 'Иди на претходну страницу';
  },

  // Row reordering text
  rowReorderingHeaderName: 'Промена редоследа',

  // Aggregation
  aggregationMenuItemHeader: 'Агрегација',
  aggregationFunctionLabelSum: 'износ',
  aggregationFunctionLabelAvg: 'прос',
  aggregationFunctionLabelMin: 'мин',
  aggregationFunctionLabelMax: 'макс',
  aggregationFunctionLabelSize: 'величина',

  // Pivot panel
  // pivotToggleLabel: 'Pivot',
  // pivotRows: 'Rows',
  // pivotColumns: 'Columns',
  // pivotValues: 'Values',
  // pivotCloseButton: 'Close pivot settings',
  // pivotSearchButton: 'Search fields',
  // pivotSearchControlPlaceholder: 'Search fields',
  // pivotSearchControlLabel: 'Search fields',
  // pivotSearchControlClear: 'Clear search',
  // pivotNoFields: 'No fields',
  // pivotMenuMoveUp: 'Move up',
  // pivotMenuMoveDown: 'Move down',
  // pivotMenuMoveToTop: 'Move to top',
  // pivotMenuMoveToBottom: 'Move to bottom',
  // pivotMenuRows: 'Rows',
  // pivotMenuColumns: 'Columns',
  // pivotMenuValues: 'Values',
  // pivotMenuOptions: 'Field options',
  // pivotMenuAddToRows: 'Add to Rows',
  // pivotMenuAddToColumns: 'Add to Columns',
  // pivotMenuAddToValues: 'Add to Values',
  // pivotMenuRemove: 'Remove',
  // pivotDragToRows: 'Drag here to create rows',
  // pivotDragToColumns: 'Drag here to create columns',
  // pivotDragToValues: 'Drag here to create values',
  // pivotYearColumnHeaderName: '(Year)',
  // pivotQuarterColumnHeaderName: '(Quarter)',

  // AI Assistant panel
  aiAssistantPanelTitle: 'AI Асистент',
  // aiAssistantPanelClose: 'Close AI Assistant',
  // aiAssistantPanelNewConversation: 'New conversation',
  // aiAssistantPanelConversationHistory: 'Conversation history',
  // aiAssistantPanelEmptyConversation: 'No prompt history',
  aiAssistantSuggestions: 'Предлози',

  // Prompt field
  promptFieldLabel: 'Упит',
  promptFieldPlaceholder: 'Унеси упит…',
  promptFieldPlaceholderWithRecording: 'Унеси или сними упит…',
  promptFieldPlaceholderListening: 'Слушам упит…',
  promptFieldSpeechRecognitionNotSupported: 'Препознавање говора није подржано у овом прегледачу',
  promptFieldSend: 'Пошаљи',
  promptFieldRecord: 'Сними',
  promptFieldStopRecording: 'Заустави снимање',

  // Prompt
  promptRerun: 'Пробај поново',
  // promptProcessing: 'Processing…',
  // promptAppliedChanges: 'Applied changes',

  // Prompt changes
  // promptChangeGroupDescription: (column: string) => `Group by ${column}`,
  // promptChangeAggregationLabel: (column: string, aggregation: string) => `${column} (${aggregation})`,
  // promptChangeAggregationDescription: (column: string, aggregation: string) => `Aggregate ${column} (${aggregation})`,
  // promptChangeFilterLabel: (column: string, operator: string, value: string) => {
  //   if (operator === 'is any of') {
  //     return `${column} is any of: ${value}`;
  //   }
  //   return `${column} ${operator} ${value}`;
  // },
  // promptChangeFilterDescription: (column: string, operator: string, value: string) => {
  //   if (operator === 'is any of') {
  //     return `Filter where ${column} is any of: ${value}`;
  //   }
  //   return `Filter where ${column} ${operator} ${value}`;
  // },
  // promptChangeSortDescription: (column: string, direction: string) => `Sort by ${column} (${direction})`,
  // promptChangePivotEnableLabel: 'Pivot',
  // promptChangePivotEnableDescription: 'Enable pivot',
  // promptChangePivotColumnsLabel: (count: number) => `Columns (${count})`,
  // promptChangePivotColumnsDescription: (column: string, direction: string) => `${column}${direction ? ` (${direction})` : ''}`,
  // promptChangePivotRowsLabel: (count: number) => `Rows (${count})`,
  // promptChangePivotValuesLabel: (count: number) => `Values (${count})`,
  // promptChangePivotValuesDescription: (column: string, aggregation: string) => `${column} (${aggregation})`,
};

export const srCyrlRS: Localization = getGridLocalization(srCyrlRSGrid);

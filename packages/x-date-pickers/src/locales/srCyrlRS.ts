import { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'сати',
  minutes: 'минуте',
  seconds: 'секунде',
  meridiem: 'меридијем',
};

export const srCyrlRSPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Претходни месец',
  nextMonth: 'Следећи месец',

  // View navigation
  openPreviousView: 'Отвори претходни приказ',
  openNextView: 'Отвори следећи приказ',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === 'year'
      ? 'Отворен је годишњи приказ, промени на календарски приказ'
      : 'Отворен је календарски приказ, промени на годишњи приказ',

  // DateRange labels
  start: 'Почетак',
  end: 'Крај',
  startDate: 'Почетни датум',
  startTime: 'Почетно време',
  endDate: 'Крајњи датум',
  endTime: 'Крајње време',

  // Action bar
  cancelButtonLabel: 'Откажи',
  clearButtonLabel: 'Обриши',
  okButtonLabel: 'У реду',
  todayButtonLabel: 'Данас',
  nextStepButtonLabel: 'Следећи',

  // Toolbar titles
  datePickerToolbarTitle: 'Изабери датум',
  dateTimePickerToolbarTitle: 'Изабери датум и време',
  timePickerToolbarTitle: 'Изабери време',
  dateRangePickerToolbarTitle: 'Изабери временски опсег',
  // timeRangePickerToolbarTitle: 'Select time range',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    `Изабери ${timeViews[view] ?? view}. ${!formattedTime ? 'Време није изабрано' : `Изабрано време је ${formattedTime}`}`,
  hoursClockNumberText: (hours) => {
    let suffix = 'сати';
    if (Number(hours) === 1) {
      suffix = 'сат';
    } else if (Number(hours) < 5) {
      suffix = 'сата';
    }
    return `${hours} ${suffix}`;
  },
  minutesClockNumberText: (minutes) =>
    `${minutes} ${Number(minutes) > 1 && Number(minutes) < 5 ? 'минуте' : 'минута'}`,
  secondsClockNumberText: (seconds) => {
    let suffix = 'секунди';
    if (Number(seconds) === 1) {
      suffix = 'секунда';
    } else if (Number(seconds) < 5) {
      suffix = 'секунде';
    }
    return `${seconds} ${suffix}`;
  },

  // Digital clock labels
  selectViewText: (view) => `Изабери ${timeViews[view]}`,

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Број недеље',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => `Недеља ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    formattedDate ? `Изабери датум, изабрани датум је ${formattedDate}` : 'Изабери датум',
  openTimePickerDialogue: (formattedTime) =>
    formattedTime ? `Изабери време, изабрано време је ${formattedTime}` : 'Изабери време',
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Обриши',

  // Table labels
  timeTableLabel: 'Изабери време',
  dateTableLabel: 'Изабери датум',

  // Field section placeholders
  fieldYearPlaceholder: (params) => 'Г'.repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => (params.contentType === 'letter' ? 'ММММ' : 'ММ'),
  fieldDayPlaceholder: () => 'ДД',
  fieldWeekDayPlaceholder: (params) => (params.contentType === 'letter' ? 'ЕЕЕЕ' : 'ЕЕ'),
  fieldHoursPlaceholder: () => 'хх',
  fieldMinutesPlaceholder: () => 'мм',
  fieldSecondsPlaceholder: () => 'сс',
  fieldMeridiemPlaceholder: () => 'аа',

  // View names
  year: 'Година',
  month: 'Месец',
  day: 'Дан',
  weekDay: 'Дан у недељи',
  hours: 'Сати',
  minutes: 'Минуте',
  seconds: 'Секунде',
  meridiem: 'Меридијем',

  // Common
  empty: 'Испразни',
};

export const srCyrlRS = getPickersLocalization(srCyrlRSPickers);

import * as React from 'react';

export interface DatePickerProps extends React.HTMLAttributes<HTMLElement> {
  defaultValue?: string;
  value?: string;
  required?: Boolean;
  className?: string;
  style?: Object;
  minDate?: string;
  maxDate?: string;
  cellPadding?: string;
  autoComplete?: string;
  placeholder?: string;
  dayLabels?: string[];
  monthLabels?: string[];
  onChange?: any;
  onClear?: any;
  onBlur?: any;
  onFocus?: any;
  autoFocus?: Boolean;
  disabled?: Boolean;
  weekStartsOn?: number;
  clearButtonElement?: string| Object;
  showClearButton?: Boolean;
  previousButtonElement?: string| Object;
  nextButtonElement?: string| Object;
  calendarPlacement?: string| any;
  dateFormat?: string; // 'MM/DD/YYYY'; 'DD/MM/YYYY'; 'YYYY/MM/DD'; 'DD-MM-YYYY'
  size?: string;
  calendarContainer?: Object;
  id?: string;
  name?: string;
  showTodayButton?: Boolean;
  todayButtonLabel?: string;
  customControl?: Object;
  roundedCorners?: Boolean;
  showWeeks?: Boolean;
  children?: any[]| any;
  onInvalid?: any;
  noValidate?: Boolean;
  valid?: Boolean;
  invalid?: Boolean;
  customInputGroup?: Object;
  inputRef?: any;
  disabledWeekDays?: number[];
}

declare class DatePicker extends React.Component<DatePickerProps> {}
export default DatePicker;

import * as React from 'react';

export interface DatePickerCalendarProps extends React.HTMLAttributes<HTMLElement> {
    selectedDate?: Object;
    displayDate: Object;
    minDate?: string;
    maxDate?: string;
    onChange: any;
    dayLabels: string[];
    cellPadding: string;
    weekStartsOn?: number;
    showTodayButton?: Boolean;
    todayButtonLabel?: string;
    roundedCorners?: Boolean;
    showWeeks?: Boolean;
    disabledWeekDays?: number[];
}

declare class DatePickerCalendar extends React.Component<DatePickerCalendarProps> {}
export default DatePickerCalendar;

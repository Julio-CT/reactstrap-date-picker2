import * as React from 'react';

export interface DatePickerHeaderProps extends React.HTMLAttributes<HTMLElement> {
    displayDate: Object;
    minDate?: string;
    maxDate?: string;
    onChange: any;
    monthLabels: string[];
    previousButtonElement:
      string | Object;
    nextButtonElement:
    string | Object;
}

declare class DatePickerHeader extends React.Component<DatePickerHeaderProps> {}
export default DatePickerHeader;

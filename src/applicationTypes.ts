export type CheckBox = {
    label: string;
    checked: boolean;
    justText: boolean;
};

export type CheckBoxList = {
    header: string;
    checks: CheckBox[];
};

export type ApplicationData = {
    items: CheckBoxList[],
};

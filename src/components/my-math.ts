interface LabelledValue {
    label: Number;
    a: Number;
}

export function printLabel(labelledObj: LabelledValue) {
    let z = +labelledObj.label + +labelledObj.a;
    console.log(z);
}


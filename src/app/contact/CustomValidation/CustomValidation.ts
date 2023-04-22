import { AbstractControl } from "@angular/forms";
export function PassValidationv(control: AbstractControl) {

    if (control && (control.value != null || control.value != undefined)) {
        let cnfpassvalue = control.value;
        let passvalueGet = control.root.get('pass');
        if (passvalueGet) {
            const passvaluestore = passvalueGet.value;
            if (passvaluestore != cnfpassvalue) {
                return {
                    isError: true
                };
            }
        }
    }
    return null;
}

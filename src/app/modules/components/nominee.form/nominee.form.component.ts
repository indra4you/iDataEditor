import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {
    HelperService,
    NomineeModel,
} from '@app/services';

@Component({
    selector: 'nominee-form',
    templateUrl: './nominee.form.component.html'
})
export class NomineeFormComponent implements OnInit, AfterViewInit {
    public readonly _noOfFields: number[] = [...Array(4).keys()];

    @Output('onClose')
    public onClose: EventEmitter<NomineeModel | null> = new EventEmitter();

    @ViewChild('focusOn')
    public focusOn: ElementRef<HTMLInputElement>;

    public mainFormGroup: FormGroup;
    public isLoading: boolean = true;

    constructor(
        private readonly _formBuilder: FormBuilder,
    ) {
    }

    public ngOnInit(
    ): void {
        this.setupFormGroup();
    }

    public ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.isLoading = false;

            setTimeout(() => {
                this.focusOn.nativeElement.focus();
            }, 500);
        }, 500);
    }

    private setupFormGroup(
    ): void {
        this.mainFormGroup = this._formBuilder.group({
            firstName: new FormControl('', [Validators.required]),
            middleName: new FormControl('', []),
            lastName: new FormControl('', [Validators.required]),
            share: new FormControl('', [Validators.required, Validators.min(0.01), Validators.max(100.00)]),
        });
    }

    public get mainFormGroupControls(
    ): { [key: string]: AbstractControl } {
        return this.mainFormGroup.controls;
    }

    public onCancelClicked(
    ): void {
        this.onClose.emit(null);
    }

    public onSubmitClicked(
    ): void {
        const nominee: NomineeModel = {
            name: {
                first: HelperService.toTrim(this.mainFormGroupControls.firstName.value),
                middle: HelperService.toTrimOrNull(this.mainFormGroupControls.middleName.value),
                last: HelperService.toTrim(this.mainFormGroupControls.lastName.value),
            },
            share: this.mainFormGroupControls.share.value,
        };

        this.onClose.emit(nominee);
    }
}
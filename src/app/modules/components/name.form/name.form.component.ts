import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {
    HelperService,
    NameModel,
} from '@app/services';

@Component({
    selector: 'name-form',
    templateUrl: './name.form.component.html'
})
export class NameFormComponent implements OnInit, AfterViewInit {
    public readonly _noOfFields: number[] = [...Array(3).keys()];

    @Output('onClose')
    public onClose: EventEmitter<NameModel | null> = new EventEmitter();

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
        const name: NameModel = {
            first: HelperService.toTrim(this.mainFormGroupControls.firstName.value),
            middle: HelperService.toTrimOrNull(this.mainFormGroupControls.middleName.value),
            last: HelperService.toTrim(this.mainFormGroupControls.lastName.value),
        }

        this.onClose.emit(name);
    }
}
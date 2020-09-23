import { Component, Injector, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '../../../../shared/app-component-base';

@Component({
    templateUrl: './create-education-dialog.component.html',
})
export class CreateEducationComponent extends AppComponentBase implements OnInit {

    degrees: any[] = [
        {label: 'Master'}
    ]

    constructor(
        injector: Injector,
        public bsModalRef: BsModalRef
    ) {
        super(injector);
     }

    ngOnInit(): void { }
}

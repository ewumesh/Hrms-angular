import { Component, Injector, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '../../../../shared/app-component-base';

@Component({
    templateUrl: './create-department-dialog.component.html',
})
export class CreateDepartmentComponent extends AppComponentBase implements OnInit {

    genders: any[] = [
        {label: 'Male'},
        {label: 'Female'}
    ]
    
    constructor(
        injector: Injector,
        public bsModalRef: BsModalRef
    ) {
        super(injector);
     }

    ngOnInit(): void { }
}

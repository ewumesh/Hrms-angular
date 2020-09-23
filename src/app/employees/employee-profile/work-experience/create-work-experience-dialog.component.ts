import { Component, OnInit, Injector } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    templateUrl: './create-work-experience-dialog.component.html',
})
export class CreateWorkExperienceComponent extends AppComponentBase  implements OnInit {

    jobTitles: any[] = [
        {label: 'Graphic Designer'}
    ]

    constructor(
        injector: Injector,
        public bsModalRef: BsModalRef
    ) { 
        super(injector);
    }

    ngOnInit(): void { }
}

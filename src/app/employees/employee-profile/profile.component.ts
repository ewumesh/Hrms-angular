import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateWorkExperienceComponent } from './work-experience/create-work-experience-dialog.component';
import { CreateEducationComponent } from './education/create-education-dialog.component';
import { CreateDepartmentComponent } from './department/create-department-dialog.component';

@Component({
    templateUrl: './profile.component.html'
})
export class EmployeeProfileComponent implements OnInit {
    id: number

    constructor(
        private _modalService: BsModalService
    ) { }

    basicInfo: boolean = true;
    work: boolean = true;
    personalDetail: boolean = true;

    // Forms Dropdowns
    departments: any[] = [
        { label: 'Sales', value: null },
        { label: 'Marketing', value: null },
        { label: 'IT', value: null },
        { label: 'Finance', value: null },
    ]

    jobTitles: any[] = [
        { label: 'Web Designer' },
        { label: 'Graphics Designer' },
    ];

    countries: any[] = [
        { label: 'Nepal' },
        { label: 'India' },
    ];

    gender: any[] = [
        { label: 'Male' },
        { label: 'Female' },
    ]
    maritalStatus: any[] = [
        { label: 'Unmarried' },
        { label: 'Married' },
    ]
    // End Forms Dropdowns

    // Tables
    experiences: any[] = [
        {
            sn: 1, previousCompany: 'ABC company limited', jobDesc: 'Not available',
            jobTitle: 'Designer', startDate: '2020', endDate: '2025'
        }
    ];
    education: any[] = [
        {
            sn: 1, schoolName: 'Kathmandu Unified city', degree: 'Bachelor of Arts', field: 'Designing',
            year: '2025', intrest: 'Specialized in image editing'
        }
    ];
    dependents: any[] = [
        { sn: 1, dependentName: 'Ramesh Adhikari', gender: 'Male', relationship: 'Son', dob: '1998' }
    ];


    ngOnInit() {
    }

    // Edit inline toggle
    editBasicInfo() {
        this.basicInfo = !this.basicInfo;
    }

    editWork() {
        this.work = !this.work;
    }

    editPersonalDetail() {
        this.personalDetail = !this.personalDetail;
    }
    // End edit inline toggle


    // For Work experiences
    createWorkExperience() {
        this.showCreateOrEditWorkExperienceDialog();
    }

    editWorkExperience(d: any) {
        this.showCreateOrEditWorkExperienceDialog(d?.id);
    }

    showCreateOrEditWorkExperienceDialog(id?: number): void {
        let createOrEditWorkExperienceDialog: BsModalRef;
        if (!id) {
            createOrEditWorkExperienceDialog = this._modalService.show(
                CreateWorkExperienceComponent,
                {
                    class: 'modal-md',
                }
            );
        }

        else {
            createOrEditWorkExperienceDialog = this._modalService.show(
                CreateWorkExperienceComponent,
                {
                    class: 'modal-md',
                    initialState: {
                        id: id,
                    },
                }
            );
        }

        // createOrEditEducationDialog.content.onSave.subscribe(() => {
        //   this.refresh();
        // });

    }

    deleteWorkExperience(id?: number) {

    }

    // For Education
    createEducation() {
        this.showCreateOrEditEducationDialog();
    }

    editEducation(d: any) {
        this.showCreateOrEditEducationDialog(d?.id);
    }

    showCreateOrEditEducationDialog(id?: number): void {
        let createOrEditEducationDialog: BsModalRef;
        if (!id) {
            createOrEditEducationDialog = this._modalService.show(
                CreateEducationComponent,
                {
                    class: 'modal-md',
                }
            );
        }

        else {
            createOrEditEducationDialog = this._modalService.show(
                CreateEducationComponent,
                {
                    class: 'modal-md',
                    initialState: {
                        id: id,
                    },
                }
            );
        }

        // createOrEditEducationDialog.content.onSave.subscribe(() => {
        //   this.refresh();
        // });

    }

    deleteEducation(id?: number) {

    }

    // For department
    createDepartment() {
        this.showCreateOrEditDepartmentDialog();
    }

    editDepartment(d: any) {
        this.showCreateOrEditDepartmentDialog(d?.id);
    }

    showCreateOrEditDepartmentDialog(id?: number): void {
        let createOrEditDepartmentDialog: BsModalRef;
        if (!id) {
            createOrEditDepartmentDialog = this._modalService.show(
                CreateDepartmentComponent,
                {
                    class: 'modal-md',
                }
            );
        }

        else {
            createOrEditDepartmentDialog = this._modalService.show(
                CreateDepartmentComponent,
                {
                    class: 'modal-md',
                    initialState: {
                        id: id,
                    },
                }
            );
        }

        // createOrEditDepartmentDialog.content.onSave.subscribe(() => {
        //   this.refresh();
        // });
    }

    deleteDepartment(id?: number) {

    }

    update() {

    }

}

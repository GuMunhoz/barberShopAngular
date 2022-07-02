import { Component, ComponentFactoryResolver, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef,Type, ChangeDetectorRef } from '@angular/core';
import { GenericModalModel } from '../model/generic-modal.model';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {
  // protected isLoading: boolean = false;
  @ViewChild("modalContainerComplex", { read: ViewContainerRef }) containerComplex;
  public componentComplexInstance = null;
  @ViewChild('btnDelete') deleteButton: ElementRef<HTMLElement>;
  @ViewChild('btnCancel') cancelButton: ElementRef<HTMLElement>;
  @ViewChild('btnSave') saveButton: ElementRef<HTMLElement>;
  @ViewChild('btnConfirm') confirmButton: ElementRef<HTMLElement>;
  constructor(
    private cdRef: ChangeDetectorRef  ,
    public dialogRef: MatDialogRef<GenericModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GenericModalModel,
    private factoryResolver: ComponentFactoryResolver,
  ) { }
  ngAfterViewInit(): void {

    if (this.data.content.complex.component) {
      const t: Type<any> = this.data.content.complex.component;
      let factory = this.factoryResolver.resolveComponentFactory(t);
      let ref = this.containerComplex.createComponent(factory);
      ref.instance.data = this.data.content.complex.params;
      if (ref.instance.hasOwnProperty('dataModal')) {
        ref.instance.dataModal = this;
      }
      this.componentComplexInstance = ref.instance;
      this.cdRef.detectChanges();
    }
  }
  ngOnInit(): void {
  }
  public closeModal(act = null): void {
    // this.isLoading = true;

    if (act && this.data.async.action && typeof this.data.async.action === "function") {
      var setLoad = setInterval(() => {
        this.data.async.action()
        .then((data) => {
          // this.isLoading = false;
          this.dialogRef.close(data);
        })
        .catch((e) => {
          // this.isLoading = false;
        });
          clearInterval(setLoad);
      }, 0);
    }
    else {
      this.dialogRef.close(act);
    }
  }
}

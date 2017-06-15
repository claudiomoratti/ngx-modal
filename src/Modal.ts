import {Component, Input, Output, EventEmitter, ElementRef, ViewChild} from "@angular/core";

@Component({
    selector: "modal-header",
    template: `<ng-content></ng-content>`
})
export class ModalHeader {

}

@Component({
    selector: "modal-content",
    template: `<ng-content></ng-content>`
})
export class ModalContent {

}

@Component({
    selector: "modal-footer",
    template: `<ng-content></ng-content>`
})
export class ModalFooter {

}

@Component({
    selector: "modal",
    template: `
<div class="modal" 
     tabindex="-1"
     role="dialog"
     #modalRoot
     (keydown.esc)="closeOnEscape ? close() : 0"
     [ngClass]="{ in: isOpened, fade: isOpened }"
     [ngStyle]="{ display: isOpened ? 'block' : 'none' }"
     (click)="closeOnOutsideClick ? close() : 0">
    <div [class]="'modal-dialog ' + modalClass" (click)="preventClosing($event)">
        <div class="modal-content" tabindex="0" *ngIf="isOpened">
            <div class="modal-header">
                <button *ngIf="!hideCloseButton" type="button" class="close" data-dismiss="modal" [attr.aria-label]="cancelButtonLabel || 'Close'" (click)="close()"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" *ngIf="title">{{ title }}</h4>
                <ng-content select="modal-header"></ng-content>
            </div>
            <div class="modal-body">
                <ng-content select="modal-content"></ng-content>
            </div>
            <div class="modal-footer">
                <ng-content select="modal-footer"></ng-content>
            </div>
        </div>
    </div>
</div>
`,
styles: [`
/*Modal Content*/
/deep/ .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}
/deep/ .modal-backdrop.in {
    filter: alpha(opacity=50);
    opacity: .5;
}

/deep/ .modal-button {
  background: #025228;
  border: none;
  border-radius: 2px;
  color: #fff;
}

/deep/ .modal-button-cancel {
  float: right;
  margin-left: -20px;
  margin-top: -2%;
  margin-right: -2%;
  border-bottom: 1px solid #025228;
  color: #025228;
  font-size: 12px;
  cursor: pointer;
  cursor: hand;
  font-family: "LatoWebLight";
}

/deep/ button.modal-button-done {
  opacity: 1;
  border: none;
  position: absolute;
  top: 91%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:100%;
  height:20%;
  padding: 0px;
  border-radius: 0px 0px 5px 5px;
  background-color: #025228;
  color: white;
  outline: none;
  font-family: "LatoWebLight";
}

/deep/ button.modal-button-done:hover {
  background-color: #017a3a;
  cursor: pointer;
  cursor: hand;
}

/deep/ .modal-title {
  padding-bottom: 0px;
  margin-top: 6%;
  margin-bottom: 6%;
  color: #025228;
  text-align: center;
  width: 100%;
}

/deep/ div.modal-input {
  position: absolute;
  width:100%;
  height:20%;
  max-width: 76%;
  float: left;
  margin-left: 18%;
}

/deep/ .modal-input input {
  left: 55%;
  width:82%;
  height:20px;
  border: 1px solid black;
  border-bottom: 1px solid black;
  color: black;
  font-size: 16px;
  padding: 5px;
  outline: none;
  font-family: "LatoWeb";
  margin-bottom: 10px;
}

/deep/ .modal-input input::placeholder {
  color: #AFC6AF;
}

/deep/ label.modal-input-label {
  left: 55%;
  color: black;
  font-size: 18px;
  width: 82%;
  min-width: 20%;
  margin-bottom: 1px;
  display: block;
  font-family: "LatoWebLight";
}

/deep/ .modal-open {
  overflow: hidden;
}

/deep/ .modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
/*.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
       -o-transition:      -o-transform .3s ease-out;
          transition:         transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
      -ms-transform: translate(0, -25%);
       -o-transform: translate(0, -25%);
          transform: translate(0, -25%);
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
       -o-transform: translate(0, 0);
          transform: translate(0, 0);
}*/
/deep/ .modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
/deep/ .modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
/deep/ .modal-content {
  /*position: relative;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1041;
  margin: 17% auto;
  
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: 0;
  -webkit-box-shadow: 0 0px 50px rgba(0, 0, 0, .5);
          box-shadow: 0 0px 50px rgba(0, 0, 0, .5);
}
/deep/ .modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
/deep/ .modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}

/deep/ .in{
  background :rgba(0,0,0,0.6);
}
/deep/ .modal-header {
  padding: 15px;
  /*border-bottom: 1px solid #e5e5e5;*/
}
/deep/ .modal-header .close {
  margin-top: -2px;
}
/deep/ .modal-title {
  margin: 0;
  line-height: 1.42857143;
}
/*.modal-content {
  position: relative;
  padding: 15px;
}*/
/deep/ .modal-footer {
  padding: 15px;
  text-align: right;
  /*border-top: 1px solid #e5e5e5;*/
}
/deep/ .modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}
/deep/ .modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
/deep/ .modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
/deep/ .modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
/*@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
  }
  .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}*/
`]
})

// <button *ngIf="cancelButtonLabel" type="button" class="btn btn-default" data-dismiss="modal" (click)="close()">{{ cancelButtonLabel }}</button>
// <button *ngIf="submitButtonLabel" type="button" class="btn btn-primary" (click)="onSubmit.emit(undefined)">{{ submitButtonLabel }}</button>

export class Modal {

    // -------------------------------------------------------------------------
    // Inputs
    // -------------------------------------------------------------------------

    @Input()
    public modalClass: string;

    @Input()
    public closeOnEscape: boolean = true;

    @Input()
    public closeOnOutsideClick: boolean = true;

    @Input()
    public title: string;

    @Input()
    public hideCloseButton = false;

    @Input()
    public cancelButtonLabel: string;

    @Input()
    public submitButtonLabel: string;

    @Input()
    public backdrop: boolean = true;

    // -------------------------------------------------------------------------
    // Outputs
    // -------------------------------------------------------------------------

    @Output()
    public onOpen = new EventEmitter(false);

    @Output()
    public onClose = new EventEmitter(false);

    @Output()
    public onSubmit = new EventEmitter(false);

    // -------------------------------------------------------------------------
    // Public properties
    // -------------------------------------------------------------------------

    public isOpened = false;

    // -------------------------------------------------------------------------
    // Private properties
    // -------------------------------------------------------------------------

    @ViewChild("modalRoot")
    public modalRoot: ElementRef;

    private backdropElement: HTMLElement;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor() {
        this.createBackDrop();
    }

    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------

    ngOnDestroy() {
        document.body.className = document.body.className.replace(/modal-open\b/, "");
        if (this.backdropElement && this.backdropElement.parentNode === document.body)
            document.body.removeChild(this.backdropElement);
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    open(...args: any[]) {
        if (this.isOpened)
            return;
        
        this.isOpened = true;
        this.onOpen.emit(args);
        document.body.appendChild(this.backdropElement);
        window.setTimeout(() => this.modalRoot.nativeElement.focus(), 0);
        document.body.className += " modal-open";
    }

    close(...args: any[]) {
        if (!this.isOpened)
            return;

        this.isOpened = false;
        this.onClose.emit(args);
        document.body.removeChild(this.backdropElement);
        document.body.className = document.body.className.replace(/modal-open\b/, "");
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    public preventClosing(event: MouseEvent) {
        event.stopPropagation();
    }

    private createBackDrop() {
        this.backdropElement = document.createElement("div");
        this.backdropElement.classList.add("fade");
        this.backdropElement.classList.add("in");
        if(this.backdrop) {
            this.backdropElement.classList.add("modal-backdrop");
        }
    }

}

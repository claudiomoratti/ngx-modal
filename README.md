# ngx-modal

Open modal window (dialog box) for your angular2 applications.

> This is a forked repository, forked from pleerock/ngx-modal

## Latest import headers

In your component.ts files where you need to access the "Modal" object, add the following line at the top:
```typescript
import { Modal } from 'ngx-modal/build/package/';
```

In your app.module.ts file, here is an example of adding 'ModalModule' that you'll need:
```typescript
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './controllers/login.component';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';

import { ModalModule } from 'ngx-modal/build/package/';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

## Latest html example

```html
<modal #passwordModal
        title=""
        modalClass="changePasswordModal"
        [hideCloseButton]="true"
        [closeOnEscape]="true"
        [closeOnOutsideClick]="true"
        (onOpen)="passwordModalOpen()"
        (onClose)="passwordModalClose()">
    <modal-header>
      <a class="modal-button-cancel" (click)="passwordModal.close()">Cancel</a>
      <h1 class="modal-title">Change Password</h1>      
    </modal-header>
    <modal-content>
      <div class="changePasswordModal">
        <div class="modal-input">
          <input #input1 [(ngModel)]="oldPassword" type="password" placeholder="Old Password" autofocus (keydown)="keyDownFunction($event,passwordModal)" />
          <input #input2 [(ngModel)]="newPassword" type="password" placeholder="New Password" (ngModelChange)="blankOutError()" (keydown)="keyDownFunction($event,passwordModal)" />
          <input #input3 [(ngModel)]="retypePassword" type="password" placeholder="Retype Password" (ngModelChange)="checkRetypePassword()" (keydown)="keyDownFunction($event,passwordModal)" />
          <h5 class="passwordError">{{passwordError}}</h5>
        </div>
        <button class="modal-button-done" (click)="submitChangePassword(passwordModal)">Done</button>
      </div>
    </modal-content>
    <!-- <modal-footer>
    </modal-footer>       -->
</modal>
```

## Installation

1. Install npm module:
    
    `npm install https://github.com/adamitchell/ngx-modal.git --save`

2. If you are using system.js you may want to add this into `map` and `package` config:

    ```json
    {
        "map": {
            "ngx-modal": "node_modules/ngx-modal"
        },
        "packages": {
            "ngx-modal": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## Simple Modal

Import `ModalModule` in your app. Then you can use `modal` component:

```html
<modal  title="Modal title"
        cancelButtonLabel="cancel"
        submitButtonLabel="submit"
        modalClass="modal-lg modal-sm any-other-css-class"
        [hideCloseButton]="true|false"
        [closeOnEscape]="true|false"
        [closeOnOutsideClick]="true|false"
        (onOpen)="actionOnOpen()"
        (onClose)="actionOnClose()"
        (onSubmit)="actionOnSubmit()">

    <modal-header>
        Modal header content goes there.
    </modal-header>

    <modal-content>
        Modal body content goes there.
    </modal-content>

    <modal-footer>
        Modal footer content goes there.
    </modal-footer>
        
</modal>
```

## Router Modal

First, import `ModalModule` in your app.
If you want your modals to be opened within routes,
then `<route-modal></route-modal>` should be used instead.

## Sample

```typescript
import {Component} from "@angular/core";
import {ModalModule} from "ngx-modal";

@Component({
    selector: "app",
    template: `
<div class="row">
    <button (click)="myModal.open()">open my modal</button>
    <modal #myModal>
        <modal-header>
            <h1>Modal header</h1>
        </modal-header>
        <modal-content>
            Hello Modal!
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="myModal.close()">close</button>
        </modal-footer>
    </modal>
</div>
    `
})
export class App {

}

@NgModule({
    imports: [
        // ...
        ModalModule
    ],
    declarations: [
        App
    ],
    bootstrap: [
        App
    ]
})
export class AppModule {

}
```

## More samples

```html
<!-- first modal: modal with custom header, content and footer -->
<div class="row">
    <button (click)="firstModal.open()">modal with custom header content and footer</button>
    <modal #firstModal>
        <modal-header>
            <h1>I am first modal</h1>
        </modal-header>
        <modal-content>
            This modal has its own header, content and footer.
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="firstModal.close()">okay!</button>
        </modal-footer>
    </modal>
</div>

<!-- second modal: disable close button -->
<div class="row">
    <button (click)="secondModal.open()">modal without close button</button>
    <modal #secondModal [hideCloseButton]="true">
        <modal-header>
            <h1>I am second modal</h1>
        </modal-header>
        <modal-content>
            This modal does not have close button.
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="secondModal.close()">okay!</button>
        </modal-footer>
    </modal>
</div>

<!-- third modal: disable close button -->
<div class="row">
    <button (click)="thirdModal.open()">modal that cannot be simply closed</button>
    <modal #thirdModal [closeOnEscape]="false" [closeOnOutsideClick]="false">
        <modal-header>
            <h1>I am third modal</h1>
        </modal-header>
        <modal-content>
            You cannot close this modal by pressing "ESC" button or clicking outside of the modal.
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="thirdModal.close()">okay!</button>
        </modal-footer>
    </modal>
</div>

<!-- forth modal: this modal has default title and cancle button -->
<div class="row">
    <button (click)="forthModal.open()">modal that has title and cancel button</button>
    <modal #forthModal title="I am forth modal" cancelButtonLabel="close it">
        <modal-content>
            You can simply use "title" attribute to provide a modal default header.<br/>
            Also you can add default cancel button by providing a label to it.
        </modal-content>
    </modal>
</div>

<!-- fifth modal: this modal uses extra "large class" -->
<div class="row">
    <button (click)="fifthModal.open()">large modal</button>
    <modal #fifthModal title="I am fifth modal" cancelButtonLabel="close it" modalClass="modal-lg">
        <modal-content>
            Very large modal.
        </modal-content>
    </modal>
</div>

<!-- sixth modal: this modal uses extra "small class" -->
<div class="row">
    <button (click)="sixthModal.open()">small modal</button>
    <modal #sixthModal title="I am sixth modal" cancelButtonLabel="close it" modalClass="modal-sm">
        <modal-content>
            Very small modal.
        </modal-content>
    </modal>
</div>

<!-- seventh modal: this modal can listen close event -->
<div class="row">
    <button (click)="seventhModal.open()">it opens first modal after you close it</button>
    <modal #seventhModal title="I am seventh modal" cancelButtonLabel="close it" (onClose)="firstModal.open()">
        <modal-content>
            Now try to close it and it will open you first modal.
        </modal-content>
    </modal>
</div>

<!-- eighth modal: this modal can listen open event -->
<div class="row">
    <button (click)="eighthModal.open()">it opens first modal right after you open it</button>
    <modal #eighthModal title="I am eighth modal" cancelButtonLabel="close it" (onOpen)="firstModal.open()">
        <modal-content>
            This modal opened first modal right after you opened it.
        </modal-content>
    </modal>
</div>

<!-- ninth modal: this modal can do something after you click submit button -->
<div class="row">
    <button (click)="ninthModal.open()">it opens first modal after you click submit button</button>
    <modal #ninthModal title="I am ninth modal" submitButtonLabel="submit" (onSubmit)="firstModal.open()">
        <modal-content>
            This modal has a submit button with your custom label. Also it can make an action after you
            click that submit button. Here it will open you first modal after you click submit.
        </modal-content>
    </modal>
</div>
```

Take a look on samples in [./sample](https://github.com/pleerock/ngx-modal/tree/master/sample) for more examples of
usages.

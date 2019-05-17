import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[BsModalService]
})
export class SignUpComponent implements OnInit {
  // Modal reference
  modalRef: BsModalRef;

  // Configuration for modal
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  @Input()
  public displayModal: string;

  @Output()
  public modalClosed: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("signup") signUpModal: any;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  ngOnChanges() {
    if (this.displayModal && this.displayModal == 'Open modal') {
      this.modalRef = this.modalService.show(this.signUpModal, this.config);
    }
  }


  /**
   * Function will close sign up modal
   **/
  closeSignUpModal() {
    this.modalClosed.emit('SignUp modal closed');
    this.modalRef.hide();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  submit(form: any) {
    var Name = form.Name;
    console.log(Name);

    var Email = form.Email;
    console.log(Email);

    var comment = form.comment;
    console.log(comment);
  }
}

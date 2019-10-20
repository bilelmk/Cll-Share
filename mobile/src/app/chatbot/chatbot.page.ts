import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
        .watchQuery({
          query: gql`
          {
            hello
          }
        `,
        })
        .valueChanges.subscribe(result => {
      console.log(result) ;
    });
  }

}

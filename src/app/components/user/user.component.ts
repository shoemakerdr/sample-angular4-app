import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string
  age:number
  email:string
  address:Address
  hobbies:string[]
  hash:string

  constructor () {}

  ngOnInit () {
    this.name = 'Derek Shoemaker'
    this.age = 30
    this.email = 'derek@email.com'
    this.address = {
      street: '123 Lynyrd Skynyrd St',
      city: 'Jacksonville',
      state: 'FL',
    }
    this.hobbies = ['Write code', 'Do improv','Listen to Fiona Apple']
    this.hash = this.newHash()
  }

  onClick () {
    this.hash = this.newHash()
  }

  newHash () {
    return Number(Math.random()).toString(16).slice(2)
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby)
    return false
  }

  deleteHobby (hobby) {
    const index = this.hobbies.indexOf(hobby)
    this.hobbies.splice(index, 1)
  }
}

interface Address {
  street:string,
  city:string,
  state:string,
}

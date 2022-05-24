import { NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  
   show:boolean=false;
  constructor() {}

  ngOnInit(): void {
  }
  @HostListener('click')
  onclick(){
    alert("Element clicked..");
  }

}

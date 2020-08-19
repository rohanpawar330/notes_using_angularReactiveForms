import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // variables
  filteredItems: any = [];
  show: any = 0;
  searchText: any;
  form: FormGroup;
  value = this.fb.group({
    text: [""],
    time: [new Date()]
  });
  searchBtn: boolean = true;

  /**
   * imported form builder
   * @param fb formbuilder instance
   */
  constructor(private fb: FormBuilder) { }

  /**
   * it is called when ever the page is loaded
   * so by default if data is available in localstorage it'll fetch, 
   * otherwise a new note is shown
   */
  ngOnInit() {
    this.form = this.fb.group({
      notes: this.fb.array([])
    });
    let allNotesData = JSON.parse(window.localStorage.getItem('allNotes'));
    console.log(allNotesData)
    if (allNotesData) {
      if (allNotesData.lenth > 0)
        this.addNotes();
      else {
        const form = this.form.get("notes") as FormArray;
        allNotesData.forEach(element => {
          let val = this.fb.group({
            text: element.text,
            time: element.time
          });
          form.push(val);
        });
      }
    } else {
      this.addNotes();
    }
  }

  /**
   * function to add a new note with timestamp
   */
  addNotes() {
    let newDate: any = new Date();
    const val = this.fb.group({
      text: [""],
      time: [newDate]
    });
    // console.log(val)
    const form = this.form.get("notes") as FormArray;
    form.push(val);
    // console.log(form)
  }

  /**
   * remove the note with respective index no.
   * @param index contain the index no of removed note
   */
  removeNotes(index) {
    const form = this.form.get("notes") as FormArray;
    form.removeAt(index);
    console.log(form.controls);

    if (form.controls.length == 0) {
      setTimeout(() => {
        this.addNotes();
      }, 100);
    } else { this.makeVisible(index - 1) }
  }

  /**
   * to show the note typing dynamically, when user type
   * @param index index no. of active note
   * @param item data on active note
   */
  trackBynoteFn(index: any, item: any) {
    return index;
  }

  /**
   * show the perticular note when clicked on note from the notes list
   * @param i index of note from notes list
   */
  makeVisible(i) {
    this.show = i;
    console.log(i);
    // console.log(window.screen.height, window.screen.width)
    if (window.screen.width < 900)
      this._closeSideNav();
  }

  /**
   * search logic 
   * @param value searched text
   */
  filterItem(value) {
    if (!value) {
      console.log(value)
    }
    // this.filteredItems = Object.assign([], this.items).filter(
    //   item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    // )
  }

  /**
   * toggle search button
   */
  _searchBtn() {
    this.searchBtn = !this.searchBtn
  }

  /**
   * open side nav when used on phone
   */
  _openSideNav() {
    let overLay: any = document.querySelector('.over-lay')
    let sideNav: any = document.querySelector("#mySidebar");
    overLay.style.cssText = 'display:block;width:100%;height:100%;position:absolute;z-index:900;background:#33333369;top:0'
    sideNav.style.cssText = 'display: block;width: 80%;position: absolute;top: 0;left: 0;z-index: 999;height: 100vh;background: #3f51b5; '

  }

  /**
   * close side nav when used on phone
   */
  _closeSideNav() {
    let overLay: any = document.querySelector('.over-lay');
    let sideNav: any = document.querySelector("#mySidebar");
    overLay.style.display = "none";
    sideNav.style.display = "none";

  }

  /**
   * save data of all notes to localstorage
   */
  _saveAllNotes() {
    const form = this.form.get("notes") as FormArray;
    console.log(JSON.stringify(form.value))
    window.localStorage.setItem('allNotes', JSON.stringify(form.value))
  }

}
